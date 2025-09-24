<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: Array,
  renderImageBuffer: { type: Number, default: 50 },
  rotationRange: { type: Number, default: 25 },
})

const containerRef = ref(null)
const ready = ref(false)

const last = ref({ x: 0, y: 0 })
const renderCount = ref(0)
const isPointerDown = ref(false)

let rect
const updateRect = () => { rect = containerRef.value?.getBoundingClientRect() }

const preloadAll = async (srcs) => {
  await Promise.all(
    srcs.map(src => new Promise(res => {
      const img = new Image()
      img.src = src
      if (img.decode) img.decode().then(res).catch(res)
      else img.onload = () => res()
    }))
  )
}

onMounted(async () => {
  updateRect()
  window.addEventListener('resize', updateRect, { passive: true })
  await preloadAll(props.images)
  ready.value = true
})
onBeforeUnmount(() => window.removeEventListener('resize', updateRect))

const dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)

const renderNext = (x, y) => {
  const idx = renderCount.value % props.images.length
  const el = containerRef.value?.querySelector(`[data-mouse-move-index="${idx}"]`)
  if (!el) return

  el.style.top = `${y}px`
  el.style.left = `${x}px`
  el.style.zIndex = String(renderCount.value)

  const rot = Math.random() * props.rotationRange
  const sign = idx % 2 ? 1 : -1

  el.animate(
    [
      { opacity: 0, transform: `translate3d(-50%,-25%,0) scale(.5) rotate(${sign * rot}deg)` },
      { opacity: 1, transform: `translate3d(-50%,-50%,0) scale(1) rotate(${-sign * rot}deg)` },
    ],
    { duration: 500, easing: 'cubic-bezier(.2,.6,.2,1)', fill: 'forwards' }
  )
  el.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 500, delay: 5000, easing: 'linear', fill: 'forwards',
  })

  renderCount.value++
}

/* -------- Pointer Events (mouse + touch) -------- */
let rafPending = false
let nextX = 0, nextY = 0

const handleMove = (clientX, clientY) => {
  if (!ready.value) return
  if (!rect) updateRect()
  nextX = clientX - rect.left
  nextY = clientY - rect.top
  if (rafPending) return
  rafPending = true
  requestAnimationFrame(() => {
    if (dist(nextX, nextY, last.value.x, last.value.y) >= props.renderImageBuffer) {
      last.value = { x: nextX, y: nextY }
      renderNext(nextX, nextY)
    }
    rafPending = false
  })
}

const onPointerDown = (e) => {
  isPointerDown.value = true
  updateRect()
  handleMove(e.clientX, e.clientY) // sprinkle on first touch
}
const onPointerMove = (e) => {
  // For touch, only draw while finger is down; for mouse, always
  if (e.pointerType === 'touch' && !isPointerDown.value) return
  handleMove(e.clientX, e.clientY)
}
const onPointerUp = () => { isPointerDown.value = false }

</script>

<template>
  <div ref="containerRef" class="mouse-trail" @pointerdown="onPointerDown" @pointermove="onPointerMove"
    @pointerup="onPointerUp" @pointercancel="onPointerUp" @mouseleave="onPointerUp" @pointerenter="updateRect()">
    <slot />
    <img v-for="(img, i) in images" :key="i" :src="img" :alt="`mouse move image ${i}`" :data-mouse-move-index="i"
      v-show="ready" loading="eager" decoding="async" fetchpriority="high" class="trail-img" />
  </div>
</template>

<style scoped>
.mouse-trail {
  position: relative;
  overflow: hidden;
  /* allow free drawing on touch without scrolling the page inside this area */
  touch-action: none;
  /* or 'pan-y' if you want vertical scroll to pass through */
}

.trail-img {
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  height: 12rem;
  width: auto;
  border-radius: .75rem;
  border: 2px solid #000;
  object-fit: cover;
  opacity: 0;
  will-change: transform, opacity;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  contain: layout paint;
}
</style>
