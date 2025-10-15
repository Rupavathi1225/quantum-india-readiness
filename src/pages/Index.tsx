import Hero from "@/components/Hero";
import AboutStudy from "@/components/AboutStudy";
import Participants from "@/components/Participants";
import WhyParticipate from "@/components/WhyParticipate";
import FocusRegions from "@/components/FocusRegions";
import ResearchInitiative from "@/components/ResearchInitiative";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AboutStudy />
      <Participants />
      <WhyParticipate />
      <FocusRegions />
      <ResearchInitiative />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
