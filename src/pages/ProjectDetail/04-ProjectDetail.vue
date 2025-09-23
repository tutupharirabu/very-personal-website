<!-- src/pages/work/SpacerentBTPv1.vue -->
<script setup>
import { RouterLink } from 'vue-router'

import TiltCard from '@/components/Tilt/TiltCard.vue'
import WaterDropGrid from '@/components/SpecialEffect/WaterDropGrid.vue'

import ReadyToBuildText from '@/components/Text/ReadyToBuildText.vue';
import RevealLinks from '@/components/RevealLink/RevealLinks.vue';

import BTPv2 from '@/assets/ProjectDetail/04/BTPv2.png'
import ListRuangan from '@/assets/ProjectDetail/04/ListRuangan.png'
import DetailRuangan from '@/assets/ProjectDetail/04/DetailRuangan.png'
import ListPengajuan from '@/assets/ProjectDetail/04/ListPengajuan.png'
import DashboardAdmin from '@/assets/ProjectDetail/04/DashboardAdmin.png'
import ManajemenRuangan from '@/assets/ProjectDetail/04/ManajemenRuangan.png'
import ProfileSetting from '@/assets/ProjectDetail/04/ProfileSetting.png'

import DashboardPenyewaMobile from '@/assets/ProjectDetail/04/Mobile/DashboardPenyewa.png'
import ListRuanganMobile from '@/assets/ProjectDetail/04/Mobile/ListRuangan.png'
import DetailRuanganMobile from '@/assets/ProjectDetail/04/Mobile/DetailRuangan.png'

import BTP from '@/assets/ProjectDetail/01/BTP.png'
import POSWebsite from '@/assets/ProjectDetail/02/Dashboard.png'
import Arcadia from '@/assets/ProjectDetail/03/Arcadia.png'

const more = {
  a: BTP,
  b: POSWebsite,
  c: Arcadia,
}

