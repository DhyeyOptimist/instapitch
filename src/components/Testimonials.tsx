
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: "Instapitch helped us create a compelling deck that raised $2M in our seed round. The AI understood our vision perfectly.",
      founder: "Digvijay Pandey",
      company: "TechFlow",
      logo: "TF",
      image: "/public/digvijaypandey.jpeg"
    },
    {
      id: 2,
      quote: "The quality of presentations Instapitch generates is incredible. It saved us weeks of work and impressed our investors.",
      founder: "Gauri Kumar",
      company: "StartupLab",
      logo: "SL",
      image: "/public/gauri_kumar.png"
    },
    {
      id: 3,
      quote: "From concept to funding in record time. Instapitch's storytelling capabilities are game-changing for entrepreneurs.",
      founder: "Mayank Jani",
      company: "InnovateNow",
      logo: "IN",
      image: "/public/mayank_jani.png"
    },
    {
      id: 4,
      quote: "The AI-content was so on-point, our advisors thought we hired a professional presentation agency.",
      founder: "Shashank Rai",
      company: "FutureVision",
      logo: "FV",
      image: "/public/shashankrai.jpeg"
    },
    {
      id: 5,
      quote: "The AI-content was so on-point, our advisors thought we hired a professional presentation agency.",
      founder: "Vedansh Goyal",
      company: "NextGen",
      logo: "NG",
      image: "/public/vedansh_goyal.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({
        ...testimonials[index],
        position: i
      });
    }
    return visible;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(cardsRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: cardsRef.current,
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
    <section ref={sectionRef} className="section-padding bg-dark-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-dark-900 mb-6">
            What Founders <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who've raised funding with Instapitch
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div ref={cardsRef} className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            {/* Left Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 z-10 rounded-full border-dark-300 hover:bg-dark-100 w-12 h-12 shadow-lg"
            >
              <ChevronLeft size={24} />
            </Button>
            
            {/* Cards Container */}
            <div className="flex items-center justify-center w-full overflow-hidden px-20">
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={`${testimonial.id}-${testimonial.position}`}
                  className={`transition-all duration-500 mx-4 ${
                    testimonial.position === 0
                      ? 'scale-100 opacity-100 z-20 w-96'
                      : 'scale-90 opacity-40 w-80'
                  } ${
                    testimonial.position === -1 ? 'transform -translate-x-8' : ''
                  } ${
                    testimonial.position === 1 ? 'transform translate-x-8' : ''
                  }`}
                  style={{
                    clipPath: testimonial.position !== 0 ? 'inset(0 20% 0 20%)' : 'none'
                  }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift min-h-[300px] flex flex-col justify-between">
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.founder}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary-200"
                      />
                      <div>
                        <h4 className="font-semibold text-dark-900 text-lg">{testimonial.founder}</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded text-white text-xs flex items-center justify-center font-bold">
                            {testimonial.logo}
                          </div>
                          <span className="text-dark-600">{testimonial.company}</span>
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-dark-700 leading-relaxed text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 z-10 rounded-full border-dark-300 hover:bg-dark-100 w-12 h-12 shadow-lg"
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-600 w-8' : 'bg-dark-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
