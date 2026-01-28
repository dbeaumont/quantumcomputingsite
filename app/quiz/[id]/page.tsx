'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Trophy, RotateCcw, BookOpen } from 'lucide-react'
import { quizzes, chapters } from '@/lib/data'
import { useProgressStore, useAuthStore } from '@/lib/store'

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const { saveQuizResult, getQuizResult } = useProgressStore()
  const { isAuthenticated } = useAuthStore()

  const quiz = quizzes.find(q => q.id === params.id)
  const chapter = quiz ? chapters.find(c => c.id === quiz.chapterId) : null

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const previousResult = quiz ? getQuizResult(quiz.id) : undefined

  useEffect(() => {
    if (quiz) {
      setAnswers(new Array(quiz.questions.length).fill(-1))
    }
  }, [quiz])

  if (!quiz || !chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Quiz non trouvé</h1>
          <Link href="/chapters" className="text-neon-blue hover:underline">
            Retour aux chapitres
          </Link>
        </div>
      </div>
    )
  }

  const question = quiz.questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer
  const totalQuestions = quiz.questions.length
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  const handleSelectAnswer = (index: number) => {
    if (showExplanation) return
    setSelectedAnswer(index)
  }

  const handleValidate = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedAnswer
    setAnswers(newAnswers)
    setShowExplanation(true)
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      // Quiz finished
      finishQuiz()
    }
  }

  const finishQuiz = () => {
    setIsSubmitting(true)
    const score = answers.reduce((acc, answer, index) => {
      return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0)
    }, 0) + (selectedAnswer === question.correctAnswer ? 1 : 0)

    if (isAuthenticated) {
      saveQuizResult(quiz.id, {
        score,
        totalQuestions,
        answers: [...answers.slice(0, -1), selectedAnswer ?? -1]
      })
    }

    setTimeout(() => {
      setShowResult(true)
      setIsSubmitting(false)
    }, 500)
  }

  const calculateScore = () => {
    return answers.reduce((acc, answer, index) => {
      if (index === currentQuestion) {
        return acc + (selectedAnswer === quiz.questions[index].correctAnswer ? 1 : 0)
      }
      return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0)
    }, 0)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setAnswers(new Array(quiz.questions.length).fill(-1))
    setShowResult(false)
    setShowExplanation(false)
  }

  // Results screen
  if (showResult) {
    const score = calculateScore()
    const percentage = Math.round((score / totalQuestions) * 100)
    const isPassing = percentage >= 70

    return (
      <div className="min-h-screen px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="quantum-card p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${
                isPassing
                  ? 'bg-gradient-to-br from-neon-green to-emerald-600'
                  : 'bg-gradient-to-br from-orange-500 to-red-500'
              }`}
            >
              <Trophy className="w-12 h-12 text-white" />
            </motion.div>

            <h1 className="text-3xl font-bold mb-2">
              {isPassing ? 'Félicitations !' : 'Continuez vos efforts !'}
            </h1>
            <p className="text-gray-400 mb-8">
              {isPassing
                ? 'Vous avez réussi ce quiz avec brio !'
                : 'Relisez le chapitre et réessayez pour améliorer votre score.'}
            </p>

            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className={`text-5xl font-bold ${isPassing ? 'text-neon-green' : 'text-orange-400'}`}>
                  {percentage}%
                </div>
                <div className="text-gray-400 text-sm">Score</div>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="text-5xl font-bold text-neon-blue">
                  {score}/{totalQuestions}
                </div>
                <div className="text-gray-400 text-sm">Bonnes réponses</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={restartQuiz}
                className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Refaire le quiz
              </button>
              <Link
                href={`/chapters/${chapter.id}`}
                className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Relire le chapitre
              </Link>
              <Link
                href="/chapters"
                className="quantum-btn flex items-center justify-center gap-2"
              >
                Continuer
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href={`/chapters/${chapter.id}`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au chapitre
          </Link>

          <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
          <p className="text-gray-400">Chapitre {chapter.order} : {chapter.title}</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
            <span>Question {currentQuestion + 1} / {totalQuestions}</span>
            <span>{Math.round(progress)}% complété</span>
          </div>
          <div className="progress-bar h-2">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="quantum-card p-8"
          >
            <h2 className="text-xl font-semibold mb-6">{question.text}</h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                let optionClass = 'border-white/10 hover:border-neon-blue/50 hover:bg-neon-blue/5'

                if (showExplanation) {
                  if (index === question.correctAnswer) {
                    optionClass = 'border-neon-green bg-neon-green/10'
                  } else if (index === selectedAnswer && !isCorrect) {
                    optionClass = 'border-red-500 bg-red-500/10'
                  } else {
                    optionClass = 'border-white/10 opacity-50'
                  }
                } else if (selectedAnswer === index) {
                  optionClass = 'border-neon-blue bg-neon-blue/10'
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 rounded-lg border text-left transition-all flex items-center gap-4 ${optionClass}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                      showExplanation && index === question.correctAnswer
                        ? 'bg-neon-green text-white'
                        : showExplanation && index === selectedAnswer && !isCorrect
                        ? 'bg-red-500 text-white'
                        : selectedAnswer === index
                        ? 'bg-neon-blue text-white'
                        : 'bg-white/10 text-gray-300'
                    }`}>
                      {showExplanation && index === question.correctAnswer ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : showExplanation && index === selectedAnswer && !isCorrect ? (
                        <XCircle className="w-5 h-5" />
                      ) : (
                        String.fromCharCode(65 + index)
                      )}
                    </div>
                    <span>{option}</span>
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <div className={`p-4 rounded-lg ${isCorrect ? 'bg-neon-green/10 border border-neon-green/30' : 'bg-orange-500/10 border border-orange-500/30'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-neon-green" />
                      ) : (
                        <XCircle className="w-5 h-5 text-orange-400" />
                      )}
                      <span className={`font-semibold ${isCorrect ? 'text-neon-green' : 'text-orange-400'}`}>
                        {isCorrect ? 'Bonne réponse !' : 'Pas tout à fait...'}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{question.explanation}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actions */}
            <div className="mt-8 flex justify-end gap-4">
              {!showExplanation ? (
                <button
                  onClick={handleValidate}
                  disabled={selectedAnswer === null}
                  className="quantum-btn flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Valider
                  <CheckCircle className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="quantum-btn flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : currentQuestion < totalQuestions - 1 ? (
                    <>
                      Question suivante
                      <ArrowRight className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Voir les résultats
                      <Trophy className="w-5 h-5" />
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Question indicators */}
        <div className="mt-8 flex justify-center gap-2 flex-wrap">
          {quiz.questions.map((_, index) => {
            let indicatorClass = 'bg-white/10'
            if (index === currentQuestion) {
              indicatorClass = 'bg-neon-blue'
            } else if (answers[index] !== -1) {
              indicatorClass = answers[index] === quiz.questions[index].correctAnswer
                ? 'bg-neon-green'
                : 'bg-red-500'
            }

            return (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${indicatorClass}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
