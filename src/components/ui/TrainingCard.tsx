"use client";
import Image from "next/image";
import Link from "next/link";
import { type Training, formatPrice } from "@/data/trainings";

interface TrainingCardProps {
  training: Training;
}

/**
 * Reusable training card.
 * Shows image (or gradient placeholder), title, description, and price.
 * When real product images are available, save them to public/images/trainings/
 * using the filename in training.image — they will replace placeholders automatically.
 */
export default function TrainingCard({ training }: TrainingCardProps) {
  return (
    <Link
      href={`/trainings/${training.slug}`}
      className="group flex flex-col bg-white rounded-2xl shadow-sm
        border border-gray-100 overflow-hidden hover:shadow-md
        transition-shadow duration-200 focus:outline-none
        focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
    >
      {/* Image / Placeholder */}
      <div className="relative h-44 w-full overflow-hidden bg-brand-lavender">
        <Image
          src={training.image ?? "/images/trainings/placeholder.jpg"}
          alt={training.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
          onError={(e) => {
            // Hide broken image — gradient background shows instead
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Category badge */}
        <span className="absolute top-2 left-2 bg-brand-purple/90 text-white
          text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
          {training.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-brand-purple
          transition-colors duration-200 leading-snug">
          {training.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">
          {training.description}
        </p>

        {/* Price badge */}
        <div className="mt-auto">
          <span className="inline-block bg-brand-purple text-white
            text-xs font-bold px-4 py-1.5 rounded-full">
            {formatPrice(training.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}