import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t-2 border-ink-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl">
                <span className="text-gold-500">Who</span>
                <span className="text-ink-100">PlayedDrums</span>
              </span>
            </Link>
            <p className="mt-4 text-ink-400 text-sm max-w-md">
              The definitive database for discovering the drummers behind your favorite music. 
              Explore influences, gear, signature songs, and legendary performances.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-gold-500 mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/drummers" className="text-ink-400 hover:text-gold-500 transition-colors text-sm">
                  All Drummers
                </Link>
              </li>
              <li>
                <Link href="/styles" className="text-ink-400 hover:text-gold-500 transition-colors text-sm">
                  By Style
                </Link>
              </li>
              <li>
                <Link href="/eras" className="text-ink-400 hover:text-gold-500 transition-colors text-sm">
                  By Era
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-ink-400 hover:text-gold-500 transition-colors text-sm">
                  Videos
                </Link>
              </li>
            </ul>
          </div>

          {/* Tiers */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-gold-500 mb-4">Tiers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/drummers?tier=legendary" className="text-ink-400 hover:text-gold-500 transition-colors text-sm">
                  Legendary
                </Link>
              </li>
              <li>
                <Link href="/drummers?tier=iconic" className="text-ink-400 hover:text-gold-500 transition-colors text-sm">
                  Iconic
                </Link>
              </li>
              <li>
                <Link href="/drummers?tier=influential" className="text-ink-400 hover:text-gold-500 transition-colors text-sm">
                  Influential
                </Link>
              </li>
              <li>
                <Link href="/drummers?tier=notable" className="text-ink-400 hover:text-gold-500 transition-colors text-sm">
                  Notable
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-ink-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ink-500 text-xs">
            © {new Date().getFullYear()} WhoPlayedDrums. Built for drummers, by drum enthusiasts.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-ink-500 hover:text-gold-500 transition-colors text-xs">
              About
            </Link>
            <Link href="/contact" className="text-ink-500 hover:text-gold-500 transition-colors text-xs">
              Contact
            </Link>
            <Link href="/privacy" className="text-ink-500 hover:text-gold-500 transition-colors text-xs">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
