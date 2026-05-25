<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import TiltCard from '@/components/Tilt/TiltCard.vue'
import WaterDropGrid from '@/components/SpecialEffect/WaterDropGrid.vue'
import ReadyToBuildText from '@/components/Text/ReadyToBuildText.vue'
import RevealLinks from '@/components/RevealLink/RevealLinks.vue'

import { allProjects } from '@/data/projects/index.js'
import btpV1 from '@/data/projects/spacerent-btp-v1.js'
import posWebsite from '@/data/projects/pos-website.js'
import iotPlatform from '@/data/projects/iot-analytics-platform.js'
import btpV2 from '@/data/projects/spacerent-btp-v2.js'
import matchakoLandingPage from '@/data/projects/matchako-landing-page.js'

defineOptions({ name: 'ProjectDetailPage' })

const BLOB_COLORS = [
  '#4D96FF', '#6BCB77', '#FF5A76', '#FFD93D', '#A78BFA',
  '#34D399', '#FB923C', '#F472B6', '#60A5FA', '#FBBF24',
  '#E879F9', '#2DD4BF', '#F87171', '#818CF8',
]
const rand = (min, max) => Math.random() * (max - min) + min
const ANIMS = ['orbit-a', 'orbit-b', 'orbit-c']

const blobs = Array.from({ length: Math.floor(rand(10, 16)) }, (_, i) => ({
  id: i,
  style: {
    background: BLOB_COLORS[Math.floor(Math.random() * BLOB_COLORS.length)],
    width: `min(${rand(50, 85).toFixed(0)}vmin, ${rand(380, 620).toFixed(0)}px)`,
    height: `min(${rand(50, 85).toFixed(0)}vmin, ${rand(380, 620).toFixed(0)}px)`,
    opacity: rand(0.6, 0.92).toFixed(2),
    animation: `${ANIMS[Math.floor(Math.random() * ANIMS.length)]} ${rand(24, 72).toFixed(0)}s ${rand(-20, 0).toFixed(1)}s linear infinite ${Math.random() > 0.5 ? 'reverse' : 'normal'}`,
    position: 'absolute',
    top: `${rand(-10, 90).toFixed(0)}%`,
    left: `${rand(-10, 90).toFixed(0)}%`,
  }
}))

const route = useRoute()

const projectMap = {
  'spacerent-btp-v1': btpV1,
  'pos-website': posWebsite,
  'iot-analytics-platform': iotPlatform,
  'spacerent-btp-v2': btpV2,
  'matchako-landing-page': matchakoLandingPage,
}

const project = computed(() => projectMap[route.params.slug])
const moreProjects = computed(() => {
  const others = allProjects.filter(p => p.slug !== route.params.slug)
  for (let i = others.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [others[i], others[j]] = [others[j], others[i]]
  }
  return others.slice(0, 3)
})
</script>

