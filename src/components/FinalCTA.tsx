
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-white mb-6 animate-fade-in">
            Ready to Build Your Next
            <br />
            <span className="text-primary-100">Winning Pitch Deck?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed animate-fade-in">
            Join thousands of entrepreneurs who've successfully raised funding with AI-powered presentations. 
            Start creating your professional pitch deck today—no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button 
              size="lg"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 text-lg hover-lift"
            >
              Start Building for Free
            </Button>
            
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
