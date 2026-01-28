import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { chapters } from '../data/chapters';
import {
  Atom, Waves, Cpu, Code, Lightbulb, AlertTriangle, Network,
  Clock, CheckCircle2, ArrowRight, Lock, GitCompare
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Atom,
  Waves,
  Cpu,
  Code,
  Lightbulb,
  AlertTriangle,
  Network,
  GitCompare,
};

export default function Chapters() {
  const { user } = useAuth();

  const getChapterProgress = (chapterId: string) => {
    if (!user) return null;
    return user.progress.find(p => p.chapterId === chapterId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant':
        return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Intermédiaire':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Avancé':
        return 'text-red-400 bg-red-400/10 border-red-400/30';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-quantum-400 to-purple-400 bg-clip-text text-transparent">
              Chapitres
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explorez les fondamentaux de l'informatique quantique à travers nos chapitres
            interactifs, des concepts de base aux applications avancées.
          </p>
        </div>

        {/* Progress overview */}
        {user && (
          <div className="mb-12">
            <div className="quantum-card p-6 rounded-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white mb-1">Votre progression</h2>
                  <p className="text-gray-400 text-sm">
                    {user.progress.filter(p => p.completed).length} / {chapters.length} chapitres complétés
                  </p>
                </div>
                <div className="w-full sm:w-64">
                  <div className="h-3 bg-quantum-950 rounded-full overflow-hidden">
                    <div
                      className="h-full progress-bar rounded-full transition-all duration-500"
                      style={{
                        width: `${(user.progress.filter(p => p.completed).length / chapters.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chapters grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => {
            const Icon = iconMap[chapter.icon] || Atom;
            const progress = getChapterProgress(chapter.id);
            const isCompleted = progress?.completed;
            const quizScore = progress?.quizScore;

            return (
              <Link
                key={chapter.id}
                to={`/chapters/${chapter.id}`}
                className="group quantum-card p-6 rounded-2xl relative overflow-hidden"
              >
                {/* Chapter number */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-quantum-500/10">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Completion badge */}
                {isCompleted && (
                  <div className="absolute top-4 right-4 bg-green-500/20 rounded-full p-1">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${chapter.color}20` }}
                >
                  <Icon className="w-7 h-7" style={{ color: chapter.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-quantum-300 transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {chapter.subtitle}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{chapter.duration}</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs border ${getDifficultyColor(
                      chapter.difficulty
                    )}`}
                  >
                    {chapter.difficulty}
                  </span>
                </div>

                {/* Quiz score if completed */}
                {quizScore !== null && quizScore !== undefined && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Quiz:</span>
                    <span
                      className={`font-semibold ${
                        quizScore >= 70 ? 'text-green-400' : quizScore >= 50 ? 'text-yellow-400' : 'text-red-400'
                      }`}
                    >
                      {quizScore}%
                    </span>
                  </div>
                )}

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-quantum-400" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Coming soon placeholder */}
        <div className="mt-6">
          <div className="quantum-card p-6 rounded-2xl opacity-50 cursor-not-allowed">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gray-700/20 flex items-center justify-center">
                <Lock className="w-7 h-7 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-500">Plus de chapitres à venir...</h3>
                <p className="text-gray-600 text-sm">
                  De nouveaux contenus seront ajoutés régulièrement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
