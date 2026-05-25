<template>
  <main
    class="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_bottom,_rgba(230,233,242,0.8),_#f6f6f6_45%,_white_100%)] px-6 py-12 text-slate-900 sm:px-12 lg:px-24"
  >
    <div class="hero-background" aria-hidden="true">
      <div class="hero-background__texture"></div>
      <div class="hero-background__cloud">
        <div
          v-for="blob in blobs"
          :key="blob.id"
          class="hero-background__shape"
          :style="blob.style"
        ></div>
      </div>
    </div>

    <div
      class="relative mx-auto grid w-full gap-12 font-serif md:grid-cols-2 md:items-stretch md:gap-16 md:min-h-[calc(100dvh-8rem)] lg:gap-20"
    >
      <section class="relative z-10 flex flex-col gap-8 lg:gap-10">
        <div
          class="relative max-w-lg rounded-[2.5rem] bg-neutral-900/95 px-8 py-8 font-mono text-[0.9rem] leading-relaxed text-slate-100 shadow-xl shadow-slate-900/25"
        >
          <span
            class="absolute -top-6 left-8 inline-flex items-center justify-center rounded-full border border-slate-950 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-900 shadow-[0_14px_18px_rgba(15,23,42,0.18)]"
          >
            2026 Update
          </span>
          <strong>Degree unlocked</strong>, officially and enthusiastically in 2026. <br /><br />
          <strong>Left the management side of things</strong> to follow what actually excites me.
          Currently going deeper into <strong>cybersecurity</strong>, following curiosity and gut
          feeling, one rabbit hole at a time. Also doing some <strong>very serious R&D</strong> with
          <strong>"My Sassy Boss 😇"</strong> on what the next chapter looks like, either
          <strong>business or life</strong>, probably both. <br /><br />
          <strong>Currently: figuring it out.</strong> But make it deliberate.
        </div>

        <h1
          class="flex flex-col gap-5 text-3xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-4xl lg:text-5xl"
        >
          <section>
            <NameText />
          </section>
        </h1>

        <div
          class="flex flex-col gap-5 font-mono text-base leading-8 text-slate-600 md:text-[1.05rem] lg:text-[1.1rem]"
        >
          <p>
            I'm diving deep into becoming a <strong>System Analyst</strong> and exploring
            <strong>cybersecurity</strong>, learning how systems think, how they break, and how to
            keep them safe. DevOps is still part of my world, but the direction I'm heading is
            <strong>DevSecOps</strong>, where security isn't an afterthought, it's built into the
            pipeline from day one.
          </p>
          <p>
            Being a <strong>System Analyst</strong> is something I'm actively learning and growing
            into, understanding how to read business needs, map them into systems, and make sure the
            solution actually fits the people using it.
          </p>
          <p>
            Outside of tech, I run <strong>Arunika Gaming Shop</strong>, a digital game account
            store I've been building since 2021, and still have
            <strong>Matchako.dalamkampus</strong> close to heart, a matcha thing I helped build from
            the ground up. Different worlds, same mindset. <strong>Curiosity</strong>,
            <strong>systems thinking</strong>, and a bias for getting things done.
          </p>
        </div>

        <div
          class="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/60 p-7 backdrop-blur font-mono text-base"
        >
          <p class="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">Toolbox</p>
          <p
            v-for="line in toolboxLines"
            :key="line"
            class="leading-7 text-slate-600"
            style="padding-left: 1em; text-indent: -1em"
          >
            {{ line }}
          </p>
        </div>
      </section>

      <section
        class="relative z-10 flex min-h-[20rem] w-full items-stretch justify-center overflow-hidden md:min-h-0 md:self-stretch"
        aria-hidden="true"
      >
        <WaterDropGrid class="relative z-10 flex-1" :mobile-max-cols="12" :mobile-max-rows="8" />
      </section>
    </div>

    <section>
      <WorkExperienceText />
    </section>

    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div class="timeline-middle">
          <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <circle cx="10" cy="10" r="8" />
          </svg>
        </div>
        <div class="timeline-start mb-10 md:text-end font-mono">
          <time class="font-mono italic">March 2024 - September 2024</time>
          <div class="text-lg font-black lg:text-xl">
            Backend Developer Intern at Bandung Techno Park
          </div>
          <br />
          Built and maintained the backend for an innovative web-based equipment lending and
          room-reservation system. Designed scalable APIs, optimized database operations, and
          ensured security & data-protection compliance, supporting BTP’s mission to foster
          technological growth and collaboration.
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div class="timeline-middle">
          <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <circle cx="10" cy="10" r="8" />
          </svg>
        </div>
        <div class="timeline-end mb-10 font-mono">
          <time class="font-mono italic">September 2024 - February 2025</time>
          <div class="text-lg font-black lg:text-xl">
            Co-Founder & Backend Developer at Arcadia Flora Tech
          </div>
          <br />
          Arcadia Flora Tech is a digital supply-chain startup incubated by Bandung Techno Park,
          built to connect upstream flower farmers with downstream florists through a tech-enabled
          platform. As a co-founder, I led the backend development and MVP launch—covering system
          architecture, database design, and early market validation. Within months, we secured
          initial seed funding and onboarded two early-adopter customers, proving early demand for a
          more efficient and transparent floral supply chain.
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div class="timeline-middle">
          <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <circle cx="10" cy="10" r="8" />
          </svg>
        </div>
        <div class="timeline-start mb-10 md:text-end font-mono">
          <time class="font-mono italic">January 2026 - April 2026</time>
          <div class="text-lg font-black lg:text-xl">IT System Analyst at MatchaKo Indonesia</div>
          <br />
          Analyzing business processes and translating operational needs into structured IT
          solutions for Matchako's growing F&B operations. Working closely with the internal team to
          identify pain points, map out system requirements, and ensure the technology in place
          actually supports how the business runs day to day.
        </div>
      </li>
    </ul>

    <div class="divider divider-neutral" v-if="mounted"></div>

    <section>
      <MouseImageTrail v-if="mounted" :images="imgs" :renderImageBuffer="50" :rotationRange="20">
        <section class="grid h-[32rem] w-full place-content-center sm:h-[42rem]">
          <p class="flex items-center gap-2 text-2xl font-bold uppercase text-black">
            <span class="font-mono">{{ isTouch ? 'Tap me' : 'Hover me' }}</span>
          </p>
        </section>
      </MouseImageTrail>
    </section>

    <div class="divider divider-neutral"></div>

    <section>
      <BusinessExperienceText />
    </section>

    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div class="timeline-middle">
          <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <circle cx="10" cy="10" r="8" />
          </svg>
        </div>
        <div class="timeline-start mb-10 md:text-end font-mono">
          <time class="font-mono italic">April 2021 - Now</time>
          <div class="text-lg font-black lg:text-xl">Owner of Arunika Gaming Shop</div>
          <br />
          Founded and scaled a digital game account marketplace, starting with
          <strong>Genshin Impact</strong> and expanding to multiple popular titles. Built a secure
          buying/selling platform with 4,500+ completed transactions, strong buyer-protection
          policies, and streamlined operations from stock management to customer support, while
          consistently improving trust and community engagement.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div class="timeline-middle">
          <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <circle cx="10" cy="10" r="8" />
          </svg>
        </div>
        <div class="timeline-end mb-10 font-mono">
          <time class="font-mono italic">June 2025 - August 2025</time>
          <div class="text-lg font-black lg:text-xl">Operational Manager at Malewa Coffee</div>
          <br />
          Managed day-to-day operations of a street coffee cart, standardized drink SOPs, optimized
          inventory and supplier flow, and kept the team running smoothly to deliver consistent
          quality on every cup.
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div class="timeline-middle">
          <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <circle cx="10" cy="10" r="8" />
          </svg>
        </div>
        <div class="timeline-start mb-10 md:text-end font-mono">
          <time class="font-mono italic">August 2025 - December 2025</time>
          <div class="text-lg font-black lg:text-xl">Business Operations at MatchaKo Indonesia</div>
          <br />
          Built the operational foundation for MatchaKo Indonesia from the ground up. Drafted SOPs,
          stock cards, and delivery note templates, handled daily operational activities, documented
          tools and raw materials, trained franchise partners, and coordinated field mobilization
          preparation.
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div class="timeline-middle">
          <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <circle cx="10" cy="10" r="8" />
          </svg>
        </div>
        <div class="timeline-end mb-10 font-mono">
          <time class="font-mono italic">November 2025 - Now</time>
          <div class="text-lg font-black lg:text-xl">Co-Owner of matchako.dalamkampus</div>
          <br />
          One of three co-owners behind matchako.dalamkampus, a Matchako franchise partner. I
          contribute to shaping the strategic direction of the business, though every major decision
          goes through all three of us before it moves forward. I also handle all communication and
          media for the outlet.
        </div>
      </li>
    </ul>

    <div class="divider divider-neutral"></div>

    <!-- ===== SELECTED PROJECTS ===== -->
    <section>
      <SelectedProjectsText />
    </section>

    <section class="relative z-10 px-6 pb-10 sm:px-12 lg:px-24">
      <div class="mb-6 flex justify-end">
        <RouterLink
          to="/projects"
          class="font-mono text-sm text-slate-500 underline underline-offset-4 hover:text-slate-900 transition-colors"
        >
          View all
        </RouterLink>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(p, index) in [...selectedProjects].sort((a, b) => b.year - a.year)"
          :key="p.title"
          :class="{
            'group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/40 backdrop-blur p-6 transition-shadow hover:shadow-lg cursor-pointer': true,
            'lg:col-span-2':
              index === 0 && [...selectedProjects].sort((a, b) => b.year - a.year).length % 2 === 1,
          }"
          @click="goToProject(p.title)"
        >
          <div class="flex items-start justify-between">
            <span class="font-mono text-xs uppercase tracking-widest text-slate-400">{{
              p.year
            }}</span>
            <span
              class="rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[0.7rem] text-slate-500"
              >{{ p.type }}</span
            >
          </div>
          <h3 class="font-serif text-xl font-bold text-slate-900 leading-snug">{{ p.title }}</h3>
          <p class="font-mono text-sm leading-6 text-slate-600 flex-1">{{ p.desc }}</p>
          <p class="font-mono text-[0.72rem] text-slate-400">{{ p.stack }}</p>
        </div>
      </div>
    </section>

    <div class="divider divider-neutral"></div>

    <!-- ===== CERTIFIED COMPETENCIES ===== -->
    <section>
      <CertifiedCompetenciesText />
    </section>

    <section class="relative z-10 mx-auto max-w-5xl px-6 pb-10">
      <div
        :class="`grid gap-4 sm:grid-cols-2 lg:grid-cols-${certifications.length >= 3 ? '3' : certifications.length}`"
      >
        <div
          v-for="cert in [...certifications].sort((a, b) => b.year - a.year)"
          :key="cert.name"
          class="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/40 backdrop-blur p-5 cursor-pointer hover:bg-white/60 transition-colors"
          @click="openCertModal(cert)"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 font-mono text-lg font-bold text-slate-500"
            >
              {{ cert.icon }}
            </div>
            <div>
              <p class="font-mono text-[0.7rem] uppercase tracking-widest text-slate-400">
                {{ cert.issuer }}
              </p>
              <p class="font-mono text-xs text-slate-400">{{ cert.year }}</p>
            </div>
          </div>
          <p class="font-serif text-base font-semibold text-slate-900 leading-snug">
            {{ cert.name }}
          </p>
        </div>
      </div>
    </section>

    <div class="divider divider-neutral"></div>

    <section>
      <ReadyToBuildText />
    </section>

    <section class="relative flex justify-center md:justify-end">
      <RevealLinks class="font-serif" />
    </section>

    <!-- Modal untuk sertifikasi -->
    <div
      v-if="showCertModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#f6f4f1]/80 backdrop-blur-sm"
    >
      <div
        class="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white/90 backdrop-blur rounded-[2rem] p-8 border border-slate-200 font-serif"
      >
        <button
          @click="closeCertModal()"
          class="absolute top-6 right-6 text-slate-500 hover:text-slate-900 text-3xl font-bold"
        >
          ×
        </button>
        <div v-if="selectedCert" class="flex flex-col gap-6">
          <div class="text-center pb-4 border-b border-slate-200">
            <h3 class="text-2xl font-bold text-slate-900">{{ selectedCert.name }}</h3>
            <p class="font-mono text-slate-600 mt-2">
              Issued by {{ selectedCert.issuer }} • {{ selectedCert.year }}
            </p>
            <div
              v-if="selectedCert.details"
              class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm"
            >
              <div v-if="selectedCert.details.certificateId" class="bg-slate-50/70 p-3 rounded-lg">
                <p class="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  Certificate ID
                </p>
                <p class="font-medium">{{ selectedCert.details.certificateId }}</p>
              </div>
              <div v-if="selectedCert.details.field" class="bg-slate-50/70 p-3 rounded-lg">
                <p class="font-mono text-xs text-slate-500 uppercase tracking-wider">Field</p>
                <p class="font-medium">{{ selectedCert.details.field }}</p>
              </div>
              <div
                v-if="selectedCert.details.certificateNumber"
                class="bg-slate-50/70 p-3 rounded-lg"
              >
                <p class="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  Certificate Number
                </p>
                <p class="font-medium">{{ selectedCert.details.certificateNumber }}</p>
              </div>
              <div
                v-if="selectedCert.details.registrationNumber"
                class="bg-slate-50/70 p-3 rounded-lg"
              >
                <p class="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  Registration Number
                </p>
                <p class="font-medium">{{ selectedCert.details.registrationNumber }}</p>
              </div>
              <div
                v-if="selectedCert.details.issuingBody"
                class="md:col-span-2 bg-slate-50/70 p-3 rounded-lg"
              >
                <p class="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  Issuing Body
                </p>
                <p class="font-medium">{{ selectedCert.details.issuingBody }}</p>
              </div>
              <div
                v-if="selectedCert.details.validity"
                class="md:col-span-2 bg-slate-50/70 p-3 rounded-lg"
              >
                <p class="font-mono text-xs text-slate-500 uppercase tracking-wider">Validity</p>
                <p class="font-medium">{{ selectedCert.details.validity }}</p>
              </div>
            </div>
          </div>
          <div
            class="flex justify-center items-center bg-slate-50/70 rounded-2xl p-6 border border-slate-200"
          >
            <img
              :src="selectedCert.file"
              :alt="selectedCert.name"
              class="max-w-full max-h-[60vh] object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import WaterDropGrid from '@/components/SpecialEffect/WaterDropGrid.vue'

