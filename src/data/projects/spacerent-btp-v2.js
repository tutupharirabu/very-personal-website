import BTPv2 from '@/assets/ProjectDetail/04/BTPv2.webp'
import ListRuangan from '@/assets/ProjectDetail/04/ListRuangan.webp'
import DetailRuangan from '@/assets/ProjectDetail/04/DetailRuangan.webp'
import ListPengajuan from '@/assets/ProjectDetail/04/ListPengajuan.webp'
import DashboardAdmin from '@/assets/ProjectDetail/04/DashboardAdmin.webp'
import ManajemenRuangan from '@/assets/ProjectDetail/04/ManajemenRuangan.webp'
import ProfileSetting from '@/assets/ProjectDetail/04/ProfileSetting.webp'
import DashboardPenyewaMobile from '@/assets/ProjectDetail/04/Mobile/DashboardPenyewa.webp'
import ListRuanganMobile from '@/assets/ProjectDetail/04/Mobile/ListRuangan.webp'
import DetailRuanganMobile from '@/assets/ProjectDetail/04/Mobile/DetailRuangan.webp'

export default {
  title: 'Spacerent BTP v2',
  lede: 'Same fast booking—now smoother. Spacerent BTP v2 brings a mobile-first UI, clearer navigation, and a single inline booking flow with availability & conflict tips. Lighter components, skeleton loading, and smart prefetch keep it snappy even at peak—without changing how teams work.',
  heroImage: BTPv2,
  challenge: 'How might we redesign Spacerent for BTP so teams can book rooms & equipment in seconds on <em>any</em> device—without adding cognitive load—and still hit tight performance budgets, especially on mobile?',
  myRole: 'Full-Stack Developer',
  year: '2025',
  timeline: '4 months',
  techStack: 'Laravel · VueJs · InertiaJs · PostgreSQL · Docker · Nginx',
  flowScreens: [
    { src: ListRuangan, caption: 'rooms list & filters' },
    { src: DetailRuangan, caption: 'room detail & gallery' },
    { src: ListPengajuan, caption: 'rental requests status' },
    { src: DashboardAdmin, caption: 'admin dashboard (occupancy calendar)' },
    { src: ManajemenRuangan, caption: 'room management (capacity & status & CRUD)' },
    { src: ProfileSetting, caption: 'profile & account settings' },
  ],
  mobileScreens: [
    { src: DashboardPenyewaMobile, caption: 'tenant dashboard (mobile)' },
    { src: ListRuanganMobile, caption: 'rooms list (mobile)' },
    { src: DetailRuanganMobile, caption: 'room detail (mobile)' },
  ],
  context: 'Spacerent v1 was reliable but desktop-first. On phones, calendars and filters felt cramped, and peak-time loads slowed key actions. The brief: modernize the UI, simplify the booking flow, and deliver fast perceived performance on mobile and kiosks.',
  discovery: [
    '<strong>One-flow booking:</strong> inline availability + conflict tips to cut back-and-forth.',
    '<strong>Thumb-reach first:</strong> bottom action bar, larger tap targets, sticky "Review &amp; Book."',
    '<strong>Perceived speed:</strong> optimistic updates, skeletons, and prefetch for likely next screens.',
    '<strong>Information architecture:</strong> clearer filters, scannable room/equipment cards, useful empty states.',
    '<strong>Error handling:</strong> inline validation, friendly copy, and undo for small actions.',
    '<strong>Accessibility:</strong> sane focus order, landmarks, reduced-motion fallbacks, stronger contrast.',
  ],
  summary: 'We shipped a mobile-first, accessible UI that keeps bookings quick and feels faster under load. Clear IA, lighter components, and perceived-speed patterns reduced taps and wait time—cutting errors and support pings while keeping v1\'s efficiency.',
}
