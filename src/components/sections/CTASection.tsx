import { Phone, MessageCircle, Send } from "lucide-react";

/**
 * Call To Action Section
 * Deep purple banner with WhatsApp + phone buttons.
 * Sits between the benefits strip and the footer.
 */
export default function CTASection() {
  return (
    <section className="bg-brand-purple py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* ── Left — Icon + Text ─────────────────────────────── */}
          <div className="flex items-center gap-5 text-white">

            {/* Telegram-style send icon in gold circle */}
            <div className="w-16 h-16 rounded-full bg-brand-gold/20 border-2
              border-brand-gold flex items-center justify-center shrink-0">
              <Send className="w-7 h-7 text-brand-gold" />
            </div>

            {/* Text block */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-1">
                Ready to Start Your Business Journey?
              </h2>
              <p className="text-white/75 text-sm leading-relaxed max-w-md">
                Join thousands of entrepreneurs building successful businesses
                and creating a better life.
              </p>
            </div>

          </div>

          {/* ── Right — Action Buttons ─────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">

            {/* WhatsApp button — outline style */}
            <a
              href="https://wa.me/265881581036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-2 border-white
                text-white font-bold px-7 py-3.5 rounded-full
                hover:bg-white hover:text-brand-purple
                transition-colors duration-200 text-sm w-full sm:w-auto
                justify-center focus:outline-none focus:ring-2
                focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-purple"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            {/* Phone button — gold style */}
            <a
              href="tel:+265881581036"
              className="inline-flex items-center gap-2.5 bg-brand-gold text-white
                font-bold px-7 py-3.5 rounded-full hover:bg-brand-gold-dark
                transition-colors duration-200 text-sm w-full sm:w-auto
                justify-center focus:outline-none focus:ring-2
                focus:ring-brand-gold focus:ring-offset-2
                focus:ring-offset-brand-purple"
            >
              <Phone className="w-5 h-5" />
              0881 581 036
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}