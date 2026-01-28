'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Clock, CheckCircle, ArrowRight, Cpu, Circle, GitBranch, Zap, Shield, Rocket, LucideIcon } from 'lucide-react'
import { chapters } from '@/lib/data'
import { useProgressStore } from '@/lib/store'

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Circle,
  GitBranch,
  Zap,
  Shield,
  Rocket,
  BookOpen
}

export default function ChaptersPage() {
  const { getChapterProgress } = useProgressStore()

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant':
        return 'badge-beginner'
      case 'Intermédiaire':
        return 'badge-intermediate'
      case 'Avancé':
        return 'badge-advanced'
      default:
        return 'badge-beginner'
    }
  }

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || BookOpen
    return <IconComponent className="w-6 h-6" />
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Chapitres
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explorez les concepts fondamentaux de l'informatique quantique à travers
            nos 6 chapitres progressifs. Chaque chapitre est accompagné d'un quiz
            pour tester vos connaissances.
          </p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="quantum-card p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">Votre progression</h2>
              <p className="text-gray-400 text-sm">
                {chapters.filter(c => getChapterProgress(c.id)?.read).length} / {chapters.length} chapitres complétés
              </p>
            </div>
            <div className="w-full md:w-64">
              <div className="progress-bar h-3">
                <div
                  className="progress-fill"
                  style={{
                    width: `${(chapters.filter(c => getChapterProgress(c.id)?.read).length / chapters.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chapters Grid */}
        <div className="grid gap-6">
          {chapters.map((chapter, index) => {
            const progress = getChapterProgress(chapter.id)
            const isCompleted = progress?.read

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/chapters/${chapter.id}`}>
                  <div className={`quantum-card p-6 flex flex-col md:flex-row gap-6 ${isCompleted ? 'border-neon-green/30' : ''}`}>
                    {/* Chapter number and icon */}
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl ${
                        isCompleted
                          ? 'bg-gradient-to-br from-neon-green to-emerald-600'
                          : 'bg-gradient-to-br from-neon-blue to-neon-purple'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-8 h-8" />
                        ) : (
                          chapter.order
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{chapter.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyBadge(chapter.difficulty)}`}>
                          {chapter.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{chapter.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {chapter.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          {getIcon(chapter.icon)}
                          <span className="capitalize">{chapter.icon}</span>
                        </div>
                        {isCompleted && (
                          <span className="text-neon-green flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Complété
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center">
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-neon-blue transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
