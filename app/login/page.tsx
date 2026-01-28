'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Atom, Mail, Lock, LogIn, AlertCircle } from 'lucide-react'
import { useAuthStore } from '@/lib/store'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!email || !password) {
      setError('Veuillez remplir tous les champs')
      setLoading(false)
      return
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))

    const success = login(email, password)
    if (success) {
      router.push('/chapters')
    } else {
      setError('Email ou mot de passe incorrect')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="quantum-card p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-0.5 mb-4"
            >
              <div className="w-full h-full rounded-full bg-quantum-950 flex items-center justify-center">
                <Atom className="w-8 h-8 text-neon-blue" />
              </div>
            </motion.div>
            <h1 className="text-2xl font-bold mb-2">Connexion</h1>
            <p className="text-gray-400 text-sm">
              Accédez à votre espace d'apprentissage
            </p>
          </div>

          {/* Error message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span className="text-red-400 text-sm">{error}</span>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="quantum-input pl-12"
                  placeholder="vous@exemple.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="quantum-input pl-12"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="quantum-btn w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Se connecter
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Pas encore de compte ?{' '}
              <Link
                href="/register"
                className="text-neon-blue hover:text-neon-purple transition-colors"
              >
                Créer un compte
              </Link>
            </p>
          </div>

          {/* Demo notice */}
          <div className="mt-6 p-4 rounded-lg bg-neon-blue/10 border border-neon-blue/30">
            <p className="text-xs text-gray-300 text-center">
              <strong className="text-neon-blue">Mode démo :</strong> Entrez n'importe quel email et mot de passe pour vous connecter.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
