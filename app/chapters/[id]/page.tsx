'use client'

import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle, PlayCircle } from 'lucide-react'
import { chapters, quizzes } from '@/lib/data'
import { useProgressStore, useAuthStore } from '@/lib/store'

export default function ChapterPage() {
  const params = useParams()
  const router = useRouter()
  const { markChapterRead, getChapterProgress, getQuizResult } = useProgressStore()
  const { isAuthenticated } = useAuthStore()

  const chapter = chapters.find(c => c.id === params.id)
  const quiz = quizzes.find(q => q.chapterId === params.id)
  const chapterIndex = chapters.findIndex(c => c.id === params.id)
  const prevChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null
  const nextChapter = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null

  const progress = chapter ? getChapterProgress(chapter.id) : undefined
  const quizResult = quiz ? getQuizResult(quiz.id) : undefined

  useEffect(() => {
    if (chapter && isAuthenticated && !progress?.read) {
      // Mark chapter as read after 5 seconds of viewing
      const timer = setTimeout(() => {
        markChapterRead(chapter.id)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [chapter, isAuthenticated, progress, markChapterRead])

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chapitre non trouvé</h1>
          <Link href="/chapters" className="text-neon-blue hover:underline">
            Retour aux chapitres
          </Link>
        </div>
      </div>
    )
  }

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

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: JSX.Element[] = []
    let currentList: string[] = []
    let listType: 'ul' | 'ol' | null = null

    const flushList = () => {
      if (currentList.length > 0) {
        if (listType === 'ul') {
          elements.push(
            <ul key={elements.length} className="list-disc list-inside mb-4 space-y-1">
              {currentList.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
              ))}
            </ul>
          )
        } else {
          elements.push(
            <ol key={elements.length} className="list-decimal list-inside mb-4 space-y-1">
              {currentList.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
              ))}
            </ol>
          )
        }
        currentList = []
        listType = null
      }
    }

    const parseInline = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-neon-blue">$1</strong>')
        .replace(/`(.*?)`/g, '<code class="bg-neon-blue/10 px-1 rounded">$1</code>')
    }

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      if (trimmedLine.startsWith('# ')) {
        flushList()
        elements.push(
          <h1 key={index} className="text-3xl font-bold text-neon-blue mb-6 mt-8 first:mt-0">
            {trimmedLine.slice(2)}
          </h1>
        )
      } else if (trimmedLine.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={index} className="text-2xl font-semibold text-neon-purple mb-4 mt-8">
            {trimmedLine.slice(3)}
          </h2>
        )
      } else if (trimmedLine.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-quantum-300 mb-3 mt-6">
            {trimmedLine.slice(4)}
          </h3>
        )
      } else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        if (listType !== 'ul') {
          flushList()
          listType = 'ul'
        }
        currentList.push(trimmedLine.slice(2))
      } else if (/^\d+\.\s/.test(trimmedLine)) {
        if (listType !== 'ol') {
          flushList()
          listType = 'ol'
        }
        currentList.push(trimmedLine.replace(/^\d+\.\s/, ''))
      } else if (trimmedLine === '') {
        flushList()
      } else if (trimmedLine.startsWith('```')) {
        // Skip code blocks for now
      } else {
        flushList()
        elements.push(
          <p
            key={index}
            className="text-gray-300 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: parseInline(trimmedLine) }}
          />
        )
      }
    })

    flushList()
    return elements
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            href="/chapters"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux chapitres
          </Link>
        </motion.div>

        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="quantum-card p-8 mb-8"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold text-lg">
              {chapter.order}
            </div>
            <span className={`text-xs px-3 py-1 rounded-full ${getDifficultyBadge(chapter.difficulty)}`}>
              {chapter.difficulty}
            </span>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              {chapter.duration}
            </div>
            {progress?.read && (
              <span className="flex items-center gap-1 text-neon-green text-sm">
                <CheckCircle className="w-4 h-4" />
                Complété
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{chapter.title}</h1>
          <p className="text-gray-400">{chapter.description}</p>
        </motion.div>

        {/* Chapter content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="quantum-card p-8 mb-8"
        >
          <div className="markdown-content">
            {renderContent(chapter.content)}
          </div>
        </motion.div>

        {/* Quiz CTA */}
        {quiz && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="quantum-card p-8 mb-8 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                  <PlayCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Testez vos connaissances</h3>
                  <p className="text-gray-400 text-sm">
                    {quiz.questions.length} questions pour valider ce chapitre
                  </p>
                  {quizResult && (
                    <p className="text-neon-green text-sm mt-1">
                      Dernier score : {quizResult.score}/{quizResult.totalQuestions} ({Math.round((quizResult.score / quizResult.totalQuestions) * 100)}%)
                    </p>
                  )}
                </div>
              </div>
              <Link
                href={`/quiz/${quiz.id}`}
                className="quantum-btn flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                {quizResult ? 'Refaire le quiz' : 'Commencer le quiz'}
              </Link>
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-between gap-4"
        >
          {prevChapter ? (
            <Link
              href={`/chapters/${prevChapter.id}`}
              className="quantum-card p-4 flex items-center gap-3 flex-1 hover:border-neon-blue/50"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-400">Chapitre précédent</p>
                <p className="font-semibold">{prevChapter.title}</p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextChapter && (
            <Link
              href={`/chapters/${nextChapter.id}`}
              className="quantum-card p-4 flex items-center justify-end gap-3 flex-1 hover:border-neon-blue/50"
            >
              <div className="text-right">
                <p className="text-xs text-gray-400">Chapitre suivant</p>
                <p className="font-semibold">{nextChapter.title}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  )
}
