
import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center gap-2">
  <div className="w-32 h-18 rounded-lg overflow-hidden flex items-center justify-center">
  <img 
    src="/logo-white.png" 
    alt="Logo" 
    className="w-full h-full object-contain"
  />
</div>
  </div>
              {/* <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div> */}
              {/* <span className="text-xl font-space-grotesk font-bold">Instapitch</span> */}
            </div>
            <p className="text-dark-300 leading-relaxed max-w-md">
              Empowering entrepreneurs worldwide to create compelling pitch decks that secure funding and drive business growth through the power of artificial intelligence.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-dark-300">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              {/* <li><a href="#" className="hover:text-white transition-colors">API</a></li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-dark-300">
              {/* <li><a href="#" className="hover:text-white transition-colors">About</a></li> */}
              {/* <li><a href="#" className="hover:text-white transition-colors">Blog</a></li> */}
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://instapitch.io/about-us" className="hover:text-white transition-colors">About us</a></li>

            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-dark-400 text-sm mb-4 md:mb-0">
            © 2024 Instapitch. All rights reserved.
          </div>

          {/* Social Links */}
          {/* <div className="flex space-x-4">
            <a href="#" className="text-dark-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-dark-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-dark-400 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
