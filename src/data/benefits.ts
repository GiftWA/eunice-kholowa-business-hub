import { type LucideIcon, GraduationCap, Smile, Users, Clock, Infinity } from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const trainingBenefits: Benefit[] = [
  {
    icon: GraduationCap,
    title: "Practical Training",
    description: "Easy step by step training you can apply immediately.",
  },
  {
    icon: Smile,
    title: "No Previous Experience",
    description: "Beginner friendly training for everyone.",
  },
  {
    icon: Users,
    title: "Support & Guidance",
    description: "Get support and guidance at every step.",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Join live or recorded trainings at your convenience.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    description: "Access training materials anytime you need them.",
  },
];