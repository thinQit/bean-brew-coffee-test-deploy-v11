"use client";

import { motion } from "framer-motion";

import ContactForm from "@/components/blocks/ContactForm";
import FAQAccordion from "@/components/blocks/FAQAccordion";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export default function ContactPage() {
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
            <div className="md:col-span-6">
              <p className="text-sm tracking-widest uppercase text-[var(--muted-foreground)]">
                Contact
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-semibold">
                Visit, book a tasting, or ask about wholesale
              </h1>
              <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed">
                Send a note and we’ll respond quickly. For tastings, include
                your preferred date/time and group size.
              </p>

              <div className="mt-8 rounded-2xl overflow-hidden">
                <img
                  src="/images/product-3.png"
                  alt="Bean & Brew tasting room"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="mt-8 text-sm text-[var(--muted-foreground)] leading-relaxed">
                <p>
                  <span className="font-semibold text-[var(--foreground)]">
                    Hours:
                  </span>{" "}
                  Mon–Fri 7–5 • Sat–Sun 8–4
                </p>
                <p className="mt-2">
                  <span className="font-semibold text-[var(--foreground)]">
                    Location:
                  </span>{" "}
                  123 Roastery Lane, Your City
                </p>
                <p className="mt-2">
                  <span className="font-semibold text-[var(--foreground)]">
                    Email:
                  </span>{" "}
                  hello@beanandbrew.coffee
                </p>
              </div>
            </div>

            <div className="md:col-span-6">
              <ContactForm
                title="Send a message"
                subtitle="We’ll get back within 1–2 business days."
                fields={[
                  { name: "name", label: "Name", type: "text", required: true },
                  {
                    name: "email",
                    label: "Email",
                    type: "email",
                    required: true
                  },
                  {
                    name: "topic",
                    label: "Topic",
                    type: "select",
                    options: ["General", "Tasting", "Wholesale", "Events"],
                    required: true
                  },
                  {
                    name: "message",
                    label: "Message",
                    type: "textarea",
                    required: true
                  }
                ]}
                submitLabel="Send"
              />
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
          <FAQAccordion
            title="Before you send"
            subtitle="A few quick answers."
            items={[
              {
                question: "Do you take reservations?",
                answer:
                  "Walk-ins are welcome. For tastings and groups, please message us to schedule."
              },
              {
                question: "Can I buy beans in-store?",
                answer:
                  "Yes—retail bags are available daily, plus limited seasonal drops."
              },
              {
                question: "Do you offer gift cards?",
                answer:
                  "Yes. Ask in-store or message us and we’ll set one up."
              }
            ]}
          />
        </div>
      </motion.section>
    </main>
  );
}
