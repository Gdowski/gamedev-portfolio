<template>
  <div v-if="project" :class="`pv-${project.accent}`" style="padding-top: 56px; min-height: 100vh;">
    <RouterLink to="/" class="pv-back">Back to portfolio</RouterLink>

    <div class="pv-hero">
      <div class="pv-engine">{{ project.engine }} · {{ project.status }}</div>
      <div class="pv-title" v-html="project.title.replace('\n', '<br>')"></div>
      <p class="pv-tagline">{{ project.tagline }}</p>
      <div class="pv-meta">
        <div class="pv-meta-item" v-for="m in project.meta" :key="m.label">
          <div class="pv-meta-label">{{ m.label }}</div>
          <div class="pv-meta-value">{{ m.value }}</div>
        </div>
      </div>
    </div>

    <div class="pv-body">

      <!-- Media gallery -->
      <div class="media-section">
        <div class="media-section-title">// Footage &amp; screenshots</div>
        <div class="media-grid">
          <div class="media-item full-width" ref="heroMedia">
            <img :src="heroSrc" :alt="heroAlt" style="transition: opacity 0.12s;">
            <div class="media-caption">{{ heroCaption }}</div>
          </div>
          <div
            v-for="thumb in project.thumbMedia"
            :key="thumb.src"
            class="media-item media-thumb"
            @click="swapHero(thumb)"
          >
            <img :src="thumb.src" :alt="thumb.alt">
            <div class="media-caption">{{ thumb.caption }}</div>
          </div>
          <div
            v-for="ph in (project.placeholderMedia || [])"
            :key="ph.label"
            class="media-placeholder"
          >
            <div class="media-label">{{ ph.label }}</div>
            <div class="media-sublabel">Media coming soon</div>
          </div>
        </div>
      </div>

      <!-- Systems breakdown -->
      <div class="systems-section">
        <div class="systems-section-title">Systems breakdown</div>
        <div
          v-for="block in project.systemBlocks"
          :key="block.name"
          class="system-block"
        >
          <div class="system-block-header">
            <div class="system-block-dot"></div>
            <div class="system-block-name">{{ block.name }}</div>
          </div>
          <div class="system-block-desc">{{ block.desc }}</div>
          <div class="system-block-details">
            <div class="detail-row" v-for="d in block.details" :key="d">{{ d }}</div>
          </div>
          <div v-if="block.blueprint" class="bp-shot">
            <div class="bp-shot-header">
              <span class="bp-shot-label">{{ block.blueprint.label }}</span>
              <span class="bp-shot-tag">{{ block.blueprint.tag }}</span>
            </div>
            <div class="bp-shot-body">
              <img :src="block.blueprint.src" :alt="block.blueprint.alt" @click="openLightbox(block.blueprint.src, block.blueprint.alt)">
            </div>
          </div>
          <template v-if="block.codeBlocks">
            <div v-for="cb in block.codeBlocks" :key="cb.filename" class="code-block" style="margin-top: 1rem;">
              <div class="code-header">
                <span class="code-filename">{{ cb.filename }}</span>
                <span class="code-lang">{{ cb.lang }}</span>
              </div>
              <div class="code-body"><pre v-html="cb.code"></pre></div>
            </div>
          </template>
        </div>
      </div>

      <!-- Takeaways -->
      <div class="takeaways-section">
        <div class="media-section-title">// Takeaways</div>
        <div class="takeaways-grid">
          <div class="takeaway-card" v-for="(t, i) in project.takeaways" :key="i">
            <div class="takeaway-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="takeaway-text">{{ t }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div v-else style="padding: 8rem 2.5rem; text-align: center; color: var(--muted); font-family: var(--mono);">
    Project not found. <RouterLink to="/" style="color: var(--accent);">← Back</RouterLink>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getProject } from '../data/projects.js'

const route = useRoute()
const openLightbox = inject('openLightbox')

const project = computed(() => getProject(route.params.id))

const heroSrc = ref('')
const heroAlt = ref('')
const heroCaption = ref('')
const heroMedia = ref(null)

watch(project, (p) => {
  if (p) {
    heroSrc.value = p.heroMedia.src
    heroAlt.value = p.heroMedia.alt
    heroCaption.value = p.heroMedia.caption
  }
}, { immediate: true })

function swapHero(thumb) {
  const img = heroMedia.value?.querySelector('img')
  if (!img) return
  img.style.opacity = '0'
  setTimeout(() => {
    const prevSrc = heroSrc.value
    const prevAlt = heroAlt.value
    const prevCaption = heroCaption.value
    heroSrc.value = thumb.src
    heroAlt.value = thumb.alt
    heroCaption.value = thumb.caption
    thumb.src = prevSrc
    thumb.alt = prevAlt
    thumb.caption = prevCaption
    img.style.opacity = '1'
  }, 120)
}
</script>