<template>
  <main v-if="project" class="relative min-h-screen overflow-hidden bg-neutral-50 text-slate-900">
    <!-- texture -->
    <div class="pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply
             bg-[url('https://i.imgur.com/PsjPzdO.webp')] [background-size:220px]"></div>

    <!-- blobs -->
    <div class="blobs" aria-hidden="true">
      <div v-for="blob in blobs" :key="blob.id" class="blob" :style="blob.style"></div>
    </div>

    <!-- Hero -->
    <section
      class="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
      <div>
        <div class="rounded-[2.5rem] bg-gradient-to-br p-8 sm:p-10 lg:p-12">
          <h1 class="font-serif text-4xl leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            <span class="block">{{ project.title }}</span>
          </h1>
          <p class="mt-6 max-w-xl border-t border-neutral pt-6 font-mono text-[1.05rem] leading-7 text-slate-700">
            {{ project.lede }}
          </p>
          <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer"
            class="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 font-mono text-sm text-white transition-colors hover:bg-slate-700">
            Visit Website
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <div class="relative grid place-items-center">
        <TiltCard :depth="70" :rotationRange="12" class="drop-shadow-2xl">
          <template #media>
            <img :src="project.heroImage" :alt="project.title"
              class="h-full w-full rounded-[2rem] object-cover ring-1 ring-black/5" />
          </template>
        </TiltCard>
      </div>
    </section>

    <!-- Meta table -->
    <section class="relative z-10 mx-auto max-w-6xl px-6">
      <div class="border-t border-b border-neutral">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="p-6 sm:p-10">
            <h3 class="mb-3 font-mono text-lg font-semibold underline">Challenge</h3>
            <p class="max-w-[48ch] font-mono leading-7 text-slate-800" v-html="project.challenge"></p>
          </div>
          <div class="border-t border-neutral p-6 sm:p-10 lg:border-l lg:border-t-0">
            <h3 class="mb-3 font-mono text-lg font-semibold underline">My Role</h3>
            <p class="max-w-[56ch] font-mono leading-7 text-slate-800">{{ project.myRole }}</p>
          </div>
        </div>
        <div class="grid grid-cols-1 divide-y divide-slate-300 border-t border-neutral sm:grid-cols-3 sm:divide-y-0">
          <div class="p-6 sm:p-8 border-neutral">
            <h4 class="mb-2 font-mono text-base font-semibold underline">Year</h4>
            <p class="font-mono text-slate-800">{{ project.year }}</p>
          </div>
          <div class="p-6 sm:border-l sm:border-r border-neutral sm:p-8">
            <h4 class="mb-2 font-mono text-base font-semibold underline">Timeline</h4>
            <p class="font-mono text-slate-800">{{ project.timeline }}</p>
          </div>
          <div class="p-6 sm:p-8 border-neutral">
            <h4 class="mb-2 font-mono text-base font-semibold underline">Tech-Stack</h4>
            <p class="font-mono text-slate-800">{{ project.techStack }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Flow screens -->
    <section class="relative z-10 mx-auto max-w-6xl px-6 py-14 md:py-18">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <figure v-for="(s, i) in project.flowScreens" :key="i" class="group">
          <div
            class="phone-shell overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-0.5">
            <div class="phone-inner rounded-[1.6rem] ring-1 ring-black/5">
              <img :src="s.src" :alt="s.caption" class="h-full w-full rounded-[1.6rem] object-cover" />
            </div>
          </div>
          <figcaption class="mt-2 text-center font-mono text-sm text-slate-600">{{ s.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <!-- Optional mobile screens (only project with mobileScreens defined) -->
    <template v-if="project.mobileScreens">
      <div class="divider divider-neutral md:px-40 px-10"></div>
      <section class="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h3 class="sr-only">Mobile screens</h3>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <figure v-for="(s, i) in project.mobileScreens" :key="i" class="group">
            <div
              class="phone-shell overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-0.5">
              <div class="phone-inner rounded-[1.6rem] ring-1 ring-black/5">
                <img :src="s.src" :alt="s.caption" class="h-full w-full rounded-[1.6rem] object-cover" />
              </div>
            </div>
            <figcaption class="mt-2 text-center font-mono text-sm text-slate-600">{{ s.caption }}</figcaption>
          </figure>
        </div>
      </section>
    </template>

    <!-- Understand -->
    <section class="relative z-10 mx-auto max-w-4xl px-6 py-20 md:py-12">
      <h2 class="mb-6 font-serif text-4xl tracking-[-0.01em]">Understand</h2>
      <div class="space-y-14">
        <div>
          <h3 class="mb-2 font-mono text-xl font-bold">Context</h3>
          <p class="max-w-prose text-lg leading-8 text-slate-800 font-mono" v-html="project.context"></p>
        </div>
        <div>
          <h3 class="mb-2 font-mono text-xl font-bold">Discovery</h3>
          <ul class="max-w-prose list-disc space-y-3 pl-5 text-lg leading-8 text-slate-800 font-mono">
            <li v-for="(item, i) in project.discovery" :key="i" v-html="item"></li>
          </ul>
        </div>
        <div>
          <h3 class="mb-2 font-mono text-xl font-bold">Summary</h3>
          <p class="max-w-prose text-lg leading-8 text-slate-800 font-mono" v-html="project.summary"></p>
        </div>
      </div>
    </section>

    <!-- WaterDropGrid band -->
    <WaterDropGrid orientation="horizontal" :bandHeight="200" :cellSize="22" :cellGap="12" class="my-14" />

    <!-- More work -->
    <section class="relative z-10 mx-auto max-w-6xl px-6 pb-20 mt-28">
      <div class="grid gap-10 md:grid-cols-3">
        <RouterLink v-for="p in moreProjects" :key="p.slug" :to="`/projects/${p.slug}`"
          class="group block outline-none rounded-2xl focus-visible:ring-2 focus-visible:ring-slate-500"
          :aria-label="`Open ${p.title} case study`">
          <div
            class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
            <img :src="p.image" :alt="p.title" class="h-64 w-full object-cover" />
          </div>
          <h3 class="mt-4 font-serif text-2xl">{{ p.title }}</h3>
          <p class="mt-2 max-w-[36ch] font-mono text-[0.95rem] leading-7 text-slate-700">{{ p.description }}</p>
        </RouterLink>
      </div>
    </section>

    <div class="divider divider-neutral md:px-40 px-10"></div>

    <section>
      <ReadyToBuildText />
    </section>

    <section class="relative mb-20 flex justify-center md:justify-end px-6">
      <RevealLinks class="font-serif" />
    </section>
  </main>
</template>

<style scoped>
.blobs {
  position: absolute;
  inset: -10%;
  pointer-events: none;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 999px;
  filter: blur(110px);
  mix-blend-mode: multiply;
}

@keyframes orbit-a {
  0% { transform: translate(0, -16%); }
  25% { transform: translate(14%, 0); }
  50% { transform: translate(0, 16%); }
  75% { transform: translate(-14%, 0); }
  100% { transform: translate(0, -16%); }
}

@keyframes orbit-b {
  0% { transform: translate(0, 18%); }
  25% { transform: translate(-18%, 0); }
  50% { transform: translate(0, -18%); }
  75% { transform: translate(18%, 0); }
  100% { transform: translate(0, 18%); }
}

@keyframes orbit-c {
  0% { transform: translate(0, -14%); }
  25% { transform: translate(14%, 0); }
  50% { transform: translate(0, 14%); }
  75% { transform: translate(-14%, 0); }
  100% { transform: translate(0, -14%); }
}

@media (prefers-reduced-motion: reduce) {
  .blob { animation: none !important; }
}
</style>
