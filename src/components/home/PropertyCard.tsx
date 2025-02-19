"use client";
import { PropertCard } from "@/types/home/types";
import { Button } from "../custom-ui/Button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typography from "../typography/Typography";
import { IoLocationOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";

interface Props {
  property: PropertCard;
}

const PropertyCard = ({ property }: Props) => {
  const imageRef = useRef(null);
  const handleMouseEnter = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        // y: 220,
        height: "60%",
        duration: 0.6,
        ease: "bounce.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        height: "100%",
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      className="relative rounded-3xl w-full h-[650px] group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute rounded-3xl h-full w-full border bottom-0 overflow-hidden"
        ref={imageRef}
      >
        <Image
          src={property.image}
          alt={property.title}
          width={300}
          height={200}
          className="w-full h-[650px] object-cover rounded-3xl bottom-0 absolute"
        />
      </div>
      <div className="absolute top-10 left-10 right-10 flex items-center justify-between">
        <Button
          variant="locationButton"
          className="border-2 border-white group-hover:border-black group-hover:text-black transition-all duration-300"
        >
          <IoLocationOutline size={25} />
          Location Name
        </Button>
        <button className="p-3 bg-transparent/10 rounded-full border-2 border-white">
          <GoArrowUpRight className="w-8 h-8 text-white" />
        </button>
      </div>
      <div className="absolute top-[16%] left-0 right-0 z-0 hidden group-hover:block transition-all duration-300">
        <div className="border-t border-[#9DD1FE] left-10 right-10 flex items-center justify-between mt-2">
          <Typography variant="HoverTitle" className="px-10 py-5">
            8-Bedroom
            <br />
            Waterfront Villa
          </Typography>
          <Button className="border border-black px-5 py-5 text-black font-sans text-lg rounded-2xl">
            View Details
          </Button>
        </div>
      </div>
      <div>
        <div className="absolute bottom-0 left-0 right-0  p-10">
          <div className="">
            <div className="text-white space-y-2">
              <Typography variant="cardTitle">{property.id}</Typography>
              <Typography variant="cardTitle">{property.title}</Typography>
              <Typography variant="cardTitle">{property.location}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
