<script setup>
import { animate, stagger } from 'animejs'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  minCols: {
    type: Number,
    default: 14,
  },
  minRows: {
    type: Number,
    default: 24,
  },
  cellSize: {
    type: Number,
    default: 26,
  },
  cellGap: {
    type: Number,
    default: 14,
  },
  mobileBreakpoint: {
    type: Number,
    default: 768,
  },
  mobileMinCols: {
    type: Number,
    default: 12,
  },
  mobileMaxCols: {
    type: Number,
    default: 15,
  },
  mobileMinRows: {
    type: Number,
    default: 4,
  },
  mobileMaxRows: {
    type: Number,
    default: 6,
  },
})

const containerRef = ref(null)
const columns = ref(props.minCols)
const rows = ref(props.minRows)
const isMobile = ref(false)

const dots = computed(() => Array.from({ length: columns.value * rows.value }, (_, index) => index))

const gridStyles = computed(() => ({
  gridTemplateColumns: `repeat(${columns.value}, 1fr)`,
  gridTemplateRows: `repeat(${rows.value}, 1fr)`,
}))

let resizeObserver
let resizeListener

const clamp = (value, min, max) => {
  if (typeof min === 'number' && value < min) return min
  if (typeof max === 'number' && value > max) return max
  return value
}

const effectiveMinCols = () => (isMobile.value ? props.mobileMinCols : props.minCols)
const effectiveMinRows = () => (isMobile.value ? props.mobileMinRows : props.minRows)

const updateGridFromRect = rect => {
  const width = rect.width
  const height = rect.height

  const rawCols = Math.floor((width + props.cellGap) / (props.cellSize + props.cellGap))
  const rawRows = Math.floor((height + props.cellGap) / (props.cellSize + props.cellGap))

  let computedCols = Math.max(effectiveMinCols(), rawCols)
  let computedRows = Math.max(effectiveMinRows(), rawRows)

  if (isMobile.value) {
    computedCols = clamp(computedCols, props.mobileMinCols, props.mobileMaxCols)
    computedRows = clamp(computedRows, props.mobileMinRows, props.mobileMaxRows)
  }

  if (computedCols !== columns.value) {
    columns.value = computedCols
  }
  if (computedRows !== rows.value) {
    rows.value = computedRows
  }
}

const observeContainer = () => {
  const el = containerRef.value
  if (!el || typeof ResizeObserver === 'undefined') return

  resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      const rect = entry.contentRect
      updateGridFromRect(rect)
    }
  })
  resizeObserver.observe(el)
  updateGridFromRect(el.getBoundingClientRect())
}

const stopObserving = () => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = undefined
  }
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

const handleDotClick = event => {
  const gridEl = containerRef.value
  if (!gridEl) return

  const target = event.target.closest('[data-index]')
  if (!target) return

  const dotNodes = gridEl.querySelectorAll('.dot-point')

  animate(dotNodes, {
    keyframes: [
      {
        scale: 1.35,
        translateY: -15,
        opacity: 1,
        easing: 'easeOutSine',
        duration: 250,
      },
      {
        scale: 1,
        translateY: 0,
        opacity: 0.5,
        easing: 'easeInOutQuad',
        duration: 500,
      },
    ],
    delay: stagger(100, {
      grid: [columns.value, rows.value],
      from: Number(target.dataset.index),
    }),
  })
}
</script>

<template>
  <div ref="containerRef" class="water-drop-grid" :style="gridStyles" role="presentation" @click="handleDotClick">
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
</style>
