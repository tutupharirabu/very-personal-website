<script setup>
import { useRouter } from 'vue-router'

import PastProjects from '@/components/Text/ProjectText.vue'
import TiltCard from '@/components/Tilt/TiltCard.vue'

import ImgSpacerentBTPv1 from '@/assets/ProjectDetail/01/BTP.webp'
import ImgPOSWebsite from '@/assets/ProjectDetail/02/Dashboard.webp'
import ImgArcadia from '@/assets/ProjectDetail/03/Arcadia.webp'
import ImgSpacerentBTPv2 from '@/assets/ProjectDetail/04/BTPv2.webp'
import ImgMatchakoLandingPage from '@/assets/ProjectDetail/05/HeroGridHome.webp'

defineOptions({ name: 'WorkPage' })

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

const router = useRouter()
const go = (slug) => router.push(`/projects/${slug}`)
const onKey = (e, slug) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    go(slug)
  }
}
</script>

<template>
  <main class="work relative min-h-screen overflow-hidden bg-[#f6f4f1] text-slate-900">
    <!-- texture + blobs -->
    <div class="work__texture" aria-hidden="true"></div>
    <div v-for="blob in blobs" :key="blob.id" class="work__blob" aria-hidden="true" :style="blob.style"></div>

    <section>
      <PastProjects />
    </section>

    <!-- Spacerent BTP v1 -->
    <section class="work-hero">
      <div class="work-hero__grid">
        <!-- LEFT: copy (clickable) -->
        <div class="work-hero__copy clickable" role="link" tabindex="0" aria-label="Open project: Spacerent BTP v1"
          @click="go('spacerent-btp-v1')" @keydown="onKey($event, 'spacerent-btp-v1')">
          <div class="work-hero__heading">
            <h1 class="lg:mt-16">
              <span>Spacerent BTP v1</span>
            </h1>
            <div class="work-hero__index">01</div>
          </div>
          <div class="work-hero__rule"></div>
          <p class="work-hero__lede">
            A room & equipment reservation platform for Bandung Techno Park,
            designed for fast, conflict-free scheduling with role-based access and clear audit trails.
          </p>
        </div>

        <!-- RIGHT: TiltCard (clickable) -->
        <div class="work-hero__media clickable" role="link" tabindex="0" aria-label="Open project: Spacerent BTP v1"
          @click="go('spacerent-btp-v1')" @keydown="onKey($event, 'spacerent-btp-v1')">
          <TiltCard :width="1080" :height="1920" :depth="70" :rotationRange="18">
            <template #media>
              <img :src="ImgSpacerentBTPv1" alt="Spacerent BTP v1 preview"
                class="h-full w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-black/5" />
            </template>
          </TiltCard>
        </div>
      </div>
    </section>

    <div class="divider divider-neutral"></div>

    <!-- POS Website -->
    <section class="work-hero">
      <div class="work-hero__grid">
        <div class="work-hero__copy clickable" role="link" tabindex="0" aria-label="Open project: POS Website"
          @click="go('pos-website')" @keydown="onKey($event, 'pos-website')">
          <div class="work-hero__heading">
            <h1><span>Point-of-Sales (POS) Website</span></h1>
            <div class="work-hero__index">02</div>
          </div>
          <div class="work-hero__rule"></div>
          <p class="work-hero__lede">
            A web-based Point-of-Sale platform for cafés and retail, built for fast checkout,
            real-time inventory sync, and receipt printing. Role-based access, daily reports,
            and an offline-friendly workflow included.
          </p>
        </div>

        <div class="work-hero__media clickable" role="link" tabindex="0" aria-label="Open project: POS Website"
          @click="go('pos-website')" @keydown="onKey($event, 'pos-website')">
          <TiltCard :width="1080" :height="1920" :depth="70" :rotationRange="18">
            <template #media>
              <img :src="ImgPOSWebsite" alt="POS Website preview"
                class="h-full w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-black/5" />
            </template>
          </TiltCard>
        </div>
      </div>
    </section>

    <div class="divider divider-neutral"></div>

    <!-- IoT Analytics -->
    <section class="work-hero">
      <div class="work-hero__grid">
        <div class="work-hero__copy clickable" role="link" tabindex="0"
          aria-label="Open project: IoT Analytics Platform" @click="go('iot-analytics-platform')"
          @keydown="onKey($event, 'iot-analytics-platform')">
          <div class="work-hero__heading">
            <h1><span>Internet-of-Things (IoT) Analytics Platform</span></h1>
            <div class="work-hero__index">03</div>
          </div>
          <div class="work-hero__rule"></div>
          <p class="work-hero__lede">
            An IoT integration & analytics platform for Arcadia Flora Tech, connecting field devices to the cloud with
            secure telemetry ingestion and real-time dashboards. Device management, alerting, and role-based insights
            turn sensor data into decisions.
          </p>
        </div>

        <div class="work-hero__media clickable" role="link" tabindex="0"
          aria-label="Open project: IoT Analytics Platform" @click="go('iot-analytics-platform')"
          @keydown="onKey($event, 'iot-analytics-platform')">
          <TiltCard :width="1080" :height="1920" :depth="70" :rotationRange="18">
            <template #media>
              <img :src="ImgArcadia" alt="IoT Analytics Platform preview"
                class="h-full w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-black/5" />
            </template>
          </TiltCard>
        </div>
      </div>
    </section>

    <div class="divider divider-neutral"></div>

    <!-- Spacerent BTP v2 -->
    <section class="work-hero">
      <div class="work-hero__grid">
        <div class="work-hero__copy clickable" role="link" tabindex="0" aria-label="Open project: Spacerent BTP v2"
          @click="go('spacerent-btp-v2')" @keydown="onKey($event, 'spacerent-btp-v2')">
          <div class="work-hero__heading">
            <h1><span>Spacerent BTP v2</span></h1>
            <div class="work-hero__index">04</div>
          </div>
          <div class="work-hero__rule"></div>
          <p class="work-hero__lede">
            Same fast booking—now smoother. Spacerent BTP v2 brings a mobile-first UI, clearer navigation, and a single
            inline
            booking flow with availability & conflict tips. Lighter components, skeleton loading, and smart prefetch
            keep it
            snappy even at peak—without changing how teams work.
          </p>
        </div>

        <div class="work-hero__media clickable" role="link" tabindex="0" aria-label="Open project: Spacerent BTP v2"
          @click="go('spacerent-btp-v2')" @keydown="onKey($event, 'spacerent-btp-v2')">
          <TiltCard :width="1080" :height="1920" :depth="70" :rotationRange="18">
            <template #media>
              <img :src="ImgSpacerentBTPv2" alt="Spacerent BTP v2 preview"
                class="h-full w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-black/5" />
            </template>
          </TiltCard>
        </div>
      </div>
    </section>

    <div class="divider divider-neutral"></div>

    <!-- MatchaKo Landing Page -->
    <section class="work-hero">
      <div class="work-hero__grid">
        <div class="work-hero__copy clickable" role="link" tabindex="0"
          aria-label="Open project: MatchaKo Indonesia Landing Page" @click="go('matchako-landing-page')"
          @keydown="onKey($event, 'matchako-landing-page')">
          <div class="work-hero__heading">
            <h1><span>MatchaKo Indonesia Landing Page</span></h1>
            <div class="work-hero__index">05</div>
          </div>
          <div class="work-hero__rule"></div>
          <p class="work-hero__lede">
            A conversion-focused landing page for MatchaKo Indonesia's franchise program. Fast, mobile-first, and built
            with an interactive ROI calculator to help prospective partners make informed decisions.
          </p>
        </div>

        <div class="work-hero__media clickable" role="link" tabindex="0"
          aria-label="Open project: MatchaKo Indonesia Landing Page" @click="go('matchako-landing-page')"
          @keydown="onKey($event, 'matchako-landing-page')">
          <TiltCard :width="1080" :height="1920" :depth="70" :rotationRange="18">
            <template #media>
              <img :src="ImgMatchakoLandingPage" alt="MatchaKo Indonesia Landing Page preview"
                class="h-full w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-black/5" />
            </template>
          </TiltCard>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Clickable helpers (aksesibilitas + UX) */
