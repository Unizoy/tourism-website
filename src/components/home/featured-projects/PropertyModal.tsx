import React from "react";
import Image from "next/image";
import Typography from "@/components/typography/Typography";
import { Button } from "@/components/custom-ui/Button";
import { ButtonAnimation } from "@/components/text-animation/button-animation";

const PropertyModal = ({ details }) => {
  return (
    <div className="inset-0 flex items-center justify-center bg-opacity-50 z-50">
       <div className="max-w-5xl w-full bg-white rounded-3xl p-3 overflow-hidden flex flex-row relative">
        {/* Property Image */}
        <div className="md:w-2/5">
          <Image
            src={details.image}
            alt={details.title}
            width={400}
            height={400}
            className="h-[550px] object-cover rounded-3xl"
          />
        </div>

        {/* Property Details */}
        <div className="md:w-3/5 p-6">
          <div className="flex items-center justify-between mb-4">
            <Typography variant="heading2">{details.id}</Typography>
            <div className="flex space-x-2">
              <div className="flex items-center px-3 py-1 border border-gray-300 rounded-full text-sm">
                <Button variant="locationButton" className="text-black">
                  {details.location}
                </Button>
              </div>
              <div className="flex items-center px-3 py-1 border border-gray-300 rounded-full text-sm">
                <Button variant="locationButton" className="text-black">
                  {details.type}
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4">
            <Typography variant='heading2' className="text-sm text-gray-500">
              Developer: {details.developer}
            </Typography>
            <Typography variant='mainTitle' className="mt-2 mb-6">
              {details.title}
            </Typography>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            {details.details.map((detail, index) => (
              <Button key={index} className="px-1 py-1 bg-gray-200" variant='cardDetails'>
                <span className="text-sm text-gray-500">{detail.label}</span>
                <p className="font-normal">{detail.value}</p>
              </Button>
            ))}
          </div>

          <div className="mb-6">
            <Typography variant='heading1' className="text-sm text-gray-500">Price</Typography>
            <Typography variant='heading1' className="text-2xl font-extralight">{details.price}</Typography>
          </div>

          <div className="flex space-x-3">
            <Button className="bg-black text-white px-6 py-2 rounded-full" variant='cardDetails'>
              Call Back
            </Button>
            <Button className="bg-white text-black px-6 py-2 rounded-full border border-black" variant='cardDetails'>
              Download Catalog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
