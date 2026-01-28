import { Chapter, Quiz } from './types'

export const chapters: Chapter[] = [
  {
    id: '1',
    title: 'Introduction à l\'Informatique Quantique',
    description: 'Découvrez les fondements de l\'informatique quantique et pourquoi elle révolutionne le calcul.',
    content: `
# Introduction à l'Informatique Quantique

L'informatique quantique représente une révolution technologique majeure qui exploite les principes de la mécanique quantique pour effectuer des calculs impossibles pour les ordinateurs classiques.

## Qu'est-ce qu'un ordinateur quantique ?

Contrairement aux ordinateurs classiques qui utilisent des **bits** (0 ou 1), les ordinateurs quantiques utilisent des **qubits** qui peuvent être dans une superposition de 0 ET 1 simultanément.

## Pourquoi l'informatique quantique ?

Les ordinateurs classiques atteignent leurs limites pour certains problèmes :
- **Cryptographie** : Casser des codes de chiffrement
- **Simulation moléculaire** : Modéliser des réactions chimiques
- **Optimisation** : Résoudre des problèmes logistiques complexes
- **Intelligence artificielle** : Accélérer l'apprentissage automatique

## Les principes fondamentaux

### 1. La superposition
Un qubit peut représenter 0 et 1 en même temps, multipliant exponentiellement la puissance de calcul.

### 2. L'intrication
Deux qubits intriqués sont corrélés instantanément, quelle que soit la distance.

### 3. L'interférence quantique
Les probabilités quantiques peuvent s'additionner ou s'annuler, permettant d'amplifier les bonnes réponses.

## Les acteurs majeurs

- **IBM** : IBM Quantum avec plus de 1000 qubits
- **Google** : Processeur Sycamore, suprématie quantique
- **Microsoft** : Approche topologique avec Azure Quantum
- **D-Wave** : Ordinateurs quantiques de recuit
- **Startups françaises** : Pasqal, Alice & Bob, Quandela
    `,
    order: 1,
    imageUrl: '/images/intro-quantum.svg',
    icon: 'Cpu',
    duration: '15 min',
    difficulty: 'Débutant'
  },
  {
    id: '2',
    title: 'Les Qubits : Unité de Base',
    description: 'Comprenez le fonctionnement des qubits, ces bits quantiques qui révolutionnent le calcul.',
    content: `
# Les Qubits : Unité de Base

Le qubit (quantum bit) est l'unité fondamentale de l'information quantique, équivalent quantique du bit classique.

## Bit classique vs Qubit

### Bit classique
- État : 0 **OU** 1
- Représentation : transistor on/off

### Qubit
- État : superposition de |0⟩ **ET** |1⟩
- Notation : |ψ⟩ = α|0⟩ + β|1⟩

## La sphère de Bloch

La sphère de Bloch est une représentation géométrique de l'état d'un qubit :
- **Pôle Nord** : état |0⟩
- **Pôle Sud** : état |1⟩
- **Équateur** : superpositions équilibrées
- **Tout point** : une superposition possible

## Types de qubits physiques

### Qubits supraconducteurs
- Utilisés par IBM, Google
- Circuits électriques refroidis à ~15 mK
- Temps de cohérence : ~100 μs

### Ions piégés
- Utilisés par IonQ, Quantinuum
- Atomes ionisés maintenus par champs électromagnétiques
- Haute fidélité des portes

### Photons
- Utilisés par Xanadu, PsiQuantum
- Qubits volants pour la communication
- Fonctionnement à température ambiante

### Atomes neutres
- Utilisés par Pasqal, QuEra
- Atomes piégés par pinces optiques
- Scalabilité prometteuse

## Défis technologiques

1. **Décohérence** : Perte de l'état quantique
2. **Erreurs** : Nécessité de correction d'erreurs
3. **Scalabilité** : Augmenter le nombre de qubits
4. **Connectivité** : Relier les qubits entre eux
    `,
    order: 2,
    imageUrl: '/images/qubit.svg',
    icon: 'Circle',
    duration: '20 min',
    difficulty: 'Débutant'
  },
  {
    id: '3',
    title: 'Portes Quantiques',
    description: 'Maîtrisez les opérations de base qui manipulent les qubits dans un circuit quantique.',
    content: `
# Portes Quantiques

Les portes quantiques sont les opérations élémentaires qui transforment l'état des qubits, analogues aux portes logiques classiques.

## Portes à un qubit

### Porte X (NOT quantique)
- Inverse l'état : |0⟩ ↔ |1⟩
- Matrice :
\`\`\`
X = | 0  1 |
    | 1  0 |
\`\`\`

### Porte Z
- Introduit une phase : |1⟩ → -|1⟩
- Laisse |0⟩ inchangé

### Porte Hadamard (H)
- Crée une superposition équilibrée
- H|0⟩ = (|0⟩ + |1⟩)/√2
- Fondamentale pour les algorithmes quantiques

### Portes de rotation
- **Rx(θ)** : Rotation autour de l'axe X
- **Ry(θ)** : Rotation autour de l'axe Y
- **Rz(θ)** : Rotation autour de l'axe Z

## Portes à deux qubits

### Porte CNOT (Controlled-NOT)
- Porte conditionnelle
- Inverse le qubit cible si le contrôle est |1⟩
- Essentielle pour créer l'intrication

### Porte CZ (Controlled-Z)
- Applique Z si le contrôle est |1⟩

### Porte SWAP
- Échange les états de deux qubits

## Universalité

Un ensemble de portes est **universel** s'il permet d'approximer n'importe quelle opération quantique.

Exemples d'ensembles universels :
- {H, T, CNOT}
- {Rx, Ry, CNOT}

## Circuits quantiques

Un algorithme quantique est représenté par un **circuit** :
- Lignes horizontales = qubits
- Boîtes = portes quantiques
- Lecture de gauche à droite
    `,
    order: 3,
    imageUrl: '/images/gates.svg',
    icon: 'GitBranch',
    duration: '25 min',
    difficulty: 'Intermédiaire'
  },
  {
    id: '4',
    title: 'Algorithmes Quantiques Fondamentaux',
    description: 'Explorez les algorithmes qui démontrent l\'avantage quantique sur les méthodes classiques.',
    content: `
# Algorithmes Quantiques Fondamentaux

Les algorithmes quantiques exploitent la superposition et l'intrication pour résoudre certains problèmes plus efficacement.

## Algorithme de Deutsch-Jozsa

### Problème
Déterminer si une fonction f:{0,1}ⁿ→{0,1} est constante ou équilibrée.

### Avantage quantique
- Classique : 2^(n-1)+1 évaluations (pire cas)
- Quantique : **1 seule** évaluation

## Algorithme de Grover

### Problème
Rechercher un élément dans une base de données non triée.

### Avantage quantique
- Classique : O(N) requêtes
- Quantique : O(√N) requêtes

### Applications
- Recherche dans des bases de données
- Optimisation combinatoire
- Cryptanalyse (accélération limitée)

## Algorithme de Shor

### Problème
Factoriser un entier N en facteurs premiers.

### Avantage quantique
- Classique : temps exponentiel
- Quantique : temps **polynomial** O((log N)³)

### Impact
- Menace pour RSA et la cryptographie actuelle
- Motivation pour la cryptographie post-quantique

## Algorithme VQE

### Variational Quantum Eigensolver
- Algorithme hybride classique-quantique
- Trouve l'état fondamental de systèmes moléculaires
- Adapté aux ordinateurs NISQ actuels

## Algorithme QAOA

### Quantum Approximate Optimization Algorithm
- Résout des problèmes d'optimisation combinatoire
- Approche variationnelle
- Applications en logistique, finance
    `,
    order: 4,
    imageUrl: '/images/algorithms.svg',
    icon: 'Zap',
    duration: '30 min',
    difficulty: 'Intermédiaire'
  },
  {
    id: '5',
    title: 'Correction d\'Erreurs Quantiques',
    description: 'Découvrez comment protéger l\'information quantique de la décohérence et des erreurs.',
    content: `
# Correction d'Erreurs Quantiques

La correction d'erreurs quantiques est essentielle pour construire des ordinateurs quantiques fiables et tolérants aux fautes.

## Le défi de la décohérence

### Sources d'erreurs
- Interaction avec l'environnement
- Imperfections des portes
- Erreurs de mesure
- Bruit thermique

### Types d'erreurs
- **Bit-flip** : |0⟩ ↔ |1⟩ (comme classique)
- **Phase-flip** : |1⟩ → -|1⟩
- **Erreurs combinées**

## Pourquoi c'est difficile ?

### Théorème de non-clonage
On ne peut pas copier un état quantique inconnu.

### Mesure destructive
Mesurer détruit la superposition.

## Codes correcteurs

### Code de Shor (9 qubits)
- Premier code quantique complet
- Corrige bit-flip ET phase-flip
- Encode 1 qubit logique dans 9 physiques

### Code de Steane (7 qubits)
- Plus efficace que Shor
- Basé sur les codes CSS

### Codes de surface
- Architecture 2D de qubits
- Très tolérant aux fautes
- Favori pour les implémentations pratiques

## Qubits logiques vs physiques

- **Qubit physique** : Le qubit réel, sujet aux erreurs
- **Qubit logique** : Qubit encodé, protégé par correction d'erreurs

### Overhead
Un qubit logique peut nécessiter 1000+ qubits physiques pour une tolérance aux fautes complète.

## État de l'art

- Google : démonstration de suppression d'erreurs (2023)
- IBM : codes de correction sur Eagle
- Objectif : atteindre le seuil de tolérance aux fautes
    `,
    order: 5,
    imageUrl: '/images/error-correction.svg',
    icon: 'Shield',
    duration: '25 min',
    difficulty: 'Avancé'
  },
  {
    id: '6',
    title: 'Applications et Futur',
    description: 'Explorez les applications concrètes et les perspectives futures de l\'informatique quantique.',
    content: `
# Applications et Futur de l'Informatique Quantique

L'informatique quantique promet de transformer de nombreux secteurs, de la médecine à la finance.

## Applications actuelles et futures

### Chimie et pharmacie
- **Simulation moléculaire** : Conception de médicaments
- **Catalyse** : Optimisation des processus chimiques
- **Batteries** : Nouveaux matériaux pour le stockage d'énergie

### Finance
- **Optimisation de portefeuille** : Allocation d'actifs
- **Analyse de risque** : Simulations Monte Carlo
- **Détection de fraude** : Pattern matching quantique

### Logistique
- **Routage de véhicules** : Optimisation des trajets
- **Supply chain** : Gestion des stocks
- **Planification** : Scheduling complexe

### Intelligence artificielle
- **Apprentissage automatique quantique** : QML
- **Optimisation** : Entraînement de réseaux de neurones
- **Échantillonnage** : Génération de données

### Cryptographie
- **Cryptographie post-quantique** : Résistante aux attaques quantiques
- **Distribution quantique de clés (QKD)** : Communication ultra-sécurisée

## Feuille de route

### Ère NISQ (Maintenant - 2030)
- Noisy Intermediate-Scale Quantum
- 50-1000 qubits bruités
- Algorithmes hybrides
- Démonstrations d'avantage quantique

### Ère tolérante aux fautes (2030+)
- Qubits logiques corrigés
- Algorithmes de Shor et Grover à grande échelle
- Applications commerciales majeures

## Défis à relever

1. **Scalabilité** : Passer à des millions de qubits
2. **Cohérence** : Maintenir les états quantiques
3. **Logiciel** : Développer les outils de programmation
4. **Talent** : Former les ingénieurs quantiques

## L'écosystème français

- **Pasqal** : Ordinateurs à atomes neutres
- **Alice & Bob** : Qubits cats pour la correction d'erreurs
- **Quandela** : Processeurs photoniques
- **Plan quantique national** : 1.8 milliard d'euros
    `,
    order: 6,
    imageUrl: '/images/future.svg',
    icon: 'Rocket',
    duration: '20 min',
    difficulty: 'Débutant'
  }
]

