<script setup>
import { Motion } from "motion-v";
import { computed } from "vue";

const props = defineProps({
  label: { type: String, required: true },
  href: { type: String, default: "#" },
  duration: { type: Number, default: 0.25 },
  stagger: { type: Number, default: 0.025 },
});

// pecah teks jadi huruf
const letters = computed(() => props.label.split(""));
</script>

<template>
  <!-- pakai Motion sebagai anchor -->
  <Motion :as="'a'" :initial="'initial'" :whileHover="'hovered'" :href="href"
    class="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
    :style="{ lineHeight: 0.75 }">
    <!-- baris atas: dari y:0 ke -100% saat hover -->
    <div>
      <Motion v-for="(l, i) in letters" :key="`top-${i}-${l}`" :as="'span'" class="inline-block" :variants="{
        initial: { y: 0 },
        hovered: { y: '-100%' }
      }" :transition="{
        duration,
        ease: 'easeInOut',
        delay: stagger * i
      }">
        {{ l }}
      </Motion>
    </div>

    <!-- baris bawah: dari y:100% ke 0 saat hover -->
    <div class="absolute inset-0">
      <Motion v-for="(l, i) in letters" :key="`bottom-${i}-${l}`" :as="'span'" class="inline-block" :variants="{
        initial: { y: '100%' },
        hovered: { y: 0 }
      }" :transition="{
        duration,
        ease: 'easeInOut',
        delay: stagger * i
      }">
        {{ l }}
      </Motion>
    </div>
  </Motion>
</template>
