
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-space-grotesk font-bold text-dark-900">Instapitch</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-dark-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </a>
            <a href="#blogs" className="text-dark-700 hover:text-primary-600 transition-colors font-medium">
              Blogs
            </a>
            <a href="#pricing" className="text-dark-700 hover:text-primary-600 transition-colors font-medium">
              Pricing
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-dark-700 hover:text-primary-600">
              Login
            </Button>
            <Button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6">
              Sign Up
            </Button>
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
