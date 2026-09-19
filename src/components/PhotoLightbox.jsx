import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function PhotoLightbox({ photo, photos = [], onClose, onSelectIndex, currentIndex }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex > 0) onSelectIndex(currentIndex - 1);
      if (e.key === 'ArrowRight' && currentIndex < photos.length - 1) onSelectIndex(currentIndex + 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, photos.length, onClose, onSelectIndex]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
        {/* Backdrop Close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Top Control Bar */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-white/80 pointer-events-auto">
          <div className="flex items-center gap-2 font-mono text-xs tracking-telemetry">
            <Camera className="w-4 h-4 stroke-[1.5]" />
            <span>
              EXHIBIT {currentIndex + 1} / {photos.length}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectIndex(currentIndex - 1);
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {currentIndex < photos.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectIndex(currentIndex + 1);
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Main Image Container */}
        <motion.div
          key={photo.url}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center pointer-events-auto z-10"
        >
          <img
            src={photo.url}
            alt={photo.alt}
            className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
          />

          {/* Photo Metadata Caption */}
          <div className="mt-4 text-center text-white/90 max-w-xl">
            <h4 className="font-serif text-lg tracking-tight font-normal">
              {photo.title || photo.alt}
            </h4>
            <div className="flex items-center justify-center gap-3 mt-1 text-xs font-mono text-white/60">
              <span>{photo.category || 'Landscape'}</span>
              <span>•</span>
              <span>Credit: {photo.credit}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
