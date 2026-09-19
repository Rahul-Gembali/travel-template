import React from 'react';
import { Compass, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/[0.08] bg-stone-surface/40 pt-16 pb-16 px-4 w-full overflow-hidden box-border">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand & Manifesto */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-carbon text-white flex items-center justify-center">
              <Compass className="w-4 h-4 stroke-[1.5]" />
            </div>
            <span className="font-serif text-2xl font-semibold tracking-tight text-carbon">
              HORIZONS
            </span>
          </div>
          <p className="text-sm text-slate-muted leading-relaxed font-normal max-w-sm">
            An independent slow-travel compendium published seasonally. We document unhurried stays, 
            living architectural heritage, and the sensory poetry of global cities.
          </p>
          <div className="font-mono text-xs text-slate-muted">
            <span>PRINT EDITION N° 04</span> • <span>GLOBAL DISTRIBUTION</span>
          </div>
        </div>

        {/* Slow Travel Manifesto */}
        <div className="md:col-span-4 space-y-3">
          <h5 className="font-mono text-xs uppercase tracking-telemetry text-carbon font-semibold">
            The Slow Travel Manifesto
          </h5>
          <ul className="text-xs font-mono text-slate-muted space-y-2 leading-relaxed">
            <li>• Seek stillness before spectacle.</li>
            <li>• Prioritize independent ateliers & historic restorations.</li>
            <li>• Respect indigenous craft, local terroir, and culinary lineages.</li>
            <li>• Leave negative space in the itinerary for serendipity.</li>
          </ul>
        </div>

        {/* Colophon & Typography */}
        <div className="md:col-span-3 space-y-3">
          <h5 className="font-mono text-xs uppercase tracking-telemetry text-carbon font-semibold">
            Colophon & Type
          </h5>
          <div className="text-xs font-mono text-slate-muted space-y-1">
            <p>Editorial Serif: Newsreader & Cormorant</p>
            <p>Interface Sans: Plus Jakarta Sans</p>
            <p>Telemetry Mono: JetBrains Mono</p>
            <p className="pt-2 text-[11px] text-slate-muted/80">
              Curated with slow-travel journalism aesthetics.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-muted gap-4">
        <div>
          © {new Date().getFullYear()} HORIZONS Compendium. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <span>Kyoto</span>
          <span>•</span>
          <span>Oaxaca</span>
          <span>•</span>
          <span>Tbilisi</span>
          <span>•</span>
          <span>Lisbon</span>
          <span>•</span>
          <span>Cape Town</span>
          <span>•</span>
          <span>Bergen</span>
        </div>
      </div>
    </footer>
  );
}
