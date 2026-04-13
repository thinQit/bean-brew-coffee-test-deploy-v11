import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif, Manrope } from "next/font/google";

import NavbarGlass from "@/components/blocks/NavbarGlass";
import FooterMultiColumn from "@/components/blocks/FooterMultiColumn";

const heading = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Bean & Brew Coffee",
  description:
    "Premium coffee roastery and espresso bar. Rare beans, meticulous roasting, and a warm, editorial tasting experience."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        {/* Navbar must be full width and fixed */}
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarGlass
            brand={{
              name: "Bean & Brew",
              tagline: "Premium Roastery"
            }}
            links={[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
              { label: "Portfolio", href: "/portfolio" }
            ]}
            cta={{
              label: "View Menu",
              href: "/services"
            }}
          />
        </div>

        {/* Offset for fixed navbar */}
        <div className="pt-24">{children}</div>

        <FooterMultiColumn
          brand={{
            name: "Bean & Brew Coffee",
            description:
              "A premium coffee roastery with an editorial tasting-room vibe—rare lots, precise roasting, and espresso crafted with intention."
          }}
          columns={[
            {
              title: "Explore",
              links: [
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Portfolio", href: "/portfolio" }
              ]
            },
            {
              title: "Visit",
              links: [
                { label: "Contact", href: "/contact" },
                { label: "Hours & Location", href: "/contact" }
              ]
            },
            {
              title: "Social",
              links: [
                { label: "Instagram", href: "#" },
                { label: "TikTok", href: "#" },
                { label: "YouTube", href: "#" }
              ]
            }
          ]}
          bottomNote="© 2026 Bean & Brew Coffee. All rights reserved."
        />
      </body>
    </html>
  );
}