.clickable {
  cursor: pointer;
}

.clickable:focus-visible {
  outline: 2px solid #0ea5e9;
  /* sky-500 */
  outline-offset: 4px;
}

/* ===== page padding pakai CSS var biar bisa dihitung ulang di mobile ===== */
.work {
  --xpad: clamp(2rem, 8vw, 6rem);
  padding: clamp(3rem, 7vw, 5rem) var(--xpad);
}

/* texture */
.work__texture {
  position: absolute;
  inset: -15%;
  background-image: url('https://i.imgur.com/PsjPzdO.webp');
  background-size: 220px;
  background-repeat: repeat;
  mix-blend-mode: multiply;
  opacity: .24;
  pointer-events: none;
  z-index: 0;
}

/* blobs */
.work__blob {
  position: absolute;
  border-radius: 999px;
  filter: blur(110px);
  mix-blend-mode: multiply;
  z-index: 0;
}

@keyframes orbit-a {
  0% {
    transform: translate(0, -18%)
  }

  25% {
    translate: 18% 0
  }

  50% {
    translate: 0 18%
  }

  75% {
    translate: -18% 0
  }

  100% {
    translate: 0 -18%
  }
}

@keyframes orbit-b {
  0% {
    translate: 0 20%
  }

  25% {
    translate: -20% 0
  }

  50% {
    translate: 0 -20%
  }

  75% {
    translate: 20% 0
  }

  100% {
    translate: 0 20%
  }
}

