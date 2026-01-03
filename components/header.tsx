"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md border-b border-blue-500/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="ml-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Afonso Manata</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {["Home", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors bg-clip-text"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-blue-400">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 right-0 bg-slate-900 border-l border-b border-blue-500/20 w-48">
            {["Home", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 hover:bg-blue-500/10 transition-colors text-sm border-b border-blue-500/10"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
