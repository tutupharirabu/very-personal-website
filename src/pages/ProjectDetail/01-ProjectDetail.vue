<!-- src/pages/work/SpacerentBTPv1.vue -->
<script setup>
import { RouterLink } from 'vue-router'

import TiltCard from '@/components/Tilt/TiltCard.vue'
import WaterDropGrid from '@/components/SpecialEffect/WaterDropGrid.vue'

import ReadyToBuildText from '@/components/Text/ReadyToBuildText.vue';
import RevealLinks from '@/components/RevealLink/RevealLinks.vue';

import BTP from '@/assets/ProjectDetail/01/BTP.png'
import DetailRuangan from '@/assets/ProjectDetail/01/DetailRuangan.png'
import ListPengajuan from '@/assets/ProjectDetail/01/ListPengajuan.png'
import ModalKalender from '@/assets/ProjectDetail/01/ModalKalender.png'
import Okupansi from '@/assets/ProjectDetail/01/Okupansi.png'
import RuanganManajemen from '@/assets/ProjectDetail/01/RuanganManajemen.png'
import StatusAdmin from '@/assets/ProjectDetail/01/StatusAdmin.png'

import POSWebsite from '@/assets/ProjectDetail/02/Dashboard.png'
import Arcadia from '@/assets/ProjectDetail/03/Arcadia.png'
import BTPv2 from '@/assets/ProjectDetail/04/BTPv2.png'

const more = {
  a: POSWebsite,
  b: Arcadia,
  c: BTPv2,
}

