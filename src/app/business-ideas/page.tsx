import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Business Ideas | Eunice Kholowa Business Hub",
  description:
    "Profitable business ideas and opportunities from Eunice Kholowa Business Hub — coming soon.",
};

export default function BusinessIdeasPage() {
  return (
    <>
      <ComingSoon
        title="Business Ideas"
        subtitle="Discover profitable business ideas you can start with little or no capital."
        breadcrumb="Get Inspired"
        description="We are putting together a curated collection of profitable business ideas suited for the Malawian market — ideas you can start with little or no capital. This section will be available soon. In the meantime, explore our trainings or get in touch."
      />
      <CTASection />
    </>
  );
}
