import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  progress: ChapterProgress[];
  createdAt: string;
}

interface ChapterProgress {
  chapterId: string;
  completed: boolean;
  quizScore: number | null;
  quizCompleted: boolean;
  lastAccessed: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  updateProgress: (chapterId: string, quizScore?: number) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('quantum_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const saveUser = (userData: User) => {
    localStorage.setItem('quantum_user', JSON.stringify(userData));
    setUser(userData);
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const users = JSON.parse(localStorage.getItem('quantum_users') || '[]');
    const foundUser = users.find((u: User & { password: string }) =>
      u.email === email && u.password === password
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      saveUser(userWithoutPassword);
      return true;
    }
    return false;
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    const users = JSON.parse(localStorage.getItem('quantum_users') || '[]');

    if (users.some((u: User) => u.email === email)) {
      return false;
    }

    const newUser = {
      id: crypto.randomUUID(),
      email,
      password,
      name,
      progress: [],
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem('quantum_users', JSON.stringify(users));

    const { password: _, ...userWithoutPassword } = newUser;
    saveUser(userWithoutPassword);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('quantum_user');
    setUser(null);
  };

  const updateProgress = (chapterId: string, quizScore?: number) => {
    if (!user) return;

    const existingProgress = user.progress.find(p => p.chapterId === chapterId);
    let newProgress: ChapterProgress[];

    if (existingProgress) {
      newProgress = user.progress.map(p =>
        p.chapterId === chapterId
          ? {
              ...p,
              completed: true,
              quizScore: quizScore !== undefined ? quizScore : p.quizScore,
              quizCompleted: quizScore !== undefined ? true : p.quizCompleted,
              lastAccessed: new Date().toISOString(),
            }
          : p
      );
    } else {
      newProgress = [
        ...user.progress,
        {
          chapterId,
          completed: true,
          quizScore: quizScore ?? null,
          quizCompleted: quizScore !== undefined,
          lastAccessed: new Date().toISOString(),
        },
      ];
    }

    const updatedUser = { ...user, progress: newProgress };
    saveUser(updatedUser);

    // Also update in users list
    const users = JSON.parse(localStorage.getItem('quantum_users') || '[]');
    const updatedUsers = users.map((u: User & { password: string }) =>
      u.id === user.id ? { ...u, progress: newProgress } : u
    );
    localStorage.setItem('quantum_users', JSON.stringify(updatedUsers));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProgress, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
