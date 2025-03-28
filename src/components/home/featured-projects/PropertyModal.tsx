import React from "react";
import Image from "next/image";
import Typography from "@/components/typography/Typography";
import { Button } from "@/components/custom-ui/Button";
import { PropertyModalData } from "@/types/home/types";

const PropertyModal = ({ details }: { details: PropertyModalData }) => {
  return (
    <div className="flex items-center justify-center px-4 w-full">
      <div className="max-w-5xl w-full bg-white rounded-3xl p-2 sm:p-4 overflow-hidden flex flex-col md:flex-row relative">
        {/* Property Image */}
        <div className="md:w-2/5 h-full">
          <Image
            src={details.image}
            alt={details.title}
            width={400}
            height={400}
            className="w-full h-[160px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Property Details */}
        <div className="md:w-3/5 p-2 md:p-6 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <Typography variant="heading2">{details.id}</Typography>
            <div className="flex space-x-2">
              <div className="flex items-center px-2 sm:px-3 py-1 border border-gray-300 rounded-full text-xs sm:text-sm md:text-base w-full max-w-xs sm:max-w-sm md:max-w-md">
                <Button
                  variant="locationButton"
                  className="text-black truncate"
                >
                  {details.location}
                </Button>
              </div>
              <div className="">
                <Button variant="locationButton" className="text-black">
                  {details.type}
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-2 sm:my-4">
            <Typography variant="heading2" className="text-sm text-gray-500">
              Developer: {details.developer}
            </Typography>
            <Typography variant="mainTitle" className="my-2 sm:my-4 text-sm sm:text-2xl">
              {details.title}
            </Typography>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
            {details.details.map((detail, index) => (
              <Button
                key={index}
                className="px-1 py-1 bg-gray-200"
                variant="cardDetails"
              >
                <span className="text-sm text-gray-500">{detail.label}</span>
                <p className="font-normal">{detail.value}</p>
              </Button>
            ))}
          </div>

          <div className="mb-4">
            <Typography variant="heading1" className="text-sm text-gray-500">
              Price
            </Typography>
            <Typography variant="heading1" className="text-base sm:text-xl font-extralight">
              {details.price}
            </Typography>
          </div>

          <div className="flex space-x-3">
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
  );
};

export default PropertyModal;
