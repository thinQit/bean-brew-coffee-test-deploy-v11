import * as React from "react";

export type StickyScrollRevealItem = {
  title: string;
  description?: string;
  content?: React.ReactNode;
};

export interface StickyScrollRevealProps {
  items?: StickyScrollRevealItem[];
  className?: string;
}

/**
 * Minimal placeholder implementation to satisfy imports.
 * Replace with your real sticky scroll reveal block when available.
 */
export default function StickyScrollReveal({ items = [], className }: StickyScrollRevealProps) {
  return (
    <section className={className}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {items.length > 0 ? (
          <div style={{ display: "grid", gap: 16 }}>
            {items.map((item, idx) => (
              <div key={idx} style={{ padding: 16, border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12 }}>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                {item.description ? <p style={{ marginTop: 8 }}>{item.description}</p> : null}
                {item.content ? <div style={{ marginTop: 12 }}>{item.content}</div> : null}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ padding: 16, border: "1px dashed rgba(0,0,0,0.2)", borderRadius: 12 }}>
            <h3 style={{ margin: 0 }}>StickyScrollReveal</h3>
            <p style={{ marginTop: 8 }}>Block placeholder (no items provided).</p>
          </div>
        )}
      </div>
    </section>
  );
}
