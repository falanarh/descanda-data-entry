import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import ProgressSection from "../components/ProgressSection";
import TutorialSection from "../components/TutorialSection";

const Beranda = () => {
  const tutorialRef = useRef(null);
  const progressRef = useRef(null);

  const scrollToSection = (sectionRef, offset = 0) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mx-[10%] border-l-[5px] border-r-[5px] border-porange-30 bg-base rounded-[30px] flex flex-col justify-start items-center font-asap text-porange min-h-screen mb-10">
      <HeroSection scrollToTutorial={() => scrollToSection(tutorialRef, 80)} scrollToProgress={() => scrollToSection(progressRef, 0)} />
      <div ref={progressRef}>
        <ProgressSection />
      </div>
      <div ref={tutorialRef}>
        <TutorialSection />
      </div>
    </div>
  );
};

export default Beranda;
