import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Books & Guides | Eunice Kholowa Business Hub",
  description:
    "Business books, guides and downloadable resources from Eunice Kholowa — coming soon.",
};

export default function BooksGuidesPage() {
  return (
    <>
      <ComingSoon
        title="Books & Guides"
        subtitle="Practical business books and downloadable guides to help you grow."
        breadcrumb="Resources"
        description="Eunice is working on a collection of practical business books, step-by-step guides and downloadable resources designed to help you start and grow your business. Check back soon or contact us to find out more."
      />
      <CTASection />
    </>
  );
}
