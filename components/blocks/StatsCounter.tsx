import * as React from "react";

export type StatItem = {
  label: string;
  value: string | number;
};

export interface StatsCounterProps {
  stats?: StatItem[];
  className?: string;
}

/**
 * Minimal placeholder implementation to satisfy imports.
 * Replace with your animated counter implementation when available.
 */
export default function StatsCounter({ stats = [], className }: StatsCounterProps) {
  return (
    <section className={className}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {stats.length > 0 ? (
            stats.map((s, idx) => (
              <div key={idx} style={{ padding: 16, border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12 }}>
                <div style={{ fontSize: 28, fontWeight: 700 }}>{s.value}</div>
                <div style={{ opacity: 0.8 }}>{s.label}</div>
              </div>
            ))
          ) : (
            <div style={{ padding: 16, border: "1px dashed rgba(0,0,0,0.2)", borderRadius: 12 }}>
              <div style={{ fontSize: 18, fontWeight: 600 }}>StatsCounter</div>
              <div style={{ opacity: 0.8, marginTop: 6 }}>Block placeholder (no stats provided).</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
