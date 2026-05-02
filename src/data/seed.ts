// Seed data for MVP - 20 legendary drummers with full details
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
  { id: 'led-zeppelin', name: 'Led Zeppelin', slug: 'led-zeppelin', formed_year: 1968, disbanded_year: 1980, genre: 'Hard Rock/Blues Rock', photo_url: null },
  { id: 'rush', name: 'Rush', slug: 'rush', formed_year: 1968, disbanded_year: 2018, genre: 'Progressive Rock', photo_url: null },
  { id: 'nirvana', name: 'Nirvana', slug: 'nirvana', formed_year: 1987, disbanded_year: 1994, genre: 'Grunge', photo_url: null },
  { id: 'foo-fighters', name: 'Foo Fighters', slug: 'foo-fighters', formed_year: 1994, disbanded_year: null, genre: 'Alternative Rock', photo_url: null },
  { id: 'buddy-rich-band', name: 'Buddy Rich Big Band', slug: 'buddy-rich-big-band', formed_year: 1966, disbanded_year: 1987, genre: 'Big Band Jazz', photo_url: null },
  { id: 'miles-davis-quintet', name: 'Miles Davis Quintet', slug: 'miles-davis-quintet', formed_year: 1955, disbanded_year: 1969, genre: 'Jazz', photo_url: null },
  { id: 'tony-williams-lifetime', name: 'Tony Williams Lifetime', slug: 'tony-williams-lifetime', formed_year: 1969, disbanded_year: 1975, genre: 'Jazz Fusion', photo_url: null },
  { id: 'jimi-hendrix-experience', name: 'The Jimi Hendrix Experience', slug: 'jimi-hendrix-experience', formed_year: 1966, disbanded_year: 1969, genre: 'Psychedelic Rock', photo_url: null },
  { id: 'scream', name: 'Scream', slug: 'scream', formed_year: 1981, disbanded_year: 1990, genre: 'Hardcore Punk', photo_url: null },
  { id: 'band-of-joy', name: 'Band of Joy', slug: 'band-of-joy', formed_year: 1967, disbanded_year: 1968, genre: 'Blues Rock', photo_url: null },
];

