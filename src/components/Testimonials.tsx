
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

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Founders <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who've raised funding with Instapitch
          </p>
        </div>

        <div ref={cardsRef} className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-xl"
          >
            <ChevronLeft size={24} className="text-gray-600 transition-transform duration-300 hover:scale-110" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-xl"
          >
            <ChevronRight size={24} className="text-gray-600 transition-transform duration-300 hover:scale-110" />
          </button>

          {/* Single Centered Card */}
          <div className="flex justify-center px-20">
            <div 
              key={currentTestimonial.id}
              className="w-full max-w-3xl transition-all duration-300 transform"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-8 space-x-6">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.founder}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 shadow-lg transition-transform duration-300 hover:scale-110"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-2xl mb-2">{currentTestimonial.founder}</h4>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white text-lg flex items-center justify-center font-bold shadow-md">
                        {currentTestimonial.logo}
                      </div>
                      <span className="text-gray-600 text-lg font-semibold">{currentTestimonial.company}</span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 leading-relaxed text-xl font-medium italic">
                  "{currentTestimonial.quote}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
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
