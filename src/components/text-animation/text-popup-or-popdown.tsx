"use client";
import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Typography, {
  TypographyVariants,
} from "@/components/typography/Typography";
import { TextPopUpOrDownProps } from "@/types/home/types";

gsap.registerPlugin(ScrollTrigger);

export function TextPopUpOrDown({
  children,
  stagger = 0.015,
  className,
  variant = null,
  delay = 0,
  translateX,
  popFrom = "down",
  translateDuration = 0.4,
  duration = 0.3,
  start = "top 80%",
  end = "top 65%",
  as = "span",
  playOnLoad = false,
}: TextPopUpOrDownProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (containerRef.current && lineRef.current) {
        const lineHeight = lineRef.current.offsetHeight || 0;
        const animationDistance = popFrom === "up" ? -lineHeight : lineHeight;

        tl.current = gsap.timeline({
          delay,
          ...(playOnLoad
            ? {}
            : {
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: start,
                  end: end,
                  toggleActions: "play none none reverse",
                },
              }),
        });

        tl.current.from(lineRef.current, {
          y: animationDistance,
          duration: duration,
          ease: "linear",
        });

        if (translateX) {
          tl.current.to(
            containerRef.current,
            {
              x: translateX.toString().concat("%"),
              duration: translateDuration,
              ease: "linear",
            },
            "+=0.1"
          );
        }
      }
      return () => {
        if (tl.current) {
          tl.current.kill();
        }
      };
    },
    {
      dependencies: [popFrom],
      revertOnUpdate: true,
      scope: containerRef,
    }
  );

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <Typography
        variant={variant}
        className="inline-block opacity-1"
        as={as}
        ref={lineRef}
      >
        {children}
      </Typography>
    </div>
  );
}
