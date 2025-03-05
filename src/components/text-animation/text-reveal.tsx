"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";
import Typography, { TypographyVariants } from "@/components/typography/Typography";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  stagger?: number;
  duration?: number;
  ease?: gsap.EaseString;
  triggerOnScroll?: boolean;
  variant?: TypographyVariants;
  as?: CustomTypes.HtmlTag;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = "",
  stagger = 0.2,
  duration = 0.8,
  ease = "back.out",
  triggerOnScroll = true,
  variant = null,
  as = "span",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current && lineRef.current) {
      const words = lineRef.current.querySelectorAll(".word");

      const tl = gsap.timeline({
        scrollTrigger: triggerOnScroll
          ? {
              trigger: containerRef.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reset",
            }
          : undefined,
      });

      tl.from(words, {
        yPercent: 100,
        opacity: 0,
        duration,
        stagger,
        ease,
      });

      return () => tl.kill();
    }
  }, [stagger, duration, ease, triggerOnScroll]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <Typography variant={variant} as={as} className="inline-block opacity-1" ref={lineRef}>
        {children.split(" ").map((word, index) => (
          <span key={index} className="word inline-block py-3">
            {word}&nbsp;
          </span>
        ))}
      </Typography>
    </div>
  );
};

export default TextReveal;
