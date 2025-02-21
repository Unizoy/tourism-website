"use client";
import Typography from "@/components/typography/Typography";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { clientData } from "../../../data";
import Image from "next/image";

const OurClient = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto">
        <Typography variant="clientTitle">What Our Client Say</Typography>
        <div className="grid grid-cols-2 py-10">
          <div className="flex">
            <FiArrowRight className="text-black size-7 mr-8" />
            {reorderedData.map((data) => (
              <div key={data.id}>
                <Image
                  src={data.image}
                  alt={data.id.toString()}
                  width={35}
                  height={10}
                />
              </div>
            ))}
            <Typography variant="heading1">125+ Reviews</Typography>
          </div>
          <div className="flex gap-4">
            <div>
              <Image
                src="/client-section/comment.png"
                alt="comment"
                width={200}
                height={10}
              />
            </div>
            <div>
              <Typography variant="heading2" className="border-b pb-8">
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
