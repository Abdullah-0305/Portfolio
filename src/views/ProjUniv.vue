<template>
    <div class="min-h-screen flex flex-col">
      <!-- Navbar -->
      <nav class="bg-white shadow-md fixed w-full z-20">
        <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <span class="text-2xl font-bold text-gray-800">Abdullah TAGARI</span>
          <div>
            <a href="/" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Accueil
            </a>
          </div>
        </div>
      </nav>
  
      <!-- Main Content -->
      <main class="flex-grow pt-20 px-4 max-w-5xl mx-auto">
        <section class="py-10">
          <h1 class="text-3xl font-bold mb-6 text-gray-800">Projets Universitaires</h1>
  
          <article class="mb-8">
            <h2 class="text-2xl font-semibold mb-2 text-gray-700">Refonte d'un site web associatif</h2>
            <p class="text-gray-600">
              Dans le cadre de ma formation, j'ai travaillé en équipe sur la refonte du site web d'une association (Alcool Écoute Joie et Santé). 
              Nous avons suivi plusieurs étapes : analyse critique du site existant, création d'une maquette, puis répartition des tâches.
              Cette expérience m'a appris à travailler en groupe sur un projet structuré, à mettre en pratique mes connaissances en JavaScript, 
              à les approfondir et à découvrir le langage PHP. J'ai pris conscience de l'importance d'une bonne organisation et de la communication 
              au sein d'une équipe.
            </p>
          </article>
  
          <article>
            <h2 class="text-2xl font-semibold mb-2 text-gray-700">Développement d'une application mobile</h2>
            <p class="text-gray-600">
              J'ai également participé à la création d'une application mobile en équipe, avec pour particularité que nous devions choisir 
              nous-mêmes les technologies. Nous avons opté pour Android Java et Spring Boot afin d'explorer à la fois le développement mobile natif 
              et les API. J'ai apprécié cette autonomie et ce choix stratégique, car cela reflète le fonctionnement réel en entreprise.
              J'ai renforcé mes compétences en Spring, que j'avais déjà abordé en entreprise, et j'ai pris conscience de mes marges de progression, 
              notamment dans l'utilisation collaborative de GitHub.
            </p>
          </article>
        </section>
      </main>
  
      <!-- Section Contact -->
      <section id="contact" class="py-20 bg-gray-100">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="section-title">Contactez-moi</h2>
          <p class="text-gray-700 mb-8">
            Je suis disponible pour discuter de vos projets ou d'une opportunité professionnelle.
          </p>
          <div class="flex justify-center mt-6 gap-12">
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
    </div>
  </template>
  
  <script setup>
  import { Mail, Phone, Linkedin, Github } from 'lucide-vue-next'
  </script>
  
  <style scoped>
  a {
    transition: color 0.3s ease;
  }
  </style>
  