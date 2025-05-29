
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Us
              </h1>
              <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-12 text-lg">
                Impactful Pitch is a dedicated service provider that offers comprehensive assistance to 
                startups and businesses in their fundraising journey by providing them with the 
                necessary resources and helping them to connect with the right set of investors. We are 
                committed to providing tailored support services to help startups thrive.
              </p>

              {/* Vision Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To evolve the startup ecosystem, where the ratio of funded startups is being increased.
                </p>
              </div>

              {/* Mission Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our vision is to transform the global pitching process by empowering entrepreneurs 
                  with mentorship, resources, and technology, fostering a thriving ecosystem where 
                  innovative startups can secure funding and drive growth in the global economy.
                </p>
              </div>

              {/* Ethics Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ethics</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">Integrity and Honesty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">Respect and Diversity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">Client-Centric Approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">Sustainability and Social Responsibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">Continuous Improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
