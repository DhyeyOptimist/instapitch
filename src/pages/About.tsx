import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Us
              </h1>
              <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-gray-600 leading-relaxed text-lg text-center max-w-3xl mx-auto">
                Impactful Pitch is a dedicated service provider that offers comprehensive assistance to 
                startups and businesses in their fundraising journey by providing them with the 
                necessary resources and helping them to connect with the right set of investors. We are 
                committed to providing tailored support services to help startups thrive.
              </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                  To evolve the startup ecosystem, where the ratio of funded startups is being increased.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                  Our vision is to transform the global pitching process by empowering entrepreneurs 
                  with mentorship, resources, and technology, fostering a thriving ecosystem where 
                  innovative startups can secure funding and drive growth in the global economy.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ethics</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">Integrity and Honesty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">Respect and Diversity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">Client-Centric Approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">Sustainability and Social Responsibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
