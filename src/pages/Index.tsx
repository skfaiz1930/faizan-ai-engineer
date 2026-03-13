import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import AIAutomation from "@/components/AIAutomation";
import Projects from "@/components/Projects";
import LearningResearch from "@/components/LearningResearch";
import ManagerOSSection from "@/components/ManagerOSSection";
import BeyondCode from "@/components/BeyondCode";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";
import UserDetailsPopup from "@/components/UserDetailsPopup";
import ChatbotInterface from "@/components/ChatbotInterface";
import FloatingChatButton from "@/components/FloatingChatButton";

const Index = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const handleOpenChat = () => {
    setIsChatbotOpen(true);
    setHasUnread(false);
  };

  return (
    <div className="min-h-screen">
      <CursorTrail />
      <UserDetailsPopup delayMs={10000} />
      <Navbar onChatbotToggle={handleOpenChat} />
      <FloatingChatButton
        onClick={handleOpenChat}
        isOpen={isChatbotOpen}
        hasUnread={hasUnread}
      />
      <ChatbotInterface
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onNewMessage={() => {
          if (!isChatbotOpen) setHasUnread(true);
        }}
      />
      <Hero />
      <TechStack />
      <AIAutomation />
      <Projects />
      <ManagerOSSection />
      <LearningResearch />
      <BeyondCode />
      <Footer />
    </div>
  );
};

export default Index;
