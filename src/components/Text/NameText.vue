<script setup>
import { Motion } from "motion-v";

const transition = { duration: 2.2, ease: "easeInOut" };
</script>

<template>
  <h1 class="flex flex-col gap-5 text-3xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-4xl">
    <span>
      Hello, I'm
      <span class="relative inline-flex">
        <span class="px-1">Zara</span>
        <svg viewBox="0 0 286 73" fill="none"
          class="absolute -left-2 -right-2 translate-y-1 scale-x-[1.2] scale-y-[1.8]" aria-hidden="true">
          <Motion :as="'path'" :initial="{ pathLength: 0.001 }" :animate="{ pathLength: 1 }" :transition="transition"
            d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
            stroke="#ff2f2f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="transparent"
            vector-effect="non-scaling-stroke" />
        </svg>
      </span>
      👋
    </span>

    <span>A Full-Stack Alchemist.</span>
  </h1>
</template>
