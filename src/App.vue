<script setup>
import { RouterView } from 'vue-router'

import AppHeader from '@/components/AppHeader.vue'

import MusicToggle from "@/components/MusicToggle.vue";
import track from "@/assets/music.mp3";
</script>

<template>
  <AppHeader />
  <RouterView />
  <MusicToggle :src="track" :volume="0.6" />
</template>
