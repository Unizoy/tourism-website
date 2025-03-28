"use client";
import { useRef } from "react";
import { Button } from "@/components/custom-ui/Button";
import Typography from "@/components/typography/Typography";
import { IoIosArrowRoundDown } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import { properties } from "../../../data";
import PropertyCard from "@/components/home/featured-projects/PropertyCard";
import { ButtonAnimation } from "@/components/text-animation/button-animation";
import CountUp from "react-countup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextReveal from "@/components/text-animation/text-reveal";

const FeaturedProjects = () => {
  const subButtonRef = useRef(null);

  useGSAP(() => {
    gsap.from(".sub-button", {
      opacity: 0,
      y: 20,
      duration: 2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: subButtonRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-white pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="space-y-2 text-center md:text-left">
            <Typography variant="bulletTitle" className="sub-button">
              &bull; Recent AI Driven Recommendations
            </Typography>
            <TextReveal
              as="h1"
              variant="featuredMainTitle"
              className="ml-1 py-2"
            >
              Featured Projects
            </TextReveal>
          </div>
          <div className="text-gray-600 mt-4 md:mt-0 text-center md:text-left">
            <Typography as="h1" variant="featuredMainTitle" className="ml-2">
              <CountUp end={456} />
              <sup className="ml-1 text-xs text-gray-500">Offers</sup>
            </Typography>
          </div>
        </div>

        {/* filter */}
        <div
          className="flex flex-col md:flex-row flex-wrap justify-between items-center mb-8 gap-4"
          ref={subButtonRef}
        >
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 w-full md:w-auto">
            <Button
              variant="filterButton"
              className="sub-button flex items-center gap-2 w-full sm:w-auto"
            >
              Filter <BsFilter />
            </Button>
            <Button
              variant="filterButton"
              className="sub-button flex items-center gap-2 w-full sm:w-auto"
            >
              Buy <IoIosArrowRoundDown />
            </Button>
            <Button
              variant="filterButton"
              className="sub-button flex items-center gap-2 w-full sm:w-auto"
            >
              Any Property <IoIosArrowRoundDown />
            </Button>
            <Button
              variant="filterButton"
              className="sub-button flex items-center gap-2 w-full sm:w-auto"
            >
              All Areas <IoIosArrowRoundDown />
            </Button>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <ButtonAnimation
              variant="commonButton"
              className="w-full sm:w-auto"
            >
              View All
            </ButtonAnimation>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {properties.map((property) => (
            <PropertyCard property={property} key={property.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
