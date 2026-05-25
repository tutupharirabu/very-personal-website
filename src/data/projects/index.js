import BTP from '@/assets/ProjectDetail/01/BTP.webp'
import Dashboard from '@/assets/ProjectDetail/02/Dashboard.webp'
import Arcadia from '@/assets/ProjectDetail/03/Arcadia.webp'
import BTPv2 from '@/assets/ProjectDetail/04/BTPv2.webp'
import MatchakoHero from '@/assets/ProjectDetail/05/HeroGridHome.webp'

export const allProjects = [
  {
    slug: 'spacerent-btp-v1',
    title: 'Spacerent BTP v1',
    description: 'A room & equipment reservation platform for Bandung Techno Park, designed for fast, conflict-free scheduling with role-based access and clear audit trails.',
    image: BTP,
  },
  {
    slug: 'pos-website',
    title: 'Point-of-Sales (POS) Website',
    description: 'A web-based Point-of-Sale platform for cafés and retail, built for fast checkout, real-time inventory sync, and receipt printing. Role-based access, daily reports, and an offline-friendly workflow included.',
    image: Dashboard,
  },
  {
    slug: 'iot-analytics-platform',
    title: 'Internet-of-Things (IoT) Analytics Platform',
    description: 'IoT platform for Arcadia Flora Tech—secure device-to-cloud telemetry, real-time dashboards, alerts, and role-based insights.',
    image: Arcadia,
  },
  {
    slug: 'spacerent-btp-v2',
    title: 'Spacerent BTP v2',
    description: 'Same fast booking—now smoother: mobile-first UI, cleaner nav, inline conflict hints, and snappier, prefetch-powered performance.',
    image: BTPv2,
  },
  {
    slug: 'matchako-landing-page',
    title: 'MatchaKo Indonesia Landing Page',
    description: 'A conversion-focused landing page for MatchaKo Indonesia\'s franchise program — fast, mobile-first, and built with Astro.js.',
    image: MatchakoHero,
  },
]
