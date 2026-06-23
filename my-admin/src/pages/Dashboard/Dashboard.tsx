import CTASection from '../../components/CTA/CTASection';
import HeroSection from '../../components/Hero/HeroSection';
import HowItWorksSection from '../../components/HowItWorks/HowItWorks';
import OurValues from '../../components/Values/Values';
import WhyJoinSection from '../../components/Why-Join/WhyJoin';
import Footer from '../../components/Footer/Footer';
import './Dasboard.scss'
// import PaymentSection from '../../components/Payments/PaymentSection';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <HeroSection />
      <WhyJoinSection />
      <HowItWorksSection />
      <CTASection />
      <OurValues />
      {/* <PaymentSection/> */}
      <Footer />
    </div>
  );
};

export default Dashboard;
