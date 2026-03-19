<template>
  <section id="hero">
    <div class="hero-eyebrow">Gameplay Programmer</div>
    <h1>Jarosław<br><span>Gdowski</span></h1>
    <p class="hero-sub">
      Building gameplay systems in Unreal &amp; Unity.<br>
      7 years shipping performance-critical production software.<br>
      Based in Gdańsk, Poland.
    </p>
    <div class="hero-cta">
      <a href="#projects" class="btn btn-primary">View Projects</a>
      <a href="#contact" class="btn btn-ghost">Get in Touch</a>
    </div>
  </section>

  <div class="section fade-in" id="about" ref="aboutEl">
    <p class="sec-label">// 01 - About</p>
    <h2>Performance first.<br>Always.</h2>
    <div class="about-grid">
      <div>
        <p class="about-text">
          Spent 7 years building systems that had to work — async state machines, device comms, firmware at the hardware limit.<br><br>
          Those instincts don't switch off. I bring them full-time to Unreal and Unity: build the system, push it until it breaks, figure out why.
        </p>
      </div>
      <div>
        <div class="skill-group">
          <div class="skill-group-title">Unreal Engine (Blueprints)</div>
          <div class="tags">
            <span class="tag">GASP 5.7</span><span class="tag">Mover</span><span class="tag">Custom movement modes</span><span class="tag">Climbing system</span><span class="tag">Interaction system</span><span class="tag">NPC scheduling</span><span class="tag">Dialogue systems</span><span class="tag">Perforce</span>
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-group-title">Unity (C#)</div>
          <div class="tags">
            <span class="tag yellow">Raycast physics</span><span class="tag yellow">Custom shaders</span><span class="tag yellow">Ink narrative</span><span class="tag yellow">Dialogue systems</span><span class="tag yellow">Event-driven</span>
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-group-title">Production background</div>
          <div class="tags">
            <span class="tag neutral">Rust</span><span class="tag neutral">Async / multithreaded</span><span class="tag neutral">Real-time systems</span><span class="tag neutral">Low-level optimization</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section fade-in" id="projects" ref="projectsEl">
    <p class="sec-label">// 02 - Game Projects</p>
    <h2>What I've built.</h2>

    <RouterLink
      v-for="project in projects"
      :key="project.id"
      :to="`/project/${project.id}`"
      class="project-card"
      :class="project.accent !== 'primary' ? project.accent : ''"
    >
      <div class="card-body">
        <div class="project-header">
          <div>
            <div class="project-engine">{{ project.engine }}</div>
            <div class="project-title">{{ project.title }}</div>
          </div>
          <span class="status-badge">{{ project.status }}</span>
        </div>
        <p class="project-desc">{{ project.desc }}</p>
        <div class="systems-list">
          <div class="system-item" v-for="sys in project.systems" :key="sys.name">
            <div class="system-bullet"></div>
            <div>
              <div class="system-name">{{ sys.name }}</div>
              <div class="system-detail">{{ sys.detail }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="tags">
          <span class="tag" :class="project.tagClass || ''" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
        <div class="card-footer-hint">View full breakdown</div>
      </div>
    </RouterLink>
  </div>

  <div class="section fade-in" id="experience" ref="experienceEl">
    <p class="sec-label">// 03 - Experience</p>
    <h2>Production background.</h2>
    <div class="exp-item">
      <div class="exp-header">
        <div><div class="exp-company">DP IoT</div><div class="exp-role">Lead Software Engineer - Rust / Backend</div></div>
        <div class="exp-date">Jul 2021 - Present</div>
      </div>
      <ul class="exp-list">
        <li>Designed real-time async pipelines for live device data</li>
        <li>State-driven architecture for complex device behaviour and system coordination</li>
        <li>Performance optimisation on long-running runtime systems</li>
        <li>Technical leadership alongside direct code contribution</li>
      </ul>
    </div>
    <hr class="exp-divider">
    <div class="exp-item">
      <div class="exp-header">
        <div><div class="exp-company">DP IoT</div><div class="exp-role">Full Stack Engineer</div></div>
        <div class="exp-date">Jul 2019 - Jul 2021</div>
      </div>
      <ul class="exp-list">
        <li>Event-driven systems and message queues for real-time device data</li>
        <li>Modular architecture for remote control and parameter updates</li>
        <li>Debugged edge cases in distributed runtime environments</li>
      </ul>
    </div>
    <hr class="exp-divider">
    <div class="exp-item">
      <div class="exp-header">
        <div><div class="exp-company">DP IoT</div><div class="exp-role">Firmware Developer</div></div>
        <div class="exp-date">Jul 2018 - Jul 2019</div>
      </div>
      <ul class="exp-list">
        <li>Firmware for BLE / NB-IoT devices - worked directly at memory and timing constraints</li>
        <li>Low-level code optimization for power and performance</li>
      </ul>
    </div>
    <hr class="exp-divider">
    <div class="exp-item">
      <div class="exp-header">
        <div><div class="exp-company">Gdańsk University of Technology</div><div class="exp-role">MSc, Biomedical Engineering</div></div>
        <div class="exp-date">2018 - 2020</div>
      </div>
    </div>
    <div class="exp-item">
      <div class="exp-header">
        <div><div class="exp-company">Gdańsk University of Technology</div><div class="exp-role">BEng, Biomedical Engineering</div></div>
        <div class="exp-date">2015 - 2018</div>
      </div>
    </div>
  </div>

  <div class="section fade-in" id="contact" ref="contactEl">
    <p class="sec-label">// 04 - Contact</p>
    <h2>Open to roles.</h2>
    <p style="color:var(--muted);font-size:14px;margin-bottom:2rem;max-width:480px;line-height:1.8;">
      Looking for a gameplay programmer role — junior or mid, PC/console. Gdańsk-based, open to remote.
    </p>
    <div class="contact-grid">
      <a href="mailto:jaroslaw.gdowski.st@gmail.com" class="contact-card">
        <div class="contact-icon">@</div>
        <div><div class="contact-label">Email</div><div class="contact-value">jaroslaw.gdowski.st@gmail.com</div></div>
      </a>
      <a href="https://linkedin.com/in/jarosław-gdowski-62237819b" class="contact-card" target="_blank">
        <div class="contact-icon">in</div>
        <div><div class="contact-label">LinkedIn</div><div class="contact-value">jaroslawgdowski</div></div>
      </a>
    </div>
  </div>

  <footer>
    <p>Jarosław Gdowski - Gameplay Programmer</p>
    <p>Gdańsk, Poland</p>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects.js'

const aboutEl = ref(null)
const projectsEl = ref(null)
const experienceEl = ref(null)
const contactEl = ref(null)

onMounted(() => {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.08 }
  )
  ;[aboutEl.value, projectsEl.value, experienceEl.value, contactEl.value]
    .filter(Boolean)
    .forEach(el => obs.observe(el))
})
</script>
