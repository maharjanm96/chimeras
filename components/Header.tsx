"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-serif bg-white/5 backdrop-blur-lg border-b border-black/5 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-6">
          <div className="text-2xl font-bold tracking-tighter uppercase italic">
            Chimeras
          </div>
          <nav className="flex space-x-8 text-sm uppercase tracking-widest font-sans font-medium">
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
        </div>
      </div>
    </header>
  );
}
