import Link from 'next/link';
import { Drummer, TIER_CONFIG } from '@/types';

interface DrummerCardProps {
  drummer: Drummer & { video_count?: number; signature_song_count?: number };
}

export default function DrummerCard({ drummer }: DrummerCardProps) {
  const tierConfig = TIER_CONFIG[drummer.tier];
  
  // Generate initials for placeholder
  const initials = drummer.name.split(' ').map(n => n[0]).join('');
  
  // Calculate lifespan or current age
  const getLifespan = () => {
    if (!drummer.birth_date) return null;
    const birthYear = new Date(drummer.birth_date).getFullYear();
    if (drummer.death_date) {
      const deathYear = new Date(drummer.death_date).getFullYear();
      return `${birthYear}–${deathYear}`;
    }
    return `b. ${birthYear}`;
  };

  return (
    <Link href={`/drummer/${drummer.slug}`}>
      <article className="drummer-card group bg-ink-900 border-2 border-ink-800 hover:border-gold-500 transition-all duration-300">
        {/* Image / Placeholder */}
        <div className="relative aspect-square bg-ink-800 overflow-hidden">
          {drummer.photo_url ? (
            <img 
              src={drummer.photo_url} 
              alt={drummer.name}
              className="drummer-image w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ink-800 to-ink-900">
              <span className="font-display text-6xl text-ink-700 group-hover:text-gold-500/30 transition-colors">
                {initials}
              </span>
            </div>
          )}
          
          {/* Tier Badge */}
          <div className="absolute top-3 right-3">
            <span className={`inline-block px-2 py-1 text-xs font-mono uppercase tracking-wider bg-ink-950/80 ${tierConfig.color} border border-current`}>
              {tierConfig.label}
            </span>
          </div>
          
          {/* Active/Inactive Indicator */}
          {!drummer.is_active && (
            <div className="absolute bottom-3 left-3">
              <span className="inline-block w-2 h-2 bg-ink-500 rounded-full" title="Not currently active" />
            </div>
          )}
          {drummer.is_active && (
            <div className="absolute bottom-3 left-3">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Currently active" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-xl text-ink-100 group-hover:text-gold-500 transition-colors truncate">
            {drummer.name}
          </h3>
          
          <div className="mt-1 flex items-center gap-2 text-xs text-ink-500 font-mono">
            {getLifespan() && <span>{getLifespan()}</span>}
            {drummer.nationality && (
              <>
                <span className="text-ink-700">•</span>
                <span>{drummer.nationality}</span>
              </>
            )}
          </div>
          
          <p className="mt-3 text-sm text-ink-400 line-clamp-2">
            {drummer.bio_short}
          </p>
          
          {/* Stats */}
          <div className="mt-4 pt-3 border-t border-ink-800 flex gap-4">
            {drummer.video_count !== undefined && drummer.video_count > 0 && (
              <div className="flex items-center gap-1 text-xs text-ink-500">
                <span className="text-gold-500">{drummer.video_count}</span>
                <span>videos</span>
              </div>
            )}
            {drummer.signature_song_count !== undefined && drummer.signature_song_count > 0 && (
              <div className="flex items-center gap-1 text-xs text-ink-500">
                <span className="text-gold-500">{drummer.signature_song_count}</span>
                <span>tracks</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
