'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Trophy,
  Target,
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  Award,
  Zap,
  ArrowRight,
  BarChart3
} from 'lucide-react'
import { chapters, quizzes } from '@/lib/data'
import { useProgressStore, useAuthStore } from '@/lib/store'

export default function ProgressPage() {
  const router = useRouter()
  const { isAuthenticated, user } = useAuthStore()
  const { progress, getStats, getChapterProgress, getQuizResult } = useProgressStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  const stats = getStats()
  const totalChapters = chapters.length
  const totalQuizzes = quizzes.length

  const getQuizResultForChapter = (chapterId: string) => {
    const quiz = quizzes.find(q => q.chapterId === chapterId)
    return quiz ? getQuizResult(quiz.id) : undefined
  }

  const statCards = [
    {
      icon: BookOpen,
      label: 'Chapitres lus',
      value: `${stats.chaptersRead}/${totalChapters}`,
      color: 'from-neon-blue to-cyan-400',
      progress: (stats.chaptersRead / totalChapters) * 100
    },
    {
      icon: Trophy,
      label: 'Quiz complétés',
      value: `${stats.quizzesCompleted}/${totalQuizzes}`,
      color: 'from-neon-purple to-pink-400',
      progress: (stats.quizzesCompleted / totalQuizzes) * 100
    },
    {
      icon: Target,
      label: 'Score moyen',
      value: `${stats.averageScore}%`,
      color: 'from-neon-green to-emerald-400',
      progress: stats.averageScore
    },
    {
      icon: Zap,
      label: 'Meilleur score',
      value: `${stats.bestScore}%`,
      color: 'from-orange-400 to-yellow-400',
      progress: stats.bestScore
    }
  ]

  const achievements = [
    {
      id: 'first_chapter',
      title: 'Premier pas',
      description: 'Lire votre premier chapitre',
      icon: BookOpen,
      unlocked: stats.chaptersRead >= 1
    },
    {
      id: 'first_quiz',
      title: 'Testeur quantique',
      description: 'Compléter votre premier quiz',
      icon: Trophy,
      unlocked: stats.quizzesCompleted >= 1
    },
    {
      id: 'perfect_score',
      title: 'Perfection quantique',
      description: 'Obtenir 100% à un quiz',
      icon: Award,
      unlocked: stats.bestScore === 100
    },
    {
      id: 'half_chapters',
      title: 'Mi-parcours',
      description: 'Lire la moitié des chapitres',
      icon: TrendingUp,
      unlocked: stats.chaptersRead >= Math.ceil(totalChapters / 2)
    },
    {
      id: 'all_chapters',
      title: 'Expert quantique',
      description: 'Lire tous les chapitres',
      icon: Zap,
      unlocked: stats.chaptersRead === totalChapters
    },
    {
      id: 'all_quizzes',
      title: 'Maître des quiz',
      description: 'Compléter tous les quiz',
      icon: Target,
      unlocked: stats.quizzesCompleted === totalQuizzes
    }
  ]

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">
            Bonjour,{' '}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              {user?.name}
            </span>
          </h1>
          <p className="text-gray-400">
            Suivez votre progression dans l'apprentissage de l'informatique quantique
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {statCards.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="quantum-card p-6"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm mb-3">{stat.label}</div>
                <div className="progress-bar h-2">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.progress}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chapters Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-neon-blue" />
              Progression par chapitre
            </h2>
            <div className="space-y-4">
              {chapters.map((chapter, index) => {
                const chapterProgress = getChapterProgress(chapter.id)
                const quizResult = getQuizResultForChapter(chapter.id)
                const isRead = chapterProgress?.read
                const quizScore = quizResult
                  ? Math.round((quizResult.score / quizResult.totalQuestions) * 100)
                  : null

                return (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    <Link href={`/chapters/${chapter.id}`}>
                      <div className="quantum-card p-4 flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                          isRead
                            ? 'bg-gradient-to-br from-neon-green to-emerald-600 text-white'
                            : 'bg-white/10 text-gray-400'
                        }`}>
                          {isRead ? <CheckCircle className="w-5 h-5" /> : chapter.order}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold truncate">{chapter.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {chapter.duration}
                            </span>
                            {isRead && chapterProgress?.readAt && (
                              <span>
                                Lu le {new Date(chapterProgress.readAt).toLocaleDateString('fr-FR')}
                              </span>
                            )}
                          </div>
                        </div>

                        {quizScore !== null && (
                          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            quizScore >= 70
                              ? 'bg-neon-green/20 text-neon-green'
                              : 'bg-orange-500/20 text-orange-400'
                          }`}>
                            {quizScore}%
                          </div>
                        )}

                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-neon-purple" />
              Succès
            </h2>
            <div className="space-y-3">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className={`quantum-card p-4 flex items-center gap-4 ${
                      !achievement.unlocked && 'opacity-50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-neon-purple to-neon-pink'
                        : 'bg-white/10'
                    }`}>
                      {achievement.unlocked ? (
                        <Icon className="w-6 h-6 text-white" />
                      ) : (
                        <Icon className="w-6 h-6 text-gray-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{achievement.title}</h3>
                      <p className="text-gray-400 text-xs">{achievement.description}</p>
                    </div>
                    {achievement.unlocked && (
                      <CheckCircle className="w-5 h-5 text-neon-green" />
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Achievement count */}
            <div className="mt-6 text-center">
              <div className="text-2xl font-bold text-neon-purple">
                {achievements.filter(a => a.unlocked).length}/{achievements.length}
              </div>
              <div className="text-gray-400 text-sm">Succès débloqués</div>
            </div>
          </motion.div>
        </div>

        {/* CTA if no progress */}
        {stats.chaptersRead === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 quantum-card p-8 text-center bg-gradient-to-r from-neon-blue/10 to-neon-purple/10"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-neon-blue" />
            <h2 className="text-2xl font-bold mb-2">Commencez votre apprentissage</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Vous n'avez pas encore commencé à lire les chapitres.
              Lancez-vous dans l'aventure quantique !
            </p>
            <Link href="/chapters" className="quantum-btn inline-flex items-center gap-2">
              Découvrir les chapitres
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}
