'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Atom, Cpu, Zap, Shield, BookOpen, Award, ArrowRight, Sparkles } from 'lucide-react'
import { chapters } from '@/lib/data'

const features = [
  {
    icon: BookOpen,
    title: 'Cours Interactifs',
    description: 'Apprenez les concepts fondamentaux de l\'informatique quantique avec des explications claires et illustrées.'
  },
  {
    icon: Zap,
    title: 'Quiz & Exercices',
    description: 'Testez vos connaissances avec des QCM après chaque chapitre et consolidez votre apprentissage.'
  },
  {
    icon: Award,
    title: 'Suivi de Progression',
    description: 'Visualisez votre avancement, vos scores et débloquez des achievements au fil de votre parcours.'
  },
  {
    icon: Shield,
    title: 'Contenu Actualisé',
    description: 'Un contenu régulièrement mis à jour reflétant les dernières avancées du domaine quantique.'
  }
]

const stats = [
  { value: '6', label: 'Chapitres' },
  { value: '24+', label: 'Questions' },
  { value: '100%', label: 'Gratuit' },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink p-1 glow">
                <div className="w-full h-full rounded-full bg-quantum-950 flex items-center justify-center">
                  <Atom className="w-16 h-16 text-neon-blue animate-spin-slow" />
                </div>
              </div>
              {/* Orbiting particles */}
              <div className="absolute inset-0 animate-orbit">
                <div className="w-4 h-4 rounded-full bg-neon-blue absolute -top-2 left-1/2" />
              </div>
              <div className="absolute inset-0 animate-orbit" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="w-3 h-3 rounded-full bg-neon-purple absolute -top-1 left-1/2" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent">
              Découvrez l'Informatique
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent glow-text">
              Quantique
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Plongez dans l'univers fascinant des qubits, de la superposition et de l'intrication.
            Apprenez les fondements de la révolution technologique du 21ème siècle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/chapters"
              className="quantum-btn text-lg px-8 py-4 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5" />
              Commencer l'apprentissage
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Se connecter
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-8 md:gap-16 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi apprendre avec{' '}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Quantum
              </span>
              ?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Une plateforme conçue pour rendre l'informatique quantique accessible à tous,
              du débutant curieux à l'étudiant en informatique.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="quantum-card p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Chapters Preview Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Parcours d'apprentissage
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              6 chapitres progressifs pour maîtriser les fondamentaux de l'informatique quantique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.slice(0, 3).map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/chapters/${chapter.id}`}>
                  <div className="quantum-card p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
                        {chapter.order}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        chapter.difficulty === 'Débutant' ? 'badge-beginner' :
                        chapter.difficulty === 'Intermédiaire' ? 'badge-intermediate' : 'badge-advanced'
                      }`}>
                        {chapter.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{chapter.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{chapter.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Cpu className="w-4 h-4 mr-1" />
                      {chapter.duration}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/chapters"
              className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors"
            >
              Voir tous les chapitres
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="quantum-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />
            <div className="relative z-10">
              <Atom className="w-16 h-16 mx-auto mb-6 text-neon-blue animate-pulse-slow" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à explorer le monde quantique ?
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Rejoignez des milliers d'apprenants et commencez votre voyage dans l'univers
                fascinant de l'informatique quantique.
              </p>
              <Link
                href="/register"
                className="quantum-btn text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Créer un compte gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Atom className="w-6 h-6 text-neon-blue" />
            <span className="font-semibold text-white">Quantum Computing</span>
          </div>
          <p className="text-sm">
            Plateforme éducative sur l'informatique quantique
          </p>
          <p className="text-xs mt-4">
            © {new Date().getFullYear()} Quantum. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}
