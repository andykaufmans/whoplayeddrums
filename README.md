# WhoPlayedDrums

The definitive drummer database. Discover the drummers behind your favorite music.

![WhoPlayedDrums](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)

## Features

- **10 Legendary Drummers** - Keith Moon, Ginger Baker, Stewart Copeland, Vinnie Colaiuta, Phil Collins, Ringo Starr, Questlove, Chad Smith, Danny Carey, Bill Bruford
- **30+ Curated Videos** - Performances, tutorials, interviews, and documentaries
- **Influence Maps** - See who influenced who
- **Signature Songs** - The tracks that defined each drummer
- **Dark Brutalist Design** - Black and gold theme with bold typography

## Quick Start

### 1. Install Dependencies

```bash
cd whoplayeddrums
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**That's it!** The MVP works without Supabase - all data is loaded from the seed file.

## Optional: Supabase Setup

Want to add user accounts, favorites, or dynamic data? Set up Supabase:

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Wait for it to initialize (~2 minutes)

### 2. Get Your Keys

1. Go to Project Settings → API
2. Copy the `Project URL` and `anon/public` key

### 3. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run Database Migrations

See `/supabase/schema.sql` for the full database schema (coming in Phase 2).

## Project Structure

```
whoplayeddrums/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── drummers/          # Drummers listing
│   │   ├── drummer/[slug]/    # Individual profiles
│   │   ├── videos/            # Video library
│   │   ├── styles/            # Browse by style
│   │   ├── eras/              # Browse by era
│   │   └── search/            # Search results
│   ├── components/            # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── DrummerCard.tsx
│   │   └── YouTubeEmbed.tsx
│   ├── data/
│   │   └── seed.ts            # All drummer data
│   ├── lib/
│   │   └── supabase/          # Database clients
│   └── types/
│       └── index.ts           # TypeScript types
├── public/
│   └── images/                # Drummer photos (add your own)
├── tailwind.config.ts
└── package.json
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables if using Supabase
5. Deploy!

### Other Platforms

Works on any platform that supports Next.js:
- Netlify
- Railway
- Render
- Self-hosted with `npm run build && npm run start`

## Customization

### Adding Drummers

Edit `src/data/seed.ts` and add to the `drummers` array:

```typescript
{
  id: 'john-bonham',
  name: 'John Bonham',
  slug: 'john-bonham',
  bio_short: 'Led Zeppelin\'s thunderous drummer...',
  tier: 'legendary',
  // ... other fields
}
```

### Adding Videos

Add to the `videos` array in the same file:

```typescript
{
  id: 'v-bonham-1',
  drummer_id: 'john-bonham',
  youtube_id: 'VIDEO_ID_HERE',
  title: 'Moby Dick Drum Solo',
  video_type: 'performance',
  // ... other fields
}
```

### Changing Colors

Edit `tailwind.config.ts` to change the gold/ink color scheme:

```typescript
colors: {
  gold: {
    500: '#D4AF37', // Primary gold
    // ...
  },
  ink: {
    950: '#0A0A0A', // Background
    // ...
  }
}
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (optional)
- **Fonts**: Instrument Serif, Syne, Space Mono
- **Icons**: Lucide React

## Roadmap

- [x] MVP with 10 drummers
- [x] YouTube video embeds
- [x] Influence mapping
- [x] Signature songs
- [ ] User accounts & favorites
- [ ] Gear database
- [ ] Band discography pages
- [ ] Interactive influence visualization
- [ ] API access
- [ ] Community contributions

## License

MIT - Feel free to use this for your own projects!

---

Built with 🥁 for drummers everywhere.
