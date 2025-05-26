
const HowItWorks = () => {
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

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-dark-900 mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            From idea to investor-ready presentation in just four simple steps
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-in-left`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold text-dark-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-dark-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-slide-in-right`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
