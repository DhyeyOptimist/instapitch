
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current.children, 
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

  const plans = [
    {
      name: "Starter Plan",
      price: "499",
      currency: "₹",
      period: "/One-Time",
      description: "Perfect for getting started with pitch deck creation",
      icon: <Star className="w-6 h-6" />,
      features: [
        "3,000 credits included (enough for ~6 decks)",
        "1 free premium download (without watermark)",
        "Additional Credits: ₹1000 = 5,000 credits (~10 decks)"
      ],
      cta: "Get Started",
      popular: false,
      gradient: "from-primary-500 to-primary-600"
    },
    {
      name: "Pro Plan",
      price: "10,000",
      currency: "₹",
      period: "/One-Time",
      description: "Most popular choice for professionals and teams",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Unlimited access to the software and tools",
        "15,000 credits included (~30 decks)",
        "10 free premium downloads (no watermark)",
        "Access to Expert Review Session: A 1-hour session to refine the deck"
      ],
      cta: "Go Pro",
      popular: true,
      gradient: "from-secondary-500 to-secondary-600"
    },
    {
      name: "Enterprise Plan",
      price: "Custom pricing",
      currency: "",
      period: "/Contact Sales Team",
      description: "Vendorship Model Ideal For agencies and large teams",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Agencies, consultants, and large teams",
        "Unlimited team access and collaboration tools",
        "Annual credits pool based on usage volume"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-dark-700 to-dark-800"
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-dark-900 mb-6">
            Choose Your Perfect{' '}
            <span className="gradient-text">Pricing Plan</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-600 leading-relaxed">
            Start for free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover-lift ${
                plan.popular 
                  ? 'bg-white border-2 border-secondary-200 shadow-2xl scale-105 lg:scale-110' 
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-white`}>
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-space-grotesk font-bold text-dark-900 mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-dark-600 mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-dark-900">{plan.currency}</span>
                    <span className="text-4xl md:text-5xl font-space-grotesk font-bold text-dark-900">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-dark-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-dark-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-dark-600 text-lg mb-6">
            Need a custom solution? We're here to help.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary-200 hover:bg-primary-50 text-primary-600 px-8 py-4 font-semibold hover-lift"
          >
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
