import heroImg from "@/assets/WA.png";
import s1 from "@/assets/s1.png";
import s2 from "@/assets/s2.png";
import s3 from "@/assets/s3.png";
import s4 from "@/assets/s4.png";
import s5 from "@/assets/s5.png";
import s6 from "@/assets/s6.png";

export const heroImage = heroImg;

export type BrandColor = {
  name: string;
  hex: string;
  role: string;
  usage: string[];
};

export const brandColors: BrandColor[] = [
  {
    name: "Deep Espresso",
    hex: "#241B17",
    role: "Primary dark",
    usage: ["Primary text", "Dark backgrounds", "Signage"],
  },
  {
    name: "Warm Ivory",
    hex: "#F4EFE7",
    role: "Primary background",
    usage: ["Menus", "Packaging", "Light backgrounds"],
  },
  {
    name: "Champagne Beige",
    hex: "#CDBBA3",
    role: "Secondary neutral",
    usage: ["Secondary surfaces", "Paper stock", "Textiles"],
  },
  {
    name: "Muted Gold",
    hex: "#B18A58",
    role: "Premium accent",
    usage: ["Logo accents", "Signage detail", "Foil print"],
  },
  {
    name: "Stone Taupe",
    hex: "#8C7D70",
    role: "Supporting neutral",
    usage: ["Supporting text", "Dividers", "Interior finishes"],
  },
  {
    name: "Muted Olive",
    hex: "#626653",
    role: "Optional accent",
    usage: ["Seasonal campaigns", "Menu highlights", "Uniforms"],
  },
];

export type LogoAsset = {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  versionTag?: string;
};

export const logoAssets: LogoAsset[] = [
  {
    id: "01",
    index: "01",
    title: "Logo Application 01",
    description: "Logo variation and application showcase 01.",
    image: s5,
    versionTag: "version 01",
  },
  {
    id: "02",
    index: "02",
    title: "Logo Application 02",
    description: "Logo variation and application showcase 02.",
    image: s5,
    versionTag: "version 02",
  },
  {
    id: "03",
    index: "03",
    title: "Logo Application 03",
    description: "Logo variation and application showcase 03.",
    image: s5,
    versionTag: "version 03",
  },
  {
    id: "04",
    index: "04",
    title: "Logo Application 04",
    description: "Logo variation and application showcase 04.",
    image: s3,
    versionTag: "version 04",
  },
  {
    id: "05",
    index: "05",
    title: "Logo Application 05",
    description: "Logo variation and application showcase 05.",
    image: s4,
    versionTag: "version 05",
  },
  {
    id: "06",
    index: "06",
    title: "Logo Application 06",
    description: "Logo variation and application showcase 06.",
    image: s6,
    versionTag: "version 06",
  },
  {
    id: "07",
    index: "07",
    title: "Logo Application 07",
    description: "Logo variation and application showcase 07.",
    image: s1,
    versionTag: "version 07",
  },
  {
    id: "08",
    index: "08",
    title: "Logo Application 08",
    description: "Logo variation and application showcase 08.",
    image: s2,
    versionTag: "version 08",
  },
];

export const typographyDirections = [
  {
    number: "01",
    fontClass: "font-rounded",
    primary: "Gotham Rounded",
    secondary: "SF Pro",
    explanation: "A cleaner, more contemporary direction with a friendly hospitality character.",
    feels: "Contemporary · approachable · social · modern hospitality",
    value: "gotham",
    label: "Gotham Rounded + SF Pro",
  },
  {
    number: "02",
    fontClass: "font-editorial",
    primary: "DM Serif Display",
    secondary: "Inter",
    explanation: "A more editorial direction with a refined and premium restaurant character.",
    feels: "Editorial · refined · sophisticated · premium hospitality",
    value: "dm-serif",
    label: "DM Serif Display + Inter",
  },
] as const;
