import React, { useState, useMemo, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FilterBar from './components/FilterBar';
import CityGrid from './components/CityGrid';
import CityDrawerModal from './components/CityDrawerModal';
import PhotoLightbox from './components/PhotoLightbox';
import BookingModal from './components/BookingModal';
import ItineraryDrawer from './components/ItineraryDrawer';
import InteractiveMapBar from './components/InteractiveMapBar';
import Footer from './components/Footer';
import { CITIES_DATA } from './data/citiesData';
import { useSavedTrips } from './context/SavedTripsContext';
import { Compass, MapPin, Search, Bookmark } from 'lucide-react';

const REVIEWS_STORAGE_KEY = 'horizons_custom_reviews_v1';

export default function App() {
  const [activeContinent, setActiveContinent] = useState('All');
  const [activeVibe, setActiveVibe] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);

  const { totalSavedCount, setIsDrawerOpen } = useSavedTrips();

  // Lightbox State
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    photo: null,
    photos: [],
    currentIndex: 0,
  });

  // Booking Modal State
  const [bookingStay, setBookingStay] = useState(null);

  // Map Explorer Modal State
  const [isMapOpen, setIsMapOpen] = useState(false);

  // Search input ref for Navbar & Mobile Bar trigger
  const searchInputRef = useRef(null);

  // Reviews state with localStorage persistence for user-submitted reviews
  const [reviewsState, setReviewsState] = useState(() => {
    try {
      const stored = localStorage.getItem(REVIEWS_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to parse custom reviews from localStorage', e);
    }
    // Initialize with default reviews from CITIES_DATA
    const initial = {};
    CITIES_DATA.forEach((city) => {
      initial[city.id] = city.reviews;
    });
    return initial;
  });

  useEffect(() => {
    try {
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviewsState));
    } catch (e) {
      console.warn('Failed to persist custom reviews to localStorage', e);
    }
  }, [reviewsState]);

  const handleAddReview = (cityId, newReview) => {
    setReviewsState((prev) => ({
      ...prev,
      [cityId]: [newReview, ...(prev[cityId] || [])],
    }));
  };

  // Filtered Cities
  const filteredCities = useMemo(() => {
    return CITIES_DATA.filter((city) => {
      // Continent filter
      if (activeContinent !== 'All' && city.continent !== activeContinent) {
        return false;
      }

      // Vibe filter
      if (activeVibe !== 'all') {
        const matchesVibe =
          city.vibe.toLowerCase() === activeVibe.toLowerCase() ||
          city.theme.toLowerCase().includes(activeVibe.toLowerCase());
        if (!matchesVibe) return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const inName = city.name.toLowerCase().includes(query);
        const inCountry = city.country.toLowerCase().includes(query);
        const inTagline = city.tagline.toLowerCase().includes(query);
        const inTheme = city.theme.toLowerCase().includes(query);
        const inStays = city.stays.some((s) => s.name.toLowerCase().includes(query));
        const inGems = city.underratedGems.some((g) => g.name.toLowerCase().includes(query));
        if (!inName && !inCountry && !inTagline && !inTheme && !inStays && !inGems) {
          return false;
        }
      }

      return true;
    });
  }, [activeContinent, activeVibe, searchQuery]);

  const handleResetFilters = () => {
    setActiveContinent('All');
    setActiveVibe('all');
    setSearchQuery('');
  };

  const handleFocusSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleOpenLightbox = (photo, photos, index) => {
    setLightbox({
      isOpen: true,
      photo,
      photos,
      currentIndex: index,
    });
  };

  const handleSelectCityById = (cityId) => {
    const target = CITIES_DATA.find((c) => c.id === cityId);
    if (target) {
      setSelectedCity(target);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden relative flex flex-col bg-alabaster text-carbon selection:bg-stone-surface selection:text-carbon pb-20 md:pb-0">
      {/* Floating Navigation Pill */}
      <Navbar
        onOpenMap={() => setIsMapOpen(true)}
        onFocusSearch={handleFocusSearch}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Editorial Hero Section */}
        <HeroSection
          activeContinent={activeContinent}
          onSelectContinent={setActiveContinent}
        />

        {/* Filter Bar & Search */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeVibe={activeVibe}
          onSelectVibe={setActiveVibe}
          resultCount={filteredCities.length}
          searchInputRef={searchInputRef}
        />

        {/* City Bento Grid Showcase */}
        <CityGrid
          cities={filteredCities}
          onSelectCity={setSelectedCity}
          onResetFilters={handleResetFilters}
        />
      </main>

      {/* Footer Colophon */}
      <Footer />

      {/* MOBILE FLOATING BOTTOM DOCK (Thumb-Friendly Ergonomics) */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-40 pointer-events-none flex justify-center">
        <div className="pointer-events-auto flex items-center justify-around gap-1 px-4 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-elevated w-full max-w-sm">
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center justify-center p-1.5 min-w-[56px] text-carbon hover:text-terracotta transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span className="text-[9.5px] font-mono mt-0.5">Explore</span>
          </button>

          <button
            onClick={() => setIsMapOpen(true)}
            className="flex flex-col items-center justify-center p-1.5 min-w-[56px] text-carbon hover:text-terracotta transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-[9.5px] font-mono mt-0.5">Map</span>
          </button>

          <button
            onClick={handleFocusSearch}
            className="flex flex-col items-center justify-center p-1.5 min-w-[56px] text-carbon hover:text-terracotta transition-colors"
          >
            <Search className="w-4 h-4" />
            <span className="text-[9.5px] font-mono mt-0.5">Search</span>
          </button>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="relative flex flex-col items-center justify-center p-1.5 min-w-[56px] text-carbon hover:text-terracotta transition-colors"
          >
            <Bookmark className="w-4 h-4" />
            <span className="text-[9.5px] font-mono mt-0.5">Saved</span>
            {totalSavedCount > 0 && (
              <span className="absolute top-0 right-3 w-4 h-4 rounded-full bg-terracotta text-white text-[9px] font-mono flex items-center justify-center">
                {totalSavedCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Deep-Dive City Drawer / Bottom Sheet Modal */}
      {selectedCity && (
        <CityDrawerModal
          city={selectedCity}
          cityReviews={reviewsState[selectedCity.id] || selectedCity.reviews}
          onAddReview={handleAddReview}
          onClose={() => setSelectedCity(null)}
          onOpenLightbox={handleOpenLightbox}
          onOpenBooking={(stay) => setBookingStay({ stay, city: selectedCity })}
        />
      )}

      {/* Fullscreen Photo Lightbox */}
      {lightbox.isOpen && (
        <PhotoLightbox
          photo={lightbox.photo}
          photos={lightbox.photos}
          currentIndex={lightbox.currentIndex}
          onClose={() => setLightbox({ ...lightbox, isOpen: false })}
          onSelectIndex={(index) =>
            setLightbox({
              ...lightbox,
              currentIndex: index,
              photo: lightbox.photos[index],
            })
          }
        />
      )}

      {/* Booking / Lodging Inquiry Modal */}
      {bookingStay && (
        <BookingModal
          stay={bookingStay.stay}
          city={bookingStay.city}
          onClose={() => setBookingStay(null)}
        />
      )}

      {/* Saved Itinerary Slide-Out Drawer / Bottom Sheet */}
      <ItineraryDrawer onSelectCityById={handleSelectCityById} />

      {/* Global Coordinates & Map Explorer */}
      <InteractiveMapBar
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        onSelectCity={(city) => setSelectedCity(city)}
      />
    </div>
  );
}
