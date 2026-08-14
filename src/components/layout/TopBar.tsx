import { socialLinks } from "@/data/navigation";
import SocialIcon from "@/components/ui/SocialIcon";

export default function TopBar() {
  return (
    <div className="bg-brand-purple-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 text-xs">

          <p className="hidden sm:flex items-center gap-2 font-medium tracking-wide text-white/90">
            <span className="text-brand-gold">✦</span>
            Empowering People
            <span className="text-brand-gold mx-1">•</span>
            Creating Opportunities
            <span className="text-brand-gold mx-1">•</span>
            Building Businesses
            <span className="text-brand-gold">✦</span>
          </p>

          <p className="sm:hidden text-white/90 font-medium text-[10px]">
            Empowering People &amp; Building Businesses
          </p>

          <div className="flex items-center gap-3">
            <span className="text-white/70 font-medium hidden sm:inline">
              Follow Me:
            </span>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${social.name}`}
                  className="text-white/80 hover:text-brand-gold transition-colors duration-200"
                >
                  <SocialIcon name={social.name} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}