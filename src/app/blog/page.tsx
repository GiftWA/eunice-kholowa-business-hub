import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Blog | Eunice Kholowa Business Hub",
  description:
    "Business tips, entrepreneurship insights and success stories from Eunice Kholowa.",
};

export default function BlogPage() {
  return (
    <>
      <ComingSoon
        title="Blog"
        subtitle="Business tips, entrepreneurship insights and success stories."
        breadcrumb="Latest From Us"
        description="The Eunice Kholowa Business Hub blog is on its way. We will be sharing practical business tips, entrepreneurship advice, success stories from our community, and much more. Check back soon or follow us on social media to stay updated."
      />
      <CTASection />
    </>
  );
}
