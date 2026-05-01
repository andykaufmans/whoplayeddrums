import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { getDrummerWithRelations, drummers, videos, influences, signatureSongs } from '@/data/seed';
import { TIER_CONFIG, VIDEO_TYPE_LABELS } from '@/types';
import { ArrowLeft, Calendar, MapPin, Users, Play, Music, Disc3 } from 'lucide-react';

interface DrummerPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return drummers.map((drummer) => ({
    slug: drummer.slug,
  }));
}

export default function DrummerPage({ params }: DrummerPageProps) {
  const drummer = getDrummerWithRelations(params.slug);
  
  if (!drummer) {
    notFound();
  }

  const tierConfig = TIER_CONFIG[drummer.tier];
  
  // Get videos for this drummer
  const drummerVideos = videos.filter(v => v.drummer_id === drummer.id);
  const featuredVideos = drummerVideos.filter(v => v.is_featured);
  const otherVideos = drummerVideos.filter(v => !v.is_featured);
  
  // Get signature songs
  const songs = signatureSongs.filter(s => s.drummer_id === drummer.id);
  
  // Get influences
  const influencedBy = influences.filter(i => i.influenced_id === drummer.id).map(i => ({
    ...i,
    influencer: drummers.find(d => d.id === i.influencer_id),
  }));
  
  const influencedOthers = influences.filter(i => i.influencer_id === drummer.id).map(i => ({
    ...i,
    influenced: drummers.find(d => d.id === i.influenced_id),
  }));

  // Format dates
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getLifespan = () => {
    if (!drummer.birth_date) return null;
    const birthYear = new Date(drummer.birth_date).getFullYear();
    if (drummer.death_date) {
      const deathYear = new Date(drummer.death_date).getFullYear();
      return { birth: birthYear, death: deathYear, age: deathYear - birthYear };
    }
    const currentYear = new Date().getFullYear();
    return { birth: birthYear, death: null, age: currentYear - birthYear };
  };

  const lifespan = getLifespan();
  const initials = drummer.name.split(' ').map(n => n[0]).join('');

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Back Link */}
        <div className="bg-ink-900 border-b border-ink-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/drummers" className="inline-flex items-center gap-2 text-ink-400 hover:text-gold-500 transition-colors text-sm">
              <ArrowLeft size={16} />
              Back to all drummers
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-ink-900 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Photo */}
              <div className="lg:col-span-1">
                <div className="aspect-square bg-ink-800 border-2 border-ink-700 overflow-hidden">
                  {drummer.photo_url ? (
                    <img 
                      src={drummer.photo_url} 
                      alt={drummer.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ink-800 to-ink-900">
                      <span className="font-display text-8xl text-ink-700">
                        {initials}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-2">
                {/* Tier Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider border ${tierConfig.color} border-current`}>
                    {tierConfig.label}
                  </span>
                  {drummer.is_active && (
                    <span className="ml-3 inline-flex items-center gap-1 text-xs text-green-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Currently Active
                    </span>
                  )}
                </div>

                {/* Name */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-100">
                  {drummer.name}
                </h1>

                {/* Meta Info */}
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-ink-400">
                  {lifespan && (
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gold-500" />
                      <span>
                        {lifespan.birth}
                        {lifespan.death ? `–${lifespan.death}` : ''} 
                        <span className="text-ink-500 ml-1">
                          ({lifespan.death ? `lived ${lifespan.age} years` : `age ${lifespan.age}`})
                        </span>
                      </span>
                    </div>
                  )}
                  {drummer.birth_place && (
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-gold-500" />
                      <span>{drummer.birth_place}</span>
                    </div>
                  )}
                </div>

                {/* Bio */}
                <p className="mt-6 text-lg text-ink-300 leading-relaxed">
                  {drummer.bio_short}
                </p>
                
                {drummer.bio_full && drummer.bio_full !== drummer.bio_short && (
                  <p className="mt-4 text-ink-400 leading-relaxed">
                    {drummer.bio_full}
                  </p>
                )}

                {/* Quick Stats */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-ink-950 border border-ink-800 p-4">
                    <p className="font-display text-2xl text-gold-500">{drummerVideos.length}</p>
                    <p className="text-xs text-ink-500 uppercase tracking-wider mt-1">Videos</p>
                  </div>
                  <div className="bg-ink-950 border border-ink-800 p-4">
                    <p className="font-display text-2xl text-gold-500">{songs.length}</p>
                    <p className="text-xs text-ink-500 uppercase tracking-wider mt-1">Signature Songs</p>
                  </div>
                  <div className="bg-ink-950 border border-ink-800 p-4">
                    <p className="font-display text-2xl text-gold-500">{influencedBy.length}</p>
                    <p className="text-xs text-ink-500 uppercase tracking-wider mt-1">Influences</p>
                  </div>
                  <div className="bg-ink-950 border border-ink-800 p-4">
                    <p className="font-display text-2xl text-gold-500">{influencedOthers.length}</p>
                    <p className="text-xs text-ink-500 uppercase tracking-wider mt-1">Influenced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        {drummerVideos.length > 0 && (
          <section className="py-12 border-t border-ink-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-8">
                <Play className="w-8 h-8 text-gold-500" />
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-ink-100">Videos</h2>
                  <p className="text-sm text-ink-500">Performances, tutorials, and interviews</p>
                </div>
              </div>

              {/* Featured Videos */}
              {featuredVideos.length > 0 && (
                <div className="mb-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-gold-500 mb-4">Featured</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featuredVideos.map(video => (
                      <YouTubeEmbed key={video.id} video={video} size="large" />
                    ))}
                  </div>
                </div>
              )}

              {/* Other Videos */}
              {otherVideos.length > 0 && (
                <div>
                  {featuredVideos.length > 0 && (
                    <p className="font-mono text-xs uppercase tracking-widest text-ink-500 mb-4">More Videos</p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherVideos.map(video => (
                      <YouTubeEmbed key={video.id} video={video} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Signature Songs Section */}
        {songs.length > 0 && (
          <section className="py-12 bg-ink-900 border-t border-ink-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-8">
                <Music className="w-8 h-8 text-gold-500" />
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-ink-100">Signature Songs</h2>
                  <p className="text-sm text-ink-500">Tracks that define their drumming legacy</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {songs.map(song => (
                  <div key={song.id} className="bg-ink-950 border border-ink-800 p-4 hover:border-gold-500 transition-colors">
                    <h3 className="font-display text-lg text-ink-100">{song.song_title}</h3>
                    <p className="text-sm text-gold-500 mt-1">{song.band_name}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-ink-500">
                      {song.album_name && <span>{song.album_name}</span>}
                      {song.year && (
                        <>
                          <span className="text-ink-700">•</span>
                          <span>{song.year}</span>
                        </>
                      )}
                    </div>
                    {song.why_notable && (
                      <p className="mt-3 text-sm text-ink-400">{song.why_notable}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Influences Section */}
        {(influencedBy.length > 0 || influencedOthers.length > 0) && (
          <section className="py-12 border-t border-ink-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-8 h-8 text-gold-500" />
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-ink-100">Influence Map</h2>
                  <p className="text-sm text-ink-500">Who influenced them and who they influenced</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Influenced By */}
                {influencedBy.length > 0 && (
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-gold-500 mb-4">
                      Influenced By
                    </p>
                    <div className="space-y-3">
                      {influencedBy.map(inf => (
                        <div key={inf.id} className="bg-ink-900 border border-ink-800 p-4 hover:border-gold-500 transition-colors">
                          <div className="flex items-center justify-between">
                            {inf.influencer ? (
                              <Link href={`/drummer/${inf.influencer.slug}`} className="font-display text-lg text-ink-100 hover:text-gold-500 transition-colors">
                                {inf.influencer.name}
                              </Link>
                            ) : (
                              <span className="font-display text-lg text-ink-100">Unknown</span>
                            )}
                            <span className="text-xs font-mono uppercase text-ink-500 border border-ink-700 px-2 py-1">
                              {inf.influence_type}
                            </span>
                          </div>
                          {inf.what_was_learned && (
                            <p className="mt-2 text-sm text-ink-400">{inf.what_was_learned}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Influenced Others */}
                {influencedOthers.length > 0 && (
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-gold-500 mb-4">
                      Influenced
                    </p>
                    <div className="space-y-3">
                      {influencedOthers.map(inf => (
                        <div key={inf.id} className="bg-ink-900 border border-ink-800 p-4 hover:border-gold-500 transition-colors">
                          <div className="flex items-center justify-between">
                            {inf.influenced ? (
                              <Link href={`/drummer/${inf.influenced.slug}`} className="font-display text-lg text-ink-100 hover:text-gold-500 transition-colors">
                                {inf.influenced.name}
                              </Link>
                            ) : (
                              <span className="font-display text-lg text-ink-100">Unknown</span>
                            )}
                            <span className="text-xs font-mono uppercase text-ink-500 border border-ink-700 px-2 py-1">
                              {inf.influence_type}
                            </span>
                          </div>
                          {inf.what_was_learned && (
                            <p className="mt-2 text-sm text-ink-400">{inf.what_was_learned}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
