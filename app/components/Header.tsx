'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            WebDev<span className="text-accent">Pro</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary transition">Home</a>
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#portfolio" className="hover:text-primary transition">Portfolio</a>
            <a href="#process" className="hover:text-primary transition">Process</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block hover:text-primary transition">Home</a>
            <a href="#services" className="block hover:text-primary transition">Services</a>
            <a href="#portfolio" className="block hover:text-primary transition">Portfolio</a>
            <a href="#process" className="block hover:text-primary transition">Process</a>
            <a href="#contact" className="block hover:text-primary transition">Contact</a>
          </div>
        )}
      </nav>
    </header>
  )
}
