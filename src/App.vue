<template>
  <nav>
    <RouterLink class="nav-name" to="/">JG</RouterLink>
    <div class="nav-links" v-if="!isProjectPage">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
  <RouterView />
  <div class="lightbox" :class="{ open: lightboxSrc }" @click="lightboxSrc = null">
    <img v-if="lightboxSrc" :src="lightboxSrc" :alt="lightboxAlt">
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isProjectPage = computed(() => route.path.startsWith('/project/'))

const lightboxSrc = ref(null)
const lightboxAlt = ref('')

function openLightbox(src, alt) {
  lightboxSrc.value = src
  lightboxAlt.value = alt
}

// Close lightbox on Escape
window.addEventListener('keydown', e => { if (e.key === 'Escape') lightboxSrc.value = null })

// Provide globally so child components can call it
import { provide } from 'vue'
provide('openLightbox', openLightbox)
</script>
