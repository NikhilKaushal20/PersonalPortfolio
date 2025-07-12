import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 floating-nav">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-blue-600">Nikhil</span> Kaushal
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 rounded-full"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
