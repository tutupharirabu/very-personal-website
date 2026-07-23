// Project 05 — MatchaKo Landing Page
import mk_Hero from '@/assets/ProjectDetail/05/HeroGridHome.webp';
import mk_Menu from '@/assets/ProjectDetail/05/OurMenuHome.webp';
import mk_Paket from '@/assets/ProjectDetail/05/PaketMitraHome.webp';
import mk_ROI from '@/assets/ProjectDetail/05/ROICalculatorHome.webp';
import mk_Community from '@/assets/ProjectDetail/05/CommunityHome.webp';
import mk_Detail from '@/assets/ProjectDetail/05/DetailPaket.webp';

// Project 04 — Spacerent BTP v2
import v2_Hero from '@/assets/ProjectDetail/04/BTPv2.webp';
import v2_ListRuangan from '@/assets/ProjectDetail/04/ListRuangan.webp';
import v2_DetailRuangan from '@/assets/ProjectDetail/04/DetailRuangan.webp';
import v2_ListPengajuan from '@/assets/ProjectDetail/04/ListPengajuan.webp';
import v2_DashboardAdmin from '@/assets/ProjectDetail/04/DashboardAdmin.webp';
import v2_Manajemen from '@/assets/ProjectDetail/04/ManajemenRuangan.webp';
import v2_Profile from '@/assets/ProjectDetail/04/ProfileSetting.webp';
import v2_mDashboard from '@/assets/ProjectDetail/04/Mobile/DashboardPenyewa.webp';
import v2_mListRuangan from '@/assets/ProjectDetail/04/Mobile/ListRuangan.webp';
import v2_mDetailRuangan from '@/assets/ProjectDetail/04/Mobile/DetailRuangan.webp';

// Project 03 — IoT Analytics Platform
import iot_Hero from '@/assets/ProjectDetail/03/Arcadia.webp';
import iot_Login from '@/assets/ProjectDetail/03/Login.webp';
import iot_Dashboard from '@/assets/ProjectDetail/03/Dashboard.webp';
import iot_Analytics from '@/assets/ProjectDetail/03/Analytics.webp';
import iot_QR from '@/assets/ProjectDetail/03/QR.webp';
import iot_Alat from '@/assets/ProjectDetail/03/Alat.webp';
import iot_DetailAlat from '@/assets/ProjectDetail/03/DetailAlat.webp';

// Project 02 — Point-of-Sale Website
import pos_Hero from '@/assets/ProjectDetail/02/Dashboard.webp';
import pos_Login from '@/assets/ProjectDetail/02/LoginRole.webp';
import pos_Cashier from '@/assets/ProjectDetail/02/Cashier.webp';
import pos_Inventory from '@/assets/ProjectDetail/02/Inventory.webp';
import pos_Profile from '@/assets/ProjectDetail/02/Profile.webp';
import pos_Receipt from '@/assets/ProjectDetail/02/ReceiptFormat.webp';
import pos_Peripheral from '@/assets/ProjectDetail/02/Peripheral.webp';

// Project 01 — Spacerent BTP v1
import v1_Hero from '@/assets/ProjectDetail/01/BTP.webp';
import v1_DetailRuangan from '@/assets/ProjectDetail/01/DetailRuangan.webp';
import v1_ListPengajuan from '@/assets/ProjectDetail/01/ListPengajuan.webp';
import v1_Modal from '@/assets/ProjectDetail/01/ModalKalender.webp';
import v1_Okupansi from '@/assets/ProjectDetail/01/Okupansi.webp';
import v1_Manajemen from '@/assets/ProjectDetail/01/RuanganManajemen.webp';
import v1_StatusAdmin from '@/assets/ProjectDetail/01/StatusAdmin.webp';

