'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { Video, VIDEO_TYPE_LABELS } from '@/types';

interface YouTubeEmbedProps {
  video: Video;
  showMetadata?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function YouTubeEmbed({ video, showMetadata = true, size = 'medium' }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Generate thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`;
  const thumbnailFallback = `https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`;
  
  // Format duration
  const formatDuration = (seconds: number | null) => {
    if (!seconds) return null;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="group">
      {/* Video Container */}
      <div className={`relative bg-ink-900 border-2 border-ink-800 hover:border-gold-500 transition-colors overflow-hidden ${
        size === 'small' ? 'aspect-video' : 
        size === 'large' ? 'aspect-video' : 
        'aspect-video'
      }`}>
        {!isLoaded ? (
          // Thumbnail with play button
          <button 
            onClick={handleLoad}
            className="w-full h-full relative group/btn"
            aria-label={`Play ${video.title}`}
          >
            <img 
              src={thumbnailUrl}
              onError={(e) => {
                (e.target as HTMLImageElement).src = thumbnailFallback;
              }}
              alt={video.title}
              className="w-full h-full object-cover filter grayscale group-hover/btn:grayscale-0 transition-all duration-300"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-ink-950/40 group-hover/btn:bg-ink-950/20 transition-colors">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold-500 flex items-center justify-center group-hover/btn:scale-110 transition-transform shadow-brutal">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-ink-950 ml-1" fill="currentColor" />
              </div>
            </div>
            
            {/* Duration Badge */}
            {video.duration_seconds && (
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-ink-950/90 text-xs font-mono text-ink-200">
                {formatDuration(video.duration_seconds)}
              </div>
            )}
            
            {/* Featured Badge */}
            {video.is_featured && (
              <div className="absolute top-2 left-2 px-2 py-1 bg-gold-500 text-xs font-mono text-ink-950 uppercase">
                Featured
              </div>
            )}
          </button>
        ) : (
          // Actual YouTube embed
          <iframe
            src={`https://www.youtube.com/embed/${video.youtube_id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>

      {/* Metadata */}
      {showMetadata && (
        <div className="mt-3">
          <h4 className="font-body text-sm text-ink-100 group-hover:text-gold-500 transition-colors line-clamp-2">
            {video.title}
          </h4>
          
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-500">
            <span className="px-2 py-0.5 border border-ink-700 uppercase font-mono">
              {VIDEO_TYPE_LABELS[video.video_type]}
            </span>
            
            {video.band_name && (
              <span>{video.band_name}</span>
            )}
            
            {video.year && (
              <>
                <span className="text-ink-700">•</span>
                <span>{video.year}</span>
              </>
            )}
          </div>
          
          {video.description && (
            <p className="mt-2 text-xs text-ink-500 line-clamp-2">
              {video.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// Grid component for multiple videos
interface VideoGridProps {
  videos: Video[];
  columns?: 1 | 2 | 3 | 4;
}

export function VideoGrid({ videos, columns = 3 }: VideoGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {videos.map((video) => (
        <YouTubeEmbed key={video.id} video={video} />
      ))}
    </div>
  );
}
