"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-serif bg-white/5 backdrop-blur-lg border-b border-black/5 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex justify-between items-center py-6">
          <div className="text-2xl font-bold tracking-tighter uppercase italic">
            Chimeras
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-sans font-medium">
            <a
              href="#home"
              className="hover:text-neutral-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-neutral-500 transition-colors"
            >
              About
            </a>
            <a
              href="#collections"
              className="hover:text-neutral-500 transition-colors"
            >
              Collections
            </a>
            <a
              href="#contact"
              className="hover:text-neutral-500 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 text-sm uppercase tracking-widest font-sans font-medium text-center">
            <a
              href="#home"
              className="hover:text-neutral-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-neutral-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#collections"
              className="hover:text-neutral-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </a>
            <a
              href="#contact"
              className="hover:text-neutral-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
