import React from 'react'

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-4 px-3 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg max-w-4xl w-full mx-4">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="InvestHub" width={28} height={28} style={{maxWidth: '100%', display: 'block'}} className="h-6 w-6 md:h-7 md:w-7 rounded-md object-contain" />
          <span className="text-white font-semibold tracking-wide text-sm md:text-base">InvestHub</span>
        </a>

        <nav className="flex-1 flex justify-center gap-6 text-sm text-slate-300 hidden md:flex">
          <a href="#product" className="hover:text-white transition-colors">Product</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#resources" className="hover:text-white transition-colors">Resources</a>
          <a href="#company" className="hover:text-white transition-colors">Company</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="/get-started" className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium shadow-lg hover:scale-[1.02] transition-transform">Get Started</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