const flowScreens = [
  { src: ListRuangan, caption: 'rooms list & filters' },
  { src: DetailRuangan, caption: 'room detail & gallery' },
  { src: ListPengajuan, caption: 'rental requests status' },
  { src: DashboardAdmin, caption: 'admin dashboard (occupancy calendar)' },
  { src: ManajemenRuangan, caption: 'room management (capacity & status & CRUD)' },
  { src: ProfileSetting, caption: 'profile & account settings' },
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
            <span class="block">Spacerent BTP v2</span>
          </h1>

          <p class="mt-6 max-w-xl border-t border-neutral pt-6 font-mono text-[1.05rem] leading-7 text-slate-700">
            Same fast booking—now smoother. Spacerent BTP v2 brings a mobile-first UI, clearer navigation, and a single
            inline
            booking flow with availability & conflict tips. Lighter components, skeleton loading, and smart prefetch
            keep it
            snappy even at peak—without changing how teams work.
          </p>
        </div>
      </div>

      <!-- right phone (tilt) -->
      <div class="relative grid place-items-center">

        <TiltCard :width="320" :height="640" :depth="70" :rotationRange="12" class="drop-shadow-2xl">
          <template #media>
            <img :src="BTPv2" alt="TTS Dashboard POS Website"
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
              How might we redesign Spacerent for BTP so teams can book rooms & equipment in seconds on <em>any</em>
              device—without
              adding cognitive load—and still hit tight performance budgets, especially on mobile?
            </p>
          </div>

          <!-- My Role -->
          <div class="border-t border-neutral p-6 sm:p-10 lg:border-l lg:border-t-0">
            <h3 class="mb-3 font-mono text-lg font-semibold underline">My Role</h3>
            <p class="max-w-[56ch] font-mono leading-7 text-slate-800">
              Full-Stack Developer
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 divide-y divide-slate-300 border-t border-neutral sm:grid-cols-3 sm:divide-y-0">
          <div class="p-6 sm:p-8 border-neutral">
            <h4 class="mb-2 font-mono text-base font-semibold underline">Year</h4>
            <p class="font-mono text-slate-800">2025</p>
          </div>
          <div class="p-6 sm:border-l sm:border-r border-neutral sm:p-8">
            <h4 class="mb-2 font-mono text-base font-semibold underline">Timeline</h4>
            <p class="font-mono text-slate-800">4 months</p>
          </div>
          <div class="p-6 sm:p-8 border-neutral">
            <h4 class="mb-2 font-mono text-base font-semibold underline">Tech-Stack</h4>
            <p class="font-mono text-slate-800">Laravel · VueJs · InertiaJs · PostgreSQL · Docker · Nginx</p>
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

    <!-- ===== Divider di bawah 6-grid ===== -->
    <div class="divider divider-neutral md:px-40 px-10"></div>

    <!-- ===== Mobile screens (3 gambar) ===== -->
    <section class="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h3 class="sr-only">Mobile screens</h3>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Dashboard (Mobile) -->
        <figure class="group">
          <div
            class="phone-shell overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-0.5">
            <div class="phone-inner rounded-[1.6rem] ring-1 ring-black/5">
              <img :src="DashboardPenyewaMobile" alt="Dashboard penyewa (mobile)"
                class="h-full w-full rounded-[1.6rem] object-cover" />
            </div>
          </div>
          <figcaption class="mt-2 text-center font-mono text-sm text-slate-600">
            tenant dashboard (mobile)
          </figcaption>
        </figure>

        <!-- List Ruangan (Mobile) -->
        <figure class="group">
          <div
            class="phone-shell overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-0.5">
            <div class="phone-inner rounded-[1.6rem] ring-1 ring-black/5">
              <img :src="ListRuanganMobile" alt="Daftar ruangan (mobile)"
                class="h-full w-full rounded-[1.6rem] object-cover" />
            </div>
          </div>
          <figcaption class="mt-2 text-center font-mono text-sm text-slate-600">
            rooms list (mobile)
          </figcaption>
        </figure>

        <!-- Detail Ruangan (Mobile) -->
        <figure class="group">
          <div
            class="phone-shell overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-0.5">
            <div class="phone-inner rounded-[1.6rem] ring-1 ring-black/5">
              <img :src="DetailRuanganMobile" alt="Detail ruangan (mobile)"
                class="h-full w-full rounded-[1.6rem] object-cover" />
            </div>
          </div>
          <figcaption class="mt-2 text-center font-mono text-sm text-slate-600">
            room detail (mobile)
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
            Spacerent v1 was reliable but desktop-first. On phones, calendars and filters felt cramped, and peak-time
            loads
            slowed key actions. The brief: modernize the UI, simplify the booking flow, and deliver fast perceived
            performance
            on mobile and kiosks
          </p>
        </div>

        <div>
          <h3 class="mb-2 font-mono text-xl font-bold">Discovery</h3>
          <ul class="max-w-prose list-disc space-y-3 pl-5 text-lg leading-8 text-slate-800 font-mono">
            <li><strong>One-flow booking:</strong> inline availability + conflict tips to cut back-and-forth.</li>
            <li><strong>Thumb-reach first:</strong> bottom action bar, larger tap targets, sticky “Review &amp; Book.”
            </li>
            <li><strong>Perceived speed:</strong> optimistic updates, skeletons, and prefetch for likely next screens.
            </li>
            <li><strong>Information architecture:</strong> clearer filters, scannable room/equipment cards, useful empty
              states.</li>
            <li><strong>Error handling:</strong> inline validation, friendly copy, and undo for small actions.</li>
            <li><strong>Accessibility:</strong> sane focus order, landmarks, reduced-motion fallbacks, stronger
              contrast.
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-2 font-mono text-xl font-bold">Summary</h3>
          <p class="max-w-prose text-lg leading-8 text-slate-800 font-mono">
            We shipped a mobile-first, accessible UI that keeps bookings quick and feels faster under load. Clear IA,
            lighter
            components, and perceived-speed patterns reduced taps and wait time—cutting errors and support pings while
            keeping
            v1’s efficiency.
          </p>
        </div>
      </div>
    </section>

    <!-- horizontal waterdrop band -->
    <WaterDropGrid orientation="horizontal" :bandHeight="200" :cellSize="22" :cellGap="12" class="my-14" />

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

        <!-- IoT Analytics Platform -->
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

        <!-- IoT Analytics Platform -->
        <RouterLink to="/projects/iot-analytics-platform"
          class="group block outline-none rounded-2xl focus-visible:ring-2 focus-visible:ring-slate-500"
          aria-label="Open Spacerent BTP v2 case study">
          <div
            class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
            <img :src="more.c" alt="Spacerent BTP v2" class="h-64 w-full object-cover" />
          </div>
          <h3 class="mt-4 font-serif text-2xl">Internet-of-Things (IoT) Analytics Platform</h3>
          <p class="mt-2 max-w-[36ch] font-mono text-[0.95rem] leading-7 text-slate-700">
            IoT platform for Arcadia Flora Tech—secure device-to-cloud telemetry, real-time dashboards, alerts, and
            role-based insights.
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
