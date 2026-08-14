"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import { navItems } from "@/data/navigation";

/**
 * Main site navigation bar.
 * Client Component — manages mobile menu and dropdown state.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  // Close dropdown when clicking anywhere outside
  useEffect(() => {
    const close = () => setOpenDropdown(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-18 gap-4">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-0.5 flex-1 justify-center"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  href={item.href}
                  className={`
                    relative flex items-center gap-1 px-3 py-2 text-[11px] font-bold
                    uppercase tracking-wider transition-colors duration-200 rounded-sm
                    ${isActive(item.href)
                      ? "text-brand-purple"
                      : "text-gray-600 hover:text-brand-purple"
                    }
                  `}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  {/* Active underline */}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-gold rounded-full" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-60 bg-white shadow-xl border-t-2 border-brand-purple rounded-b-lg py-2 z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600
                          hover:text-brand-purple hover:bg-brand-lavender transition-colors duration-150"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop — CTA + Phone */}
          <div className="hidden lg:flex flex-col items-end gap-1.5 shrink-0">
            <Link
              href="/trainings"
              className="inline-flex items-center gap-2 bg-brand-purple text-white text-xs
                font-bold px-5 py-2.5 rounded-full hover:bg-brand-purple-dark
                transition-colors duration-200 focus:outline-none focus:ring-2
                focus:ring-brand-purple focus:ring-offset-2"
            >
              <GraduationCap className="w-4 h-4" />
              JOIN TRAINING
            </Link>
            <a
              href="tel:+265881581036"
              className="flex items-center gap-1.5 text-xs font-semibold
                text-gray-700 hover:text-brand-purple transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-brand-purple" />
              0881 581 036
            </a>
          </div>

          {/* Mobile — Menu Toggle */}
          <button
            className="lg:hidden p-2 text-brand-purple rounded-md
              hover:bg-brand-lavender transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-brand-purple"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          aria-label="Mobile navigation"
        >
          <Container>
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider
                        transition-colors duration-200
                        ${isActive(item.href)
                          ? "text-brand-purple"
                          : "text-gray-700 hover:text-brand-purple"
                        }`}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === item.label ? null : item.label
                          )
                        }
                        className="p-2 text-brand-purple hover:bg-brand-lavender rounded"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200
                            ${mobileDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {item.dropdown && mobileDropdown === item.label && (
                    <div className="pl-4 pb-2 border-l-2 border-brand-lavender-dark ml-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="flex items-center gap-2 py-2 text-sm
                            text-gray-600 hover:text-brand-purple transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Link
                  href="/trainings"
                  className="flex items-center justify-center gap-2 w-full
                    bg-brand-purple text-white text-sm font-bold py-3
                    rounded-full hover:bg-brand-purple-dark transition-colors duration-200"
                >
                  <GraduationCap className="w-4 h-4" />
                  JOIN TRAINING
                </Link>
                <a
                  href="tel:+265881581036"
                  className="flex items-center justify-center gap-2 py-2
                    text-sm font-semibold text-brand-purple"
                >
                  <Phone className="w-4 h-4" />
                  0881 581 036
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}