import NameText from '@/components/Text/NameText.vue'
import ReadyToBuildText from '@/components/Text/ReadyToBuildText.vue'
import WorkExperienceText from '@/components/Text/WorkExperienceText.vue'
import BusinessExperienceText from '@/components/Text/BusinessExperienceText.vue'
import SelectedProjectsText from '@/components/Text/SelectedProjectsText.vue'
import CertifiedCompetenciesText from '@/components/Text/CertifiedCompetenciesText.vue'

import RevealLinks from '@/components/RevealLink/RevealLinks.vue'
import MouseImageTrail from '@/components/SpecialEffect/MouseImageTrail.vue'

const imgs = Array.from(
  { length: 16 },
  (_, i) => new URL(`/src/assets/ManyImage/${i + 1}.webp`, import.meta.url).href,
)

import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

defineOptions({
  name: 'HomePage',
})

const toolboxLines = [
  '• Frontend: Vue.js · Inertia.js · Alpine.js · Preact.js · Astro.js',
  '• Backend: Laravel (PHP) · Node.js · Adonis.js',
  '• Data: PostgreSQL · MySQL · Redis (cache/queue)',
  '• Messaging/IoT: MQTT · RabbitMQ',
  '• Infra: Docker · Nginx · Linux · CI/CD (Jenkins)',
  '• Cloud Infra: GCP (Cloud Run, Cloud SQL) · AWS (ECS) · Cloudflare · Terraform (IaC) · Dalang.io',
  '• Observability: Prometheus · Grafana · Umami · Uptime Kuma',
]

