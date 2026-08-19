import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SocialIcon from "@/components/ui/SocialIcon";
import { socialLinks } from "@/data/navigation";
import { quickLinks, footerCategories } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-brand-purple-dark text-white">

      {/* ── Main Footer Grid ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Column 1 — Brand ─────────────────────────────── */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Eunice Kholowa Business Hub"
                width={180}
                height={50}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Empowering people with practical skills, business ideas and
              support to build successful businesses.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${social.name}`}
                  className="text-white/70 hover:text-brand-gold transition-colors duration-200"
                >
                  <SocialIcon name={social.name} className="w-5 h-5" />
                </Link>
              ))}

              {/* WhatsApp icon */}
              <Link
                href="https://wa.me/265881581036"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="text-white/70 hover:text-brand-gold transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.17 1.538 5.943L.057 23.714a.5.5 0 0 0 .63.63l5.772-1.481A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.028-1.384l-.36-.214-3.732.957.975-3.595-.235-.37A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* ── Column 2 — Quick Links ────────────────────────── */}
          <div>
            <h3 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/70 hover:text-brand-gold text-sm transition-colors duration-200"
                  >
                    <span className="text-brand-gold text-base leading-none">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 — Training Categories ───────────────── */}
          <div>
            <h3 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-5">
              Training Categories
            </h3>
            <ul className="space-y-2.5">
              {footerCategories.map((cat) => (
                <li key={cat.label}>
                  <Link
                    href={cat.href}
                    className="flex items-center gap-2 text-white/70 hover:text-brand-gold text-sm transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-brand-gold shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4 — Contact ────────────────────────────── */}
          <div>
            <h3 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-5">
              Contact Me
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <Link
                  href="tel:+265881581036"
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  0881 581 036
                </Link>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <Link
                  href="mailto:eunicekholowabusiness@gmail.com"
                  className="hover:text-brand-gold transition-colors duration-200 break-all"
                >
                  eunicekholowabusiness@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Lilongwe, Malawi</span>
              </li>
            </ul>

            {/* WhatsApp CTA button */}
            <Link
              href="https://wa.me/265881581036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold
                text-white font-bold px-5 py-3 rounded-full hover:bg-brand-gold-dark
                transition-colors duration-200 text-sm w-full"
            >
              <MessageCircle className="w-4 h-4" />
              CHAT ON WHATSAPP
            </Link>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
            <p>© {new Date().getFullYear()} Eunice Kholowa Business Hub. All Rights Reserved.</p>
            <p>Learn. Create. Start. Grow. </p>
          </div>
        </div>
      </div>

    </footer>
  );
}