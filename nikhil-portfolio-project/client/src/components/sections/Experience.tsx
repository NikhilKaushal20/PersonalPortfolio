import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();

  const experiences = [
    {
      title: "Deloitte Technology Consulting",
      role: "Virtual Internship",
      date: "July 2025",
      color: "bg-blue-600",
      description: "Completed real-world simulation involving IIoT data transformation, real-time dashboard proposals, and scalable tech solution design. Gained practical experience with enterprise-level consulting challenges.",
      tags: ["IIoT", "Data Engineering", "Solution Architecture"],
    },
    {
      title: "DevOps Training",
      role: "Project-Based Learning",
      date: "May 2025",
      color: "bg-green-600",
      description: "Applied real-world DevOps practices by building CI/CD pipelines using Jenkins, Docker, and GitHub. Automated deployment workflows and streamlined integration processes.",
      tags: ["Jenkins", "Docker", "CI/CD"],
    },
    {
      title: "Cybersecurity Training",
      role: "CipherSchools",
      date: "July 2024",
      color: "bg-amber-600",
      description: "Hands-on training in cybersecurity with focus on network security, firewall implementation, and penetration testing. Developed custom firewall project for network protection.",
      tags: ["Network Security", "Penetration Testing", "Firewall"],
    },
  ];

  const certifications = [
    { name: "Generative AI with LLMs", date: "February 2024", icon: "fas fa-certificate", color: "text-blue-600" },
    { name: "Web & Mobile Testing with Selenium", date: "September 2024", icon: "fas fa-certificate", color: "text-green-600" },
    { name: "Cybersecurity - Live", date: "July 2024", icon: "fas fa-certificate", color: "text-amber-600" },
    { name: "Prompt Engineering for ChatGPT", date: "January 2024", icon: "fas fa-certificate", color: "text-blue-600" },
    { name: "Introduction to Software Engineering", date: "February 2024", icon: "fas fa-certificate", color: "text-green-600" },
    { name: "Deloitte Technology Consulting", date: "July 2025", icon: "fas fa-certificate", color: "text-amber-600" },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold mb-4 inline-block">Lessons from the Field</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Continuous learning through internships, training programs, and hands-on projects
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-center mb-12"
                >
                  <div className={`absolute left-6 w-4 h-4 ${exp.color} rounded-full border-4 border-white dark:border-gray-800`}></div>
                  <div className="ml-20 w-full">
                    <Card className="shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-blue-600">{exp.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 font-semibold">{exp.role}</p>
                          </div>
                          <Badge variant="secondary">{exp.date}</Badge>
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <Badge key={tag} className={`${exp.color} text-white`}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <i className={`${cert.icon} ${cert.color} text-3xl mb-4`}></i>
                      <h4 className="font-bold mb-2">{cert.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{cert.date}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
