import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/landing/Hero'
import SocialProof from './components/landing/SocialProof'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Navbar />
      <Hero />

      <main className="pt-12 px-6 pb-12 max-w-6xl mx-auto">
        <SocialProof />
        
      </main>
    </div>
  )
}

export default App
