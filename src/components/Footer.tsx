
import { Instagram, Twitter, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div 
              className="flex items-center space-x-2 mb-4 cursor-pointer group transition-all duration-300 hover:scale-105 w-fit"
              onClick={() => handleNavigation('/')}
            >
              <div className="flex items-center gap-2">
                <div className="w-32 h-18 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:brightness-110">
                  <img 
                    src="/logo-white.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <p className="text-dark-300 leading-relaxed max-w-md">
              Empowering entrepreneurs worldwide to create compelling pitch decks that secure funding and drive business growth through the power of artificial intelligence.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Product</h3>
            <ul className="space-y-3 text-dark-300">
              <li>
                <button 
                  onClick={() => handleNavigation('/#features')}
                  className="hover:text-white transition-all duration-300 text-left hover:translate-x-1 hover:text-primary-400"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/#templates')}
                  className="hover:text-white transition-all duration-300 text-left hover:translate-x-1 hover:text-primary-400"
                >
                  Templates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/pricing')}
                  className="hover:text-white transition-all duration-300 text-left hover:translate-x-1 hover:text-primary-400"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-dark-300">
              <li>
                <button 
                  onClick={() => handleNavigation('/careers')}
                  className="hover:text-white transition-all duration-300 text-left hover:translate-x-1 hover:text-primary-400"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="hover:text-white transition-all duration-300 text-left hover:translate-x-1 hover:text-primary-400"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('https://instapitch.io/about-us')}
                  className="hover:text-white transition-all duration-300 text-left hover:translate-x-1 hover:text-primary-400"
                >
                  About us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-dark-400 text-sm mb-4 md:mb-0 transition-colors duration-300 hover:text-dark-200">
            © 2024 Instapitch. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
