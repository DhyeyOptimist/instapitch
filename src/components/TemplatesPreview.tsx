
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TemplatesPreview = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  const templates = [
    {
      id: 1,
      name: 'SaaS Startup',
      description: 'Perfect for software as a service companies',
      image: '/public/temp1.png',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'E-commerce',
      description: 'Ideal for retail and marketplace businesses',
      image: '/public/temp2.png',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 3,
      name: 'FinTech',
      description: 'Tailored for financial technology solutions',
      image: '/public/temp3.png',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 4,
      name: 'HealthTech',
      description: 'Designed for healthcare and wellness startups',
      image: '/public/temp4.png',
      color: 'from-rose-500 to-pink-500'
    },
    {
      id: 5,
      name: 'EdTech',
      description: 'Built for education and learning platforms',
      image: '/public/temp5.png',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 6,
      name: 'Enterprise',
      description: 'Professional template for B2B solutions',
      image: '/public/temp6.png',
      color: 'from-slate-500 to-gray-600'
    }
  ];

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

      gsap.fromTo(gridRef.current.children, 
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
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
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-dark-900 mb-6">
            Explore Ready-to-Use <span className="gradient-text">Templates</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Choose from professionally designed templates tailored to your industry and customize with AI
          </p>
        </div>

        {/* Sharp Template Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {templates.map((template, index) => (
            <div 
              key={template.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:border-primary-200">
                {/* Gradient Overlay */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${template.color}`}></div>
                
                {/* Template Preview */}
                <div className="relative overflow-hidden">
                  <img 
                    src={template.image}
                    alt={template.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Badge */}
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${template.color} animate-pulse`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-space-grotesk font-bold text-dark-900 group-hover:text-primary-600 transition-colors duration-300">
                      {template.name}
                    </h3>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${template.color} opacity-20 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  <p className="text-dark-600 leading-relaxed">
                    {template.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-primary-200 text-primary-600 hover:bg-primary-50"
                    >
                      Use Template
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-12 py-6 text-lg hover-lift transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesPreview;
