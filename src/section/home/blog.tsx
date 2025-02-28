"use client";
import BlogCard from "@/components/home/BlogCards";
import Typography from "@/components/typography/Typography";
import { Category } from "@/types/home/types";
import { useRef, useState, useEffect } from "react";
import { categories, insights } from "../../../data";
import { motion } from "framer-motion";
import { ButtonAnimation } from "@/components/text-animation/button-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/text-animation/text-reveal";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const [activeTab, setActiveTab] = useState<Category>("retail");
  const activeInsights = insights.filter(
    (insight) => insight.category === activeTab
  );

  const tabButtonRef = useRef<HTMLDivElement | null>(null);
  const blogCardsRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      // Animate Sub-Buttons
      gsap.from(".tab-button", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: tabButtonRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate Blog Cards
      gsap.from(".blog-card", {
        opacity: 0,
        x: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: blogCardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="bg-white px-4 md:px-8" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <Typography as="p" variant="bulletTitle">
            &bull; Blog
          </Typography>
        </div>
        <div className="flex justify-between items-center mb-8">
          <TextReveal as="h1" variant="heading1">
            Latest Insights
          </TextReveal>
          <ButtonAnimation variant="commonButton">View All</ButtonAnimation>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-around w-full mb-10" ref={tabButtonRef}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className="relative bg-transparent tab-button"
            style={{ WebkitTapHighlightColor: "transparent" }}
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

      {/* Blog Cards */}
      <div className="px-8" ref={blogCardsRef}>
        <div className="mt-8 grid md:grid-cols-2 gap-10">
          {activeInsights.map((insight) => (
            <div key={insight.id} className="blog-card">
              <BlogCard insight={insight} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
