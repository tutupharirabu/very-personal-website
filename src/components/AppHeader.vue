<script setup>
import { RouterLink } from 'vue-router'

const navLinks = [
  { label: 'Work', to: { name: 'work' } },
  { label: 'About', to: { name: 'about' } },
]

import logoUrl from '@/assets/logo.png'
</script>

<template>
  <header class="app-header bg-neutral-900/95">
    <div class="app-header__inner">
      <!-- Logo balik ke home -->
      <RouterLink to="/" class="app-header__logo" aria-label="Home">
        <img :src="logoUrl" alt="Zara logo" class="app-header__logo-image" />
      </RouterLink>

      <nav class="app-header__nav" aria-label="Primary">
        <!-- Gunakan RouterLink agar bisa auto-active -->
        <RouterLink v-for="link in navLinks" :key="link.label" :to="link.to" class="app-header__nav-link text-slate-100"
          active-class="is-active" exact-active-class="is-active">
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* --- header benar-benar transparan --- */
.app-header {
  position: relative;
  z-index: 10;
  padding: clamp(1.5rem, 4vw, 3.5rem) clamp(1.25rem, 5vw, 3rem);
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

.app-header::before,
.app-header::after {
  content: none !important;
}

/* ===== LAYOUT ===== */
.app-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* logo kiri, nav kanan */
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* ===== LOGO ===== */
.app-header__logo-image {
  display: block;
  max-height: 40px;
  /* batasi tinggi */
  width: auto;
  object-fit: contain;
}

/* nav */
.app-header__nav {
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  font-family: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 0.95rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

/* link dasar */
.app-header__nav-link {
  position: relative;
  padding: 0.5rem 0.8rem;
  /* sedikit lebih empuk */
  border-radius: 999px;
  /* pill vibes */
  color: #e5e7eb;
  /* slate-200-ish di dark bg */
  text-decoration: none;
  background: rgba(255, 255, 255, 0.02);
  box-shadow:
    -4px -4px 8px rgba(255, 255, 255, 0.06),
    4px 4px 10px rgba(0, 0, 0, 0.45);
  transition: color .2s ease, box-shadow .25s ease, transform .12s ease, background .2s ease;
}

/* hover: sedikit naik + shadow lebih tajam */
.app-header__nav-link:hover,
.app-header__nav-link:focus-visible {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.04);
  box-shadow:
    -6px -6px 12px rgba(255, 255, 255, 0.07),
    6px 6px 14px rgba(0, 0, 0, 0.5),
    inset 0 0 0 rgba(0, 0, 0, 0);
  transform: translateY(-1px);
  outline: none;
}

/* CLICK/ACTIVE: mendelep (inset) */
.app-header__nav-link:active {
  transform: translateY(0);
  /* balik rata */
  background: rgba(255, 255, 255, 0.03);
  box-shadow:
    inset -3px -3px 6px rgba(255, 255, 255, 0.10),
    inset 3px 3px 6px rgba(0, 0, 0, 0.55),
    0 0 0 rgba(0, 0, 0, 0);
  /* hilangkan outer supaya benar2 “masuk” */
}

/* aksen kecil di bawah saat hover/focus (opsional, boleh hapus kalau tak perlu) */
.app-header__nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -1.5rem;
  /* geser lebih ke bawah */
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translateX(-50%) rotate(-45deg) scale(0);
  /* -45deg = panah ke atas */
  opacity: 0;
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.app-header__nav-link:hover::after,
.app-header__nav-link:focus-visible::after {
  opacity: 1;
  transform: translateX(-50%) rotate(-135deg) scale(1);
}

/* state aktif (misal diberi .is-active atau aria-current) */
.app-header__nav-link[aria-current="page"],
.app-header__nav-link.is-active {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  box-shadow:
    inset -3px -3px 6px rgba(255, 255, 255, 0.10),
    inset 3px 3px 6px rgba(0, 0, 0, 0.55);
}

.app-header__nav-link[aria-current="page"]::after,
.app-header__nav-link.is-active::after {
  opacity: 1;
  transform: translateX(-50%) rotate(45deg) scale(1);
}

/* prefer-reduced-motion: kurangi animasi */
@media (prefers-reduced-motion: reduce) {

  .app-header__nav-link,
  .app-header__nav-link::after {
    transition: none;
  }
}

/* Mobile tweaks: header lebih tinggi & lega */
@media (max-width: 768px) {
  .app-header {
    padding: clamp(2.4rem, 8vw, 3.2rem) clamp(1rem, 6vw, 2rem);
    min-height: 100px;
    /* lebih tinggi */
  }

  .app-header__logo-image {
    max-height: 50px;
    /* logo ikut proporsional */
  }

  .app-header__nav {
    gap: 1.5rem;
  }

  .app-header__nav-link {
    padding: 0.7rem 1.1rem;
    font-size: 1rem;
  }
}
</style>