const flowScreens = [
  { src: DetailRuangan, caption: 'room detail (photos & specs)' },
  { src: ListPengajuan, caption: 'rental requests status' },
  { src: ModalKalender, caption: 'quick detail from calender event' },
  { src: Okupansi, caption: 'occupancy report' },
  { src: RuanganManajemen, caption: 'rooms management' },
  { src: StatusAdmin, caption: 'requests status & actions' },
]
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-neutral-50 text-slate-900">
    <!-- soft noise texture -->
    <div class="pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply
             bg-[url('https://i.imgur.com/PsjPzdO.png')] [background-size:220px]"></div>

    <!-- 💫 animated blobs (behind content) -->
    <div class="blobs" aria-hidden="true">
      <div class="blob blob--a"></div>
      <div class="blob blob--b"></div>
      <div class="blob blob--c"></div>
    </div>

    <!-- ===== Hero ===== -->
    <section
      class="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
      <!-- left copy -->
      <div>
        <div class="rounded-[2.5rem] bg-gradient-to-br p-8 sm:p-10 lg:p-12">
          <h1 class="font-serif text-4xl leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            <span class="block">Spacerent BTP v1</span>
          </h1>

          <p class="mt-6 max-w-xl border-t border-neutral pt-6 font-mono text-[1.05rem] leading-7 text-slate-700">
            A room & equipment reservation platform for Bandung Techno Park,
            designed for fast, conflict-free scheduling with role-based access and clear audit trails.
          </p>
        </div>
      </div>

      <!-- right phone (tilt) -->
      <div class="relative grid place-items-center">

        <TiltCard :width="320" :height="640" :depth="70" :rotationRange="12" class="drop-shadow-2xl">
          <template #media>
            <img :src="BTP" alt="TTS Dashboard POS Website"
              class="h-full w-full rounded-[2rem] object-cover ring-1 ring-black/5" />
          </template>
        </TiltCard>
      </div>
    </section>

    <!-- ===== Meta table ===== -->
    <section class="relative z-10 mx-auto max-w-6xl px-6">
      <div class="border-t border-b border-neutral">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="p-6 sm:p-10">
            <h3 class="mb-3 font-mono text-lg font-semibold underline">Challenge</h3>
            <p class="max-w-[48ch] font-mono leading-7 text-slate-800">
              How might we let Bandung Techno Park teams and tenants reserve rooms & equipment in seconds—across
              multiple
              buildings—while preventing double-bookings, streamlining approvals and check-in/out, and giving admins
              clear,
              role-based controls with audit trails and reports?
            </p>
          </div>

          <!-- My Role -->
          <div class="border-t border-neutral p-6 sm:p-10 lg:border-l lg:border-t-0">
            <h3 class="mb-3 font-mono text-lg font-semibold underline">My Role</h3>
            <p class="max-w-[56ch] font-mono leading-7 text-slate-800">
              Back-end Developer
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 divide-y divide-slate-300 border-t border-neutral sm:grid-cols-3 sm:divide-y-0">
          <div class="p-6 sm:p-8 border-neutral">
            <h4 class="mb-2 font-mono text-base font-semibold underline">Year</h4>
            <p class="font-mono text-slate-800">2024</p>
          </div>
          <div class="p-6 sm:border-l sm:border-r border-neutral sm:p-8">
            <h4 class="mb-2 font-mono text-base font-semibold underline">Timeline</h4>
            <p class="font-mono text-slate-800">6 months</p>
          </div>
          <div class="p-6 sm:p-8 border-neutral">
            <h4 class="mb-2 font-mono text-base font-semibold underline">Tech-Stack</h4>
            <p class="font-mono text-slate-800">Laravel · Bootstrap · MySQL</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Flow preview grid (6 screens) ===== -->
    <section class="relative z-10 mx-auto max-w-6xl px-6 py-14 md:py-18">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <figure v-for="(s, i) in flowScreens" :key="i" class="group">
          <!-- Phone frame -->
          <div
            class="phone-shell overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-0.5">
            <div class="phone-inner rounded-[1.6rem] ring-1 ring-black/5">
              <img :src="s.src" :alt="s.caption" class="h-full w-full rounded-[1.6rem] object-cover" />
            </div>
          </div>

          <figcaption class="mt-2 text-center font-mono text-sm text-slate-600">
            {{ s.caption }}
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- ===== Understand ===== -->
    <section class="relative z-10 mx-auto max-w-4xl px-6 py-20 md:py-12">
      <h2 class="mb-6 font-serif text-4xl tracking-[-0.01em]">Understand</h2>

      <div class="space-y-14">
        <div>
          <h3 class="mb-2 font-mono text-xl font-bold">Context</h3>
          <p class="max-w-prose text-lg leading-8 text-slate-800 font-mono">
            Before v1, bookings lived in spreadsheets and chat threads. Approvals were manual, clashes were common, and
            there was no single source of truth for who booked what, when, and why—especially across multiple buildings
            and
            shared equipment.
          </p>
        </div>

        <div>
          <h3 class="mb-2 font-mono text-xl font-bold">Discovery</h3>
          <ul class="max-w-prose list-disc space-y-3 pl-5 text-lg leading-8 text-slate-800 font-mono">
            <li><strong>Availability first:</strong> fast search by date, time, capacity, building, and equipment.</li>
            <li><strong>Conflict engine:</strong> hard/soft rules for overlapping slots, setup/teardown buffers,
              blackout
              dates.</li>
            <li><strong>Roles & workflow:</strong> tenant → approver → operator → admin, with notifications and SLAs.
            </li>
            <li><strong>Check-in/out:</strong> QR-based attendance plus late/ no-show handling.</li>
            <li><strong>Ops visibility:</strong> calendar views, room/equipment utilization, exportable reports.</li>
            <li><strong>Governance:</strong> immutable audit log for requests, changes, and approvals.</li>
          </ul>
        </div>

        <div>
          <h3 class="mb-2 font-mono text-xl font-bold">Summary</h3>
          <p class="max-w-prose text-lg leading-8 text-slate-800 font-mono">
            Spacerent BTP v1 unified room & equipment reservations into a single, conflict-aware flow with clear roles
            and
            auditability. Approvals got faster, double-bookings dropped, and admins finally had live calendars and
            reports
            to run the day-to-day without spreadsheet chaos.
          </p>
        </div>
      </div>
    </section>

    <!-- horizontal waterdrop band -->
    <WaterDropGrid orientation="horizontal" :bandHeight="200" :cellSize="22" :cellGap="12" class="my-14" />

    <!-- ===== More work ===== -->
    <section class="relative z-10 mx-auto max-w-6xl px-6 pb-20 mt-28">
      <div class="grid gap-10 md:grid-cols-3">
        <!-- POS Website -->
        <RouterLink to="/projects/pos-website"
          class="group block outline-none rounded-2xl focus-visible:ring-2 focus-visible:ring-slate-500"
          aria-label="Open IoT Analytics Platform case study">
          <div
            class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
            <img :src="more.a" alt="IoT Analytics Platform" class="h-64 w-full object-cover" />
          </div>
          <h3 class="mt-4 font-serif text-2xl">Point-of-Sales (POS) Website</h3>
          <p class="mt-2 max-w-[36ch] font-mono text-[0.95rem] leading-7 text-slate-700">
            A web-based Point-of-Sale platform for cafés and retail, built for fast checkout,
            real-time inventory sync, and receipt printing. Role-based access, daily reports,
            and an offline-friendly workflow included.
          </p>
        </RouterLink>

        <!-- IoT Analytics Platform -->
        <RouterLink to="/projects/iot-analytics-platform"
          class="group block outline-none rounded-2xl focus-visible:ring-2 focus-visible:ring-slate-500"
          aria-label="Open Spacerent BTP v2 case study">
          <div
            class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
            <img :src="more.b" alt="Spacerent BTP v2" class="h-64 w-full object-cover" />
          </div>
          <h3 class="mt-4 font-serif text-2xl">Internet-of-Things (IoT) Analytics Platform</h3>
          <p class="mt-2 max-w-[36ch] font-mono text-[0.95rem] leading-7 text-slate-700">
            IoT platform for Arcadia Flora Tech—secure device-to-cloud telemetry, real-time dashboards, alerts, and
            role-based insights.
          </p>
        </RouterLink>

        <!-- Spacerent BTP v2 -->
        <RouterLink to="/projects/spacerent-btp-v2"
          class="group block outline-none rounded-2xl focus-visible:ring-2 focus-visible:ring-slate-500"
          aria-label="Open Spacerent BTP v2 case study">
          <div
            class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
            <img :src="more.c" alt="Spacerent BTP v2" class="h-64 w-full object-cover" />
          </div>
          <h3 class="mt-4 font-serif text-2xl">Spacerent BTP v2</h3>
          <p class="mt-2 max-w-[36ch] font-mono text-[0.95rem] leading-7 text-slate-700">
            Same fast booking—now smoother: mobile-first UI, cleaner nav, inline conflict hints, and snappier,
            prefetch-powered performance.
          </p>
        </RouterLink>
      </div>
    </section>

    <div class="divider divider-neutral md:px-40 px-10"></div>

    <section>
      <ReadyToBuildText />
    </section>

    <section class="relative mb-20">
      <div class="grid grid-cols-1 lg:grid-cols-1 gap-10 items-center">
        <!-- Kolom kiri kosong -->
        <div></div>

        <!-- Kolom kanan isi link -->
        <div class="flex justify-end">
          <RevealLinks class="font-serif" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ===== Blobs ===== */
