<script setup>
const bioParagraphs = [
  "I believe that most problems, whether in code, business, or daily life, are really just systems waiting to be understood. That curiosity to figure out how things actually work, and why they sometimes don’t, is what gets me going every day.",
  "I learn by doing and by getting close to the problem. That means sitting with business teams to understand their pain, tracing where systems break, and building solutions that fit the people using them. I move between tech and operations naturally, because to me they’re just two sides of the same question.",
  "Right now I’m a fresh grad from Telkom University, working as an IT System Analyst at Matchako Indonesia, and growing into cybersecurity with a DevSecOps mindset. Outside of that, I run Arunika Gaming Shop and co-own matchako.dalamkampus. Different worlds, same approach.",
]

const highlightGrid = [
  { heading: 'Location', lines: ['Bandung, Indonesia'] },
  { heading: 'Experience', lines: ['1+ year building fullstack systems end-to-end'] },
  { heading: 'Superpower', lines: ['Tracing where systems break and building solutions that fit the people using them'] },
  { heading: 'Reading', lines: ['Start With Why', 'by Simon Sinek'] },
  { heading: 'Learning', indent: true, lines: ['• System Analysis methodology', '• Cybersecurity fundamentals', '• DevSecOps practices', '• Multi-agent AI orchestration, building role-specific agents (marketing, HRD, ops) with fine-tuned prompts per position'] },
  {
    heading: 'Toolbox',
    indent: true,
    lines: [
      '• Frontend: Vue.js · Inertia.js · Alpine.js · Preact.js · Astro.js',
      '• Backend: Laravel (PHP) · Node.js · Adonis.js',
      '• Data: PostgreSQL · MySQL · Redis (cache/queue)',
      '• Messaging/IoT: MQTT · RabbitMQ',
      '• Infra: Docker · Nginx · Linux · CI/CD (Jenkins)',
      '• Cloud Infra: GCP (Cloud Run, Cloud SQL) · AWS (ECS) · Cloudflare · Terraform (IaC) · Dalang.io',
      '• Observability: Prometheus · Grafana · Umami · Uptime Kuma'
    ]
  },
  { heading: 'Favorite Matcha', lines: ['Signature Matcha Latte 🍵', 'with extra creamy foam'] },
  { heading: 'Currently Building', lines: ['Arunika Gaming Shop', 'matchako.dalamkampus', 'MatchaKo Indonesia internal tools'] },
]

import ReadyToBuildText from '@/components/Text/ReadyToBuildText.vue';
import RevealLinks from '@/components/RevealLink/RevealLinks.vue';

defineOptions({ name: 'AboutPage' })

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
</script>

<template>
  <main class="about bg-[radial-gradient(circle_at_bottom,_rgba(230,233,242,0.8),_#f6f6f6_45%,_white_100%)]">
    <!-- 🌟 BG with texture + blob -->
    <div class="about__bg" aria-hidden="true">
      <div class="about__texture"></div>

      <div v-for="blob in blobs" :key="blob.id" class="about__blob" :style="blob.style"></div>
    </div>

    <section class="about__content relative z-10">
      <div class="about__hero">
        <div class="about__bio">
          <h1 class="about__headline">Why hello there!</h1>
          <p v-for="(copy, index) in bioParagraphs" :key="index" class="about__paragraph">
            {{ copy }}
          </p>
        </div>

        <div></div>

        <figure class="about__portrait">
          <img src="@/assets/irfan.webp" alt="Portrait of Zara" />
        </figure>
      </div>

      <div class="about__table">
        <div v-for="item in highlightGrid" :key="item.heading" class="about__table-cell">
          <h3 class="about__table-heading">{{ item.heading }}</h3>
          <p v-for="line in item.lines" :key="line"
            :class="['about__table-line', { 'about__table-line--indent': item.indent }]">{{ line }}</p>
        </div>
      </div>
    </section>

    <br>
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

<style scoped>
.about {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: #f7f5f2;
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 7vw, 6rem);
  color: #1f2933;
}

/* === BG wrapper === */
.about__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

/* 🌌 texture layer */
.about__texture {
  position: absolute;
  inset: -10%;
  background-image: url("https://i.imgur.com/PsjPzdO.png");
  /* noise PNG */
  background-size: 220px;
  mix-blend-mode: overlay;
  opacity: 0.35;
  z-index: 0;
}

/* === Blob === */
.about__blob {
  position: absolute;
  border-radius: 999px;
  filter: blur(110px);
  mix-blend-mode: multiply;
}

