
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const PricingPage = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out"
        }
      );

      // Cards animation
      gsap.fromTo(cardsRef.current.children, 
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
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
      gradient: "from-blue-500/20 to-purple-500/20",
      borderGradient: "from-blue-500/30 to-purple-500/30",
      hoverGradient: "from-blue-500 to-blue-600"
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
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/40 to-pink-500/40",
      hoverGradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise Plan",
      price: "Custom pricing",
      currency: "",
      period: "/Contact Sales Team",
      description: "Vendorship Model Ideal for agencies and large teams",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Agencies, consultants, and large teams",
        "Unlimited team access and collaboration tools",
        "Annual credits pool based on usage volume*"
      ],
      cta: "Contact us",
      popular: false,
      gradient: "from-blue-500/20 to-purple-500/20",
      borderGradient: "from-blue-500/30 to-purple-500/30",
      hoverGradient: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <Header />
      
      <main ref={sectionRef} className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="relative section-padding">
          <div className="container-custom">
            <div ref={heroRef} className="text-center max-w-4xl mx-auto mb-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-slate-900 mb-6">
                Choose Your Perfect{' '}
                <span className="gradient-text">Plan</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
                Start for free and scale as you grow. No hidden fees, no surprises.
              </p>
            </div>

            {/* Pricing Cards */}
            <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative group ${
                    plan.popular ? 'lg:scale-105 lg:-translate-y-4' : ''
                  }`}
                >
                  {/* Glass Card */}
                  <div className={`
                    relative h-full rounded-3xl p-8 
                    bg-white/40 backdrop-blur-xl border border-white/20
                    shadow-2xl hover:shadow-3xl
                    transition-all duration-300 ease-out
                    hover:scale-[1.02] hover:bg-white/50
                    ${plan.popular ? 'ring-2 ring-purple-500/20' : ''}
                  `}>
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Most Popular
                        </div>
                      </div>
                    )}

                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${plan.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>

                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${plan.gradient} backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {plan.icon}
                      </div>
                      
                      <h3 className="text-2xl font-space-grotesk font-bold text-slate-900 mb-3">
                        {plan.name}
                      </h3>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {plan.description}
                      </p>

                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="flex items-baseline justify-center mb-2">
                          {plan.currency && (
                            <span className="text-2xl font-bold text-slate-700">{plan.currency}</span>
                          )}
                          <span className="text-4xl md:text-5xl font-space-grotesk font-bold text-slate-900">
                            {plan.price}
                          </span>
                        </div>
                        <span className="text-slate-500 text-lg">{plan.period}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 group/item">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover/item:scale-110 transition-transform duration-200">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className={`w-full py-6 text-lg font-semibold transition-all duration-300 group/btn ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl'
                          : `bg-gradient-to-r ${plan.hoverGradient} text-white shadow-lg hover:shadow-xl`
                      } hover:scale-[1.02] active:scale-95`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {plan.cta}
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-20">
              <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-space-grotesk font-bold text-slate-900 mb-4">
                  Need a custom solution?
                </h3>
                <p className="text-slate-600 text-lg mb-6">
                  We're here to help you find the perfect plan for your unique needs.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-slate-300/50 hover:bg-white/50 text-slate-700 px-8 py-4 font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Contact Our Team
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
