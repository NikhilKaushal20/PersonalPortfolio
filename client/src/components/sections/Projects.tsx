import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      title: "Full-Stack GenAI RAG Chatbot",
      description: "AI-powered chatbot using OpenAI, FAISS, and LangChain for intelligent document-based Q&A with containerized deployment.",
      icon: "fas fa-robot",
      gradient: "from-blue-600 to-green-600",
      tags: ["Python", "FastAPI", "OpenAI", "Docker"],
      date: "July 2025",
      github: "https://github.com/NikhilKaushal20",
    },
    {
      title: "Handwritten Digit Recognition",
      description: "CNN-based system achieving 97%+ accuracy on MNIST dataset with automated CI/CD pipeline using Jenkins and Docker.",
      icon: "fas fa-brain",
      gradient: "from-green-600 to-amber-500",
      tags: ["TensorFlow", "OpenCV", "Jenkins", "Docker"],
      date: "May 2025",
      github: "https://github.com/NikhilKaushal20",
    },
    {
      title: "Basic Firewall Implementation",
      description: "Python-based firewall with Flask framework featuring authentication, rule-based filtering, and dynamic IP control.",
      icon: "fas fa-shield-alt",
      gradient: "from-amber-500 to-red-500",
      tags: ["Python", "Flask", "Security", "Networking"],
      date: "July 2024",
      github: "https://github.com/NikhilKaushal20",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4 inline-block">From Vision to Reality</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Innovative solutions that demonstrate my expertise in DevOps, AI, and full-stack development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="project-card h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <i className={`${project.icon} text-6xl mb-4`}></i>
                      <h4 className="text-xl font-bold">{project.title.split(' ')[0]}</h4>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="tech-tag">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                      <div className="flex space-x-2">
                        <Button asChild size="sm" variant="outline">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