// Projects, newest first (matches the original "sort by year desc" ordering).
export const projects = [
  {
    slug: 'matchako-landing-page',
    title: 'MatchaKo Indonesia Landing Page',
    year: '2026',
    type: 'Frontend',
    cardDesc:
      "A conversion-focused landing page for MatchaKo Indonesia's franchise program. Built fast and mobile-first with an interactive ROI calculator for prospective partners.",
    cardStack: 'Astro.js · Tailwind CSS · Cloudflare Pages',
    lede: 'A marketing landing page for MatchaKo Indonesia — a matcha-based F&B franchise brand. Built to convert prospective franchise partners with a clean, fast, and informative layout.',
    heroImage: mk_Hero,
    link: 'https://matchakoofficial.com',
    myRole: 'Fullstack Developer',
    timeline: '7 weeks',
    techStack: 'Astro.js · Tailwind CSS · Cloudflare Pages',
    challenge:
      "How might we design a landing page that clearly communicates MatchaKo's franchise value proposition and converts visitors into serious franchise inquiries?",
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
    gallery: [
      { src: mk_Hero, caption: 'hero section & grid layout' },
      { src: mk_Menu, caption: 'our menu section' },
      { src: mk_Paket, caption: 'franchise package overview' },
      { src: mk_ROI, caption: 'ROI calculator for partners' },
      { src: mk_Community, caption: 'community & testimonials' },
      { src: mk_Detail, caption: 'franchise package detail' },
    ],
  },
  {
    slug: 'spacerent-btp-v2',
    title: 'Spacerent BTP v2',
    year: '2025',
    type: 'Full-Stack',
    cardDesc:
      'Mobile-first room & equipment reservation platform for Bandung Techno Park. Rebuilt from scratch with a focus on speed, accessibility, and conflict-free scheduling.',
    cardStack: 'Laravel · Vue.js · InertiaJS · PostgreSQL · Docker',
    lede: 'Same fast booking—now smoother. Spacerent BTP v2 brings a mobile-first UI, clearer navigation, and a single inline booking flow with availability & conflict tips. Lighter components, skeleton loading, and smart prefetch keep it snappy even at peak—without changing how teams work.',
    heroImage: v2_Hero,
    myRole: 'Full-Stack Developer',
    timeline: '4 months',
    techStack: 'Laravel · VueJs · InertiaJs · PostgreSQL · Docker · Nginx',
    challenge:
      'How might we redesign Spacerent for BTP so teams can book rooms & equipment in seconds on <em>any</em> device—without adding cognitive load—and still hit tight performance budgets, especially on mobile?',
    context:
      'Spacerent v1 was reliable but desktop-first. On phones, calendars and filters felt cramped, and peak-time loads slowed key actions. The brief: modernize the UI, simplify the booking flow, and deliver fast perceived performance on mobile and kiosks.',
    discovery: [
      '<strong>One-flow booking:</strong> inline availability + conflict tips to cut back-and-forth.',
      '<strong>Thumb-reach first:</strong> bottom action bar, larger tap targets, sticky "Review &amp; Book."',
      '<strong>Perceived speed:</strong> optimistic updates, skeletons, and prefetch for likely next screens.',
      '<strong>Information architecture:</strong> clearer filters, scannable room/equipment cards, useful empty states.',
      '<strong>Error handling:</strong> inline validation, friendly copy, and undo for small actions.',
      '<strong>Accessibility:</strong> sane focus order, landmarks, reduced-motion fallbacks, stronger contrast.',
    ],
    summary:
      "We shipped a mobile-first, accessible UI that keeps bookings quick and feels faster under load. Clear IA, lighter components, and perceived-speed patterns reduced taps and wait time—cutting errors and support pings while keeping v1's efficiency.",
    gallery: [
      { src: v2_ListRuangan, caption: 'rooms list & filters' },
      { src: v2_DetailRuangan, caption: 'room detail & gallery' },
      { src: v2_ListPengajuan, caption: 'rental requests status' },
      { src: v2_DashboardAdmin, caption: 'admin dashboard (occupancy calendar)' },
      { src: v2_Manajemen, caption: 'room management (capacity & status & CRUD)' },
      { src: v2_Profile, caption: 'profile & account settings' },
      { src: v2_mDashboard, caption: 'tenant dashboard (mobile)' },
      { src: v2_mListRuangan, caption: 'rooms list (mobile)' },
      { src: v2_mDetailRuangan, caption: 'room detail (mobile)' },
    ],
  },
  {
    slug: 'iot-analytics-platform',
    title: 'IoT Analytics Platform',
    year: '2024',
    type: 'Backend',
    cardDesc:
      'Real-time telemetry ingestion and analytics dashboard for Arcadia Flora Tech. Connects field sensors to the cloud with alerting and role-based insights.',
    cardStack: 'Node.js · MQTT · PostgreSQL · Grafana · Docker',
    lede: 'An IoT integration & analytics platform for Arcadia Flora Tech, connecting field devices to the cloud with secure telemetry ingestion and real-time dashboards. Device management, alerting, and role-based insights turn sensor data into decisions.',
    heroImage: iot_Hero,
    myRole: 'Back-end Developer',
    timeline: '5 months',
    techStack: 'Node.js · RabbitMQ · Laravel · VueJs · Redis · PostgreSQL · Docker · Nginx',
    challenge:
      'How might we help rose farmers securely ingest IoT sensor data (soil moisture, temperature, humidity, EC/pH) over patchy connectivity, normalize time-series streams, and deliver real-time dashboards & alerts—while keeping device setup, role-based access, and audits simple for on-farm teams?',
    context:
      'Rose farmers were juggling soil-moisture, temp/humidity, and EC/pH sensors across multiple houses—with spotty connectivity and zero single source of truth. They needed a secure, simple way to onboard devices, see live crop conditions by zone, and act fast on irrigation/ventilation without wrestling spreadsheets.',
    discovery: [
      '<strong>Connectivity is fickle:</strong> 3G/4G and Wi-Fi dropouts are common → buffer data at the edge and backfill when online.',
      '<strong>Messy payloads:</strong> mixed LoRa/Modbus devices with different units/intervals → normalize to a clean time-series schema.',
      '<strong>Trust the data:</strong> handle clock skew, duplicates, and calibration drift; log every transform for audits.',
      '<strong>What growers watch:</strong> soil moisture %, VPD, temp/humidity trends, EC/pH, irrigation events, and anomalies by greenhouse zone.',
      "<strong>Actionable alerts:</strong> rules per cultivar & growth stage; quiet hours; SMS/WhatsApp fallback when apps aren't open.",
      '<strong>People, not just devices:</strong> owner/agronomist/field worker roles, simple provisioning (QR), and clear activity trails.',
    ],
    summary:
      'We built a secure device-to-cloud pipeline with offline buffering and automatic backfill, normalized all sensor streams into one timeline, and surfaced zone-based dashboards with alert rules growers can tune. Provisioning is QR-simple, access is role-based, and every change is audited—turning raw telemetry into timely irrigation and climate decisions that help keep roses healthy.',
    gallery: [
      { src: iot_Login, caption: 'login view' },
      { src: iot_Dashboard, caption: 'overview dashboard' },
      { src: iot_Analytics, caption: 'device sensor analytics' },
      { src: iot_QR, caption: 'QR device onboarding' },
      { src: iot_Alat, caption: 'devices list' },
      { src: iot_DetailAlat, caption: 'device detail & telemetry' },
    ],
  },
  {
    slug: 'pos-website',
    title: 'Point-of-Sale Website',
    year: '2024',
    type: 'Full-Stack',
    cardDesc:
      'Web-based POS for cafés and retail. Fast checkout, real-time inventory sync, receipt printing, and an offline-friendly workflow.',
    cardStack: 'Laravel · Vue.js · MySQL · Redis',
    lede: 'A web-based Point-of-Sale platform for cafés and retail, built for fast checkout, real-time inventory sync, and receipt printing. Role-based access, daily reports, and an offline-friendly workflow included.',
    heroImage: pos_Hero,
    myRole: 'Full-Stack Developer',
    timeline: '5 weeks',
    techStack: 'Laravel · VueJs · MySQL · Docker · Caddy',
    challenge:
      'How might we let cafés and small retailers ring up orders in seconds—even on flaky networks—while keeping inventory accurate across multiple registers, printing reliable receipts, and giving managers clear, role-based controls and end-of-day reports?',
    context:
      'Independent cafés and small retailers were juggling slow, brittle POS apps, spotty Wi-Fi, and thermal printers that loved to misbehave. Staff turnover was high, so training needed to be dead simple. Managers wanted real-time numbers and role-based controls without babysitting the system.',
    discovery: [
      '<strong>Speed wins:</strong> keyboard hotkeys, barcode scan → auto-add, quick modifiers, and split payments.',
      "<strong>Works offline or it doesn't work:</strong> queue orders locally, reconcile in the background; never block checkout.",
      '<strong>Inventory pain:</strong> handle units vs. recipes, auto-deduct ingredients, clean returns/voids.',
      '<strong>Receipts are still a thing:</strong> ESC/POS thermal printing and cash-drawer triggers.',
      '<strong>Roles & audits:</strong> cashier / supervisor / manager with audit trails and Z/X reports.',
      '<strong>End-of-day:</strong> one-tap close with cash count, variance, and CSV/PDF exports.',
    ],
    summary:
      'We shipped a web-based POS with <em>keyboard-first checkout</em>, <em>offline-first sync</em>, <em>thermal receipts</em>, and <em>role-based reporting</em>. Training dropped to minutes, rush-hour checkouts stayed fast even with flaky Wi-Fi, and managers finally trusted the numbers.',
    gallery: [
      { src: pos_Login, caption: 'different login role' },
      { src: pos_Cashier, caption: 'cashier view' },
      { src: pos_Inventory, caption: 'inventory management' },
      { src: pos_Profile, caption: 'user profile & roles' },
      { src: pos_Receipt, caption: 'receipt format (preview)' },
      { src: pos_Peripheral, caption: 'peripherals setup (printer, drawer, scanner)' },
    ],
  },
  {
    slug: 'spacerent-btp-v1',
    title: 'Spacerent BTP v1',
    year: '2024',
    type: 'Full-Stack',
    cardDesc:
      'A room & equipment reservation platform for Bandung Techno Park, designed for fast, conflict-free scheduling with role-based access and clear audit trails.',
    cardStack: 'Laravel · Vue.js · InertiaJS · PostgreSQL',
    lede: 'A room & equipment reservation platform for Bandung Techno Park, designed for fast, conflict-free scheduling with role-based access and clear audit trails.',
    heroImage: v1_Hero,
    link: 'https://spacerentbtp.com',
    myRole: 'Back-end Developer',
    timeline: '6 months',
    techStack: 'Laravel · Bootstrap · MySQL',
    challenge:
      'How might we let Bandung Techno Park teams and tenants reserve rooms & equipment in seconds—across multiple buildings—while preventing double-bookings, streamlining approvals and check-in/out, and giving admins clear, role-based controls with audit trails and reports?',
    context:
      'Before v1, bookings lived in spreadsheets and chat threads. Approvals were manual, clashes were common, and there was no single source of truth for who booked what, when, and why—especially across multiple buildings and shared equipment.',
    discovery: [
      '<strong>Availability first:</strong> fast search by date, time, capacity, building, and equipment.',
      '<strong>Conflict engine:</strong> hard/soft rules for overlapping slots, setup/teardown buffers, blackout dates.',
      '<strong>Roles & workflow:</strong> tenant → approver → operator → admin, with notifications and SLAs.',
      '<strong>Check-in/out:</strong> QR-based attendance plus late/no-show handling.',
      '<strong>Ops visibility:</strong> calendar views, room/equipment utilization, exportable reports.',
      '<strong>Governance:</strong> immutable audit log for requests, changes, and approvals.',
    ],
    summary:
      'Spacerent BTP v1 unified room & equipment reservations into a single, conflict-aware flow with clear roles and auditability. Approvals got faster, double-bookings dropped, and admins finally had live calendars and reports to run the day-to-day without spreadsheet chaos.',
    gallery: [
      { src: v1_DetailRuangan, caption: 'room detail (photos & specs)' },
      { src: v1_ListPengajuan, caption: 'rental requests status' },
      { src: v1_Modal, caption: 'quick detail from calendar event' },
      { src: v1_Okupansi, caption: 'occupancy report' },
      { src: v1_Manajemen, caption: 'rooms management' },
      { src: v1_StatusAdmin, caption: 'requests status & actions' },
    ],
  },
];
