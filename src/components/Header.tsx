import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism backdrop-blur-xl bg-white/80 border-b border-white/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={handleLogoClick}
          >
            <div className="w-32 h-18 rounded-lg overflow-hidden flex items-center justify-center transform transition-all duration-300 group-hover:brightness-110 group-active:brightness-95">
              <img 
                src="/logo.svg" 
                alt="Logo" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            <button 
              onClick={() => handleNavClick('/')}
              className="text-dark-700 hover:text-primary-600 font-medium transition-all duration-300 relative group px-2 py-1 rounded-lg hover:bg-primary-50/50 active:scale-95"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('/blogs')}
              className="text-dark-700 hover:text-primary-600 font-medium transition-all duration-300 relative group px-2 py-1 rounded-lg hover:bg-primary-50/50 active:scale-95"
            >
              Blogs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('/pricing')}
              className="text-dark-700 hover:text-primary-600 font-medium transition-all duration-300 relative group px-2 py-1 rounded-lg hover:bg-primary-50/50 active:scale-95"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div className="relative">

              {isContactOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-50">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-dark-900">Contact Information</h3>
                    <button 
                      onClick={() => setIsContactOpen(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <div className="space-y-4 text-sm">
                    
                    <div>
                      <p className="font-medium text-dark-700 mb-1">Call Us:</p>
                      <a 
                        href="tel:+919879605231" 
                        className="text-primary-600 hover:text-primary-700"
                      >
                        +91 9879605231
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-dark-700 mb-1">Operating Address:</p>
                      <p className="text-dark-600 leading-relaxed">
                        FF 11 kalash Elite, Vasna bhayli road,<br />
                        Vadodara, GUJARAT, 390008<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://instapitch.io/login" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border border-primary-600 hover:bg-primary-50 ml-8 text-primary-600 px-6 py-3 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-md hover:border-primary-700"
              >
                Login
              </Button>
            </a>

            <a href="https://instapitch.io/signup" rel="noopener noreferrer">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg transform">
                Sign Up
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-dark-700 hover:text-primary-600 transition-all duration-300 rounded-lg hover:bg-primary-50/50 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} className="transition-transform duration-300 hover:scale-110" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  handleNavClick('/');
                  setIsMenuOpen(false);
                }}
                className="text-dark-700 hover:text-primary-600 transition-all duration-300 font-medium text-left px-2 py-2 rounded-lg hover:bg-primary-50/50 active:scale-95"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  handleNavClick('/blogs');
                  setIsMenuOpen(false);
                }}
                className="text-dark-700 hover:text-primary-600 transition-all duration-300 font-medium text-left px-2 py-2 rounded-lg hover:bg-primary-50/50 active:scale-95"
              >
                Blogs
              </button>
              <button 
                onClick={() => {
                  handleNavClick('/pricing');
                  setIsMenuOpen(false);
                }}
                className="text-dark-700 hover:text-primary-600 transition-all duration-300 font-medium text-left px-2 py-2 rounded-lg hover:bg-primary-50/50 active:scale-95"
              >
                Pricing
              </button>
              <button 
                onClick={toggleContact}
                className="text-dark-700 hover:text-primary-600 transition-all duration-300 font-medium text-left px-2 py-2 rounded-lg hover:bg-primary-50/50 active:scale-95"
              >
                Contact Us
              </button>
              
              {/* Mobile Contact Info */}
              {isContactOpen && (
                <div className="ml-4 p-4 bg-gray-50 rounded-lg space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-dark-700 mb-1">Email Us:</p>
                    <a 
                      href="mailto:founder@impactfulpitch.com" 
                      className="text-primary-600 hover:text-primary-700"
                    >
                      founder@impactfulpitch.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-dark-700 mb-1">Call Us:</p>
                    <a 
                      href="tel:+919879605231" 
                      className="text-primary-600 hover:text-primary-700"
                    >
                      +91 9879605231
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-dark-700 mb-1">Address:</p>
                    <p className="text-dark-600 leading-relaxed">
                      FF 11 kalash Elite, Vasna bhayli road, Vadodara, GUJARAT, 390008, India
                    </p>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col space-y-2 pt-4">
                <a href="https://instapitch.io/login" rel="noopener noreferrer">
                  <Button variant="ghost" className="text-dark-700 hover:text-primary-600 justify-start w-full transition-all duration-300 hover:scale-105 active:scale-95">
                    Login
                  </Button>
                </a>
                <a href="https://instapitch.io/signup" rel="noopener noreferrer">
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold w-full transition-all duration-300 hover:scale-105 active:scale-95">
                    Sign Up
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Overlay for closing contact dropdown */}
      {isContactOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsContactOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
