import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Trash2,
  Share2,
  Check,
  Bookmark,
  Building,
  Lightbulb,
} from 'lucide-react';
import { useSavedTrips } from '../context/SavedTripsContext';

export default function ItineraryDrawer({ onSelectCityById }) {
  const { savedItems, isDrawerOpen, setIsDrawerOpen, removeItem, clearAllSaved, totalSavedCount } =
    useSavedTrips();
  const [copied, setCopied] = useState(false);

  const handleExportText = () => {
    let text = `# HORIZONS — CURATED ITINERARY\n\n`;

    if (savedItems.cities.length > 0) {
      text += `## Saved Destinations (${savedItems.cities.length})\n`;
      savedItems.cities.forEach((c) => {
        text += `- ${c.name}, ${c.country} — ${c.tagline}\n`;
      });
      text += `\n`;
    }

    if (savedItems.stays.length > 0) {
      text += `## Curated Stays (${savedItems.stays.length})\n`;
      savedItems.stays.forEach((s) => {
        text += `- ${s.name} (${s.cityName}, ${s.countryName}) — ${s.style} [${s.priceTier}]\n`;
      });
      text += `\n`;
    }

    if (savedItems.gems.length > 0) {
      text += `## Hidden Sanctuaries (${savedItems.gems.length})\n`;
      savedItems.gems.forEach((g) => {
        text += `- ${g.name} (${g.cityName}) — ${g.category}\n  Tip: ${g.insiderTip}\n`;
      });
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!isDrawerOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-stretch sm:justify-end bg-black/60 backdrop-blur-sm overflow-hidden">
        {/* Backdrop */}
        <div className="absolute inset-0" onClick={() => setIsDrawerOpen(false)} />

        <motion.div
          initial={{ y: '100%', opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 240 }}
          className="relative w-full sm:max-w-md h-[88dvh] sm:h-full bg-alabaster shadow-modal sm:border-l border-black/[0.08] rounded-t-[2rem] sm:rounded-none flex flex-col z-10 overflow-hidden"
        >
          {/* Mobile Drag Handle */}
          <div className="sm:hidden pt-2.5 pb-1 flex justify-center bg-white">
            <div className="w-12 h-1.5 bg-black/20 rounded-full" />
          </div>

          {/* Header */}
          <div className="px-5 py-4 sm:p-6 bg-white border-b border-black/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-stone-surface flex items-center justify-center text-carbon">
                <Bookmark className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-carbon">Saved Itinerary</h3>
                <p className="text-[11px] sm:text-xs font-mono text-slate-muted">
                  {totalSavedCount} items stored in local state
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsDrawerOpen(false)}
              className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-stone-surface hover:bg-stone-light text-carbon flex items-center justify-center transition-colors touch-manipulation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Action Bar (Export & Clear) */}
          {totalSavedCount > 0 && (
            <div className="px-5 sm:px-6 py-2.5 sm:py-3 bg-stone-surface/40 border-b border-black/[0.06] flex items-center justify-between">
              <button
                onClick={handleExportText}
                className="flex items-center gap-1.5 text-xs font-mono text-carbon hover:text-terracotta transition-colors min-h-[36px]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-sage" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Export Itinerary'}</span>
              </button>

              <button
                onClick={clearAllSaved}
                className="flex items-center gap-1 text-xs font-mono text-slate-muted hover:text-terracotta transition-colors min-h-[36px]"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear All</span>
              </button>
            </div>
          )}

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6 pb-12">
            {totalSavedCount === 0 ? (
              <div className="text-center py-12 sm:py-16">
                <div className="w-12 h-12 rounded-full bg-stone-surface flex items-center justify-center mx-auto mb-3 text-slate-muted">
                  <Bookmark className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-carbon mb-1">Your Itinerary is Empty</h4>
                <p className="text-xs font-mono text-slate-muted max-w-xs mx-auto leading-relaxed">
                  Bookmark cities, boutique stays, or hidden gems to build your private slow-travel itinerary.
                </p>
              </div>
            ) : (
              <>
                {/* Saved Cities */}
                {savedItems.cities.length > 0 && (
                  <div>
                    <span className="text-[10.5px] sm:text-[11px] font-mono uppercase tracking-telemetry text-slate-muted block mb-2.5">
                      Destinations ({savedItems.cities.length})
                    </span>
                    <div className="space-y-2">
                      {savedItems.cities.map((city) => (
                        <div
                          key={city.id}
                          className="p-3 rounded-xl bg-white border border-black/[0.06] flex items-center justify-between gap-3 shadow-sm hover:border-black/15 transition-all"
                        >
                          <button
                            onClick={() => {
                              onSelectCityById(city.id);
                              setIsDrawerOpen(false);
                            }}
                            className="flex items-center gap-3 text-left flex-1"
                          >
                            <img
                              src={city.heroImage}
                              alt={city.name}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <div>
                              <h5 className="font-serif text-base text-carbon font-normal">
                                {city.name}
                              </h5>
                              <p className="text-[11px] font-mono text-slate-muted">{city.country}</p>
                            </div>
                          </button>
                          <button
                            onClick={() => removeItem('cities', city.id)}
                            className="p-2 text-slate-muted hover:text-terracotta transition-colors touch-manipulation"
                            aria-label={`Remove ${city.name}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Saved Stays */}
                {savedItems.stays.length > 0 && (
                  <div>
                    <span className="text-[10.5px] sm:text-[11px] font-mono uppercase tracking-telemetry text-slate-muted block mb-2.5">
                      Boutique Stays ({savedItems.stays.length})
                    </span>
                    <div className="space-y-2">
                      {savedItems.stays.map((stay) => (
                        <div
                          key={stay.id}
                          className="p-3 rounded-xl bg-white border border-black/[0.06] flex items-center justify-between gap-3 shadow-sm"
                        >
                          <div className="flex items-start gap-2.5 flex-1">
                            <Building className="w-4 h-4 text-terracotta mt-0.5 shrink-0" />
                            <div>
                              <h5 className="font-serif text-base text-carbon font-normal">
                                {stay.name}
                              </h5>
                              <p className="text-[11px] font-mono text-slate-muted">
                                {stay.cityName} • {stay.priceTier} ({stay.pricePerNight})
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem('stays', stay.id)}
                            className="p-2 text-slate-muted hover:text-terracotta transition-colors touch-manipulation"
                            aria-label={`Remove ${stay.name}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Saved Gems */}
                {savedItems.gems.length > 0 && (
                  <div>
                    <span className="text-[10.5px] sm:text-[11px] font-mono uppercase tracking-telemetry text-slate-muted block mb-2.5">
                      Hidden Sanctuaries ({savedItems.gems.length})
                    </span>
                    <div className="space-y-2">
                      {savedItems.gems.map((gem) => (
                        <div
                          key={gem.id}
                          className="p-3 rounded-xl bg-white border border-black/[0.06] flex items-start justify-between gap-3 shadow-sm"
                        >
                          <div className="flex items-start gap-2.5 flex-1">
                            <Lightbulb className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                            <div>
                              <h5 className="font-serif text-base text-carbon font-normal">
                                {gem.name}
                              </h5>
                              <p className="text-[11px] font-mono text-slate-muted">
                                {gem.cityName} • {gem.category}
                              </p>
                              <p className="text-xs text-slate-muted mt-1 italic line-clamp-2">
                                "{gem.insiderTip}"
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem('gems', gem.id)}
                            className="p-2 text-slate-muted hover:text-terracotta transition-colors touch-manipulation"
                            aria-label={`Remove ${gem.name}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
