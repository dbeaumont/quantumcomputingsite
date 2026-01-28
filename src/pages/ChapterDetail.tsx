import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { chapters } from '../data/chapters';
import QuantumIllustration from '../components/QuantumIllustration';
import {
  ArrowLeft, ArrowRight, Clock, CheckCircle2, XCircle,
  ChevronRight, Award, RotateCcw
} from 'lucide-react';

export default function ChapterDetail() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const { updateProgress } = useAuth();

  const chapter = chapters.find(c => c.id === chapterId);
  const chapterIndex = chapters.findIndex(c => c.id === chapterId);

  const [currentSection, setCurrentSection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number | null>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  useEffect(() => {
    setCurrentSection(0);
    setShowQuiz(false);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
    window.scrollTo(0, 0);
  }, [chapterId]);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Chapitre non trouvé</h1>
          <Link to="/chapters" className="text-quantum-400 hover:text-quantum-300">
            Retour aux chapitres
          </Link>
        </div>
      </div>
    );
  }

  const prevChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;

  const handleQuizSubmit = () => {
    const correctAnswers = chapter.quiz.filter(
      q => quizAnswers[q.id] === q.correctAnswer
    ).length;
    const score = Math.round((correctAnswers / chapter.quiz.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);
    updateProgress(chapter.id, score);
  };

  const handleRetakeQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
  };

  const allQuestionsAnswered = chapter.quiz.every(q => quizAnswers[q.id] !== undefined && quizAnswers[q.id] !== null);

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, i) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h4 key={i} className="text-lg font-semibold text-quantum-300 mt-6 mb-3">
            {paragraph.replace(/\*\*/g, '')}
          </h4>
        );
      }
      if (paragraph.startsWith('- ')) {
        return (
          <li key={i} className="text-gray-300 ml-4 mb-1">
            {formatInlineStyles(paragraph.substring(2))}
          </li>
        );
      }
      if (paragraph.trim() === '') {
        return <br key={i} />;
      }
      return (
        <p key={i} className="text-gray-300 mb-4 leading-relaxed">
          {formatInlineStyles(paragraph)}
        </p>
      );
    });
  };

  const formatInlineStyles = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="text-quantum-300 font-semibold">
            {part.replace(/\*\*/g, '')}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/chapters" className="hover:text-quantum-400 transition-colors">
            Chapitres
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-400">{chapter.title}</span>
        </div>

        {/* Header */}
        <div className="quantum-card p-8 rounded-2xl mb-8">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <Clock className="w-4 h-4" />
            <span>{chapter.duration}</span>
            <span className="mx-2">•</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${
                chapter.difficulty === 'Débutant'
                  ? 'bg-green-400/10 text-green-400'
                  : chapter.difficulty === 'Intermédiaire'
                  ? 'bg-yellow-400/10 text-yellow-400'
                  : 'bg-red-400/10 text-red-400'
              }`}
            >
              {chapter.difficulty}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{chapter.title}</h1>
          <p className="text-gray-400 text-lg">{chapter.subtitle}</p>
        </div>

        {!showQuiz ? (
          <>
            {/* Section navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {chapter.sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    currentSection === index
                      ? 'bg-quantum-500 text-white'
                      : 'bg-quantum-500/10 text-gray-400 hover:bg-quantum-500/20'
                  }`}
                >
                  {index + 1}. {section.title.substring(0, 20)}...
                </button>
              ))}
            </div>

            {/* Section content */}
            <div className="quantum-card p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {chapter.sections[currentSection].title}
              </h2>

              {/* Illustration */}
              {chapter.sections[currentSection].illustration && (
                <div className="mb-8 p-4 bg-quantum-950/50 rounded-xl">
                  <QuantumIllustration
                    type={chapter.sections[currentSection].illustration!}
                    className="w-full max-w-lg mx-auto"
                  />
                </div>
              )}

              {/* Content */}
              <div className="prose prose-invert max-w-none">
                {formatContent(chapter.sections[currentSection].content)}
              </div>
            </div>

            {/* Navigation between sections */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                disabled={currentSection === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-quantum-500/10 text-gray-400 hover:bg-quantum-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Précédent
              </button>

              {currentSection === chapter.sections.length - 1 ? (
                <button
                  onClick={() => {
                    setShowQuiz(true);
                    window.scrollTo(0, 0);
                  }}
                  className="quantum-btn px-6 py-2 rounded-lg text-white font-medium flex items-center gap-2"
                >
                  Passer au Quiz
                  <Award className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setCurrentSection(currentSection + 1)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-quantum-500/10 text-gray-400 hover:bg-quantum-500/20 transition-all"
                >
                  Suivant
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Quiz section */}
            <div className="quantum-card p-8 rounded-2xl mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Quiz - Testez vos connaissances</h2>
                {quizSubmitted && (
                  <button
                    onClick={handleRetakeQuiz}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-quantum-500/10 text-quantum-400 hover:bg-quantum-500/20 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Recommencer
                  </button>
                )}
              </div>

              {quizSubmitted && quizScore !== null && (
                <div
                  className={`mb-8 p-6 rounded-xl ${
                    quizScore >= 70
                      ? 'bg-green-500/10 border border-green-500/30'
                      : quizScore >= 50
                      ? 'bg-yellow-500/10 border border-yellow-500/30'
                      : 'bg-red-500/10 border border-red-500/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {quizScore >= 70 ? (
                      <CheckCircle2 className="w-12 h-12 text-green-400" />
                    ) : (
                      <XCircle className="w-12 h-12 text-red-400" />
                    )}
                    <div>
                      <p className="text-2xl font-bold text-white">Score : {quizScore}%</p>
                      <p className="text-gray-400">
                        {quizScore >= 70
                          ? 'Excellent ! Vous maîtrisez ce chapitre.'
                          : quizScore >= 50
                          ? 'Pas mal ! Relisez les sections pour améliorer votre score.'
                          : 'Continuez à apprendre ! Relisez le chapitre et réessayez.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-8">
                {chapter.quiz.map((question, qIndex) => {
                  const isAnswered = quizAnswers[question.id] !== undefined && quizAnswers[question.id] !== null;
                  const isCorrect = quizSubmitted && quizAnswers[question.id] === question.correctAnswer;
                  void isAnswered; // used in logic below

                  return (
                    <div key={question.id} className="pb-6 border-b border-quantum-500/20 last:border-0">
                      <p className="text-lg font-medium text-white mb-4">
                        {qIndex + 1}. {question.question}
                      </p>

                      <div className="space-y-3">
                        {question.options.map((option, oIndex) => {
                          const isSelected = quizAnswers[question.id] === oIndex;
                          const isCorrectOption = oIndex === question.correctAnswer;

                          let optionClass = 'bg-quantum-500/5 border-quantum-500/20 hover:bg-quantum-500/10';
                          if (quizSubmitted) {
                            if (isCorrectOption) {
                              optionClass = 'bg-green-500/10 border-green-500/50 text-green-300';
                            } else if (isSelected && !isCorrectOption) {
                              optionClass = 'bg-red-500/10 border-red-500/50 text-red-300';
                            }
                          } else if (isSelected) {
                            optionClass = 'bg-quantum-500/20 border-quantum-400';
                          }

                          return (
                            <button
                              key={oIndex}
                              onClick={() => {
                                if (!quizSubmitted) {
                                  setQuizAnswers({ ...quizAnswers, [question.id]: oIndex });
                                }
                              }}
                              disabled={quizSubmitted}
                              className={`w-full text-left p-4 rounded-xl border transition-all ${optionClass} ${
                                quizSubmitted ? 'cursor-default' : 'cursor-pointer'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                                    isSelected
                                      ? quizSubmitted
                                        ? isCorrectOption
                                          ? 'border-green-400 bg-green-400 text-white'
                                          : 'border-red-400 bg-red-400 text-white'
                                        : 'border-quantum-400 bg-quantum-400 text-white'
                                      : quizSubmitted && isCorrectOption
                                      ? 'border-green-400 text-green-400'
                                      : 'border-gray-600 text-gray-500'
                                  }`}
                                >
                                  {String.fromCharCode(65 + oIndex)}
                                </span>
                                <span className={quizSubmitted && isCorrectOption ? 'text-green-300' : 'text-gray-300'}>
                                  {option}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div
                          className={`mt-4 p-4 rounded-lg ${
                            isCorrect ? 'bg-green-500/10' : 'bg-blue-500/10'
                          }`}
                        >
                          <p className="text-sm text-gray-300">
                            <strong className="text-quantum-300">Explication :</strong> {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted && (
                <button
                  onClick={handleQuizSubmit}
                  disabled={!allQuestionsAnswered}
                  className="mt-8 w-full quantum-btn py-4 rounded-xl text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Valider mes réponses
                </button>
              )}
            </div>

            {/* Back to content button */}
            <button
              onClick={() => {
                setShowQuiz(false);
                setCurrentSection(0);
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-2 text-gray-400 hover:text-quantum-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au contenu du chapitre
            </button>
          </>
        )}

        {/* Chapter navigation */}
        <div className="flex items-center justify-between gap-4">
          {prevChapter ? (
            <Link
              to={`/chapters/${prevChapter.id}`}
              className="flex-1 quantum-card p-4 rounded-xl group hover:border-quantum-400/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-quantum-400 transition-colors" />
                <div>
                  <p className="text-gray-500 text-sm">Chapitre précédent</p>
                  <p className="text-white font-medium group-hover:text-quantum-300 transition-colors">
                    {prevChapter.title}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextChapter && (
            <Link
              to={`/chapters/${nextChapter.id}`}
              className="flex-1 quantum-card p-4 rounded-xl group hover:border-quantum-400/50 transition-all text-right"
            >
              <div className="flex items-center justify-end gap-3">
                <div>
                  <p className="text-gray-500 text-sm">Chapitre suivant</p>
                  <p className="text-white font-medium group-hover:text-quantum-300 transition-colors">
                    {nextChapter.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-quantum-400 transition-colors" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
