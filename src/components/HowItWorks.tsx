
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const steps = [
    {
      number: '01',
      title: 'Describe Your Idea',
      description: 'Simply tell our AI about your business, product, or service in your own words.',
      image: '/first.png'
    },
    {
      number: '02',
      title: 'AI Analyzes & Structures',
      description: 'Our advanced AI analyzes your input and creates a logical, compelling narrative structure.',
      image: '/second.png'
    },
    {
      number: '03',
      title: 'Design & Content Generation',
      description: 'Professional slides are automatically generated with stunning visuals and persuasive content.',
      image: '/third.png'
    },
    {
      number: '04',
      title: 'Customize & Present',
      description: 'Fine-tune your deck with our intuitive editor and present with confidence to investors.',
      image: '/fourth.png'
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

      gsap.fromTo(contentRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: contentRef.current,
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
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-dark-900 mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            From idea to investor-ready presentation in just four simple steps
          </p>
        </div>

        <div ref={contentRef} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`cursor-pointer transition-all duration-500 p-4 rounded-xl ${
                    index === currentStep 
                      ? 'bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200 shadow-md' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      index === currentStep 
                        ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white' 
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {step.number}
                    </div>
                    <h3 className={`text-lg font-space-grotesk font-bold transition-colors duration-300 ${
                      index === currentStep ? 'text-primary-600' : 'text-dark-900'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ml-11 ${
                    index === currentStep ? 'text-dark-700' : 'text-dark-600'
                  }`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>


            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
                <img 
                  src={steps[currentStep].image} 
                  alt={steps[currentStep].title}
                  className="w-full h-80 object-cover transition-all duration-400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
