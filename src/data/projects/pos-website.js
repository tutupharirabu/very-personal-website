import Dashboard from '@/assets/ProjectDetail/02/Dashboard.webp'
import Login from '@/assets/ProjectDetail/02/LoginRole.webp'
import Cashier from '@/assets/ProjectDetail/02/Cashier.webp'
import Inventory from '@/assets/ProjectDetail/02/Inventory.webp'
import Profile from '@/assets/ProjectDetail/02/Profile.webp'
import Receipt from '@/assets/ProjectDetail/02/ReceiptFormat.webp'
import Peripheral from '@/assets/ProjectDetail/02/Peripheral.webp'

export default {
  title: 'Point-of-Sales (POS) Website',
  lede: 'A web-based Point-of-Sale platform for cafés and retail, built for fast checkout, real-time inventory sync, and receipt printing. Role-based access, daily reports, and an offline-friendly workflow included.',
  heroImage: Dashboard,
  challenge:
    'How might we let cafés and small retailers ring up orders in seconds—even on flaky networks—while keeping inventory accurate across multiple registers, printing reliable receipts, and giving managers clear, role-based controls and end-of-day reports?',
  myRole: 'Full-Stack Developer',
  year: '2024',
  timeline: '5 weeks',
  techStack: 'Laravel · VueJs · MySQL · Docker · Caddy',
  flowScreens: [
    { src: Login, caption: 'different login role' },
    { src: Cashier, caption: 'cashier view' },
    { src: Inventory, caption: 'inventory management' },
    { src: Profile, caption: 'user profile & roles' },
    { src: Receipt, caption: 'receipt format (preview)' },
    { src: Peripheral, caption: 'peripherals setup (printer, drawer, scanner)' },
  ],
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
}
