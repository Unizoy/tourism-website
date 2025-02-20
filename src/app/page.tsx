import Blog from "@/section/home/blog";
import ContactUs from "@/section/home/contact-us";
import FeaturedProjects from "@/section/home/featured-projects";
import HeroSection from "@/section/home/hero-section";
import OurPartners from "@/section/home/our-partners";
import OurTeam from "@/section/home/our-team";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedProjects />
      <OurTeam />
      <OurPartners />
      <Blog />
      <ContactUs />
    </div>
  );
}
