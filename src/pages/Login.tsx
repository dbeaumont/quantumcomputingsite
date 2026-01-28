import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Atom, Mail, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isLogin) {
        const success = await login(email, password);
        if (success) {
          navigate('/chapters');
        } else {
          setError('Email ou mot de passe incorrect');
        }
      } else {
        if (!name.trim()) {
          setError('Veuillez entrer votre nom');
          setIsLoading(false);
          return;
        }
        const success = await register(email, password, name);
        if (success) {
          navigate('/chapters');
        } else {
          setError('Cet email est déjà utilisé');
        }
      }
    } catch {
      setError('Une erreur est survenue');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <Atom className="w-10 h-10 text-quantum-400 group-hover:text-quantum-300 transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-quantum-400 to-purple-400 bg-clip-text text-transparent">
              QuantumSite
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="quantum-card p-8 rounded-2xl">
          <h1 className="text-2xl font-bold text-white mb-2 text-center">
            {isLogin ? 'Connexion' : 'Créer un compte'}
          </h1>
          <p className="text-gray-400 text-center mb-8">
            {isLogin
              ? 'Connectez-vous pour accéder à vos chapitres'
              : 'Rejoignez-nous pour explorer l\'informatique quantique'}
          </p>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-quantum-950/50 border border-quantum-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-quantum-400 transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-quantum-950/50 border border-quantum-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-quantum-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-quantum-950/50 border border-quantum-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-quantum-400 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full quantum-btn py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Se connecter' : 'Créer mon compte'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
              className="text-quantum-400 hover:text-quantum-300 transition-colors"
            >
              {isLogin
                ? 'Pas encore de compte ? Inscrivez-vous'
                : 'Déjà un compte ? Connectez-vous'}
            </button>
          </div>
        </div>

        {/* Demo hint */}
        <p className="mt-6 text-center text-gray-500 text-sm">
          Les données sont stockées localement dans votre navigateur.
        </p>
      </div>
    </div>
  );
}
