import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calendar, Sparkles, Building } from 'lucide-react';
import { useSavedTrips } from '../context/SavedTripsContext';

export default function BookingModal({ stay, city, onClose }) {
  const { toggleSaveStay, isStaySaved } = useSavedTrips();
  const isSaved = isStaySaved(stay.id);

  const [formData, setFormData] = useState({
    guestName: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.guestName || !formData.email) return;

    const ref = `HZ-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/60 backdrop-blur-md">
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ y: '100%', opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 240 }}
          className="relative w-full max-w-lg bg-white rounded-t-[2rem] sm:rounded-3xl border border-black/[0.08] shadow-modal overflow-hidden pointer-events-auto max-h-[92dvh] flex flex-col"
        >
          {/* Mobile Handle */}
          <div className="sm:hidden pt-2.5 pb-1 flex justify-center bg-stone-surface/30">
            <div className="w-12 h-1.5 bg-black/20 rounded-full" />
          </div>

          {/* Header */}
          <div className="p-5 sm:p-8 border-b border-black/[0.06] flex items-start justify-between bg-stone-surface/30 shrink-0">
            <div>
              <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-mono uppercase tracking-telemetry text-terracotta mb-1">
                <Building className="w-3.5 h-3.5" />
                <span>Boutique Lodging Inquiry</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-carbon font-normal">{stay.name}</h3>
              <p className="text-[11px] sm:text-xs font-mono text-slate-muted mt-0.5">
                {stay.neighborhood} • {city.name}, {city.country}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close booking modal"
              className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-stone-surface hover:bg-stone-light text-carbon flex items-center justify-center transition-colors touch-manipulation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 overflow-y-auto pb-10">
            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-sage-soft/30 text-sage flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 stroke-[2]" />
                </div>
                <h4 className="font-serif text-2xl text-carbon mb-2">Inquiry Dispatched</h4>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mb-6">
                  Your reservation inquiry for <strong className="text-carbon">{stay.name}</strong> has been transmitted to the host atelier.
                </p>

                <div className="p-4 rounded-xl bg-stone-surface/70 border border-black/[0.06] text-left text-xs font-mono space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-muted">Reference:</span>
                    <span className="font-semibold text-carbon">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-muted">Guest:</span>
                    <span className="text-carbon">{formData.guestName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-muted">Rate Tier:</span>
                    <span className="text-terracotta">{stay.priceTier} ({stay.pricePerNight})</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                  {!isSaved && (
                    <button
                      onClick={() => toggleSaveStay(stay, city)}
                      className="px-4 py-2.5 rounded-full bg-stone-surface hover:bg-stone-light text-carbon text-xs font-mono tracking-wide border border-black/[0.08] transition-colors min-h-[44px]"
                    >
                      Save Stay to Itinerary
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full bg-carbon hover:bg-carbon/90 text-white text-xs font-mono tracking-wide transition-colors min-h-[44px]"
                  >
                    Return to Dossier
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-3 rounded-xl bg-stone-surface/50 border border-black/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-muted">Rate Estimation:</span>
                  <span className="font-semibold text-carbon">{stay.pricePerNight}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-telemetry text-slate-muted mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.guestName}
                      onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                      placeholder="e.g. Maya Lin"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-stone-surface/40 border border-black/[0.08] focus:bg-white focus:border-carbon focus:outline-none transition-all min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-telemetry text-slate-muted mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="maya@atelier.org"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-stone-surface/40 border border-black/[0.08] focus:bg-white focus:border-carbon focus:outline-none transition-all min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-telemetry text-slate-muted mb-1">
                      Target Dates
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        placeholder="Oct 12 - Oct 17"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-stone-surface/40 border border-black/[0.08] focus:bg-white focus:border-carbon focus:outline-none transition-all min-h-[44px]"
                      />
                      <Calendar className="w-3.5 h-3.5 text-slate-muted absolute right-3 top-3.5 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-telemetry text-slate-muted mb-1">
                      Party Size
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-stone-surface/40 border border-black/[0.08] focus:bg-white focus:border-carbon focus:outline-none transition-all min-h-[44px]"
                    >
                      <option>1 Solo Traveler</option>
                      <option>2 Guests</option>
                      <option>3-4 Guests</option>
                      <option>Private Atelier Buyout</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-telemetry text-slate-muted mb-1">
                    Special Inquiries & Aesthetic Preferences
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Specific room view, tea ceremony booking, dietary preferences..."
                    className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-surface/40 border border-black/[0.08] focus:bg-white focus:border-carbon focus:outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-mono text-slate-muted hover:text-carbon transition-colors min-h-[44px]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="island-btn"
                  >
                    <span className="text-xs tracking-wide">Request Reservation</span>
                    <span className="island-btn-icon">
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
