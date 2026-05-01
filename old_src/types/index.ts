// Core drummer types
export interface Drummer {
  id: string;
  name: string;
  slug: string;
  birth_date: string | null;
  death_date: string | null;
  birth_place: string | null;
  nationality: string | null;
  bio_short: string;
  bio_full: string | null;
  photo_url: string | null;
  tier: 'legendary' | 'iconic' | 'influential' | 'notable' | 'rising';
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface DrummerWithRelations extends Drummer {
  styles: Style[];
  eras: Era[];
  bands: BandMembership[];
  videos: Video[];
  gear: DrummerGear[];
  influences: Influence[];
  influenced_by: Influence[];
  signature_songs: SignatureSong[];
}

// Style/Genre
export interface Style {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  parent_id: string | null;
}

// Era
export interface Era {
  id: string;
  name: string;
  slug: string;
  start_year: number;
  end_year: number | null;
  description: string | null;
}

// Band/Artist
export interface Band {
  id: string;
  name: string;
  slug: string;
  formed_year: number | null;
  disbanded_year: number | null;
  genre: string | null;
  photo_url: string | null;
}

export interface BandMembership {
  id: string;
  drummer_id: string;
  band_id: string;
  band: Band;
  start_year: number | null;
  end_year: number | null;
  is_primary: boolean;
  notes: string | null;
}

// Videos (YouTube)
export interface Video {
  id: string;
  drummer_id: string;
  youtube_id: string;
  title: string;
  description: string | null;
  video_type: 'performance' | 'tutorial' | 'interview' | 'documentary' | 'isolated_track' | 'other';
  song_name: string | null;
  band_name: string | null;
  year: number | null;
  duration_seconds: number | null;
  is_featured: boolean;
  sort_order: number;
}

// Gear/Equipment
export interface GearItem {
  id: string;
  name: string;
  brand: string;
  category: 'drums' | 'cymbals' | 'hardware' | 'sticks' | 'heads' | 'electronics' | 'other';
  subcategory: string | null;
  description: string | null;
}

export interface DrummerGear {
  id: string;
  drummer_id: string;
  gear_item_id: string;
  gear_item: GearItem;
  era_used: string | null;
  is_signature: boolean;
  notes: string | null;
}

// Influences
export interface Influence {
  id: string;
  influencer_id: string;
  influenced_id: string;
  influencer?: Drummer;
  influenced?: Drummer;
  influence_type: 'primary' | 'secondary' | 'teacher' | 'peer' | 'style';
  what_was_learned: string | null;
  source: string | null;
}

// Signature Songs
export interface SignatureSong {
  id: string;
  drummer_id: string;
  song_title: string;
  band_name: string;
  album_name: string | null;
  year: number | null;
  why_notable: string | null;
  youtube_id: string | null;
}

// API Response types
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

// Search/Filter types
export interface DrummerFilters {
  style?: string;
  era?: string;
  tier?: string;
  search?: string;
  page?: number;
  per_page?: number;
}

// Video category for display
export const VIDEO_TYPE_LABELS: Record<Video['video_type'], string> = {
  performance: 'Live Performance',
  tutorial: 'Tutorial / Lesson',
  interview: 'Interview',
  documentary: 'Documentary',
  isolated_track: 'Isolated Drum Track',
  other: 'Other',
};

// Tier labels and colors
export const TIER_CONFIG: Record<Drummer['tier'], { label: string; color: string }> = {
  legendary: { label: 'Legendary', color: 'text-gold-400' },
  iconic: { label: 'Iconic', color: 'text-gold-500' },
  influential: { label: 'Influential', color: 'text-ink-300' },
  notable: { label: 'Notable', color: 'text-ink-400' },
  rising: { label: 'Rising Star', color: 'text-green-400' },
};
