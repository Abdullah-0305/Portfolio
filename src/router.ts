import { createRouter, createWebHistory } from 'vue-router';

// Importation des pages ou composants
import App from './App.vue';

// Définir les routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: App, // Page d'accueil ou section principale
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Utilisation de import.meta.env.BASE_URL
  routes,
});

export default router;
