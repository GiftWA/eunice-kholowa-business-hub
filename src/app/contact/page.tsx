import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import SocialIcon from "@/components/ui/SocialIcon";
import { socialLinks } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact | Eunice Kholowa Business Hub",
  description:
    "Get in touch with Eunice Kholowa Business Hub. Call, WhatsApp, or send a message — we are happy to help you start your business journey.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "0881 581 036",
    href: "tel:+265881581036",
    description: "Call us during business hours",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/265881581036",
    description: "Fastest way to reach us",
  },
  {
    icon: Mail,
    label: "Email",
    value: "eunicekholowabusiness@gmail.com",
    href: "mailto:eunicekholowabusiness@gmail.com",
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lilongwe, Malawi",
    href: null,
    description: "Training sessions held in Lilongwe",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Have a question about a training or just want to say hello? We would love to hear from you."
        breadcrumb="Contact Us"
      />

      {/* ── Main Contact Section ─────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* ── Left — Contact Form ───────────────────────── */}
            <div>
              <h2
                className="text-2xl font-extrabold text-brand-purple
                uppercase tracking-wide mb-2">
                Send Us A Message
              </h2>
              <div className="h-1 w-16 bg-brand-gold rounded-full mb-6" />
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Fill in the form below and we will get back to you as soon as
                possible. You can also reach us directly via WhatsApp or phone
                for a faster response.
              </p>
              <ContactForm />
            </div>

            {/* ── Right — Contact Info ──────────────────────── */}
            <div className="space-y-6">
              <div>
                <h2
                  className="text-2xl font-extrabold text-brand-purple
                  uppercase tracking-wide mb-2">
                  Contact Information
                </h2>
                <div className="h-1 w-16 bg-brand-gold rounded-full mb-6" />
              </div>

              {/* Contact detail cards */}
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5 rounded-2xl
                      bg-brand-lavender border border-brand-lavender-dark
                      hover:shadow-sm transition-shadow duration-200">
                    <div
                      className="w-11 h-11 rounded-full bg-brand-purple/10
                      flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-purple" />
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold text-brand-purple
                        uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm font-semibold text-gray-800
                            hover:text-brand-purple transition-colors duration-200
                            break-all">
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-sm font-semibold text-gray-800">
                          {item.value}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Business Hours */}
              <div
                className="flex items-start gap-4 p-5 rounded-2xl
                bg-brand-lavender border border-brand-lavender-dark">
                <div
                  className="w-11 h-11 rounded-full bg-brand-purple/10
                  flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <p
                    className="text-xs font-bold text-brand-purple
                    uppercase tracking-wide mb-1">
                    Business Hours
                  </p>
                  <div className="space-y-0.5 text-sm text-gray-700">
                    <p>
                      Monday – Friday:{" "}
                      <span className="font-semibold">8:00 AM – 5:00 PM</span>
                    </p>
                    <p>
                      Saturday:{" "}
                      <span className="font-semibold">8:00 AM – 1:00 PM</span>
                    </p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="p-5 rounded-2xl bg-brand-purple">
                <p
                  className="text-xs font-bold text-brand-gold uppercase
                  tracking-wide mb-4">
                  Follow On Social Media
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow on ${social.name}`}
                      className="text-white/70 hover:text-brand-gold
                        transition-colors duration-200">
                      <SocialIcon name={social.name} className="w-6 h-6" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA ─────────────────────────────────────── */}
      <section className="py-12 bg-brand-lavender border-y border-brand-lavender-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-purple font-semibold text-sm mb-2">
            Prefer a quicker response?
          </p>
          <h2 className="text-2xl font-extrabold text-brand-purple mb-4">
            Message Us on WhatsApp
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            WhatsApp is the fastest way to reach Eunice directly. Whether you
            have a question about training, need advice, or want to register —
            just send a message.
          </p>
          <Link
            href="https://wa.me/265881581036"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-purple
              text-white font-bold px-8 py-4 rounded-full
              hover:bg-brand-purple-dark transition-colors duration-200 text-sm
              focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2">
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp Now
          </Link>
        </div>
      </section>
    </>
  );
}
