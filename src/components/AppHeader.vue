<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const navLinks = [
  { label: 'Projects', to: { name: 'project' } },
  { label: 'About', to: { name: 'about' } },
]

import logoUrl from '@/assets/logo.png'

const isMenuOpen = ref(false)
const closeMenu = () => { isMenuOpen.value = false }
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const onKey = (e) => { if (e.key === 'Escape') closeMenu() }

onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))

const route = useRoute()
watch(() => route.fullPath, closeMenu)
</script>

<template>
  <header class="app-header bg-neutral-900/95">
    <div class="app-header__inner">
      <RouterLink to="/" class="app-header__logo" aria-label="Home">
        <img :src="logoUrl" alt="Zara logo" class="app-header__logo-image" />
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="app-header__nav" aria-label="Primary">
        <RouterLink v-for="link in navLinks" :key="link.label" :to="link.to" class="app-header__nav-link text-slate-100"
          active-class="is-active" exact-active-class="is-active">
          {{ link.label }}
        </RouterLink>
      </nav>

      <!-- Mobile burger: reuse nav-link styles -->
      <button class="app-header__menu-toggle app-header__nav-link app-header__nav-link--icon"
        :aria-expanded="isMenuOpen.toString()" aria-controls="mobile-menu" aria-label="Toggle navigation"
        @click="toggleMenu">
        <span class="sr-only">Menu</span>
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <g :class="{ 'is-open': isMenuOpen }">
            <path class="line line--1" d="M4 7h16" />
            <path class="line line--2" d="M4 12h16" />
            <path class="line line--3" d="M4 17h16" />
          </g>
        </svg>
      </button>
    </div>

    <!-- Mobile overlay + panel -->
    <div class="mobile-menu__backdrop bg-neutral-900/95" v-show="isMenuOpen" aria-hidden="true" @click="closeMenu" />
    <nav id="mobile-menu" class="mobile-menu" :class="{ 'is-open': isMenuOpen }" aria-label="Mobile">
      <RouterLink v-for="link in navLinks" :key="link.label" :to="link.to"
        class="mobile-menu__link app-header__nav-link app-header__nav-link--wide" @click="closeMenu">
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  position: relative;
  z-index: 40;
  padding: clamp(1.5rem, 4vw, 3.5rem) clamp(1.25rem, 5vw, 3rem)
}

.app-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%
}

.app-header__logo-image {
  display: block;
  max-height: 40px;
  width: auto;
  object-fit: contain
}

/* Desktop nav & pill effect (dipakai juga oleh burger btn) */
.app-header__nav {
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  font-family: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: .95rem;
  letter-spacing: .18em;
  text-transform: uppercase
}

.app-header__nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: .5rem .8rem;
  border-radius: 999px;
  color: #e5e7eb;
  text-decoration: none;
  background: rgba(255, 255, 255, .02);
  box-shadow: -4px -4px 8px rgba(255, 255, 255, .06), 4px 4px 10px rgba(0, 0, 0, .45);
  transition: color .2s, box-shadow .25s, transform .12s, background .2s
}

.app-header__nav-link:hover,
.app-header__nav-link:focus-visible {
  color: #fff;
  background: rgba(255, 255, 255, .04);
  box-shadow: -6px -6px 12px rgba(255, 255, 255, .07), 6px 6px 14px rgba(0, 0, 0, .5);
  transform: translateY(-1px);
  outline: none
}

.app-header__nav-link:active {
  transform: translateY(0);
  background: rgba(255, 255, 255, .03);
  box-shadow: inset -3px -3px 6px rgba(255, 255, 255, .10), inset 3px 3px 6px rgba(0, 0, 0, .55)
}

.app-header__nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -1.5rem;
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translateX(-50%) rotate(-45deg) scale(0);
  opacity: 0;
  transition: transform .22s, opacity .22s
}

.app-header__nav-link:hover::after,
.app-header__nav-link:focus-visible::after {
  opacity: 1;
  transform: translateX(-50%) rotate(-135deg) scale(1)
}

.app-header__nav-link[aria-current="page"],
.app-header__nav-link.is-active {
  color: #fff;
  background: rgba(255, 255, 255, .05);
  box-shadow: inset -3px -3px 6px rgba(255, 255, 255, .10), inset 3px 3px 6px rgba(0, 0, 0, .55)
}

.app-header__nav-link[aria-current="page"]::after,
.app-header__nav-link.is-active::after {
  opacity: 1;
  transform: translateX(-50%) rotate(45deg) scale(1)
}

/* Burger inherits pill styles above; tweak ukuran & matikan arrow accent */
.app-header__menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: #e5e7eb
}

.app-header__menu-toggle.app-header__nav-link {
  padding: .55rem .7rem
}

/* slightly tighter pill */
.app-header__menu-toggle.app-header__nav-link::after {
  display: none !important
}

.line {
  stroke: currentColor;
  stroke-width: 2.4;
  stroke-linecap: round;
  transition: transform .22s, opacity .22s
}

.is-open .line--1 {
  transform: translateY(5px) rotate(45deg)
}

.is-open .line--2 {
  opacity: 0
}

.is-open .line--3 {
  transform: translateY(-5px) rotate(-45deg)
}

/* Mobile overlay + sheet */
.mobile-menu__backdrop {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(2px);
  z-index: 30
}

.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 40;
  padding: 6.5rem 1.5rem 2rem;
  transform: translateY(-8px);
  opacity: 0;
  pointer-events: none;
  transition: transform .22s, opacity .22s;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center
}

.mobile-menu.is-open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto
}

.mobile-menu__link {
  display: block;
  width: 100%;
  max-width: 22rem;
  text-align: center;
  padding: 2rem 1.25rem;
  border-radius: 999px;
  color: #e5e7eb;
  text-decoration: none;
  font-family: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 1.05rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, .06);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .35);
  transition: background .2s, transform .12s
}

.mobile-menu__link:hover,
.mobile-menu__link:focus-visible {
  background: rgba(255, 255, 255, .12);
  color: #fff;
  transform: translateY(-1px)
}

/* Responsive: hide desktop nav, show burger */
@media(max-width:768px) {
  .app-header {
    padding: clamp(2.4rem, 8vw, 3.2rem) clamp(1rem, 6vw, 2rem);
    min-height: 100px
  }

  .app-header__logo-image {
    max-height: 50px
  }

  .app-header__nav {
    display: none
  }

  .app-header__menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {

  .app-header__nav-link,
  .app-header__nav-link::after,
  .mobile-menu,
  .line {
    transition: none
  }
}
</style>
