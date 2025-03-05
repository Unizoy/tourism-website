import {
  InsightCard,
  PropertyCard,
  ClientData,
  Leader,
} from "@/types/home/types";

export const categories = [
  { id: "retail" as const, label: "Retail", count: "08" },
  { id: "commercial" as const, label: "Commercial", count: "06" },
  { id: "interior" as const, label: "Interior Design", count: "04" },
  { id: "residential" as const, label: "Residential", count: "06" },
];

export const insights: InsightCard[] = [
  {
    id: 1,
    category: "retail",
    date: "29 Jan 2025",
    title: "Modern Studio",
    location: "Blue Water Way",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  },
  {
    id: 2,
    category: "commercial",
    date: "29 Jan 2025",
    title: "Modern Studio",
    location: "Blue Water Way",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    id: 3,
    category: "commercial",
    date: "29 Jan 2025",
    title: "Modern Studio",
    location: "Blue Water Way",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    id: 4,
    category: "interior",
    date: "29 Jan 2025",
    title: "Modern Studio",
    location: "Blue Water Way",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    id: 5,
    category: "interior",
    date: "29 Jan 2025",
    title: "Modern Studio",
    location: "Blue Water Way",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    id: 6,
    category: "residential",
    date: "29 Jan 2025",
    title: "Modern Studio",
    location: "Blue Water Way",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
  },
  {
    id: 7,
    category: "residential",
    date: "29 Jan 2025",
    title: "Modern Studio",
    location: "Blue Water Way",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
  },
  {
    id: 8,
    category: "retail",
    date: "29 Jan 2025",
    title: "Modern Studio",
    location: "Blue Water Way",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  },
];

export const properties: PropertyCard[] = [
  {
    id: "01",
    title: "Modern Studio",
    location: "In Blue Water Way",
    image: "/card1.png",
  },
  {
    id: "02",
    title: "Modern Studio",
    location: "In Blue Water Way",
    image: "/card2.png",
  },
  {
    id: "03",
    title: "Modern Studio",
    location: "In Blue Water Way",
    image: "/card2.png",
  },
  {
    id: "04",
    title: "Modern Studio",
    location: "In Blue Water Way",
    image: "/card1.png",
  },
];

export const leaders: Leader[] = [
  {
    id: 1,
    name: "Joe Adam",
    image: "/leaders/2.png",
    description:
      "Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
    experience: "5 Years",
    areasOfFocus: ["Dubai Marina", "Bluewater Island"],
  },
  {
    id: 2,
    name: "Rina Mexus",
    image: "/leaders/3.png",
    description:
      "Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
    experience: "8 Years",
    areasOfFocus: ["Palm Jumeirah", "Downtown Dubai"],
  },
  {
    id: 3,
    name: "Mexicus Arem",
    image: "/leaders/1.png",
    description:
      "Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
    experience: "12 Years",
    areasOfFocus: ["Dubai Hills", "Business Bay"],
  },
];

export const clientData: ClientData[] = [
  {
    id: 1,
    description:
      " Working with this team was an absolute pleasure.They helped me find the perfect property that matched all my needs and preferences. Their expertise and attention to detail made the entire process smooth and stress-free. I couldn't be happier with my new home! ",
    image: "/client-section/client-1.png",
  },
  {
    id: 2,
    description:
      "Working with this team was an absolute pleasure.They helped me find the perfect property that matched all my needs and preferences. Their expertise and attention to detail made the entire process smooth and stress-free. I couldn't be happier with my new home! ",
    image: "/client-section/client-2.png",
  },
  {
    id: 3,
    description:
      "Working with this team was an absolute pleasure.They helped me find the perfect property that matched all my needs and preferences. Their expertise and attention to detail made the entire process smooth and stress-free. I couldn't be happier with my new home! ",
    image: "/client-section/client-2.png",
  },
  {
    id: 4,
    description:
      "Working with this team was an absolute pleasure.They helped me find the perfect property that matched all my needs and preferences. Their expertise and attention to detail made the entire process smooth and stress-free. I couldn't be happier with my new home! ",
    image: "/client-section/client-1.png",
  },
];

export const modalData = [
  {
    id: "03",
    location: "Location Name",
    type: "Villa",
    developer: "LuxeLine Properties",
    title:
      "8-Bedroom Waterfront Villa With Luxurious Design And Stunning Sea Views",
    details: [
      { label: "Square", value: "3070m²" },
      { label: "Number Of Room", value: "8" },
      { label: "Number Of Room", value: "50%" },
      { label: "Number Of Room", value: "8" },
    ],
    price: "98,0000 AED",
    image: "/card1.png",
  },
  {
    id: "02",
    location: "Location Name",
    type: "Villa",
    developer: "LuxeLine Properties",
    title:
      "8-Bedroom Waterfront Villa With Luxurious Design And Stunning Sea Views",
    details: [
      { label: "Square", value: "3070m²" },
      { label: "Number Of Room", value: "8" },
      { label: "Number Of Room", value: "50%" },
      { label: "Number Of Room", value: "8" },
    ],
    price: "98,0000 AED",
    image: "/card2.png",
  },
];

export const modalTabs = [
  { id: 1, name: "General info" },
  { id: 2, name: "About" },
  { id: 3, name: "Layout" },
];
