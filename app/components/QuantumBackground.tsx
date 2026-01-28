'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export default function QuantumBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 10,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="quantum-bg">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="quantum-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}
