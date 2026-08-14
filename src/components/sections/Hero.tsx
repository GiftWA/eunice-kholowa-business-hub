import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Play } from "lucide-react";

/**
 * Homepage Hero Section
 * Two-column layout: content left, photo right.
 * Photo fills the full right column height.
 */
export default function Hero() {
  return (
    <section className="bg-brand-lavender overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-150 items-center gap-8">

          {/* ── Left — Content ─────────────────────────────────── */}
          <div className="py-16 lg:py-24">

            {/* Script heading */}
            <p className="font-script text-3xl sm:text-4xl text-brand-purple mb-1">
              Welcome to
            </p>

            {/* Main name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
              text-brand-purple leading-tight uppercase tracking-tight">
              EUNICE KHOLOWA
            </h1>

            {/* Gold subtitle */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
              text-brand-gold leading-tight uppercase tracking-tight mb-5">
              BUSINESS HUB
            </h2>

            {/* Tagline + gold underline */}
            <div className="mb-5">
              <p className="text-lg sm:text-xl font-bold text-gray-800">
                Learn. Create. Start. Grow.
              </p>
              <div className="mt-2 h-1 w-20 bg-brand-gold rounded-full" />
            </div>

            {/* Description */}
            <p className="text-gray-600 max-w-md mb-8 leading-relaxed text-base">
              I help you gain practical skills, discover profitable business
              ideas and build a successful business even if you are starting
              with little or no capital.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              {/* Primary — Explore Trainings */}
              <Link
                href="/trainings"
                className="inline-flex items-center gap-2 bg-brand-purple text-white
                  font-bold px-7 py-3.5 rounded-full hover:bg-brand-purple-dark
                  transition-colors duration-200 text-sm focus:outline-none
                  focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
              >
                <GraduationCap className="w-5 h-5" />
                EXPLORE TRAININGS
              </Link>

              {/* Secondary — Watch Intro Video */}
              <button
                type="button"
                className="inline-flex items-center gap-2.5 border-2 border-brand-purple
                  text-brand-purple font-bold px-7 py-3.5 rounded-full
                  hover:bg-brand-purple hover:text-white transition-colors duration-200
                  text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple
                  focus:ring-offset-2"
              >
                {/* Circular play icon */}
                <span className="w-6 h-6 rounded-full bg-brand-purple flex items-center
                  justify-center shrink-0 group-hover:bg-white">
                  <Play className="w-3 h-3 text-white fill-white" />
                </span>
                WATCH INTRO VIDEO
              </button>

            </div>
          </div>

          {/* ── Right — Photo ──────────────────────────────────── */}
          <div className="relative flex items-end justify-center
            h-100 lg:h-155">
            <Image
              src="/images/eunice-hero.jpg"
              alt="Eunice Kholowa — Business Coach, Trainer and Entrepreneur"
              fill
              className="object-contain object-bottom"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}