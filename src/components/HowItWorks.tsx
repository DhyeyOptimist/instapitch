
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef(null);
  const imageRef = useRef(null);

  const steps = [
    {
      number: '01',
      title: 'Describe Your Idea',
      description: 'Simply tell our AI about your business, product, or service in your own words.',
      image: '/public/first.png'
    },
    {
      number: '02',
      title: 'AI Analyzes & Structures',
      description: 'Our advanced AI analyzes your input and creates a logical, compelling narrative structure.',
      image: '/public/second.png'
    },
    {
      number: '03',
      title: 'Design & Content Generation',
      description: 'Professional slides are automatically generated with stunning visuals and persuasive content.',
      image: '/public/third.png'
    },
    {
      number: '04',
      title: 'Customize & Present',
      description: 'Fine-tune your deck with our intuitive editor and present with confidence to investors.',
      image: '/public/fourth.png'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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

      gsap.fromTo(stepsRef.current.children, 
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(imageRef.current, 
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-dark-900 mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            From idea to investor-ready presentation in just four simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Steps Content */}
          <div ref={stepsRef} className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`cursor-pointer transition-all duration-500 p-6 rounded-2xl ${
                  index === currentStep 
                    ? 'bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200 shadow-lg transform scale-105' 
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    <span className="font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className={`text-xl md:text-2xl font-space-grotesk font-bold transition-colors duration-300 ${
                    index === currentStep ? 'text-primary-600' : 'text-dark-900'
                  }`}>
                    {step.title}
                  </h3>
                </div>
                <p className={`text-md leading-relaxed transition-colors duration-300 ${
                  index === currentStep ? 'text-dark-700' : 'text-dark-600'
                }`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Dynamic Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src={steps[currentStep].image} 
                alt={steps[currentStep].title}
                className="w-full h-80 md:h-96 object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Step indicator dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStep ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
