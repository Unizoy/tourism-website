"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { ButtonAnimationProps } from "@/types/home/types";
import { Button } from "../custom-ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function ButtonAnimation({
  children,
  stagger = 0.015,
  variant = null,
  delay = 0.0,
  duration = 1,
  start = "top 85%",
  end = "top 65%",
  playOnLoad = false,
  ...rest
}: ButtonAnimationProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef(null)
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (containerRef.current) {
      tl.current = gsap.timeline({
        delay,
        ...(playOnLoad
          ? {}
          : {
              scrollTrigger: {
                trigger: containerRef.current,
                start,
                end,
                toggleActions: "play none none reverse",
              },
            }),
      });

      tl.current.from(containerRef.current, {
        opacity: 0,
        scaleX: 0,
        duration,
        delay,
        ease: "power3.out",
      });

      tl.current.from(lineRef.current,{
        opacity:0
      })
    }
  }, [[containerRef.current]]);

  return (
    <div ref={containerRef}>
      <Button variant={variant} {...rest}>
        <span ref={lineRef}>{children}</span>
      </Button>
    </div>
  );
}
