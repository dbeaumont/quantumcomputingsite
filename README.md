# Quantum Computing - Site d'apprentissage

Site interactif de présentation de l'informatique quantique avec cours, quiz QCM et suivi de progression.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)
![License](https://img.shields.io/badge/License-MIT-green)

## Fonctionnalités

- **6 chapitres** couvrant les fondamentaux de l'informatique quantique
  - Introduction à l'informatique quantique
  - Les qubits : unité de base
  - Portes quantiques
  - Algorithmes quantiques fondamentaux
  - Correction d'erreurs quantiques
  - Applications et futur

- **Quiz interactifs** avec explications détaillées
- **Système d'authentification** (mode démo avec stockage local)
- **Tableau de bord** de progression avec achievements
- **Design moderne** avec animations et effets quantiques

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **State** : Zustand
- **Icons** : Lucide React

## Prérequis

- Node.js 20+
- npm ou yarn
- Docker & Docker Compose (optionnel)

## Installation

### Sans Docker

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build

# Lancer en production
npm start
```

### Avec Docker

```bash
# Développement (avec hot-reload)
make dev

# Production
make prod

# Arrêter les conteneurs
make down

# Voir les logs
make logs

# Nettoyer tout
make clean
```

## Commandes Make disponibles

| Commande | Description |
|----------|-------------|
| `make dev` | Lance le serveur de développement |
| `make prod` | Lance le serveur de production |
| `make down` | Arrête tous les conteneurs |
| `make logs` | Affiche les logs |
| `make shell` | Ouvre un shell dans le conteneur |
| `make build` | Build l'image de production |
| `make clean` | Supprime conteneurs, images et volumes |

## Structure du projet

```
├── app/
│   ├── components/       # Composants réutilisables
│   │   ├── Navbar.tsx
│   │   └── QuantumBackground.tsx
│   ├── chapters/         # Pages des chapitres
│   ├── login/            # Page de connexion
│   ├── register/         # Page d'inscription
│   ├── progress/         # Tableau de bord
│   ├── quiz/             # Pages des quiz
│   ├── globals.css       # Styles globaux
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Page d'accueil
├── lib/
│   ├── data.ts           # Contenu (chapitres + quiz)
│   ├── store.ts          # Stores Zustand
│   └── types.ts          # Types TypeScript
├── public/               # Assets statiques
├── Dockerfile            # Image de production
├── Dockerfile.dev        # Image de développement
├── docker-compose.yml    # Orchestration Docker
└── Makefile              # Commandes raccourcies
```

## Accès

Une fois lancé, le site est accessible sur : **http://localhost:3000**

## Mode démo

L'authentification fonctionne en mode démo :
- Entrez n'importe quel email/mot de passe pour créer un compte
- Les données sont stockées localement dans le navigateur

## Licence

MIT
