// Seed data for MVP - 10 legendary drummers with full details
// This can be used before Supabase is set up, or as seed data for the database

import { Drummer, Style, Era, Band, Video, Influence, SignatureSong } from '@/types';

// ============ STYLES ============
export const styles: Style[] = [
  { id: 'rock', name: 'Rock', slug: 'rock', description: 'Rock and roll drumming characterized by strong backbeats', parent_id: null },
  { id: 'prog-rock', name: 'Progressive Rock', slug: 'progressive-rock', description: 'Complex time signatures and extended compositions', parent_id: 'rock' },
  { id: 'hard-rock', name: 'Hard Rock', slug: 'hard-rock', description: 'Heavy, aggressive rock drumming', parent_id: 'rock' },
  { id: 'punk', name: 'Punk', slug: 'punk', description: 'Fast, energetic, stripped-down drumming', parent_id: 'rock' },
  { id: 'metal', name: 'Metal', slug: 'metal', description: 'Heavy metal drumming with double bass and blast beats', parent_id: 'rock' },
  { id: 'prog-metal', name: 'Progressive Metal', slug: 'progressive-metal', description: 'Technical metal with complex arrangements', parent_id: 'metal' },
  { id: 'jazz', name: 'Jazz', slug: 'jazz', description: 'Improvisational jazz drumming', parent_id: null },
  { id: 'jazz-fusion', name: 'Jazz Fusion', slug: 'jazz-fusion', description: 'Blend of jazz improvisation with rock energy', parent_id: 'jazz' },
  { id: 'funk', name: 'Funk', slug: 'funk', description: 'Groove-based drumming with syncopation', parent_id: null },
  { id: 'hip-hop', name: 'Hip-Hop', slug: 'hip-hop', description: 'Breakbeat-influenced drumming', parent_id: 'funk' },
  { id: 'pop', name: 'Pop', slug: 'pop', description: 'Commercial pop drumming', parent_id: null },
  { id: 'soul', name: 'Soul', slug: 'soul', description: 'R&B and soul drumming', parent_id: null },
  { id: 'reggae', name: 'Reggae', slug: 'reggae', description: 'One-drop and reggae rhythms', parent_id: null },
  { id: 'world', name: 'World', slug: 'world', description: 'Global percussion traditions', parent_id: null },
  { id: 'studio', name: 'Studio/Session', slug: 'studio', description: 'Versatile session drumming', parent_id: null },
];

// ============ ERAS ============
export const eras: Era[] = [
  { id: 'british-invasion', name: 'British Invasion', slug: 'british-invasion', start_year: 1964, end_year: 1970, description: 'The British rock explosion' },
  { id: 'classic-rock', name: 'Classic Rock Era', slug: 'classic-rock', start_year: 1965, end_year: 1980, description: 'The golden age of rock drumming' },
  { id: 'prog-era', name: 'Progressive Era', slug: 'progressive-era', start_year: 1969, end_year: 1979, description: 'Complex, virtuosic drumming' },
  { id: 'punk-era', name: 'Punk Era', slug: 'punk-era', start_year: 1976, end_year: 1984, description: 'Raw energy and DIY ethos' },
  { id: 'mtv-era', name: 'MTV Era', slug: 'mtv-era', start_year: 1981, end_year: 1995, description: 'Music video and arena rock' },
  { id: 'alt-era', name: 'Alternative Era', slug: 'alternative-era', start_year: 1991, end_year: 2005, description: 'Grunge, alternative, and nu-metal' },
  { id: 'modern', name: 'Modern Era', slug: 'modern', start_year: 2000, end_year: null, description: 'Contemporary drumming' },
];

