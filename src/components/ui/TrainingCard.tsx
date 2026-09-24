"use client";

import Image from "next/image";
import Link from "next/link";
import { type Training, formatPrice } from "@/data/trainings";
import {
  Droplets,
  UtensilsCrossed,
  Heart,
  Sparkles,
  Briefcase,
  Recycle,
} from "lucide-react";

interface TrainingCardProps {
  training: Training;
  showCategory?: boolean;
}

function CategoryPlaceholder({ category }: { category: string }) {
  const config: Record<
    string,
    {
      bg: string;
      color: string;
      Icon: React.ComponentType<{ style?: React.CSSProperties }>;
    }
  > = {
    "Soaps & Oils": { bg: "#EDE6FA", color: "#3B1F7A", Icon: Droplets },
    "Snacks & Food": { bg: "#FEF3C7", color: "#92400E", Icon: UtensilsCrossed },
    "Personal Care": { bg: "#FCE7F3", color: "#9D174D", Icon: Heart },
    "Cleaning Products": { bg: "#DBEAFE", color: "#1E40AF", Icon: Sparkles },
    Business: { bg: "#F3F0FF", color: "#3B1F7A", Icon: Briefcase },
    "Waste to Wealth": { bg: "#D1FAE5", color: "#065F46", Icon: Recycle },
  };

  const { bg, color, Icon } = config[category] ?? config["Business"];

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3"
      style={{ backgroundColor: bg }}>
      <Icon style={{ color, width: 44, height: 44, opacity: 0.55 }} />
      <span
        className="text-[10px] font-bold uppercase tracking-widest"
        style={{ color, opacity: 0.5 }}>
        {category}
      </span>
    </div>
  );
}

export default function TrainingCard({
  training,
  showCategory = false,
}: TrainingCardProps) {
  return (
    <Link
      href={`/trainings/${training.slug}`}
      className="group flex flex-col bg-white rounded-2xl shadow-sm
        border border-gray-100 overflow-hidden hover:shadow-md
        transition-shadow duration-200 focus:outline-none
        focus:ring-2 focus:ring-brand-purple focus:ring-offset-2">
      {/* Image or styled placeholder */}
      <div className="relative h-44 w-full overflow-hidden">
        {training.image ? (
          <Image
            src={training.image}
            alt={training.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <CategoryPlaceholder category={training.category} />
        )}

        {/* Category badge */}
        {showCategory && (
          <span
            className="absolute top-2 left-2 bg-brand-purple/90 text-white
            text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
            {training.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3
          className="font-bold text-gray-800 text-sm mb-1
          group-hover:text-brand-purple transition-colors duration-200 leading-snug">
          {training.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">
          {training.description}
        </p>
        <div className="mt-auto">
          <span
            className="inline-block bg-brand-purple text-white
            text-xs font-bold px-4 py-1.5 rounded-full">
            {formatPrice(training.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