@keyframes orbit-c {
  0% {
    translate: 0 -16%
  }

  25% {
    translate: 16% 0
  }

  50% {
    translate: 0 16%
  }

  75% {
    translate: -16% 0
  }

  100% {
    translate: 0 -16%
  }
}

@media (prefers-reduced-motion: reduce) {
  .work__blob {
    animation: none !important;
  }
}

/* ===== hero layout ===== */
.work-hero {
  position: relative;
  z-index: 1;
  margin-inline: auto;
  max-width: 1250px;
  padding-top: clamp(2rem, 5vw, 3rem);
  padding-bottom: clamp(2.5rem, 7vw, 4rem);
}

.work-hero__grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: clamp(1rem, 4vw, 3rem);
  align-items: start;
}

.work-hero__copy {
  display: grid;
  gap: clamp(1.2rem, 2vw, 1.8rem);
}

.work-hero__heading {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: clamp(1rem, 3vw, 3rem);
}

.work-hero__heading h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 6vw, 4.6rem);
  line-height: 1.08;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.work-hero__heading span {
  display: block;
}

.work-hero__index {
  font-family: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: clamp(.85rem, 1vw, .95rem);
  letter-spacing: .26em;
  text-transform: uppercase;
  color: rgba(15, 23, 42, .55);
  padding-left: clamp(1rem, 2vw, 1.5rem);
  border-left: 1px solid rgba(15, 23, 42, .35);
}

.work-hero__rule {
  height: 1px;
  width: 100%;
  background: rgba(15, 23, 42, .45);
}

.work-hero__lede {
  font-family: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  letter-spacing: .12em;
  line-height: 1.9;
  color: rgba(15, 23, 42, .7);
  max-width: 38rem;
}

.work-hero__media {
  justify-self: end;
}

/* ====== BREAKPOINT: tablet/phone ====== */
@media (max-width: 1250px) {
  .work {
    --xpad: clamp(1.25rem, 5vw, 2rem);
  }

  /* lebih rapat di mobile */
  .work-hero {
    padding-bottom: clamp(3.25rem, 10vw, 5rem);
  }

  .work-hero__heading {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 1rem;
  }

  .work-hero__index {
    border-left: none;
    padding-left: 0;
  }

  .work-hero__grid {
    grid-template-columns: 1fr;
    /* stack */
    place-items: center;
    /* center both areas */
    gap: clamp(2rem, 6vw, 3rem);
    width: 100%;
  }

  .work-hero__copy {
    text-align: center;
  }

  .work-hero__lede {
    margin-inline: auto;
  }

  .work-hero__media {
    width: 100%;
    display: grid;
    place-items: center;
    /* TRUE center */
    justify-self: center;
    margin-bottom: clamp(1rem, 4vw, 2rem);
  }

  /* Overwrite inline width/height dari TiltCard agar responsive */
  .work-hero__media>* {
    width: min(calc(100vw - (var(--xpad) * 2)), 560px) !important;
    max-width: 100%;
    height: auto !important;
    aspect-ratio: 4 / 3;
    margin-inline: auto;
  }

  :deep(.divider) {
    margin-block: clamp(1.5rem, 5vw, 2.25rem);
  }
}

/* (opsional) Phone kecil banget: batasi lagi */
@media (max-width: 480px) {
  .work-hero__media>* {
    width: calc(100vw - (var(--xpad) * 2)) !important;
    /* full width minus padding */
  }

  :deep(.divider) {
    margin-block: clamp(1.5rem, 5vw, 2.25rem);
  }
}
</style>
