<template>
  <main
    class="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_bottom,_rgba(230,233,242,0.8),_#f6f6f6_45%,_white_100%)] px-6 py-12 text-slate-900 sm:px-12 lg:px-24">

    <div class="hero-background" aria-hidden="true">
      <div class="hero-background__texture"></div>
      <div class="hero-background__cloud">
        <div class="hero-background__shape hero-background__shape--a"></div>
        <div class="hero-background__shape hero-background__shape--b"></div>
        <div class="hero-background__shape hero-background__shape--c"></div>
      </div>
    </div>

    <div class="relative mx-auto grid max-w-5xl gap-12 font-serif lg:grid-cols-2 lg:items-stretch lg:gap-20">
      <section class="relative z-10 flex flex-col gap-8 lg:gap-10">
        <div
          class="relative max-w-sm rounded-[2.5rem] bg-neutral-900/95 px-7 py-6 font-mono text-[0.9rem] leading-relaxed text-slate-100 shadow-xl shadow-slate-900/25">
          <span
            class="absolute -top-6 left-8 inline-flex items-center justify-center rounded-full border border-slate-950 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-900 shadow-[0_14px_18px_rgba(15,23,42,0.18)]">
            2025 update
          </span>
          Wrapping up my final year at Telkom University while juggling backend, DevOps, coffee, matcha, and a game shop
          &mdash; call it my "multi-threaded life".
        </div>

        <h1 class="flex flex-col gap-5 text-3xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-4xl">
          <section>
            <NameText />
          </section>
        </h1>

        <div class="flex flex-col gap-5 font-mono text-base leading-8 text-slate-600 md:text-[1.05rem]">
          <p>
            I craft backend systems and design DevOps pipelines that guide ideas
            smoothly from code to production, building a solid foundation for everything I create.
          </p>
          <p>
            That same drive to build has led me beyond pure tech &mdash; into <strong>Arunika Gaming Shop</strong>
            <em> (my digital game account store)</em>, <strong>Malewa Coffee</strong>, and <strong>Matchako</strong>,
            where I mix backend thinking, gaming hustle, and F&amp;B experiments into one big adventure.
          </p>
          <p>
            Through these journeys I've learned to value <strong>curiosity</strong> and
            <strong>a flexible, growth-minded spirit</strong> &mdash;
            embracing lessons from code, coffee, matcha, and entrepreneurship
            to keep evolving in every direction.
          </p>
        </div>
      </section>

      <section
        class="relative z-10 flex min-h-[22rem] w-full items-stretch justify-center overflow-hidden sm:min-h-[26rem] lg:translate-x-12"
        aria-hidden="true">
        <WaterDropGrid class="relative z-10 flex-1" :mobile-max-cols="10" :mobile-max-rows="6" />
      </section>
    </div>

    <div class="divider divider-neutral"></div>

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
          <div class="text-xl font-black">
            Backend Developer Intern at Bandung Techno Park
          </div>
          <br>
          Built and maintained the backend for an innovative web-based equipment
          lending and room-reservation system. Designed scalable APIs, optimized
          database operations, and ensured security & data-protection compliance,
          supporting BTP’s mission to foster technological growth and collaboration.
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
          <div class="text-xl font-black">
            Co-Founder & Backend Developer at Arcadia Flora Tech
          </div>
          <br>
          Arcadia Flora Tech is a digital supply-chain startup incubated by Bandung Techno Park, built to connect
          upstream flower farmers with downstream florists through a tech-enabled platform.
          As a co-founder, I led the backend development and MVP launch—covering system architecture, database design,
          and early market validation. Within months, we secured initial seed funding and onboarded two early-adopter
          customers, proving early demand for a more efficient and transparent floral supply chain.
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
          <time class="font-mono italic">June 2025 - Now</time>
          <div class="text-lg font-black">
            IT Business Operations at Palala Citra Mandiri
          </div>
          <br>
          At Palala Citra Mandiri, I support the digital backbone of the company by streamlining internal
          processes and overseeing IT operations. My focus is on building efficient workflows, improving data
          management, and aligning technology initiatives with business goals to ensure smoother day-to-day
          operations and better service delivery.
        </div>
      </li>
    </ul>

    <div class="divider divider-neutral" v-if="mounted && !isTouch"></div>

    <section>
      <MouseImageTrail v-if="mounted && !isTouch" :images="imgs" :renderImageBuffer="50" :rotationRange="20">
        <section class="grid h-screen w-full place-content-center">
          <p class="flex items-center gap-2 text-3xl font-bold uppercase text-black">
            <span class="font-mono">Hover me</span>
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
          <div class="text-lg font-black">Owner of Arunika Gaming Shop</div>
          <br>
          Founded and scaled a digital game–account marketplace, starting with
          <strong>Genshin Impact</strong> and expanding to multiple popular titles.
          Built a secure buying/selling platform with 4,300+ completed transactions,
          strong buyer-protection policies, and streamlined operations — from stock
          management to customer support — while consistently improving trust and
          community engagement.
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
          <time class="font-mono italic">July 2025 - Now</time>
          <div class="text-lg font-black">Operational Manager at Malewa Coffee</div>
          <br>
          Managed day-to-day café operations, standardized drink SOPs, optimized
          inventory and supplier flow, and guided the team to deliver smooth service and
          consistent quality.
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
          <time class="font-mono italic">August 2025 - Now</time>
          <div class="text-lg font-black">Business Operations at Matchako</div>
          <br>
          Spearheading business operations for Matchako, a growing F&B concept
          specializing in matcha-based drinks. Focus on streamlining SOPs, managing
          inventory and suppliers, coordinating team schedules, and optimizing
          day-to-day workflows to support consistent quality and efficient service as
          the brand expands.
        </div>
      </li>
    </ul>

    <div class="divider divider-neutral"></div>

    <section>
      <ReadyToBuildText />
    </section>

    <section class="relative">
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

