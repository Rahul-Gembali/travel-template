import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { VIBES } from '../data/citiesData';

export default function FilterBar({
  searchQuery,
  onSearchChange,
  activeVibe,
  onSelectVibe,
  resultCount,
  searchInputRef,
}) {
  return (
    <section className="px-4 w-full max-w-6xl mx-auto mb-8 sm:mb-12 box-border">
      <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-black/[0.06] shadow-subtle-ambient flex flex-col gap-3 sm:gap-4 w-full box-border">
        {/* Top: Search Input (Full width on mobile, sleek on desktop) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full min-w-0">
          <div className="relative flex-1 w-full min-w-0">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-muted">
              <Search className="w-4 h-4 stroke-[1.5]" />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by city, country, stay, or gem..."
              className="w-full pl-10 pr-10 py-2.5 sm:py-2 text-sm bg-stone-surface/60 hover:bg-stone-surface focus:bg-white rounded-xl border border-black/[0.06] text-carbon placeholder:text-slate-muted/70 transition-all duration-200 focus:border-carbon focus:outline-none min-h-[44px]"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-muted hover:text-carbon min-w-[44px] min-h-[44px] justify-center"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Active Result Count (Visible on tablet & desktop) */}
          <div className="hidden sm:flex items-center text-xs font-mono text-slate-muted border-l border-black/[0.08] pl-4 shrink-0">
            <span>
              Showing <strong className="font-semibold text-carbon">{resultCount}</strong> of 6 destinations
            </span>
          </div>
        </div>

        {/* Bottom / Vibe Filter Pills with Horizontal Swipe */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-black/[0.04] w-full min-w-0">
          <div className="flex items-center gap-1 text-[10.5px] font-mono text-slate-muted uppercase tracking-telemetry shrink-0 mr-1">
            <SlidersHorizontal className="w-3 h-3" />
            <span className="hidden sm:inline">Vibe:</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 flex-1 min-w-0">
            {VIBES.map((vibe) => {
              const isActive = activeVibe === vibe.id;
              const dotColor =
                vibe.id === 'Heritage'
                  ? 'bg-terracotta'
                  : vibe.id === 'Culinary'
                  ? 'bg-ochre'
                  : vibe.id === 'Coastal'
                  ? 'bg-aegean'
                  : vibe.id === 'Nature'
                  ? 'bg-sage'
                  : 'bg-carbon';

              return (
                <button
                  key={vibe.id}
                  onClick={() => onSelectVibe(vibe.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-mono tracking-tight transition-all duration-200 border whitespace-nowrap touch-manipulation ${
                    isActive
                      ? 'bg-carbon text-white border-carbon shadow-sm'
                      : 'bg-stone-surface/60 hover:bg-stone-surface text-carbon border-transparent'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : dotColor}`} />
                  <span>{vibe.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Result Count (Compact) */}
          <div className="sm:hidden text-[11px] font-mono text-slate-muted shrink-0 pl-1">
            <strong>{resultCount}</strong>/6
          </div>
        </div>
      </div>
    </section>
  );
}