/* animasi orbit */
@keyframes orbit-a {
  0% {
    transform: translate(0, -18%);
  }

  25% {
    transform: translate(18%, 0);
  }

  50% {
    transform: translate(0, 18%);
  }

  75% {
    transform: translate(-18%, 0);
  }

  100% {
    transform: translate(0, -18%);
  }
}

@keyframes orbit-b {
  0% {
    transform: translate(0, 20%);
  }

  25% {
    transform: translate(-20%, 0);
  }

  50% {
    transform: translate(0, -20%);
  }

  75% {
    transform: translate(20%, 0);
  }

  100% {
    transform: translate(0, 20%);
  }
}

@keyframes orbit-c {
  0% {
    transform: translate(0, -16%);
  }

  25% {
    transform: translate(16%, 0);
  }

  50% {
    transform: translate(0, 16%);
  }

  75% {
    transform: translate(-16%, 0);
  }

  100% {
    transform: translate(0, -16%);
  }
}

/* reduce motion */
@media (prefers-reduced-motion: reduce) {
  .about__blob {
    animation: none !important;
  }
}

/* === content === */
.about__content {
  margin-inline: auto;
  max-width: 1100px;
  display: grid;
  gap: clamp(3rem, 6vw, 4.5rem);
}

.about__hero {
  display: grid;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  position: relative;
}

.about__bio {
  display: grid;
  gap: clamp(1.2rem, 2.5vw, 1.7rem);
}

.about__headline {
  font-family: 'Playfair Display', serif;
  /* tetap serif */
  font-size: clamp(2.75rem, 4.5vw, 3.75rem);
  font-weight: 700;
}

.about__paragraph {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  /* ⬅️ jadi serif */
  font-size: clamp(1rem, 1.3vw, 1.1rem);
  line-height: 1.8;
  color: rgba(31, 41, 51, 0.78);
}

/* portrait */
.about__portrait {
  justify-self: center;
  position: relative;
  border-radius: 2.2rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(231, 229, 221, 0.82));
  padding: clamp(1rem, 2.5vw, 1.5rem);
  box-shadow: 0 35px 70px rgba(15, 23, 42, 0.12);
  z-index: 1;
}

.about__portrait img {
  display: block;
  width: clamp(420px, 32vw, 480px);
  height: clamp(420px, 32vw, 480px);
  object-fit: cover;
  border-radius: 1.6rem;
}

/* table */
.about__table {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  border: 1px solid rgba(55, 65, 81, 0.22);
  border-radius: 1.5rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.08);
  z-index: 1;
}

.about__table-cell {
  padding: clamp(1.5rem, 2.5vw, 2.2rem);
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  min-height: 140px;
  border-right: 1px solid rgba(55, 65, 81, 0.18);
  border-bottom: 1px solid rgba(55, 65, 81, 0.18);
}

.about__table-cell:nth-child(3n) {
  border-right: none;
}

.about__table-cell:nth-last-child(-n + 3) {
  border-bottom: none;
}

/* heading tabel */
.about__table-heading {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  /* ⬅️ jadi mono */
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* baris tabel */
.about__table-line--indent {
  padding-left: 1em;
  text-indent: -1em;
}

.about__table-line {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  /* ⬅️ mono */
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(31, 41, 51, 0.75);
}

/* responsive grid table */
@media (min-width: 960px) {
  .about__hero {
    grid-template-columns: 1.8fr auto 1.2fr;
  }
}

@media (max-width: 900px) {
  .about__table {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    border-radius: 1.2rem;
  }

  .about__table-cell:nth-child(3n) {
    border-right: 1px solid rgba(55, 65, 81, .18);
  }

  .about__table-cell:nth-child(2n) {
    border-right: none;
  }

  /* reset rule 3-column, lalu terapkan 2-column */
  .about__table-cell:nth-last-child(-n + 3) {
    border-bottom: 1px solid rgba(55, 65, 81, 0.18);
  }

  .about__table-cell:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 640px) {
  .about__table {
    grid-template-columns: 1fr;
  }

  .about__table-cell {
    border-right: none;
  }

  /* reset semua rule sebelumnya, hanya last-child yang tanpa border */
  .about__table-cell:nth-last-child(-n + 3),
  .about__table-cell:nth-last-child(-n + 2) {
    border-bottom: 1px solid rgba(55, 65, 81, 0.18);
  }

  .about__table-cell:last-child {
    border-bottom: none;
  }
}
</style>
