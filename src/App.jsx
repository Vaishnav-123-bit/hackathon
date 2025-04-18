import { useState, useRef, useEffect } from "react";
import "./App.css";
import { useUser } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import MoreAboutUs from "./components/MoreAboutUs";
import HowItWorks from "./components/HowItWorks";
import IconButtons from "./components/IconButtons";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsAppModal from "./components/WhatsAppModal";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  // Define the refs for each section
  const mainSectionRef = useRef(null);
  const moreAboutUsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const whatsAppRef = useRef(null);
  // Scroll to Main Section
  const scrollToMainSection = () => {
    if (mainSectionRef.current) {
      mainSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const scrollToWhatsApp = () => {
    if (whatsAppRef.current) {
      whatsAppRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Scroll to About Us Section
  const scrollToAboutUs = () => {
    if (moreAboutUsRef.current) {
      moreAboutUsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Scroll to How It Works Section
  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const { user, loading } = useUser();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Navbar with scroll functions passed as props */}
      <Navbar
        scrollToMainSection={scrollToMainSection}
        scrollToAboutUs={scrollToAboutUs}
        scrollToHowItWorks={scrollToHowItWorks}
        scrollToWhatsApp={scrollToWhatsApp}
      />

      {/* Home Section */}
      <Home />

      {/* Main Section, ref passed here */}
      <MainSection ref={mainSectionRef} />

      {/* More About Us Section, ref passed here */}
      <MoreAboutUs ref={moreAboutUsRef} />

      {/* How It Works Section, ref passed here */}
      <HowItWorks ref={howItWorksRef} />
      <WhatsAppModal ref={whatsAppRef} />
      {/* Footer */}
      <Footer />

      {/* Icon Buttons to scroll to sections */}
      <IconButtons scrollToMainSection={scrollToMainSection} />
    </>
  );
}

export default App;
