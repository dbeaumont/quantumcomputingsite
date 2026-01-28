import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { chapters } from '../data/chapters';
import {
  Trophy, Target, CheckCircle2,
  ArrowRight, Award, TrendingUp, BookOpen
} from 'lucide-react';

export default function Progress() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Connectez-vous pour voir votre progression</h1>
          <Link to="/login" className="text-quantum-400 hover:text-quantum-300">
            Se connecter
          </Link>
        </div>
      </div>
    );
  }

  const completedChapters = user.progress.filter(p => p.completed).length;
  const completedQuizzes = user.progress.filter(p => p.quizCompleted).length;
  const averageScore = user.progress.filter(p => p.quizScore !== null).length > 0
    ? Math.round(
        user.progress
          .filter(p => p.quizScore !== null)
          .reduce((acc, p) => acc + (p.quizScore || 0), 0) /
          user.progress.filter(p => p.quizScore !== null).length
      )
    : 0;

  const getChapterProgress = (chapterId: string) => {
    return user.progress.find(p => p.chapterId === chapterId);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-400';
    if (score >= 60) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-quantum-400 to-purple-400 bg-clip-text text-transparent">
              Votre Progression
            </span>
          </h1>
          <p className="text-gray-400">
            Suivez votre avancement dans l'apprentissage de l'informatique quantique
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="quantum-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-quantum-500/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-quantum-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{completedChapters}/{chapters.length}</p>
                <p className="text-gray-500 text-sm">Chapitres lus</p>
              </div>
            </div>
          </div>

          <div className="quantum-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{completedQuizzes}/{chapters.length}</p>
                <p className="text-gray-500 text-sm">Quiz complétés</p>
              </div>
            </div>
          </div>

          <div className="quantum-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{averageScore}%</p>
                <p className="text-gray-500 text-sm">Score moyen</p>
              </div>
            </div>
          </div>

          <div className="quantum-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">
                  {Math.round((completedChapters / chapters.length) * 100)}%
                </p>
                <p className="text-gray-500 text-sm">Progression totale</p>
              </div>
            </div>
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="quantum-card p-6 rounded-2xl mb-12">
          <h2 className="text-lg font-semibold text-white mb-4">Progression globale</h2>
          <div className="h-4 bg-quantum-950 rounded-full overflow-hidden mb-2">
            <div
              className="h-full progress-bar rounded-full transition-all duration-1000"
              style={{ width: `${(completedChapters / chapters.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>0%</span>
            <span>{Math.round((completedChapters / chapters.length) * 100)}% complété</span>
            <span>100%</span>
          </div>
        </div>

        {/* Detailed progress */}
        <div className="quantum-card p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-white mb-6">Détail par chapitre</h2>

          <div className="space-y-4">
            {chapters.map((chapter, index) => {
              const progress = getChapterProgress(chapter.id);
              const isCompleted = progress?.completed;
              const quizScore = progress?.quizScore;

              return (
                <div
                  key={chapter.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-quantum-950/30 hover:bg-quantum-950/50 transition-colors"
                >
                  {/* Status indicator */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isCompleted
                        ? 'bg-green-500/20'
                        : 'bg-gray-700/50'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    ) : (
                      <span className="text-gray-500 font-medium">{index + 1}</span>
                    )}
                  </div>

                  {/* Chapter info */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-medium truncate ${isCompleted ? 'text-white' : 'text-gray-400'}`}>
                      {chapter.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-gray-500">{chapter.duration}</span>
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
                  </div>

                  {/* Quiz score */}
                  <div className="flex items-center gap-4">
                    {quizScore !== null && quizScore !== undefined ? (
                      <div className="text-center">
                        <div className={`text-lg font-bold ${getScoreColor(quizScore)}`}>
                          {quizScore}%
                        </div>
                        <div className="text-xs text-gray-500">Quiz</div>
                      </div>
                    ) : isCompleted ? (
                      <div className="text-center">
                        <div className="text-gray-500">—</div>
                        <div className="text-xs text-gray-600">Quiz non fait</div>
                      </div>
                    ) : null}

                    {/* Progress bar mini */}
                    {isCompleted && quizScore !== null && quizScore !== undefined && (
                      <div className="w-20 h-2 bg-quantum-950 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${getScoreBg(quizScore)}`}
                          style={{ width: `${quizScore}%` }}
                        />
                      </div>
                    )}

                    {/* Action button */}
                    <Link
                      to={`/chapters/${chapter.id}`}
                      className="px-4 py-2 rounded-lg bg-quantum-500/10 text-quantum-400 hover:bg-quantum-500/20 transition-colors text-sm flex items-center gap-1"
                    >
                      {isCompleted ? 'Revoir' : 'Commencer'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements section */}
        {completedChapters > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-white mb-6">Badges obtenus</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {completedChapters >= 1 && (
                <div className="quantum-card p-4 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-quantum-400 to-purple-500 flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-medium text-white">Premier Pas</p>
                  <p className="text-gray-500 text-sm">Premier chapitre complété</p>
                </div>
              )}

              {completedQuizzes >= 1 && (
                <div className="quantum-card p-4 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-medium text-white">Testeur</p>
                  <p className="text-gray-500 text-sm">Premier quiz réussi</p>
                </div>
              )}

              {averageScore >= 80 && completedQuizzes >= 3 && (
                <div className="quantum-card p-4 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-3">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-medium text-white">Expert</p>
                  <p className="text-gray-500 text-sm">Score moyen 80%+</p>
                </div>
              )}

              {completedChapters === chapters.length && (
                <div className="quantum-card p-4 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-medium text-white">Maître Quantique</p>
                  <p className="text-gray-500 text-sm">Tous les chapitres complétés</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Next steps */}
        {completedChapters < chapters.length && (
          <div className="mt-12">
            <div className="quantum-card p-6 rounded-2xl">
              <h2 className="text-lg font-semibold text-white mb-4">Prochaine étape</h2>
              {(() => {
                const nextChapter = chapters.find(c => !getChapterProgress(c.id)?.completed);
                if (!nextChapter) return null;

                return (
                  <Link
                    to={`/chapters/${nextChapter.id}`}
                    className="flex items-center justify-between p-4 rounded-xl bg-quantum-500/10 hover:bg-quantum-500/20 transition-colors group"
                  >
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Chapitre recommandé</p>
                      <p className="text-white font-medium group-hover:text-quantum-300 transition-colors">
                        {nextChapter.title}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-quantum-400 transition-colors" />
                  </Link>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
