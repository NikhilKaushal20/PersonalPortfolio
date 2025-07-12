import Navigation from "./Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 theme-transition">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nikhil Kaushal</h3>
              <p className="text-gray-300 mb-6">
                DevOps & AI Engineer passionate about building scalable solutions and automating complex workflows.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/nikhilkaushal20" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-xl">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/NikhilKaushal20" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-xl">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:nikkaushal20@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors text-xl">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Specializations</h4>
              <ul className="space-y-2 text-gray-300">
                <li>DevOps & CI/CD</li>
                <li>AI & Machine Learning</li>
                <li>Software Testing</li>
                <li>Full-Stack Development</li>
                <li>Cloud Computing</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Nikhil Kaushal. All rights reserved. Built with passion for innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
