import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/landing/Hero'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Navbar />
      <main className="pt-32 px-6 pb-12 max-w-6xl mx-auto">
        <Hero />
        
      </main>
    </div>
  )
}

export default App
