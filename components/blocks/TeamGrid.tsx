import * as React from "react";

export type TeamMember = {
  name: string;
  role?: string;
  bio?: string;
  imageUrl?: string;
};

export interface TeamGridProps {
  members?: TeamMember[];
  className?: string;
}

/**
 * Minimal placeholder implementation to satisfy imports.
 * Replace with your real team grid block when available.
 */
export default function TeamGrid({ members = [], className }: TeamGridProps) {
  return (
    <section className={className}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {members.length > 0 ? (
            members.map((m, idx) => (
              <div key={idx} style={{ padding: 16, border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12 }}>
                <div style={{ fontWeight: 700 }}>{m.name}</div>
                {m.role ? <div style={{ opacity: 0.8, marginTop: 4 }}>{m.role}</div> : null}
                {m.bio ? <p style={{ marginTop: 10 }}>{m.bio}</p> : null}
              </div>
            ))
          ) : (
            <div style={{ padding: 16, border: "1px dashed rgba(0,0,0,0.2)", borderRadius: 12 }}>
              <div style={{ fontSize: 18, fontWeight: 600 }}>TeamGrid</div>
              <div style={{ opacity: 0.8, marginTop: 6 }}>Block placeholder (no members provided).</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
