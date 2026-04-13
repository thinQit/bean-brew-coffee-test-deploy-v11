"use client";

import { motion } from "framer-motion";

import StickyScrollReveal from "@/components/blocks/StickyScrollReveal";
import StatsCounter from "@/components/blocks/StatsCounter";
import TeamGrid from "@/components/blocks/TeamGrid";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export default function AboutPage() {
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
                About
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-semibold">
                A premium roastery with an archival mindset
              </h1>
              <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed">
                Bean & Brew is built around a simple idea: coffee tastes better
                when it’s treated like a craft and documented like a story. We
                roast in small batches, keep profiles tight, and serve with
                calm, attentive hospitality.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/product-2.png"
                  alt="Bean & Brew interior"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
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
          <StickyScrollReveal
            title="How we work"
            subtitle="From sourcing to service—each step is intentional."
            items={[
              {
                title: "Source with restraint",
                description:
                  "We prioritize traceable relationships and seasonal lots with clear character.",
                image: "/images/product-1.png"
              },
              {
                title: "Roast for sweetness",
                description:
                  "We chase balance and clarity—sweetness first, complexity second.",
                image: "/images/product-1.png"
              },
              {
                title: "Brew with precision",
                description:
                  "Espresso and filter recipes are calibrated throughout the day.",
                image: "/images/product-1.png"
              },
              {
                title: "Serve like a tasting",
                description:
                  "Notes, origins, and guidance—without the pretension.",
                image: "/images/product-2.png"
              }
            ]}
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
          <StatsCounter
            items={[
              { label: "Small-batch roasts / week", value: 18 },
              { label: "Seasonal lots / year", value: 42 },
              { label: "Brew recipes dialed daily", value: 12 },
              { label: "Minutes from roast to archive", value: 5 }
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
          <p className="text-sm tracking-widest uppercase text-[var(--muted-foreground)]">
            Team
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
            The people behind the roast
          </h2>

          <div className="mt-10">
            <TeamGrid
              members={[
                {
                  name: "Mara Chen",
                  role: "Head Roaster",
                  image: "/images/product-1.png",
                  bio: "Profile-driven roasting with a focus on sweetness and structure."
                },
                {
                  name: "Elias Grant",
                  role: "Coffee Director",
                  image: "/images/product-2.png",
                  bio: "Sourcing, QC, and training—keeping the archive consistent."
                },
                {
                  name: "Noor Patel",
                  role: "Lead Barista",
                  image: "/images/product-3.png",
                  bio: "Dialing espresso and filter recipes throughout the day."
                }
              ]}
            />
          </div>
        </div>
      </motion.section>
    </main>
  );
}
