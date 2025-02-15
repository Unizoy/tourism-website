import { Button } from "@/components/custom-ui/Button";
import Typography from "@/components/typography/Typography";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen hero-bg bg-no-repeat bg-cover bg-center md:bg-fixed">
      <div className="relative flex flex-col justify-center items-center h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="text-center space-y-20 font-sans">
            <Typography as="h1" variant="heroTitle">
              AI Driven Real Estate Investments Opportunities
            </Typography>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Button variant="heroSectionButton">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
