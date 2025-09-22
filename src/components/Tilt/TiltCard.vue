<!-- TiltCardExample.vue -->
<script setup>
import { ref, useSlots, computed } from 'vue'
import { Motion, useMotionTemplate, useMotionValue, useSpring } from 'motion-v'

const ROTATION_RANGE = 32.5
const HALF = ROTATION_RANGE / 2

const cardEl = ref(null)

const x = useMotionValue(0)
const y = useMotionValue(0)
const xSpring = useSpring(x, { stiffness: 160, damping: 20, mass: 0.6 })
const ySpring = useSpring(y, { stiffness: 160, damping: 20, mass: 0.6 })
const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`
const setCardRef = (el) => { cardEl.value = el?.$el ?? el }

function onMove(e) {
  const el = cardEl.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const mouseX = (e.clientX - r.left) * ROTATION_RANGE
  const mouseY = (e.clientY - r.top) * ROTATION_RANGE
  x.set((mouseY / r.height - HALF) * -1)
  y.set(mouseX / r.width - HALF)
}
function onLeave() { x.set(0); y.set(0) }

// ---- Deteksi apakah slot "media" mengandung <img> ----
const slots = useSlots()
function hasImgVNode(nodes) {
  if (!nodes) return false
  return nodes.some((n) => {
    if (typeof n.type === 'string' && n.type.toLowerCase() === 'img') return true
    if (Array.isArray(n.children)) return hasImgVNode(n.children)
    return false
  })
}
const hasImageMedia = computed(() => hasImgVNode(slots.media?.()))
</script>

<template>
  <div class="grid w-full place-content-center bg-gradient-to-br px-4 py-12 text-neutral-900">
    <Motion :ref="setCardRef" :style="{ transformStyle: 'preserve-3d', transform }"
      class="relative lg:w-[44rem] lg:h-[28rem] md:w-[44rem] md:h-[28rem] w-[22rem] h-[18rem] rounded-[2rem] bg-neutral-900/95"
      @mousemove="onMove" @mouseleave="onLeave">
      <!-- halo / shadow -->
      <div class="pointer-events-none absolute -inset-6 -z-10 rounded-[2.6rem]
               bg-gradient-to-br from-neutral-400 to-neutral-600 blur-xl opacity-70" aria-hidden="true" />

      <!-- MODE 1: kalau slot 'media' berisi <img> -> full-bleed image -->
      <div v-if="hasImageMedia" class="absolute inset-6 sm:inset-8"
        style="transform: translateZ(75px); transform-style: preserve-3d;">
        <slot name="media" />
      </div>

      <!-- MODE 2: selain <img> -> panel putih + icon/teks -->
      <div v-else class="absolute inset-10 grid place-content-center gap-4
               rounded-[1.6rem] bg-white text-center text-neutral-900 ring-1 ring-neutral-200"
        style="transform: translateZ(75px); transform-style: preserve-3d;">
        <div class="tilt-media" style="transform: translateZ(75px);">
          <slot name="media">
            <!-- fallback icon -->
            <svg viewBox="0 0 24 24" class="mx-auto h-10 w-10 text-neutral-700" fill="none" stroke="currentColor"
              stroke-width="2">
              <path d="M3 3l7 17 2-7 7-2-16-8z" />
            </svg>
          </slot>
        </div>

        <div class="tilt-title text-2xl font-bold tracking-wide" style="transform: translateZ(50px);">
          <slot>HOVER ME</slot>
        </div>
      </div>
    </Motion>
  </div>
</template>

<style scoped>
/* Bikin slotted <img> otomatis full-bleed & rapi */
::v-deep([slot="media"] img),
::v-deep(template[slot="media"] img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.6rem;
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.18);
}

.tilt-media img,
.tilt-media svg {
  max-width: clamp(3.5rem, 12vw, 6rem);
  max-height: clamp(3.5rem, 12vw, 6rem);
  object-fit: cover;
}
</style>
