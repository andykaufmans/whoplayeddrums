import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DrummerCard from '@/components/DrummerCard';
import { getAllDrummers } from '@/data/seed';
import { TIER_CONFIG } from '@/types';
import Link from 'next/link';

interface DrummersPageProps {
  searchParams: { tier?: string; style?: string };
}

export default function DrummersPage({ searchParams }: DrummersPageProps) {
  const allDrummers = getAllDrummers();
  
  // Filter by tier if specified
  const filteredDrummers = searchParams.tier 
    ? allDrummers.filter(d => d.tier === searchParams.tier)
    : allDrummers;

  // Group by tier for display
  const tiers = ['legendary', 'iconic', 'influential', 'notable', 'rising'] as const;
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-12 bg-ink-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs uppercase tracking-widest text-gold-500 mb-2">Database</p>
            <h1 className="font-display text-4xl sm:text-5xl text-ink-100">
              {searchParams.tier 
                ? `${TIER_CONFIG[searchParams.tier as keyof typeof TIER_CONFIG]?.label || 'All'} Drummers`
                : 'All Drummers'
              }
            </h1>
            <p className="mt-4 text-ink-400 max-w-2xl">
              {filteredDrummers.length} drummers in our database. Click any card to explore their full profile, 
              videos, influences, and signature songs.
            </p>
            
            {/* Tier Filters */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link 
                href="/drummers"
                className={`px-4 py-2 text-sm font-mono uppercase tracking-wider border-2 transition-colors ${
                  !searchParams.tier 
                    ? 'bg-gold-500 border-gold-500 text-ink-950' 
                    : 'border-ink-700 text-ink-400 hover:border-gold-500 hover:text-gold-500'
                }`}
              >
                All ({allDrummers.length})
              </Link>
              {tiers.map(tier => {
                const count = allDrummers.filter(d => d.tier === tier).length;
                if (count === 0) return null;
                return (
                  <Link 
                    key={tier}
                    href={`/drummers?tier=${tier}`}
                    className={`px-4 py-2 text-sm font-mono uppercase tracking-wider border-2 transition-colors ${
                      searchParams.tier === tier 
                        ? 'bg-gold-500 border-gold-500 text-ink-950' 
                        : 'border-ink-700 text-ink-400 hover:border-gold-500 hover:text-gold-500'
                    }`}
                  >
                    {TIER_CONFIG[tier].label} ({count})
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Drummers Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {searchParams.tier ? (
              // Single tier view
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDrummers.map(drummer => (
                  <DrummerCard key={drummer.id} drummer={drummer} />
                ))}
              </div>
            ) : (
              // Grouped by tier
              <div className="space-y-16">
                {tiers.map(tier => {
                  const tierDrummers = allDrummers.filter(d => d.tier === tier);
                  if (tierDrummers.length === 0) return null;
                  
                  return (
                    <div key={tier}>
                      <div className="flex items-center gap-4 mb-6">
                        <h2 className={`font-display text-2xl ${TIER_CONFIG[tier].color}`}>
                          {TIER_CONFIG[tier].label}
                        </h2>
                        <div className="flex-1 h-px bg-ink-800" />
                        <span className="font-mono text-xs text-ink-500">
                          {tierDrummers.length} drummer{tierDrummers.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {tierDrummers.map(drummer => (
                          <DrummerCard key={drummer.id} drummer={drummer} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
