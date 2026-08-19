import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import MyTrainings from "@/components/sections/MyTrainings";
import TrainingBenefits from "@/components/sections/TrainingBenefits";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <MyTrainings />
      <TrainingBenefits />
      <CTASection />
    </>
  );
}