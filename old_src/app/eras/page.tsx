import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { eras } from '@/data/seed';
import { Clock } from 'lucide-react';

export default function ErasPage() {
  // Sort eras by start year
  const sortedEras = [...eras].sort((a, b) => a.start_year - b.start_year);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-12 bg-ink-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-10 h-10 text-gold-500" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-gold-500">Browse</p>
                <h1 className="font-display text-4xl sm:text-5xl text-ink-100">Eras & Periods</h1>
              </div>
            </div>
            <p className="mt-4 text-ink-400 max-w-2xl">
              Journey through the history of drumming, from the British Invasion to the modern era.
              Each period brought new techniques, sounds, and legendary drummers.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Timeline visualization */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-ink-800 transform md:-translate-x-1/2" />
              
              {/* Era cards */}
              <div className="space-y-8">
                {sortedEras.map((era, index) => (
                  <div 
                    key={era.id} 
                    className={`relative flex flex-col md:flex-row items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold-500 transform -translate-x-1/2 mt-6 z-10" />
                    
                    {/* Card */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-ink-900 border-2 border-ink-800 hover:border-gold-500 transition-colors p-6">
                        {/* Years */}
                        <div className="font-mono text-sm text-gold-500 mb-2">
                          {era.start_year}
                          {era.end_year ? `–${era.end_year}` : '–Present'}
                        </div>
                        
                        <h3 className="font-display text-2xl text-ink-100">{era.name}</h3>
                        
                        {era.description && (
                          <p className="mt-3 text-ink-400">{era.description}</p>
                        )}
                        
                        {/* Duration */}
                        <div className="mt-4 text-xs text-ink-500">
                          {era.end_year 
                            ? `${era.end_year - era.start_year} years`
                            : `${new Date().getFullYear() - era.start_year}+ years and counting`
                          }
                        </div>
                      </div>
                    </div>
                    
                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Coming Soon Notice */}
            <div className="mt-16 p-8 bg-ink-900 border border-ink-800 text-center">
              <p className="text-ink-400">
                <span className="text-gold-500">Coming Soon:</span> Filter drummers by era. 
                We're adding era tags to every drummer profile.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
