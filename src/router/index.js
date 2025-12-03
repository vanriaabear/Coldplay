import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import About from '../components/about.vue';
import Music from '../components/music.vue';
import Concert from '../components/concert.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/concert',
    name: 'Concert',
    component: Concert
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
