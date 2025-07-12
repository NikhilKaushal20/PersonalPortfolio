import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold mb-4 inline-block">
              Chapter 2: The Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A passionate technologist on a mission to bridge the gap between development and operations, 
              while exploring the frontiers of artificial intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-blue-50 dark:bg-gray-800 border-none">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">My Story</h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    Currently pursuing B.Tech in Computer Science at Lovely Professional University, 
                    I've immersed myself in the world of DevOps and AI. My journey began with a curiosity 
                    about how software systems scale and evolve, leading me to explore containerization, 
                    CI/CD pipelines, and machine learning.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 dark:bg-gray-800 border-none">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-green-600">What Drives Me</h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    I believe in the power of automation and intelligent systems to solve complex problems. 
                    Whether it's building CI/CD pipelines that streamline deployments or creating AI-powered 
                    chatbots that enhance user experiences, I'm driven by the impact of technology on real-world challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-none">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <i className="fas fa-graduation-cap mr-3"></i>
                      <span>B.Tech CSE Student at LPU</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-3"></i>
                      <span>Himachal Pradesh, India</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-laptop-code mr-3"></i>
                      <span>DevOps & AI Enthusiast</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-certificate mr-3"></i>
                      <span>Multiple Industry Certifications</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 dark:bg-gray-800 border-none">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-amber-600">Beyond Code</h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    When I'm not coding, I'm exploring new AI tech tools and staying updated with the latest innovations. 
                    I love spending time in nature, listening to music, and gaming. This diverse range of interests 
                    helps me approach problems from different perspectives and keeps my creativity flowing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
