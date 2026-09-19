import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Bookmark, CloudSun, MapPin } from 'lucide-react';
import { useSavedTrips } from '../context/SavedTripsContext';

export default function CityCard({ city, onSelectCity, index }) {
  const { isCitySaved, toggleSaveCity } = useSavedTrips();
  const isSaved = isCitySaved(city.id);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="double-bezel group flex flex-col h-full w-full min-w-0 box-border"
    >
      <div className="double-bezel-inner flex-1 flex flex-col overflow-hidden transition-all duration-300 group-hover:border-black/15">
        {/* Cover Photography with Aspect Ratio & Badges */}
        <div 
          onClick={() => onSelectCity(city)}
          className="relative aspect-[16/10] sm:aspect-[16/10] overflow-hidden bg-stone-surface cursor-pointer"
        >
          <img
            src={city.heroImage.url}
            alt={city.heroImage.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

          {/* Top Badges: Weather & Bookmark */}
          <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between pointer-events-auto">
            {/* Live Weather Pill */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/95 text-[10.5px] sm:text-[11px] font-mono border border-white/15">
              <CloudSun className="w-3 h-3 stroke-[1.5] text-amber-300" />
              <span>{city.weather.temp}</span>
              <span className="text-white/40">•</span>
              <span className="truncate max-w-[90px] sm:max-w-[120px]">{city.weather.condition}</span>
            </div>

            {/* Bookmark Action (44px touch area) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSaveCity(city);
              }}
              aria-label={isSaved ? `Remove ${city.name} from saved` : `Save ${city.name}`}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 border touch-manipulation ${
                isSaved
                  ? 'bg-terracotta text-white border-terracotta shadow-sm scale-105'
                  : 'bg-black/50 hover:bg-black/80 text-white/90 border-white/20'
              }`}
            >
              <Bookmark className={`w-4 h-4 stroke-[1.5] ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Bottom Photo Overlay Info */}
          <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between text-white/85 text-[10.5px] sm:text-[11px] font-mono pointer-events-none">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 stroke-[1.5]" />
              {city.country}
            </span>
            <span className="text-white/70 tracking-telemetry">
              {city.coordinates.elevation}
            </span>
          </div>
        </div>

        {/* Card Editorial Content */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Eyebrow / Region & Theme with bespoke city color */}
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-muted uppercase tracking-telemetry mb-2">
              <span>{city.continent}</span>
              <span 
                className={`font-medium ${
                  city.accentColor === 'ochre'
                    ? 'text-ochre'
                    : city.accentColor === 'plum'
                    ? 'text-plum'
                    : city.accentColor === 'aegean'
                    ? 'text-aegean'
                    : city.accentColor === 'sage'
                    ? 'text-sage'
                    : city.accentColor === 'umber'
                    ? 'text-umber'
                    : 'text-terracotta'
                }`}
              >
                {city.theme.split('&')[0].trim()}
              </span>
            </div>

            {/* City Title */}
            <h2 
              onClick={() => onSelectCity(city)}
              className="font-serif text-2xl sm:text-3xl font-normal text-carbon tracking-tight mb-1.5 cursor-pointer hover:text-terracotta transition-colors"
            >
              {city.name}
            </h2>

            {/* Tagline / Subtitle */}
            <p className="text-xs sm:text-sm text-slate-muted line-clamp-2 leading-relaxed mb-4 sm:mb-6">
              {city.tagline}
            </p>
          </div>

          {/* Card Footer: Telemetry & Nested CTA Button */}
          <div className="pt-3.5 sm:pt-4 border-t border-black/[0.06] flex items-center justify-between gap-2">
            <div className="flex flex-col text-[10.5px] sm:text-[11px] font-mono text-slate-muted">
              <span className="text-carbon font-medium">3 Stays • 3 Gems</span>
              <span className="truncate max-w-[130px] sm:max-w-none">Best: {city.bestSeason.split('&')[0].trim()}</span>
            </div>

            <button
              onClick={() => onSelectCity(city)}
              className="island-btn group/btn"
              aria-label={`Explore complete dossier for ${city.name}`}
            >
              <span className="text-xs tracking-wide">Explore Dossier</span>
              <span className="island-btn-icon">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
