'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Atom, BookOpen, BarChart3, LogIn, LogOut, User, Menu, X } from 'lucide-react'
import { useAuthStore } from '@/lib/store'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const { isAuthenticated, user, logout } = useAuthStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/chapters', label: 'Chapitres', icon: BookOpen },
    { href: '/progress', label: 'Ma Progression', icon: BarChart3, authRequired: true },
  ]

  const isActive = (path: string) => pathname === path || pathname?.startsWith(path + '/')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-quantum-950/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center"
            >
              <Atom className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Quantum
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              if (link.authRequired && !isAuthenticated) return null
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-neon-blue/20 text-neon-blue'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              )
            })}

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">{user?.name}</span>
                </div>
                <button
                  onClick={() => logout()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <LogOut className="w-4 h-4" />
                  Déconnexion
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 quantum-btn"
              >
                <LogIn className="w-4 h-4" />
                Connexion
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-quantum-950/95 backdrop-blur-lg border-b border-white/10"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              if (link.authRequired && !isAuthenticated) return null
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-neon-blue/20 text-neon-blue'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              )
            })}

            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-3 px-4 py-3 text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span>{user?.name}</span>
                </div>
                <button
                  onClick={() => {
                    logout()
                    setMobileMenuOpen(false)
                  }}
                  className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <LogOut className="w-5 h-5" />
                  Déconnexion
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg quantum-btn w-full justify-center"
              >
                <LogIn className="w-5 h-5" />
                Connexion
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
