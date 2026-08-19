import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TrainingCard from "@/components/ui/TrainingCard";
import { getFeaturedTrainings } from "@/data/trainings";

/**
 * My Trainings section — homepage preview of 6 featured trainings.
 * Full listing is on /trainings page (built in Milestone 11).
 */
export default function MyTrainings() {
  const featuredTrainings = getFeaturedTrainings(6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-brand-purple uppercase tracking-wide">
              MY TRAININGS
            </h2>
            <div className="mt-2 h-1 w-16 bg-brand-gold rounded-full" />
          </div>

          <Link
            href="/trainings"
            className="flex items-center gap-1.5 text-sm font-semibold
              text-brand-purple hover:text-brand-gold transition-colors duration-200"
          >
            View all trainings
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredTrainings.map((training) => (
            <TrainingCard key={training.id} training={training} />
          ))}
        </div>

      </div>
    </section>
  );
}