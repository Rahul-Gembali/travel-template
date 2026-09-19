import React from 'react';
import { motion } from 'motion/react';
import { CONTINENTS } from '../data/citiesData';
import { Compass, Sparkles, MapPin } from 'lucide-react';
import heroArt from '../assets/horizons_hero_art.jpg';

export default function HeroSection({ activeContinent, onSelectContinent }) {
  return (
    <section className="relative pt-4 pb-8 sm:pt-10 sm:pb-16 md:pt-14 md:pb-20 px-4 w-full max-w-6xl mx-auto overflow-hidden sm:overflow-visible box-border">
      {/* Top Editorial Eyebrow & Monograph Header */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between pb-3 sm:pb-5 mb-5 sm:mb-10 border-b border-black/[0.08] w-full min-w-0"
      >
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 rounded-full bg-terracotta"></span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-ochre"></span>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-telemetry text-carbon font-medium">
            EDITION N° 04 / GLOBAL EXPLORATIONS
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-slate-muted uppercase tracking-telemetry">
          <span>ISSN 2940-1847</span>
          <span className="text-black/20">•</span>
          <span className="text-plum font-medium">MATTE ARCHITECTURES</span>
          <span className="text-black/20">•</span>
          <span>AUTUMN / WINTER</span>
        </div>
      </motion.div>

      {/* Main Editorial Layout: Image at STARTING on Mobile (order-1), Typography (order-2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-8 sm:mb-12 w-full min-w-0">
        {/* 1:1 Aspect Ratio Art Piece (ORDER-1 ON MOBILE -> AT THE STARTING) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center w-full min-w-0"
        >
          <div className="relative w-full max-w-[240px] xs:max-w-[270px] sm:max-w-[320px] lg:max-w-md aspect-square rounded-[1.75rem] sm:rounded-[2rem] p-1.5 sm:p-2 bg-stone-surface/60 border border-black/[0.07] shadow-elevated group mx-auto box-border">
            {/* Inner Art Container */}
            <div className="relative w-full h-full rounded-[calc(1.75rem-6px)] sm:rounded-[calc(2rem-8px)] overflow-hidden bg-white border border-black/[0.05]">
              <img
                src={heroArt}
                alt="Minimalist 2D and 3D architectural composition with terracotta arch, stone sphere, and ochre sun"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              
              {/* Subtle Vignette & Frame */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />

              {/* Floating Top Stamp Badge */}
              <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.06] text-[9px] sm:text-[10px] font-mono text-carbon shadow-sm pointer-events-none">
                <Compass className="w-3 h-3 text-terracotta" />
                <span className="tracking-telemetry font-medium">PLATE 01 // MATTE ARCHITECTURES</span>
              </div>

              {/* Bottom Subtle Caption Overlay */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-xl bg-white/90 backdrop-blur-md border border-black/[0.06] flex items-center justify-between text-[9px] sm:text-[10.5px] font-mono text-slate-muted pointer-events-none">
                <span>Form, Light & Space</span>
                <span className="text-terracotta font-semibold">Slow Travel</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Typography & Statistics (ORDER-2 ON MOBILE -> BELOW THE IMAGE) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-between w-full min-w-0 text-center lg:text-left"
        >
          <div>
            {/* Monograph Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-surface text-[10.5px] sm:text-[11px] font-mono text-umber uppercase tracking-telemetry mb-3 sm:mb-4 border border-black/[0.05]">
              <Sparkles className="w-3 h-3 text-ochre" />
              <span>Slow Travel Monograph</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-carbon tracking-tightest leading-[1.1] mb-3 sm:mb-5">
              Where stillness meets <br className="hidden sm:inline" />
              <em className="font-serif italic font-normal text-terracotta">the horizon.</em>
            </h1>

            {/* Poetic Narrative */}
            <p className="text-xs sm:text-sm md:text-base text-slate-muted max-w-xl font-normal leading-relaxed mb-5 sm:mb-7 mx-auto lg:mx-0">
              An independent slow-travel compendium documenting meditative architecture, 
              century-old culinary lineages, and unhurried boutique stays across six distinct global landscapes.
            </p>
          </div>

          {/* Statistics / Telemetry Strip (Displayed below the image on mobile, appearing up) */}
          <div className="p-3 sm:p-4 rounded-2xl bg-stone-surface/80 border border-black/[0.06] shadow-sm w-full box-border">
            <div className="grid grid-cols-3 gap-2 text-center sm:text-left">
              <div className="flex flex-col justify-center">
                <span className="text-[9.5px] sm:text-[11px] font-mono text-slate-muted uppercase tracking-telemetry">
                  Havens
                </span>
                <span className="font-mono text-xs sm:text-base font-semibold text-carbon mt-0.5">
                  06 Cities
                </span>
              </div>
              <div className="flex flex-col justify-center border-x border-black/[0.06] px-2 sm:px-4">
                <span className="text-[9.5px] sm:text-[11px] font-mono text-slate-muted uppercase tracking-telemetry">
                  Stays
                </span>
                <span className="font-mono text-xs sm:text-base font-semibold text-terracotta mt-0.5">
                  18 Stays
                </span>
              </div>
              <div className="flex flex-col justify-center pl-1 sm:pl-2">
                <span className="text-[9.5px] sm:text-[11px] font-mono text-slate-muted uppercase tracking-telemetry">
                  Tours & Gems
                </span>
                <span className="font-mono text-xs sm:text-base font-semibold text-ochre mt-0.5">
                  18 Tours
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Region Filter Chips (Positioned right below, leading into the city cards) */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full min-w-0 pt-3 sm:pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 box-border"
      >
        <div className="w-full min-w-0 overflow-x-auto no-scrollbar flex items-center gap-2 py-1">
          <span className="text-[10.5px] sm:text-[11px] font-mono uppercase tracking-telemetry text-slate-muted shrink-0 mr-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-terracotta" />
            <span>Select Region:</span>
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            {CONTINENTS.map((continent) => {
              const isActive = activeContinent === continent;
              return (
                <button
                  key={continent}
                  onClick={() => onSelectContinent(continent)}
                  className={`px-3.5 sm:px-4 py-1.5 min-h-[38px] rounded-full text-xs font-mono transition-all duration-300 border touch-manipulation whitespace-nowrap ${
                    isActive
                      ? 'bg-carbon text-white border-carbon shadow-sm'
                      : 'bg-white hover:bg-stone-surface text-carbon border-black/[0.08]'
                  }`}
                >
                  {continent}
                </button>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-muted shrink-0">
          <Compass className="w-3.5 h-3.5 text-terracotta" />
          <span>Curated slow travel field notes across 6 destinations</span>
        </div>
      </motion.div>
    </section>
  );
}
