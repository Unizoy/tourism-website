"use client";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const ButtonVariants = cva("button", {
  variants: {
    variant: {
      heroSectionButton:
        "px-8 py-4 bg-white text-black hover:bg-gray-50 rounded-full text-lg",
      contactUsButton: "bg-black text-white px-8 py-3 rounded-full",
      commonButton:
        "bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 font-sans",
      tabButton:
        "text-black font-sans pb-4 transition-colors duration-300 ease-in-out border-b-2 border-transparent",
      filterButton:
        "flex items-center gap-2 px-4 py-2 text-lg font-sans text-black",
        locationButton:"flex items-center gap-2 px-5 py-3 text-lg font-sans text-white rounded-full",
        cardDetails:'border border-black px-5 py-5 text-black font-sans text-lg rounded-2xl'
    },
    active: {
      true: "border-black font-semibold",
      false: "border-transparent",
    },
  },
  defaultVariants: {
    variant: null,
    active: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  active,

  ...props
}) => (
  <button className={cn(ButtonVariants({ variant, active, className }))} {...props} />
);
export type ButtonVariants = VariantProps<
  typeof ButtonVariants
>["variant"];
