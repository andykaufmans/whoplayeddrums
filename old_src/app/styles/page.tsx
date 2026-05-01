import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { styles } from '@/data/seed';
import { Disc3 } from 'lucide-react';

export default function StylesPage() {
  // Group styles by parent
  const parentStyles = styles.filter(s => !s.parent_id);
  const childStyles = styles.filter(s => s.parent_id);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-12 bg-ink-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <Disc3 className="w-10 h-10 text-gold-500" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-gold-500">Browse</p>
                <h1 className="font-display text-4xl sm:text-5xl text-ink-100">Styles & Genres</h1>
              </div>
            </div>
            <p className="mt-4 text-ink-400 max-w-2xl">
              Explore drummers by their primary style and genre. From rock to jazz, funk to metal, 
              discover the drummers who defined each sound.
            </p>
          </div>
        </section>

        {/* Styles Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {parentStyles.map(style => {
                const children = childStyles.filter(c => c.parent_id === style.id);
                
                return (
                  <div key={style.id} className="bg-ink-900 border-2 border-ink-800 hover:border-gold-500 transition-colors p-6">
                    <h3 className="font-display text-2xl text-ink-100">{style.name}</h3>
                    {style.description && (
                      <p className="mt-2 text-sm text-ink-400">{style.description}</p>
                    )}
                    
                    {children.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-ink-800">
                        <p className="text-xs font-mono uppercase tracking-wider text-ink-500 mb-2">Sub-genres</p>
                        <div className="flex flex-wrap gap-2">
                          {children.map(child => (
                            <span 
                              key={child.id}
                              className="tag"
                            >
                              {child.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Coming Soon Notice */}
            <div className="mt-12 p-8 bg-ink-900 border border-ink-800 text-center">
              <p className="text-ink-400">
                <span className="text-gold-500">Coming Soon:</span> Filter drummers by style. 
                We're adding style tags to every drummer profile.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
