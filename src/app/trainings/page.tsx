import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import TrainingsGrid from "@/components/sections/TrainingsGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Trainings | Eunice Kholowa Business Hub",
  description: "Explore practical, hands-on training programs in soap making, food processing, personal care and more.",
};

export default function TrainingsPage() {
  return (
    <>
      <PageHero
        title="My Trainings"
        subtitle="Hands-on, practical training programs that give you real skills you can use right away — no experience needed."
        breadcrumb="What We Offer"
      />
      <TrainingsGrid />
      <CTASection />
    </>
  );
}
