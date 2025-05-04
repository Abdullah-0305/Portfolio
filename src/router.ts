import { createRouter, createWebHistory } from 'vue-router';

// Importation des pages ou composants
import ProjUniv from './views/ProjUniv.vue';
import HorsInfo from './views/HorsInfo.vue';
import ProjPro from './views/ProjPro.vue';
import Home from './views/Home.vue';

// Définir les routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // Page d'accueil ou section principale
  },
  {
    path: '/experiences/projets-universitaires',
    name: 'Projets Universitaires',
    component: ProjUniv,
  },
  {
    path: '/experiences/hors-informatique',
    name: 'Expériences Hors Informatique',
    component: HorsInfo,
  },
  {
    path: '/experiences/projets-professionnels',
    name: 'Projets Professionnels',
    component: ProjPro,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
