"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

function getRemaining() {
  const diff = Math.max(0, new Date(siteConfig.draftDeadline).getTime() - Date.now());
  return {
    jours: Math.floor(diff / 86400000),
    heures: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
  };
}

export function Countdown() {
  const [remaining, setRemaining] = useState(getRemaining());

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 60000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-10">
      <div className="container-cnn rounded-[2rem] border border-orange/30 bg-gradient-to-r from-orange/10 via-cloud to-neon/10 p-8 text-ink shadow-soft">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.22em] text-orange">Clôture de The Draft</p>
            <p className="mt-2 text-muted">Le compte à rebours est lancé pour rejoindre la cohorte CNN 2026.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {Object.entries(remaining).map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-line bg-white px-5 py-4 shadow-soft">
                <p className="font-[var(--font-space)] text-3xl font-black text-ink">{value}</p>
                <p className="text-xs uppercase tracking-[.18em] text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
