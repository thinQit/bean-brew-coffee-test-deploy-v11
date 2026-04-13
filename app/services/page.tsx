"use client";

import { motion } from "framer-motion";

import FeaturesGrid from "@/components/blocks/FeaturesGrid";
import BentoGrid from "@/components/blocks/BentoGrid";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CTASplit from "@/components/blocks/CTASplit";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  return (
    <main className="bg-cream-gradient">
      <motion.section
        className="section-surface"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <p className="text-sm tracking-widest uppercase text-[var(--muted-foreground)]">
                Menu & Services
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-semibold">
                Espresso, filter, and curated seasonal drops
              </h1>
              <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed">
                A modern menu anchored by a house espresso, rotating
                single-origins, and a tasting-room approach to service.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/product-2.png"
                  alt="Coffee menu items"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <FeaturesGrid
              items={[
                {
                  title: "Espresso Bar",
                  description:
                    "House espresso + rotating guest shots. Milk drinks crafted for balance.",
                  icon: "Coffee",
                  image: "/images/product-1.png"
                },
                {
                  title: "Pour-Over & Batch Brew",
                  description:
                    "Clean, sweet cups with precise recipes and seasonal beans.",
                  icon: "Droplets",
                  image: "/images/product-2.png"
                },
                {
                  title: "Retail Beans",
                  description:
                    "Small-batch bags with tasting notes and brew guidance.",
                  icon: "Package",
                  image: "/images/product-3.png"
                },
                {
                  title: "Wholesale & Events",
                  description:
                    "Training, equipment guidance, and coffee for private gatherings.",
                  icon: "Handshake",
                  image: "/images/product-1.png"
                }
              ]}
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-surface-muted"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm tracking-widest uppercase text-[var(--muted-foreground)]">
            Highlights
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
            What you’ll find on the bar
          </h2>

          <div className="mt-10">
            <BentoGrid
              items={[
                {
                  title: "House Espresso",
                  description:
                    "Chocolate, cherry, and a clean finish—dialed all day.",
                  image: "/images/product-1.png"
                },
                {
                  title: "Seasonal Single-Origin",
                  description:
                    "Limited lots with sparkling acidity and layered aromatics.",
                  image: "/images/product-3.png"
                },
                {
                  title: "Cold Coffee",
                  description:
                    "Flash brew and cold brew—built for clarity, not bitterness.",
                  image: "/images/product-3.png"
                },
                {
                  title: "Pastry Pairings",
                  description:
                    "A small selection designed to complement—not overpower—the cup.",
                  image: "/images/product-3.png"
                }
              ]}
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-surface"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <FAQAccordion
            title="Menu questions"
            subtitle="Quick answers for first-time visitors."
            items={[
              {
                question: "Do you have decaf?",
                answer:
                  "Yes—our Night Archive decaf is Swiss-water processed and roasted for caramel sweetness."
              },
              {
                question: "Can you grind beans for me?",
                answer:
                  "Absolutely. Tell us your brew method and we’ll grind to match."
              },
              {
                question: "Do you offer oat milk?",
                answer:
                  "Yes—oat milk is available for all espresso drinks."
              },
              {
                question: "Do you do tastings?",
                answer:
                  "We offer guided tastings and cuppings—see Pricing for options and booking."
              }
            ]}
          />
        </div>
      </motion.section>

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
            title="Planning an event or need wholesale?"
            subtitle="We’ll help with coffee selection, brew setup, and staff training."
            primaryCta={{ label: "Contact Us", href: "/contact" }}
            secondaryCta={{ label: "View Pricing", href: "/pricing" }}
            image="/images/product-3.png"
          />
        </div>
      </motion.section>
    </main>
  );
}
