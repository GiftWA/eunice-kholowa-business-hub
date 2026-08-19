export type TrainingCategory =
  | "Soaps & Oils"
  | "Snacks & Food"
  | "Personal Care"
  | "Cleaning Products"
  | "Business"
  | "Waste to Wealth";

export interface Training {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  category: TrainingCategory;
  image: string | null; // null = show placeholder gradient
}

export const trainings: Training[] = [
  // ── Soaps & Oils ─────────────────────────────────────
  {
    id: "1",
    slug: "bar-soap-making",
    title: "Bar Soap Making",
    description: "Learn how to make high quality bar soaps for profit.",
    price: 15000,
    category: "Soaps & Oils",
    image: "/images/trainings/bar-soap.jpg",
  },
  {
    id: "2",
    slug: "surf-powdered-soap",
    title: "Surf (Powdered Soap)",
    description: "Make high quality powdered detergent (Surf).",
    price: 15000,
    category: "Soaps & Oils",
    image: "/images/trainings/surf-soap.jpg",
  },
  {
    id: "3",
    slug: "glycerine-production",
    title: "Glycerine Production",
    description: "Produce pure glycerine for multiple uses.",
    price: 15000,
    category: "Soaps & Oils",
    image: "/images/trainings/glycerine.jpg",
  },
  {
    id: "4",
    slug: "pine-gel",
    title: "Pine Gel",
    description: "Make powerful pine gel for cleaning.",
    price: 15000,
    category: "Soaps & Oils",
    image: "/images/trainings/pine-gel.jpg",
  },
  {
    id: "5",
    slug: "hair-shampoo",
    title: "Hair Shampoo",
    description: "Formulate your own quality shampoo.",
    price: 15000,
    category: "Soaps & Oils",
    image: "/images/trainings/shampoo.jpg",
  },
  {
    id: "6",
    slug: "dish-wash",
    title: "Dish Wash",
    description: "Make effective dish washing liquid.",
    price: 15000,
    category: "Soaps & Oils",
    image: "/images/trainings/dish-wash.jpg",
  },
  {
    id: "7",
    slug: "castor-oil",
    title: "Castor Oil",
    description: "Produce pure castor oil for beauty and health.",
    price: 15000,
    category: "Soaps & Oils",
    image: "/images/trainings/castor-oil.jpg",
  },
  {
    id: "8",
    slug: "castor-soap",
    title: "Castor Soap",
    description: "Make premium castor soap for skin care.",
    price: 15000,
    category: "Soaps & Oils",
    image: "/images/trainings/castor-soap.jpg",
  },

  // ── Snacks & Food ─────────────────────────────────────
  {
    id: "9",
    slug: "sweet-malambe",
    title: "Sweet Malambe",
    description: "Make delicious sweet malambe snacks for sale.",
    price: 15000,
    category: "Snacks & Food",
    image: "/images/trainings/sweet-malambe.jpg",
  },
  {
    id: "10",
    slug: "samosa",
    title: "Samosa",
    description: "Learn to make crispy samosas for profit.",
    price: 15000,
    category: "Snacks & Food",
    image: "/images/trainings/samosa.jpg",
  },
  {
    id: "11",
    slug: "doughnut",
    title: "Doughnut",
    description: "Produce soft, tasty doughnuts to sell.",
    price: 15000,
    category: "Snacks & Food",
    image: "/images/trainings/doughnut.jpg",
  },
  {
    id: "12",
    slug: "cassava-twists",
    title: "Cassava Twists",
    description: "Make crunchy cassava twists snacks.",
    price: 15000,
    category: "Snacks & Food",
    image: "/images/trainings/cassava-twists.jpg",
  },
  {
    id: "13",
    slug: "cassava-cherry-cherry",
    title: "Cassava Cherry Cherry",
    description: "Make popular cassava cherry cherry snacks.",
    price: 15000,
    category: "Snacks & Food",
    image: "/images/trainings/cassava-cherry.jpg",
  },
  {
    id: "14",
    slug: "freezes",
    title: "Freezes",
    description: "Produce refreshing freezes for sale.",
    price: 15000,
    category: "Snacks & Food",
    image: "/images/trainings/freezes.jpg",
  },
  {
    id: "15",
    slug: "mandasi",
    title: "Mandasi",
    description: "Make soft and tasty mandasi to sell.",
    price: 15000,
    category: "Snacks & Food",
    image: "/images/trainings/mandasi.jpg",
  },
];

/** Returns only the first N trainings for homepage preview */
export function getFeaturedTrainings(count = 6): Training[] {
  return trainings.slice(0, count);
}

/** Returns trainings filtered by category */
export function getTrainingsByCategory(category: TrainingCategory): Training[] {
  return trainings.filter((t) => t.category === category);
}

/** Format price as Malawian Kwacha */
export function formatPrice(price: number): string {
  return `K${price.toLocaleString()}`;
}