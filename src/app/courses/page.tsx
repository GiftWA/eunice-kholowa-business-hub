import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Courses | Eunice Kholowa Business Hub",
  description:
    "Online and recorded courses from Eunice Kholowa Business Hub — coming soon.",
};

export default function CoursesPage() {
  return (
    <>
      <ComingSoon
        title="Courses"
        subtitle="Learn at your own pace with recorded and online courses."
        breadcrumb="What We Offer"
        description="We are currently preparing a range of online courses that you can take from the comfort of your home, at your own pace. Check back soon or send us a WhatsApp message to be notified when they launch."
      />
      <CTASection />
    </>
  );
}
