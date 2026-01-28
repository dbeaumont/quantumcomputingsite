interface QuantumIllustrationProps {
  type: string;
  className?: string;
}

export default function QuantumIllustration({ type, className = '' }: QuantumIllustrationProps) {
  const illustrations: Record<string, JSX.Element> = {
    'qubit-superposition': (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="sphereGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a5b4fc" />
          </linearGradient>
        </defs>
        {/* Bloch Sphere */}
        <ellipse cx="200" cy="150" rx="100" ry="100" fill="url(#sphereGrad)" stroke="#6366f1" strokeWidth="2" />
        <ellipse cx="200" cy="150" rx="100" ry="30" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="5,5" />
        {/* Axes */}
        <line x1="200" y1="50" x2="200" y2="250" stroke="#4f46e5" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="100" y1="150" x2="300" y2="150" stroke="#4f46e5" strokeWidth="1" strokeDasharray="3,3" />
        {/* State vector */}
        <line x1="200" y1="150" x2="260" y2="80" stroke="url(#arrowGrad)" strokeWidth="3" />
        <circle cx="260" cy="80" r="8" fill="#a5b4fc">
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Labels */}
        <text x="200" y="40" textAnchor="middle" fill="#a5b4fc" fontSize="14" fontWeight="bold">|0⟩</text>
        <text x="200" y="270" textAnchor="middle" fill="#a5b4fc" fontSize="14" fontWeight="bold">|1⟩</text>
        <text x="275" y="70" fill="#e0e7ff" fontSize="12">|ψ⟩ = α|0⟩ + β|1⟩</text>
        {/* Probability clouds */}
        <circle cx="200" cy="60" r="15" fill="#6366f1" fillOpacity="0.3">
          <animate attributeName="r" values="15;20;15" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="240" r="15" fill="#8b5cf6" fillOpacity="0.3">
          <animate attributeName="r" values="15;20;15" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </circle>
      </svg>
    ),
    'entanglement': (
      <svg viewBox="0 0 400 250" className={className}>
        <defs>
          <linearGradient id="entGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {/* Particle 1 */}
        <circle cx="80" cy="125" r="30" fill="#6366f1" fillOpacity="0.3" stroke="#6366f1" strokeWidth="2">
          <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="80" y="130" textAnchor="middle" fill="#e0e7ff" fontSize="14" fontWeight="bold">Q₁</text>
        {/* Particle 2 */}
        <circle cx="320" cy="125" r="30" fill="#ec4899" fillOpacity="0.3" stroke="#ec4899" strokeWidth="2">
          <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="320" y="130" textAnchor="middle" fill="#e0e7ff" fontSize="14" fontWeight="bold">Q₂</text>
        {/* Entanglement connection */}
        <path d="M 110 125 Q 200 50 290 125" fill="none" stroke="url(#entGrad1)" strokeWidth="3" strokeDasharray="10,5">
          <animate attributeName="stroke-dashoffset" values="0;-30" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M 110 125 Q 200 200 290 125" fill="none" stroke="url(#entGrad1)" strokeWidth="3" strokeDasharray="10,5">
          <animate attributeName="stroke-dashoffset" values="0;30" dur="1s" repeatCount="indefinite" />
        </path>
        {/* Bell state label */}
        <text x="200" y="40" textAnchor="middle" fill="#a5b4fc" fontSize="12">État de Bell</text>
        <text x="200" y="230" textAnchor="middle" fill="#e0e7ff" fontSize="13">|Φ⁺⟩ = (|00⟩ + |11⟩) / √2</text>
        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <circle
            key={i}
            cx={110 + i * 36}
            cy={125 + Math.sin(i) * 30}
            r="3"
            fill="#a5b4fc"
          >
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
          </circle>
        ))}
      </svg>
    ),
    'quantum-timeline': (
      <svg viewBox="0 0 400 200" className={className}>
        <defs>
          <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#a5b4fc" />
          </linearGradient>
        </defs>
        {/* Timeline */}
        <line x1="30" y1="100" x2="370" y2="100" stroke="url(#timelineGrad)" strokeWidth="3" />
        {/* Events */}
        {[
          { x: 60, year: '1982', label: 'Feynman' },
          { x: 140, year: '1994', label: 'Shor' },
          { x: 220, year: '2019', label: 'Suprématie' },
          { x: 300, year: '2024', label: 'NISQ Era' },
        ].map((event, i) => (
          <g key={i}>
            <circle cx={event.x} cy="100" r="10" fill="#6366f1" stroke="#a5b4fc" strokeWidth="2">
              <animate attributeName="r" values="10;13;10" dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </circle>
            <text x={event.x} y="80" textAnchor="middle" fill="#a5b4fc" fontSize="11">{event.year}</text>
            <text x={event.x} y="130" textAnchor="middle" fill="#e0e7ff" fontSize="10">{event.label}</text>
          </g>
        ))}
      </svg>
    ),
    'decoherence': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Wave that decays */}
        <path
          d="M 30 100 Q 60 50 90 100 Q 120 150 150 100 Q 180 60 210 100 Q 240 130 270 100 Q 300 80 330 100 Q 360 110 390 100"
          fill="none"
          stroke="#6366f1"
          strokeWidth="3"
          strokeDasharray="5,0"
        >
          <animate attributeName="stroke-opacity" values="1;0.3" dur="3s" repeatCount="indefinite" />
        </path>
        {/* Decay envelope */}
        <path
          d="M 30 50 Q 200 50 390 95"
          fill="none"
          stroke="#ef4444"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <path
          d="M 30 150 Q 200 150 390 105"
          fill="none"
          stroke="#ef4444"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        {/* Noise particles */}
        {[...Array(10)].map((_, i) => (
          <circle
            key={i}
            cx={50 + i * 35}
            cy={70 + Math.random() * 60}
            r="4"
            fill="#ef4444"
            fillOpacity="0.5"
          >
            <animate attributeName="cy" values={`${70 + i * 3};${90 + i * 3};${70 + i * 3}`} dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <text x="200" y="30" textAnchor="middle" fill="#e0e7ff" fontSize="12">Perte de cohérence avec le temps</text>
        <text x="50" y="180" fill="#a5b4fc" fontSize="11">t = 0</text>
        <text x="350" y="180" fill="#ef4444" fontSize="11">t → ∞</text>
      </svg>
    ),
    'superconducting-qubit': (
      <svg viewBox="0 0 400 250" className={className}>
        {/* Chip base */}
        <rect x="50" y="50" width="300" height="150" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
        {/* Transmon pattern */}
        <rect x="160" y="90" width="80" height="70" rx="5" fill="none" stroke="#a5b4fc" strokeWidth="2" />
        {/* Josephson junction (X pattern) */}
        <line x1="185" y1="115" x2="215" y2="145" stroke="#ec4899" strokeWidth="3" />
        <line x1="215" y1="115" x2="185" y2="145" stroke="#ec4899" strokeWidth="3" />
        {/* Capacitor plates */}
        <rect x="100" y="110" width="40" height="30" fill="#6366f1" fillOpacity="0.5" />
        <rect x="260" y="110" width="40" height="30" fill="#6366f1" fillOpacity="0.5" />
        {/* Connections */}
        <line x1="140" y1="125" x2="160" y2="125" stroke="#a5b4fc" strokeWidth="2" />
        <line x1="240" y1="125" x2="260" y2="125" stroke="#a5b4fc" strokeWidth="2" />
        {/* Microwave pulse */}
        <path d="M 320 70 Q 340 90 320 110 Q 340 130 320 150" fill="none" stroke="#f59e0b" strokeWidth="2">
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="1s" repeatCount="indefinite" />
        </path>
        {/* Labels */}
        <text x="200" y="230" textAnchor="middle" fill="#e0e7ff" fontSize="12">Qubit Supraconducteur (Transmon)</text>
        <text x="200" y="85" textAnchor="middle" fill="#ec4899" fontSize="10">Jonction Josephson</text>
        <text x="355" y="110" fill="#f59e0b" fontSize="10">μ-ondes</text>
        {/* Temperature indicator */}
        <text x="75" y="230" fill="#06b6d4" fontSize="10">T ~ 15 mK</text>
      </svg>
    ),
    'trapped-ions': (
      <svg viewBox="0 0 400 250" className={className}>
        {/* Trap electrodes */}
        <rect x="30" y="80" width="20" height="90" fill="#4f46e5" rx="3" />
        <rect x="350" y="80" width="20" height="90" fill="#4f46e5" rx="3" />
        <rect x="80" y="50" width="240" height="15" fill="#6366f1" rx="3" />
        <rect x="80" y="185" width="240" height="15" fill="#6366f1" rx="3" />
        {/* Ion chain */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <circle cx={120 + i * 45} cy="125" r="15" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2">
              <animate attributeName="r" values="15;18;15" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </circle>
            <text x={120 + i * 45} y="130" textAnchor="middle" fill="#e0e7ff" fontSize="10">Yb⁺</text>
          </g>
        ))}
        {/* Laser beams */}
        <line x1="0" y1="125" x2="100" y2="125" stroke="#ef4444" strokeWidth="2">
          <animate attributeName="stroke-opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite" />
        </line>
        <line x1="300" y1="125" x2="400" y2="125" stroke="#3b82f6" strokeWidth="2">
          <animate attributeName="stroke-opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite" begin="0.25s" />
        </line>
        {/* Labels */}
        <text x="200" y="230" textAnchor="middle" fill="#e0e7ff" fontSize="12">Ions Piégés (Ytterbium)</text>
        <text x="30" y="45" fill="#ef4444" fontSize="10">Laser</text>
        <text x="350" y="45" fill="#3b82f6" fontSize="10">Laser</text>
      </svg>
    ),
    'spin-qubit': (
      <svg viewBox="0 0 400 250" className={className}>
        {/* Silicon substrate */}
        <rect x="50" y="140" width="300" height="60" fill="#374151" rx="5" />
        <text x="200" y="175" textAnchor="middle" fill="#9ca3af" fontSize="11">Substrat Silicium</text>
        {/* Quantum dots */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <ellipse cx={120 + i * 80} cy="130" rx="25" ry="15" fill="#6366f1" fillOpacity="0.3" stroke="#6366f1" strokeWidth="2" />
            {/* Electron spin */}
            <circle cx={120 + i * 80} cy="115" r="8" fill="#ec4899">
              <animate attributeName="cy" values="115;120;115" dur="1s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
            {/* Spin arrow */}
            <line x1={120 + i * 80} y1="105" x2={120 + i * 80} y2="90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead)" />
          </g>
        ))}
        {/* Gates */}
        <rect x="90" y="60" width="60" height="20" fill="#4f46e5" rx="3" />
        <rect x="170" y="60" width="60" height="20" fill="#4f46e5" rx="3" />
        <rect x="250" y="60" width="60" height="20" fill="#4f46e5" rx="3" />
        <text x="200" y="50" textAnchor="middle" fill="#a5b4fc" fontSize="10">Grilles de contrôle</text>
        {/* Nanotube indicator for C12 */}
        <path d="M 100 200 L 300 200" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
        <text x="200" y="225" textAnchor="middle" fill="#10b981" fontSize="11">Nanotube de carbone (C12)</text>
        <text x="200" y="240" textAnchor="middle" fill="#6b7280" fontSize="9">Carbone-12 isotopiquement pur</text>
      </svg>
    ),
    'shor-algorithm': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Input number */}
        <rect x="20" y="80" width="80" height="40" fill="#4f46e5" rx="5" />
        <text x="60" y="105" textAnchor="middle" fill="#e0e7ff" fontSize="12">N = 15</text>
        {/* Quantum circuit box */}
        <rect x="130" y="60" width="140" height="80" fill="none" stroke="#6366f1" strokeWidth="2" rx="10" strokeDasharray="5,5" />
        <text x="200" y="90" textAnchor="middle" fill="#a5b4fc" fontSize="11">Circuit Quantique</text>
        <text x="200" y="110" textAnchor="middle" fill="#818cf8" fontSize="10">QFT + Oracle</text>
        {/* Output factors */}
        <rect x="300" y="65" width="80" height="30" fill="#10b981" rx="5" />
        <text x="340" y="85" textAnchor="middle" fill="#e0e7ff" fontSize="11">p = 3</text>
        <rect x="300" y="105" width="80" height="30" fill="#10b981" rx="5" />
        <text x="340" y="125" textAnchor="middle" fill="#e0e7ff" fontSize="11">q = 5</text>
        {/* Arrows */}
        <path d="M 100 100 L 125 100" stroke="#a5b4fc" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 270 100 L 295 100" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
        {/* Complexity comparison */}
        <text x="60" y="160" textAnchor="middle" fill="#ef4444" fontSize="10">Classique: O(e^n)</text>
        <text x="200" y="160" textAnchor="middle" fill="#6366f1" fontSize="10">Quantique: O(n³)</text>
        <text x="340" y="160" textAnchor="middle" fill="#10b981" fontSize="10">Exponentiellement</text>
        <text x="340" y="175" textAnchor="middle" fill="#10b981" fontSize="10">plus rapide!</text>
      </svg>
    ),
    'grover-algorithm': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Database visualization */}
        <g>
          {[...Array(16)].map((_, i) => (
            <rect
              key={i}
              x={30 + (i % 4) * 40}
              y={50 + Math.floor(i / 4) * 30}
              width="35"
              height="25"
              fill={i === 7 ? '#10b981' : '#4f46e5'}
              fillOpacity={i === 7 ? 0.8 : 0.3}
              stroke={i === 7 ? '#10b981' : '#6366f1'}
              strokeWidth="1"
              rx="3"
            />
          ))}
          <text x="95" y="190" textAnchor="middle" fill="#a5b4fc" fontSize="10">Base de données N=16</text>
        </g>
        {/* Grover iteration visualization */}
        <g>
          <circle cx="280" cy="100" r="60" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" />
          {/* Amplitude bars */}
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
            const height = i === 3 ? 40 : 15;
            return (
              <rect
                key={i}
                x={275 + Math.cos(angle) * 40}
                y={100 - height / 2 + Math.sin(angle) * 40}
                width="10"
                height={height}
                fill={i === 3 ? '#10b981' : '#6366f1'}
                rx="2"
              >
                <animate
                  attributeName="height"
                  values={i === 3 ? '15;40;15' : '15;10;15'}
                  dur="2s"
                  repeatCount="indefinite"
                />
              </rect>
            );
          })}
        </g>
        <text x="280" y="180" textAnchor="middle" fill="#a5b4fc" fontSize="10">Amplification √N itérations</text>
        {/* Arrow showing speedup */}
        <text x="200" y="30" textAnchor="middle" fill="#e0e7ff" fontSize="11">Recherche: N → √N</text>
      </svg>
    ),
    'variational-algorithm': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Hybrid loop */}
        <ellipse cx="200" cy="100" rx="150" ry="60" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="10,5">
          <animate attributeName="stroke-dashoffset" values="0;-30" dur="2s" repeatCount="indefinite" />
        </ellipse>
        {/* Quantum part */}
        <rect x="60" y="70" width="100" height="60" fill="#4f46e5" fillOpacity="0.3" stroke="#6366f1" strokeWidth="2" rx="10" />
        <text x="110" y="95" textAnchor="middle" fill="#a5b4fc" fontSize="10">Circuit</text>
        <text x="110" y="110" textAnchor="middle" fill="#a5b4fc" fontSize="10">Quantique</text>
        <text x="110" y="125" textAnchor="middle" fill="#818cf8" fontSize="9">U(θ)|0⟩</text>
        {/* Classical part */}
        <rect x="240" y="70" width="100" height="60" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" rx="10" />
        <text x="290" y="95" textAnchor="middle" fill="#6ee7b7" fontSize="10">Optimiseur</text>
        <text x="290" y="110" textAnchor="middle" fill="#6ee7b7" fontSize="10">Classique</text>
        <text x="290" y="125" textAnchor="middle" fill="#34d399" fontSize="9">θ → θ'</text>
        {/* Arrows */}
        <path d="M 160 85 L 240 85" stroke="#a5b4fc" strokeWidth="2" />
        <text x="200" y="80" textAnchor="middle" fill="#e0e7ff" fontSize="8">⟨H⟩</text>
        <path d="M 240 115 L 160 115" stroke="#34d399" strokeWidth="2" />
        <text x="200" y="130" textAnchor="middle" fill="#e0e7ff" fontSize="8">θ'</text>
        <text x="200" y="180" textAnchor="middle" fill="#e0e7ff" fontSize="11">Algorithme Variationnel Hybride</text>
      </svg>
    ),
    'quantum-security': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Lock icon */}
        <rect x="170" y="80" width="60" height="50" fill="#4f46e5" rx="5" />
        <path d="M 180 80 L 180 60 Q 180 40 200 40 Q 220 40 220 60 L 220 80" fill="none" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
        {/* Key particles */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={100 + (i < 4 ? 0 : 200)}
            cy={60 + (i % 4) * 30}
            r="8"
            fill={i < 4 ? '#ef4444' : '#10b981'}
          >
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" begin={`${i * 0.1}s`} />
          </circle>
        ))}
        {/* QKD channel */}
        <path d="M 110 100 Q 200 50 290 100" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" values="0;-20" dur="1s" repeatCount="indefinite" />
        </path>
        <text x="200" y="45" textAnchor="middle" fill="#a855f7" fontSize="10">Canal QKD</text>
        {/* Labels */}
        <text x="100" y="175" textAnchor="middle" fill="#ef4444" fontSize="10">Alice</text>
        <text x="300" y="175" textAnchor="middle" fill="#10b981" fontSize="10">Bob</text>
        <text x="200" y="175" textAnchor="middle" fill="#e0e7ff" fontSize="11">Distribution de Clés Quantique</text>
      </svg>
    ),
    'drug-discovery': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Molecule */}
        <g transform="translate(80, 100)">
          {/* Benzene ring */}
          <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="none" stroke="#6366f1" strokeWidth="2" />
          {/* Atoms */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = Math.sin(rad) * 30;
            const y = -Math.cos(rad) * 30;
            return (
              <circle key={i} cx={x} cy={y} r="8" fill="#4f46e5">
                <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
              </circle>
            );
          })}
        </g>
        {/* Arrow */}
        <path d="M 130 100 L 180 100" stroke="#a5b4fc" strokeWidth="2" markerEnd="url(#arrow)" />
        {/* Quantum computer */}
        <rect x="190" y="70" width="80" height="60" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" rx="10" />
        <text x="230" y="95" textAnchor="middle" fill="#a5b4fc" fontSize="9">Simulation</text>
        <text x="230" y="110" textAnchor="middle" fill="#a5b4fc" fontSize="9">Quantique</text>
        {/* Arrow */}
        <path d="M 280 100 L 320 100" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
        {/* Result */}
        <rect x="330" y="75" width="50" height="50" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" rx="25" />
        <text x="355" y="105" textAnchor="middle" fill="#10b981" fontSize="20">✓</text>
        <text x="200" y="170" textAnchor="middle" fill="#e0e7ff" fontSize="11">Découverte de Médicaments</text>
      </svg>
    ),
    'optimization': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Graph nodes */}
        {[
          { x: 80, y: 60 }, { x: 160, y: 40 }, { x: 240, y: 60 },
          { x: 320, y: 80 }, { x: 280, y: 140 }, { x: 160, y: 160 },
          { x: 80, y: 130 }
        ].map((pos, i) => (
          <g key={i}>
            <circle cx={pos.x} cy={pos.y} r="15" fill="#4f46e5" stroke="#6366f1" strokeWidth="2">
              <animate attributeName="r" values="15;17;15" dur="2s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </circle>
            <text x={pos.x} y={pos.y + 4} textAnchor="middle" fill="#e0e7ff" fontSize="10">{i + 1}</text>
          </g>
        ))}
        {/* Optimal path */}
        <path
          d="M 80 60 L 160 40 L 240 60 L 320 80 L 280 140 L 160 160 L 80 130 L 80 60"
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          strokeDasharray="10,5"
        >
          <animate attributeName="stroke-dashoffset" values="0;-30" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="200" y="190" textAnchor="middle" fill="#e0e7ff" fontSize="11">Problème du Voyageur de Commerce</text>
      </svg>
    ),
    'quantum-ml': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Neural network layers */}
        <g>
          {/* Input layer */}
          {[0, 1, 2].map((i) => (
            <circle key={`in-${i}`} cx="60" cy={60 + i * 40} r="12" fill="#6366f1" />
          ))}
          {/* Quantum layer */}
          {[0, 1, 2, 3].map((i) => (
            <g key={`q-${i}`}>
              <circle cx="160" cy={45 + i * 38} r="15" fill="none" stroke="#a855f7" strokeWidth="2">
                <animate attributeName="r" values="15;18;15" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
              </circle>
              <text x="160" y={49 + i * 38} textAnchor="middle" fill="#a855f7" fontSize="8">Q</text>
            </g>
          ))}
          {/* Hidden layer */}
          {[0, 1, 2, 3].map((i) => (
            <circle key={`h-${i}`} cx="260" cy={45 + i * 38} r="12" fill="#10b981" />
          ))}
          {/* Output layer */}
          {[0, 1].map((i) => (
            <circle key={`out-${i}`} cx="340" cy={80 + i * 40} r="12" fill="#f59e0b" />
          ))}
        </g>
        {/* Connections (simplified) */}
        <g stroke="#4b5563" strokeWidth="1" opacity="0.5">
          <line x1="72" y1="60" x2="145" y2="60" />
          <line x1="72" y1="100" x2="145" y2="100" />
          <line x1="72" y1="140" x2="145" y2="140" />
          <line x1="175" y1="60" x2="248" y2="60" />
          <line x1="175" y1="100" x2="248" y2="100" />
          <line x1="272" y1="80" x2="328" y2="80" />
          <line x1="272" y1="120" x2="328" y2="120" />
        </g>
        <text x="60" y="175" textAnchor="middle" fill="#6366f1" fontSize="9">Entrée</text>
        <text x="160" y="175" textAnchor="middle" fill="#a855f7" fontSize="9">Quantique</text>
        <text x="260" y="175" textAnchor="middle" fill="#10b981" fontSize="9">Classique</text>
        <text x="340" y="175" textAnchor="middle" fill="#f59e0b" fontSize="9">Sortie</text>
        <text x="200" y="195" textAnchor="middle" fill="#e0e7ff" fontSize="11">Réseau de Neurones Quantique Hybride</text>
      </svg>
    ),
    'error-correction': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Surface code grid */}
        <g transform="translate(100, 30)">
          {[...Array(9)].map((_, i) => {
            const x = (i % 3) * 50;
            const y = Math.floor(i / 3) * 50;
            const isData = i % 2 === 0;
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width="45"
                  height="45"
                  fill={isData ? '#4f46e5' : '#1e1b4b'}
                  stroke="#6366f1"
                  strokeWidth="2"
                  rx="5"
                />
                <circle
                  cx={x + 22.5}
                  cy={y + 22.5}
                  r={isData ? 12 : 8}
                  fill={isData ? '#818cf8' : '#6366f1'}
                >
                  {isData && (
                    <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" begin={`${i * 0.1}s`} />
                  )}
                </circle>
                <text x={x + 22.5} y={y + 27} textAnchor="middle" fill="#e0e7ff" fontSize="8">
                  {isData ? 'D' : 'S'}
                </text>
              </g>
            );
          })}
        </g>
        {/* Legend */}
        <g transform="translate(300, 60)">
          <circle cx="10" cy="10" r="8" fill="#818cf8" />
          <text x="25" y="14" fill="#e0e7ff" fontSize="10">Data qubit</text>
          <circle cx="10" cy="40" r="6" fill="#6366f1" />
          <text x="25" y="44" fill="#e0e7ff" fontSize="10">Syndrome</text>
        </g>
        {/* Error indication */}
        <circle cx="172.5" cy="102.5" r="18" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3">
          <animate attributeName="r" values="18;22;18" dur="1s" repeatCount="indefinite" />
        </circle>
        <text x="200" y="185" textAnchor="middle" fill="#e0e7ff" fontSize="11">Code de Surface - Correction d'Erreurs</text>
      </svg>
    ),
    'scalability': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Growth curve */}
        <path
          d="M 50 150 Q 100 145 150 130 Q 200 100 250 60 Q 300 30 350 20"
          fill="none"
          stroke="#6366f1"
          strokeWidth="3"
        />
        {/* Milestones */}
        {[
          { x: 50, y: 150, label: '10', year: '2020' },
          { x: 150, y: 130, label: '100', year: '2023' },
          { x: 250, y: 60, label: '1000', year: '2025' },
          { x: 350, y: 20, label: '1M?', year: '2035?' },
        ].map((point, i) => (
          <g key={i}>
            <circle cx={point.x} cy={point.y} r="8" fill="#6366f1">
              <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
            <text x={point.x} y={point.y - 15} textAnchor="middle" fill="#a5b4fc" fontSize="10">{point.label} qubits</text>
            <text x={point.x} y={point.y + 25} textAnchor="middle" fill="#6b7280" fontSize="9">{point.year}</text>
          </g>
        ))}
        {/* Axes */}
        <line x1="40" y1="160" x2="370" y2="160" stroke="#4b5563" strokeWidth="1" />
        <line x1="40" y1="160" x2="40" y2="10" stroke="#4b5563" strokeWidth="1" />
        <text x="200" y="185" textAnchor="middle" fill="#e0e7ff" fontSize="11">Évolution du nombre de qubits</text>
      </svg>
    ),
    'quantum-ecosystem': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Central hub */}
        <circle cx="200" cy="100" r="40" fill="#4f46e5" fillOpacity="0.3" stroke="#6366f1" strokeWidth="2">
          <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="200" y="95" textAnchor="middle" fill="#e0e7ff" fontSize="10">Informatique</text>
        <text x="200" y="110" textAnchor="middle" fill="#e0e7ff" fontSize="10">Quantique</text>
        {/* Satellites */}
        {[
          { x: 80, y: 50, label: 'IBM', color: '#3b82f6' },
          { x: 320, y: 50, label: 'Google', color: '#ef4444' },
          { x: 80, y: 150, label: 'C12', color: '#10b981' },
          { x: 320, y: 150, label: 'IonQ', color: '#f59e0b' },
          { x: 200, y: 30, label: 'Microsoft', color: '#06b6d4' },
        ].map((sat, i) => (
          <g key={i}>
            <line x1="200" y1="100" x2={sat.x} y2={sat.y} stroke={sat.color} strokeWidth="1" strokeDasharray="5,5" />
            <circle cx={sat.x} cy={sat.y} r="25" fill={sat.color} fillOpacity="0.2" stroke={sat.color} strokeWidth="2" />
            <text x={sat.x} y={sat.y + 4} textAnchor="middle" fill="#e0e7ff" fontSize="9">{sat.label}</text>
          </g>
        ))}
      </svg>
    ),
    'quantum-simulators': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Classical computer */}
        <rect x="50" y="60" width="100" height="80" fill="#374151" stroke="#6b7280" strokeWidth="2" rx="5" />
        <rect x="60" y="70" width="80" height="50" fill="#1f2937" rx="3" />
        <text x="100" y="100" textAnchor="middle" fill="#10b981" fontSize="10">Simulateur</text>
        <text x="100" y="115" textAnchor="middle" fill="#6b7280" fontSize="8">~50 qubits max</text>
        {/* Arrow */}
        <path d="M 160 100 L 200 100" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" />
        <text x="180" y="90" textAnchor="middle" fill="#a5b4fc" fontSize="8">vs</text>
        {/* Quantum computer */}
        <g transform="translate(250, 60)">
          <rect x="0" y="0" width="100" height="80" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" rx="5" />
          <circle cx="50" cy="40" r="25" fill="#4f46e5" fillOpacity="0.5">
            <animate attributeName="r" values="25;28;25" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="50" y="44" textAnchor="middle" fill="#e0e7ff" fontSize="10">Réel</text>
          <text x="50" y="75" textAnchor="middle" fill="#a5b4fc" fontSize="8">∞ potentiel</text>
        </g>
        <text x="200" y="175" textAnchor="middle" fill="#e0e7ff" fontSize="11">Simulateurs vs Hardware Réel</text>
      </svg>
    ),
    'quantum-programming': (
      <svg viewBox="0 0 400 200" className={className}>
        {/* Code window */}
        <rect x="50" y="30" width="300" height="130" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" rx="8" />
        {/* Title bar */}
        <rect x="50" y="30" width="300" height="25" fill="#312e81" rx="8" />
        <circle cx="70" cy="42" r="6" fill="#ef4444" />
        <circle cx="90" cy="42" r="6" fill="#f59e0b" />
        <circle cx="110" cy="42" r="6" fill="#10b981" />
        <text x="200" y="47" textAnchor="middle" fill="#a5b4fc" fontSize="10">quantum_circuit.py</text>
        {/* Code lines */}
        <text x="65" y="75" fill="#10b981" fontSize="9" fontFamily="monospace">from qiskit import QuantumCircuit</text>
        <text x="65" y="92" fill="#e0e7ff" fontSize="9" fontFamily="monospace">qc = QuantumCircuit(2, 2)</text>
        <text x="65" y="109" fill="#a5b4fc" fontSize="9" fontFamily="monospace">qc.h(0)  # Hadamard</text>
        <text x="65" y="126" fill="#a5b4fc" fontSize="9" fontFamily="monospace">qc.cx(0, 1)  # CNOT</text>
        <text x="65" y="143" fill="#f59e0b" fontSize="9" fontFamily="monospace">qc.measure_all()</text>
        {/* Framework logos */}
        <text x="100" y="180" textAnchor="middle" fill="#3b82f6" fontSize="9">Qiskit</text>
        <text x="200" y="180" textAnchor="middle" fill="#f59e0b" fontSize="9">Cirq</text>
        <text x="300" y="180" textAnchor="middle" fill="#10b981" fontSize="9">PennyLane</text>
      </svg>
    ),
    'classical-logic': (
      <svg viewBox="0 0 450 220" className={className}>
        {/* Background */}
        <rect x="10" y="10" width="430" height="200" fill="#0f0f1a" rx="8" stroke="#6b7280" strokeWidth="1" strokeOpacity="0.3" />

        {/* Title */}
        <text x="225" y="35" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="bold">Portes Logiques Classiques</text>

        {/* AND Gate */}
        <g transform="translate(40, 60)">
          <path d="M 0 0 L 30 0 Q 60 0 60 25 Q 60 50 30 50 L 0 50 Z" fill="#374151" stroke="#6b7280" strokeWidth="2" />
          <text x="30" y="30" textAnchor="middle" fill="#e5e7eb" fontSize="11" fontWeight="bold">AND</text>
          <line x1="-20" y1="15" x2="0" y2="15" stroke="#6b7280" strokeWidth="2" />
          <line x1="-20" y1="35" x2="0" y2="35" stroke="#6b7280" strokeWidth="2" />
          <line x1="60" y1="25" x2="80" y2="25" stroke="#6b7280" strokeWidth="2" />
          <text x="-25" y="18" fill="#9ca3af" fontSize="9">A</text>
          <text x="-25" y="38" fill="#9ca3af" fontSize="9">B</text>
          <text x="85" y="28" fill="#9ca3af" fontSize="9">A·B</text>
        </g>

        {/* OR Gate */}
        <g transform="translate(170, 60)">
          <path d="M 0 0 Q 15 25 0 50 L 30 50 Q 60 50 60 25 Q 60 0 30 0 Z" fill="#374151" stroke="#6b7280" strokeWidth="2" />
          <text x="30" y="30" textAnchor="middle" fill="#e5e7eb" fontSize="11" fontWeight="bold">OR</text>
          <line x1="-20" y1="15" x2="5" y2="15" stroke="#6b7280" strokeWidth="2" />
          <line x1="-20" y1="35" x2="5" y2="35" stroke="#6b7280" strokeWidth="2" />
          <line x1="60" y1="25" x2="80" y2="25" stroke="#6b7280" strokeWidth="2" />
          <text x="-25" y="18" fill="#9ca3af" fontSize="9">A</text>
          <text x="-25" y="38" fill="#9ca3af" fontSize="9">B</text>
          <text x="85" y="28" fill="#9ca3af" fontSize="9">A+B</text>
        </g>

        {/* NOT Gate */}
        <g transform="translate(300, 60)">
          <polygon points="0,0 50,25 0,50" fill="#374151" stroke="#6b7280" strokeWidth="2" />
          <circle cx="55" cy="25" r="5" fill="#0f0f1a" stroke="#6b7280" strokeWidth="2" />
          <text x="20" y="30" textAnchor="middle" fill="#e5e7eb" fontSize="10" fontWeight="bold">NOT</text>
          <line x1="-20" y1="25" x2="0" y2="25" stroke="#6b7280" strokeWidth="2" />
          <line x1="60" y1="25" x2="80" y2="25" stroke="#6b7280" strokeWidth="2" />
          <text x="-25" y="28" fill="#9ca3af" fontSize="9">A</text>
          <text x="90" y="28" fill="#9ca3af" fontSize="9">Ā</text>
        </g>

        {/* Bit representation */}
        <g transform="translate(60, 140)">
          <rect x="0" y="0" width="40" height="40" fill="#1f2937" stroke="#4b5563" strokeWidth="2" rx="4" />
          <text x="20" y="28" textAnchor="middle" fill="#10b981" fontSize="18" fontWeight="bold">0</text>
          <text x="20" y="55" textAnchor="middle" fill="#6b7280" fontSize="9">OU</text>
          <rect x="60" y="0" width="40" height="40" fill="#1f2937" stroke="#4b5563" strokeWidth="2" rx="4" />
          <text x="80" y="28" textAnchor="middle" fill="#ef4444" fontSize="18" fontWeight="bold">1</text>
        </g>

        {/* Deterministic arrow */}
        <g transform="translate(200, 145)">
          <text x="0" y="15" fill="#9ca3af" fontSize="10">Déterministe :</text>
          <text x="0" y="35" fill="#6b7280" fontSize="9">Même entrée → Même sortie</text>
        </g>

        {/* Irreversible label */}
        <g transform="translate(320, 145)">
          <rect x="0" y="0" width="100" height="40" fill="#7f1d1d" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1" rx="4" />
          <text x="50" y="25" textAnchor="middle" fill="#fca5a5" fontSize="10">Irréversible</text>
        </g>
      </svg>
    ),
    'quantum-logic': (
      <svg viewBox="0 0 450 220" className={className}>
        {/* Background */}
        <rect x="10" y="10" width="430" height="200" fill="#0f0f1a" rx="8" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.3" />

        {/* Title */}
        <text x="225" y="35" textAnchor="middle" fill="#a5b4fc" fontSize="12" fontWeight="bold">Portes Quantiques</text>

        {/* Hadamard Gate */}
        <g transform="translate(40, 60)">
          <rect x="0" y="0" width="50" height="50" fill="#3b82f6" rx="6" />
          <text x="25" y="32" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">H</text>
          <line x1="-20" y1="25" x2="0" y2="25" stroke="#6366f1" strokeWidth="2" />
          <line x1="50" y1="25" x2="70" y2="25" stroke="#6366f1" strokeWidth="2" />
          <text x="25" y="70" textAnchor="middle" fill="#60a5fa" fontSize="8">Superposition</text>
        </g>

        {/* X Gate */}
        <g transform="translate(140, 60)">
          <rect x="0" y="0" width="50" height="50" fill="#ef4444" rx="6" />
          <text x="25" y="32" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">X</text>
          <line x1="-20" y1="25" x2="0" y2="25" stroke="#6366f1" strokeWidth="2" />
          <line x1="50" y1="25" x2="70" y2="25" stroke="#6366f1" strokeWidth="2" />
          <text x="25" y="70" textAnchor="middle" fill="#f87171" fontSize="8">NOT quantique</text>
        </g>

        {/* CNOT Gate */}
        <g transform="translate(240, 50)">
          <line x1="25" y1="0" x2="25" y2="70" stroke="#10b981" strokeWidth="2" />
          <circle cx="25" cy="15" r="8" fill="#10b981" />
          <circle cx="25" cy="55" r="15" fill="none" stroke="#10b981" strokeWidth="2" />
          <line x1="10" y1="55" x2="40" y2="55" stroke="#10b981" strokeWidth="2" />
          <line x1="25" y1="40" x2="25" y2="70" stroke="#10b981" strokeWidth="2" />
          <line x1="-20" y1="15" x2="17" y2="15" stroke="#6366f1" strokeWidth="2" />
          <line x1="-20" y1="55" x2="10" y2="55" stroke="#6366f1" strokeWidth="2" />
          <line x1="33" y1="15" x2="70" y2="15" stroke="#6366f1" strokeWidth="2" />
          <line x1="40" y1="55" x2="70" y2="55" stroke="#6366f1" strokeWidth="2" />
          <text x="25" y="90" textAnchor="middle" fill="#34d399" fontSize="8">Intrication</text>
        </g>

        {/* Phase Gate */}
        <g transform="translate(350, 60)">
          <rect x="0" y="0" width="50" height="50" fill="#8b5cf6" rx="6" />
          <text x="25" y="32" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">S</text>
          <line x1="-20" y1="25" x2="0" y2="25" stroke="#6366f1" strokeWidth="2" />
          <line x1="50" y1="25" x2="70" y2="25" stroke="#6366f1" strokeWidth="2" />
          <text x="25" y="70" textAnchor="middle" fill="#a78bfa" fontSize="8">Phase</text>
        </g>

        {/* Qubit representation - Bloch sphere mini */}
        <g transform="translate(60, 130)">
          <ellipse cx="30" cy="30" rx="30" ry="30" fill="#4f46e5" fillOpacity="0.2" stroke="#6366f1" strokeWidth="1" />
          <ellipse cx="30" cy="30" rx="30" ry="10" fill="none" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="3,3" />
          <line x1="30" y1="5" x2="45" y2="20" stroke="#a5b4fc" strokeWidth="2" />
          <circle cx="45" cy="20" r="4" fill="#a5b4fc">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="30" y="75" textAnchor="middle" fill="#818cf8" fontSize="9">|ψ⟩ = α|0⟩ + β|1⟩</text>
        </g>

        {/* Probabilistic */}
        <g transform="translate(180, 145)">
          <text x="0" y="15" fill="#a5b4fc" fontSize="10">Probabiliste :</text>
          <text x="0" y="35" fill="#818cf8" fontSize="9">Mesure → Résultat aléatoire</text>
        </g>

        {/* Reversible label */}
        <g transform="translate(320, 145)">
          <rect x="0" y="0" width="100" height="40" fill="#064e3b" fillOpacity="0.3" stroke="#10b981" strokeWidth="1" rx="4" />
          <text x="50" y="25" textAnchor="middle" fill="#6ee7b7" fontSize="10">Réversible</text>
        </g>
      </svg>
    ),
    'quantum-algorithm-design': (
      <svg viewBox="0 0 450 200" className={className}>
        {/* Background */}
        <rect x="10" y="10" width="430" height="180" fill="#0f0f1a" rx="8" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.3" />

        {/* Steps */}
        {[
          { x: 50, label: '|0⟩', sublabel: 'Init', color: '#6b7280' },
          { x: 120, label: 'H', sublabel: 'Super-\nposition', color: '#3b82f6' },
          { x: 190, label: 'Uf', sublabel: 'Oracle', color: '#f59e0b' },
          { x: 260, label: '±', sublabel: 'Inter-\nférence', color: '#8b5cf6' },
          { x: 330, label: 'M', sublabel: 'Mesure', color: '#10b981' },
          { x: 400, label: '→', sublabel: 'Résultat', color: '#ec4899' },
        ].map((step, i) => (
          <g key={i}>
            {/* Box */}
            <rect x={step.x - 25} y="50" width="50" height="50" fill={step.color} fillOpacity="0.2" stroke={step.color} strokeWidth="2" rx="8">
              <animate attributeName="fill-opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </rect>
            <text x={step.x} y="82" textAnchor="middle" fill={step.color} fontSize="14" fontWeight="bold">{step.label}</text>
            <text x={step.x} y="120" textAnchor="middle" fill="#9ca3af" fontSize="8">{step.sublabel.split('\n')[0]}</text>
            {step.sublabel.split('\n')[1] && (
              <text x={step.x} y="130" textAnchor="middle" fill="#9ca3af" fontSize="8">{step.sublabel.split('\n')[1]}</text>
            )}
            {/* Arrow */}
            {i < 5 && (
              <line x1={step.x + 25} y1="75" x2={step.x + 45} y2="75" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrowhead)" />
            )}
          </g>
        ))}

        {/* Flow description */}
        <text x="225" y="160" textAnchor="middle" fill="#a5b4fc" fontSize="10">Structure d'un algorithme quantique</text>

        {/* Quantum advantage zone */}
        <rect x="105" y="40" width="175" height="70" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="5,5" rx="10" />
        <text x="192" y="35" textAnchor="middle" fill="#6366f1" fontSize="8">Avantage Quantique</text>

        {/* Key insight */}
        <text x="225" y="180" textAnchor="middle" fill="#6b7280" fontSize="9">Exploiter superposition + interférence avant la mesure unique</text>
      </svg>
    ),
    'quantum-circuit-5qubit': (
      <svg viewBox="0 0 500 280" className={className}>
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        {/* Background */}
        <rect x="10" y="10" width="480" height="260" fill="#0f0f1a" rx="10" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.3" />

        {/* Qubit labels */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={`label-${i}`}>
            <text x="30" y={55 + i * 45} textAnchor="middle" fill="#a5b4fc" fontSize="12" fontFamily="monospace">q{i}</text>
            <text x="470" y={55 + i * 45} textAnchor="middle" fill="#a5b4fc" fontSize="10">|0⟩</text>
          </g>
        ))}

        {/* Qubit lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`line-${i}`} x1="50" y1={50 + i * 45} x2="450" y2={50 + i * 45} stroke="#4b5563" strokeWidth="2" />
        ))}

        {/* Hadamard gates on q0, q1, q2 */}
        {[0, 1, 2].map((i) => (
          <g key={`h-${i}`}>
            <rect x="70" y={35 + i * 45} width="30" height="30" fill="#3b82f6" rx="4" />
            <text x="85" y={55 + i * 45} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">H</text>
          </g>
        ))}

        {/* X gate on q3 */}
        <g>
          <rect x="70" y={35 + 3 * 45} width="30" height="30" fill="#ef4444" rx="4" />
          <text x="85" y={55 + 3 * 45} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">X</text>
        </g>

        {/* S gate on q4 */}
        <g>
          <rect x="70" y={35 + 4 * 45} width="30" height="30" fill="#8b5cf6" rx="4" />
          <text x="85" y={55 + 4 * 45} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">S</text>
        </g>

        {/* CNOT q0 -> q1 */}
        <g>
          <circle cx="130" cy="50" r="6" fill="#10b981" />
          <line x1="130" y1="56" x2="130" y2="89" stroke="#10b981" strokeWidth="2" />
          <circle cx="130" cy="95" r="12" fill="none" stroke="#10b981" strokeWidth="2" />
          <line x1="118" y1="95" x2="142" y2="95" stroke="#10b981" strokeWidth="2" />
          <line x1="130" y1="83" x2="130" y2="107" stroke="#10b981" strokeWidth="2" />
        </g>

        {/* CNOT q1 -> q2 */}
        <g>
          <circle cx="170" cy="95" r="6" fill="#10b981" />
          <line x1="170" y1="101" x2="170" y2="134" stroke="#10b981" strokeWidth="2" />
          <circle cx="170" cy="140" r="12" fill="none" stroke="#10b981" strokeWidth="2" />
          <line x1="158" y1="140" x2="182" y2="140" stroke="#10b981" strokeWidth="2" />
          <line x1="170" y1="128" x2="170" y2="152" stroke="#10b981" strokeWidth="2" />
        </g>

        {/* T gate on q0 */}
        <g>
          <rect x="200" y="35" width="30" height="30" fill="#f59e0b" rx="4" />
          <text x="215" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">T</text>
        </g>

        {/* Rz gate on q2 */}
        <g>
          <rect x="200" y={35 + 2 * 45} width="40" height="30" fill="#06b6d4" rx="4" />
          <text x="220" y={55 + 2 * 45} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Rz</text>
        </g>

        {/* CZ q2 -> q3 */}
        <g>
          <circle cx="270" cy="140" r="6" fill="#ec4899" />
          <line x1="270" y1="146" x2="270" y2="179" stroke="#ec4899" strokeWidth="2" />
          <circle cx="270" cy="185" r="6" fill="#ec4899" />
        </g>

        {/* SWAP q3 <-> q4 */}
        <g>
          <line x1="310" y1="185" x2="310" y2="230" stroke="#f97316" strokeWidth="2" />
          <text x="310" y="190" textAnchor="middle" fill="#f97316" fontSize="16">×</text>
          <text x="310" y="235" textAnchor="middle" fill="#f97316" fontSize="16">×</text>
        </g>

        {/* Toffoli (CCX) q0,q1 -> q4 */}
        <g>
          <circle cx="360" cy="50" r="6" fill="#a855f7" />
          <circle cx="360" cy="95" r="6" fill="#a855f7" />
          <line x1="360" y1="56" x2="360" y2="224" stroke="#a855f7" strokeWidth="2" />
          <circle cx="360" cy="230" r="12" fill="none" stroke="#a855f7" strokeWidth="2" />
          <line x1="348" y1="230" x2="372" y2="230" stroke="#a855f7" strokeWidth="2" />
          <line x1="360" y1="218" x2="360" y2="242" stroke="#a855f7" strokeWidth="2" />
        </g>

        {/* Measurement symbols */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={`measure-${i}`}>
            <rect x="410" y={35 + i * 45} width="30" height="30" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" rx="4" />
            <path d={`M 418 ${55 + i * 45} Q 425 ${45 + i * 45} 432 ${55 + i * 45}`} fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
            <line x1="425" y1={50 + i * 45} x2="430" y2={42 + i * 45} stroke="#a5b4fc" strokeWidth="1.5" />
          </g>
        ))}

        {/* Title */}
        <text x="250" y="268" textAnchor="middle" fill="#e0e7ff" fontSize="11">Circuit quantique à 5 qubits - État de Bell généralisé + Toffoli</text>
      </svg>
    ),
    'bell-state-circuit': (
      <svg viewBox="0 0 400 150" className={className}>
        {/* Background */}
        <rect x="10" y="10" width="380" height="130" fill="#0f0f1a" rx="8" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.3" />

        {/* Qubit labels */}
        <text x="35" y="55" textAnchor="middle" fill="#a5b4fc" fontSize="12" fontFamily="monospace">q0</text>
        <text x="35" y="105" textAnchor="middle" fill="#a5b4fc" fontSize="12" fontFamily="monospace">q1</text>

        {/* Initial state */}
        <text x="60" y="55" textAnchor="middle" fill="#6b7280" fontSize="10">|0⟩</text>
        <text x="60" y="105" textAnchor="middle" fill="#6b7280" fontSize="10">|0⟩</text>

        {/* Qubit lines */}
        <line x1="75" y1="50" x2="350" y2="50" stroke="#4b5563" strokeWidth="2" />
        <line x1="75" y1="100" x2="350" y2="100" stroke="#4b5563" strokeWidth="2" />

        {/* Hadamard gate */}
        <g>
          <rect x="100" y="35" width="35" height="30" fill="#3b82f6" rx="4">
            <animate attributeName="fill-opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
          </rect>
          <text x="117" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">H</text>
        </g>

        {/* CNOT gate */}
        <g>
          <circle cx="180" cy="50" r="8" fill="#10b981">
            <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
          </circle>
          <line x1="180" y1="58" x2="180" y2="88" stroke="#10b981" strokeWidth="2" />
          <circle cx="180" cy="100" r="15" fill="none" stroke="#10b981" strokeWidth="2" />
          <line x1="165" y1="100" x2="195" y2="100" stroke="#10b981" strokeWidth="2" />
          <line x1="180" y1="85" x2="180" y2="115" stroke="#10b981" strokeWidth="2" />
        </g>

        {/* Measurement */}
        <g>
          <rect x="250" y="35" width="35" height="30" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" rx="4" />
          <path d="M 258 55 Q 267 42 276 55" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
          <line x1="267" y1="48" x2="274" y2="38" stroke="#a5b4fc" strokeWidth="1.5" />
        </g>
        <g>
          <rect x="250" y="85" width="35" height="30" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" rx="4" />
          <path d="M 258 105 Q 267 92 276 105" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
          <line x1="267" y1="98" x2="274" y2="88" stroke="#a5b4fc" strokeWidth="1.5" />
        </g>

        {/* Output state */}
        <text x="320" y="75" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">|Φ⁺⟩ = (|00⟩ + |11⟩)/√2</text>

        {/* Labels */}
        <text x="117" y="130" textAnchor="middle" fill="#3b82f6" fontSize="9">Superposition</text>
        <text x="180" y="130" textAnchor="middle" fill="#10b981" fontSize="9">Intrication</text>
        <text x="267" y="130" textAnchor="middle" fill="#a5b4fc" fontSize="9">Mesure</text>
      </svg>
    ),
    'default': (
      <svg viewBox="0 0 400 200" className={className}>
        <circle cx="200" cy="100" r="60" fill="#4f46e5" fillOpacity="0.2" stroke="#6366f1" strokeWidth="2">
          <animate attributeName="r" values="60;70;60" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="200" y="105" textAnchor="middle" fill="#a5b4fc" fontSize="14">Quantum</text>
      </svg>
    ),
  };

  return illustrations[type] || illustrations['default'];
}
