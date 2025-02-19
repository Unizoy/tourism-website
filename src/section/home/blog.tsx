"use client";
import { Button } from "@/components/custom-ui/Button";
import BlogCards from "@/components/home/BlogCards";
import Typography from "@/components/typography/Typography";
import { Category } from "@/types/home/types";
import { useState } from "react";
import { categories, insights } from "../../../data";

const Blog = () => {
  const [activeTab, setActiveTab] = useState<Category>("retail");
  const activeInsights = insights.filter(
    (insight) => insight.category === activeTab
  );
  return (
    <div className="bg-white px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <Typography as="p" variant="bulletTitle">
            &bull; Blog
          </Typography>
        </div>
        <div className="flex justify-between items-center mb-8">
          <Typography as="h1" variant="heading1">
            Latest Insights
          </Typography>
          <Button variant="commanButton">View All</Button>
        </div>

        {/* tabs */}
        <div className="border-b border-gray-200">
          <div className="flex justify-around w-full ">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="tabButton"
                active={activeTab === category.id}
                onClick={() => setActiveTab(category.id)}
              >
                <Typography variant="heading2">
                  {category.label}
                  <sup className="ml-1 text-xs md:text-base text-gray-500">
                    {category.count} Articles
                  </sup>
                </Typography>
              </Button>
            ))}
          </div>
        </div>
      </div>
      {/* card */}
      <div className="px-8">
        <div className="mt-8 grid md:grid-cols-2 gap-10">
          {activeInsights.map((insight) => (
            <BlogCards key={insight.id} insight={insight} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
