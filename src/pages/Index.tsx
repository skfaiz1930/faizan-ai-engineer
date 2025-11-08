import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import AIAutomation from "@/components/AIAutomation";
import Projects from "@/components/Projects";
import LearningResearch from "@/components/LearningResearch";
import BeyondCode from "@/components/BeyondCode";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";
import UserDetailsPopup from "@/components/UserDetailsPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CursorTrail />
      <UserDetailsPopup delayMs={10000} />
      <Navbar />
      <Hero />
      <TechStack />
      <AIAutomation />
      <Projects />
      <LearningResearch />
      <BeyondCode />
      <Footer />
    </div>
  );
};

export default Index;
