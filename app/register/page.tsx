'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Atom, Mail, Lock, User, UserPlus, AlertCircle, Check } from 'lucide-react'
import { useAuthStore } from '@/lib/store'

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useAuthStore()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const passwordRequirements = [
    { label: 'Au moins 6 caractères', met: password.length >= 6 },
    { label: 'Les mots de passe correspondent', met: password === confirmPassword && password.length > 0 },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!name || !email || !password || !confirmPassword) {
      setError('Veuillez remplir tous les champs')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères')
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      setLoading(false)
      return
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))

    const success = register(email, password, name)
    if (success) {
      router.push('/chapters')
    } else {
      setError('Cet email est déjà utilisé')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8">
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
              className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-neon-purple to-neon-pink p-0.5 mb-4"
            >
              <div className="w-full h-full rounded-full bg-quantum-950 flex items-center justify-center">
                <Atom className="w-8 h-8 text-neon-purple" />
              </div>
            </motion.div>
            <h1 className="text-2xl font-bold mb-2">Créer un compte</h1>
            <p className="text-gray-400 text-sm">
              Rejoignez l'aventure quantique
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
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Nom complet
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="quantum-input pl-12"
                  placeholder="Jean Dupont"
                  required
                />
              </div>
            </div>

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

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="quantum-input pl-12"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Password requirements */}
            <div className="space-y-2">
              {passwordRequirements.map((req, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-xs ${
                    req.met ? 'text-neon-green' : 'text-gray-400'
                  }`}
                >
                  <Check className={`w-4 h-4 ${req.met ? 'opacity-100' : 'opacity-30'}`} />
                  {req.label}
                </div>
              ))}
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
                  <UserPlus className="w-5 h-5" />
                  Créer mon compte
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Déjà un compte ?{' '}
              <Link
                href="/login"
                className="text-neon-blue hover:text-neon-purple transition-colors"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
