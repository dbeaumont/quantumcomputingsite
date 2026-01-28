import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import QuantumBackground from './components/QuantumBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quantum Computing | Apprenez l\'informatique quantique',
  description: 'Découvrez l\'informatique quantique de manière interactive avec des cours, des exercices et un suivi de progression personnalisé.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <QuantumBackground />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
