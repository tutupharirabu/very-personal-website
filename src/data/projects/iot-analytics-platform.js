import Arcadia from '@/assets/ProjectDetail/03/Arcadia.webp'
import Login from '@/assets/ProjectDetail/03/Login.webp'
import Dashboard from '@/assets/ProjectDetail/03/Dashboard.webp'
import Analytics from '@/assets/ProjectDetail/03/Analytics.webp'
import QR from '@/assets/ProjectDetail/03/QR.webp'
import Alat from '@/assets/ProjectDetail/03/Alat.webp'
import DetailAlat from '@/assets/ProjectDetail/03/DetailAlat.webp'

export default {
  title: 'Internet-of-Things (IoT) Analytics Platform',
  lede: 'An IoT integration & analytics platform for Arcadia Flora Tech, connecting field devices to the cloud with secure telemetry ingestion and real-time dashboards. Device management, alerting, and role-based insights turn sensor data into decisions.',
  heroImage: Arcadia,
  challenge: 'How might we help rose farmers securely ingest IoT sensor data (soil moisture, temperature, humidity, EC/pH) over patchy connectivity, normalize time-series streams, and deliver real-time dashboards & alerts—while keeping device setup, role-based access, and audits simple for on-farm teams?',
  myRole: 'Back-end Developer',
  year: '2024',
  timeline: '5 months',
  techStack: 'Node.js · RabbitMQ · Laravel · VueJs · Redis · PostgreSQL · Docker · Nginx',
  flowScreens: [
    { src: Login, caption: 'login view' },
    { src: Dashboard, caption: 'overview dashboard' },
    { src: Analytics, caption: 'device sensor analytics' },
    { src: QR, caption: 'QR device onboarding' },
    { src: Alat, caption: 'devices list' },
    { src: DetailAlat, caption: 'device detail & telemetry' },
  ],
  context: 'Rose farmers were juggling soil-moisture, temp/humidity, and EC/pH sensors across multiple houses—with spotty connectivity and zero single source of truth. They needed a secure, simple way to onboard devices, see live crop conditions by zone, and act fast on irrigation/ventilation without wrestling spreadsheets.',
  discovery: [
    '<strong>Connectivity is fickle:</strong> 3G/4G and Wi-Fi dropouts are common → buffer data at the edge and backfill when online.',
    '<strong>Messy payloads:</strong> mixed LoRa/Modbus devices with different units/intervals → normalize to a clean time-series schema.',
    '<strong>Trust the data:</strong> handle clock skew, duplicates, and calibration drift; log every transform for audits.',
    '<strong>What growers watch:</strong> soil moisture %, VPD, temp/humidity trends, EC/pH, irrigation events, and anomalies by greenhouse zone.',
    '<strong>Actionable alerts:</strong> rules per cultivar & growth stage; quiet hours; SMS/WhatsApp fallback when apps aren\'t open.',
    '<strong>People, not just devices:</strong> owner/agronomist/field worker roles, simple provisioning (QR), and clear activity trails.',
  ],
  summary: 'We built a secure device-to-cloud pipeline with offline buffering and automatic backfill, normalized all sensor streams into one timeline, and surfaced zone-based dashboards with alert rules growers can tune. Provisioning is QR-simple, access is role-based, and every change is audited—turning raw telemetry into timely irrigation and climate decisions that help keep roses healthy.',
}
