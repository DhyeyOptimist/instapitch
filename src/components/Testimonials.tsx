import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      image: "/digvijaypandey.jpeg"
    },
    {
      id: 2,
      quote: "The quality of presentations Instapitch generates is incredible. It saved us weeks of work and impressed our investors.",
      founder: "Gauri Kumar",
      company: "StartupLab",
      logo: "SL",
      image: "/gauri_kumar.png"
    },
    {
      id: 3,
      quote: "From concept to funding in record time. Instapitch's storytelling capabilities are game-changing for entrepreneurs.",
      founder: "Mayank Jani",
      company: "InnovateNow",
      logo: "IN",
      image: "/mayank_jani.png"
    },
    {
      id: 4,
      quote: "The AI-content was so on-point, our advisors thought we hired a professional presentation agency.",
      founder: "Shashank Rai",
      company: "FutureVision",
      logo: "FV",
      image: "/shashankrai.jpeg"
    },
    {
      id: 5,
      quote: "The AI-content was so on-point, our advisors thought we hired a professional presentation agency.",
      founder: "Vedansh Goyal",
      company: "NextGen",
      logo: "NG",
      image: "/vedansh_goyal.png"
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Founders <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who've raised funding with Instapitch
          </p>
        </div>

        <div ref={cardsRef} className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-200"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-200"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>

          {/* Cards Container with proper side visibility */}
          <div className="flex items-center justify-center">
            <div className="flex items-stretch w-full" style={{ maxWidth: '1000px' }}>
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={`${testimonial.id}-${testimonial.position}`}
                  className={`transition-all duration-500 ${
                    testimonial.position === 0
                      ? 'flex-1 mx-4 z-20'  // Center card - full width
                      : 'w-20 z-10'         // Side cards - only 20% visible (80px width)
                  }`}
                  style={{
                    opacity: testimonial.position === 0 ? 1 : 0.4,
                  }}
                >
                  <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 h-full ${
                    testimonial.position === 0 ? 'p-8' : 'p-4 overflow-hidden'
                  }`}>
                    <div className={`flex items-center mb-4 ${
                      testimonial.position === 0 ? 'space-x-4' : 'space-x-2'
                    }`}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.founder}
                        className={`rounded-full object-cover border-2 border-blue-100 ${
                          testimonial.position === 0 ? 'w-14 h-14' : 'w-8 h-8'
                        }`}
                      />
                      <div className={testimonial.position === 0 ? '' : 'hidden'}>
                        <h4 className="font-semibold text-gray-900 text-lg">{testimonial.founder}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded text-white text-sm flex items-center justify-center font-bold">
                            {testimonial.logo}
                          </div>
                          <span className="text-gray-600 text-sm font-medium">{testimonial.company}</span>
                        </div>
                      </div>
                    </div>
                    {testimonial.position === 0 && (
                      <blockquote className="text-gray-700 leading-relaxed text-base">
                        "{testimonial.quote}"
                      </blockquote>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Testimonials;