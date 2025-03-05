"use client";
import { ButtonAnimation } from "@/components/text-animation/button-animation";
import TextReveal from "@/components/text-animation/text-reveal";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const cardImage = [
  { id: 1, src: "/who-we-are/img1.png" },
  { id: 2, src: "/who-we-are/img2.png" },
  { id: 3, src: "/who-we-are/img3.png" },
  { id: 4, src: "/who-we-are/img4.png" },
];

const WhoWeAre = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !cardContainerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
      });

      tl.fromTo(
        ".odd",
        { y: "150%", opacity: 0 }, 
        { y: "0%", opacity: 1, duration: 3, ease: "power2.out" }
      ).fromTo(
        ".even",
        { y: "-150%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 3, ease: "power2.out" },
        "<"
      );

      tl.to(".odd", {
        y: "-150%",
        opacity: 0,
        duration: 3,
        ease: "power2.in",
      }).to(
        ".even",
        { y: "150%", opacity: 0, duration: 3, ease: "power2.in" },
        "<" 
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      className="bg-white relative py-20 min-h-screen overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center relative z-10">
          <p className="text-base uppercase text-red-500 mb-10 font-sans">
            Who We Are
          </p>
          <TextReveal
            as="h2"
            variant="featuredMainTitle"
            stagger={0.1}
            duration={0.6}
          >
            We are a next-generation platform combining AI-driven property
            analytics and blockchain-secured transactions to revolutionize the
            real estate investment process.
          </TextReveal>

          <div className="mt-16">
            <ButtonAnimation className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              About Us
            </ButtonAnimation>
          </div>
        </div>

        <div
          className="absolute inset-0 flex flex-wrap justify-center items-center z-10 gap-20 mb-20"
          ref={cardContainerRef}
        >
          {cardImage.map((image) => (
            <Image
              src={image.src}
              key={image.id}
              alt={`who-we-are-${image.id}`}
              width={180}
              height={200}
              className={`${image.id % 2 === 0 ? "even" : "odd"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
