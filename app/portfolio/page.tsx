"use client";

import { motion } from "framer-motion";

import HoverEffect from "@/components/blocks/HoverEffect";
import BentoGrid from "@/components/blocks/BentoGrid";
import CTASplit from "@/components/blocks/CTASplit";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export default function PortfolioPage() {
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
                Portfolio
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-semibold">
                Projects, collaborations, and seasonal releases
              </h1>
              <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed">
                A selection of our recent drops, café collaborations, and
                tasting-room moments—documented like an archive.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/product-1.png"
                  alt="Coffee collaboration"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <HoverEffect
              items={[
                {
                  title: "Seasonal Drop: Gold Cap",
                  description:
                    "Limited single-origin release with sparkling acidity and floral aromatics.",
                  image: "/images/product-3.png",
                  href: "/services"
                },
                {
                  title: "Café Collab: Espresso Takeover",
                  description:
                    "Guest espresso program with training and dialing support.",
                  image: "/images/product-1.png",
                  href: "/pricing"
                },
                {
                  title: "Tasting Room: Archive Flight",
                  description:
                    "Guided tasting experience—notes, origin, and brew methods.",
                  image: "/images/product-2.png",
                  href: "/pricing"
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
            What we deliver
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
            A premium experience—beyond the bag
          </h2>

          <div className="mt-10">
            <BentoGrid
              items={[
                {
                  title: "Release Notes",
                  description:
                    "Origin, process, and tasting notes presented clearly.",
                  image: "/images/product-1.png"
                },
                {
                  title: "Training & Dialing",
                  description:
                    "Espresso recipes, workflow guidance, and calibration.",
                  image: "/images/product-1.png"
                },
                {
                  title: "Event Service",
                  description:
                    "Coffee for private gatherings with an elevated setup.",
                  image: "/images/product-3.png"
                },
                {
                  title: "Wholesale Support",
                  description:
                    "Ongoing QC and seasonal menu planning for partners.",
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
          <CTASplit
            title="Have a collaboration in mind?"
            subtitle="Tell us what you’re building—we’ll recommend coffees and support to match."
            primaryCta={{ label: "Contact Us", href: "/contact" }}
            secondaryCta={{ label: "View Services", href: "/services" }}
            image="/images/product-2.png"
          />
        </div>
      </motion.section>
    </main>
  );
}
