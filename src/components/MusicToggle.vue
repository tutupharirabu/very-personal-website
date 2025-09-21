<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from "vue";

const props = defineProps({
  src: { type: String, required: true },   // contoh: new URL('@/assets/music.mp3', import.meta.url).href
  volume: { type: Number, default: 0.6 },  // 0..1
  rampMs: { type: Number, default: 420 },  // durasi pelunakan volume
});

const audioRef = ref(null);
const isPlaying = ref(false);
const vol = ref(props.volume);

const STORAGE_KEY = "music_toggle_state_v1";
let keydownHandler;
let firstGestureHandler;
let rafId = null;

const clamp01 = (n) => Math.max(0, Math.min(1, n));
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

const save = () =>
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ playing: isPlaying.value, volume: vol.value })
  );

async function play() {
  try {
    if (!audioRef.value) return;
    audioRef.value.loop = true;
    audioRef.value.volume = clamp01(vol.value);
    await audioRef.value.play();
    isPlaying.value = true;
    save();
  } catch {
    // autoplay mungkin diblokir; akan dipicu oleh gesture pertama
  }
}

function pause() {
  if (audioRef.value) audioRef.value.pause();
  isPlaying.value = false;
  save();
}

const toggle = () => (isPlaying.value ? pause() : play());

// ramp volume halus
function rampVolume(target, duration = props.rampMs) {
  if (!audioRef.value) return;
  cancelAnimationFrame(rafId);

  const start = clamp01(audioRef.value.volume ?? vol.value);
  const end = clamp01(target);
  if (Math.abs(end - start) < 0.001) {
    audioRef.value.volume = end;
    return;
  }

  const t0 = performance.now();
  const step = (now) => {
    const p = Math.min((now - t0) / duration, 1);
    audioRef.value.volume = start + (end - start) * ease(p);
    if (p < 1) rafId = requestAnimationFrame(step);
  };
  rafId = requestAnimationFrame(step);
}

// gesture pertama = selalu coba play
function firstGesturePlay() {
  if (!isPlaying.value) play();
}

onMounted(() => {
  // restore state
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  if (typeof saved.volume === "number") vol.value = clamp01(saved.volume);
  if (audioRef.value) audioRef.value.volume = clamp01(vol.value);

  // coba langsung (akan diblok kalau tak ada gesture)
  play();

  // fallback: play pada gesture pertama di mana saja
  firstGestureHandler = () => firstGesturePlay();
  document.addEventListener("pointerdown", firstGestureHandler, {
    once: true,
    capture: true,
    passive: true,
  });

  // shortcut "M"
  keydownHandler = (e) => {
    if (e.key?.toLowerCase() === "m") toggle();
  };
  document.addEventListener("keydown", keydownHandler);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId);
  document.removeEventListener("keydown", keydownHandler);
  if (firstGestureHandler)
    document.removeEventListener("pointerdown", firstGestureHandler, { capture: true });
});

// ramp saat slider berubah
watch(vol, (v) => {
  if (!audioRef.value) return;
  rampVolume(v, props.rampMs);
  save();
});

// UI popover
const showVol = ref(false);
let hideTimer;
function openVol() {
  clearTimeout(hideTimer);
  showVol.value = true;
}
function hideLater() {
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => (showVol.value = false), 500);
}
</script>

<template>
  <!-- audio tag -->
  <audio ref="audioRef" :src="src" preload="auto" playsinline />

  <!-- Floating control -->
  <div class="fixed bottom-5 right-5 z-[9999]">
    <div class="group relative" @mouseenter="openVol" @mouseleave="hideLater">
      <!-- Popover volume: SEJAJAR ke kiri tombol -->
      <transition name="fade">
        <div v-if="showVol"
          class="absolute right-16 top-1/2 -translate-y-1/2 flex w-40 items-center gap-2 rounded-xl bg-white/85 p-2 shadow-lg backdrop-blur"
          @pointerenter="openVol" @pointerleave="hideLater">
          <svg class="h-4 w-4 text-slate-700" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M12 4v12l-4-3H4V7h4l4-3z" />
          </svg>
          <input type="range" min="0" max="1" step="0.01" v-model.number="vol" class="w-full accent-slate-800"
            aria-label="Volume" />
        </div>
      </transition>

      <!-- Tombol utama -->
      <button type="button" @click="toggle" :aria-pressed="isPlaying"
        :aria-label="isPlaying ? 'Pause music' : 'Play music'" class="rounded-full bg-neutral-900/85 p-3 text-white shadow-[0_8px_24px_rgba(0,0,0,.25)] backdrop-blur transition
               hover:bg-neutral-900/90 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-white/60">
        <!-- icon: on/off -->
        <svg v-if="isPlaying" viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M3 10v4h4l5 4V6l-5 4H3z" />
          <path d="M16.5 8a5.5 5.5 0 010 8M14 6a8 8 0 010 12" fill="none" stroke="currentColor" stroke-width="2" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M3 10v4h4l5 4V6l-5 4H3z" />
          <path d="M16 8l6 8M22 8l-6 8" fill="none" stroke="currentColor" stroke-width="2" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Fade untuk popover volume */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
