"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { useForm, SubmitHandler } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { ContactFormValues } from "@/types/home/types";
import Typography from "@/components/typography/Typography";
import { ButtonAnimation } from "@/components/text-animation/button-animation";
import TextReveal from "@/components/text-animation/text-reveal";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const formRef = useRef<HTMLFormElement | null>(null);
  const contactImageRef = useRef(null);

  useGSAP(() => {
    if (formRef.current) {
      const elements = formRef.current.querySelectorAll(".form-item");

      gsap.from(elements, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
    if (contactImageRef.current) {
      gsap.fromTo(
        contactImageRef.current,
        { scale: 1.5 },
        {
          scale: 1.0,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  });

  return (
    <div className="bg-white py-8 md:py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-10 font-sans">
          <Typography as="h1" variant="bulletTitle">
            &bull; Contact Us
          </Typography>
          <div>
            <TextReveal className="text-4xl font-normal text-gray-900 mb-4">
              Complete This Form
            </TextReveal>
            <TextReveal className="text-4xl font-normal text-gray-900">
              To Connect Our Team
            </TextReveal>
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
          <div className="overflow-hidden">
            <Image
              src="/contactus-image.png"
              alt="contact-us"
              width={450}
              height={100}
              ref={contactImageRef}
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="space-y-8 font-sans text-black"
          ref={formRef}
        >
          <div className="grid md:grid-cols-2 gap-6 form-item">
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
            className="w-full px-4 py-3 rounded-lg bg-gray-100 form-item"
          />
          <select
            className="w-full px-4 py-3 rounded-lg bg-gray-100 form-item"
            {...register("location")}
          >
            <option value="">Location</option>
            <option value="surat">Surat</option>
          </select>
          <TextareaAutosize
            {...register("message", { required: true })}
            className="w-full px-4 py-6 rounded-lg bg-gray-100 form-item"
            placeholder="Message..."
            minRows={10}
          />
          <div className="flex justify-start w-full h-full">
            <ButtonAnimation variant="contactUsButton" type="submit">
              Submit
            </ButtonAnimation>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
