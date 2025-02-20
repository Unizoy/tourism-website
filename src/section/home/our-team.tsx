"use client";

import { useState, useEffect, useRef } from "react";
import { leaders } from "../../../data";
import Typography from "@/components/typography/Typography";
import Image from "next/image";
import gsap from "gsap";

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesRef = useRef([]);

  useEffect(() => {
    imagesRef.current.forEach((img, index) => {
      if (img) {
        gsap.to(img, {
          scale: index === currentIndex ? 1.2 : 0.8,
          opacity: index === currentIndex ? 1 : 0.6,
          duration: 0.6,
          ease: "power2.out",
        });
      }
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
    <div className="relative bg-white min-h-screen pt-4">
      <div className="max-w-7xl mx-auto">
        <Typography variant="mainTitle">Leadership</Typography>

        <div className="mt-12 flex flex-row justify-between items-start">
          {/* Left content */}
          <div className="flex flex-col items-start gap-80">
            <span className="bg-white text-black px-5 py-3 rounded-full shadow-lg font-sans">
              {currentIndex + 1}/{leaders.length}
            </span>
            <div className="space-y-4">
              <Typography className="text-3xl font-medium text-black font-sans">
                {leaders[currentIndex].name}
              </Typography>
              <Typography className="text-black font-sans break-normal border-t border-gray-300 py-4 max-w-md">
                {leaders[currentIndex].description}
              </Typography>
            </div>
          </div>

          {/* Image Container */}
          <div className="px-8">
          {/* <div className="flex relative">
              <Image
                src={leaders[0].image}
                alt={leaders[currentIndex].name}
                width={300}
                height={500}
                className="relative top-0"
              />
              <Image
                src={leaders[1].image}
                alt={leaders[currentIndex].name}
                width={300}
                height={500}
                className="relative top-32"
              />
              <Image
                src={leaders[2].image}
                alt={leaders[currentIndex].name}
                width={300}
                height={400}
                className="relative top-60"
              />
            </div> */}
            <ul className="flex">
              {leaders.map((leader, index) => (
                <li
                  key={leader.id}
                  ref={(el) => (imagesRef.current[index] = el)}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={index === currentIndex ? 300 : 200}
                    height={index === currentIndex ? 600 : 400}
                    className="rounded-lg transition-all duration-500"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Right content */}
          <div className="max-w-md flex mt-40 gap-6">
            <div className="text-center">
              <Typography className="text-gray-400 mb-2 font-sans text-lg font-light">
                Experience
              </Typography>
              <Typography className="text-2xl font-medium font-sans text-black">
                {leaders[currentIndex].experience}
              </Typography>
            </div>
            <div className="text-center">
              <Typography className="text-gray-400 mb-2 font-sans text-lg font-light">
                Area of Focus
              </Typography>
              {leaders[currentIndex].areasOfFocus.map((area, index) => (
                <Typography
                  key={index}
                  className="text-black font-sans text-2xl"
                >
                  {area}
                </Typography>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 pb-8">
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
    </div>
  );
};

export default OurTeam;
