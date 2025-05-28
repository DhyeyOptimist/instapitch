
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism backdrop-blur-xl bg-white/80 border-b border-white/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
  
<div className="w-32 h-18 rounded-lg overflow-hidden flex items-center justify-center">
  <img 
    src="/logo.svg" 
    alt="Logo" 
    className="w-full h-full object-contain"
  />
</div>
  {/* <span className="text-xl font-space-grotesk font-bold text-dark-900"></span> */}
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            <a href="#home" className="text-dark-700 hover:text-primary-600 font-medium transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="blogs#home" className="text-dark-700 hover:text-primary-600 font-medium transition-all duration-300 relative group">
              Blogs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="" className="text-dark-700 hover:text-primary-600 font-medium transition-all duration-300 relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://instapitch.io/login"  rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border border-primary-600 hover:bg-primary-50 ml-8 text-primary-600 px-6 py-3 transition-all duration-300 hover:scale-105">
              Login
            </Button>
            </a>

            <a href="https://instapitch.io/signup" rel="noopener noreferrer">
            <Button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Sign Up
            </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-dark-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-dark-700 hover:text-primary-600 transition-colors font-medium">
                Home
              </a>
              <a href="#blogs" className="text-dark-700 hover:text-primary-600 transition-colors font-medium">
                Blogs
              </a>
              <a href="#pricing" className="text-dark-700 hover:text-primary-600 transition-colors font-medium">
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-dark-700 hover:text-primary-600 justify-start">
                  Login
                </Button>
                <Button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold">
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