// ============ BANDS ============
export const bands: Band[] = [
  { id: 'the-who', name: 'The Who', slug: 'the-who', formed_year: 1964, disbanded_year: null, genre: 'Rock', photo_url: null },
  { id: 'cream', name: 'Cream', slug: 'cream', formed_year: 1966, disbanded_year: 1968, genre: 'Blues Rock', photo_url: null },
  { id: 'the-police', name: 'The Police', slug: 'the-police', formed_year: 1977, disbanded_year: 1986, genre: 'New Wave/Reggae Rock', photo_url: null },
  { id: 'genesis', name: 'Genesis', slug: 'genesis', formed_year: 1967, disbanded_year: null, genre: 'Progressive Rock/Pop', photo_url: null },
  { id: 'the-beatles', name: 'The Beatles', slug: 'the-beatles', formed_year: 1960, disbanded_year: 1970, genre: 'Rock/Pop', photo_url: null },
  { id: 'the-roots', name: 'The Roots', slug: 'the-roots', formed_year: 1987, disbanded_year: null, genre: 'Hip-Hop/Neo-Soul', photo_url: null },
  { id: 'rhcp', name: 'Red Hot Chili Peppers', slug: 'red-hot-chili-peppers', formed_year: 1983, disbanded_year: null, genre: 'Funk Rock', photo_url: null },
  { id: 'tool', name: 'Tool', slug: 'tool', formed_year: 1990, disbanded_year: null, genre: 'Progressive Metal', photo_url: null },
  { id: 'yes', name: 'Yes', slug: 'yes', formed_year: 1968, disbanded_year: null, genre: 'Progressive Rock', photo_url: null },
  { id: 'king-crimson', name: 'King Crimson', slug: 'king-crimson', formed_year: 1968, disbanded_year: null, genre: 'Progressive Rock', photo_url: null },
  { id: 'zappa', name: 'Frank Zappa', slug: 'frank-zappa', formed_year: 1965, disbanded_year: 1993, genre: 'Experimental Rock', photo_url: null },
  { id: 'mahavishnu', name: 'Mahavishnu Orchestra', slug: 'mahavishnu-orchestra', formed_year: 1971, disbanded_year: 1976, genre: 'Jazz Fusion', photo_url: null },
  { id: 'blind-faith', name: 'Blind Faith', slug: 'blind-faith', formed_year: 1969, disbanded_year: 1969, genre: 'Blues Rock', photo_url: null },
];

