import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@assets/Screenshot 2025-06-15 160808_1752347471019.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                Chapter 1: The Beginning
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600">Nikhil</span>
              <br />
              <span className="text-green-600">DevOps & AI</span> Engineer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Detail-oriented Computer Science student with hands-on experience in DevOps, AI, and software testing. 
              Passionate about building scalable solutions and automating complex workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <a
                href="https://linkedin.com/in/nikhilkaushal20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/NikhilKaushal20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:nikkaushal20@gmail.com"
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-full blur-lg opacity-20"></div>
              <img
                src={profileImage}
                alt="Nikhil Kaushal - Professional Photo"
                className="w-80 h-80 rounded-full object-cover shadow-2xl relative z-10 border-4 border-white dark:border-gray-800"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                <i className="fas fa-code"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                <i className="fas fa-cog"></i>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
