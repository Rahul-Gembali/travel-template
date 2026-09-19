import React from 'react';
import { Bookmark, Compass, Search, MapPin } from 'lucide-react';
import { useSavedTrips } from '../context/SavedTripsContext';

export default function Navbar({ onOpenMap, onFocusSearch }) {
  const { totalSavedCount, setIsDrawerOpen } = useSavedTrips();

  return (
    <header className="sticky top-3 sm:top-4 z-40 px-3 sm:px-4 w-full max-w-6xl mx-auto pointer-events-none box-border">
      <nav 
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/85 backdrop-blur-md border border-black/[0.06] shadow-subtle-ambient w-full box-border"
      >
        {/* Brand / Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon rounded-full py-1"
        >
          <div className="w-8 h-8 rounded-full bg-carbon text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Compass className="w-4 h-4 stroke-[1.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-tight text-base sm:text-lg font-semibold text-carbon leading-none">
              HORIZONS
            </span>
            <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-telemetry text-slate-muted mt-0.5">
              Slow Travel Compendium
            </span>
          </div>
        </a>

        {/* Center / Desktop Navigation Actions */}
        <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-telemetry font-mono text-slate-muted">
          <button 
            onClick={onOpenMap}
            className="flex items-center gap-1.5 hover:text-carbon transition-colors duration-200 py-1"
          >
            <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Coordinates & Map</span>
          </button>
          <button
            onClick={onFocusSearch}
            className="flex items-center gap-1.5 hover:text-carbon transition-colors duration-200 py-1"
          >
            <Search className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Search Compendium</span>
          </button>
        </div>

        {/* Right Action: Itinerary / Bookmarks Drawer Trigger */}
        <div className="flex items-center gap-2">
          {/* Mobile Quick Map Button */}
          <button
            onClick={onOpenMap}
            aria-label="Open Coordinates Map"
            className="md:hidden w-9 h-9 rounded-full bg-stone-surface hover:bg-stone-light text-carbon flex items-center justify-center border border-black/[0.05] transition-colors"
          >
            <MapPin className="w-4 h-4 stroke-[1.5]" />
          </button>

          {/* Saved Itinerary Trigger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            aria-label={`Open Saved Itinerary with ${totalSavedCount} items`}
            className="relative flex items-center gap-2 px-3 sm:px-3.5 py-1.5 min-h-[38px] rounded-full bg-stone-surface hover:bg-stone-light text-carbon text-xs font-medium transition-all duration-200 border border-black/[0.05]"
          >
            <Bookmark className="w-3.5 h-3.5 stroke-[1.5]" />
            <span className="hidden sm:inline font-mono tracking-wide">Saved Itinerary</span>
            {totalSavedCount > 0 ? (
              <span className="w-5 h-5 rounded-full bg-carbon text-white text-[10px] font-mono flex items-center justify-center leading-none">
                {totalSavedCount}
              </span>
            ) : (
              <span className="sm:hidden text-[10px] font-mono text-slate-muted">0</span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
