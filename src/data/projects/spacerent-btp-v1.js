import BTP from '@/assets/ProjectDetail/01/BTP.webp'
import DetailRuangan from '@/assets/ProjectDetail/01/DetailRuangan.webp'
import ListPengajuan from '@/assets/ProjectDetail/01/ListPengajuan.webp'
import ModalKalender from '@/assets/ProjectDetail/01/ModalKalender.webp'
import Okupansi from '@/assets/ProjectDetail/01/Okupansi.webp'
import RuanganManajemen from '@/assets/ProjectDetail/01/RuanganManajemen.webp'
import StatusAdmin from '@/assets/ProjectDetail/01/StatusAdmin.webp'

export default {
  title: 'Spacerent BTP v1',
  lede: 'A room & equipment reservation platform for Bandung Techno Park, designed for fast, conflict-free scheduling with role-based access and clear audit trails.',
  heroImage: BTP,
  link: 'https://spacerentbtp.com',
  challenge: 'How might we let Bandung Techno Park teams and tenants reserve rooms & equipment in seconds—across multiple buildings—while preventing double-bookings, streamlining approvals and check-in/out, and giving admins clear, role-based controls with audit trails and reports?',
  myRole: 'Back-end Developer',
  year: '2024',
  timeline: '6 months',
  techStack: 'Laravel · Bootstrap · MySQL',
  flowScreens: [
    { src: DetailRuangan, caption: 'room detail (photos & specs)' },
    { src: ListPengajuan, caption: 'rental requests status' },
    { src: ModalKalender, caption: 'quick detail from calender event' },
    { src: Okupansi, caption: 'occupancy report' },
    { src: RuanganManajemen, caption: 'rooms management' },
    { src: StatusAdmin, caption: 'requests status & actions' },
  ],
  context: 'Before v1, bookings lived in spreadsheets and chat threads. Approvals were manual, clashes were common, and there was no single source of truth for who booked what, when, and why—especially across multiple buildings and shared equipment.',
  discovery: [
    '<strong>Availability first:</strong> fast search by date, time, capacity, building, and equipment.',
    '<strong>Conflict engine:</strong> hard/soft rules for overlapping slots, setup/teardown buffers, blackout dates.',
    '<strong>Roles & workflow:</strong> tenant → approver → operator → admin, with notifications and SLAs.',
    '<strong>Check-in/out:</strong> QR-based attendance plus late/no-show handling.',
    '<strong>Ops visibility:</strong> calendar views, room/equipment utilization, exportable reports.',
    '<strong>Governance:</strong> immutable audit log for requests, changes, and approvals.',
  ],
  summary: 'Spacerent BTP v1 unified room & equipment reservations into a single, conflict-aware flow with clear roles and auditability. Approvals got faster, double-bookings dropped, and admins finally had live calendars and reports to run the day-to-day without spreadsheet chaos.',
}
