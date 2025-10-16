import CTASection from '../../components/CTA/CTASection';
import HeroSection from '../../components/Hero/HeroSection';
import HowItWorksSection from '../../components/HowItWorks/HowItWorks';
import OurValues from '../../components/Values/Values';
import WhyJoinSection from '../../components/Why-Join/WhyJoin';
import Footer from '../../components/Footer/Footer';
import './Dasboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <HeroSection />
      <WhyJoinSection />
      <HowItWorksSection />
      <CTASection />
      <OurValues />
      <Footer />
    </div>
  );
};

export default Dashboard;
