"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PropertyModal from "./PropertyModal";
import LayoutCard from "./LayoutCard";
import { modalData, modalTabs } from "../../../../data";
import { IoCloseCircleSharp } from "react-icons/io5";
import Typography from "@/components/typography/Typography";
import { useGSAP } from "@gsap/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  isShowing: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ isShowing, onClose }) => {
  const tl = useRef(gsap.timeline({ paused: true }));
  const modalVeil = useRef(null);
  const modalWrapper = useRef(null);
  const modalContent = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 4000 }),
  ]);

  useGSAP(() => {
    gsap.set(modalContent.current, { autoAlpha: 0, y: -20 });
    tl.current
      .to(modalVeil.current, 0.1, { autoAlpha: 0.85 })
      .to(modalWrapper.current, 0.05, { autoAlpha: 1 }, 0)
      .to(
        modalContent.current,
        0.25,
        {
          y: 0,
          autoAlpha: 1,
          ease: "power2.out",
        },
        0
      )
      .reverse();
  }, []);

  useEffect(() => {
    tl.current.reversed(!isShowing);
    if (isShowing) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isShowing]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div
      className="fixed inset-0 w-full h-screen invisible z-50 overflow-y-auto"
      ref={modalWrapper}
    >
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 w-full h-full bg-black/50 opacity-0 invisible backdrop-blur-sm"
        ref={modalVeil}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="w-full flex items-center justify-center py-8 relative">
        <div className="w-full opacity-0" ref={modalContent}>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <PropertyModal details={modalData[0]} />
              </div>
              <div className="embla__slide">
                <PropertyModal details={modalData[1]} />
              </div>
              <div className="embla__slide">
                <LayoutCard />
              </div>
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-black rounded-full z-60"
          onClick={onClose}
        >
          <IoCloseCircleSharp className="text-3xl" />
        </button>

        {/* Bottom tabs */}
      </div>
        <div className="absolute bottom-10 z-20 w-full hidden md:flex flex-row gap-2 px-4 md:px-48">
          {modalTabs.map((tab, index) => (
            <div
              key={index}
              className="flex flex-row items-center relative py-2 pr-20"
            >
              <Typography
                variant="bulletTitle"
                className={
                  activeIndex === index ? "text-white" : "text-gray-400"
                }
              >
                {`${tab.id.toString().padStart(2, "0")}.`}
              </Typography>
              <Typography
                variant="bulletTitle"
                className={
                  activeIndex === index ? "text-white" : "text-gray-400"
                }
              >
                {tab.name}
              </Typography>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-400 rounded-full">
                {activeIndex === index && isShowing && (
                  <div
                    className="absolute bottom-0 left-0 h-1 w-full bg-white rounded-full animate-progress"
                    // style={{
                    //   width: "100%",
                    //   animation: "progress 4s linear forwards",
                    // }}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Modal;
