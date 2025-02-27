import { TypographyVariants } from "@/components/typography/Typography";
import { ButtonVariants } from "@/components/custom-ui/Button";

export type Category = "retail" | "commercial" | "interior" | "residential";

export interface ContactFormValues {
  firstName: string;
  lastName?: string;
  email: string;
  location?: string;
  message: string;
}

export interface InsightCard {
  id: number;
  category: Category;
  date: string;
  title: string;
  location: string;
  image: string;
}

export interface PropertyCard {
  id: string;
  title: string;
  location: string;
  image: string;
}
export interface Leader {
  id: number;
  name: string;
  image: string;
  description: string;
  experience: string;
  areasOfFocus: string[];
}

export interface ClientData {
  id: number;
  description: string;
  image: string;
}

export interface TextPopUpOrDownProps {
  children?: string | React.ReactNode;
  stagger?: number;
  className?: string;
  variant?: TypographyVariants;
  delay?: number;
  start?: string;
  end?: string;
  translateX?: number;
  popFrom?: "up" | "down";
  translateDuration?: number;
  duration?: number;
  as?: CustomTypes.HtmlTag;
  playOnLoad?: boolean;
}

export interface ButtonAnimationProps {
  children?: string | React.ReactNode;
  stagger?: number;
  className?: string;
  variant?: ButtonVariants;
  delay?: number;
  start?: string;
  end?: string;
  duration?: number;
  playOnLoad?: boolean;
}
