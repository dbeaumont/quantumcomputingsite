import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Atom, BookOpen, BarChart3, LogOut, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/', icon: Atom },
    { name: 'Chapitres', href: '/chapters', icon: BookOpen },
    { name: 'Progression', href: '/progress', icon: BarChart3 },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen">
      {/* Quantum particles background */}
      <div className="quantum-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="quantum-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-quantum-950/80 backdrop-blur-lg border-b border-quantum-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Atom className="w-8 h-8 text-quantum-400 group-hover:text-quantum-300 transition-colors" />
                <div className="absolute inset-0 bg-quantum-400/20 rounded-full blur-xl group-hover:bg-quantum-300/30 transition-colors" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-quantum-400 to-purple-400 bg-clip-text text-transparent">
                QuantumSite
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {user && navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive(item.href)
                      ? 'bg-quantum-500/20 text-quantum-300'
                      : 'text-gray-400 hover:text-white hover:bg-quantum-500/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* User menu */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{user.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-red-500/10 transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Déconnexion</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="quantum-btn px-6 py-2 rounded-lg text-white font-medium"
                >
                  Connexion
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-quantum-950/95 backdrop-blur-lg border-t border-quantum-500/20">
            <div className="px-4 py-4 space-y-2">
              {user && navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                    isActive(item.href)
                      ? 'bg-quantum-500/20 text-quantum-300'
                      : 'text-gray-400 hover:text-white hover:bg-quantum-500/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-red-500/10 transition-all"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Déconnexion</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block quantum-btn px-4 py-3 rounded-lg text-white font-medium text-center"
                >
                  Connexion
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-quantum-950/50 border-t border-quantum-500/20 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Atom className="w-6 h-6 text-quantum-400" />
              <span className="text-gray-400">QuantumSite</span>
            </div>
            <p className="text-gray-500 text-sm">
              Un voyage dans l'informatique quantique
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
