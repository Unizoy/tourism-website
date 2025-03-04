import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PropertyModal from "./PropertyModal";
import LayoutCard from "./LayoutCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {modalData} from '../../../../data'
import { IoCloseCircleSharp } from "react-icons/io5";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type Props = {
  isShowing: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ isShowing, onClose }) => {
  const tl = useRef(gsap.timeline({ paused: true }));
  const modalVeil = useRef(null);
  const modalWrapper = useRef(null);
  const modalContent = useRef(null);
  const [activeTab, setActiveTab] = useState<"property" | "layout">("property");

  useEffect(() => {
    gsap.set(modalContent.current, { yPercent: -80, xPercent: -50 });
    tl.current
      .to(modalVeil.current, 0.1, { autoAlpha: 0.85 })
      .to(modalWrapper.current, 0.05, { autoAlpha: 1 }, 0)
      .to(
        modalContent.current,
        0.25,
        {
          yPercent: -50,
          autoAlpha: 1,
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


  return (
    <div
      className="fixed inset-0 w-full h-screen opacity-0 invisible z-50"
      ref={modalWrapper}
    >
      <div
        className="absolute mx-auto items-center top-1/2 left-1/2 w-full  rounded-3xl opacity-0 invisible z-10"
        ref={modalContent}
      >
        {/* Content Area */}
        <div className="relative">
          <Carousel responsive={responsive}>
            <PropertyModal details={modalData[0]} />
            <PropertyModal details={modalData[1]} />
            <LayoutCard />
          </Carousel>
        </div>
      </div>
      <button
        className="absolute top-4 right-4 text-black rounded-full  z-20"
        onClick={onClose}
      >
       <IoCloseCircleSharp className="text-3xl" />
      </button>

      <div
        className="absolute inset-0 w-full h-full bg-gray-400 opacity-0 invisible z-0"
        ref={modalVeil}
        onClick={onClose}
      />
    </div>
  );
};

export default Modal;
