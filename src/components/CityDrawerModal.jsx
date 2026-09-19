import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Bookmark,
  MapPin,
  Calendar,
  Compass,
  Star,
  ExternalLink,
  Camera,
  Sparkles,
  BedDouble,
  Lightbulb,
  MessageSquareQuote,
} from 'lucide-react';
import { useSavedTrips } from '../context/SavedTripsContext';
import ReviewForm from './ReviewForm';

export default function CityDrawerModal({
  city,
  onClose,
  onOpenLightbox,
  onOpenBooking,
  cityReviews,
  onAddReview,
}) {
  const [activeTab, setActiveTab] = useState('overview');
  const { isCitySaved, toggleSaveCity, isStaySaved, toggleSaveStay, isGemSaved, toggleSaveGem } =
    useSavedTrips();

  const isSaved = isCitySaved(city.id);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Compass },
    { id: 'stays', label: `Stays (${city.stays.length})`, icon: BedDouble },
    { id: 'gems', label: `Gems (${city.underratedGems.length})`, icon: Lightbulb },
    { id: 'reviews', label: `Reviews (${cityReviews.length})`, icon: MessageSquareQuote },
    { id: 'gallery', label: 'Gallery', icon: Camera },
  ];

  const allPhotos = [
    {
      url: city.heroImage.url,
      alt: city.heroImage.alt,
      title: `${city.name} Landscape`,
      credit: city.heroImage.credit,
      category: 'Cover Scenery',
    },
    ...city.gallery,
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-stretch sm:justify-end bg-black/60 backdrop-blur-sm overflow-hidden">
        {/* Backdrop Close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Adaptive Panel: Bottom Sheet on Mobile, Slide-Over on Desktop */}
        <motion.div
          initial={{ y: '100%', opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 240 }}
          className="relative w-full sm:max-w-3xl h-[92dvh] sm:h-full bg-alabaster shadow-modal sm:border-l border-black/[0.08] rounded-t-[2rem] sm:rounded-none flex flex-col z-10 overflow-hidden"
        >
          {/* Mobile Tactile Pull Handle */}
          <div className="sm:hidden pt-2.5 pb-1 flex justify-center bg-white">
            <div className="w-12 h-1.5 bg-black/20 rounded-full" />
          </div>

          {/* Drawer Header */}
          <div className="px-5 py-4 sm:p-8 bg-white border-b border-black/[0.06] flex items-center justify-between shrink-0">
            <div className="flex flex-col">
              <div 
                className={`flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-telemetry ${
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
                <span>{city.continent}</span>
                <span>•</span>
                <span>{city.country}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-carbon tracking-tight">
                {city.name}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {/* Bookmark City Button */}
              <button
                onClick={() => toggleSaveCity(city)}
                aria-label={isSaved ? `Remove ${city.name} from saved` : `Save ${city.name}`}
                className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 min-h-[40px] rounded-full text-xs font-mono border transition-all touch-manipulation ${
                  isSaved
                    ? 'bg-terracotta text-white border-terracotta shadow-sm'
                    : 'bg-stone-surface hover:bg-stone-light text-carbon border-black/[0.08]'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Bookmark'}</span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close Dossier"
                className="w-10 h-10 rounded-full bg-stone-surface hover:bg-stone-light text-carbon flex items-center justify-center transition-colors touch-manipulation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Drawer Tab Navigation */}
          <div className="px-4 sm:px-8 bg-white border-b border-black/[0.06] flex gap-1.5 overflow-x-auto shrink-0 no-scrollbar py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 min-h-[40px] rounded-xl text-xs font-mono transition-all duration-200 whitespace-nowrap touch-manipulation ${
                    isActive ? 'text-carbon font-semibold' : 'text-slate-muted hover:text-carbon'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="drawerTabIndicator"
                      className="absolute inset-0 bg-stone-surface rounded-xl -z-10 shadow-sm"
                      transition={{ type: 'spring', damping: 22, stiffness: 260 }}
                    />
                  )}
                  <Icon className="w-3.5 h-3.5 stroke-[1.5]" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8 pb-16 sm:pb-8">
            {/* TAB 1: OVERVIEW & VIBE */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Hero Header Photo */}
                <div 
                  className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer group shadow-sm border border-black/[0.06]"
                  onClick={() => onOpenLightbox(allPhotos[0], allPhotos, 0)}
                >
                  <img
                    src={city.heroImage.url}
                    alt={city.heroImage.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 flex items-center justify-between text-white text-[11px] sm:text-xs font-mono">
                    <span className="truncate pr-2">{city.heroImage.caption}</span>
                    <span className="flex items-center gap-1 shrink-0 opacity-90 group-hover:opacity-100 bg-black/40 px-2 py-0.5 rounded-full">
                      <Camera className="w-3.5 h-3.5" /> Lightbox
                    </span>
                  </div>
                </div>

                {/* Key Telemetry Bento Box */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                  <div className="p-1.5 sm:p-2">
                    <span className="text-[10px] font-mono text-slate-muted uppercase tracking-telemetry block">
                      Best Season
                    </span>
                    <span className="text-xs font-mono font-medium text-carbon mt-0.5 block">
                      {city.bestSeason.split('&')[0]}
                    </span>
                  </div>
                  <div className="p-1.5 sm:p-2">
                    <span className="text-[10px] font-mono text-slate-muted uppercase tracking-telemetry block">
                      Currency
                    </span>
                    <span className="text-xs font-mono font-medium text-carbon mt-0.5 block">
                      {city.currency}
                    </span>
                  </div>
                  <div className="p-1.5 sm:p-2">
                    <span className="text-[10px] font-mono text-slate-muted uppercase tracking-telemetry block">
                      Coordinates
                    </span>
                    <span className="text-xs font-mono font-medium text-carbon mt-0.5 block">
                      {city.coordinates.display.split(',')[0]}
                    </span>
                  </div>
                  <div className="p-1.5 sm:p-2">
                    <span className="text-[10px] font-mono text-slate-muted uppercase tracking-telemetry block">
                      Local Weather
                    </span>
                    <span className="text-xs font-mono font-medium text-carbon mt-0.5 block">
                      {city.weather.temp} • {city.weather.condition.split('&')[0]}
                    </span>
                  </div>
                </div>

                {/* Poetic Narrative Prose */}
                <div className="space-y-4 text-sm sm:text-base text-carbon/90 font-normal leading-relaxed">
                  <h3 className="font-serif text-xl sm:text-2xl text-carbon">Notes on Place & Atmosphere</h3>
                  {city.narrative.map((paragraph, idx) => (
                    <p key={idx} className="text-slate-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 2: STAYS & LODGING */}
            {activeTab === 'stays' && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl sm:text-2xl text-carbon">Curated Boutique Stays</h3>
                  <span className="text-xs font-mono text-slate-muted">3 Handpicked</span>
                </div>

                <div className="space-y-4">
                  {city.stays.map((stay) => {
                    const isStayBookmarked = isStaySaved(stay.id);
                    return (
                      <div
                        key={stay.id}
                        className="p-4 sm:p-6 rounded-2xl bg-white border border-black/[0.06] shadow-subtle-ambient"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                          <div>
                            <div className="flex items-center gap-2 text-[10.5px] sm:text-xs font-mono text-terracotta uppercase tracking-telemetry mb-1">
                              <span>{stay.style}</span>
                              <span>•</span>
                              <span>{stay.neighborhood}</span>
                            </div>
                            <h4 className="font-serif text-xl sm:text-2xl text-carbon">{stay.name}</h4>
                          </div>

                          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                            <span className="px-2.5 py-1 rounded-full bg-stone-surface text-carbon font-mono text-[11px] sm:text-xs font-medium">
                              {stay.priceTier}
                            </span>
                            <button
                              onClick={() => toggleSaveStay(stay, city)}
                              aria-label={isStayBookmarked ? `Remove ${stay.name}` : `Save ${stay.name}`}
                              className={`w-9 h-9 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all touch-manipulation ${
                                isStayBookmarked
                                  ? 'bg-terracotta text-white border-terracotta'
                                  : 'bg-stone-surface hover:bg-stone-light text-carbon border-black/[0.08]'
                              }`}
                            >
                              <Bookmark className={`w-3.5 h-3.5 ${isStayBookmarked ? 'fill-current' : ''}`} />
                            </button>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mb-3 sm:mb-4">
                          {stay.summary}
                        </p>

                        {/* Perks */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                          {stay.perks.map((perk, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-stone-surface/70 text-slate-muted text-[11px] sm:text-xs font-mono flex items-center gap-1.5"
                            >
                              <Sparkles className="w-3 h-3 text-terracotta shrink-0" />
                              {perk}
                            </span>
                          ))}
                        </div>

                        {/* Booking Action */}
                        <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
                          <span className="text-[10.5px] sm:text-[11px] font-mono text-slate-muted">
                            {stay.pricePerNight}
                          </span>
                          <button
                            onClick={() => onOpenBooking(stay)}
                            className="island-btn py-1.5 px-3.5 sm:py-2 sm:px-4 text-xs"
                          >
                            <span>Inquire / Reserve</span>
                            <span className="island-btn-icon w-6 h-6">
                              <ExternalLink className="w-3 h-3" />
                            </span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 3: UNDERRATED GEMS */}
            {activeTab === 'gems' && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl sm:text-2xl text-carbon">Underrated Sanctuaries</h3>
                  <span className="text-xs font-mono text-slate-muted">3 Quiet Discoveries</span>
                </div>

                <div className="space-y-4">
                  {city.underratedGems.map((gem) => {
                    const isGemBookmarked = isGemSaved(gem.id);
                    return (
                      <div
                        key={gem.id}
                        className="p-4 sm:p-6 rounded-2xl bg-white border border-black/[0.06] shadow-subtle-ambient"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <span className="text-[11px] sm:text-xs font-mono text-sage-dark uppercase tracking-telemetry block mb-1">
                              {gem.category}
                            </span>
                            <h4 className="font-serif text-xl sm:text-2xl text-carbon">{gem.name}</h4>
                          </div>

                          <button
                            onClick={() => toggleSaveGem(gem, city)}
                            aria-label={isGemBookmarked ? `Remove ${gem.name}` : `Save ${gem.name}`}
                            className={`w-9 h-9 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all touch-manipulation ${
                              isGemBookmarked
                                ? 'bg-sage text-white border-sage'
                                : 'bg-stone-surface hover:bg-stone-light text-carbon border-black/[0.08]'
                            }`}
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${isGemBookmarked ? 'fill-current' : ''}`} />
                          </button>
                        </div>

                        {/* Insider Tip Box */}
                        <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-xl bg-stone-surface/60 border border-black/[0.05]">
                          <div className="flex items-center gap-1.5 text-xs font-mono text-carbon font-semibold mb-1">
                            <Lightbulb className="w-3.5 h-3.5 text-terracotta" />
                            <span>Insider Field Note</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-normal">
                            {gem.insiderTip}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 4: REVIEWS & USER SUBMISSION */}
            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl sm:text-2xl text-carbon">Traveler Field Notes</h3>
                  <span className="text-xs font-mono text-slate-muted">
                    {cityReviews.length} Notes
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {cityReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-4 sm:p-6 rounded-2xl bg-white border border-black/[0.06] shadow-subtle-ambient"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <div>
                          <h4 className="font-serif text-lg sm:text-xl text-carbon">{rev.author}</h4>
                          <p className="text-[11px] sm:text-xs font-mono text-slate-muted mt-0.5">
                            {rev.archetype} • {rev.country}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-ochre text-ochre" />
                          ))}
                        </div>
                      </div>

                      {/* Praise */}
                      <div className="mb-2.5">
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-telemetry text-sage-dark block mb-0.5">
                          Praise
                        </span>
                        <p className="text-xs sm:text-sm text-carbon/90 leading-relaxed italic font-serif">
                          "{rev.praise}"
                        </p>
                      </div>

                      {/* Caveat */}
                      {rev.caveat && (
                        <div className="p-3 rounded-xl bg-stone-surface/60 border border-black/[0.05]">
                          <span className="text-[10px] font-mono uppercase tracking-telemetry text-terracotta block mb-0.5">
                            Honest Caveat / Advice
                          </span>
                          <p className="text-xs text-slate-muted leading-relaxed font-mono">
                            {rev.caveat}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Review Submission Form */}
                <ReviewForm cityId={city.id} onAddReview={onAddReview} />
              </motion.div>
            )}

            {/* TAB 5: PHOTO GALLERY */}
            {activeTab === 'gallery' && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl sm:text-2xl text-carbon">Visual Monograph</h3>
                  <span className="text-xs font-mono text-slate-muted">
                    {allPhotos.length} Plates
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {allPhotos.map((photo, index) => (
                    <div
                      key={index}
                      onClick={() => onOpenLightbox(photo, allPhotos, index)}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-stone-surface border border-black/[0.06]"
                    >
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                        <span className="text-[11px] font-mono uppercase tracking-telemetry bg-black/50 px-2 py-0.5 rounded-full w-max">
                          {photo.category || 'Landscape'}
                        </span>
                        <div>
                          <h5 className="font-serif text-base">{photo.title || photo.alt}</h5>
                          <p className="text-[10px] font-mono opacity-80 mt-0.5">
                            Credit: {photo.credit}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
