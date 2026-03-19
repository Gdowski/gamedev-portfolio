import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ProjectView from './views/ProjectView.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory('/gamedev-portfolio/'),
  routes: [
    { path: '/', component: HomeView },
    { path: '/project/:id', component: ProjectView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'instant' }
  },
})



createApp(App).use(router).mount('#app')
