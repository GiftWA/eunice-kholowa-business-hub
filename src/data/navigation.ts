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
      { label: "Soap & Detergent Making", href: "/trainings/soap-detergent-making" },
      { label: "Personal Care Products", href: "/trainings/personal-care-products" },
      { label: "Cleaning Products", href: "/trainings/cleaning-products" },
      { label: "Food Processing", href: "/trainings/food-processing" },
      { label: "Business & Entrepreneurship", href: "/trainings/business-entrepreneurship" },
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
  { name: "Facebook",  href: "https://facebook.com/eunicekholowa" },
  { name: "TikTok",   href: "https://tiktok.com/@eunicekholowa" },
  { name: "YouTube",  href: "https://youtube.com/@eunicekholowa" },
  { name: "Instagram",href: "https://instagram.com/eunicekholowa" },
] as const;

export type SocialName = typeof socialLinks[number]["name"];