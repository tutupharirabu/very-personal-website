import HeroGridHome from '@/assets/ProjectDetail/05/HeroGridHome.webp'
import OurMenuHome from '@/assets/ProjectDetail/05/OurMenuHome.webp'
import PaketMitraHome from '@/assets/ProjectDetail/05/PaketMitraHome.webp'
import ROICalculatorHome from '@/assets/ProjectDetail/05/ROICalculatorHome.webp'
import CommunityHome from '@/assets/ProjectDetail/05/CommunityHome.webp'
import DetailPaket from '@/assets/ProjectDetail/05/DetailPaket.webp'

export default {
  title: 'MatchaKo Indonesia Landing Page',
  lede: 'A marketing landing page for MatchaKo Indonesia — a matcha-based F&B franchise brand. Built to convert prospective franchise partners with a clean, fast, and informative layout.',
  heroImage: HeroGridHome,
  link: 'https://matchakoofficial.com',
  challenge:
    "How might we design a landing page that clearly communicates MatchaKo's franchise value proposition and converts visitors into serious franchise inquiries?",
  myRole: 'Fullstack Developer',
  year: '2026',
  timeline: '7 weeks',
  techStack: 'Astro.js · Tailwind CSS · Cloudflare Pages',
  flowScreens: [
    { src: HeroGridHome, caption: 'hero section & grid layout' },
    { src: OurMenuHome, caption: 'our menu section' },
    { src: PaketMitraHome, caption: 'franchise package overview' },
    { src: ROICalculatorHome, caption: 'ROI calculator for partners' },
    { src: CommunityHome, caption: 'community & testimonials' },
    { src: DetailPaket, caption: 'franchise package detail' },
  ],
  context:
    'MatchaKo Indonesia needed a dedicated landing page to attract franchise partners across Indonesia. The page needed to be fast, mobile-friendly, and clearly communicate the brand story, menu, and franchise packages.',
  discovery: [
    '<strong>Clear value proposition:</strong> franchise partners need to quickly understand the opportunity and ROI.',
    '<strong>Mobile-first layout:</strong> most traffic comes from mobile, so every section is optimized for smaller screens.',
    '<strong>ROI calculator:</strong> an interactive tool to help prospects estimate their potential returns before reaching out.',
    '<strong>Fast load times:</strong> static site generation with Astro.js ensures instant page loads with minimal JS.',
    '<strong>Trust signals:</strong> community section and testimonials to build credibility with prospective partners.',
  ],
  summary:
    'Shipped a fast, conversion-focused landing page that gives prospective franchise partners everything they need to make a decision — from menu showcase to ROI estimation — all in one clean, mobile-first experience.',
}
