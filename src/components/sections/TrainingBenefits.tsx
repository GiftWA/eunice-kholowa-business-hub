import { trainingBenefits } from "@/data/benefits";

/**
 * Training Benefits Strip
 * Five benefits displayed horizontally on desktop, 
 * stacked grid on mobile/tablet.
 * Sits immediately below the Training Cards section.
 */
export default function TrainingBenefits() {
  return (
    <section className="bg-brand-lavender border-y border-brand-lavender-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0">
          {trainingBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLast = index === trainingBenefits.length - 1;

            return (
              <div
                key={benefit.title}
                className={`
                  flex flex-col items-center text-center px-4 py-2
                  ${!isLast
                    ? "lg:border-r lg:border-brand-lavender-dark"
                    : ""
                  }
                `}
              >
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full bg-brand-purple/10
                  flex items-center justify-center mb-3 shrink-0">
                  <Icon className="w-7 h-7 text-brand-purple" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-brand-purple text-sm mb-1.5 leading-snug">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}