
const SocialProof = () => {
  const companies = [
    { name: 'TechCorp', logo: '/algobulls.png', isImage: true },
    { name: 'InnovateLab', logo: 'IL', isImage: false },
    { name: 'StartupX', logo: 'SX', isImage: false },
    { name: 'VentureOne', logo: 'V1', isImage: false },
    { name: 'FutureBuilders', logo: 'FB', isImage: false },
    { name: 'NextGen', logo: 'NG', isImage: false },
    { name: 'Pioneer Co', logo: 'PC', isImage: false },
    { name: 'Catalyst', logo: 'CT', isImage: false },
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
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border border-dark-200 p-2">
                  {company.isImage ? (
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="font-bold text-dark-700 text-sm">{company.logo}</span>
                  )}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border border-dark-200 p-2">
                  {company.isImage ? (
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="font-bold text-dark-700 text-sm">{company.logo}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
