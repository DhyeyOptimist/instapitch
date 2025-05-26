
const SocialProof = () => {
  const companies = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'StartupX', logo: 'SX' },
    { name: 'VentureOne', logo: 'V1' },
    { name: 'FutureBuilders', logo: 'FB' },
    { name: 'NextGen', logo: 'NG' },
    { name: 'Pioneer Co', logo: 'PC' },
    { name: 'Catalyst', logo: 'CT' },
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
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border border-dark-200">
                  <span className="font-bold text-dark-700 text-sm">{company.logo}</span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border border-dark-200">
                  <span className="font-bold text-dark-700 text-sm">{company.logo}</span>
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
