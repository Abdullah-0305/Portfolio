<template>
    <div class="min-h-screen">
  
      <!-- Navigation -->
      <nav class="bg-white shadow-md fixed w-full z-20 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <span class="text-2xl font-bold text-gray-800">
                Abdullah TAGARI
              </span>
            </div>
            <div class="flex items-center md:hidden">
              <button @click="isMenuOpen = !isMenuOpen" class="text-gray-700 hover:text-gray-900 focus:outline-none">
                <Menu v-if="!isMenuOpen" :size="24" />
                <X v-else :size="24" />
              </button>
            </div>
            <div class="hidden md:flex md:space-x-8">
              <a v-for="item in menuItems" :key="item.href" :href="item.href" @click.prevent="scrollTo(item.href)" class="nav-link">{{ item.text }}</a>
            </div>
          </div>
        </div>
  
        <div v-if="isMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a v-for="item in menuItems" :key="item.href" :href="item.href" @click.prevent="scrollTo(item.href)" class="block nav-link">{{ item.text }}</a>
          </div>
        </div>
      </nav>
  
      <!-- Main Content -->
      <main class="pt-16">
  
        <!-- Section 1: Étudiant en Informatique -->
        <section class="text-white py-16 text-center bg-blue-banner">
          <h2 class="text-4xl md:text-5xl font-bold">
            Étudiant en Informatique
          </h2>
        </section>
  
  
        <!-- Section 2: À Propos -->
        <section id="about" class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4">
            <h2 class="section-title">À Propos</h2>
            <div class="grid md:grid-cols-2 gap-12">
              <div class="card">
                <h3 class="text-2xl font-semibold mb-6">Qui suis-je ?</h3>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Je m'appelle Abdullah TAGARI, 19 ans, apprenti en informatique.
                  Mon objectif est de devenir ingénieur en développement d'applications.
                </p>
                <p class="text-gray-700 leading-relaxed">
                  Passionné par les nouvelles technologies, l'innovation et le développement logiciel.
                </p>
              </div>
              <div class="card">
                <h3 class="text-2xl font-semibold mb-6">Centres d'intérêts</h3>
                <div class="space-y-4">
                  <div class="flex items-center p-3 bg-gray-100 rounded-lg">
                    <BookOpen class="icon" />
                    <div>
                      <h4 class="font-semibold">Lectures</h4>
                      <p class="text-gray-600">Mangas</p>
                    </div>
                  </div>
                  <div class="flex items-center p-3 bg-gray-100 rounded-lg">
                    <Plane class="icon" />
                    <div>
                      <h4 class="font-semibold">Voyages</h4>
                      <p class="text-gray-600">Angleterre, Belgique, Allemagne, Espagne, Grèce, Italie, EAU, Turquie, Inde</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Section 3: Expériences -->
        <section id="experience" class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4">
            <h2 class="section-title">Expériences</h2>
            <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
              <!-- Expériences Hors Informatique -->
              <router-link to="/experiences/hors-informatique" class="card">
                <div class="flex items-center mb-6">
                  <Users class="icon" />
                  <h3 class="text-2xl font-semibold">Expériences Hors Informatique</h3>
                </div>
                <ul class="text-gray-600 leading-relaxed space-y-4">
                  <li>Service Client : Vente et conseil, développement des compétences en communication.</li>
                  <li>JO 2024 : Saisonnier - vente de tickets, guide touristique, gestion des flux de voyageurs.</li>
                </ul>
              </router-link>
  
              <!-- Projets Universitaires -->
              <router-link to="/experiences/projets-universitaires" class="card">
                <div class="flex items-center mb-6">
                  <Code class="icon" />
                  <h3 class="text-2xl font-semibold">Projets Universitaires</h3>
                </div>
                <p class="text-gray-600 leading-relaxed">
                  Refonte de sites web et création d'applications mobiles en Android Java & Spring Boot.
                </p>
              </router-link>
  
              <!-- Projets Professionnels -->
              <router-link to="/experiences/projets-professionnels" class="card">
                <div class="flex items-center mb-6">
                  <Building2 class="icon" />
                  <h3 class="text-2xl font-semibold">Projets Professionnels</h3>
                </div>
                <p class="text-gray-600 leading-relaxed">
                  Modernisation d'applications, outils de traitement de données avec Spring Boot & Vue.js.
                </p>
              </router-link>
            </div>
          </div>
        </section>
  
  
  
        <!-- Section 4: Compétences -->
        <section id="competences" class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4">
            <h2 class="section-title">Compétences Techniques</h2>
            <div class="grid md:grid-cols-3 gap-8 mt-12">
              <div class="card">
                <div class="flex items-center mb-6">
                  <Code class="icon" />
                  <h3 class="text-2xl font-semibold">Langages</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="lang in languages" :key="lang" class="skill-tag">{{ lang }}</span>
                </div>
              </div>
  
              <div class="card">
                <div class="flex items-center mb-6">
                  <Wrench class="icon" />
                  <h3 class="text-2xl font-semibold">Outils</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tool in tools" :key="tool" class="skill-tag">{{ tool }}</span>
                </div>
              </div>
  
              <div class="card">
                <div class="flex items-center mb-6">
                  <Languages class="icon" />
                  <h3 class="text-2xl font-semibold">Langues Parlées</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="spoken in spokenLanguages" :key="spoken" class="skill-tag">{{ spoken }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Section Contact -->
<section id="contact" class="py-20 bg-gray-100">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h2 class="section-title">Contactez-moi</h2>
    <p class="text-gray-700 mb-8">
      Je suis disponible pour discuter de vos projets ou d'une opportunité professionnelle.
    </p>
    <div class="flex justify-center mt-6">
      <div class="flex space-x-6 mt-4 gap-12">
        <!-- Email -->
        <a href="mailto:tagariabdullah@gmail.com" class="text-gray-700 hover:text-gray-900">
          <Mail class="icon" />
        </a>
        <!-- Téléphone -->
        <a href="tel:+0782402766" class="text-gray-700 hover:text-gray-900">
          <Phone class="icon" />
        </a>
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/abdullahtagari" target="_blank" class="text-gray-700 hover:text-gray-900">
          <Linkedin class="icon" />
        </a>
        <!-- GitHub -->
        <a href="https://github.com/Abdullah-0305" target="_blank" class="text-gray-700 hover:text-gray-900">
          <Github class="icon" />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-gray-200 py-4 text-center">
  <p class="text-gray-600 text-sm">
    &copy; 2025 Abdullah TAGARI. Tous droits réservés.
  </p>
</footer>

  
  
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Menu, X, BookOpen, Plane, Code, Building2, Users, Languages, Wrench, Github, Linkedin, Phone, Mail } from 'lucide-vue-next'
  
  const isMenuOpen = ref(false)
  
  const menuItems = [
    { text: 'À propos', href: '#about' },
    { text: 'Expériences', href: '#experience' },
    { text: 'Compétences', href: '#competences' },
    { text: 'Contact', href: '#contact' },
  ]
  
  const languages = [
    'HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Android Java', 'Python', 'C/C++', 'SQL', 'Assembleur', 'VBA'
  ]
  
  const tools = [
    'GitHub', 'Postman', 'Jetbrains', 'Eclipse', 'Android Studio', 'MySQL', 'MariaDB', 'VirtualBox', 'Cisco Packet Tracer', 'Power BI'
  ]
  
  const spokenLanguages = [
    'Français', 'Anglais', 'Espagnol', 'Gujarati'
  ]
  
  function scrollTo(selector: string) {
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    isMenuOpen.value = false
  }
  </script>
  
  <style>
    /* Tu peux ajouter ici tes styles personnalisés */
  </style>
  