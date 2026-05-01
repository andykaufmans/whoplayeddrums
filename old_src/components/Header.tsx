'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink-950/95 backdrop-blur-sm border-b-2 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 border-2 border-gold-500 flex items-center justify-center bg-ink-900 group-hover:bg-gold-500 transition-colors">
              <span className="text-gold-500 group-hover:text-ink-950 font-mono font-bold text-lg transition-colors">W</span>
            </div>
            <span className="hidden sm:block font-display text-xl tracking-tight">
              <span className="text-gold-500">Who</span>
              <span className="text-ink-100">PlayedDrums</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/drummers" className="text-ink-300 hover:text-gold-500 transition-colors font-body text-sm uppercase tracking-wider">
              Drummers
            </Link>
            <Link href="/styles" className="text-ink-300 hover:text-gold-500 transition-colors font-body text-sm uppercase tracking-wider">
              Styles
            </Link>
            <Link href="/eras" className="text-ink-300 hover:text-gold-500 transition-colors font-body text-sm uppercase tracking-wider">
              Eras
            </Link>
            <Link href="/videos" className="text-ink-300 hover:text-gold-500 transition-colors font-body text-sm uppercase tracking-wider">
              Videos
            </Link>
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search drummers..."
                  className="w-48 lg:w-64 bg-ink-900 border-2 border-ink-700 focus:border-gold-500 text-ink-100 placeholder-ink-500 px-4 py-2 pr-10 text-sm outline-none transition-colors"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-500 hover:text-gold-500 transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </form>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-ink-300 hover:text-gold-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-ink-900 border-b-2 border-gold-500">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search drummers..."
                  className="w-full bg-ink-800 border-2 border-ink-700 focus:border-gold-500 text-ink-100 placeholder-ink-500 px-4 py-2 pr-10 text-sm outline-none transition-colors"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-500 hover:text-gold-500 transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </form>
            
            {/* Mobile Links */}
            <nav className="flex flex-col gap-3">
              <Link 
                href="/drummers" 
                onClick={() => setIsMenuOpen(false)}
                className="text-ink-300 hover:text-gold-500 transition-colors font-body text-sm uppercase tracking-wider py-2"
              >
                Drummers
              </Link>
              <Link 
                href="/styles" 
                onClick={() => setIsMenuOpen(false)}
                className="text-ink-300 hover:text-gold-500 transition-colors font-body text-sm uppercase tracking-wider py-2"
              >
                Styles
              </Link>
              <Link 
                href="/eras" 
                onClick={() => setIsMenuOpen(false)}
                className="text-ink-300 hover:text-gold-500 transition-colors font-body text-sm uppercase tracking-wider py-2"
              >
                Eras
              </Link>
              <Link 
                href="/videos" 
                onClick={() => setIsMenuOpen(false)}
                className="text-ink-300 hover:text-gold-500 transition-colors font-body text-sm uppercase tracking-wider py-2"
              >
                Videos
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
