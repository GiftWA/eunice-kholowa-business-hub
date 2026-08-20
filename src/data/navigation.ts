export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT ME", href: "/about" },
  {
    label: "TRAININGS",
    href: "/trainings",
    dropdown: [
  { label: "Soaps & Oils", href: "/trainings/soaps-oils" },
  { label: "Snacks & Food", href: "/trainings/snacks-food" },
  { label: "Personal Care Products", href: "/trainings/personal-care" },
  { label: "Cleaning Products", href: "/trainings/cleaning-products" },
  { label: "Business & Entrepreneurship", href: "/trainings/business" },
  { label: "Waste to Wealth", href: "/trainings/waste-to-wealth" },
],
  },
  { label: "COURSES", href: "/courses" },
  {
    label: "BOOKS & GUIDES",
    href: "/books-guides",
    dropdown: [
      { label: "Books", href: "/books-guides/books" },
      { label: "Business Guides", href: "/books-guides/guides" },
      { label: "Downloadable Resources", href: "/books-guides/resources" },
    ],
  },
  { label: "BUSINESS IDEAS", href: "/business-ideas" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export const socialLinks = [
  { name: "Facebook",  href: "https://www.facebook.com/share/19iwddxRJH/" },
  { name: "TikTok",   href: "https://www.tiktok.com/@eunicekholowa1" },
  { name: "YouTube",  href: "https://youtube.com/@ndingathewitheunice" },
  { name: "Instagram",href: "https://www.instagram.com/eunicekholowa04" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/eunice-kholowa-85b29b2a3" },
] as const;

export type SocialName = typeof socialLinks[number]["name"];