.blobs {
  position: absolute;
  inset: -10%;
  pointer-events: none;
  z-index: 0;
  /* below sections (which use z-10) */
}

.blob {
  position: relative;
  width: min(78vmin, 640px);
  height: min(78vmin, 640px);
  border-radius: 999px;
  filter: blur(110px);
  mix-blend-mode: multiply;
  opacity: 0.85;
}

/* Colors & positions (tweak freely) */
.blob--a {
  background: #34d399;
  /* emerald */
  top: 9%;
  left: 36%;
  animation: orbit-a 46s linear infinite;
}

.blob--b {
  background: #f472b6;
  /* pink */
  top: 54%;
  left: 12%;
  animation: orbit-b 36s linear infinite reverse;
  opacity: 0.75;
}

.blob--c {
  background: #fde047;
  /* yellow */
  bottom: -12%;
  right: -8%;
  animation: orbit-c 54s linear infinite;
  opacity: 0.8;
}

/* Orbit animations */
@keyframes orbit-a {
  0% {
    transform: translate(0, -16%);
  }

  25% {
    transform: translate(14%, 0);
  }

  50% {
    transform: translate(0, 16%);
  }

  75% {
    transform: translate(-14%, 0);
  }

  100% {
    transform: translate(0, -16%);
  }
}

@keyframes orbit-b {
  0% {
    transform: translate(0, 18%);
  }

  25% {
    transform: translate(-18%, 0);
  }

  50% {
    transform: translate(0, -18%);
  }

  75% {
    transform: translate(18%, 0);
  }

  100% {
    transform: translate(0, 18%);
  }
}

@keyframes orbit-c {
  0% {
    transform: translate(0, -14%);
  }

  25% {
    transform: translate(14%, 0);
  }

  50% {
    transform: translate(0, 14%);
  }

  75% {
    transform: translate(-14%, 0);
  }

  100% {
    transform: translate(0, -14%);
  }
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .blob {
    animation: none !important;
  }
}
</style>
