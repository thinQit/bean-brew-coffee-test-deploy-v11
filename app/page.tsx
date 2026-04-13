"use client";

import { motion } from "framer-motion";

import HeroMinimal from "@/components/blocks/HeroMinimal";
import FeaturesGrid from "@/components/blocks/FeaturesGrid";
import BentoGrid from "@/components/blocks/BentoGrid";
import HoverEffect from "@/components/blocks/HoverEffect";
import TestimonialsGrid from "@/components/blocks/TestimonialsGrid";
import CTASplit from "@/components/blocks/CTASplit";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="bg-cream-gradient">
      {/* HERO (must be HeroMinimal) */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="Bean & Brew coffee bar hero"
            className="h-full w-full object-cover"
          />
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
        </div>

        <div className="relative">
          <HeroMinimal
            eyebrow="The Artisanal Archive"
            title="Bean & Brew Coffee"
            subtitle="Premium roasts, rare lots, and espresso crafted with quiet precision."
            primaryCta={{ label: "Explore the Menu", href: "/services" }}
            secondaryCta={{ label: "Our Story", href: "/about" }}
            note="Small-batch roasting • Seasonal drops • Tasting-room service"
            className="text-white"
          />
        </div>
      </div>

      {/* Signature Roast Menu Grid */}
      <motion.section
        className="section-surface-muted"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm tracking-widest uppercase text-[var(--muted-foreground)]">
                Signature Roasts
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-[var(--foreground)]">
                A curated ledger of rare beans
              </h2>
            </div>
            <div className="hidden md:block text-sm text-[var(--muted-foreground)] max-w-md text-right leading-relaxed">
              Rotating single-origins and house blends—built for espresso,
              filter, and slow mornings.
            </div>
          </div>

          <div className="mt-10">
            <FeaturesGrid
              items={[
                {
                  title: "Cherry Ledger (House Espresso)",
                  description:
                    "Burgundy-fruit sweetness, cocoa finish. Dialed daily for balance.",
                  icon: "Coffee",
                  image: "/images/product-1.png"
                },
                {
                  title: "Olive Grove (Filter Blend)",
                  description:
                    "Soft florals, honeyed body, clean finish—ideal for pour-over.",
                  icon: "Leaf",
                  image: "/images/product-2.png"
                },
                {
                  title: "Gold Cap (Seasonal Single-Origin)",
                  description:
                    "Limited lot with sparkling acidity and layered aromatics.",
                  icon: "Sparkles",
                  image: "/images/product-3.png"
                },
                {
                  title: "Night Archive (Decaf)",
                  description:
                    "Swiss-water decaf with caramel warmth—no compromise.",
                  icon: "Moon",
                  image: "/images/product-3.png"
                }
              ]}
            />
          </div>
        </div>
      </motion.section>

      {/* Editorial Bento Story */}
      <motion.section
        className="section-surface"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <p className="text-sm tracking-widest uppercase text-[var(--muted-foreground)]">
                The Roastery
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
                Crafted like a magazine spread—tasted like a ritual
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                We source with restraint, roast with intention, and serve with a
                quiet confidence. Every cup is documented—origin, process,
                roast curve, and tasting notes—so you can return to what you
                loved.
              </p>

              <div className="mt-8 rounded-2xl overflow-hidden">
                <img
                  src="/images/product-1.png"
                  alt="Roasting and tasting notes"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <BentoGrid
                items={[
                  {
                    title: "Sourcing Notes",
                    description:
                      "Seasonal lots from producers we can name, trace, and revisit.",
                    image: "/images/product-2.png"
                  },
                  {
                    title: "Roast Precision",
                    description:
                      "Profiled for clarity—sweetness first, complexity second.",
                    image: "/images/product-1.png"
                  },
                  {
                    title: "Brew Bar",
                    description:
                      "Espresso, pour-over, and batch brew calibrated all day.",
                    image: "/images/product-2.png"
                  },
                  {
                    title: "Tasting Room",
                    description:
                      "A warm, editorial space designed for slow attention.",
                    image: "/images/product-1.png"
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery / Hover cards */}
      <motion.section
        className="section-surface-muted"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm tracking-widest uppercase text-[var(--muted-foreground)]">
                Gallery
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
                Moments worth lingering over
              </h2>
            </div>
            <div className="hidden md:block text-sm text-[var(--muted-foreground)] max-w-md text-right leading-relaxed">
              A tasting-room atmosphere with warm tones, soft light, and
              intentional details.
            </div>
          </div>

          <div className="mt-10">
            <HoverEffect
              items={[
                {
                  title: "Morning Espresso",
                  description: "Crema-forward shots with a cocoa finish.",
                  image: "/images/product-1.png",
                  href: "/services"
                },
                {
                  title: "Pour-Over Bar",
                  description: "Clean cups, precise pours, and quiet focus.",
                  image: "/images/product-2.png",
                  href: "/services"
                },
                {
                  title: "Roast Day",
                  description: "Small batches, logged and refined.",
                  image: "/images/product-1.png",
                  href: "/about"
                }
              ]}
            />
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="section-surface"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm tracking-widest uppercase text-[var(--muted-foreground)]">
            Reviews
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
            Trusted by regulars and first-timers alike
          </h2>

          <div className="mt-10">
            <TestimonialsGrid
              items={[
                {
                  name: "Avery L.",
                  role: "Weekend regular",
                  quote:
                    "It feels like a tasting experience, not just coffee. The espresso is consistently immaculate.",
                  avatar: "/images/product-2.png"
                },
                {
                  name: "Jordan P.",
                  role: "Home brewer",
                  quote:
                    "Their single-origin drops are always interesting—sweet, clean, and beautifully roasted.",
                  avatar: "/images/product-3.png"
                },
                {
                  name: "Sam R.",
                  role: "Design lead",
                  quote:
                    "The space is warm and editorial. I come for the pour-over and stay for the calm.",
                  avatar: "/images/product-1.png"
                }
              ]}
            />
          </div>
        </div>
      </motion.section>

      {/* CTA (must be CTASplit) */}
      <motion.section
        className="section-surface-muted"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <CTASplit
            title="Ready for your next favorite cup?"
            subtitle="Browse the menu, book a tasting, or reach out for wholesale and events."
            primaryCta={{ label: "Explore Menu", href: "/services" }}
            secondaryCta={{ label: "Contact Us", href: "/contact" }}
            image="/images/product-1.png"
          />
        </div>
      </motion.section>
    </main>
  );
}
