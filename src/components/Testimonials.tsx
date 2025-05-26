
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Instapitch helped us create a compelling deck that raised $2M in our seed round. The AI understood our vision perfectly.",
      founder: "Sarah Chen",
      company: "TechFlow",
      logo: "TF",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      quote: "The quality of presentations Instapitch generates is incredible. It saved us weeks of work and impressed our investors.",
      founder: "Michael Rodriguez",
      company: "StartupLab",
      logo: "SL",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      quote: "From concept to funding in record time. Instapitch's storytelling capabilities are game-changing for entrepreneurs.",
      founder: "Emily Watson",
      company: "InnovateNow",
      logo: "IN",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      quote: "The AI-content was so on-point, our advisors thought we hired a professional presentation agency.",
      founder: "David Kim",
      company: "FutureVision",
      logo: "FV",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-dark-900 mb-6">
            (What Founders <span className="gradient-text">Say)</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            (Join thousands of successful entrepreneurs who've raised funding with Instapitch)
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-dark-300 hover:bg-dark-100"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex items-center space-x-4 overflow-hidden max-w-6xl">
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    testimonial.position === 0
                      ? 'scale-100 opacity-100 z-10'
                      : 'scale-90 opacity-60'
                  } ${
                    testimonial.position === -1 ? 'translate-x-4' : ''
                  } ${
                    testimonial.position === 1 ? '-translate-x-4' : ''
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift min-w-[400px] max-w-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.founder}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-dark-900">{testimonial.founder}</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-primary-600 to-secondary-600 rounded text-white text-xs flex items-center justify-center font-bold">
                            {testimonial.logo}
                          </div>
                          <span className="text-dark-600">{testimonial.company}</span>
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-dark-700 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-dark-300 hover:bg-dark-100"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-dark-300'
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
