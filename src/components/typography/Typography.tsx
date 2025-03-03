import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, {
  ElementType,
  forwardRef,
  HTMLAttributeAnchorTarget,
  ReactNode,
} from "react";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      heroTitle:
        "text-white font-extralight text-3xl sm:text-5xl md:text-7xl lg:text-8xl",
      bulletTitle: "text-black font-normal text-lg font-sans",
      mainTitle:"text-black font-light text-4xl font-sans",
      featuredMainTitle:"text-black text-6xl font-sans font-light",
      heading1: "text-black font-noraml text-2xl font-sans",
      heading2:'text-black font-normal text-base md:text-xl font-sans',
      cardTitle:'text-white font-sans text-lg font-normal',
      hoverTitle:"text-black font-light text-3xl font-sans",
      clientTitle:"text-black font-noraml text-4xl font-sans"
    },
  },
  defaultVariants: {
    variant: null,
  },
});

interface BaseTypographyProps extends VariantProps<typeof typographyVariants> {
  children: ReactNode;
  className?: string;
}

interface AnchorTypographyProps extends BaseTypographyProps {
  as: "a";
  href: string;
  ref?: React.Ref<HTMLAnchorElement>;
  rel?: string;
  target?: HTMLAttributeAnchorTarget;
}

interface GenericTypographyProps<T extends keyof CustomTypes.ElementMap = "p">
  extends BaseTypographyProps {
  as?: CustomTypes.HtmlTag;
  href?: never;
  ref?: React.Ref<CustomTypes.ElementMap[T]>;
}

type TypographyProps<T extends keyof CustomTypes.ElementMap = "p"> =
  | AnchorTypographyProps
  | GenericTypographyProps<T>;

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant, className, children, as = "p", href, ...props }, ref) => {
    const Tag = as as ElementType;
    return (
      <Tag
        ref={ref}
        className={cn(typographyVariants({ variant, className }))}
        {...(href ? { href } : {})}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

export default Typography;
export type TypographyVariants = VariantProps<
	typeof typographyVariants
>["variant"];