// ============ DRUMMERS ============
export const drummers: Drummer[] = [
  {
    id: 'keith-moon',
    name: 'Keith Moon',
    slug: 'keith-moon',
    birth_date: '1946-08-23',
    death_date: '1978-09-07',
    birth_place: 'Wembley, London, England',
    nationality: 'British',
    bio_short: 'The explosive drummer of The Who, known for his chaotic, theatrical style and wild fills that redefined rock drumming.',
    bio_full: 'Keith John Moon was the drummer of the English rock band The Who. He was noted for his unique style and his eccentric, often self-destructive behavior. His drumming was characterized by its flamboyance, showmanship, and chaotic approach—he often eschewed standard backbeats in favor of continuous, rolling fills that made his style instantly recognizable. Moon\'s influence on rock drumming cannot be overstated; he expanded the role of the drummer from timekeeper to lead instrument.',
    photo_url: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'ginger-baker',
    name: 'Ginger Baker',
    slug: 'ginger-baker',
    birth_date: '1939-08-19',
    death_date: '2019-10-06',
    birth_place: 'Lewisham, London, England',
    nationality: 'British',
    bio_short: 'A jazz-trained virtuoso who brought polyrhythmic complexity and African influences to rock music with Cream and Blind Faith.',
    bio_full: 'Peter Edward "Ginger" Baker was an English drummer and a founder of the rock band Cream. His drumming style melded jazz technique with rock power, incorporating African rhythms and extended drum solos that were unprecedented in rock music. Baker was known for his technical prowess, particularly his use of double bass drums and polyrhythmic patterns. Despite his difficult personality, his influence on rock drumming is immeasurable.',
    photo_url: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'stewart-copeland',
    name: 'Stewart Copeland',
    slug: 'stewart-copeland',
    birth_date: '1952-07-16',
    death_date: null,
    birth_place: 'Alexandria, Virginia, USA',
    nationality: 'American',
    bio_short: 'The Police drummer who fused punk energy with reggae rhythms and world music, creating one of rock\'s most distinctive sounds.',
    bio_full: 'Stewart Armstrong Copeland is an American musician best known as the drummer for The Police. His innovative style combined punk rock energy with reggae-influenced hi-hat patterns and world music polyrhythms. Copeland\'s use of splashy cymbals, rimshots, and syncopated patterns created a sound that was immediately identifiable. After The Police disbanded, he became a prolific film and video game composer while continuing to perform and record.',
    photo_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'vinnie-colaiuta',
    name: 'Vinnie Colaiuta',
    slug: 'vinnie-colaiuta',
    birth_date: '1956-02-05',
    death_date: null,
    birth_place: 'Brownsville, Pennsylvania, USA',
    nationality: 'American',
    bio_short: 'The drummer\'s drummer—a technical virtuoso whose work with Zappa, Sting, and countless sessions set the gold standard for studio drumming.',
    bio_full: 'Vinnie Colaiuta is widely regarded as one of the most technically proficient drummers in the world. His work with Frank Zappa in the late 1970s showcased his ability to play impossibly complex compositions with precision and feel. As a session musician, Colaiuta has recorded with virtually every major artist, from Sting to Herbie Hancock to Megadeth. His combination of jazz sophistication, rock power, and rhythmic creativity makes him a favorite among drummers worldwide.',
    photo_url: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'phil-collins',
    name: 'Phil Collins',
    slug: 'phil-collins',
    birth_date: '1951-01-30',
    death_date: null,
    birth_place: 'Chiswick, London, England',
    nationality: 'British',
    bio_short: 'From Genesis prog drummer to pop superstar, he pioneered the gated reverb sound and brought technical drumming to mainstream audiences.',
    bio_full: 'Philip David Charles Collins is an English drummer, singer, and songwriter who first gained fame as the drummer for Genesis. His drumming on progressive rock classics showcased technical brilliance, while his later work pioneered the gated reverb drum sound that defined 1980s pop. As both a drummer and frontman, Collins achieved unprecedented commercial success while maintaining his reputation as a world-class drummer. Health issues have limited his playing in recent years.',
    photo_url: 'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'ringo-starr',
    name: 'Ringo Starr',
    slug: 'ringo-starr',
    birth_date: '1940-07-07',
    death_date: null,
    birth_place: 'Liverpool, England',
    nationality: 'British',
    bio_short: 'The Beatles\' drummer whose innovative, song-serving approach and left-handed feel created some of rock\'s most iconic beats.',
    bio_full: 'Sir Richard Starkey, known as Ringo Starr, is the drummer who helped change the world as a member of The Beatles. Often underrated by casual listeners, Ringo\'s drumming is revered by professionals for its inventiveness, feel, and perfect service to the song. His left-handed playing on a right-handed kit gave his beats a unique character, and his fills and rhythmic choices influenced countless drummers. Beyond The Beatles, his All-Starr Band has been touring for decades.',
    photo_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'questlove',
    name: 'Questlove',
    slug: 'questlove',
    birth_date: '1971-01-20',
    death_date: null,
    birth_place: 'Philadelphia, Pennsylvania, USA',
    nationality: 'American',
    bio_short: 'The Roots\' drummer and bandleader who bridged hip-hop and live instrumentation, becoming a cultural icon and tastemaker.',
    bio_full: 'Ahmir Khalib Thompson, known professionally as Questlove, is the drummer and co-frontman of The Roots, the house band for The Tonight Show Starring Jimmy Fallon. His deep pocket, sample-ready sound, and encyclopedic knowledge of music history have made him one of the most influential drummers in hip-hop and neo-soul. Beyond drumming, Questlove is a DJ, producer, author, and Academy Award-winning filmmaker.',
    photo_url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop',
    tier: 'iconic',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'chad-smith',
    name: 'Chad Smith',
    slug: 'chad-smith',
    birth_date: '1961-10-25',
    death_date: null,
    birth_place: 'Saint Paul, Minnesota, USA',
    nationality: 'American',
    bio_short: 'Red Hot Chili Peppers\' powerhouse drummer known for his massive groove, funk-rock fusion, and notable resemblance to Will Ferrell.',
    bio_full: 'Chadwick Gaylord Smith has been the drummer for the Red Hot Chili Peppers since 1988, providing the powerful groove that anchors their funk-rock sound. His playing combines the pocket of funk drumming with rock power, and his chemistry with bassist Flea is legendary. Smith is also a member of the supergroup Chickenfoot and has done extensive session work. His energetic stage presence and sense of humor make him a fan favorite.',
    photo_url: 'https://images.unsplash.com/photo-1457523054379-8d03ab9fc2aa?w=400&h=400&fit=crop',
    tier: 'iconic',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'danny-carey',
    name: 'Danny Carey',
    slug: 'danny-carey',
    birth_date: '1961-05-10',
    death_date: null,
    birth_place: 'Lawrence, Kansas, USA',
    nationality: 'American',
    bio_short: 'Tool\'s towering drummer who combines progressive complexity with primal power, known for polyrhythmic mastery and electronic integration.',
    bio_full: 'Daniel Edwin Carey is the drummer for the progressive metal band Tool. Standing 6\'5", his physical presence matches his drumming: powerful yet intricate, combining polyrhythmic patterns with thunderous grooves. Carey incorporates elements from jazz, world music, and electronic percussion into his playing, often using synthesizer triggers and unconventional time signatures. His technical ability and musical creativity have made Tool one of the most respected bands in progressive music.',
    photo_url: 'https://images.unsplash.com/photo-1431440869543-efaf3388c585?w=400&h=400&fit=crop',
    tier: 'iconic',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'bill-bruford',
    name: 'Bill Bruford',
    slug: 'bill-bruford',
    birth_date: '1949-05-17',
    death_date: null,
    birth_place: 'Sevenoaks, Kent, England',
    nationality: 'British',
    bio_short: 'The cerebral prog master who drummed for Yes and King Crimson, known for odd time signatures and pioneering electronic percussion.',
    bio_full: 'William Scott Bruford is an English drummer and percussionist best known for his work with Yes, King Crimson, and his own jazz-fusion projects. His intellectual approach to drumming—emphasizing odd time signatures, melodic tom work, and restraint—set him apart from his contemporaries. Bruford was an early adopter of electronic drums and Simmons pads. He retired from professional drumming in 2009 to focus on writing and education.',
    photo_url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// ============ VIDEOS (YouTube) ============
export const videos: Video[] = [
  // Keith Moon
  { id: 'v-moon-1', drummer_id: 'keith-moon', youtube_id: 'qN5zw04WxCc', title: 'The Who - Won\'t Get Fooled Again (Live)', description: 'Iconic performance featuring Moon\'s explosive style', video_type: 'performance', song_name: 'Won\'t Get Fooled Again', band_name: 'The Who', year: 1978, duration_seconds: 510, is_featured: true, sort_order: 1 },
  { id: 'v-moon-2', drummer_id: 'keith-moon', youtube_id: 'x2KRpRMSu4g', title: 'Keith Moon Drum Solo', description: 'Rare isolated drum solo footage', video_type: 'performance', song_name: null, band_name: 'The Who', year: 1970, duration_seconds: 240, is_featured: false, sort_order: 2 },
  { id: 'v-moon-3', drummer_id: 'keith-moon', youtube_id: 'dZJhLv0PGNI', title: 'The Who - My Generation (Live at Leeds)', description: 'Explosive performance from the legendary concert', video_type: 'performance', song_name: 'My Generation', band_name: 'The Who', year: 1970, duration_seconds: 890, is_featured: true, sort_order: 3 },
  
  // Ginger Baker
  { id: 'v-baker-1', drummer_id: 'ginger-baker', youtube_id: 'HPZX9pTJ5Dc', title: 'Cream - Toad (Drum Solo)', description: 'The legendary extended drum solo', video_type: 'performance', song_name: 'Toad', band_name: 'Cream', year: 1968, duration_seconds: 720, is_featured: true, sort_order: 1 },
  { id: 'v-baker-2', drummer_id: 'ginger-baker', youtube_id: 'pkae0-TgrRU', title: 'Ginger Baker\'s African Journey', description: 'Documentary exploring his African influences', video_type: 'documentary', song_name: null, band_name: null, year: 2012, duration_seconds: 300, is_featured: true, sort_order: 2 },
  { id: 'v-baker-3', drummer_id: 'ginger-baker', youtube_id: 'mMQ7oBCyxqE', title: 'Cream - White Room (Live)', description: 'Classic performance showcasing his jazz-rock fusion', video_type: 'performance', song_name: 'White Room', band_name: 'Cream', year: 1968, duration_seconds: 320, is_featured: false, sort_order: 3 },
  
  // Stewart Copeland
  { id: 'v-copeland-1', drummer_id: 'stewart-copeland', youtube_id: 'VG1VVFfOnYQ', title: 'The Police - Synchronicity II (Live)', description: 'High-energy performance with signature hi-hat work', video_type: 'performance', song_name: 'Synchronicity II', band_name: 'The Police', year: 1983, duration_seconds: 320, is_featured: true, sort_order: 1 },
  { id: 'v-copeland-2', drummer_id: 'stewart-copeland', youtube_id: '7cGwmAXpRBU', title: 'Stewart Copeland Breaks Down His Drumming', description: 'Masterclass on his unique approach', video_type: 'tutorial', song_name: null, band_name: null, year: 2020, duration_seconds: 600, is_featured: true, sort_order: 2 },
  { id: 'v-copeland-3', drummer_id: 'stewart-copeland', youtube_id: 'FSSLCUUH3PI', title: 'The Police - Message in a Bottle', description: 'Perfect example of his reggae-punk fusion', video_type: 'performance', song_name: 'Message in a Bottle', band_name: 'The Police', year: 1979, duration_seconds: 290, is_featured: false, sort_order: 3 },
  
  // Vinnie Colaiuta
  { id: 'v-colaiuta-1', drummer_id: 'vinnie-colaiuta', youtube_id: 'sB_DULxQwVs', title: 'Vinnie Colaiuta - The Black Page', description: 'Performing Zappa\'s notoriously difficult piece', video_type: 'performance', song_name: 'The Black Page', band_name: 'Frank Zappa', year: 1978, duration_seconds: 420, is_featured: true, sort_order: 1 },
  { id: 'v-colaiuta-2', drummer_id: 'vinnie-colaiuta', youtube_id: '9gJT9-nh7B4', title: 'Vinnie Colaiuta Drum Solo', description: 'Mind-blowing technical display', video_type: 'performance', song_name: null, band_name: null, year: 2015, duration_seconds: 480, is_featured: true, sort_order: 2 },
  { id: 'v-colaiuta-3', drummer_id: 'vinnie-colaiuta', youtube_id: 'EBTQL7T5X0I', title: 'Vinnie Colaiuta with Sting', description: 'Grooving with precision on tour', video_type: 'performance', song_name: null, band_name: 'Sting', year: 2017, duration_seconds: 360, is_featured: false, sort_order: 3 },
  
  // Phil Collins
  { id: 'v-collins-1', drummer_id: 'phil-collins', youtube_id: 'Orm2DFVs1zM', title: 'Genesis - Los Endos (Live)', description: 'Epic prog drumming showcase', video_type: 'performance', song_name: 'Los Endos', band_name: 'Genesis', year: 1977, duration_seconds: 420, is_featured: true, sort_order: 1 },
  { id: 'v-collins-2', drummer_id: 'phil-collins', youtube_id: 'YkADj0TPrJA', title: 'Phil Collins - In The Air Tonight (Live)', description: 'The iconic gated reverb drum fill', video_type: 'performance', song_name: 'In The Air Tonight', band_name: 'Phil Collins', year: 1981, duration_seconds: 330, is_featured: true, sort_order: 2 },
  { id: 'v-collins-3', drummer_id: 'phil-collins', youtube_id: 'TlBIa8z_Mts', title: 'Phil Collins Drum Cam - Chester Thompson Duet', description: 'Incredible dual drumming with Chester Thompson', video_type: 'performance', song_name: null, band_name: 'Genesis', year: 1992, duration_seconds: 480, is_featured: false, sort_order: 3 },
  
  // Ringo Starr
  { id: 'v-ringo-1', drummer_id: 'ringo-starr', youtube_id: 'NCtzkaL2t_Y', title: 'The Beatles - Come Together (Isolated Drums)', description: 'Hear Ringo\'s innovative beat isolated', video_type: 'isolated_track', song_name: 'Come Together', band_name: 'The Beatles', year: 1969, duration_seconds: 260, is_featured: true, sort_order: 1 },
  { id: 'v-ringo-2', drummer_id: 'ringo-starr', youtube_id: 'bWLmSSlY0Us', title: 'The Beatles - A Day In The Life', description: 'Masterclass in serving the song', video_type: 'performance', song_name: 'A Day In The Life', band_name: 'The Beatles', year: 1967, duration_seconds: 340, is_featured: true, sort_order: 2 },
  { id: 'v-ringo-3', drummer_id: 'ringo-starr', youtube_id: 'M4vbJQ-MrKo', title: 'Ringo Starr Explains His Drumming', description: 'Interview about his unique approach', video_type: 'interview', song_name: null, band_name: null, year: 2015, duration_seconds: 420, is_featured: false, sort_order: 3 },
  
  // Questlove
  { id: 'v-quest-1', drummer_id: 'questlove', youtube_id: 'lPHFdcPs7x0', title: 'The Roots - The Seed 2.0 (Live)', description: 'Signature deep pocket groove', video_type: 'performance', song_name: 'The Seed 2.0', band_name: 'The Roots', year: 2006, duration_seconds: 300, is_featured: true, sort_order: 1 },
  { id: 'v-quest-2', drummer_id: 'questlove', youtube_id: 'E2dv0GqJBvA', title: 'Questlove Drum Battle on Fallon', description: 'Fun drum-off showcasing his skills', video_type: 'performance', song_name: null, band_name: 'The Roots', year: 2018, duration_seconds: 240, is_featured: true, sort_order: 2 },
  { id: 'v-quest-3', drummer_id: 'questlove', youtube_id: 'QXiVmjJzgSE', title: 'Questlove Breaks Down His Groove', description: 'Explaining his hip-hop drumming philosophy', video_type: 'tutorial', song_name: null, band_name: null, year: 2019, duration_seconds: 480, is_featured: false, sort_order: 3 },
  
  // Chad Smith
  { id: 'v-chad-1', drummer_id: 'chad-smith', youtube_id: 'Mr_PTk8JBfE', title: 'RHCP - Give It Away (Live)', description: 'Powerhouse funk-rock performance', video_type: 'performance', song_name: 'Give It Away', band_name: 'Red Hot Chili Peppers', year: 2006, duration_seconds: 320, is_featured: true, sort_order: 1 },
  { id: 'v-chad-2', drummer_id: 'chad-smith', youtube_id: '0uBOtQOO70Y', title: 'Chad Smith vs Will Ferrell Drum-Off', description: 'Legendary Tonight Show moment', video_type: 'performance', song_name: null, band_name: null, year: 2014, duration_seconds: 480, is_featured: true, sort_order: 2 },
  { id: 'v-chad-3', drummer_id: 'chad-smith', youtube_id: 'E1FLrZy12XI', title: 'Chad Smith Drum Lesson', description: 'Breaking down his groove approach', video_type: 'tutorial', song_name: null, band_name: null, year: 2020, duration_seconds: 600, is_featured: false, sort_order: 3 },
  
  // Danny Carey
  { id: 'v-carey-1', drummer_id: 'danny-carey', youtube_id: '5OZuPGOgPvc', title: 'Tool - Pneuma (Live)', description: 'Mind-bending polyrhythms in action', video_type: 'performance', song_name: 'Pneuma', band_name: 'Tool', year: 2019, duration_seconds: 720, is_featured: true, sort_order: 1 },
  { id: 'v-carey-2', drummer_id: 'danny-carey', youtube_id: 'FssULNGSZIA', title: 'Danny Carey Drum Cam - 46 & 2', description: 'Isolated cam showing his technique', video_type: 'performance', song_name: '46 & 2', band_name: 'Tool', year: 2006, duration_seconds: 400, is_featured: true, sort_order: 2 },
  { id: 'v-carey-3', drummer_id: 'danny-carey', youtube_id: 'qLJqXJnBjvA', title: 'Danny Carey - Parabola (Isolated Drums)', description: 'His intricate playing fully exposed', video_type: 'isolated_track', song_name: 'Parabola', band_name: 'Tool', year: 2001, duration_seconds: 380, is_featured: false, sort_order: 3 },
  
  // Bill Bruford
  { id: 'v-bruford-1', drummer_id: 'bill-bruford', youtube_id: 'I0E6HvvA0D8', title: 'Yes - Heart of the Sunrise (Live)', description: 'Complex prog rock at its finest', video_type: 'performance', song_name: 'Heart of the Sunrise', band_name: 'Yes', year: 1972, duration_seconds: 720, is_featured: true, sort_order: 1 },
  { id: 'v-bruford-2', drummer_id: 'bill-bruford', youtube_id: 'FPdCMxE_Xmc', title: 'King Crimson - Discipline', description: 'Interlocking polyrhythms with Fripp', video_type: 'performance', song_name: 'Discipline', band_name: 'King Crimson', year: 1981, duration_seconds: 320, is_featured: true, sort_order: 2 },
  { id: 'v-bruford-3', drummer_id: 'bill-bruford', youtube_id: 'rlDH_460GtE', title: 'Bill Bruford Interview on His Approach', description: 'Insightful discussion of his philosophy', video_type: 'interview', song_name: null, band_name: null, year: 2005, duration_seconds: 540, is_featured: false, sort_order: 3 },
];

// ============ INFLUENCES ============
export const influences: Influence[] = [
  // Keith Moon influences
  { id: 'inf-1', influencer_id: 'ginger-baker', influenced_id: 'keith-moon', influence_type: 'peer', what_was_learned: 'Showmanship and theatrical drumming', source: null },
  
  // Stewart Copeland influences
  { id: 'inf-2', influencer_id: 'ginger-baker', influenced_id: 'stewart-copeland', influence_type: 'primary', what_was_learned: 'Jazz-informed rock approach', source: 'Copeland interviews' },
  
  // Phil Collins influences
  { id: 'inf-3', influencer_id: 'ringo-starr', influenced_id: 'phil-collins', influence_type: 'primary', what_was_learned: 'Song-serving approach, feel over technique', source: 'Collins autobiography' },
  { id: 'inf-4', influencer_id: 'keith-moon', influenced_id: 'phil-collins', influence_type: 'secondary', what_was_learned: 'Dynamic fills and energy', source: null },
  
  // Questlove influences
  { id: 'inf-5', influencer_id: 'ringo-starr', influenced_id: 'questlove', influence_type: 'secondary', what_was_learned: 'Left-handed feel, simplicity as virtue', source: 'Questlove memoir' },
  
  // Chad Smith influences
  { id: 'inf-6', influencer_id: 'keith-moon', influenced_id: 'chad-smith', influence_type: 'primary', what_was_learned: 'Energy and stage presence', source: 'Interviews' },
  { id: 'inf-7', influencer_id: 'stewart-copeland', influenced_id: 'chad-smith', influence_type: 'secondary', what_was_learned: 'Reggae-influenced hi-hat patterns', source: null },
  
  // Danny Carey influences
  { id: 'inf-8', influencer_id: 'bill-bruford', influenced_id: 'danny-carey', influence_type: 'primary', what_was_learned: 'Odd time signatures, melodic approach', source: 'Carey interviews' },
  { id: 'inf-9', influencer_id: 'ginger-baker', influenced_id: 'danny-carey', influence_type: 'secondary', what_was_learned: 'Polyrhythmic concepts', source: null },
  
  // Bill Bruford influences
  { id: 'inf-10', influencer_id: 'ginger-baker', influenced_id: 'bill-bruford', influence_type: 'primary', what_was_learned: 'Jazz approach to rock drumming', source: 'Bruford autobiography' },
  
  // Vinnie Colaiuta influences
  { id: 'inf-11', influencer_id: 'ginger-baker', influenced_id: 'vinnie-colaiuta', influence_type: 'secondary', what_was_learned: 'Jazz vocabulary in rock context', source: null },
  { id: 'inf-12', influencer_id: 'bill-bruford', influenced_id: 'vinnie-colaiuta', influence_type: 'secondary', what_was_learned: 'Compositional approach to drumming', source: null },
];

// ============ SIGNATURE SONGS ============
export const signatureSongs: SignatureSong[] = [
  // Keith Moon
  { id: 'sig-1', drummer_id: 'keith-moon', song_title: 'Won\'t Get Fooled Again', band_name: 'The Who', album_name: 'Who\'s Next', year: 1971, why_notable: 'Explosive fills and iconic drum break before the final verse', youtube_id: 'qN5zw04WxCc' },
  { id: 'sig-2', drummer_id: 'keith-moon', song_title: 'My Generation', band_name: 'The Who', album_name: 'My Generation', year: 1965, why_notable: 'Chaos incarnate, pioneering the drummer-as-lead-instrument concept', youtube_id: null },
  
  // Ginger Baker
  { id: 'sig-3', drummer_id: 'ginger-baker', song_title: 'Toad', band_name: 'Cream', album_name: 'Wheels of Fire', year: 1968, why_notable: 'One of rock\'s first extended drum solos on a studio album', youtube_id: 'HPZX9pTJ5Dc' },
  { id: 'sig-4', drummer_id: 'ginger-baker', song_title: 'White Room', band_name: 'Cream', album_name: 'Wheels of Fire', year: 1968, why_notable: 'Jazz-influenced fills over rock structure', youtube_id: 'mMQ7oBCyxqE' },
  
  // Stewart Copeland
  { id: 'sig-5', drummer_id: 'stewart-copeland', song_title: 'Message in a Bottle', band_name: 'The Police', album_name: 'Reggatta de Blanc', year: 1979, why_notable: 'Perfect fusion of punk energy and reggae hi-hat patterns', youtube_id: 'FSSLCUUH3PI' },
  { id: 'sig-6', drummer_id: 'stewart-copeland', song_title: 'Roxanne', band_name: 'The Police', album_name: 'Outlandos d\'Amour', year: 1978, why_notable: 'Innovative half-time reggae feel under rock arrangement', youtube_id: null },
  
  // Vinnie Colaiuta
  { id: 'sig-7', drummer_id: 'vinnie-colaiuta', song_title: 'The Black Page', band_name: 'Frank Zappa', album_name: 'Zappa in New York', year: 1978, why_notable: 'One of the most difficult drum parts ever written', youtube_id: 'sB_DULxQwVs' },
  { id: 'sig-8', drummer_id: 'vinnie-colaiuta', song_title: 'I\'m Tweeked', band_name: 'Jeff Beck', album_name: 'Who Else!', year: 1999, why_notable: 'Fusion virtuosity meets rock power', youtube_id: null },
  
  // Phil Collins
  { id: 'sig-9', drummer_id: 'phil-collins', song_title: 'In The Air Tonight', band_name: 'Phil Collins', album_name: 'Face Value', year: 1981, why_notable: 'The gated reverb fill that changed 80s drum sounds', youtube_id: 'YkADj0TPrJA' },
  { id: 'sig-10', drummer_id: 'phil-collins', song_title: 'Los Endos', band_name: 'Genesis', album_name: 'A Trick of the Tail', year: 1976, why_notable: 'Progressive drumming tour de force', youtube_id: 'Orm2DFVs1zM' },
  
  // Ringo Starr
  { id: 'sig-11', drummer_id: 'ringo-starr', song_title: 'Come Together', band_name: 'The Beatles', album_name: 'Abbey Road', year: 1969, why_notable: 'Swampy, inventive beat that perfectly serves the song', youtube_id: 'NCtzkaL2t_Y' },
  { id: 'sig-12', drummer_id: 'ringo-starr', song_title: 'A Day in the Life', band_name: 'The Beatles', album_name: 'Sgt. Pepper\'s', year: 1967, why_notable: 'Masterful dynamics and creative fills', youtube_id: 'bWLmSSlY0Us' },
  
  // Questlove
  { id: 'sig-13', drummer_id: 'questlove', song_title: 'The Seed 2.0', band_name: 'The Roots', album_name: 'Phrenology', year: 2002, why_notable: 'Hip-hop meets rock with an impossibly deep groove', youtube_id: 'lPHFdcPs7x0' },
  { id: 'sig-14', drummer_id: 'questlove', song_title: 'You Got Me', band_name: 'The Roots', album_name: 'Things Fall Apart', year: 1999, why_notable: 'Grammy-winning pocket playing', youtube_id: null },
  
  // Chad Smith
  { id: 'sig-15', drummer_id: 'chad-smith', song_title: 'Give It Away', band_name: 'Red Hot Chili Peppers', album_name: 'Blood Sugar Sex Magik', year: 1991, why_notable: 'Funk-rock drumming that launched a genre', youtube_id: 'Mr_PTk8JBfE' },
  { id: 'sig-16', drummer_id: 'chad-smith', song_title: 'Under the Bridge', band_name: 'Red Hot Chili Peppers', album_name: 'Blood Sugar Sex Magik', year: 1991, why_notable: 'Sensitive, song-serving approach', youtube_id: null },
  
  // Danny Carey
  { id: 'sig-17', drummer_id: 'danny-carey', song_title: 'Pneuma', band_name: 'Tool', album_name: 'Fear Inoculum', year: 2019, why_notable: 'Polyrhythmic masterpiece in multiple time signatures', youtube_id: '5OZuPGOgPvc' },
  { id: 'sig-18', drummer_id: 'danny-carey', song_title: '46 & 2', band_name: 'Tool', album_name: 'Ænima', year: 1996, why_notable: 'Accessible entry point to his complex style', youtube_id: 'FssULNGSZIA' },
  
  // Bill Bruford
  { id: 'sig-19', drummer_id: 'bill-bruford', song_title: 'Heart of the Sunrise', band_name: 'Yes', album_name: 'Fragile', year: 1971, why_notable: 'Progressive rock drumming benchmark', youtube_id: 'I0E6HvvA0D8' },
  { id: 'sig-20', drummer_id: 'bill-bruford', song_title: 'Discipline', band_name: 'King Crimson', album_name: 'Discipline', year: 1981, why_notable: 'Interlocking polyrhythms that influenced a generation', youtube_id: 'FPdCMxE_Xmc' },
];

// Helper function to get drummer with all relations
export function getDrummerWithRelations(drummerId: string) {
  const drummer = drummers.find(d => d.id === drummerId || d.slug === drummerId);
  if (!drummer) return null;
  
  return {
    ...drummer,
    styles: [], // Would populate from junction table
    eras: [], // Would populate from junction table
    bands: [], // Would populate from band_members
    videos: videos.filter(v => v.drummer_id === drummer.id),
    gear: [], // Would populate from drummer_gear
    influences: influences.filter(i => i.influenced_id === drummer.id).map(i => ({
      ...i,
      influencer: drummers.find(d => d.id === i.influencer_id),
    })),
    influenced_by: influences.filter(i => i.influencer_id === drummer.id).map(i => ({
      ...i,
      influenced: drummers.find(d => d.id === i.influenced_id),
    })),
    signature_songs: signatureSongs.filter(s => s.drummer_id === drummer.id),
  };
}

// Helper to get all drummers for listing
export function getAllDrummers() {
  return drummers.map(d => ({
    ...d,
    video_count: videos.filter(v => v.drummer_id === d.id).length,
    signature_song_count: signatureSongs.filter(s => s.drummer_id === d.id).length,
  }));
}

// Search drummers
export function searchDrummers(query: string) {
  const lowerQuery = query.toLowerCase();
  return drummers.filter(d => 
    d.name.toLowerCase().includes(lowerQuery) ||
    d.bio_short.toLowerCase().includes(lowerQuery) ||
    d.nationality?.toLowerCase().includes(lowerQuery)
  );
}