const selectedProjects = [
  {
    title: 'MatchaKo Indonesia Landing Page',
    year: '2026',
    type: 'Frontend',
    desc: "A conversion-focused landing page for MatchaKo Indonesia's franchise program. Built fast and mobile-first with an interactive ROI calculator for prospective partners.",
    stack: 'Astro.js · Tailwind CSS · Cloudflare Pages',
    slug: 'matchako-landing-page',
  },
  {
    title: 'Spacerent BTP v2',
    year: '2025',
    type: 'Full-Stack',
    desc: 'Mobile-first room & equipment reservation platform for Bandung Techno Park. Rebuilt from scratch with a focus on speed, accessibility, and conflict-free scheduling.',
    stack: 'Laravel · Vue.js · InertiaJS · PostgreSQL · Docker',
    slug: 'spacerent-btp-v2',
  },
  {
    title: 'IoT Analytics Platform',
    year: '2024',
    type: 'Backend',
    desc: 'Real-time telemetry ingestion and analytics dashboard for Arcadia Flora Tech. Connects field sensors to the cloud with alerting and role-based insights.',
    stack: 'Node.js · MQTT · PostgreSQL · Grafana · Docker',
    slug: 'iot-analytics-platform',
  },
  {
    title: 'Point-of-Sale Website',
    year: '2024',
    type: 'Full-Stack',
    desc: 'Web-based POS for cafés and retail. Fast checkout, real-time inventory sync, receipt printing, and an offline-friendly workflow.',
    stack: 'Laravel · Vue.js · MySQL · Redis',
    slug: 'pos-website',
  },
  {
    title: 'Spacerent BTP v1',
    year: '2024',
    type: 'Full-Stack',
    desc: 'A room & equipment reservation platform for Bandung Techno Park, designed for fast, conflict-free scheduling with role-based access and clear audit trails.',
    stack: 'Laravel · Vue.js · InertiaJS · PostgreSQL',
    slug: 'spacerent-btp-v1',
  },
]

