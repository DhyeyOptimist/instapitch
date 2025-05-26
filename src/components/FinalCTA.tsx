
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current.children, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800">
      <div className="container-custom">
        <div ref={contentRef} className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-white mb-6">
            Ready to Build Your Next
            <br />
            <span className="text-primary-100">Winning Pitch Deck?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-100 mb-12 leading-relaxed">
            Join thousands of entrepreneurs who've successfully raised funding with AI-powered presentations. 
            Start creating your professional pitch deck today—no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-12 py-6 text-lg hover-lift transition-all duration-300 hover:scale-105 shadow-lg"
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
