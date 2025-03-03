"use client";
import { ButtonAnimation } from "@/components/text-animation/button-animation";
import TextReveal from "@/components/text-animation/text-reveal";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardImage = [
  { id: 1, src: "/who-we-are/img1.png" },
  { id: 2, src: "/who-we-are/img2.png" },
  { id: 3, src: "/who-we-are/img3.png" },
  { id: 4, src: "/who-we-are/img4.png" },
];

const WhoWeAre = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ".odd",
      { y: "-150%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play none none reset",
        },
        onComplete() {
          gsap.to(".odd", {
            y: "150%",
            opacity: 0,
            duration: 1,
            delay: 2,
            ease: "power2.inOut",
          });
        },
      }
    );

    gsap.fromTo(
      ".even",
      { y: "150%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play none none reset",
        },
        onComplete() {
          gsap.to(".even", {
            y: "-150%",
            opacity: 0,
            duration: 1,
            delay: 2,
            ease: "power2.inOut",
          });
        },
      }
    );
  }, []);

  return (
    <div className="bg-white min-h-screen py-6 md:pt-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center relative z-0">
          <p className="text-base uppercase  text-red-500 mb-4 font-sans">
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
          className="absolute inset-0 flex flex-wrap justify-center items-center z-10 gap-20 mb-40"
          ref={containerRef}
        >
          {cardImage.map((image) => (
            <Image
              src={image.src}
              key={image.id}
              alt="who-we-are"
              width={180}
              height={200}
              className={image.id % 2 === 0 ? "even" : "odd"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
