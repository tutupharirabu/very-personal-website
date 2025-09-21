<script setup>
import FlipLink from "./FlipLink.vue";

const links = [
  { label: "Email", href: "mailto:code.zharaurien@gmail.com" },
  { label: "Github", href: "https://github.com/tutupharirabu" },
  { label: "Medium", href: "https://irfanzharauri.com" },
  { label: "Twitter", href: "https://x.com/tutupharirabu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/irfan-zharauri" },
];

// optional: kustom timing global
const DURATION = 0.25;
const STAGGER = 0.025;
</script>

<template>
  <section class="grid justify-end gap-2 px-8 text-black text-right">
    <FlipLink v-for="l in links" :key="l.label" :label="l.label" :href="l.href" :duration="DURATION"
      :stagger="STAGGER" />
  </section>
</template>
