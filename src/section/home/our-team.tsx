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
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesRef = useRef<HTMLDivElement | null>(null);
  const mobileImagesRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const areaRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!imagesRef.current) return;

    const allImages = [...imagesRef.current.children].filter(
      (child) => child instanceof HTMLImageElement
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
      },
    });
  }, [currentIndex]);

  // Text Animation Hook
  useGSAP(() => {
    const textElements = [
      nameRef.current,
      descriptionRef.current,
      experienceRef.current,
      areaRef.current,
    ];

    textElements.forEach((element) => {
      if (element) {
        gsap.fromTo(
          element,
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
              trigger: element,
              start: "top 80%", // Starts animation when element is 80% from the top of the viewport
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, [currentIndex]);

  useGSAP(() => {
    if (!mobileImagesRef.current) return;
  
    const mobileImages = [
      ...mobileImagesRef.current.children,
    ] as HTMLImageElement[];
  
    gsap.to(mobileImages, {
      scale: 0.7,
      opacity: 0.5,
      duration: 0.1,
      ease: "power1.inOut",
    });
  
    gsap.to(mobileImages[currentIndex], {
      scale: 1,
      opacity: 1,
      duration: 0.1,
      ease: "power1.inOut",
    });
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
    <div className="relative bg-white pt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <TextPopUpOrDown variant="mainTitle" as="h1" className="text-center">
          Leadership
        </TextPopUpOrDown>

        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 sm:gap-12">
          {/* Left content */}
          <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-12 lg:gap-80 w-full lg:w-1/3">
            <span className="bg-white text-black px-5 py-2 rounded-full shadow-lg font-sans">
              {currentIndex + 1}/{leaders.length}
            </span>
            <div className="space-y-2 text-center lg:text-left">
              <div ref={nameRef}>
                <Typography className="text-lg sm:text-3xl font-medium text-black font-sans name">
                  {leaders[currentIndex].name}
                </Typography>
              </div>
              <div ref={descriptionRef}>
                <Typography className="text-black font-sans break-normal border-t border-gray-300 py-2 max-w-md description">
                  {leaders[currentIndex].description}
                </Typography>
              </div>
            </div>
          </div>

          {/* Desktop Image Container */}
          <div
            ref={imagesRef}
            className="images relative w-full lg:w-2/3 h-[200px] lg:h-[600px] flex-row justify-center state-1 hidden lg:flex"
          >
            {leaders.map((leader) => (
              <Image
                key={leader.id}
                src={leader.image}
                alt={leader.name}
                width={200}
                height={400}
                className="absolute"
              />
            ))}

            {/* Navigation Buttons for desktop */}
            <div className="absolute bottom-0 left-0 right-0 hidden lg:flex justify-center gap-4">
              <button
                onClick={() => handleChangeLeader("prev")}
                className=" text-black text-2xl"
              >
                <FaLongArrowAltLeft />
              </button>
              <button
                onClick={() => handleChangeLeader("next")}
                className=" text-black text-2xl z-10"
              >
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>

          {/* Mobile Image Container */}
          <div
            ref={mobileImagesRef}
            className="w-full lg:hidden relative flex justify-center mobile-image overflow-hidden"
          >
            {leaders.map((leader) => (
              <Image
                key={leader.id}
                src={leader.image}
                alt={leader.name}
                width={200}
                height={200}
                className="absolute transition-all duration-300 h-[120px] sm:h-[200px] w-fit"
              />
            ))}
          </div>

          {/* Right content */}
          <div className="max-w-md flex flex-col lg:flex-row items-center lg:items-start mt-2 lg:mt-40 gap-2 w-full lg:w-1/3 text-center lg:text-left">
            <div className="flex justify-center gap-4 mt-4 lg:hidden">
              <button
                onClick={() => handleChangeLeader("prev")}
                className=" text-black text-3xl"
              >
                <FaLongArrowAltLeft />
              </button>
              <button
                onClick={() => handleChangeLeader("next")}
                className=" text-black text-3xl"
              >
                <FaLongArrowAltRight />
              </button>
            </div>

            <div ref={experienceRef}>
              <TextPopUpOrDown className="text-gray-400 font-sans text-lg font-light">
                Experience
              </TextPopUpOrDown>
              <Typography className="text-base sm:text-2xl font-medium font-sans text-black experience">
                {leaders[currentIndex].experience}
              </Typography>
            </div>
            <div ref={areaRef}>
              <TextPopUpOrDown className="text-gray-400 font-sans text-lg font-light">
                Area of Focus
              </TextPopUpOrDown>
              {leaders[currentIndex].areasOfFocus.map((area, index) => (
                <Typography
                  key={index}
                  className="text-black font-sans text-base sm:text-2xl area"
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
