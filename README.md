# QuantumSite

Une plateforme d'apprentissage interactive pour découvrir l'informatique quantique.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)
![License](https://img.shields.io/badge/License-MIT-green)

## Aperçu

QuantumSite est un site web éducatif conçu pour rendre l'informatique quantique accessible à tous. Il propose des chapitres interactifs avec des illustrations animées, des quiz pour tester ses connaissances, et un suivi de progression personnalisé.

### Fonctionnalités

- **8 chapitres complets** couvrant les fondamentaux de l'informatique quantique
- **Illustrations SVG animées** pour visualiser les concepts abstraits
- **Quiz interactifs** avec explications détaillées
- **Système d'authentification local** (connexion/inscription) avec stockage dans le navigateur
- **Suivi de progression** (scores, badges, statistiques)
- **Design moderne** avec thème sombre et effets quantiques

## Contenu pédagogique

| Chapitre | Thème | Difficulté |
|----------|-------|------------|
| 1 | Introduction à l'informatique quantique | Débutant |
| 2 | Physique quantique sous-jacente | Intermédiaire |
| 3 | Logique classique vs quantique | Intermédiaire |
| 4 | Technologies de qubits | Intermédiaire |
| 5 | Algorithmes quantiques | Intermédiaire |
| 6 | Applications de l'informatique quantique | Débutant |
| 7 | Défis et obstacles | Intermédiaire |
| 8 | Écosystème quantique | Débutant |

Les chapitres mentionnent les acteurs majeurs du domaine, dont **C12** et ses qubits à nanotubes de carbone.

## Installation

### Prérequis

- Node.js 20+
- npm ou yarn
- Docker (optionnel)

### Développement local

```bash
# Cloner le repository
git clone https://github.com/votre-username/quantumsite.git
cd quantumsite

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Docker

```bash
# Production (port 80)
docker compose up -d quantumsite

# Développement avec hot-reload (port 5173)
docker compose --profile dev up quantumsite-dev

# Arrêter les conteneurs
docker compose down
```

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérifie le code avec ESLint |

## Structure du projet

```
quantumsite/
├── src/
│   ├── components/
│   │   ├── Layout.tsx              # Navigation et mise en page
│   │   └── QuantumIllustration.tsx # Illustrations SVG animées
│   ├── context/
│   │   └── AuthContext.tsx         # Gestion de l'authentification
│   ├── data/
│   │   └── chapters.ts             # Contenu des chapitres et quiz
│   ├── pages/
│   │   ├── Home.tsx                # Page d'accueil
│   │   ├── Login.tsx               # Connexion / Inscription
│   │   ├── Chapters.tsx            # Liste des chapitres
│   │   ├── ChapterDetail.tsx       # Contenu d'un chapitre
│   │   └── Progress.tsx            # Suivi de progression
│   ├── App.tsx                     # Configuration du routing
│   ├── main.tsx                    # Point d'entrée
│   └── index.css                   # Styles globaux
├── public/
│   └── quantum-icon.svg            # Favicon
├── Dockerfile                      # Image de production
├── Dockerfile.dev                  # Image de développement
├── docker-compose.yml              # Orchestration Docker
├── nginx.conf                      # Configuration Nginx
└── package.json
```

## Technologies

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router** - Routing côté client
- **Lucide React** - Icônes
- **Docker** - Conteneurisation
- **Nginx** - Serveur web de production

## Personnalisation

### Ajouter un chapitre

Éditez le fichier `src/data/chapters.ts` et ajoutez un nouvel objet au tableau `chapters` :

```typescript
{
  id: 'nouveau-chapitre',
  title: 'Titre du chapitre',
  subtitle: 'Description courte',
  icon: 'Atom', // Icône Lucide
  color: '#6366f1',
  duration: '15 min',
  difficulty: 'Débutant',
  sections: [
    {
      title: 'Section 1',
      content: 'Contenu avec **markdown** basique...',
      illustration: 'nom-illustration' // optionnel
    }
  ],
  quiz: [
    {
      id: 'q1',
      question: 'Question ?',
      options: ['A', 'B', 'C', 'D'],
      correctAnswer: 0,
      explanation: 'Explication de la réponse.'
    }
  ]
}
```

### Ajouter une illustration

Ajoutez un nouveau cas dans `src/components/QuantumIllustration.tsx` :

```typescript
'nom-illustration': (
  <svg viewBox="0 0 400 200" className={className}>
    {/* Votre SVG */}
  </svg>
),
```

## Déploiement

### Vercel / Netlify

Le projet est prêt pour un déploiement sur Vercel ou Netlify. Connectez simplement votre repository.

### Docker en production

```bash
# Build l'image
docker build -t quantumsite .

# Lance le conteneur
docker run -d -p 80:80 quantumsite
```

### Variables d'environnement

Aucune variable d'environnement n'est requise. Les données utilisateur sont stockées dans le localStorage du navigateur.

## Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push sur la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Remerciements

- Les équipes de recherche en informatique quantique
- [C12](https://www.c12qe.com/) pour leur approche innovante des qubits
- La communauté open source React et Tailwind
