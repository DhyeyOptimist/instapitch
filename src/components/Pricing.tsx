
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-dark-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-dark-600 leading-relaxed mb-8">
            Choose the perfect plan for your needs and start creating amazing pitch decks today.
          </p>
          <Button
            onClick={() => navigate('/pricing')}
            size="lg"
            className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              View Pricing Plans
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
