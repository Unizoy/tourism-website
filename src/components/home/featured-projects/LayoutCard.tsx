import { Button } from "@/components/custom-ui/Button";
import Typography from "@/components/typography/Typography";
import React from "react";
import Image from "next/image";

const LayoutCard = () => {
  return (
    <div className="inset-0 flex items-center justify-center bg-opacity-50 z-50 px-4">
      <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden flex flex-col relative p-2 sm:p-4">
        {/* Header */}
        <div className="flex flex-row justify-between items-center w-full mb-2 sm:mb-3 lg:mb-10 space-y-1 sm:space-y-0">
          <Typography variant="mainTitle" className="text-base sm:text-2xl">
            Building Layout
          </Typography>
          <div className="flex space-x-2">
            <Button variant="cardDetails" className="py-2 md:py-4">
              Ground Floor
            </Button>
            <Button variant="cardDetails" className="bg-gray-200 px-4 py-1 sm:py-2 md:py-4">
              First Floor
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between space-y-2 lg:space-y-0 lg:space-x-6">
          {/* Left side - Area info */}
          <div className="w-full lg:w-1/4 space-y-4 lg:space-y-24 text-center lg:text-left">
            <div className="mb-2 lg:mb-8">
              <Typography
                variant="heading1"
                className="text-gray-500 mb-1 text-sm md:text-base lg:text-xl"
              >
                Area
              </Typography>
              <Typography variant="heading1" className="text-sm md:text-base lg:text-xl">
                3037m²
              </Typography>
            </div>

            <div>
              <Typography
                variant="heading1"
                className="mb-2 border-b text-sm md:text-base lg:text-xl"
              >
                Ground Floor
              </Typography>
              <Typography
                variant="heading1"
                className="text-gray-600 text-xs sm:text-base lg:text-xl my-1 text-justify"
              >
                Is Simply Dummy Text Of The Printing And Typesetting Industry.
                Lorem Ipsum Has Been The Industry&lsquo;s Standard Dummy Text
                Ever Since The 1500s
              </Typography>
            </div>
          </div>

          {/* Middle - Floor plan image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:mr-14">
            <Image
              src="/image-49.png"
              width={400}
              height={400}
              alt="Floor Plan"
              className="w-full h-[180px] md:h-[160px] lg:h-[350px] object-cover rounded-3xl"
            />
          </div>

          {/* Right side - Floor tabs and info boxes */}
          <div className="w-full lg:w-1/4 flex flex-col">
            {/* Info Boxes */}
            <div className="hidden lg:grid grid-cols-2 gap-4 my-2 lg:my-16">
              {[1, 2].map((item) => (
                <div key={item} className="text-center lg:text-left">
                  <Typography className="text-gray-500 text-sm">
                    Text Here
                  </Typography>
                  <Typography className="text-black text-base sm:text-2xl font-medium">
                    3
                  </Typography>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col space-y-2 md:space-y-1 mt-2 sm:mt-10 md:mt-0 lg:mt-16">
              <Button
                className="bg-black text-white px-6 py-1 rounded-full"
                variant="cardDetails"
              >
                Call Back
              </Button>
              <Button
                className="bg-white text-black px-6 py-1 rounded-full border border-black"
                variant="cardDetails"
              >
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutCard;
