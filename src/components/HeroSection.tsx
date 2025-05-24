
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="hero-gradient section-padding pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-dark-900 leading-tight">
                Build Stunning{' '}
                <span className="gradient-text">Pitch Decks</span>{' '}
                with AI
              </h1>
              <p className="text-lg md:text-xl text-dark-600 leading-relaxed max-w-lg">
                Transform your ideas into compelling presentations in minutes. Our AI understands your business and creates professional pitch decks that investors love.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 text-lg hover-lift"
              >
                Sign up for free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-dark-300 text-dark-700 hover:bg-dark-50 font-semibold px-8 py-4 text-lg"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-dark-900">10,000+</div>
                <div className="text-sm text-dark-600">Decks Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-dark-900">$2.5B+</div>
                <div className="text-sm text-dark-600">Funding Raised</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-dark-900">98%</div>
                <div className="text-sm text-dark-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="AI Pitch Deck Builder Interface" 
                className="w-full h-auto rounded-lg"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg animate-scale-in">
                AI
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary-600 text-white rounded-lg px-4 py-2 font-semibold animate-fade-in">
                ⚡ Generated in 30s
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
