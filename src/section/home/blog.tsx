"use client";
import { Button } from "@/components/custom-ui/Button";
import BlogCards from "@/components/home/BlogCards";
import Typography from "@/components/typography/Typography";
import { Category } from "@/types/home/types";
import { useState } from "react";
import { categories, insights } from "../../../data";
import { motion } from "framer-motion";

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
          <Button variant="commonButton">View All</Button>
        </div>
      </div>

      {/* tabs */}
      <div className="flex justify-around w-full mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`relative bg-transparent`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === category.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 pt-10 border-b-2 border-black"
                style={{ borderRadius: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Typography variant="heading2">
              {category.label}
              <sup className="ml-1 text-xs md:text-base text-gray-500">
                {category.count} Articles
              </sup>
            </Typography>
          </button>
        ))}
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
