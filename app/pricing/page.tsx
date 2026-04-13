"use client";

import { motion } from "framer-motion";

import PricingTable from "@/components/blocks/PricingTable";
import InfiniteMovingCards from "@/components/blocks/InfiniteMovingCards";
import CTASplit from "@/components/blocks/CTASplit";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export default function PricingPage() {
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
                Pricing
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-semibold">
                Tastings, subscriptions, and wholesale support
              </h1>
              <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed">
                Choose a plan for weekly beans, guided tastings, or café
                partnerships. Transparent options—no surprises.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/product-3.png"
                  alt="Coffee beans close-up"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <PricingTable
              title="Plans"
              subtitle="Pick what fits your ritual."
              plans={[
                {
                  name: "Tasting Flight",
                  price: "$18",
                  period: "per person",
                  description: "Guided tasting of 3 coffees with notes and origin story.",
                  features: [
                    "3-cup flight",
                    "Guided notes",
                    "Origin + process overview",
                    "Brew method recommendations"
                  ],
                  cta: { label: "Book a flight", href: "/contact" },
                  highlighted: true
                },
                {
                  name: "Archive Subscription",
                  price: "$24",
                  period: "per week",
                  description: "A rotating 250g bag—sweet, clean, seasonal.",
                  features: [
                    "Weekly rotating beans",
                    "Brew guide included",
                    "Subscriber-only drops",
                    "Pause anytime"
                  ],
                  cta: { label: "Start subscription", href: "/contact" }
                },
                {
                  name: "Wholesale Partner",
                  price: "Custom",
                  period: "monthly",
                  description: "Beans, training, and support for cafés and offices.",
                  features: [
                    "Coffee selection + sourcing",
                    "Training + dialing support",
                    "Equipment guidance",
                    "Ongoing QC"
                  ],
                  cta: { label: "Request pricing", href: "/contact" }
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
          <InfiniteMovingCards
            title="Included with every plan"
            subtitle="A premium experience, end to end."
            items={[
              { title: "Tasting notes", description: "Clear, honest, and useful." },
              { title: "Brew guidance", description: "Dial-in help for your setup." },
              { title: "Seasonal rotation", description: "Always something new." },
              { title: "Quality control", description: "Profiles refined continuously." },
              { title: "Support", description: "We answer questions quickly." }
            ]}
            speed="normal"
          />
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
          <CTASplit
            title="Want a recommendation?"
            subtitle="Tell us how you brew and what flavors you like—we’ll match you to a roast."
            primaryCta={{ label: "Contact Us", href: "/contact" }}
            secondaryCta={{ label: "Explore Menu", href: "/services" }}
            image="/images/product-2.png"
          />
        </div>
      </motion.section>
    </main>
  );
}
