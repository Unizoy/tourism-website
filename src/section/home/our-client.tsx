"use client";
import Typography from "@/components/typography/Typography";
import { useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { clientData } from "../../../data";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextReveal from "@/components/text-animation/text-reveal";

gsap.registerPlugin(ScrollTrigger);

const OurClient = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const clientRef = useRef(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const imagesRef = useRef(null);
  const spanRef = useRef(null);
  const detailRef = useRef(null);
  const textRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clientData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clientData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const reorderedData = [
    clientData[currentIndex],
    ...clientData.slice(0, currentIndex),
    ...clientData.slice(currentIndex + 1),
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: clientRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      if (headingRef.current) {
        const heading = headingRef.current;
        const words = (heading.textContent || "")
          .split(" ")
          .map((word) => `<span class="word inline-block">${word}</span>`)
          .join(" ");
        heading.innerHTML = words;

        tl.from(".word", {
          yPercent: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out",
        });
      }

      if (spanRef.current) {
        tl.from(
          spanRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "<"
        );
      }

      if (imagesRef.current) {
        tl.from(
          gsap.utils.toArray(".client-image"),
          {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          },
          "<"
        );
      }

      if (detailRef.current) {
        tl.from(
          detailRef.current,
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "<"
        );
      }
      if (textRef.current) {
        tl.from(
          textRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 3,
            ease: "power2.out",
          },
          "<"
        );
      }
    },
    { dependencies: [currentIndex], scope: clientRef }
  );

  return (
    <div className="bg-white py-16" ref={clientRef}>
      <div className="max-w-7xl mx-auto">
        <TextReveal variant="clientTitle">What Our Clients Say</TextReveal>
        <div className="grid grid-cols-2 py-10">
          <div className="flex" ref={imagesRef}>
            <FiArrowRight className="text-black size-7 mr-8" />
            {reorderedData.map((data) => (
              <div key={data.id} className="client-image">
                <Image
                  src={data.image}
                  alt={data.id.toString()}
                  width={35}
                  height={10}
                />
              </div>
            ))}
            <Typography variant="heading1">
              125+{" "}
              <span
                className="text-gray-400 text-lg inline-block"
                ref={spanRef}
              >
                Reviews
              </span>
            </Typography>
          </div>
          <div className="flex gap-4" ref={detailRef}>
            <div>
              <Image
                src="/client-section/comment.png"
                alt="comment"
                width={200}
                height={10}
              />
            </div>
            <div>
              <Typography
                variant="heading2"
                className="border-b pb-8"
                ref={textRef}
              >
                {clientData[currentIndex].description}
              </Typography>

              <div className="flex justify-between mt-5">
                <Image
                  src={clientData[currentIndex].image}
                  alt="avatar"
                  width={40}
                  height={10}
                />
                <div className="flex space-x-4">
                  {/* Left Button */}
                  <button
                    className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={handlePrev}
                  >
                    <FaArrowRightLong className="text-black w-4 h-4 rotate-180" />
                  </button>

                  {/* Right Button */}
                  <button
                    className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={handleNext}
                  >
                    <FaArrowRightLong className="text-black w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
