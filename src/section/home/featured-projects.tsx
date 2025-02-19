import { Button } from "@/components/custom-ui/Button";
import Typography from "@/components/typography/Typography";
import { IoIosArrowRoundDown } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import { properties } from "../../../data";
import PropertyCard from "@/components/home/PropertyCard";

const FeaturedProjects = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="space-y-2">
            <Typography variant="bulletTitle">
              {" "}
              &bull; Recent AI Driven Recommendations
            </Typography>
            <Typography as="h1" variant="mainTitle" className="ml-2">
              Featured Projects
            </Typography>
          </div>
          <div className="text-gray-600">
            <Typography as="h1" variant="mainTitle" className="ml-2">
              456
              <sup className="ml-1 text-xs text-gray-500">Offerrs</sup>
            </Typography>
          </div>
        </div>
        {/* filter */}
        <div className="flex justify-between mb-8">
          <div className="flex  md:gap-36">
            <Button variant="filterButton">
              Filter
              <BsFilter />
            </Button>
            <Button variant="filterButton">
              Buy
              <IoIosArrowRoundDown />
            </Button>
            <Button variant="filterButton">
              Any Property <IoIosArrowRoundDown />
            </Button>
            <Button variant="filterButton">
              All Areas <IoIosArrowRoundDown />
            </Button>
          </div>
          <div>
            <Button variant="commonButton">View All</Button>
          </div>
        </div>
        {/* cards */}
        <div className="grid grid-cols-2 gap-10">
            {properties.map(property=>(
                <PropertyCard property={property} key={property.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
