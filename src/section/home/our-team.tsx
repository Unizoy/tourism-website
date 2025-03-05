"use client";

import { useState, useRef } from "react";
import { leaders } from "../../../data";
import Typography from "@/components/typography/Typography";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Flip from "gsap/Flip";
import { TextPopUpOrDown } from "@/components/text-animation/text-popup-or-popdown";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(Flip);

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!imagesRef.current) return;
  
    const allImages = [...imagesRef.current.children].filter(child => 
      child instanceof HTMLImageElement
    );
    
    const state = Flip.getState(allImages);
  
    imagesRef.current.classList.remove("state-1", "state-2", "state-3");
    
    imagesRef.current.classList.add(`state-${(currentIndex % 3) + 1}`);
  

    Flip.from(state, {
      duration: 0.4,
      ease: "power1.inOut",
      absolute: true,
      clearProps: "scale,opacity", 
      onComplete: () => {
        gsap.set(allImages, { clearProps: "scale" });
      }
    });

    gsap.fromTo(
      [".name", ".description", ".experience", ".area"],
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [currentIndex]); 

  const handleChangeLeader = (direction: string) => {
    setCurrentIndex((prev) =>
      direction === "next"
        ? (prev + 1) % leaders.length
        : prev === 0
        ? leaders.length - 1
        : prev - 1
    );
  };

  return (
    <div className="relative bg-white min-h-screen pt-4">
      <div className="max-w-7xl mx-auto">
        <TextPopUpOrDown variant="mainTitle" as="h1">
          Leadership
        </TextPopUpOrDown>

        <div className="mt-12 flex flex-row justify-between items-start">
          {/* Left content */}
          <div className="flex flex-col items-start gap-80 w-1/3">
            <span className="bg-white text-black px-5 py-3 rounded-full shadow-lg font-sans">
              {currentIndex + 1}/{leaders.length}
            </span>
            <div className="space-y-4">
              <Typography className="text-3xl font-medium text-black font-sans name">
                {leaders[currentIndex].name}
              </Typography>
              <Typography className="text-black font-sans break-normal border-t border-gray-300 py-4 max-w-md description">
                {leaders[currentIndex].description}
              </Typography>
            </div>
          </div>

          {/* Image Container */}
          <div
            ref={imagesRef}
            className="images relative w-2/3 h-[600px] flex justify-center state-1"
          >
            {leaders.map((leader) => (
              <Image
                key={leader.id}
                src={leader.image}
                alt={leader.name}
                width={200}
                height={400}
              />
            ))}
            <div className="flex justify-center gap-4 absolute bottom-2">
              <button
                onClick={() => handleChangeLeader("prev")}
                className="text-black text-3xl"
              >
                ←
              </button>
              <button
                onClick={() => handleChangeLeader("next")}
                className="text-black text-3xl"
              >
                →
              </button>
            </div>
          </div>

          {/* Right content */}
          <div className="max-w-md flex mt-40 gap-6 w-1/3">
            <div className="text-center">
              <TextPopUpOrDown className="text-gray-400 mb-2 font-sans text-lg font-light">
                Experience
              </TextPopUpOrDown>
              <Typography className="text-2xl font-medium font-sans text-black experience">
                {leaders[currentIndex].experience}
              </Typography>
            </div>
            <div className="text-center">
              <TextPopUpOrDown className="text-gray-400 mb-2 font-sans text-lg font-light">
                Area of Focus
              </TextPopUpOrDown>
              {leaders[currentIndex].areasOfFocus.map((area, index) => (
                <Typography
                  key={index}
                  className="text-black font-sans text-2xl area"
                >
                  {area}
                </Typography>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
