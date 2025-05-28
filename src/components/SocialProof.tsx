const SocialProof = () => {
  const companies = [
    { name: 'TechCorp', logo: '/algobulls.png', isImage: true },
    { name: 'InnovateLab', logo: '/l2.jpeg', isImage: true },
    { name: 'StartupX', logo: '/l3.jpeg', isImage: true },
    { name: 'VentureOne', logo: '/l4.jpeg', isImage: true },
    { name: 'FutureBuilders', logo: '/l5.jpeg', isImage: true },
    { name: 'NextGen', logo: 'l6.jpeg', isImage: true },
    { name: 'Pioneer Co', logo: 'l7.jpeg', isImage: true },
    { name: 'Catalyst', logo: 'l8.jpeg', isImage: true },
  ];

  return (
    <section className="py-16 bg-dark-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-dark-600 font-medium">Trusted by Teams Globally</p>
        </div>
        
        {/* Scrolling Logo Strip */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {/* First set */}
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                {company.isImage ? (
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="w-24 h-24 object-contain"
                  />
                ) : (
                  <span className="font-bold text-dark-700 text-lg">{company.logo}</span>
                )}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                {company.isImage ? (
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="w-24 h-24 object-contain"
                  />
                ) : (
                  <span className="font-bold text-dark-700 text-lg">{company.logo}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;