import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DrummerCard from '@/components/DrummerCard';
import { searchDrummers, getAllDrummers } from '@/data/seed';
import { Search } from 'lucide-react';
import Link from 'next/link';

interface SearchPageProps {
  searchParams: { q?: string };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  const results = query ? searchDrummers(query) : [];
  const allDrummers = getAllDrummers();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-12 bg-ink-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <Search className="w-10 h-10 text-gold-500" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-gold-500">Search</p>
                <h1 className="font-display text-4xl sm:text-5xl text-ink-100">
                  {query ? `Results for "${query}"` : 'Search Drummers'}
                </h1>
              </div>
            </div>
            
            {query && (
              <p className="mt-4 text-ink-400">
                Found {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {query ? (
              results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {results.map(drummer => {
                    const fullDrummer = allDrummers.find(d => d.id === drummer.id);
                    return fullDrummer ? (
                      <DrummerCard key={drummer.id} drummer={fullDrummer} />
                    ) : null;
                  })}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-ink-400 text-lg mb-4">No drummers found matching "{query}"</p>
                  <p className="text-ink-500 text-sm mb-8">Try a different search term or browse all drummers</p>
                  <Link 
                    href="/drummers"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-ink-950 font-body font-semibold hover:bg-gold-400 transition-colors"
                  >
                    Browse All Drummers
                  </Link>
                </div>
              )
            ) : (
              <div className="text-center py-16">
                <p className="text-ink-400 text-lg mb-8">Enter a search term to find drummers</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="text-ink-500 text-sm">Try:</span>
                  {['Keith Moon', 'Jazz', 'British', 'Prog'].map(term => (
                    <Link 
                      key={term}
                      href={`/search?q=${encodeURIComponent(term)}`}
                      className="text-gold-500 hover:text-gold-400 transition-colors text-sm"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
