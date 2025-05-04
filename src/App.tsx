import React, { useState } from 'react';
import { Menu, X, Github, Mail, Linkedin, Phone, BookOpen, Plane, Code, Building2, GraduationCap, Languages, PenTool as Tool } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Abdullah TAGARI</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#about" className="text-gray-700 hover:text-gray-900">À propos</a>
              <a href="#experience" className="text-gray-700 hover:text-gray-900">Expérience</a>
              <a href="#education" className="text-gray-700 hover:text-gray-900">Formation</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900">Compétences</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">À propos</a>
              <a href="#experience" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Expérience</a>
              <a href="#education" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Formation</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Compétences</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Abdullah TAGARI</h1>
            <p className="text-xl md:text-2xl">Apprenti Développeur | Futur Ingénieur Informatique</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">À Propos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Je m'appelle Abdullah TAGARI, j'ai 19 ans et je suis un apprenti en informatique.
                  Mon objectif est d'acquérir de solides connaissances en développement d'applications
                  pour devenir ingénieur informatique.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Centres d'intérêts</h3>
                <div className="flex items-center mb-3">
                  <BookOpen className="mr-2" />
                  <span>Lectures : Mangas</span>
                </div>
                <div className="flex items-center">
                  <Plane className="mr-2" />
                  <span>Voyages : Royaume-Uni, Belgique, Allemagne, Espagne, Grèce, Italie, Émirats Arabes Unis, Turquie, Inde</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Expérience</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Code className="mr-2" />
                  <h3 className="text-xl font-semibold">Projets Universitaires</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  • Refonte du site web d'une association (Alcool Ecoute Joie et Santé)<br />
                  • Développement d'une application mobile avec Android Java et Spring Boot
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Building2 className="mr-2" />
                  <h3 className="text-xl font-semibold">Projets Professionnels</h3>
                </div>
                <p className="text-gray-600">
                  • Refonte d'applications web avec Spring Boot et Vue.js<br />
                  • Développement d'outils de traitement de données
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Formation</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <GraduationCap className="mr-2" />
                <h3 className="text-xl font-semibold">BUT Informatique</h3>
              </div>
              <p className="text-gray-600">
                IUT de Paris Rives de Seine - 2ème année en alternance<br />
                Apprenti à la RATP
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Compétences</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Code className="mr-2" />
                  <h3 className="text-xl font-semibold">Langages</h3>
                </div>
                <p className="text-gray-600">
                  HTML, CSS, JavaScript, PHP, Java, Android Java, Python, C/C++, SQL, Assembleur, VBA
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Tool className="mr-2" />
                  <h3 className="text-xl font-semibold">Outils</h3>
                </div>
                <p className="text-gray-600">
                  GitHub, Postman, Jetbrains, Eclipse, Android Studio, MySQL, MariaDB, VirtualBox, Cisco Packet Tracer, Power BI
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Languages className="mr-2" />
                  <h3 className="text-xl font-semibold">Langues</h3>
                </div>
                <p className="text-gray-600">
                  Français, Anglais, Espagnol, Gujarati
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
            <div className="flex justify-center space-x-8">
              <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
                <Mail className="mr-2" />
                <span>Email</span>
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
                <Phone className="mr-2" />
                <span>Téléphone</span>
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
                <Linkedin className="mr-2" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
                <Github className="mr-2" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Abdullah TAGARI. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;