<script setup>
import WaterDropGrid from '@/components/SpecialEffect/WaterDropGrid.vue'

import NameText from '@/components/Text/NameText.vue';
import ReadyToBuildText from '@/components/Text/ReadyToBuildText.vue';
import WorkExperienceText from '@/components/Text/WorkExperienceText.vue';
import BusinessExperienceText from '@/components/Text/BusinessExperienceText.vue';

import RevealLinks from '@/components/RevealLink/RevealLinks.vue';
import MouseImageTrail from '@/components/SpecialEffect/MouseImageTrail.vue';

const imgs = Array.from({ length: 16 }, (_, i) =>
  new URL(`/src/assets/ManyImage/${i + 1}.jpg`, import.meta.url).href
)

import { ref, onMounted } from 'vue'

defineOptions({
  name: 'HomePage'
})

const isTouch = ref(false)
const mounted = ref(false)

onMounted(() => {
  isTouch.value =
    (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ||
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0)
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
  background-image: url('https://i.imgur.com/PsjPzdO.png');
  background-size: 220px;
  mix-blend-mode: overlay;
  opacity: 0.35;
}

.hero-background__cloud {
  position: absolute;
  inset: -10%;
  display: grid;
  place-items: center;
}

.hero-background__shape {
  position: relative;
  width: min(80vmin, 620px);
  height: min(80vmin, 620px);
  border-radius: 999px;
  filter: blur(110px);
  mix-blend-mode: multiply;
  opacity: 0.9;
}

.hero-background__shape--a {
  background: #4D96FF;
  animation: hero-background-circular-alt 42s linear infinite;
}

.hero-background__shape--b {
  background: #6BCB77;
  animation: hero-background-circular 28s linear infinite;
}

.hero-background__shape--c {
  background: #ff2f2f;
  animation: hero-background-circular 66s linear infinite reverse;
  opacity: 0.8;
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
    width: min(100vmin, 460px);
    height: min(100vmin, 460px);
    filter: blur(90px);
  }
}
</style>
