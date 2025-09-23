<!-- src/pages/work/SpacerentBTPv1.vue -->
<script setup>
import { RouterLink } from 'vue-router'

import TiltCard from '@/components/Tilt/TiltCard.vue'
import WaterDropGrid from '@/components/SpecialEffect/WaterDropGrid.vue'

import ReadyToBuildText from '@/components/Text/ReadyToBuildText.vue';
import RevealLinks from '@/components/RevealLink/RevealLinks.vue';

import Arcadia from '@/assets/ProjectDetail/03/Arcadia.png'
import Login from '@/assets/ProjectDetail/03/Login.png'
import Dashboard from '@/assets/ProjectDetail/03/Dashboard.png'
import Analytics from '@/assets/ProjectDetail/03/Analytics.png'
import QR from '@/assets/ProjectDetail/03/QR.png'
import Alat from '@/assets/ProjectDetail/03/Alat.png'
import DetailAlat from '@/assets/ProjectDetail/03/DetailAlat.png'

import BTP from '@/assets/ProjectDetail/01/BTP.png'
import POSWebsite from '@/assets/ProjectDetail/02/Dashboard.png'
import BTPv2 from '@/assets/ProjectDetail/04/BTPv2.png'

const more = {
  a: BTP,
  b: POSWebsite,
  c: BTPv2,
}

const flowScreens = [
  { src: Login, caption: 'login view' },
  { src: Dashboard, caption: 'overview dashboard' },
  { src: Analytics, caption: 'device sensor analytics' },
  { src: QR, caption: 'QR device onboarding' },
  { src: Alat, caption: 'devices list' },
  { src: DetailAlat, caption: 'device detail & telemetry' },
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
            <span class="block">Internet-of-Things (IoT) Analytics Platform</span>
          </h1>

          <p class="mt-6 max-w-xl border-t border-neutral pt-6 font-mono text-[1.05rem] leading-7 text-slate-700">
            An IoT integration & analytics platform for Arcadia Flora Tech, connecting field devices to the cloud with
            secure telemetry ingestion and real-time dashboards. Device management, alerting, and role-based insights
            turn sensor data into decisions.
          </p>
        </div>
      </div>

      <!-- right phone (tilt) -->
      <div class="relative grid place-items-center">

        <TiltCard :width="320" :height="640" :depth="70" :rotationRange="12" class="drop-shadow-2xl">
          <template #media>
            <img :src="Arcadia" alt="TTS Dashboard POS Website"
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
              How might we help rose farmers securely ingest IoT sensor data (soil moisture, temperature, humidity,
              EC/pH)
              over patchy connectivity, normalize time-series streams, and deliver real-time dashboards & alerts—while
              keeping device setup, role-based access, and audits simple for on-farm teams?
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
            <p class="font-mono text-slate-800">5 months</p>
          </div>
          <div class="p-6 sm:p-8 border-neutral">
            <h4 class="mb-2 font-mono text-base font-semibold underline">Tech-Stack</h4>
            <p class="font-mono text-slate-800">Node.js · RabbitMQ · Laravel · VueJs · Redis · PostgreSQL · Docker ·
              Nginx
            </p>
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
            Rose farmers were juggling soil-moisture, temp/humidity, and EC/pH sensors across multiple houses—with
            spotty
            connectivity and zero single source of truth. They needed a secure, simple way to onboard devices, see live
            crop conditions by zone, and act fast on irrigation/ventilation without wrestling spreadsheets.
          </p>
        </div>

        <div>
          <h3 class="mb-2 font-mono text-xl font-bold">Discovery</h3>
          <ul class="max-w-prose list-disc space-y-3 pl-5 text-lg leading-8 text-slate-800 font-mono">
            <li><strong>Connectivity is fickle:</strong> 3G/4G and Wi-Fi dropouts are common → buffer data at the edge
              and
              backfill when online.</li>
            <li><strong>Messy payloads:</strong> mixed LoRa/Modbus devices with different units/intervals → normalize to
              a
              clean time-series schema.</li>
            <li><strong>Trust the data:</strong> handle clock skew, duplicates, and calibration drift; log every
              transform
              for audits.</li>
            <li><strong>What growers watch:</strong> soil moisture %, VPD, temp/humidity trends, EC/pH, irrigation
              events,
              and anomalies by greenhouse zone.</li>
            <li><strong>Actionable alerts:</strong> rules per cultivar & growth stage; quiet hours; SMS/WhatsApp
              fallback
              when apps aren’t open.</li>
            <li><strong>People, not just devices:</strong> owner/agronomist/field worker roles, simple provisioning
              (QR),
              and clear activity trails.</li>
          </ul>
        </div>

        <div>
          <h3 class="mb-2 font-mono text-xl font-bold">Summary</h3>
          <p class="max-w-prose text-lg leading-8 text-slate-800 font-mono">
            We built a secure device-to-cloud pipeline with offline buffering and automatic backfill, normalized all
            sensor
            streams into one timeline, and surfaced zone-based dashboards with alert rules growers can tune.
            Provisioning is
            QR-simple, access is role-based, and every change is audited—turning raw telemetry into timely irrigation
            and
            climate
            decisions that help keep roses healthy.
          </p>
        </div>
      </div>
    </section>

    <!-- horizontal waterdrop band -->
    <WaterDropGrid orientation="horizontal" :bandHeight="200" :cellSize="22" :cellGap="12" class="my-14" />

    <!-- ===== More work ===== -->
    <!-- ===== More work ===== -->
    <section class="relative z-10 mx-auto max-w-6xl px-6 pb-20 mt-28">
      <div class="grid gap-10 md:grid-cols-3">
        <!-- Spacerent BTP v1 -->
        <RouterLink to="/projects/spacerent-btp-v1"
          class="group block outline-none rounded-2xl focus-visible:ring-2 focus-visible:ring-slate-500"
          aria-label="Open Spacerent BTP v1 case study">
          <div
            class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
            <img :src="more.a" alt="Spacerent BTP v1" class="h-64 w-full object-cover" />
          </div>
          <h3 class="mt-4 font-serif text-2xl">Spacerent BTP v1</h3>
          <p class="mt-2 max-w-[36ch] font-mono text-[0.95rem] leading-7 text-slate-700">
            A room & equipment reservation platform for Bandung Techno Park, designed for fast, conflict-free scheduling
            with role-based access and clear audit trails.
          </p>
        </RouterLink>

        <!-- POS Website -->
        <RouterLink to="/projects/pos-website"
          class="group block outline-none rounded-2xl focus-visible:ring-2 focus-visible:ring-slate-500"
          aria-label="Open IoT Analytics Platform case study">
          <div
            class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
            <img :src="more.b" alt="IoT Analytics Platform" class="h-64 w-full object-cover" />
          </div>
          <h3 class="mt-4 font-serif text-2xl">Point-of-Sales (POS) Website</h3>
          <p class="mt-2 max-w-[36ch] font-mono text-[0.95rem] leading-7 text-slate-700">
            A web-based Point-of-Sale platform for cafés and retail, built for fast checkout,
            real-time inventory sync, and receipt printing. Role-based access, daily reports,
            and an offline-friendly workflow included.
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
