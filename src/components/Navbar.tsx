
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <div className="bg-primary text-white w-8 h-8 rounded-md flex items-center justify-center">
            M
          </div>
          <span>KeshavSoft Modern</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "font-medium text-primary" 
                : "text-foreground hover:text-primary transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
                ? "font-medium text-primary" 
                : "text-foreground hover:text-primary transition-colors"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "font-medium text-primary" 
                : "text-foreground hover:text-primary transition-colors"
            }
          >
            Contact
          </NavLink>
          <Button className="bg-accent text-white hover:bg-accent/90 ml-4">Get Started</Button>
        </nav>
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block py-2 px-4 rounded-md ${isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `block py-2 px-4 rounded-md ${isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `block py-2 px-4 rounded-md ${isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Button className="mt-2 w-full bg-accent text-white hover:bg-accent/90">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
