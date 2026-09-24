import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GraduationCap, Clock, Tag, CheckCircle, MessageCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import TrainingCard from "@/components/ui/TrainingCard";
import CTASection from "@/components/sections/CTASection";
import {
  getTrainingBySlug,
  getRelatedTrainings,
  formatPrice,
  trainings,
} from "@/data/trainings";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return trainings.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const training = getTrainingBySlug(slug);
  if (!training) return {};
  return {
    title: `${training.title} | Eunice Kholowa Business Hub`,
    description: training.description,
  };
}

export default async function TrainingDetailPage({ params }: Props) {
  const { slug } = await params;
  const training = getTrainingBySlug(slug);

  if (!training) notFound();

  const related = getRelatedTrainings(training, 3);

  return (
    <>
      <PageHero
        title={training.title}
        subtitle={training.description}
        breadcrumb={training.category}
      />

      {/* ── Main Detail Section ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden
              bg-brand-lavender shadow-sm border border-brand-lavender-dark">
              {training.image ? (
                <Image
                  src={training.image}
                  alt={training.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-brand-purple/30" />
                </div>
              )}
            </div>

            {/* Training Info */}
            <div>
              <h2 className="text-2xl font-extrabold text-brand-purple mb-2">
                {training.title}
              </h2>
              <div className="h-1 w-16 bg-brand-gold rounded-full mb-6" />

              <p className="text-gray-600 leading-relaxed mb-6">
                {training.description}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Tag className="w-4 h-4 text-brand-purple" />
                  <span>{training.category}</span>
                </div>
                {training.duration && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-brand-purple" />
                    <span>{training.duration}</span>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="bg-brand-lavender rounded-2xl p-6 mb-6
                border border-brand-lavender-dark">
                <p className="text-sm text-gray-500 mb-1">Training Fee</p>
                <p className="text-4xl font-extrabold text-brand-purple">
                  {formatPrice(training.price)}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Per participant — inclusive of all materials
                </p>
              </div>

              {/* Register via WhatsApp */}
              <div className="space-y-3">
                <Link
                  href={`https://wa.me/265881581036?text=Hi%20Eunice%2C%20I%20would%20like%20to%20register%20for%20the%20${encodeURIComponent(training.title)}%20training.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full
                    bg-brand-purple text-white font-bold py-4 rounded-full
                    hover:bg-brand-purple-dark transition-colors duration-200 text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Register via WhatsApp
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full
                    border-2 border-brand-purple text-brand-purple font-bold
                    py-4 rounded-full hover:bg-brand-purple hover:text-white
                    transition-colors duration-200 text-sm"
                >
                  Ask a Question
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── What You Will Learn ──────────────────────────────── */}
      {training.whatYouLearn && training.whatYouLearn.length > 0 && (
        <section className="py-16 bg-brand-lavender">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-extrabold text-brand-purple uppercase
                tracking-wide mb-2">
                What You Will Learn
              </h2>
              <div className="h-1 w-16 bg-brand-gold rounded-full mb-8" />

              <div className="grid sm:grid-cols-2 gap-4">
                {training.whatYouLearn.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white rounded-xl
                      p-4 border border-brand-lavender-dark shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── What Is Included ─────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-brand-purple uppercase
              tracking-wide mb-2">
              What Is Included
            </h2>
            <div className="h-1 w-16 bg-brand-gold rounded-full mb-8" />

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Hands-on practical training session",
                "All training materials and ingredients",
                "Step-by-step training guide",
                "Ongoing support after training",
                "Certificate of participation",
                "Access to the Eunice Kholowa Business Hub community",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 py-3 border-b
                    border-gray-100 last:border-0"
                >
                  <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Trainings ─────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-brand-purple uppercase
                tracking-wide">
                You Might Also Like
              </h2>
              <div className="mt-2 h-1 w-16 bg-brand-gold rounded-full" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {related.map((t) => (
                <TrainingCard key={t.id} training={t} showCategory />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/trainings"
                className="inline-flex items-center gap-2 border-2 border-brand-purple
                  text-brand-purple font-bold px-7 py-3 rounded-full
                  hover:bg-brand-purple hover:text-white
                  transition-colors duration-200 text-sm"
              >
                View All Trainings
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}