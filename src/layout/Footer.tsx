import { ButtonAnimation } from "@/components/text-animation/button-animation";
import { TextPopUpOrDown } from "@/components/text-animation/text-popup-or-popdown";
import Image from "next/image";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2]  py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* logo */}

        <div className="space-y-8 font-sans">
          <div className="flex items-center space-x-2">
            <TextPopUpOrDown
              as="h2"
              className="text-2xl text-black font-medium"
            >
              Logo
            </TextPopUpOrDown>
          </div>
          <TextPopUpOrDown as="p" className="text-gray-600">
            Building Your Dreams
            <br />
            In Real Estate.
          </TextPopUpOrDown>

          <div className="space-y-8">
            <TextPopUpOrDown
              as="h3"
              className="text-lg font-semibold text-black"
            >
              Subscribe To Our News
            </TextPopUpOrDown>
            <TextPopUpOrDown as="p" className="text-gray-500">
              Lorem Ipsum Has Been The Industry's Standard Dummy Text
            </TextPopUpOrDown>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 p-2 border-b border-gray-300 focus:outline-none focus:border-black text-black"
              />
            </div>
            <div className="flex justify-start">
              <ButtonAnimation variant="commonButton">
                Subscribe
              </ButtonAnimation>
            </div>
          </div>
        </div>
        {/* navigation */}

        <div className="font-sans">
          <TextPopUpOrDown
            as="h2"
            className="text-2xl text-black font-medium mb-8"
          >
            Quick Navigation
          </TextPopUpOrDown>
          <ul className="space-y-6">
            {[
              "Home",
              "Our Properties",
              "Our Advantages",
              "Our Team",
              "Careers",
              "Mission And Values",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <TextPopUpOrDown>{item}</TextPopUpOrDown>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Properties */}
        <div className="font-sans">
          <TextPopUpOrDown
            as="h2"
            className="text-2xl text-black font-medium mb-8"
          >
            Properties
          </TextPopUpOrDown>
          <ul className="space-y-6">
            {[
              "Apartments For Sale",
              "Value For Sale",
              "Townhomes For Sale",
              "New Developments",
              "Luxury Properties",
              "Seaview Properties",
              "Downtown Properties",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <TextPopUpOrDown>{item}</TextPopUpOrDown>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* resources */}
        <div className="space-y-8">
          <div className="font-sans">
            <TextPopUpOrDown
              as="h2"
              className="text-2xl text-black font-medium mb-8"
            >
              Resources
            </TextPopUpOrDown>
            <ul className="space-y-4">
              {["Blog", "FAQs", "Buying Guide", "Selling Guide"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-black transition-colors"
                  >
                    <TextPopUpOrDown>{item}</TextPopUpOrDown>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* location */}
        <div className="space-y-4 font-sans">
          <TextPopUpOrDown as="h2" className="text-xl font-bold text-black">
            We Are Here To
            <br />
            Change Your Future.
          </TextPopUpOrDown>
          <div className="flex space-x-4 items-center">
            <ButtonAnimation variant="commonButton">Subscribe</ButtonAnimation>
            <MdMail className="text-black w-8 h-8" />
            <RiSendPlaneFill className="text-black w-8 h-7" />
          </div>
          <Image
            src="/footer-image.png"
            alt="footer"
            width={200}
            height={100}
          />
          <div className="p-4">
            <TextPopUpOrDown as="p" className="font-medium text-black">
              05, Jumeirah Street,
              <br />
              Al Barsha
              <br />
              Dubai, United Arab Emirates
            </TextPopUpOrDown>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500">Copyright 2025 © Dubai Realty</p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-black transition-colors"
            >
              Terms Of Services
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
