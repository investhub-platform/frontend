import React from 'react'
import Navbar from './components/layout/Navbar'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Navbar />
      <main className="pt-32 px-6 pb-12 max-w-6xl mx-auto">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">InvestHub — Next‑gen investment insights</h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Ultra-modern fintech analytics for professional investors. Fast, reliable, and delightful.</p>
          <div className="mt-8 flex justify-center">
            <a className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg" href="/get-started">Get Started</a>
          </div>
        </section>
        <section id="product" className="mt-20">
          <div className="rounded-xl bg-white/3 border border-white/5 p-6 backdrop-blur-xl text-slate-200">
            <h2 className="text-2xl font-semibold text-white">Tailwind Test</h2>
            <p className="mt-2 text-slate-300">If Tailwind is configured correctly, utilities like <span className="font-mono bg-white/5 px-1 rounded">bg-green-100</span> and <span className="font-mono bg-white/5 px-1 rounded">text-green-800</span> will apply below.</p>
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">Tailwind test box — green background & text</div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
