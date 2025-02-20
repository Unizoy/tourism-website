import Blog from "@/section/home/blog";
import ContactUs from "@/section/home/contact-us";
import FeaturedProjects from "@/section/home/featured-projects";
import HeroSection from "@/section/home/hero-section";
import OurClient from "@/section/home/our-client";
import OurPartners from "@/section/home/our-partners";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedProjects />
      <OurPartners />
      <Blog />
      <OurClient/>
      <ContactUs />
    </div>
  );
}
