
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
                (Build Stunning){' '}
                <span className="gradient-text">(Pitch Decks</span>{' '}
                with AI)
              </h1>
              <p className="text-lg md:text-xl text-dark-600 leading-relaxed max-w-lg">
                (Transform your ideas into compelling presentations in minutes. Our AI understands your business and creates professional pitch decks that investors love.)
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 text-lg hover-lift"
              >
                Sign up for free
              </Button>

            </div>

            {/* Stats */}
            
          </div>


          <div className="relative animate-slide-in-right">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 hover-lift">
              <img 
                src="/hero-img.png"
                alt="AI Pitch Deck Builder Interface" 
                className="w-full h-auto rounded-lg"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg animate-scale-in">
                AI
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
