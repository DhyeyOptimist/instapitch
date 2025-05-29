
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Blog from '@/components/Blog';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SocialProof />
      <HowItWorks />
      <Testimonials />

      <Blog />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
