"use client";
import { ButtonAnimation } from "@/components/text-animation/button-animation";
import TextReveal from "@/components/text-animation/text-reveal";

const HeroSection = () => {

  return (
    <div className="relative w-full min-h-screen hero-bg bg-no-repeat bg-cover bg-center md:bg-fixed">
      <div className="relative flex flex-col justify-center items-center h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="text-center space-y-20 font-sans">
            <TextReveal as="h1" variant="heroTitle">
              AI Driven Real Estate Investments Opportunities
            </TextReveal>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <ButtonAnimation variant="heroSectionButton">Get Started</ButtonAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