const router = useRouter()

// Gunakan langsung selectedProjects dengan pendekatan sorting di template, tapi tetap jaga tahun MatchaKo 2026

const goToProject = (projectTitle) => {
  // Cari project dalam selectedProjects untuk mendapatkan slug
  const project = selectedProjects.find((p) => p.title === projectTitle)
  if (project && project.slug) {
    router.push(`/projects/${project.slug}`)
  } else {
    console.error(`Project dengan judul '${projectTitle}' tidak ditemukan atau tidak memiliki slug`)
  }
}

const certifications = [
  {
    icon: '☁️',
    issuer: 'Alibaba Cloud',
    year: '2024',
    name: 'Alibaba Cloud Certified Associate (ACA) — Developer',
    file: new URL('@/assets/CertifiedCompetencies/Alibaba ACA Sertifikat.webp', import.meta.url)
      .href,
    details: {
      certificateId: 'IACA07240900155896L',
      field: 'Cloud Computing — Developer Track',
      validity: 'Valid until September 2026',
    },
  },
  {
    icon: '🎓',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2025',
    name: 'Junior Web Developer (Pengembang Web Pratama)',
    file: new URL(
      '@/assets/CertifiedCompetencies/Junior Web Developer Certificate - Irfan.webp',
      import.meta.url,
    ).href,
    details: {
      certificateNumber: '62010 2513 4 0011341 2025',
      registrationNumber: 'J.1389.01469.2025',
      issuingBody: 'LSP BPPTIK (Lembaga Sertifikasi Profesi BPPTIK)',
      validity: 'Valid until November 2028',
    },
  },
]

