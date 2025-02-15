import Blog from "@/section/home/blog";
import ContactUs from "@/section/home/contact-us";
import HeroSection from "@/section/home/hero-section";
import OurPartners from "@/section/home/our-partners";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <OurPartners />
      <Blog />
      <ContactUs />
    </div>
  );
}
