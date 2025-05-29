
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleNavigation = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(path);
    }
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
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

          {/* Product Links */}
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
                  onClick={() => handleNavigation('/pricing')}
                  className="hover:text-white transition-all duration-300 text-left hover:translate-x-1 hover:text-primary-400"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
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
                  onClick={() => handleNavigation('/about')}
                  className="hover:text-white transition-all duration-300 text-left hover:translate-x-1 hover:text-primary-400"
                >
                  About us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Section */}
        <div className="border-t border-dark-700 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Information */}
            <div>
              <button
                onClick={() => toggleSection('contact')}
                className="flex items-center justify-between w-full text-left mb-3 hover:text-primary-400 transition-colors duration-300"
              >
                <h4 className="font-semibold text-sm">Contact Information</h4>
                {openSection === 'contact' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openSection === 'contact' && (
                <div className="text-dark-300 text-sm space-y-2 animate-fade-in">
                  <p><strong>Email:</strong> <a href="mailto:founder@impactfulpitch.com" className="text-primary-400 hover:text-primary-300">founder@impactfulpitch.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+919879605231" className="text-primary-400 hover:text-primary-300">+91 9879605231</a></p>
                  <p><strong>Address:</strong> FF 11 kalash Elite, Vasna bhayli road, Vadodara, GUJARAT, 390008, India</p>
                </div>
              )}
            </div>

            {/* Cancellation & Refund */}
            <div>
              <button
                onClick={() => toggleSection('refund')}
                className="flex items-center justify-between w-full text-left mb-3 hover:text-primary-400 transition-colors duration-300"
              >
                <h4 className="font-semibold text-sm">Cancellation & Refund</h4>
                {openSection === 'refund' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openSection === 'refund' && (
                <div className="text-dark-300 text-sm space-y-2 animate-fade-in max-h-48 overflow-y-auto">
                  <p><strong>Subscription Cancellation:</strong> Cancel anytime. Service remains active until end of billing cycle.</p>
                  <p><strong>Monthly Refunds:</strong> Full refund within 7 days of billing cycle.</p>
                  <p><strong>Annual Refunds:</strong> Pro-rated refund within 30 days.</p>
                  <p><strong>Credit Refunds:</strong> Unused credits refundable within 30 days of purchase.</p>
                  <p><strong>Process:</strong> Contact support with purchase details. Refunds processed within 5-7 business days.</p>
                  <p><strong>Non-refundable:</strong> Service fees and usage fees are non-refundable.</p>
                </div>
              )}
            </div>

            {/* Terms & Conditions */}
            <div>
              <button
                onClick={() => toggleSection('terms')}
                className="flex items-center justify-between w-full text-left mb-3 hover:text-primary-400 transition-colors duration-300"
              >
                <h4 className="font-semibold text-sm">Terms & Conditions</h4>
                {openSection === 'terms' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openSection === 'terms' && (
                <div className="text-dark-300 text-sm space-y-2 animate-fade-in max-h-48 overflow-y-auto">
                  <p><strong>Eligibility:</strong> Must be 18+ or 13+ with parental consent.</p>
                  <p><strong>Services:</strong> Pitch deck design, business plans, financials, mentoring.</p>
                  <p><strong>Payment:</strong> Due upon approval or after 3rd contact attempt.</p>
                  <p><strong>Revisions:</strong> Two free revisions included; additional revisions billed separately.</p>
                  <p><strong>Delivery:</strong> Via email in .ppt/.pptx format or as specified.</p>
                  <p><strong>Liability:</strong> Services provided "as is". Company liability limited to 3-month subscription fees.</p>
                  <p><strong>Governing Law:</strong> Indian law applies. Legal venue: India courts.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
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
