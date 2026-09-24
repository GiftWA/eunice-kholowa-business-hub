import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Target, Heart, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/sections/CTASection";
import { benefits } from "@/data/about";

export const metadata: Metadata = {
  title: "About Me | Eunice Kholowa Business Hub",
  description:
    "Learn about Eunice Kholowa — business coach, trainer and entrepreneur helping people build successful businesses in Malawi.",
};

const achievements = [
  {
    icon: Users,
    number: "1,000+",
    label: "Entrepreneurs Trained",
  },
  {
    icon: GraduationCap,
    number: "15+",
    label: "Training Programs",
  },
  {
    icon: Target,
    number: "6+",
    label: "Business Categories",
  },
  {
    icon: Heart,
    number: "100%",
    label: "Passion & Dedication",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="About Me"
        subtitle="Get to know the person behind Eunice Kholowa Business Hub"
        breadcrumb="Our Story"
      />

      {/* ── Bio Section ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Photo */}
            <div className="relative w-full aspect-3/4 max-w-md mx-auto
              rounded-2xl overflow-hidden shadow-xl border-4 border-brand-lavender-dark bg-gray-50">
              <Image
                src="/images/eunice-about.jpg"
                alt="Eunice Kholowa — Business Coach and Trainer"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Bio Content */}
            <div>
              <p className="font-script text-3xl text-brand-purple mb-2">
                Hello, I am
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-purple
                uppercase mb-2">
                Eunice Kholowa
              </h2>
              <div className="h-1 w-16 bg-brand-gold rounded-full mb-6" />

              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  I am a business coach, trainer and entrepreneur passionate about
                  empowering people with practical skills and profitable business ideas.
                  My journey began with a simple belief — that anyone can build a
                  successful business, regardless of their background or starting capital.
                </p>
                <p>
                  Through <strong className="text-brand-purple">Eunice Kholowa Business Hub</strong>,
                  I provide practical training to help people start and grow sustainable businesses.
                  My trainings are easy to understand and designed to be applied immediately — no complicated theories, 
                  just skills you can actually use.
                </p>
                <p>
                  I specialize in teaching people how to produce quality products such
                  as soaps, detergents, personal care products, food products and much
                  more — turning everyday ingredients into profitable business opportunities.
                </p>
                <p>
                  My mission is simple: to help as many people as possible gain the knowledge and confidence 
                  they need to build businesses that improve their lives and their families' lives.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/trainings"
                  className="inline-flex items-center gap-2 bg-brand-purple
                    text-white font-bold px-7 py-3.5 rounded-full
                    hover:bg-brand-purple-dark transition-colors duration-200 text-sm"
                >
                  <GraduationCap className="w-5 h-5" />
                  EXPLORE TRAININGS
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-brand-purple
                    text-brand-purple font-bold px-7 py-3.5 rounded-full
                    hover:bg-brand-purple hover:text-white
                    transition-colors duration-200 text-sm"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-gold/20
                    border-2 border-brand-gold flex items-center justify-center
                    mx-auto mb-3">
                    <Icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <p className="text-3xl font-extrabold text-white mb-1">
                    {item.number}
                  </p>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What I Offer ─────────────────────────────────────────── */}
      <section className="py-16 bg-brand-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-brand-purple uppercase tracking-wide">
              What I Offer
            </h2>
            <div className="mt-2 h-1 w-16 bg-brand-gold rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-2xl p-6 shadow-sm
                    border border-brand-lavender-dark text-center
                    hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-purple/10
                    flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-purple" />
                  </div>
                  <h3 className="font-bold text-brand-purple text-sm mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mission Section ──────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-brand-purple uppercase
            tracking-wide mb-4">
            My Mission
          </h2>
          <div className="h-1 w-16 bg-brand-gold rounded-full mx-auto mb-8" />
          <blockquote className="text-xl sm:text-2xl font-semibold text-gray-700
            leading-relaxed italic">
            "To empower people with practical skills, profitable business ideas
            and the support they need to build successful, sustainable businesses- starting from wherever they are."
          </blockquote>
          <p className="mt-6 text-brand-purple font-bold">— Eunice Kholowa</p>
        </div>
      </section>

  
      <CTASection />
    </>
  );
}