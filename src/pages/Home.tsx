import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Atom, BookOpen, Award, Zap, ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const { user } = useAuth();

  const features = [
    {
      icon: BookOpen,
      title: 'Chapitres Interactifs',
      description: 'Apprenez les concepts de l\'informatique quantique à travers des explications claires et des illustrations dynamiques.',
    },
    {
      icon: Zap,
      title: 'Quiz & Exercices',
      description: 'Testez vos connaissances avec des QCM à la fin de chaque chapitre pour consolider votre apprentissage.',
    },
    {
      icon: Award,
      title: 'Suivi de Progression',
      description: 'Visualisez votre avancement et vos scores pour suivre votre parcours d\'apprentissage.',
    },
  ];

  const topics = [
    'Superposition quantique',
    'Intrication',
    'Algorithmes de Shor & Grover',
    'Technologies de qubits',
    'Applications industrielles',
    'Défis techniques',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Floating atom animation */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-quantum-500/30 rounded-full blur-3xl animate-pulse-slow" />
              <Atom className="w-24 h-24 text-quantum-400 animate-float relative" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-quantum-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                QuantumSite
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Découvrez l'informatique quantique
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Un parcours d'apprentissage interactif pour comprendre les concepts,
              la physique et les applications de cette révolution technologique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link
                  to="/chapters"
                  className="quantum-btn px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-2 group"
                >
                  Commencer l'apprentissage
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="quantum-btn px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-2 group"
                  >
                    Commencer gratuitement
                    <Sparkles className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/login"
                    className="px-8 py-4 rounded-xl border border-quantum-500/50 text-quantum-300 font-semibold text-lg hover:bg-quantum-500/10 transition-colors"
                  >
                    Se connecter
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-quantum-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-quantum-400 to-purple-400 bg-clip-text text-transparent">
              Une expérience d'apprentissage unique
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Des outils pédagogiques conçus pour rendre l'informatique quantique accessible à tous.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="quantum-card p-8 rounded-2xl"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-quantum-500 to-purple-500 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="py-20 px-4 bg-quantum-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-quantum-400 to-purple-400 bg-clip-text text-transparent">
              Ce que vous allez apprendre
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            7 chapitres complets couvrant tous les aspects de l'informatique quantique.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-quantum-500/10 border border-quantum-500/30 text-quantum-300 hover:bg-quantum-500/20 transition-colors cursor-default"
              >
                {topic}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Inclut des références aux dernières avancées, notamment les travaux de{' '}
              <span className="text-quantum-400 font-medium">C12</span> sur les qubits à nanotubes de carbone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="quantum-card p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-quantum-500/20 to-purple-500/20" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à explorer le monde quantique ?
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Rejoignez-nous pour un voyage fascinant dans l'univers de l'informatique quantique.
              </p>
              {user ? (
                <Link
                  to="/chapters"
                  className="inline-flex items-center gap-2 quantum-btn px-8 py-4 rounded-xl text-white font-semibold text-lg"
                >
                  Accéder aux chapitres
                  <ArrowRight className="w-5 h-5" />
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 quantum-btn px-8 py-4 rounded-xl text-white font-semibold text-lg"
                >
                  Créer un compte gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
