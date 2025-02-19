"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { useForm, SubmitHandler } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { ContactFormValues } from "@/types/home/types";
import { Button } from "@/components/custom-ui/Button";
import Typography from "@/components/typography/Typography";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const onsubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-white py-8 md:py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-10 font-sans">
          <Typography as="h1" variant="bulletTitle">
            &bull; Contact Us
          </Typography>
          <div>
            <h1 className="text-4xl font-normal text-gray-900 mb-4">
              Complete This Form
            </h1>
            <h2 className="text-4xl font-normal text-gray-900">
              To Connect Our Team
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-lg font-normal text-black">Follow Us</p>
            <div className="flex space-x-4 text-black">
              <Link href="#">
                <FaInstagram className="w-8 h-8 hover:text-gray-700 cursor-pointer" />
              </Link>
              <Link href="#">
                <FiFacebook className="w-8 h-8 hover:text-gray-700 cursor-pointer" />
              </Link>{" "}
              <Link href="#">
                <LuTwitter className="w-8 h-8 hover:text-gray-700 cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="">
            <Image
              src="/contactus-image.png"
              alt="contact-us"
              width={450}
              height={100}
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="space-y-8 font-sans text-black"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              {...register("firstName", { required: true })}
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100"
            />
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100"
            />
          </div>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg bg-gray-100"
          />
          <select
            className="w-full px-4 py-3 rounded-lg bg-gray-100"
            {...register("location")}
          >
            <option value="">Location</option>
            <option value="surat">Surat</option>
          </select>
          <TextareaAutosize
            {...register("message", { required: true })}
            className="w-full px-4 py-6 rounded-lg bg-gray-100"
            placeholder="Message..."
            minRows={10}
          />
          <Button variant="contactUsButton" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
