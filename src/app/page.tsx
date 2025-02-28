import Blog from "@/section/home/blog";
import ContactUs from "@/section/home/contact-us";
import FeaturedProjects from "@/section/home/featured-projects";
import HeroSection from "@/section/home/hero-section";
import OurClient from "@/section/home/our-client";
import OurPartners from "@/section/home/our-partners";
import OurTeam from "@/section/home/our-team";
import WhoWeAre from "@/section/home/who-we-are";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <WhoWeAre/>
      <FeaturedProjects />
      <OurTeam />
      <OurPartners />
      <Blog />
      <OurClient/>
      <ContactUs />
    </div>
  );
}
