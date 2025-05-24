
const TemplatesPreview = () => {
  const templates = [
    {
      id: 1,
      name: 'SaaS Startup',
      description: 'Perfect for software as a service companies',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Technology'
    },
    {
      id: 2,
      name: 'E-commerce',
      description: 'Ideal for retail and marketplace businesses',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Retail'
    },
    {
      id: 3,
      name: 'FinTech',
      description: 'Tailored for financial technology solutions',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Finance'
    },
    {
      id: 4,
      name: 'HealthTech',
      description: 'Designed for healthcare and wellness startups',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Healthcare'
    },
    {
      id: 5,
      name: 'EdTech',
      description: 'Built for education and learning platforms',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Education'
    },
    {
      id: 6,
      name: 'Enterprise',
      description: 'Professional template for B2B solutions',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Business'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-dark-900 mb-6">
            Explore Ready-to-Use <span className="gradient-text">Templates</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Choose from professionally designed templates tailored to your industry and customize with AI
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div 
              key={template.id}
              className="group cursor-pointer animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-dark-200 transition-all duration-300 group-hover:shadow-2xl">
                {/* Template Preview */}
                <div className="relative overflow-hidden">
                  <img 
                    src={template.image}
                    alt={template.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Template Info */}
                <div className="p-6">
                  <h3 className="text-xl font-space-grotesk font-semibold text-dark-900 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-dark-600 text-sm leading-relaxed">
                    {template.description}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors">
                      Use Template →
                    </span>
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((star) => (
                        <div key={star} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 text-lg hover-lift"
          >
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesPreview;
