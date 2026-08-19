import { Settings, Lightbulb, TrendingUp, Coins } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: Settings,
    title: "Practical & Easy to Apply",
    description: "Step by step training you can apply immediately.",
  },
  {
    icon: Lightbulb,
    title: "Profitable Business Ideas",
    description: "Low to no capital ideas that really work.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Learn how to grow, market and scale your business.",
  },
  {
    icon: Coins,
    title: "Financial Empowerment",
    description: "Build income, independence and a better future.",
  },
];