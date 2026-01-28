export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  duration: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  sections: {
    title: string;
    content: string;
    illustration?: string;
  }[];
  quiz: QuizQuestion[];
}

export const chapters: Chapter[] = [
  {
    id: 'introduction',
    title: 'Introduction à l\'Informatique Quantique',
    subtitle: 'Découvrez les fondamentaux de cette révolution technologique',
    icon: 'Atom',
    color: '#6366f1',
    duration: '15 min',
    difficulty: 'Débutant',
    sections: [
      {
        title: 'Qu\'est-ce que l\'informatique quantique ?',
        content: `L'informatique quantique représente un paradigme radicalement différent du calcul classique. Contrairement aux ordinateurs traditionnels qui manipulent des bits (0 ou 1), les ordinateurs quantiques utilisent des **qubits** capables d'exister dans plusieurs états simultanément.

Cette propriété, appelée **superposition**, permet aux ordinateurs quantiques de traiter un nombre exponentiellement plus grand de possibilités en parallèle. Imaginez pouvoir lire tous les livres d'une bibliothèque en même temps plutôt qu'un par un !

L'informatique quantique n'est pas destinée à remplacer l'informatique classique, mais à la compléter pour des problèmes spécifiques où elle excelle : cryptographie, simulation moléculaire, optimisation, et intelligence artificielle.`,
        illustration: 'qubit-superposition'
      },
      {
        title: 'Histoire et évolution',
        content: `L'idée de l'informatique quantique remonte aux années 1980, avec les travaux pionniers de **Richard Feynman** et **David Deutsch**. Feynman a suggéré qu'un ordinateur quantique pourrait simuler efficacement les systèmes physiques quantiques.

**Jalons importants :**
- **1994** : Peter Shor développe un algorithme quantique capable de factoriser des nombres premiers exponentiellement plus vite
- **1996** : Lov Grover propose un algorithme de recherche quadratiquement plus rapide
- **2019** : Google annonce la "suprématie quantique" avec son processeur Sycamore
- **2023-2024** : Des entreprises comme IBM, Google, et des startups innovantes comme **C12** font des avancées majeures

Aujourd'hui, nous sommes dans l'ère NISQ (Noisy Intermediate-Scale Quantum), avec des ordinateurs quantiques de 50 à quelques milliers de qubits, encore sujets aux erreurs mais déjà utiles pour certaines applications.`,
        illustration: 'quantum-timeline'
      },
      {
        title: 'Pourquoi c\'est révolutionnaire ?',
        content: `L'informatique quantique promet de résoudre des problèmes actuellement **impossibles** pour les superordinateurs classiques :

**🧬 Simulation moléculaire**
Comprendre le repliement des protéines, concevoir de nouveaux médicaments, créer des matériaux révolutionnaires. Une molécule de caféine nécessiterait plus d'atomes que l'univers observable pour être simulée classiquement !

**🔐 Cryptographie**
Les algorithmes quantiques peuvent casser les systèmes de chiffrement actuels (RSA), mais aussi créer des communications inviolables grâce à la distribution de clés quantiques (QKD).

**📊 Optimisation**
Résoudre des problèmes logistiques complexes : routes optimales, gestion de portefeuilles financiers, planification industrielle.

**🤖 Intelligence Artificielle**
Accélérer l'apprentissage automatique et découvrir des patterns dans des ensembles de données massifs.`
      }
    ],
    quiz: [
      {
        id: 'intro-q1',
        question: 'Quelle est la principale différence entre un bit classique et un qubit ?',
        options: [
          'Un qubit est plus petit physiquement',
          'Un qubit peut exister dans plusieurs états simultanément (superposition)',
          'Un qubit est plus rapide',
          'Un qubit consomme moins d\'énergie'
        ],
        correctAnswer: 1,
        explanation: 'La superposition permet au qubit d\'être dans une combinaison des états 0 et 1 simultanément, contrairement au bit classique qui est soit 0, soit 1.'
      },
      {
        id: 'intro-q2',
        question: 'Qui a proposé l\'idée qu\'un ordinateur quantique pourrait simuler des systèmes physiques quantiques ?',
        options: [
          'Albert Einstein',
          'Peter Shor',
          'Richard Feynman',
          'Alan Turing'
        ],
        correctAnswer: 2,
        explanation: 'Richard Feynman a suggéré cette idée dans les années 1980, posant les bases de l\'informatique quantique.'
      },
      {
        id: 'intro-q3',
        question: 'Que signifie l\'acronyme NISQ ?',
        options: [
          'New Integrated Silicon Quantum',
          'Noisy Intermediate-Scale Quantum',
          'Non-Invasive Superconducting Quantum',
          'Next-generation Intelligent System Quantum'
        ],
        correctAnswer: 1,
        explanation: 'NISQ désigne l\'ère actuelle des ordinateurs quantiques : de taille intermédiaire (50-1000+ qubits) et encore bruités (sujets aux erreurs).'
      }
    ]
  },
  {
    id: 'physique-quantique',
    title: 'La Physique Quantique Sous-jacente',
    subtitle: 'Comprendre les principes physiques fondamentaux',
    icon: 'Waves',
    color: '#8b5cf6',
    duration: '25 min',
    difficulty: 'Intermédiaire',
    sections: [
      {
        title: 'La superposition quantique',
        content: `La **superposition** est le premier pilier de la mécanique quantique appliquée à l'informatique. Un système quantique peut exister dans une combinaison linéaire de plusieurs états jusqu'à ce qu'il soit mesuré.

**Mathématiquement**, un qubit dans l'état de superposition s'écrit :
|ψ⟩ = α|0⟩ + β|1⟩

Où α et β sont des nombres complexes tels que |α|² + |β|² = 1. Ces coefficients déterminent la probabilité d'obtenir 0 ou 1 lors de la mesure.

**L'expérience du chat de Schrödinger** illustre ce concept : un chat dans une boîte serait "vivant ET mort" tant qu'on n'ouvre pas la boîte. Bien sûr, à l'échelle macroscopique, cela ne fonctionne pas ainsi, mais pour des particules quantiques, c'est la réalité !

La superposition permet à N qubits de représenter 2^N états simultanément. Avec 300 qubits, on pourrait théoriquement représenter plus d'états qu'il n'y a d'atomes dans l'univers observable.`,
        illustration: 'superposition-bloch'
      },
      {
        title: 'L\'intrication quantique',
        content: `L'**intrication** (ou enchevêtrement) est peut-être le phénomène le plus mystérieux de la physique quantique. Quand deux particules sont intriquées, leurs états deviennent corrélés de manière instantanée, quelle que soit la distance qui les sépare.

Einstein qualifiait ce phénomène d'"action fantôme à distance" (spooky action at a distance), car il semblait violer la relativité. Mais les expériences ont confirmé son existence !

**En pratique :**
- Si deux qubits sont intriqués dans l'état |00⟩ + |11⟩ (état de Bell)
- Mesurer le premier qubit comme "0" garantit que le second sera aussi "0"
- Cette corrélation est instantanée, même si les qubits sont séparés par des années-lumière

**Applications :**
- **Téléportation quantique** : transférer l'état d'un qubit via l'intrication
- **Distribution de clés quantiques** : créer des communications sécurisées
- **Algorithmes quantiques** : l'intrication est essentielle pour obtenir un avantage quantique`,
        illustration: 'entanglement'
      },
      {
        title: 'La mesure et la décohérence',
        content: `**La mesure quantique** est un processus fondamental et irréversible. Lorsqu'on mesure un qubit en superposition, celui-ci "s'effondre" dans l'un des états de base (0 ou 1) avec une probabilité déterminée par ses amplitudes.

C'est pourquoi les algorithmes quantiques doivent être soigneusement conçus pour manipuler les probabilités avant la mesure finale.

**La décohérence** est l'ennemi principal des ordinateurs quantiques. C'est le processus par lequel un système quantique perd sa cohérence (sa superposition) en interagissant avec son environnement.

**Causes de décohérence :**
- Vibrations thermiques (c'est pourquoi beaucoup de qubits fonctionnent près du zéro absolu)
- Rayonnement électromagnétique
- Interactions avec des impuretés

**Temps de cohérence** : c'est la durée pendant laquelle un qubit maintient sa superposition. Les meilleurs qubits actuels ont des temps de cohérence de quelques millisecondes à quelques secondes. C'est très court ! Il faut donc effectuer les calculs rapidement.

Des entreprises comme **C12** travaillent sur des qubits à base de nanotubes de carbone qui promettent des temps de cohérence exceptionnels grâce à la pureté isotopique du carbone-12.`,
        illustration: 'decoherence'
      },
      {
        title: 'Les portes quantiques',
        content: `Comme les portes logiques classiques (AND, OR, NOT), les ordinateurs quantiques utilisent des **portes quantiques** pour manipuler les qubits. Ces opérations sont représentées par des matrices unitaires.

**PORTES À UN QUBIT**

**Portes de Pauli :**
- **X (NOT / Pauli-X)** : rotation de π autour de l'axe X, inverse |0⟩ ↔ |1⟩
- **Y (Pauli-Y)** : rotation de π autour de l'axe Y, |0⟩ → i|1⟩, |1⟩ → -i|0⟩
- **Z (Pauli-Z)** : rotation de π autour de l'axe Z, ajoute une phase de -1 à |1⟩

**Porte Hadamard :**
- **H** : crée une superposition égale, |0⟩ → (|0⟩+|1⟩)/√2, |1⟩ → (|0⟩-|1⟩)/√2

**Portes de phase :**
- **S (√Z)** : rotation de π/2 autour de Z, ajoute une phase de i à |1⟩
- **S† (S-dagger)** : inverse de S, rotation de -π/2
- **T (π/8)** : rotation de π/4 autour de Z, ajoute une phase de e^(iπ/4) à |1⟩
- **T† (T-dagger)** : inverse de T

**Portes de rotation paramétrées :**
- **Rx(θ)** : rotation de θ autour de l'axe X
- **Ry(θ)** : rotation de θ autour de l'axe Y
- **Rz(θ)** : rotation de θ autour de l'axe Z
- **U(θ,φ,λ)** : porte universelle à un qubit (3 paramètres)
- **P(λ) / Phase(λ)** : porte de phase généralisée

**Autres portes à un qubit :**
- **I (Identité)** : ne fait rien, utile pour la synchronisation
- **√X (SX)** : racine carrée de X
- **√Y** : racine carrée de Y

**PORTES À DEUX QUBITS**

**Portes contrôlées :**
- **CNOT / CX** : applique X au qubit cible si le contrôle est |1⟩
- **CY** : applique Y au qubit cible si le contrôle est |1⟩
- **CZ** : applique Z au qubit cible si le contrôle est |1⟩
- **CH** : applique H au qubit cible si le contrôle est |1⟩
- **CS** : applique S au qubit cible si le contrôle est |1⟩
- **CT** : applique T au qubit cible si le contrôle est |1⟩
- **CRx(θ), CRy(θ), CRz(θ)** : rotations contrôlées
- **CU(θ,φ,λ)** : porte universelle contrôlée

**Portes d'échange :**
- **SWAP** : échange les états de deux qubits
- **iSWAP** : échange avec une phase de i
- **√SWAP** : racine carrée de SWAP
- **fSWAP (Fermionic SWAP)** : SWAP avec signe pour les fermions

**Portes d'intrication :**
- **ECR (Echoed Cross-Resonance)** : porte native sur IBM
- **√iSWAP** : racine carrée de iSWAP, native sur Google
- **Sycamore** : porte native du processeur Google Sycamore
- **Mølmer-Sørensen** : porte native pour les ions piégés
- **XX(θ), YY(θ), ZZ(θ)** : interactions d'Ising paramétrées

**PORTES À TROIS QUBITS ET PLUS**

- **CCNOT / Toffoli / CCX** : NOT contrôlé par deux qubits
- **CSWAP / Fredkin** : SWAP contrôlé
- **CCZ** : Z contrôlé par deux qubits
- **MCX (Multi-Controlled X)** : X contrôlé par N qubits
- **MCZ** : Z contrôlé par N qubits

**Ensemble universel** : Les portes {H, T, CNOT} ou {Rx, Ry, CNOT} forment un ensemble universel permettant d'approximer n'importe quelle opération quantique.

**Circuit quantique** : une séquence de portes appliquées à des qubits, suivie d'une mesure. C'est l'équivalent quantique d'un programme informatique.`
      }
    ],
    quiz: [
      {
        id: 'phys-q1',
        question: 'Dans l\'état de superposition |ψ⟩ = α|0⟩ + β|1⟩, que représentent α et β ?',
        options: [
          'La position et la vitesse du qubit',
          'Les amplitudes de probabilité (nombres complexes)',
          'La température et la pression du système',
          'Le temps et l\'énergie du qubit'
        ],
        correctAnswer: 1,
        explanation: 'α et β sont des amplitudes de probabilité complexes. Le carré de leur module (|α|² et |β|²) donne la probabilité de mesurer 0 ou 1.'
      },
      {
        id: 'phys-q2',
        question: 'Qu\'est-ce que la décohérence ?',
        options: [
          'L\'augmentation de la cohérence d\'un système',
          'La perte de superposition due aux interactions avec l\'environnement',
          'Une technique pour corriger les erreurs quantiques',
          'Le processus de refroidissement des qubits'
        ],
        correctAnswer: 1,
        explanation: 'La décohérence est le processus par lequel un système quantique perd sa superposition en interagissant avec son environnement, c\'est le principal obstacle technique.'
      },
      {
        id: 'phys-q3',
        question: 'Pourquoi l\'intrication est-elle appelée "action fantôme à distance" par Einstein ?',
        options: [
          'Parce qu\'elle fait disparaître les particules',
          'Parce que les corrélations semblent instantanées quelle que soit la distance',
          'Parce qu\'elle crée des fantômes quantiques',
          'Parce qu\'elle viole les lois de la thermodynamique'
        ],
        correctAnswer: 1,
        explanation: 'Les particules intriquées montrent des corrélations instantanées indépendamment de la distance, ce qui semblait troublant pour Einstein, bien que cela ne permette pas de communiquer plus vite que la lumière.'
      }
    ]
  },
  {
    id: 'classique-vs-quantique',
    title: 'Logique Classique vs Quantique',
    subtitle: 'Comprendre le changement de paradigme en programmation',
    icon: 'GitCompare',
    color: '#f97316',
    duration: '25 min',
    difficulty: 'Intermédiaire',
    sections: [
      {
        title: 'La logique booléenne classique',
        content: `Depuis les travaux de **George Boole** au 19ème siècle, toute l'informatique repose sur la **logique booléenne** : des opérations sur des valeurs binaires (0 ou 1, vrai ou faux).

**Les bits classiques :**
- Un bit est **toujours** dans un état défini : 0 OU 1
- On peut le lire sans le modifier
- On peut le copier à volonté

**Les portes logiques classiques :**

**Portes à une entrée :**
- **NOT** : inverse le bit (0→1, 1→0)
- **IDENTITY** : ne change rien

**Portes à deux entrées :**
- **AND** : renvoie 1 seulement si les deux entrées sont 1
- **OR** : renvoie 1 si au moins une entrée est 1
- **XOR** : renvoie 1 si exactement une entrée est 1
- **NAND** : inverse de AND (universel)
- **NOR** : inverse de OR (universel)

**Tables de vérité :**

- **A=0, B=0** → AND=0, OR=0, XOR=0
- **A=0, B=1** → AND=0, OR=1, XOR=1
- **A=1, B=0** → AND=0, OR=1, XOR=1
- **A=1, B=1** → AND=1, OR=1, XOR=0

**Caractéristiques clés :**
- Opérations **déterministes** : même entrée = même sortie
- Calcul **séquentiel** : une opération après l'autre
- **Irréversibilité** : AND(1,1)=1, mais on ne peut pas retrouver les entrées depuis la sortie`,
        illustration: 'classical-logic'
      },
      {
        title: 'La logique quantique : un nouveau paradigme',
        content: `La programmation quantique renverse plusieurs principes fondamentaux de l'informatique classique.

**Les qubits :**
- Peuvent être dans une **superposition** de 0 ET 1 simultanément
- L'état est décrit par |ψ⟩ = α|0⟩ + β|1⟩ (avec |α|² + |β|² = 1)
- La mesure **détruit** la superposition
- **Impossible à copier** (théorème de non-clonage)

**Différences fondamentales :**

- **Bit** (0 OU 1) → **Qubit** (superposition de 0 ET 1)
- **Déterministe** → **Probabiliste**
- **Copiable** → **Non-clonable**
- **Mesure non-destructive** → **Mesure destructive**
- **Irréversible** → **Réversible** (portes unitaires)
- **États indépendants** → **Intrication possible**

**La réversibilité quantique :**
Toutes les portes quantiques (sauf la mesure) sont **réversibles** : on peut toujours revenir à l'état initial. Mathématiquement, ce sont des matrices unitaires (U†U = I).

Exemple : appliquer deux fois la porte X (NOT quantique) ramène à l'état initial.
|0⟩ → X → |1⟩ → X → |0⟩

**Le parallélisme quantique :**
Avec n qubits en superposition, on peut représenter 2ⁿ états simultanément. C'est la source de la puissance potentielle du calcul quantique.`,
        illustration: 'quantum-logic'
      },
      {
        title: 'Comparaison des portes',
        content: `Voyons comment les portes classiques se traduisent (ou non) en quantique.

**Portes qui ont un équivalent direct :**

- **NOT** → **X (Pauli-X)** : inverse |0⟩ ↔ |1⟩
- **XOR (2 bits)** → **CNOT** : inverse la cible si contrôle = |1⟩
- **CCNOT (Toffoli)** → **CCX** : NOT si les 2 contrôles = |1⟩

**Portes sans équivalent classique :**

- **Hadamard (H)** : crée une superposition égale
  |0⟩ → (|0⟩ + |1⟩)/√2
  Aucune porte classique ne peut faire cela !

- **Portes de phase (S, T, Z)** : modifient la phase sans changer les probabilités
  Phase = concept purement quantique

- **Portes de rotation (Rx, Ry, Rz)** : rotations continues sur la sphère de Bloch
  Pas d'équivalent dans le monde binaire discret

**Portes classiques SANS équivalent quantique réversible :**

- **AND** : irréversible (perd de l'information)
  AND(1,0) = AND(0,1) = AND(0,0) = 0 → on ne peut pas distinguer les entrées

- **OR** : irréversible pour la même raison

**Solution quantique :** utiliser des portes réversibles comme Toffoli :
Toffoli(a, b, 0) = (a, b, a AND b)
On garde les entrées, donc c'est réversible !

**La porte de Fredkin (CSWAP) :**
Permet d'implémenter AND et OR de façon réversible :
- CSWAP(a, b, 0) avec mesure donne a AND b
- CSWAP(a, 1, b) avec mesure donne a OR b`
      },
      {
        title: 'Penser quantique : exemples concrets',
        content: `La programmation quantique demande un changement de mentalité. Voyons des exemples.

**Exemple 1 : Tester toutes les possibilités**

*Classique :* Pour chercher dans une liste de N éléments, on teste un par un.
for i in range(N):
    if check(i): return i

*Quantique :* On met tous les indices en superposition et on amplifie la solution (Grover).
|0⟩ + |1⟩ + |2⟩ + ... + |N-1⟩  →  Grover  →  |solution⟩

**Exemple 2 : Générer de l'aléatoire**

*Classique :* Les générateurs sont pseudo-aléatoires (déterministes).
random.seed(42)  # Même seed = mêmes "aléas"

*Quantique :* L'aléatoire est fondamental et garanti par la physique.
qc.h(0)  # Superposition
qc.measure(0)  # Vrai 50/50, impossible à prédire

**Exemple 3 : Créer des corrélations**

*Classique :* On doit explicitement copier des valeurs.
a = random_bit()
b = a  # Copie explicite

*Quantique :* L'intrication crée des corrélations instantanées.
qc.h(0)
qc.cx(0, 1)  # Maintenant q0 et q1 sont corrélés
# Mesurer q0 détermine q1, sans communication !

**Exemple 4 : Le problème de Deutsch**

Soit f(x) une fonction inconnue avec f:{0,1}→{0,1}.
Question : f(0) = f(1) ? (constante ou équilibrée ?)

*Classique :* 2 évaluations nécessaires (f(0) puis f(1))
*Quantique :* 1 seule évaluation grâce à la superposition !

C'est le premier exemple où le quantique bat le classique de façon prouvée.`
      },
      {
        title: 'Conception d\'algorithmes quantiques',
        content: `Les algorithmes quantiques suivent une structure différente des algorithmes classiques.

**Structure typique d'un algorithme quantique :**

1. **Initialisation** : tous les qubits à |0⟩
2. **Superposition** : portes H pour créer des superpositions
3. **Oracle** : encode le problème (souvent une "boîte noire")
4. **Interférence** : amplifie les bonnes réponses, annule les mauvaises
5. **Mesure** : extrait le résultat (une seule fois !)

**Principes de conception :**

**Exploiter la superposition :**
- Traiter plusieurs entrées en parallèle
- Mais attention : on ne peut extraire qu'UNE réponse à la fin !

**Utiliser l'interférence :**
- Les amplitudes peuvent s'additionner (constructive) ou s'annuler (destructive)
- L'art est de faire interférer constructivement les bonnes réponses

**Créer de l'intrication :**
- Permet des corrélations impossibles classiquement
- Essentiel pour de nombreux algorithmes (Shor, téléportation)

**Concevoir des oracles réversibles :**
- Transformer le problème en une opération unitaire
- Souvent : marquer la solution par un changement de phase

**Erreurs courantes à éviter :**

- Mesurer trop tôt (détruit la superposition)
- Oublier que la mesure est probabiliste
- Penser qu'on peut "voir" tous les états simultanément
- Négliger la décohérence dans les circuits longs

**Le modèle de calcul :**
Un circuit quantique n'est PAS comme un programme impératif. C'est plus proche d'un circuit électronique : on définit la structure, puis les données "coulent" à travers.`,
        illustration: 'quantum-algorithm-design'
      }
    ],
    quiz: [
      {
        id: 'cvq-q1',
        question: 'Quelle est la différence fondamentale entre un bit et un qubit ?',
        options: [
          'Un qubit est plus petit',
          'Un qubit peut être en superposition de 0 et 1 simultanément',
          'Un qubit est plus rapide',
          'Un qubit consomme moins d\'énergie'
        ],
        correctAnswer: 1,
        explanation: 'Un bit classique est toujours 0 OU 1, alors qu\'un qubit peut être dans une superposition des deux états simultanément jusqu\'à sa mesure.'
      },
      {
        id: 'cvq-q2',
        question: 'Pourquoi les portes AND et OR classiques n\'ont-elles pas d\'équivalent quantique direct ?',
        options: [
          'Elles sont trop complexes',
          'Elles sont irréversibles (perdent de l\'information)',
          'Elles nécessitent trop de qubits',
          'Elles n\'existent pas en logique'
        ],
        correctAnswer: 1,
        explanation: 'AND(1,0), AND(0,1) et AND(0,0) donnent tous 0 : on ne peut pas retrouver les entrées depuis la sortie. Les portes quantiques doivent être réversibles.'
      },
      {
        id: 'cvq-q3',
        question: 'Quelle porte quantique n\'a aucun équivalent en logique classique ?',
        options: [
          'X (NOT quantique)',
          'CNOT',
          'Hadamard (H)',
          'Toffoli (CCX)'
        ],
        correctAnswer: 2,
        explanation: 'La porte Hadamard crée une superposition égale de |0⟩ et |1⟩. Ce concept n\'existe pas en logique booléenne où un bit est toujours 0 ou 1.'
      },
      {
        id: 'cvq-q4',
        question: 'Dans le problème de Deutsch, combien d\'évaluations de f(x) faut-il en quantique vs classique ?',
        options: [
          '2 en quantique, 1 en classique',
          '1 en quantique, 1 en classique',
          '1 en quantique, 2 en classique',
          '2 en quantique, 2 en classique'
        ],
        correctAnswer: 2,
        explanation: 'Classiquement, il faut évaluer f(0) ET f(1) pour savoir si f est constante. Quantiquement, une seule évaluation en superposition suffit grâce à l\'interférence.'
      }
    ]
  },
  {
    id: 'types-qubits',
    title: 'Technologies de Qubits',
    subtitle: 'Les différentes approches pour créer des qubits',
    icon: 'Cpu',
    color: '#ec4899',
    duration: '20 min',
    difficulty: 'Intermédiaire',
    sections: [
      {
        title: 'Qubits supraconducteurs',
        content: `Les **qubits supraconducteurs** sont actuellement la technologie dominante, utilisée par IBM, Google et Rigetti. Ils sont basés sur des circuits électriques qui, refroidis près du zéro absolu (-273°C), conduisent l'électricité sans résistance.

**Principe de fonctionnement :**
- Utilisent des jonctions Josephson (deux supraconducteurs séparés par un isolant fin)
- Les états 0 et 1 correspondent à différents niveaux d'énergie du circuit
- Contrôlés par des impulsions micro-ondes

**Avantages :**
- Fabrication compatible avec l'industrie des semi-conducteurs
- Temps de porte rapides (quelques nanosecondes)
- Scalabilité démontrée (jusqu'à 1000+ qubits)

**Inconvénients :**
- Nécessitent un refroidissement extrême (dilution refrigerators)
- Temps de cohérence limités (environ 100 microsecondes)
- Sensibles aux interférences électromagnétiques

**Records :** Le processeur Condor d'IBM compte 1121 qubits supraconducteurs.`,
        illustration: 'superconducting-qubit'
      },
      {
        title: 'Qubits à ions piégés',
        content: `Les **ions piégés** représentent une approche élégante où des atomes ionisés sont suspendus dans le vide par des champs électromagnétiques et manipulés par des lasers.

**Principe de fonctionnement :**
- Les ions (souvent ytterbium ou calcium) sont piégés dans des pièges de Paul
- Les états 0 et 1 sont des niveaux d'énergie électronique de l'ion
- L'intrication se fait via l'interaction coulombienne entre ions

**Avantages :**
- Meilleurs temps de cohérence (plusieurs secondes !)
- Fidélité des portes très élevée (>99.9%)
- Qubits identiques (tous les ions sont les mêmes)
- Connectivité "tout-à-tout" (chaque qubit peut interagir avec tous les autres)

**Inconvénients :**
- Temps de porte plus lents (microsecondes)
- Scalabilité plus difficile (actuellement limité à ~30 qubits par piège)
- Systèmes optiques complexes

**Acteurs principaux :** IonQ, Quantinuum (Honeywell)`,
        illustration: 'trapped-ions'
      },
      {
        title: 'Qubits de spin dans les semi-conducteurs',
        content: `Les **qubits de spin** utilisent le spin (moment magnétique intrinsèque) d'électrons ou de noyaux piégés dans des semi-conducteurs comme le silicium.

**Principe de fonctionnement :**
- Un électron est confiné dans une "boîte quantique" (quantum dot)
- Son spin (up ou down) représente les états 0 et 1
- Contrôle par champs magnétiques et impulsions électriques

**Avantages :**
- Taille minuscule (quelques nanomètres)
- Compatible avec la technologie CMOS existante
- Potentiel de scalabilité massive
- Peut fonctionner à des températures légèrement plus élevées (1-4 Kelvin)

**Inconvénients :**
- Contrôle individuel difficile
- Sensibles aux défauts du matériau

**Innovation C12 :** La startup française **C12** développe une approche révolutionnaire utilisant des **nanotubes de carbone** comme plateforme pour les qubits de spin. Le carbone-12 (isotope sans spin nucléaire) offre un environnement exceptionnellement "silencieux" pour les qubits, promettant des temps de cohérence records et une meilleure scalabilité.`,
        illustration: 'spin-qubit'
      },
      {
        title: 'Autres approches émergentes',
        content: `**Qubits photoniques :**
Utilisent des photons (particules de lumière) comme qubits. Avantages : fonctionnent à température ambiante, idéaux pour la communication quantique. Défi : créer des interactions entre photons.
*Acteurs :* Xanadu, PsiQuantum

**Qubits topologiques :**
Approche théoriquement prometteuse utilisant des quasi-particules exotiques (anyons de Majorana). Les informations seraient encodées de manière intrinsèquement résistante aux erreurs. Microsoft investit massivement dans cette voie, bien que les défis techniques restent immenses.

**Qubits à atomes neutres :**
Des atomes neutres piégés par des pinces optiques (lasers focalisés). Permettent de créer de grands réseaux 2D ou 3D de qubits.
*Acteurs :* Atom Computing, QuEra, Pasqal

**Centres NV dans le diamant :**
Utilisent des défauts (vacances d'azote) dans des cristaux de diamant. Fonctionnent à température ambiante mais avec des défis de scalabilité.

Chaque technologie a ses forces et ses faiblesses. Il n'y a pas encore de "gagnant" clair, et l'avenir de l'informatique quantique pourrait être hybride.`
      }
    ],
    quiz: [
      {
        id: 'tech-q1',
        question: 'Quelle technologie de qubit est actuellement la plus répandue ?',
        options: [
          'Ions piégés',
          'Qubits photoniques',
          'Qubits supraconducteurs',
          'Qubits topologiques'
        ],
        correctAnswer: 2,
        explanation: 'Les qubits supraconducteurs sont la technologie dominante, utilisée par IBM, Google et d\'autres grandes entreprises.'
      },
      {
        id: 'tech-q2',
        question: 'Quel est l\'avantage principal de l\'approche de C12 avec les nanotubes de carbone ?',
        options: [
          'Ils fonctionnent à température ambiante',
          'Le carbone-12 offre un environnement "silencieux" sans spin nucléaire parasite',
          'Ils sont les moins chers à fabriquer',
          'Ils ne nécessitent pas de lasers'
        ],
        correctAnswer: 1,
        explanation: 'Le carbone-12 n\'a pas de spin nucléaire, ce qui réduit drastiquement les sources de bruit et de décohérence pour les qubits de spin.'
      },
      {
        id: 'tech-q3',
        question: 'Quel type de qubit offre les meilleurs temps de cohérence actuellement ?',
        options: [
          'Qubits supraconducteurs',
          'Ions piégés',
          'Qubits photoniques',
          'Qubits à atomes neutres'
        ],
        correctAnswer: 1,
        explanation: 'Les ions piégés peuvent maintenir leur cohérence pendant plusieurs secondes, bien plus que les autres technologies (microsecondes pour les supraconducteurs).'
      }
    ]
  },
  {
    id: 'algorithmes',
    title: 'Algorithmes Quantiques',
    subtitle: 'Les algorithmes qui exploitent l\'avantage quantique',
    icon: 'Code',
    color: '#10b981',
    duration: '25 min',
    difficulty: 'Intermédiaire',
    sections: [
      {
        title: 'L\'algorithme de Shor',
        content: `L'**algorithme de Shor** (1994) est probablement l'algorithme quantique le plus célèbre. Il permet de factoriser de grands nombres en leurs facteurs premiers exponentiellement plus vite qu'avec un ordinateur classique.

**Pourquoi c'est important ?**
La sécurité de RSA, le système de chiffrement protégeant nos communications internet, repose sur la difficulté de factoriser de grands nombres. Un nombre de 2048 bits prendrait des milliards d'années à factoriser classiquement, mais un ordinateur quantique suffisamment grand pourrait le faire en quelques heures.

**Comment ça fonctionne ?**
1. Réduit le problème de factorisation à la recherche d'une période
2. Utilise la **transformée de Fourier quantique** pour trouver cette période
3. La superposition permet de tester toutes les possibilités en parallèle

**État actuel :**
Pour factoriser RSA-2048, il faudrait environ 4000 qubits logiques (corrigés d'erreurs), soit potentiellement des millions de qubits physiques. Nous n'y sommes pas encore, mais c'est pourquoi la **cryptographie post-quantique** est développée activement.`,
        illustration: 'shor-algorithm'
      },
      {
        title: 'L\'algorithme de Grover',
        content: `L'**algorithme de Grover** (1996) accélère la recherche dans une base de données non structurée. Là où un algorithme classique doit vérifier N éléments en moyenne, Grover ne nécessite que √N vérifications.

**Exemple concret :**
Pour trouver un nom dans un annuaire de 1 million d'entrées non triées :
- Classiquement : 500 000 vérifications en moyenne
- Quantiquement : seulement 1000 vérifications !

**Principe :**
1. Initialise les qubits en superposition de tous les états
2. Applique un "oracle" qui marque la solution recherchée
3. Amplifie la probabilité de l'état marqué par "diffusion d'amplitude"
4. Répète ~√N fois avant de mesurer

**Applications :**
- Recherche dans des bases de données
- Optimisation combinatoire
- Accélération de l'apprentissage automatique
- Cassage de clés symétriques (nécessite de doubler la taille des clés)

L'accélération est "quadratique" (√N) plutôt qu'"exponentielle" comme Shor, mais elle s'applique à de très nombreux problèmes.`,
        illustration: 'grover-algorithm'
      },
      {
        title: 'Algorithmes variationnels (VQE, QAOA)',
        content: `Les **algorithmes variationnels** sont particulièrement adaptés à l'ère NISQ actuelle car ils sont tolérants aux erreurs et nécessitent moins de qubits.

**VQE (Variational Quantum Eigensolver) :**
Trouve l'énergie minimale d'une molécule ou d'un système physique.
- Le circuit quantique prépare un état paramétré
- L'énergie est mesurée
- Un optimiseur classique ajuste les paramètres
- On répète jusqu'à convergence

Applications : découverte de médicaments, conception de catalyseurs, nouveaux matériaux.

**QAOA (Quantum Approximate Optimization Algorithm) :**
Résout des problèmes d'optimisation combinatoire (voyageur de commerce, allocation de ressources, etc.).
- Encode le problème dans un Hamiltonien
- Alterne entre termes de coût et de mélange
- Optimise les paramètres classiquement

**Avantages de l'approche variationnelle :**
- Circuits plus courts = moins d'erreurs
- Hybride quantique-classique
- Peut s'adapter au bruit du matériel
- Applicable dès aujourd'hui

**Inconvénients :**
- L'avantage quantique n'est pas toujours garanti
- Problèmes de "barren plateaus" dans l'optimisation`,
        illustration: 'variational-algorithm'
      },
      {
        title: 'Simulation quantique',
        content: `La **simulation quantique** est l'application la plus naturelle de l'informatique quantique : utiliser un système quantique pour en simuler un autre.

**Le problème :**
Simuler une molécule de 100 atomes avec toutes ses interactions quantiques nécessiterait plus de mémoire que tous les ordinateurs du monde réunis. La complexité croît exponentiellement avec la taille du système.

**La solution quantique :**
Un ordinateur quantique peut représenter naturellement les états quantiques d'une molécule. Feynman avait prédit cela en 1982 !

**Applications concrètes :**
- **Chimie quantique** : conception de médicaments, compréhension des enzymes
- **Science des matériaux** : supraconducteurs haute température, batteries
- **Physique fondamentale** : simulation de trous noirs, matière exotique

**Exemples récents :**
Des équipes ont déjà simulé de petites molécules (H₂, LiH, BeH₂) sur des ordinateurs quantiques actuels. Les startups comme **C12** travaillent à augmenter la taille des systèmes simulables.

La simulation quantique pourrait révolutionner la découverte de médicaments : au lieu de synthétiser et tester des millions de composés, on pourrait les simuler virtuellement pour identifier les candidats prometteurs.`
      }
    ],
    quiz: [
      {
        id: 'algo-q1',
        question: 'Pourquoi l\'algorithme de Shor menace-t-il la cryptographie actuelle ?',
        options: [
          'Il peut lire les pensées des utilisateurs',
          'Il peut factoriser de grands nombres exponentiellement plus vite, cassant RSA',
          'Il peut deviner les mots de passe',
          'Il peut intercepter les communications'
        ],
        correctAnswer: 1,
        explanation: 'RSA repose sur la difficulté de factoriser de grands nombres. Shor permet de le faire efficacement, rendant RSA vulnérable aux futurs ordinateurs quantiques.'
      },
      {
        id: 'algo-q2',
        question: 'Quelle est l\'accélération apportée par l\'algorithme de Grover ?',
        options: [
          'Exponentielle (de N à log N)',
          'Quadratique (de N à √N)',
          'Linéaire (de N à N/2)',
          'Logarithmique (de N à N×log N)'
        ],
        correctAnswer: 1,
        explanation: 'Grover offre une accélération quadratique : au lieu de N opérations, on n\'en a besoin que de √N. C\'est moins spectaculaire que Shor mais s\'applique à plus de problèmes.'
      },
      {
        id: 'algo-q3',
        question: 'Pourquoi les algorithmes variationnels sont-ils adaptés à l\'ère NISQ ?',
        options: [
          'Ils ne nécessitent pas d\'ordinateur quantique',
          'Ils utilisent des circuits courts et tolèrent mieux les erreurs',
          'Ils sont plus faciles à programmer',
          'Ils sont gratuits'
        ],
        correctAnswer: 1,
        explanation: 'Les algorithmes variationnels utilisent des circuits courts (moins d\'erreurs) et une boucle hybride quantique-classique qui s\'adapte au bruit du matériel.'
      }
    ]
  },
  {
    id: 'applications',
    title: 'Applications de l\'Informatique Quantique',
    subtitle: 'Des cas d\'usage concrets et prometteurs',
    icon: 'Lightbulb',
    color: '#f59e0b',
    duration: '20 min',
    difficulty: 'Débutant',
    sections: [
      {
        title: 'Cryptographie et sécurité',
        content: `L'informatique quantique transforme profondément le domaine de la sécurité informatique, à la fois comme menace et comme solution.

**La menace quantique :**
- L'algorithme de Shor peut casser RSA et ECC (cryptographie à courbe elliptique)
- Les gouvernements stockent déjà des données chiffrées pour les déchiffrer plus tard ("harvest now, decrypt later")
- Estimation : 10-20 ans avant des ordinateurs quantiques cryptographiquement pertinents

**La cryptographie post-quantique :**
Le NIST a standardisé de nouveaux algorithmes résistants aux attaques quantiques :
- **CRYSTALS-Kyber** : échange de clés
- **CRYSTALS-Dilithium** : signatures numériques
- Basés sur des problèmes mathématiques que même les ordinateurs quantiques ne peuvent pas résoudre efficacement

**La distribution de clés quantiques (QKD) :**
Utilise les lois de la physique quantique pour créer des communications théoriquement inviolables.
- Toute tentative d'espionnage perturbe le signal
- Déjà déployée sur des réseaux métropolitains (Genève, Tokyo)
- Le satellite chinois Micius a démontré la QKD sur 1200 km`,
        illustration: 'quantum-security'
      },
      {
        title: 'Découverte de médicaments et chimie',
        content: `La **simulation moléculaire quantique** pourrait révolutionner la recherche pharmaceutique.

**Le problème actuel :**
- Développer un médicament coûte en moyenne 2.6 milliards de dollars
- Le processus prend 10-15 ans
- 90% des candidats échouent en essais cliniques

**La promesse quantique :**
- Simuler précisément les interactions moléculaires
- Prédire l'efficacité et les effets secondaires in silico
- Réduire drastiquement le temps et le coût de développement

**Applications concrètes :**
- **Repliement des protéines** : comprendre comment les protéines se replient pour traiter des maladies comme Alzheimer
- **Conception d'enzymes** : créer des catalyseurs sur mesure pour l'industrie verte
- **Nouveaux antibiotiques** : face à la résistance bactérienne croissante

**Collaborations actuelles :**
Des entreprises pharmaceutiques (Roche, Merck, Biogen) travaillent avec des startups quantiques. **C12** et d'autres entreprises développent des plateformes pour ces simulations moléculaires.`,
        illustration: 'drug-discovery'
      },
      {
        title: 'Optimisation et logistique',
        content: `Les problèmes d'**optimisation** sont omniprésents dans l'industrie et souvent NP-difficiles (impossibles à résoudre optimalement en temps polynomial).

**Exemples de problèmes :**
- **Voyageur de commerce** : trouver le chemin le plus court passant par N villes
- **Allocation de ressources** : optimiser les emplois du temps, les affectations
- **Optimisation de portefeuille** : maximiser les rendements avec un risque contrôlé

**L'approche quantique :**
- QAOA et d'autres algorithmes peuvent explorer l'espace des solutions plus efficacement
- Le recuit quantique (D-Wave) encode les problèmes d'optimisation directement dans le matériel
- Même une solution "assez bonne" trouvée plus rapidement a une énorme valeur

**Cas d'usage industriels :**
- **Automobile** : Volkswagen optimise le trafic et la charge des véhicules électriques
- **Aéronautique** : optimisation des trajectoires de vol pour économiser le carburant
- **Finance** : détection de fraude, trading algorithmique, gestion des risques
- **Énergie** : optimisation des réseaux électriques intelligents

**Attention :** L'avantage quantique pour l'optimisation n'est pas encore prouvé de manière définitive pour tous les problèmes. La recherche continue activement.`,
        illustration: 'optimization'
      },
      {
        title: 'Intelligence artificielle et machine learning',
        content: `L'intersection de l'informatique quantique et de l'IA (**Quantum Machine Learning**) est un domaine de recherche très actif.

**Applications potentielles :**

**1. Accélération de l'apprentissage :**
- Traiter des ensembles de données massifs plus rapidement
- L'algorithme HHL peut résoudre des systèmes linéaires exponentiellement plus vite
- Potentiel pour accélérer certaines parties des réseaux de neurones

**2. Réseaux de neurones quantiques :**
- Utilisent des circuits quantiques comme couches de neurones
- Peuvent capturer des corrélations que les réseaux classiques manquent
- Encore en phase de recherche fondamentale

**3. Sampling et génération :**
- Les ordinateurs quantiques excellent dans l'échantillonnage de distributions complexes
- Applications pour les modèles génératifs (comme GPT mais quantique)

**4. Optimisation des hyperparamètres :**
- Utiliser l'avantage quantique pour optimiser l'entraînement des modèles classiques

**État actuel :**
- Preuves de concept sur des problèmes jouets
- Pas encore d'avantage quantique démontré sur des problèmes ML réels
- La recherche progresse rapidement (Google, IBM, startups)

L'IA quantique est prometteuse mais reste en grande partie du domaine de la recherche. Les applications pratiques pourraient émerger dans les 5-10 prochaines années.`,
        illustration: 'quantum-ml'
      }
    ],
    quiz: [
      {
        id: 'app-q1',
        question: 'Qu\'est-ce que la stratégie "harvest now, decrypt later" ?',
        options: [
          'Une technique de jardinage quantique',
          'Stocker des données chiffrées maintenant pour les déchiffrer avec un futur ordinateur quantique',
          'Une méthode de cryptographie post-quantique',
          'Un algorithme de compression de données'
        ],
        correctAnswer: 1,
        explanation: 'Des acteurs malveillants stockent des communications chiffrées aujourd\'hui, anticipant de pouvoir les déchiffrer quand des ordinateurs quantiques suffisamment puissants existeront.'
      },
      {
        id: 'app-q2',
        question: 'Pourquoi la simulation moléculaire est-elle une application prometteuse ?',
        options: [
          'Parce qu\'elle est facile à implémenter',
          'Parce que les ordinateurs classiques ne peuvent pas simuler précisément les systèmes quantiques',
          'Parce qu\'elle ne nécessite pas de qubits',
          'Parce qu\'elle est déjà parfaitement fonctionnelle'
        ],
        correctAnswer: 1,
        explanation: 'Les molécules sont des systèmes quantiques. Leur simulation précise nécessite une mémoire qui croît exponentiellement sur les ordinateurs classiques, mais pas sur les ordinateurs quantiques.'
      },
      {
        id: 'app-q3',
        question: 'Quel domaine n\'a PAS encore démontré d\'avantage quantique pratique ?',
        options: [
          'La génération de nombres aléatoires',
          'L\'optimisation industrielle à grande échelle',
          'La distribution de clés quantiques',
          'Le sampling quantique'
        ],
        correctAnswer: 1,
        explanation: 'Bien que prometteuse, l\'optimisation quantique n\'a pas encore prouvé d\'avantage clair sur les meilleurs algorithmes classiques pour des problèmes industriels réels.'
      }
    ]
  },
  {
    id: 'defis',
    title: 'Défis et Obstacles',
    subtitle: 'Les problèmes à résoudre pour l\'informatique quantique',
    icon: 'AlertTriangle',
    color: '#ef4444',
    duration: '15 min',
    difficulty: 'Intermédiaire',
    sections: [
      {
        title: 'Le problème de la décohérence',
        content: `La **décohérence** reste le défi fondamental de l'informatique quantique. C'est la tendance des qubits à perdre leur état quantique en interagissant avec leur environnement.

**Analogie :**
Imaginez essayer d'empiler des cartes sur une table qui vibre constamment. La moindre perturbation fait tout s'effondrer. Les qubits sont encore plus fragiles !

**Sources de décohérence :**
- **Bruit thermique** : les vibrations atomiques perturbent les qubits
- **Rayonnement parasite** : même le rayonnement cosmique peut causer des erreurs
- **Impuretés matérielles** : les défauts dans les matériaux créent des interactions non voulues
- **Bruit électromagnétique** : les interférences électroniques environnantes

**Conséquences :**
- Temps de calcul limité (quelques millisecondes au mieux)
- Nécessité d'opérer près du zéro absolu pour certaines technologies
- Erreurs qui s'accumulent avec la profondeur du circuit

**Solutions en développement :**
- Meilleurs matériaux (**C12** utilise des nanotubes de carbone ultrapur)
- Environnements ultra-isolés
- Codes correcteurs d'erreurs quantiques
- Architectures résistantes au bruit`,
        illustration: 'decoherence-challenge'
      },
      {
        title: 'La correction d\'erreurs quantiques',
        content: `Contrairement aux bits classiques où on peut simplement copier l'information pour la protéger, les qubits obéissent au **théorème de non-clonage** : il est impossible de copier parfaitement un état quantique inconnu.

**Le défi :**
- Les erreurs quantiques sont continues (pas juste flip 0↔1)
- Mesurer un qubit détruit sa superposition
- Les erreurs s'accumulent rapidement dans les circuits profonds

**La solution : codes correcteurs quantiques**
Des chercheurs ont développé des codes qui encodent un **qubit logique** dans plusieurs **qubits physiques**.

**Exemple : code de surface**
- Utilise une grille 2D de qubits
- Des qubits "données" stockent l'information
- Des qubits "auxiliaires" détectent les erreurs sans mesurer les qubits données
- Peut corriger les erreurs si elles sont assez rares

**Le surcoût :**
Pour un qubit logique suffisamment fiable :
- Estimation : 1000-10000 qubits physiques par qubit logique
- Un algorithme utile pourrait nécessiter des millions de qubits physiques

**Progrès récents :**
Google et IBM ont démontré que la correction d'erreurs peut améliorer les résultats au-delà d'un certain seuil. C'est une étape cruciale !`,
        illustration: 'error-correction'
      },
      {
        title: 'La scalabilité',
        content: `Passer de quelques qubits à des millions est un défi d'ingénierie colossal.

**Défis du passage à l'échelle :**

**Contrôle individuel :**
Chaque qubit nécessite des signaux de contrôle précis. Avec des milliers de qubits, le câblage devient un cauchemar !
- Solution : contrôle multiplexé, électronique cryogénique intégrée

**Connectivité :**
Les qubits doivent interagir entre eux. Comment connecter des milliers de qubits efficacement ?
- Architecture 2D ou 3D
- Routage des interactions via qubits intermédiaires

**Refroidissement :**
Les réfrigérateurs à dilution actuels ont une puissance de refroidissement limitée.
- Solution : nouvelles architectures cryogéniques, technologies fonctionnant à plus haute température

**Uniformité :**
Chaque qubit doit être suffisamment identique aux autres.
- Défis de fabrication reproductible à grande échelle

**Approches prometteuses :**
- **C12** développe des qubits sur nanotubes de carbone, naturellement identiques
- Intel travaille sur des qubits de spin en silicium compatibles avec les fonderies existantes
- Des startups explorent des architectures modulaires`,
        illustration: 'scalability'
      },
      {
        title: 'Le "fossé quantique"',
        content: `Le **fossé quantique** (quantum gap) désigne le décalage entre les promesses théoriques et les réalisations pratiques actuelles.

**Où en sommes-nous vraiment ?**
- Ordinateurs actuels : 50-1000+ qubits physiques bruités
- Pour des applications utiles : besoin de milliers de qubits logiques (millions de physiques)
- Estimation : 5-15 ans pour atteindre ce niveau

**Le problème de l'avantage quantique :**
- "Suprématie quantique" (Google, 2019) : un problème artificiel sans utilité pratique
- Avantage quantique utile : pas encore démontré de manière incontestable
- Les algorithmes classiques continuent de s'améliorer

**Les sceptiques :**
Certains chercheurs doutent que l'informatique quantique atteigne un jour son plein potentiel :
- La correction d'erreurs pourrait être plus difficile que prévu
- Les ressources nécessaires pourraient être prohibitives
- Les algorithmes classiques pourraient toujours faire mieux

**L'optimisme mesuré :**
- Progrès constants et rapides dans le matériel
- Nouveaux algorithmes découverts régulièrement
- Investissements massifs (milliards de dollars)
- Applications de niche pourraient émerger avant l'ordinateur quantique universel

L'honnêteté scientifique demande de reconnaître à la fois le potentiel immense et les incertitudes qui demeurent.`
      }
    ],
    quiz: [
      {
        id: 'defi-q1',
        question: 'Pourquoi ne peut-on pas simplement copier un qubit pour le protéger des erreurs ?',
        options: [
          'Parce que les qubits sont trop petits',
          'À cause du théorème de non-clonage quantique',
          'Parce que ça coûterait trop cher',
          'Parce que les qubits n\'ont pas de mémoire'
        ],
        correctAnswer: 1,
        explanation: 'Le théorème de non-clonage interdit la copie parfaite d\'un état quantique inconnu. C\'est une loi fondamentale de la mécanique quantique.'
      },
      {
        id: 'defi-q2',
        question: 'Combien de qubits physiques faut-il environ pour un qubit logique fiable ?',
        options: [
          '2-3 qubits physiques',
          '10-50 qubits physiques',
          '1000-10000 qubits physiques',
          'Un seul qubit suffit'
        ],
        correctAnswer: 2,
        explanation: 'Les estimations actuelles suggèrent qu\'il faudra entre 1000 et 10000 qubits physiques pour encoder un qubit logique suffisamment protégé des erreurs.'
      },
      {
        id: 'defi-q3',
        question: 'Qu\'est-ce que le "fossé quantique" ?',
        options: [
          'Un trou dans l\'espace-temps',
          'L\'écart entre les promesses théoriques et les capacités actuelles',
          'La distance entre deux qubits',
          'Une erreur dans les calculs quantiques'
        ],
        correctAnswer: 1,
        explanation: 'Le fossé quantique désigne le décalage entre ce que l\'informatique quantique promet théoriquement et ce qu\'elle peut réaliser pratiquement aujourd\'hui.'
      }
    ]
  },
  {
    id: 'ecosysteme',
    title: 'L\'Écosystème Quantique',
    subtitle: 'Acteurs, logiciels et ressources',
    icon: 'Network',
    color: '#06b6d4',
    duration: '20 min',
    difficulty: 'Débutant',
    sections: [
      {
        title: 'Les grands acteurs',
        content: `L'écosystème de l'informatique quantique est dynamique avec des géants de la tech et des startups innovantes.

**Les géants technologiques :**

**IBM**
- Leader en nombre de qubits supraconducteurs disponibles au public
- Plateforme IBM Quantum avec accès gratuit
- Roadmap ambitieuse : 100 000 qubits d'ici 2033
- Qiskit : framework open-source populaire

**Google**
- Premier à revendiquer la "suprématie quantique" (2019)
- Processeur Sycamore, puis Willow
- Focus sur la correction d'erreurs
- Cirq : leur framework de programmation

**Microsoft**
- Pari sur les qubits topologiques (approche risquée mais prometteuse)
- Azure Quantum : plateforme cloud avec accès à différents matériels
- Q# : langage de programmation quantique

**Amazon**
- Amazon Braket : accès cloud à plusieurs technologies de qubits
- Centre de recherche quantique AWS

**Les startups innovantes :**

**C12 (France)**
- Qubits de spin sur nanotubes de carbone
- Promesse de temps de cohérence exceptionnels
- Fondée par des chercheurs de l'ENS Paris
- Levée de fonds significative pour le développement

**IonQ** : leader des ions piégés, coté en bourse
**Rigetti** : qubits supraconducteurs, approche hybride
**Xanadu** : informatique quantique photonique`,
        illustration: 'quantum-ecosystem'
      },
      {
        title: 'Simulateurs quantiques',
        content: `En attendant des ordinateurs quantiques parfaits, les **simulateurs quantiques** permettent de développer et tester des algorithmes.

**Types de simulateurs :**

**Simulateurs classiques à état complet :**
- Simulent exactement le comportement quantique
- Limités à ~40-50 qubits (mémoire exponentielle)
- Exemples : Qiskit Aer, Cirq simulator, QuEST

**Simulateurs à tenseurs :**
- Utilisent des approximations mathématiques
- Peuvent simuler plus de qubits pour certains circuits
- Efficaces pour les circuits peu intriqués

**Émulateurs de bruit :**
- Reproduisent les caractéristiques d'erreur du vrai matériel
- Essentiels pour développer des algorithmes robustes
- IBM fournit des modèles de bruit de ses processeurs

**Accélérateurs GPU/TPU :**
- NVIDIA cuQuantum : simulation accélérée par GPU
- Peut simuler des circuits complexes plus rapidement

**Pourquoi utiliser des simulateurs ?**
- Développement et débogage sans coût d'accès au matériel
- Test d'algorithmes théoriques
- Exploration de régimes actuellement inaccessibles
- Validation des résultats du matériel réel

**Limites :**
Si on pouvait simuler efficacement n'importe quel circuit quantique classiquement, l'informatique quantique n'aurait pas d'intérêt ! Les simulateurs sont utiles pour l'apprentissage et le développement, mais pas pour les applications finales.`,
        illustration: 'quantum-simulators'
      },
      {
        title: 'Langages et frameworks de programmation',
        content: `Plusieurs frameworks permettent de programmer des ordinateurs quantiques, chacun avec ses forces.

**Qiskit (IBM)**
Le plus populaire, en Python.
\`\`\`python
from qiskit import QuantumCircuit
qc = QuantumCircuit(2, 2)
qc.h(0)  # Hadamard sur qubit 0
qc.cx(0, 1)  # CNOT
qc.measure_all()
\`\`\`
- Excellente documentation et tutoriels
- Accès direct aux processeurs IBM
- Grande communauté

**Cirq (Google)**
Aussi en Python, plus bas niveau.
- Contrôle fin sur la topologie du circuit
- Optimisé pour les processeurs Google
- Bon pour la recherche

**PennyLane (Xanadu)**
Spécialisé dans le quantum machine learning.
- Interface type PyTorch/TensorFlow
- Différentiation automatique de circuits quantiques
- Supporte plusieurs backends

**Amazon Braket SDK**
Accès unifié à plusieurs types de matériel.
- IonQ, Rigetti, D-Wave via une seule API
- Intégration AWS

**Q# (Microsoft)**
Langage dédié avec typage fort.
- Syntaxe propre au quantique
- Simulateurs performants
- Intégration Visual Studio

**Conseils pour débuter :**
1. Commencez avec Qiskit (documentation excellente)
2. Suivez les tutoriels IBM Quantum Learning
3. Expérimentez sur les simulateurs d'abord
4. Essayez le vrai matériel gratuitement (IBM offre du temps de calcul)`,
        illustration: 'quantum-programming'
      },
      {
        title: 'Exemple pratique : créer un état de Bell',
        content: `Voyons comment créer un **état de Bell**, le circuit quantique le plus fondamental pour l'intrication.

**L'état de Bell |Φ⁺⟩**
C'est un état maximalement intriqué de deux qubits :
|Φ⁺⟩ = (|00⟩ + |11⟩) / √2

Quand on mesure ces qubits, on obtient soit "00" soit "11", chacun avec 50% de probabilité, mais **jamais** "01" ou "10".

**Le circuit :**
1. Partir de |00⟩ (deux qubits à zéro)
2. Appliquer une porte **Hadamard (H)** sur le premier qubit → superposition
3. Appliquer une porte **CNOT** avec q0 comme contrôle et q1 comme cible → intrication
4. Mesurer les deux qubits

**Code Qiskit complet :**

from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator
from qiskit.visualization import plot_histogram

# Créer un circuit avec 2 qubits et 2 bits classiques
qc = QuantumCircuit(2, 2)

# Étape 1 : Hadamard sur q0 (crée superposition)
qc.h(0)

# Étape 2 : CNOT de q0 vers q1 (crée intrication)
qc.cx(0, 1)

# Étape 3 : Mesurer les qubits
qc.measure([0, 1], [0, 1])

# Simuler le circuit
simulator = AerSimulator()
job = simulator.run(qc, shots=1000)
result = job.result()
counts = result.get_counts()

print(counts)
# Résultat typique : {'00': 498, '11': 502}

**Analyse des résultats :**
- On obtient environ 50% de "00" et 50% de "11"
- Jamais de "01" ou "10" : les qubits sont parfaitement corrélés
- C'est la signature de l'intrication quantique !

**Circuit à 5 qubits plus complexe :**
Un circuit réaliste combine plusieurs types de portes :

from qiskit import QuantumCircuit

qc = QuantumCircuit(5, 5)

# Couche de superposition
qc.h([0, 1, 2])
qc.x(3)
qc.s(4)

# Portes d'intrication
qc.cx(0, 1)
qc.cx(1, 2)
qc.cz(2, 3)

# Rotations
qc.t(0)
qc.rz(0.5, 2)

# Porte Toffoli (CCX)
qc.ccx(0, 1, 4)

# SWAP
qc.swap(3, 4)

# Mesures
qc.measure_all()

Ce circuit illustre :
- **Superposition** : portes H, X, S
- **Intrication** : portes CNOT (cx), CZ (cz)
- **Phases** : portes T, Rz
- **Multi-qubit** : porte Toffoli (CCX)
- **Échange** : porte SWAP`,
        illustration: 'quantum-circuit-5qubit'
      },
      {
        title: 'L\'avenir : vers l\'ordinateur quantique universel',
        content: `Où va l'informatique quantique dans les 10-20 prochaines années ?

**Feuilles de route des acteurs majeurs :**

**IBM**
- 2025 : 5000+ qubits
- 2033 : 100 000 qubits avec correction d'erreurs
- Vision : ordinateurs quantiques utiles d'ici 2030

**Google**
- Focus sur la réduction des erreurs
- Objectif : premier calcul utile impossible classiquement
- Correction d'erreurs à grande échelle

**C12 et autres startups**
- Approches alternatives potentiellement disruptives
- Qubits de meilleure qualité plutôt que plus de qubits
- Pourraient changer la donne si leurs technologies tiennent leurs promesses

**Prédictions consensuelles :**
- **Court terme (2025-2028)** : Avantages de niche pour certains problèmes d'optimisation et de simulation
- **Moyen terme (2028-2035)** : Premiers algorithmes utiles avec correction d'erreurs limitée
- **Long terme (2035+)** : Ordinateurs quantiques tolérants aux fautes pour des applications larges

**Ce qui pourrait accélérer :**
- Découverte de nouveaux types de qubits plus stables
- Avancées en correction d'erreurs
- Nouveaux algorithmes plus adaptés au matériel NISQ

**Ce qui pourrait ralentir :**
- Obstacles fondamentaux imprévus
- Difficultés de fabrication à grande échelle
- Compétition d'algorithmes classiques améliorés

L'informatique quantique n'est pas une question de "si" mais de "quand" et "comment". C'est une révolution en marche !`
      }
    ],
    quiz: [
      {
        id: 'eco-q1',
        question: 'Quelle est la particularité de l\'approche de C12 ?',
        options: [
          'Ils utilisent des photons',
          'Ils utilisent des nanotubes de carbone pour les qubits de spin',
          'Ils utilisent des ions piégés',
          'Ils n\'utilisent pas de qubits'
        ],
        correctAnswer: 1,
        explanation: 'C12 développe des qubits de spin sur des nanotubes de carbone, une approche innovante promettant une grande pureté et de longs temps de cohérence.'
      },
      {
        id: 'eco-q2',
        question: 'Pourquoi les simulateurs quantiques classiques sont-ils limités à environ 40-50 qubits ?',
        options: [
          'Par choix des développeurs',
          'À cause du coût de l\'électricité',
          'Car la mémoire nécessaire croît exponentiellement avec le nombre de qubits',
          'Car les processeurs ne sont pas assez rapides'
        ],
        correctAnswer: 2,
        explanation: 'Pour simuler N qubits, il faut 2^N nombres complexes. À 50 qubits, cela représente plus d\'un million de téraoctets, dépassant toute mémoire disponible.'
      },
      {
        id: 'eco-q3',
        question: 'Quel framework est recommandé pour débuter en programmation quantique ?',
        options: [
          'Q# de Microsoft',
          'Cirq de Google',
          'Qiskit de IBM',
          'Tous sont équivalents pour les débutants'
        ],
        correctAnswer: 2,
        explanation: 'Qiskit est généralement recommandé pour les débutants grâce à son excellente documentation, ses nombreux tutoriels et l\'accès gratuit au matériel IBM.'
      },
      {
        id: 'eco-q4',
        question: 'Pour créer un état de Bell (intrication maximale), quelles portes faut-il appliquer dans l\'ordre ?',
        options: [
          'CNOT puis Hadamard',
          'Hadamard puis CNOT',
          'Deux portes Hadamard',
          'Deux portes CNOT'
        ],
        correctAnswer: 1,
        explanation: 'L\'état de Bell se crée en appliquant d\'abord une porte Hadamard (superposition) puis une porte CNOT (intrication). L\'ordre est crucial !'
      }
    ]
  }
];
