import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CityCard from './CityCard';
import { Compass } from 'lucide-react';

export default function CityGrid({ cities, onSelectCity, onResetFilters }) {
  if (cities.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto p-8 rounded-2xl bg-stone-surface/60 border border-black/[0.06]">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4 border border-black/[0.06] text-slate-muted">
            <Compass className="w-6 h-6 stroke-[1.5]" />
          </div>
          <h3 className="font-serif text-xl text-carbon mb-2">No destinations match your query</h3>
          <p className="text-sm text-slate-muted mb-6 leading-relaxed">
            We could not find any field notes matching your current filter criteria. Try clearing your search or switching regions.
          </p>
          <button
            onClick={onResetFilters}
            className="px-4 py-2 rounded-full bg-carbon text-white text-xs font-mono tracking-wide hover:bg-carbon/90 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="px-4 w-full max-w-6xl mx-auto pb-24 box-border">
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full min-w-0"
      >
        <AnimatePresence>
          {cities.map((city, index) => (
            <CityCard
              key={city.id}
              city={city}
              index={index}
              onSelectCity={onSelectCity}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
