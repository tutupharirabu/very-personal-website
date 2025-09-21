<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import MusicToggle from '@/components/MusicToggle.vue'
import track from '@/assets/music.mp3'
</script>

<template>
  <div class="relative min-h-screen flex flex-col bg-white overflow-hidden">
    <!-- Texture Layer -->
    <div class="app-texture" aria-hidden="true"></div>

    <!-- Header + Pages di atas texture -->
    <AppHeader class="relative z-10" />

    <div class="relative z-10">
      <RouterView v-slot="{ Component, route }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </div>

    <MusicToggle :src="track" :volume="0.6" />
  </div>
</template>

<style scoped>
/* ===== Texture Layer ===== */
.app-texture {
  position: absolute;
  inset: 0;
  /* lebih rapi, cover penuh area */
  z-index: 0;
  background-image: url('https://i.imgur.com/PsjPzdO.png');
  background-repeat: repeat;
  background-size: 220px 220px;
  /* size eksplisit */
  opacity: 0.35;
  mix-blend-mode: overlay;
  pointer-events: none;
  /* jangan ganggu klik di depan */
}

/* ===== Fade Only ===== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Prefer-reduced-motion: hilangkan animasi */
@media (prefers-reduced-motion: reduce) {

  .fade-enter-active,
  .fade-leave-active {
    transition: none !important;
  }
}
</style>
