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
          class="relative max-w-sm rounded-[2.5rem] bg-slate-900/95 px-7 py-6 font-mono text-[0.9rem] leading-relaxed text-slate-100 shadow-xl shadow-slate-900/25">
          <span
            class="absolute -top-6 left-8 inline-flex items-center justify-center rounded-full border border-slate-950 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-900 shadow-[0_14px_18px_rgba(15,23,42,0.18)]">
            2025 update
          </span>
          Wrapping up my final year at Telkom University while juggling backend, DevOps, coffee, matcha, and a game shop
          &mdash; call it my "multi-threaded life".
        </div>

        <h1 class="flex flex-col gap-5 text-3xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-4xl">
          <span>Hello, I'm Zara &#128075;</span>
          <span>A Full-Stack Alchemist.</span>
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
  </main>
</template>

<script setup>
import WaterDropGrid from '@/components/WaterDropGrid.vue'

defineOptions({
  name: 'HomePage'
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
  position: absolute;
  width: min(80vmin, 620px);
  height: min(80vmin, 620px);
  border-radius: 999px;
  filter: blur(110px);
  mix-blend-mode: multiply;
  opacity: 0.9;
}

.hero-background__shape--a {
  background: #FFD93D;
  animation: hero-background-circular-alt 42s linear infinite;
}

.hero-background__shape--b {
  background: #ff6f4c;
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
