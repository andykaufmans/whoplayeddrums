import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DrummerCard from '@/components/DrummerCard';
import { getAllDrummers, styles, eras } from '@/data/seed';
import { ArrowRight, Disc3, Clock, Play } from 'lucide-react';

export default function Home() {
  const drummers = getAllDrummers();
  const legendaryDrummers = drummers.filter(d => d.tier === 'legendary').slice(0, 4);
  const iconicDrummers = drummers.filter(d => d.tier === 'iconic').slice(0, 4);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden noise-overlay">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                #D4AF37 0px,
                #D4AF37 1px,
                transparent 1px,
                transparent 60px
              ),
              repeating-linear-gradient(
                0deg,
                #D4AF37 0px,
                #D4AF37 1px,
                transparent 1px,
                transparent 60px
              )`
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <p className="font-mono text-xs uppercase tracking-widest text-gold-500 mb-4">
                The Definitive Drummer Database
              </p>
              
              {/* Main Headline */}
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-tight">
                <span className="text-ink-100">Discover the </span>
                <span className="text-gradient-gold">drummers</span>
                <span className="text-ink-100"> behind your favorite music</span>
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-ink-400 max-w-2xl">
                Explore influences, gear, signature songs, and legendary performances. 
                From rock legends to jazz masters, find out who made the beat.
              </p>
              
              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="/drummers" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-ink-950 font-body font-semibold hover:bg-gold-400 transition-colors shadow-brutal hover-brutal"
                >
                  Browse Drummers
                  <ArrowRight size={18} />
                </Link>
                <Link 
                  href="/videos" 
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold-500 text-gold-500 font-body font-semibold hover:bg-gold-500 hover:text-ink-950 transition-colors"
                >
                  <Play size={18} />
                  Watch Videos
                </Link>
              </div>
              
              {/* Stats */}
              <div className="mt-12 pt-8 border-t border-ink-800 flex flex-wrap gap-8">
                <div>
                  <p className="font-display text-4xl text-gold-500">{drummers.length}</p>
                  <p className="text-xs text-ink-500 uppercase tracking-wider mt-1">Drummers</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-gold-500">{styles.length}</p>
                  <p className="text-xs text-ink-500 uppercase tracking-wider mt-1">Styles</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-gold-500">{eras.length}</p>
                  <p className="text-xs text-ink-500 uppercase tracking-wider mt-1">Eras</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-gold-500">30+</p>
                  <p className="text-xs text-ink-500 uppercase tracking-wider mt-1">Videos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legendary Drummers */}
        <section className="py-16 bg-ink-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-gold-500 mb-2">Hall of Fame</p>
                <h2 className="font-display text-3xl sm:text-4xl text-ink-100">Legendary Drummers</h2>
              </div>
              <Link href="/drummers?tier=legendary" className="hidden sm:inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors text-sm">
                View all <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {legendaryDrummers.map((drummer) => (
                <DrummerCard key={drummer.id} drummer={drummer} />
              ))}
            </div>
            
            <Link href="/drummers?tier=legendary" className="sm:hidden mt-6 inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors text-sm">
              View all legendary drummers <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Iconic Drummers */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-gold-500 mb-2">Modern Masters</p>
                <h2 className="font-display text-3xl sm:text-4xl text-ink-100">Iconic Drummers</h2>
              </div>
              <Link href="/drummers?tier=iconic" className="hidden sm:inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors text-sm">
                View all <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {iconicDrummers.map((drummer) => (
                <DrummerCard key={drummer.id} drummer={drummer} />
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="py-16 bg-ink-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-mono text-xs uppercase tracking-widest text-gold-500 mb-2">Explore</p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink-100">Browse by Category</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* By Style */}
              <Link href="/styles" className="group p-8 bg-ink-950 border-2 border-ink-800 hover:border-gold-500 transition-all hover-brutal">
                <Disc3 className="w-12 h-12 text-gold-500 mb-4" />
                <h3 className="font-display text-2xl text-ink-100 group-hover:text-gold-500 transition-colors">By Style</h3>
                <p className="mt-2 text-ink-400 text-sm">Rock, Jazz, Funk, Metal, Prog, and more</p>
                <p className="mt-4 font-mono text-xs text-gold-500">{styles.length} styles →</p>
              </Link>
              
              {/* By Era */}
              <Link href="/eras" className="group p-8 bg-ink-950 border-2 border-ink-800 hover:border-gold-500 transition-all hover-brutal">
                <Clock className="w-12 h-12 text-gold-500 mb-4" />
                <h3 className="font-display text-2xl text-ink-100 group-hover:text-gold-500 transition-colors">By Era</h3>
                <p className="mt-2 text-ink-400 text-sm">From the British Invasion to Modern Day</p>
                <p className="mt-4 font-mono text-xs text-gold-500">{eras.length} eras →</p>
              </Link>
              
              {/* Videos */}
              <Link href="/videos" className="group p-8 bg-ink-950 border-2 border-ink-800 hover:border-gold-500 transition-all hover-brutal">
                <Play className="w-12 h-12 text-gold-500 mb-4" />
                <h3 className="font-display text-2xl text-ink-100 group-hover:text-gold-500 transition-colors">Videos</h3>
                <p className="mt-2 text-ink-400 text-sm">Performances, tutorials, and documentaries</p>
                <p className="mt-4 font-mono text-xs text-gold-500">30+ videos →</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl text-ink-100 mb-4">
              Ready to discover your next favorite drummer?
            </h2>
            <p className="text-ink-400 mb-8 max-w-xl mx-auto">
              Explore our growing database of legendary and influential drummers from every genre and era.
            </p>
            <Link 
              href="/drummers" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-ink-950 font-body font-semibold hover:bg-gold-400 transition-colors shadow-brutal-lg hover-brutal text-lg"
            >
              Start Exploring
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
