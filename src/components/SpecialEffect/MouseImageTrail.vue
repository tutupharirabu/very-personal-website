<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: Array,
  renderImageBuffer: { type: Number, default: 50 },
  rotationRange: { type: Number, default: 25 },
})

const containerRef = ref(null)
const ready = ref(false)

let last = { x: 0, y: 0 }
let renderCount = 0

let rect // cache bounds
const updateRect = () => { rect = containerRef.value?.getBoundingClientRect() }

const preloadAll = async (srcs) => {
  await Promise.all(
    srcs.map(src => new Promise(res => {
      const img = new Image()
      img.src = src
      // decode() is best (non-blocking); fall back to onload
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

const ENTER = 500
const HOLD = 5000
const EXIT = 500
const TOTAL = ENTER + HOLD + EXIT

const renderNext = (x, y) => {
  const idx = renderCount % props.images.length
  const el = containerRef.value?.querySelector(`[data-mouse-move-index="${idx}"]`)
  if (!el) return

  el.getAnimations().forEach(a => a.cancel())

  el.style.top = `${y}px`
  el.style.left = `${x}px`
  el.style.zIndex = String(renderCount)
  el.style.willChange = 'transform, opacity'

  const rot = Math.random() * props.rotationRange
  const sign = idx % 2 ? 1 : -1

  const anim = el.animate(
    [
      { opacity: 0, transform: `translate3d(-50%,-25%,0) scale(.5) rotate(${sign * rot}deg)`, offset: 0 },
      { opacity: 1, transform: `translate3d(-50%,-50%,0) scale(1) rotate(${-sign * rot}deg)`, offset: ENTER / TOTAL },
      { opacity: 1, transform: `translate3d(-50%,-50%,0) scale(1) rotate(${-sign * rot}deg)`, offset: (ENTER + HOLD) / TOTAL },
      { opacity: 0, transform: `translate3d(-50%,-50%,0) scale(1) rotate(${-sign * rot}deg)`, offset: 1 },
    ],
    { duration: TOTAL, easing: 'linear', fill: 'forwards' }
  )
  anim.finished.then(() => { el.style.willChange = 'auto' })

  renderCount++
}

// rAF throttle so we don’t do work on every mouse event
let rafPending = false
let nextX = 0, nextY = 0

const handleCoords = (clientX, clientY) => {
  if (!ready.value) return
  if (!rect) updateRect()
  nextX = clientX - rect.left
  nextY = clientY - rect.top
  if (rafPending) return
  rafPending = true
  requestAnimationFrame(() => {
    if (dist(nextX, nextY, last.x, last.y) >= props.renderImageBuffer) {
      last = { x: nextX, y: nextY }
      renderNext(nextX, nextY)
    }
    rafPending = false
  })
}

const onMove = (e) => handleCoords(e.clientX, e.clientY)

const onTouch = (e) => {
  const touch = e.touches[0]
  if (touch) handleCoords(touch.clientX, touch.clientY)
}
</script>

<template>
  <div ref="containerRef" class="mouse-trail" @mousemove="onMove" @mouseenter="updateRect()" @touchmove.passive="onTouch" @touchstart.passive="updateRect()">
    <slot />
    <img v-for="(img, i) in images" :key="i" :src="img" :alt="`mouse move image ${i}`" :data-mouse-move-index="i"
      v-show="ready" loading="eager" decoding="async" class="trail-img" />
  </div>
</template>

<style scoped>
.mouse-trail {
  position: relative;
  overflow: hidden;
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
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  contain: layout paint;
}
</style>