export const quizzes: Quiz[] = [
  {
    id: '1',
    chapterId: '1',
    title: 'Quiz : Introduction à l\'Informatique Quantique',
    questions: [
      {
        id: '1-1',
        text: 'Quelle est l\'unité fondamentale d\'information en informatique quantique ?',
        options: ['Le bit', 'Le qubit', 'L\'octet', 'Le transistor'],
        correctAnswer: 1,
        explanation: 'Le qubit (quantum bit) est l\'unité fondamentale de l\'information quantique, capable d\'être en superposition de 0 et 1.'
      },
      {
        id: '1-2',
        text: 'Quelle entreprise a annoncé la "suprématie quantique" en 2019 ?',
        options: ['IBM', 'Microsoft', 'Google', 'Intel'],
        correctAnswer: 2,
        explanation: 'Google a annoncé avoir atteint la suprématie quantique avec son processeur Sycamore de 53 qubits en 2019.'
      },
      {
        id: '1-3',
        text: 'Quel principe permet à un qubit d\'être dans l\'état 0 ET 1 simultanément ?',
        options: ['L\'intrication', 'La superposition', 'La décohérence', 'L\'interférence'],
        correctAnswer: 1,
        explanation: 'La superposition quantique permet à un qubit d\'exister dans une combinaison linéaire des états |0⟩ et |1⟩.'
      },
      {
        id: '1-4',
        text: 'Quel domaine n\'est PAS une application majeure de l\'informatique quantique ?',
        options: ['Cryptographie', 'Simulation moléculaire', 'Traitement de texte', 'Optimisation'],
        correctAnswer: 2,
        explanation: 'Le traitement de texte standard ne bénéficie pas de l\'avantage quantique. Les domaines prometteurs sont la cryptographie, la simulation et l\'optimisation.'
      }
    ]
  },
  {
    id: '2',
    chapterId: '2',
    title: 'Quiz : Les Qubits',
    questions: [
      {
        id: '2-1',
        text: 'Qu\'est-ce que la sphère de Bloch ?',
        options: [
          'Un type de qubit physique',
          'Une représentation géométrique de l\'état d\'un qubit',
          'Un algorithme quantique',
          'Un système de refroidissement'
        ],
        correctAnswer: 1,
        explanation: 'La sphère de Bloch est une représentation géométrique tridimensionnelle de tous les états possibles d\'un qubit.'
      },
      {
        id: '2-2',
        text: 'À quelle température fonctionnent les qubits supraconducteurs ?',
        options: ['Température ambiante', '0°C', '~15 millikelvins', '-50°C'],
        correctAnswer: 2,
        explanation: 'Les qubits supraconducteurs nécessitent un refroidissement extrême à environ 15 millikelvins, plus froid que l\'espace.'
      },
      {
        id: '2-3',
        text: 'Quelle startup française développe des ordinateurs à atomes neutres ?',
        options: ['Alice & Bob', 'Pasqal', 'Quandela', 'Atos'],
        correctAnswer: 1,
        explanation: 'Pasqal, cofondée par Alain Aspect (Nobel 2022), développe des processeurs quantiques basés sur des atomes neutres piégés.'
      }
    ]
  },
  {
    id: '3',
    chapterId: '3',
    title: 'Quiz : Portes Quantiques',
    questions: [
      {
        id: '3-1',
        text: 'Que fait la porte Hadamard (H) appliquée à |0⟩ ?',
        options: [
          'Elle donne |1⟩',
          'Elle donne une superposition (|0⟩ + |1⟩)/√2',
          'Elle ne change rien',
          'Elle détruit le qubit'
        ],
        correctAnswer: 1,
        explanation: 'La porte Hadamard crée une superposition équilibrée : H|0⟩ = (|0⟩ + |1⟩)/√2.'
      },
      {
        id: '3-2',
        text: 'Quelle porte est essentielle pour créer l\'intrication ?',
        options: ['Porte X', 'Porte H', 'Porte CNOT', 'Porte Z'],
        correctAnswer: 2,
        explanation: 'La porte CNOT (Controlled-NOT), combinée avec Hadamard, permet de créer des états intriqués comme les paires de Bell.'
      },
      {
        id: '3-3',
        text: 'Un ensemble de portes est dit "universel" s\'il peut :',
        options: [
          'Fonctionner sur tous les types de qubits',
          'Approximer n\'importe quelle opération quantique',
          'Corriger toutes les erreurs',
          'Être fabriqué facilement'
        ],
        correctAnswer: 1,
        explanation: 'Un ensemble universel de portes peut approximer n\'importe quelle transformation unitaire avec une précision arbitraire.'
      }
    ]
  },
  {
    id: '4',
    chapterId: '4',
    title: 'Quiz : Algorithmes Quantiques',
    questions: [
      {
        id: '4-1',
        text: 'Quelle est la complexité de l\'algorithme de Grover pour chercher dans N éléments ?',
        options: ['O(N)', 'O(log N)', 'O(√N)', 'O(N²)'],
        correctAnswer: 2,
        explanation: 'L\'algorithme de Grover offre une accélération quadratique : O(√N) au lieu de O(N) classiquement.'
      },
      {
        id: '4-2',
        text: 'Quel algorithme menace la cryptographie RSA actuelle ?',
        options: ['Algorithme de Grover', 'Algorithme de Shor', 'Algorithme VQE', 'Algorithme de Deutsch'],
        correctAnswer: 1,
        explanation: 'L\'algorithme de Shor peut factoriser des entiers en temps polynomial, ce qui casse RSA et les systèmes basés sur la factorisation.'
      },
      {
        id: '4-3',
        text: 'VQE est un algorithme hybride utilisé pour :',
        options: [
          'La cryptographie',
          'La recherche dans des bases de données',
          'Trouver l\'état fondamental de molécules',
          'Le routage de véhicules'
        ],
        correctAnswer: 2,
        explanation: 'VQE (Variational Quantum Eigensolver) est conçu pour simuler des systèmes moléculaires et trouver leurs états d\'énergie minimale.'
      },
      {
        id: '4-4',
        text: 'Que signifie QAOA ?',
        options: [
          'Quantum Algorithm for Optimization Analysis',
          'Quantum Approximate Optimization Algorithm',
          'Quick Automated Optimization Approach',
          'Quantum Advanced Operation Architecture'
        ],
        correctAnswer: 1,
        explanation: 'QAOA (Quantum Approximate Optimization Algorithm) est un algorithme variationnel pour résoudre des problèmes d\'optimisation combinatoire.'
      }
    ]
  },
  {
    id: '5',
    chapterId: '5',
    title: 'Quiz : Correction d\'Erreurs',
    questions: [
      {
        id: '5-1',
        text: 'Pourquoi ne peut-on pas simplement copier un qubit pour le protéger ?',
        options: [
          'C\'est trop coûteux',
          'Le théorème de non-clonage l\'interdit',
          'Les copies seraient de mauvaise qualité',
          'Cela prendrait trop de temps'
        ],
        correctAnswer: 1,
        explanation: 'Le théorème de non-clonage quantique démontre qu\'il est impossible de copier parfaitement un état quantique inconnu.'
      },
      {
        id: '5-2',
        text: 'Combien de qubits physiques utilise le code de Shor ?',
        options: ['3', '5', '7', '9'],
        correctAnswer: 3,
        explanation: 'Le code de Shor encode 1 qubit logique dans 9 qubits physiques et peut corriger les erreurs de bit-flip et phase-flip.'
      },
      {
        id: '5-3',
        text: 'Quel type de code est actuellement favori pour les implémentations pratiques ?',
        options: ['Code de Shor', 'Code de Steane', 'Codes de surface', 'Code de Hamming'],
        correctAnswer: 2,
        explanation: 'Les codes de surface utilisent une architecture 2D de qubits et sont très tolérants aux fautes, les rendant pratiques pour l\'implémentation.'
      }
    ]
  },
  {
    id: '6',
    chapterId: '6',
    title: 'Quiz : Applications et Futur',
    questions: [
      {
        id: '6-1',
        text: 'Que signifie NISQ ?',
        options: [
          'New Integrated Silicon Quantum',
          'Noisy Intermediate-Scale Quantum',
          'Network of Interconnected Superconducting Qubits',
          'Non-Interactive Secure Quantum'
        ],
        correctAnswer: 1,
        explanation: 'NISQ désigne l\'ère actuelle des ordinateurs quantiques : Noisy (bruités), Intermediate-Scale (taille moyenne, 50-1000 qubits).'
      },
      {
        id: '6-2',
        text: 'Quel secteur ne bénéficiera PAS directement de l\'informatique quantique ?',
        options: ['Pharmacie', 'Finance', 'Agriculture traditionnelle', 'Cybersécurité'],
        correctAnswer: 2,
        explanation: 'L\'agriculture traditionnelle ne fait pas partie des domaines qui bénéficieront directement des avancées quantiques, contrairement à la pharma, finance et cybersécurité.'
      },
      {
        id: '6-3',
        text: 'Quel montant le plan quantique français prévoit-il d\'investir ?',
        options: ['500 millions €', '1 milliard €', '1.8 milliard €', '3 milliards €'],
        correctAnswer: 2,
        explanation: 'Le plan quantique national français annoncé en 2021 prévoit un investissement de 1.8 milliard d\'euros sur 5 ans.'
      },
      {
        id: '6-4',
        text: 'QKD permet de :',
        options: [
          'Accélérer les calculs',
          'Distribuer des clés cryptographiques de manière sécurisée',
          'Corriger les erreurs quantiques',
          'Simuler des molécules'
        ],
        correctAnswer: 1,
        explanation: 'QKD (Quantum Key Distribution) permet de distribuer des clés de chiffrement avec une sécurité garantie par les lois de la physique quantique.'
      }
    ]
  }
]
