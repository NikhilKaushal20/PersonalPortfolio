import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/resume/download');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Nikhil_Kaushal_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      toast({
        title: "Error downloading resume",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4 inline-block">
              Chapter 6: Let's Connect
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities in DevOps and AI? Let's start a conversation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card className="bg-blue-50 dark:bg-gray-800 border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-blue-600">Let's Build Something Amazing</h3>
                  <p className="text-gray-700 dark:text-gray-200 mb-6">
                    I'm always excited to work on challenging projects that push the boundaries of technology. 
                    Whether you're looking for DevOps expertise, AI solutions, or full-stack development, 
                    I'd love to hear about your ideas.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-blue-600 mr-4" size={20} />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:nikkaushal20@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                          nikkaushal20@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="text-green-600 mr-4" size={20} />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:+918894725284" className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors">
                          +91 88947 25284
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Linkedin className="text-blue-600 mr-4" size={20} />
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <a href="https://linkedin.com/in/nikhilkaushal20" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                          linkedin.com/in/nikhilkaushal20
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Github className="text-gray-600 mr-4" size={20} />
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <a href="https://github.com/NikhilKaushal20" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                          github.com/NikhilKaushal20
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Download Resume</h3>
                  <p className="mb-6">Get a comprehensive overview of my skills, experience, and achievements.</p>
                  <Button 
                    onClick={handleDownloadResume}
                    className="bg-white text-blue-600 hover:bg-gray-50"
                  >
                    <Download className="mr-2" size={16} />
                    Download CV
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gray-50 dark:bg-gray-800 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