// State untuk modal
const showCertModal = ref(false)
const selectedCert = ref(null)

// Fungsi untuk membuka modal sertifikasi
const openCertModal = (cert) => {
  selectedCert.value = cert
  showCertModal.value = true
}

// Fungsi untuk menutup modal
const closeCertModal = () => {
  showCertModal.value = false
  selectedCert.value = null
}

const isTouch = ref(false)
const mounted = ref(false)

const BLOB_COLORS = [
  '#4D96FF',
  '#6BCB77',
  '#FF5A76',
  '#FFD93D',
  '#A78BFA',
  '#34D399',
  '#FB923C',
  '#F472B6',
  '#60A5FA',
  '#FBBF24',
  '#E879F9',
  '#2DD4BF',
  '#F87171',
  '#818CF8',
]

const rand = (min, max) => Math.random() * (max - min) + min

const blobs = Array.from({ length: Math.floor(rand(10, 16)) }, (_, i) => {
  const color = BLOB_COLORS[Math.floor(Math.random() * BLOB_COLORS.length)]
  const size = `min(${rand(50, 85).toFixed(0)}vmin, ${rand(380, 620).toFixed(0)}px)`
  const duration = `${rand(24, 72).toFixed(0)}s`
  const delay = `${rand(0, -20).toFixed(1)}s`
  const direction = i % 2 === 0 ? 'normal' : 'reverse'
  const anim = i % 2 === 0 ? 'hero-background-circular' : 'hero-background-circular-alt'
  const opacity = rand(0.6, 0.95).toFixed(2)

  return {
    id: i,
    style: {
      background: color,
      width: size,
      height: size,
      opacity,
      animation: `${anim} ${duration} ${delay} linear infinite ${direction}`,
      position: 'absolute',
      top: `${rand(-10, 90).toFixed(0)}%`,
      left: `${rand(-10, 90).toFixed(0)}%`,
    },
  }
})

