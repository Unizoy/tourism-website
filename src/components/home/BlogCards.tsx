import { InsightCard as InsightCardType } from "@/types/home/types";
import Image from "next/image";
import Typography from "../typography/Typography";
import { Button } from "../custom-ui/Button";
import { GoArrowUpRight } from "react-icons/go";
interface Props {
  insight: InsightCardType;
}

const BlogCard = ({ insight }: Props) => {
  return (
    <div className="relative group overflow-hidden rounded-3xl">
      <Image
        src={insight.image}
        alt={insight.title}
        width={700}
        height={500}
        className="w-full h-[450px] object-cover group-hover:scale-105 duration-300"
      />
      <div className="absolute bottom-0 left-0 p-6">
        <Typography variant="cardTitle" className="mb-2">
          {insight.date}
        </Typography>
        <Typography variant="cardTitle" as="h1">
          {insight.title}
        </Typography>
        <Typography variant="cardTitle" as="h2">
          {insight.location}
        </Typography>
      </div>
      <Button className="absolute top-4 right-4 p-2 bg-white rounded-full">
        <GoArrowUpRight className="w-5 h-5 text-black" />
      </Button>
    </div>
  );
};
export default BlogCard;
