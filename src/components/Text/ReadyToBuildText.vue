<script setup>
import { Motion } from "motion-v";

const transition = { duration: 2.5, ease: "easeInOut" };
</script>

<template>
  <section class="relative overflow-hidden px-6 py-12 text-slate-900">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(14,116,144,0.12),_transparent_55%)]">
    </div>

    <div class="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
      <div class="space-y-3">
        <h2 class="font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          <span class="relative inline-flex">
            <span class="px-1">Ready to build</span>

            <!-- underline animasi responsif -->
            <svg viewBox="0 0 286 73" fill="none"
              class="absolute left-0 right-0 bottom-0 h-12 translate-y- translate-x-12 scale-x-[1.6] sm:h-16 sm:translate-y-1 sm:translate-x-10 sm:scale-x-[1.6]"
              aria-hidden="true">
              <Motion :as="'path'" :initial="{ pathLength: 0.001 }" :animate="{ pathLength: 1 }"
                :transition="transition"
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#6BCB77" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"
                vector-effect="non-scaling-stroke" />
            </svg>
          </span>
          something amazing?
        </h2>

        <p class="font-mono text-base leading-relaxed text-slate-600">
          I'd love to connect with you!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tambahan untuk layar sangat kecil */
@media (max-width: 480px) {
  svg[aria-hidden="true"] {
    height: 2.5rem;
    transform: translateX(-0.25rem) translateY(0rem) scaleX(1.2) scaleY(1);
  }
}
</style>