onMounted(() => {
  isTouch.value =
    (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0
  mounted.value = true
})
</script>

<style scoped>
.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  --blob-radius: clamp(180px, 28vw, 320px);
}

.hero-background__texture {
  position: absolute;
  inset: -15%;
  background-image: url('https://i.imgur.com/PsjPzdO.webp');
  background-size: 220px;
  mix-blend-mode: overlay;
  opacity: 0.35;
}

.hero-background__cloud {
  position: absolute;
  inset: -10%;
}

.hero-background__shape {
  border-radius: 999px;
  filter: blur(110px);
  mix-blend-mode: multiply;
}

@keyframes hero-background-circular {
  0% {
    transform: translate(0, calc(-1 * var(--blob-radius)));
  }

  25% {
    transform: translate(var(--blob-radius), 0);
  }

  50% {
    transform: translate(0, var(--blob-radius));
  }

  75% {
    transform: translate(calc(-1 * var(--blob-radius)), 0);
  }

  100% {
    transform: translate(0, calc(-1 * var(--blob-radius)));
  }
}

@keyframes hero-background-circular-alt {
  0% {
    transform: translate(0, var(--blob-radius));
  }

  25% {
    transform: translate(calc(-1 * var(--blob-radius)), 0);
  }

  50% {
    transform: translate(0, calc(-1 * var(--blob-radius)));
  }

  75% {
    transform: translate(var(--blob-radius), 0);
  }

  100% {
    transform: translate(0, var(--blob-radius));
  }
}

@media (max-width: 768px) {
  .hero-background {
    --blob-radius: clamp(120px, 38vw, 200px);
  }

  .hero-background__shape {
    filter: blur(90px);
  }
}
</style>
