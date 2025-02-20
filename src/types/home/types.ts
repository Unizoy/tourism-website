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
