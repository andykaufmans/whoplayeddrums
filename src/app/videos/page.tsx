'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { videos, drummers } from '@/data/seed';
import { VIDEO_TYPE_LABELS, Video } from '@/types';
import { Play } from 'lucide-react';

type VideoType = Video['video_type'] | 'all';

export default function VideosPage() {
  const [selectedType, setSelectedType] = useState<VideoType>('all');
  const [selectedDrummer, setSelectedDrummer] = useState<string>('all');

  // Get unique video types that exist in our data
  const videoTypes = Array.from(new Set(videos.map(v => v.video_type)));
  
  // Filter videos
  const filteredVideos = videos.filter(v => {
    if (selectedType !== 'all' && v.video_type !== selectedType) return false;
    if (selectedDrummer !== 'all' && v.drummer_id !== selectedDrummer) return false;
    return true;
  });

  // Sort: featured first, then by sort_order
  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (a.is_featured && !b.is_featured) return -1;
    if (!a.is_featured && b.is_featured) return 1;
    return a.sort_order - b.sort_order;
  });

  // Get drummer name for display
  const getDrummerName = (drummerId: string) => {
    const drummer = drummers.find(d => d.id === drummerId);
    return drummer?.name || 'Unknown';
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-12 bg-ink-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <Play className="w-10 h-10 text-gold-500" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-gold-500">Video Library</p>
                <h1 className="font-display text-4xl sm:text-5xl text-ink-100">Videos</h1>
              </div>
            </div>
            <p className="mt-4 text-ink-400 max-w-2xl">
              {videos.length} curated videos featuring performances, tutorials, interviews, and documentaries
              from legendary drummers.
            </p>

            {/* Filters */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Type Filter */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-500 mb-2">
                  Video Type
                </label>
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as VideoType)}
                  className="bg-ink-800 border-2 border-ink-700 text-ink-100 px-4 py-2 text-sm focus:border-gold-500 outline-none min-w-[180px]"
                >
                  <option value="all">All Types ({videos.length})</option>
                  {videoTypes.map(type => (
                    <option key={type} value={type}>
                      {VIDEO_TYPE_LABELS[type]} ({videos.filter(v => v.video_type === type).length})
                    </option>
                  ))}
                </select>
              </div>

              {/* Drummer Filter */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-500 mb-2">
                  Drummer
                </label>
                <select 
                  value={selectedDrummer}
                  onChange={(e) => setSelectedDrummer(e.target.value)}
                  className="bg-ink-800 border-2 border-ink-700 text-ink-100 px-4 py-2 text-sm focus:border-gold-500 outline-none min-w-[180px]"
                >
                  <option value="all">All Drummers</option>
                  {drummers.map(drummer => (
                    <option key={drummer.id} value={drummer.id}>
                      {drummer.name} ({videos.filter(v => v.drummer_id === drummer.id).length})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results count */}
            <p className="text-sm text-ink-500 mb-6">
              Showing {sortedVideos.length} video{sortedVideos.length !== 1 ? 's' : ''}
              {selectedType !== 'all' && ` in ${VIDEO_TYPE_LABELS[selectedType as Video['video_type']]}`}
              {selectedDrummer !== 'all' && ` by ${getDrummerName(selectedDrummer)}`}
            </p>

            {sortedVideos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedVideos.map(video => (
                  <div key={video.id} className="group">
                    <YouTubeEmbed video={video} />
                    {/* Drummer attribution */}
                    <p className="mt-2 text-xs text-ink-500 font-mono">
                      by{' '}
                      <a 
                        href={`/drummer/${drummers.find(d => d.id === video.drummer_id)?.slug}`}
                        className="text-gold-500 hover:text-gold-400 transition-colors"
                      >
                        {getDrummerName(video.drummer_id)}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-ink-400">No videos found matching your filters.</p>
                <button 
                  onClick={() => {
                    setSelectedType('all');
                    setSelectedDrummer('all');
                  }}
                  className="mt-4 text-gold-500 hover:text-gold-400 transition-colors text-sm"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
