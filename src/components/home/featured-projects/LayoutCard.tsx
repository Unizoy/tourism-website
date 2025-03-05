import { Button } from "@/components/custom-ui/Button";
import Typography from "@/components/typography/Typography";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonAnimation } from "@/components/text-animation/button-animation";
type Props = {
  isShowing: boolean;
  onClose: () => void;
};
const LayoutCard = () => {
  return (
    <div className="inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden flex  flex-col relative px-6 py-8">
        <div className="flex justify-between items-center w-full mb-10">
          <Typography variant="mainTitle">Building Layout</Typography>
          <div className="flex space-x-2">
            <Button variant="cardDetails">Ground Floor</Button>
            <Button variant="cardDetails" className="bg-gray-200 px-4">
              First Floor
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          {/* Left side - Area info */}
          <div className="mb-6 space-y-36">
            <div className="mb-8">
              <Typography variant='heading1' className="text-gray-500 mb-1">Area</Typography>
              <Typography variant='heading1'>3037m²</Typography>
            </div>

            <div>
              <Typography variant='heading1' className="mb-4  border-b">Ground Floor</Typography>
              <Typography variant='heading1' className="text-gray-600 max-w-md text-lg mt-1">
                Is Simply Dummy Text Of The Printing And Typesetting Industry.
                Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                Since The 1500s
              </Typography>
            </div>
          </div>

          {/* Middle - Floor plan image */}
          <div className="mb-6 flex-1 mr-14">
            <Image
              src="/image-49.png"
              width={500}
              height={500}
              alt="Floor Plan"
              className="w-full border border-gray-200"
            />
          </div>

          {/* Right side - Floor tabs and info boxes */}
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4 my-16">
              <div className=''>
                <Typography className="text-gray-500 text-sm">Text Here</Typography>
                <Typography className="text-black text-2xl font-medium">3</Typography>
              </div>
              <div className="">
                <Typography className="text-gray-500 text-sm">Text Here</Typography>
                <Typography className=" text-black text-2xl font-medium">3</Typography>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <Button className="bg-black text-white rounded-full px-5 py-3 flex items-center justify-center">
                Call Back
              </Button>
              <Button className="text-black border border-gray-300 rounded-full px-6 py-3 w-full flex items-center justify-center">
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
