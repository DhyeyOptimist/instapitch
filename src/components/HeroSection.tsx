
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AIButton from './AIButton';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], { opacity: 0, y: 50 });
      gsap.set(imageRef.current, { opacity: 0, y: 100 });

      const tl = gsap.timeline();
      
      tl.to(titleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out" 
      })
      .to(subtitleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      }, "-=0.5")
      .to(ctaRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power3.out" 
      }, "-=0.3")
      .to(imageRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      }, "-=0.4");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="hero-gradient section-padding pt-32 min-h-screen flex flex-col justify-center">
      <div className="container-custom">

        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="glass-morphism backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 md:p-12 mb-12">
            <div className="space-y-6">
              <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-7xl font-space-grotesk font-bold text-dark-900 leading-tight">
                Build Stunning{' '}
                <span className="gradient-text">Pitch Decks</span>{' '}
                with AI
              </h1>
              
              <p ref={subtitleRef} className="text-lg md:text-xl text-dark-600 leading-relaxed max-w-3xl mx-auto">
                Transform your ideas into compelling presentations in minutes. Our AI understands your business and creates professional pitch decks that investors love.
              </p>
              
              <div ref={ctaRef} className="pt-4">
          <a href="https://instapitch.io/signup" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-12 py-6 text-xl hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 animate-pulse-slow"
                >
                  Sign up for free
                </Button>
          </a>
              </div>
            </div>
          </div>
        </div>


        <div ref={imageRef} className="relative max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 hover-lift">
            <img 
              src="/hero-img.png"
              alt="AI Pitch Deck Builder Interface" 
              className="w-full h-auto rounded-2xl"
            />

            <div className="absolute -top-8 -right-8">
              <AIButton size="medium" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