// ============ DRUMMERS ============
export const drummers: Drummer[] = [
  {
    id: 'keith-moon',
    name: 'Keith Moon',
    slug: 'keith-moon',
    real_name: 'Keith John Moon',
    nicknames: ['Moon the Loon', 'The Loon'],
    birth_date: '1946-08-23',
    death_date: '1978-09-07',
    birth_place: 'Wembley, London, England',
    nationality: 'British',
    years_active: '1962-1978',
    handed: 'right',
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
    real_name: 'Peter Edward Baker',
    nicknames: ['Ginger'],
    birth_date: '1939-08-19',
    death_date: '2019-10-06',
    birth_place: 'Lewisham, London, England',
    nationality: 'British',
    years_active: '1958-2016',
    handed: 'right',
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
    real_name: 'Stewart Armstrong Copeland',
    nicknames: null,
    birth_date: '1952-07-16',
    death_date: null,
    birth_place: 'Alexandria, Virginia, USA',
    nationality: 'American',
    years_active: '1975-present',
    handed: 'right',
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
    real_name: 'Vincent Colaiuta',
    nicknames: ['Vinnie'],
    birth_date: '1956-02-05',
    death_date: null,
    birth_place: 'Brownsville, Pennsylvania, USA',
    nationality: 'American',
    years_active: '1978-present',
    handed: 'right',
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
    real_name: 'Philip David Charles Collins',
    nicknames: null,
    birth_date: '1951-01-30',
    death_date: null,
    birth_place: 'Chiswick, London, England',
    nationality: 'British',
    years_active: '1969-2011',
    handed: 'left',
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
    real_name: 'Richard Starkey',
    nicknames: ['Ringo', 'Rings'],
    birth_date: '1940-07-07',
    death_date: null,
    birth_place: 'Liverpool, England',
    nationality: 'British',
    years_active: '1957-present',
    handed: 'left',
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
    real_name: 'Ahmir Khalib Thompson',
    nicknames: ['?uestlove', 'Brother Question'],
    birth_date: '1971-01-20',
    death_date: null,
    birth_place: 'Philadelphia, Pennsylvania, USA',
    nationality: 'American',
    years_active: '1987-present',
    handed: 'right',
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
    real_name: 'Chadwick Gaylord Smith',
    nicknames: ['Chad', 'Will Ferrell\'s Twin'],
    birth_date: '1961-10-25',
    death_date: null,
    birth_place: 'Saint Paul, Minnesota, USA',
    nationality: 'American',
    years_active: '1983-present',
    handed: 'right',
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
    real_name: 'Daniel Edwin Carey',
    nicknames: null,
    birth_date: '1961-05-10',
    death_date: null,
    birth_place: 'Lawrence, Kansas, USA',
    nationality: 'American',
    years_active: '1985-present',
    handed: 'right',
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
    real_name: 'William Scott Bruford',
    nicknames: null,
    birth_date: '1949-05-17',
    death_date: null,
    birth_place: 'Sevenoaks, Kent, England',
    nationality: 'British',
    years_active: '1968-2009',
    handed: 'right',
    bio_short: 'The cerebral prog master who drummed for Yes and King Crimson, known for odd time signatures and pioneering electronic percussion.',
    bio_full: 'William Scott Bruford is an English drummer and percussionist best known for his work with Yes, King Crimson, and his own jazz-fusion projects. His intellectual approach to drumming—emphasizing odd time signatures, melodic tom work, and restraint—set him apart from his contemporaries. Bruford was an early adopter of electronic drums and Simmons pads. He retired from professional drumming in 2009 to focus on writing and education.',
    photo_url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // ============ NEW DRUMMERS (NEXT 10) ============
  {
    id: 'john-bonham',
    name: 'John Bonham',
    slug: 'john-bonham',
    real_name: 'John Henry Bonham',
    nicknames: ['Bonzo', 'The Beast'],
    birth_date: '1948-05-31',
    death_date: '1980-09-25',
    birth_place: 'Redditch, Worcestershire, England',
    nationality: 'British',
    years_active: '1962-1980',
    handed: 'right',
    bio_short: 'Led Zeppelin\'s thunderous powerhouse who redefined hard rock drumming with his massive sound, incredible speed, and legendary single-bass technique.',
    bio_full: 'John Henry Bonham was the drummer for Led Zeppelin, widely regarded as the greatest rock drummer of all time. His powerful, precise, and groove-heavy style set the template for hard rock drumming. Bonham\'s ability to combine jazz-influenced swing with thunderous power, his innovative single bass drum technique, and his massive sound influenced generations of drummers. Rolling Stone named him the greatest drummer of all time in 2016. He died tragically at age 32, and Led Zeppelin disbanded shortly after.',
    photo_url: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'neil-peart',
    name: 'Neil Peart',
    slug: 'neil-peart',
    real_name: 'Neil Ellwood Peart',
    nicknames: ['The Professor'],
    birth_date: '1952-09-12',
    death_date: '2020-01-07',
    birth_place: 'Hamilton, Ontario, Canada',
    nationality: 'Canadian',
    years_active: '1974-2015',
    handed: 'right',
    bio_short: 'Rush\'s legendary drummer and lyricist, renowned for his technical precision, elaborate drum kits, and epic solos that defined progressive rock drumming.',
    bio_full: 'Neil Ellwood Peart was the drummer, percussionist, and primary lyricist for Rush. Nicknamed "The Professor" for his intellectual approach and continuous pursuit of improvement, Peart was inducted into the Modern Drummer Hall of Fame in 1983 at age 30, the youngest person ever honored. His drumming combined precision with creativity, featuring complex time signatures, elaborate fills, and legendary live solos. He also authored several travel memoirs. Peart died from glioblastoma in 2020.',
    photo_url: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'buddy-rich',
    name: 'Buddy Rich',
    slug: 'buddy-rich',
    real_name: 'Bernard Rich',
    nicknames: ['Traps the Drum Wonder', 'The World\'s Greatest Drummer'],
    birth_date: '1917-09-30',
    death_date: '1987-04-02',
    birth_place: 'Brooklyn, New York, USA',
    nationality: 'American',
    years_active: '1919-1987',
    handed: 'right',
    bio_short: 'The virtuoso jazz drummer whose speed, power, and showmanship made him a legend, influencing everyone from rock to fusion drummers.',
    bio_full: 'Bernard "Buddy" Rich was an American jazz drummer, bandleader, and one of the most influential drummers in history. A child prodigy who performed on Broadway at age 4, Rich never took a formal lesson yet developed unmatched technical proficiency. His speed, precision, and explosive power set standards still aspired to today. Gene Krupa called him "the greatest drummer ever to have drawn breath." His influence extends from jazz to rock, touching drummers like John Bonham and Phil Collins.',
    photo_url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'dave-grohl',
    name: 'Dave Grohl',
    slug: 'dave-grohl',
    real_name: 'David Eric Grohl',
    nicknames: null,
    birth_date: '1969-01-14',
    death_date: null,
    birth_place: 'Warren, Ohio, USA',
    nationality: 'American',
    years_active: '1986-present',
    handed: 'right',
    bio_short: 'From Nirvana\'s explosive drummer to Foo Fighters founder, he became one of rock\'s most beloved figures with his powerful, aggressive style.',
    bio_full: 'David Eric Grohl first gained fame as Nirvana\'s drummer, providing the thunderous backbone for Nevermind and grunge\'s breakthrough. After Kurt Cobain\'s death, he founded Foo Fighters, transitioning to frontman while remaining one of rock\'s most respected drummers. His hard-hitting, energetic style—heavily influenced by John Bonham—helped define alternative rock. Grohl was inducted into the Rock and Roll Hall of Fame twice: with Nirvana (2014) and Foo Fighters (2021).',
    photo_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'steve-gadd',
    name: 'Steve Gadd',
    slug: 'steve-gadd',
    real_name: 'Stephen Kendall Gadd',
    nicknames: null,
    birth_date: '1945-04-09',
    death_date: null,
    birth_place: 'Rochester, New York, USA',
    nationality: 'American',
    years_active: '1968-present',
    handed: 'right',
    bio_short: 'The session drummer\'s drummer whose groove on "50 Ways to Leave Your Lover" and "Aja" set the gold standard for studio drumming.',
    bio_full: 'Stephen Kendall Gadd is one of the most recorded and respected session drummers in history, inducted into the Modern Drummer Hall of Fame in 1984. His performances on Paul Simon\'s "50 Ways to Leave Your Lover" and Steely Dan\'s "Aja" are considered landmark recordings. Chick Corea said "Every drummer wants to play like Gadd because he plays perfect." His ability to find the perfect groove for any song, combined with impeccable technique, made him the first-call studio drummer for decades.',
    photo_url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'tony-williams',
    name: 'Tony Williams',
    slug: 'tony-williams',
    real_name: 'Anthony Tillmon Williams',
    nicknames: null,
    birth_date: '1945-12-12',
    death_date: '1997-02-23',
    birth_place: 'Chicago, Illinois, USA',
    nationality: 'American',
    years_active: '1959-1997',
    handed: 'right',
    bio_short: 'The prodigy who revolutionized jazz drumming with Miles Davis at 17 and pioneered fusion with his band Lifetime.',
    bio_full: 'Anthony Tillmon Williams joined Miles Davis\'s legendary Second Great Quintet at just 17 years old, immediately revolutionizing jazz drumming with his innovative use of polyrhythms and metric modulation. In 1970, critic Robert Christgau called him "probably the best drummer in the world." Williams later pioneered jazz fusion with his band Lifetime. His influence on jazz and fusion drumming is immeasurable, and he was inducted into the Modern Drummer Hall of Fame in 1986.',
    photo_url: 'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'mitch-mitchell',
    name: 'Mitch Mitchell',
    slug: 'mitch-mitchell',
    real_name: 'John Graham Mitchell',
    nicknames: null,
    birth_date: '1946-07-09',
    death_date: '2008-11-12',
    birth_place: 'Ealing, London, England',
    nationality: 'British',
    years_active: '1963-2008',
    handed: 'right',
    bio_short: 'The Jimi Hendrix Experience\'s jazz-influenced drummer whose explosive, improvisational style perfectly matched Hendrix\'s revolutionary guitar.',
    bio_full: 'John Graham "Mitch" Mitchell was the drummer for the Jimi Hendrix Experience, chosen over Aynsley Dunbar via a coin toss. His jazz-influenced, Elvin Jones-inspired style meshed perfectly with Hendrix\'s revolutionary approach, creating some of rock\'s most innovative recordings. Rolling Stone ranked him the 8th greatest drummer of all time in 2016. Mitchell appeared on all three Experience studio albums and remained the last surviving original member until his death in 2008.',
    photo_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'gene-krupa',
    name: 'Gene Krupa',
    slug: 'gene-krupa',
    real_name: 'Eugene Bertram Krupa',
    nicknames: ['The Founder of the Modern Drum Set'],
    birth_date: '1909-01-15',
    death_date: '1973-10-16',
    birth_place: 'Chicago, Illinois, USA',
    nationality: 'American',
    years_active: '1927-1973',
    handed: 'right',
    bio_short: 'The swing era pioneer who made the drummer a star, transforming the role from timekeeper to featured soloist.',
    bio_full: 'Eugene Bertram Krupa was a pioneering American jazz drummer and bandleader who helped legitimize the drum set as a serious instrument. His showmanship with Benny Goodman\'s orchestra made him the first drum superstar, and his 1936 recording of "Sing, Sing, Sing" is considered a landmark. Krupa\'s theatrical style and extended solos influenced every rock drummer who followed. He called Buddy Rich "the greatest drummer ever to have drawn breath."',
    photo_url: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'art-blakey',
    name: 'Art Blakey',
    slug: 'art-blakey',
    real_name: 'Arthur Blakey',
    nicknames: ['Bu', 'Abdullah Ibn Buhaina'],
    birth_date: '1919-10-11',
    death_date: '1990-10-16',
    birth_place: 'Pittsburgh, Pennsylvania, USA',
    nationality: 'American',
    years_active: '1942-1990',
    handed: 'right',
    bio_short: 'The hard bop giant whose Jazz Messengers became the greatest finishing school for jazz, mentoring generations of musicians.',
    bio_full: 'Arthur Blakey was an American jazz drummer and bandleader whose Jazz Messengers served as a proving ground for generations of jazz musicians including Wayne Shorter, Lee Morgan, and Wynton Marsalis. His powerful, polyrhythmic style defined hard bop drumming, and his signature press roll became instantly recognizable. Blakey led the Jazz Messengers for over 35 years, constantly reinventing the band while maintaining its driving, soulful sound.',
    photo_url: 'https://images.unsplash.com/photo-1457523054379-8d03ab9fc2aa?w=400&h=400&fit=crop',
    tier: 'legendary',
    is_active: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'max-roach',
    name: 'Max Roach',
    slug: 'max-roach',
    real_name: 'Maxwell Lemuel Roach',
    nicknames: null,
    birth_date: '1924-01-10',
    death_date: '2007-08-16',
    birth_place: 'Newland, North Carolina, USA',
    nationality: 'American',
    years_active: '1942-2000',
    handed: 'right',
    bio_short: 'The bebop revolutionary who elevated jazz drumming to an art form, combining technical mastery with fearless political activism.',
    bio_full: 'Maxwell Lemuel Roach was a pioneer of bebop and one of the most influential jazz drummers ever. With Charlie Parker and Dizzy Gillespie, he helped create modern jazz drumming, freeing the drums from strict timekeeping. His melodic approach to the kit and mastery of dynamics influenced everyone from Tony Williams to modern jazz drummers. Beyond music, Roach was a fearless civil rights activist whose album "We Insist! Freedom Now Suite" remains a landmark of protest music.',
    photo_url: 'https://images.unsplash.com/photo-1431440869543-efaf3388c585?w=400&h=400&fit=crop',
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
  
  // John Bonham
  { id: 'v-bonham-1', drummer_id: 'john-bonham', youtube_id: 'UOSf9f5_qZ8', title: 'Led Zeppelin - Moby Dick (MSG 1973)', description: 'The legendary drum solo from The Song Remains the Same', video_type: 'performance', song_name: 'Moby Dick', band_name: 'Led Zeppelin', year: 1973, duration_seconds: 1200, is_featured: true, sort_order: 1 },
  { id: 'v-bonham-2', drummer_id: 'john-bonham', youtube_id: 'm6wRXeqp36M', title: '9 Essential John Bonham Drum Beats', description: 'Breakdown of his most iconic grooves', video_type: 'tutorial', song_name: null, band_name: null, year: 2021, duration_seconds: 540, is_featured: true, sort_order: 2 },
  { id: 'v-bonham-3', drummer_id: 'john-bonham', youtube_id: 'FBPW6l2tMKw', title: 'John Bonham Bass Drum Triplets', description: 'Analysis of his signature bass drum technique', video_type: 'tutorial', song_name: null, band_name: null, year: 2022, duration_seconds: 600, is_featured: false, sort_order: 3 },
  
  // Neil Peart
  { id: 'v-peart-1', drummer_id: 'neil-peart', youtube_id: 'LdpMpfp-J_I', title: 'Rush - YYZ (Live)', description: 'The instrumental showcase for Peart\'s virtuosity', video_type: 'performance', song_name: 'YYZ', band_name: 'Rush', year: 1981, duration_seconds: 300, is_featured: true, sort_order: 1 },
  { id: 'v-peart-2', drummer_id: 'neil-peart', youtube_id: 'MJRNKZOpAck', title: 'Neil Peart Drum Solo - R40 Tour', description: 'One of his final legendary drum solos', video_type: 'performance', song_name: null, band_name: 'Rush', year: 2015, duration_seconds: 600, is_featured: true, sort_order: 2 },
  { id: 'v-peart-3', drummer_id: 'neil-peart', youtube_id: 'L3p6O0-q2Ko', title: 'Rush - Tom Sawyer (Live)', description: 'The iconic track with signature fills', video_type: 'performance', song_name: 'Tom Sawyer', band_name: 'Rush', year: 1981, duration_seconds: 320, is_featured: false, sort_order: 3 },
  
  // Buddy Rich
  { id: 'v-rich-1', drummer_id: 'buddy-rich', youtube_id: '9esWGSxSFgs', title: 'Buddy Rich - Channel One Suite', description: 'Mind-blowing big band drumming', video_type: 'performance', song_name: 'Channel One Suite', band_name: 'Buddy Rich Big Band', year: 1968, duration_seconds: 600, is_featured: true, sort_order: 1 },
  { id: 'v-rich-2', drummer_id: 'buddy-rich', youtube_id: '_fPiJZmqoR4', title: 'Buddy Rich - West Side Story Medley', description: 'His legendary 10-minute arrangement', video_type: 'performance', song_name: 'West Side Story', band_name: 'Buddy Rich Big Band', year: 1966, duration_seconds: 600, is_featured: true, sort_order: 2 },
  { id: 'v-rich-3', drummer_id: 'buddy-rich', youtube_id: '3y-JgVcBqYQ', title: 'Buddy Rich vs Animal (Muppets)', description: 'The legendary drum battle on The Muppet Show', video_type: 'performance', song_name: null, band_name: null, year: 1980, duration_seconds: 240, is_featured: false, sort_order: 3 },
  
  // Dave Grohl
  { id: 'v-grohl-1', drummer_id: 'dave-grohl', youtube_id: 'hTWKbfoikeg', title: 'Nirvana - Smells Like Teen Spirit', description: 'The song that defined a generation', video_type: 'performance', song_name: 'Smells Like Teen Spirit', band_name: 'Nirvana', year: 1991, duration_seconds: 300, is_featured: true, sort_order: 1 },
  { id: 'v-grohl-2', drummer_id: 'dave-grohl', youtube_id: 'v3GRJZo4XRw', title: 'Dave Grohl - Play (Full Film)', description: 'Playing all instruments on an epic drum-driven track', video_type: 'documentary', song_name: 'Play', band_name: 'Dave Grohl', year: 2018, duration_seconds: 1380, is_featured: true, sort_order: 2 },
  { id: 'v-grohl-3', drummer_id: 'dave-grohl', youtube_id: 'n6P0SitRwy8', title: 'Them Crooked Vultures - New Fang (Live)', description: 'Grohl drumming with the supergroup', video_type: 'performance', song_name: 'New Fang', band_name: 'Them Crooked Vultures', year: 2009, duration_seconds: 240, is_featured: false, sort_order: 3 },
  
  // Steve Gadd
  { id: 'v-gadd-1', drummer_id: 'steve-gadd', youtube_id: 'Zb_bKr-kOIg', title: 'Steve Gadd - 50 Ways to Leave Your Lover', description: 'The groove that changed studio drumming', video_type: 'performance', song_name: '50 Ways to Leave Your Lover', band_name: 'Paul Simon', year: 1975, duration_seconds: 240, is_featured: true, sort_order: 1 },
  { id: 'v-gadd-2', drummer_id: 'steve-gadd', youtube_id: 'WfnPKmzQ2gY', title: 'Steely Dan - Aja (Steve Gadd Drum Track)', description: 'The legendary Aja drum solo', video_type: 'isolated_track', song_name: 'Aja', band_name: 'Steely Dan', year: 1977, duration_seconds: 480, is_featured: true, sort_order: 2 },
  { id: 'v-gadd-3', drummer_id: 'steve-gadd', youtube_id: 'rLPfh14xm4o', title: 'Steve Gadd - Caravan (Blue Note Tokyo)', description: 'Masterclass performance with his band', video_type: 'performance', song_name: 'Caravan', band_name: 'Steve Gadd Band', year: 2015, duration_seconds: 600, is_featured: false, sort_order: 3 },
  
  // Tony Williams
  { id: 'v-twilliams-1', drummer_id: 'tony-williams', youtube_id: 'x_whk4RfVKY', title: 'Miles Davis Quintet - Seven Steps to Heaven', description: 'Williams at 17 with Miles', video_type: 'performance', song_name: 'Seven Steps to Heaven', band_name: 'Miles Davis Quintet', year: 1963, duration_seconds: 420, is_featured: true, sort_order: 1 },
  { id: 'v-twilliams-2', drummer_id: 'tony-williams', youtube_id: 'Zp9CeZJTwIY', title: 'Tony Williams Lifetime - Emergency', description: 'Pioneering jazz fusion', video_type: 'performance', song_name: 'Emergency', band_name: 'Tony Williams Lifetime', year: 1969, duration_seconds: 480, is_featured: true, sort_order: 2 },
  { id: 'v-twilliams-3', drummer_id: 'tony-williams', youtube_id: 'rlT_nGo4T7o', title: 'Miles Davis - Nefertiti (Tony Williams)', description: 'Revolutionary brushwork and dynamics', video_type: 'performance', song_name: 'Nefertiti', band_name: 'Miles Davis Quintet', year: 1967, duration_seconds: 480, is_featured: false, sort_order: 3 },
  
  // Mitch Mitchell
  { id: 'v-mitchell-1', drummer_id: 'mitch-mitchell', youtube_id: 'TLV4_xaYynY', title: 'Jimi Hendrix - Fire (Live)', description: 'Explosive jazz-rock drumming', video_type: 'performance', song_name: 'Fire', band_name: 'The Jimi Hendrix Experience', year: 1968, duration_seconds: 240, is_featured: true, sort_order: 1 },
  { id: 'v-mitchell-2', drummer_id: 'mitch-mitchell', youtube_id: 'IZBlqcbpmxY', title: 'Jimi Hendrix - Manic Depression', description: 'Perfect example of his jazz-influenced style', video_type: 'performance', song_name: 'Manic Depression', band_name: 'The Jimi Hendrix Experience', year: 1967, duration_seconds: 220, is_featured: true, sort_order: 2 },
  { id: 'v-mitchell-3', drummer_id: 'mitch-mitchell', youtube_id: 'qFfnlYbFEiE', title: 'Jimi Hendrix - Woodstock Star Spangled Banner', description: 'Historic Woodstock performance', video_type: 'performance', song_name: 'Star Spangled Banner', band_name: 'Gypsy Sun and Rainbows', year: 1969, duration_seconds: 300, is_featured: false, sort_order: 3 },
  
  // Gene Krupa
  { id: 'v-krupa-1', drummer_id: 'gene-krupa', youtube_id: 'r2S1I_ien6A', title: 'Gene Krupa - Sing, Sing, Sing', description: 'The solo that made the drummer a star', video_type: 'performance', song_name: 'Sing, Sing, Sing', band_name: 'Benny Goodman Orchestra', year: 1937, duration_seconds: 720, is_featured: true, sort_order: 1 },
  { id: 'v-krupa-2', drummer_id: 'gene-krupa', youtube_id: 'PWLrPXSfDCU', title: 'Gene Krupa & Buddy Rich - Drum Battle', description: 'Two legends facing off', video_type: 'performance', song_name: null, band_name: null, year: 1952, duration_seconds: 480, is_featured: true, sort_order: 2 },
  { id: 'v-krupa-3', drummer_id: 'gene-krupa', youtube_id: 'rKCfH4-pljI', title: 'Gene Krupa Orchestra - Drum Boogie', description: 'Showcasing his showmanship', video_type: 'performance', song_name: 'Drum Boogie', band_name: 'Gene Krupa Orchestra', year: 1941, duration_seconds: 180, is_featured: false, sort_order: 3 },
  
  // Art Blakey
  { id: 'v-blakey-1', drummer_id: 'art-blakey', youtube_id: 'Cv9NSR-2DwM', title: 'Art Blakey - Moanin\'', description: 'The definitive hard bop drum sound', video_type: 'performance', song_name: 'Moanin\'', band_name: 'Art Blakey and the Jazz Messengers', year: 1958, duration_seconds: 540, is_featured: true, sort_order: 1 },
  { id: 'v-blakey-2', drummer_id: 'art-blakey', youtube_id: 'hMQPfuTGtpE', title: 'Art Blakey - A Night in Tunisia', description: 'Explosive polyrhythmic drumming', video_type: 'performance', song_name: 'A Night in Tunisia', band_name: 'Art Blakey and the Jazz Messengers', year: 1960, duration_seconds: 480, is_featured: true, sort_order: 2 },
  { id: 'v-blakey-3', drummer_id: 'art-blakey', youtube_id: 'Zob-BYvaTdU', title: 'Art Blakey Drum Solo', description: 'Extended solo showcasing his power', video_type: 'performance', song_name: null, band_name: 'Jazz Messengers', year: 1965, duration_seconds: 600, is_featured: false, sort_order: 3 },
  
  // Max Roach
  { id: 'v-roach-1', drummer_id: 'max-roach', youtube_id: 'M5alLNMkXRs', title: 'Max Roach - The Drum Also Waltzes', description: 'His legendary unaccompanied drum piece', video_type: 'performance', song_name: 'The Drum Also Waltzes', band_name: 'Max Roach', year: 1966, duration_seconds: 360, is_featured: true, sort_order: 1 },
  { id: 'v-roach-2', drummer_id: 'max-roach', youtube_id: 'KtLJGrX17XY', title: 'Clifford Brown & Max Roach - Cherokee', description: 'Bebop drumming at its finest', video_type: 'performance', song_name: 'Cherokee', band_name: 'Clifford Brown-Max Roach Quintet', year: 1955, duration_seconds: 420, is_featured: true, sort_order: 2 },
  { id: 'v-roach-3', drummer_id: 'max-roach', youtube_id: 'Ql8BvM-2yJA', title: 'Max Roach - We Insist!', description: 'The civil rights landmark album', video_type: 'performance', song_name: 'Freedom Day', band_name: 'Max Roach', year: 1960, duration_seconds: 480, is_featured: false, sort_order: 3 },
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
  
  // John Bonham influences
  { id: 'inf-13', influencer_id: 'buddy-rich', influenced_id: 'john-bonham', influence_type: 'primary', what_was_learned: 'Speed, power, and jazz technique', source: 'Wikipedia' },
  { id: 'inf-14', influencer_id: 'gene-krupa', influenced_id: 'john-bonham', influence_type: 'primary', what_was_learned: 'Showmanship and big band swing', source: 'Wikipedia' },
  { id: 'inf-15', influencer_id: 'max-roach', influenced_id: 'john-bonham', influence_type: 'secondary', what_was_learned: 'Melodic approach to drums', source: 'Bonham biography' },
  
  // Neil Peart influences
  { id: 'inf-16', influencer_id: 'keith-moon', influenced_id: 'neil-peart', influence_type: 'primary', what_was_learned: 'Energy and creativity', source: 'Peart interviews' },
  { id: 'inf-17', influencer_id: 'john-bonham', influenced_id: 'neil-peart', influence_type: 'primary', what_was_learned: 'Power and groove', source: 'Peart interviews' },
  { id: 'inf-18', influencer_id: 'buddy-rich', influenced_id: 'neil-peart', influence_type: 'secondary', what_was_learned: 'Technical mastery', source: 'Burning for Buddy tribute album' },
  
  // Dave Grohl influences
  { id: 'inf-19', influencer_id: 'john-bonham', influenced_id: 'dave-grohl', influence_type: 'primary', what_was_learned: 'Power and groove, single bass drum mastery', source: 'Grohl has Bonham tattoo' },
  
  // Steve Gadd influences
  { id: 'inf-20', influencer_id: 'buddy-rich', influenced_id: 'steve-gadd', influence_type: 'primary', what_was_learned: 'Technical precision and showmanship', source: 'Gadd interviews' },
  { id: 'inf-21', influencer_id: 'gene-krupa', influenced_id: 'steve-gadd', influence_type: 'secondary', what_was_learned: 'Big band vocabulary', source: 'Gadd interviews' },
  
  // Tony Williams influences
  { id: 'inf-22', influencer_id: 'max-roach', influenced_id: 'tony-williams', influence_type: 'primary', what_was_learned: 'Melodic drumming concepts', source: 'Williams interviews' },
  { id: 'inf-23', influencer_id: 'art-blakey', influenced_id: 'tony-williams', influence_type: 'primary', what_was_learned: 'Hard bop power and drive', source: 'Williams interviews' },
  
  // Mitch Mitchell influences
  { id: 'inf-24', influencer_id: 'tony-williams', influenced_id: 'mitch-mitchell', influence_type: 'primary', what_was_learned: 'Jazz freedom in rock context', source: 'Mitchell interviews' },
  
  // Buddy Rich influences
  { id: 'inf-25', influencer_id: 'gene-krupa', influenced_id: 'buddy-rich', influence_type: 'peer', what_was_learned: 'Showmanship and big band drumming', source: null },
  
  // Art Blakey influences
  { id: 'inf-26', influencer_id: 'max-roach', influenced_id: 'art-blakey', influence_type: 'peer', what_was_learned: 'Bebop vocabulary', source: null },
  
  // Chad Smith - Bonham influence
  { id: 'inf-27', influencer_id: 'john-bonham', influenced_id: 'chad-smith', influence_type: 'primary', what_was_learned: 'Power and pocket', source: 'Smith interviews' },
  
  // Vinnie influenced by Steve Gadd
  { id: 'inf-28', influencer_id: 'steve-gadd', influenced_id: 'vinnie-colaiuta', influence_type: 'primary', what_was_learned: 'Studio precision and groove', source: 'Industry knowledge' },
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
  
  // John Bonham
  { id: 'sig-21', drummer_id: 'john-bonham', song_title: 'When the Levee Breaks', band_name: 'Led Zeppelin', album_name: 'Led Zeppelin IV', year: 1971, why_notable: 'The most sampled drum sound in hip-hop history', youtube_id: null },
  { id: 'sig-22', drummer_id: 'john-bonham', song_title: 'Good Times Bad Times', band_name: 'Led Zeppelin', album_name: 'Led Zeppelin', year: 1969, why_notable: 'Revolutionary single bass drum triplets', youtube_id: null },
  { id: 'sig-23', drummer_id: 'john-bonham', song_title: 'Moby Dick', band_name: 'Led Zeppelin', album_name: 'Led Zeppelin II', year: 1969, why_notable: 'Extended drum solo that became a live staple', youtube_id: 'UOSf9f5_qZ8' },
  
  // Neil Peart
  { id: 'sig-24', drummer_id: 'neil-peart', song_title: 'Tom Sawyer', band_name: 'Rush', album_name: 'Moving Pictures', year: 1981, why_notable: 'Iconic fills and time signature changes', youtube_id: 'L3p6O0-q2Ko' },
  { id: 'sig-25', drummer_id: 'neil-peart', song_title: 'YYZ', band_name: 'Rush', album_name: 'Moving Pictures', year: 1981, why_notable: 'Instrumental tour de force in odd meters', youtube_id: 'LdpMpfp-J_I' },
  
  // Buddy Rich
  { id: 'sig-26', drummer_id: 'buddy-rich', song_title: 'Channel One Suite', band_name: 'Buddy Rich Big Band', album_name: 'Mercy, Mercy', year: 1968, why_notable: 'Big band drumming at its absolute peak', youtube_id: '9esWGSxSFgs' },
  { id: 'sig-27', drummer_id: 'buddy-rich', song_title: 'West Side Story Medley', band_name: 'Buddy Rich Big Band', album_name: 'West Side Story', year: 1966, why_notable: 'Legendary 10-minute arrangement', youtube_id: '_fPiJZmqoR4' },
  
  // Dave Grohl
  { id: 'sig-28', drummer_id: 'dave-grohl', song_title: 'Smells Like Teen Spirit', band_name: 'Nirvana', album_name: 'Nevermind', year: 1991, why_notable: 'The drum intro that launched grunge worldwide', youtube_id: 'hTWKbfoikeg' },
  { id: 'sig-29', drummer_id: 'dave-grohl', song_title: 'In Bloom', band_name: 'Nirvana', album_name: 'Nevermind', year: 1991, why_notable: 'Power and dynamics defining alternative rock', youtube_id: null },
  
  // Steve Gadd
  { id: 'sig-30', drummer_id: 'steve-gadd', song_title: '50 Ways to Leave Your Lover', band_name: 'Paul Simon', album_name: 'Still Crazy After All These Years', year: 1975, why_notable: 'The snare pattern that influenced studio drumming forever', youtube_id: 'Zb_bKr-kOIg' },
  { id: 'sig-31', drummer_id: 'steve-gadd', song_title: 'Aja', band_name: 'Steely Dan', album_name: 'Aja', year: 1977, why_notable: 'The drum solo that drummers still study', youtube_id: 'WfnPKmzQ2gY' },
  
  // Tony Williams
  { id: 'sig-32', drummer_id: 'tony-williams', song_title: 'Seven Steps to Heaven', band_name: 'Miles Davis', album_name: 'Seven Steps to Heaven', year: 1963, why_notable: 'His debut with Miles at age 17', youtube_id: 'x_whk4RfVKY' },
  { id: 'sig-33', drummer_id: 'tony-williams', song_title: 'Emergency', band_name: 'Tony Williams Lifetime', album_name: 'Emergency!', year: 1969, why_notable: 'Pioneering jazz-rock fusion', youtube_id: 'Zp9CeZJTwIY' },
  
  // Mitch Mitchell
  { id: 'sig-34', drummer_id: 'mitch-mitchell', song_title: 'Fire', band_name: 'The Jimi Hendrix Experience', album_name: 'Are You Experienced', year: 1967, why_notable: 'Jazz-influenced rock drumming at its peak', youtube_id: 'TLV4_xaYynY' },
  { id: 'sig-35', drummer_id: 'mitch-mitchell', song_title: 'Manic Depression', band_name: 'The Jimi Hendrix Experience', album_name: 'Are You Experienced', year: 1967, why_notable: 'Revolutionary triplet-based rock beat', youtube_id: 'IZBlqcbpmxY' },
  
  // Gene Krupa
  { id: 'sig-36', drummer_id: 'gene-krupa', song_title: 'Sing, Sing, Sing', band_name: 'Benny Goodman Orchestra', album_name: 'Carnegie Hall Jazz Concert', year: 1937, why_notable: 'The solo that made drummers stars', youtube_id: 'r2S1I_ien6A' },
  { id: 'sig-37', drummer_id: 'gene-krupa', song_title: 'Drum Boogie', band_name: 'Gene Krupa Orchestra', album_name: null, year: 1941, why_notable: 'Showcased his showmanship and technique', youtube_id: 'rKCfH4-pljI' },
  
  // Art Blakey
  { id: 'sig-38', drummer_id: 'art-blakey', song_title: 'Moanin\'', band_name: 'Art Blakey and the Jazz Messengers', album_name: 'Moanin\'', year: 1958, why_notable: 'The definitive hard bop drum sound', youtube_id: 'Cv9NSR-2DwM' },
  { id: 'sig-39', drummer_id: 'art-blakey', song_title: 'A Night in Tunisia', band_name: 'Art Blakey and the Jazz Messengers', album_name: 'A Night in Tunisia', year: 1960, why_notable: 'Polyrhythmic explosion', youtube_id: 'hMQPfuTGtpE' },
  
  // Max Roach
  { id: 'sig-40', drummer_id: 'max-roach', song_title: 'The Drum Also Waltzes', band_name: 'Max Roach', album_name: 'Drums Unlimited', year: 1966, why_notable: 'Unaccompanied melodic drum composition', youtube_id: 'M5alLNMkXRs' },
  { id: 'sig-41', drummer_id: 'max-roach', song_title: 'Freedom Day', band_name: 'Max Roach', album_name: 'We Insist! Freedom Now Suite', year: 1960, why_notable: 'Civil rights landmark album', youtube_id: 'Ql8BvM-2yJA' },
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
