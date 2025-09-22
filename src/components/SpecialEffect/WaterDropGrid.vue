<script setup>
import { animate, stagger } from 'animejs'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  /* existing props */
  minCols: { type: Number, default: 14 },
  minRows: { type: Number, default: 24 },
  cellSize: { type: Number, default: 26 },
  cellGap: { type: Number, default: 14 },
  mobileBreakpoint: { type: Number, default: 768 },
  mobileMinCols: { type: Number, default: 12 },
  mobileMaxCols: { type: Number, default: 15 },
  mobileMinRows: { type: Number, default: 4 },
  mobileMaxRows: { type: Number, default: 6 },

  /* NEW */
  orientation: {
    type: String,
    default: 'vertical', // 'vertical' | 'horizontal'
    validator: v => ['vertical', 'horizontal'].includes(v),
  },
  bandHeight: { type: Number, default: 160 }, // px, only used when horizontal
})

const containerRef = ref(null)
const columns = ref(props.minCols)
const rows = ref(props.minRows)
const isMobile = ref(false)

const isHorizontal = computed(() => props.orientation === 'horizontal')

const dots = computed(() =>
  Array.from({ length: columns.value * rows.value }, (_, i) => i)
)

const gridStyles = computed(() => ({
  gridTemplateColumns: `repeat(${columns.value}, 1fr)`,
  gridTemplateRows: `repeat(${rows.value}, 1fr)`,
  ...(isHorizontal.value ? { '--band-h': `${props.bandHeight}px` } : {}),
}))

let resizeObserver
let resizeListener

const clamp = (v, min, max) => (min != null && v < min ? min : max != null && v > max ? max : v)

const updateGridFromRect = rect => {
  const { width, height } = rect

  const rawCols = Math.floor((width + props.cellGap) / (props.cellSize + props.cellGap))
  const rawRows = Math.floor((height + props.cellGap) / (props.cellSize + props.cellGap))

  let computedCols = Math.max(props.minCols, rawCols)
  let computedRows = Math.max(props.minRows, rawRows)

  if (isMobile.value) {
    computedCols = clamp(computedCols, props.mobileMinCols, props.mobileMaxCols)
    computedRows = clamp(computedRows, props.mobileMinRows, props.mobileMaxRows)
  }

  // 🧩 horizontal band wants FEW rows (2–4) but many columns
  if (isHorizontal.value) {
    computedRows = clamp(rawRows, 2, 4)
    // keep lots of columns; let width drive it (no extra clamp here)
  }

  if (computedCols !== columns.value) columns.value = computedCols
  if (computedRows !== rows.value) rows.value = computedRows
}

const observeContainer = () => {
  const el = containerRef.value
  if (!el || typeof ResizeObserver === 'undefined') return
  resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) updateGridFromRect(entry.contentRect)
  })
  resizeObserver.observe(el)
  updateGridFromRect(el.getBoundingClientRect())
}

const stopObserving = () => {
  if (resizeObserver) resizeObserver.disconnect()
  resizeObserver = undefined
}

const updateViewportState = () => {
  if (typeof window === 'undefined') return
  isMobile.value = window.innerWidth <= props.mobileBreakpoint
}

onMounted(() => {
  updateViewportState()
  if (typeof window !== 'undefined') {
    resizeListener = () => {
      updateViewportState()
      const el = containerRef.value
      if (el) updateGridFromRect(el.getBoundingClientRect())
    }
    window.addEventListener('resize', resizeListener, { passive: true })
  }
  observeContainer()
})

onBeforeUnmount(() => {
  stopObserving()
  if (resizeListener && typeof window !== 'undefined') {
    window.removeEventListener('resize', resizeListener)
    resizeListener = undefined
  }
})

const handleDotClick = e => {
  const gridEl = containerRef.value
  if (!gridEl) return
  const target = e.target.closest('[data-index]')
  if (!target) return

  const dotNodes = gridEl.querySelectorAll('.dot-point')

  animate(dotNodes, {
    keyframes: [
      { scale: 1.35, translateY: -15, opacity: 1, easing: 'easeOutSine', duration: 250 },
      { scale: 1, translateY: 0, opacity: 0.5, easing: 'easeInOutQuad', duration: 500 },
    ],
    delay: stagger(100, { grid: [columns.value, rows.value], from: Number(target.dataset.index) }),
  })
}
</script>

<template>
  <div ref="containerRef" class="water-drop-grid" :class="{ 'is-horizontal': isHorizontal }" :style="gridStyles"
    role="presentation" @click="handleDotClick">
    <div v-for="dot in dots" :key="dot" class="water-drop-grid__cell" :data-index="dot">
      <span class="dot-point" :data-index="dot"></span>
    </div>
  </div>
</template>

<style scoped>
.water-drop-grid {
  display: grid;
  gap: clamp(0.3rem, 0.55vw, 0.5rem);
  padding: clamp(1.35rem, 2.2vw, 2.1rem);
  border-radius: clamp(1.8rem, 3vw, 3.4rem);
  background: transparent;
  cursor: crosshair;
  width: 100%;
  height: 100%;
  justify-items: center;
  justify-content: center;
  align-content: stretch;
}

.water-drop-grid__cell {
  display: grid;
  place-items: center;
  border-radius: 999px;
  padding: clamp(0.3rem, 0.5vw, 0.45rem);
  cursor: inherit;
}

.dot-point {
  display: block;
  width: clamp(6px, 0.6vw, 10px);
  height: clamp(6px, 0.6vw, 10px);
  border-radius: 999px;
  background: linear-gradient(180deg, #4b5563 0%, #cbd5f5 100%);
  opacity: 0.5;
  transition: background 0.2s ease, opacity 0.2s ease;
}

.water-drop-grid__cell:hover .dot-point,
.water-drop-grid__cell:focus-visible .dot-point {
  background: linear-gradient(180deg, #4f46e5 0%, #ffffff 100%);
  opacity: 0.85;
}

.water-drop-grid__cell:focus-visible {
  outline: 2px solid rgba(79, 70, 229, 0.35);
  outline-offset: 2px;
}

/* 🔛 horizontal band tweaks */
.water-drop-grid.is-horizontal {
  height: var(--band-h, 160px);
  /* set by prop */
  align-content: center;
  padding-block: clamp(0.8rem, 1.6vw, 1.2rem);
  border-radius: clamp(1.2rem, 2vw, 2rem);
}

.water-drop-grid.is-horizontal .dot-point {
  width: clamp(5px, 0.5vw, 8px);
  height: clamp(5px, 0.5vw, 8px);
}

/* smaller gaps on tiny screens */
@media (max-width: 640px) {
  .water-drop-grid {
    gap: clamp(0.25rem, 1.8vw, 0.45rem);
  }
}
</style>
