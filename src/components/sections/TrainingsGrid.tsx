"use client";

import { useState } from "react";
import TrainingCard from "@/components/ui/TrainingCard";
import { trainings, type TrainingCategory } from "@/data/trainings";

const categories: ("All" | TrainingCategory)[] = [
  "All",
  "Soaps & Oils",
  "Snacks & Food",
  "Personal Care",
  "Cleaning Products",
  "Business",
  "Waste to Wealth",
];

export default function TrainingsGrid() {
  const [active, setActive] = useState<"All" | TrainingCategory>("All");

  const filtered =
    active === "All"
      ? trainings
      : trainings.filter((t) => t.category === active);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold
                transition-colors duration-200 focus:outline-none
                focus:ring-2 focus:ring-brand-purple focus:ring-offset-2
                ${
                  active === cat
                    ? "bg-brand-purple text-white"
                    : "bg-brand-lavender text-brand-purple hover:bg-brand-purple hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Training cards grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((training) => (
              <TrainingCard
                key={training.id}
                training={training}
                showCategory
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-base">
              No trainings in this category yet. Check back soon!
            </p>
          </div>
        )}

      </div>
    </section>
  );
}