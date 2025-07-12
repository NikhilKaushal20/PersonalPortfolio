import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();

  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      color: "text-blue-600",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "fas fa-cogs",
      color: "text-green-600",
      skills: [
        { name: "Docker", level: 90 },
        { name: "Jenkins", level: 85 },
        { name: "AWS", level: 75 },
        { name: "Git/GitHub", level: 95 },
      ],
    },
    {
      title: "Testing & QA",
      icon: "fas fa-vial",
      color: "text-amber-600",
      skills: [
        { name: "Selenium", level: 85 },
        { name: "API Testing", level: 80 },
        { name: "Katalon Studio", level: 75 },
        { name: "Agile/Scrum", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-amber-600 text-white rounded-full text-sm font-semibold mb-4 inline-block">
              Chapter 3: The Arsenal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <i className={`${category.icon} ${category.color} text-2xl mr-3`}></i>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold">{skill.name}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                          </div>
                          <Progress value={isVisible ? skill.level : 0} className="h-2" />
                        </div>
                      ))}
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

export default Skills;
