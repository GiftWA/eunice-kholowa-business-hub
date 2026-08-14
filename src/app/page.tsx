import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-16">
      <Container>

        {/* Typography Preview */}
        <section className="mb-12">
          <p className="font-script text-4xl text-brand-purple mb-1">
            Welcome to
          </p>
          <h1 className="text-5xl font-extrabold text-brand-purple leading-tight">
            EUNICE KHOLOWA
          </h1>
          <h2 className="text-5xl font-extrabold text-brand-gold leading-tight">
            BUSINESS HUB
          </h2>
          <p className="text-xl font-semibold text-gray-700 mt-3">
            Learn. Create. Start. Grow.
          </p>
          <p className="text-base text-gray-500 mt-2 max-w-md">
            I help you gain practical skills, discover profitable business ideas
            and build a successful business even if you are starting with little
            or no capital.
          </p>
        </section>

        {/* Section Heading Preview */}
        <section className="mb-12">
          <SectionHeading title="MY TRAININGS" />
          <SectionHeading title="Centered Heading" align="center" />
        </section>

        {/* Color Palette */}
        <section className="mb-12">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Brand Colors
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { bg: "bg-brand-purple",        label: "Purple",         light: false },
              { bg: "bg-brand-purple-dark",   label: "Purple Dark",   light: false },
              { bg: "bg-brand-purple-light",  label: "Purple Light",  light: false },
              { bg: "bg-brand-gold",          label: "Gold",          light: false },
              { bg: "bg-brand-gold-light",    label: "Gold Light",    light: false },
              { bg: "bg-brand-lavender",      label: "Lavender",      light: true },
              { bg: "bg-brand-lavender-dark", label: "Lavender Dark", light: true },
            ].map((color) => (
              <div
                key={color.label}
                className={`${color.bg} w-24 h-24 rounded-xl flex items-end p-2 border border-gray-200`}
              >
                <span
                  className={`text-xs font-medium ${
                    color.light ? "text-brand-purple" : "text-white"
                  }`}
                >
                  {color.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Button Variants */}
        <section className="mb-12">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Button Variants
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="gold">Gold</Button>
            <div className="bg-brand-purple p-4 rounded-xl">
              <Button variant="outline">Outline</Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <p className="text-xs text-gray-400 border-t pt-4">
          ✓ Milestone 2 — Design System foundation complete
        </p>

      </Container>
    </main>
  );
}