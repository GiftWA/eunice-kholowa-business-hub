import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";
import { benefits } from "@/data/about";

export default function AboutMe() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* ── Column 1 — Portrait Photo ─────────────────── */}
          <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden
            shadow-lg border-4 border-brand-lavender-dark bg-gray-50">
            <Image
              src="/images/eunice-about.jpg"
              alt="Eunice Kholowa — Business Coach and Trainer"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* ── Column 2 — Bio Content ────────────────────── */}
          <div className="flex flex-col justify-start pt-2">
            <div className="mb-5">
              <h2 className="text-2xl font-extrabold text-brand-purple uppercase tracking-wide">
                ABOUT ME
              </h2>
              <div className="mt-2 h-1 w-16 bg-brand-gold rounded-full" />
            </div>

            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              I am Eunice Kholowa, a business coach, trainer and entrepreneur
              passionate about helping people with practical skills and
              profitable business ideas.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Through{" "}
              <strong className="text-brand-purple font-semibold">
                Eunice Kholowa Business Hub
              </strong>
              , I provide simple, practical and proven training to help
              people start, grow and scale a sustainable business.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-brand-purple text-white
                font-bold px-6 py-3 rounded-full hover:bg-brand-purple-dark
                transition-colors duration-200 text-sm w-fit
                focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
            >
              <User className="w-4 h-4" />
              LEARN MORE ABOUT ME
            </Link>
          </div>

          {/* ── Column 3 — Benefits Card ──────────────────── */}
          <div className="bg-brand-lavender rounded-2xl p-6 shadow-sm
            border border-brand-lavender-dark">
            <div className="space-y-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-purple/10
                      flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-purple text-sm mb-0.5">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}