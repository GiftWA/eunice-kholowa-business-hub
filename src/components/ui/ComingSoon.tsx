import Link from "next/link";
import { Clock, MessageCircle } from "lucide-react";
import PageHero from "./PageHero";

interface ComingSoonProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  description: string;
}

export default function ComingSoon({
  title,
  subtitle,
  breadcrumb,
  description,
}: ComingSoonProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} breadcrumb={breadcrumb} />

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon */}
          <div
            className="w-20 h-20 rounded-full bg-brand-lavender
            flex items-center justify-center mx-auto mb-6
            border-2 border-brand-lavender-dark">
            <Clock className="w-9 h-9 text-brand-purple" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-extrabold text-brand-purple mb-3">
            Coming Soon
          </h2>
          <div className="h-1 w-16 bg-brand-gold rounded-full mx-auto mb-6" />

          {/* Description */}
          <p className="text-gray-500 leading-relaxed text-sm mb-8">
            {description}
          </p>

          {/* Actions */}
          <div
            className="flex flex-col sm:flex-row items-center
            justify-center gap-4">
            <Link
              href="/trainings"
              className="inline-flex items-center gap-2 bg-brand-purple
                text-white font-bold px-7 py-3.5 rounded-full
                hover:bg-brand-purple-dark transition-colors duration-200
                text-sm focus:outline-none focus:ring-2
                focus:ring-brand-purple focus:ring-offset-2">
              Browse Trainings
            </Link>
            <Link
              href="https://wa.me/265881581036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2
                border-brand-purple text-brand-purple font-bold px-7 py-3.5
                rounded-full hover:bg-brand-purple hover:text-white
                transition-colors duration-200 text-sm">
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
