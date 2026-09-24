interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

/**
 * Reusable purple hero banner for all secondary pages.
 * Keeps visual consistency across the site.
 */
export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-brand-purple py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <p className="text-brand-gold text-sm font-semibold uppercase
            tracking-widest mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold
          text-white uppercase tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/75 text-base max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-5 h-1 w-16 bg-brand-gold rounded-full mx-auto" />
      </div>
    </section>
  );
}