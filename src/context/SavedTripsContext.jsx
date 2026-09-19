import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedTripsContext = createContext(null);

const STORAGE_KEY = 'horizons_saved_trips_v1';

export function SavedTripsProvider({ children }) {
  const [savedItems, setSavedItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to parse saved trips from localStorage', e);
    }
    return {
      cities: [],
      stays: [],
      gems: [],
    };
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems));
    } catch (e) {
      console.warn('Failed to persist saved trips to localStorage', e);
    }
  }, [savedItems]);

  const toggleSaveCity = (city) => {
    setSavedItems((prev) => {
      const exists = prev.cities.some((c) => c.id === city.id);
      if (exists) {
        return {
          ...prev,
          cities: prev.cities.filter((c) => c.id !== city.id),
        };
      } else {
        return {
          ...prev,
          cities: [...prev.cities, {
            id: city.id,
            name: city.name,
            country: city.country,
            tagline: city.tagline,
            heroImage: city.heroImage.url,
            savedAt: new Date().toISOString(),
          }],
        };
      }
    });
  };

  const isCitySaved = (cityId) => {
    return savedItems.cities.some((c) => c.id === cityId);
  };

  const toggleSaveStay = (stay, city) => {
    setSavedItems((prev) => {
      const exists = prev.stays.some((s) => s.id === stay.id);
      if (exists) {
        return {
          ...prev,
          stays: prev.stays.filter((s) => s.id !== stay.id),
        };
      } else {
        return {
          ...prev,
          stays: [...prev.stays, {
            ...stay,
            cityName: city.name,
            countryName: city.country,
            savedAt: new Date().toISOString(),
          }],
        };
      }
    });
  };

  const isStaySaved = (stayId) => {
    return savedItems.stays.some((s) => s.id === stayId);
  };

  const toggleSaveGem = (gem, city) => {
    setSavedItems((prev) => {
      const exists = prev.gems.some((g) => g.id === gem.id);
      if (exists) {
        return {
          ...prev,
          gems: prev.gems.filter((g) => g.id !== gem.id),
        };
      } else {
        return {
          ...prev,
          gems: [...prev.gems, {
            ...gem,
            cityName: city.name,
            countryName: city.country,
            savedAt: new Date().toISOString(),
          }],
        };
      }
    });
  };

  const isGemSaved = (gemId) => {
    return savedItems.gems.some((g) => g.id === gemId);
  };

  const removeItem = (type, id) => {
    setSavedItems((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item.id !== id),
    }));
  };

  const clearAllSaved = () => {
    setSavedItems({
      cities: [],
      stays: [],
      gems: [],
    });
  };

  const totalSavedCount =
    savedItems.cities.length + savedItems.stays.length + savedItems.gems.length;

  return (
    <SavedTripsContext.Provider
      value={{
        savedItems,
        toggleSaveCity,
        isCitySaved,
        toggleSaveStay,
        isStaySaved,
        toggleSaveGem,
        isGemSaved,
        removeItem,
        clearAllSaved,
        totalSavedCount,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </SavedTripsContext.Provider>
  );
}

export function useSavedTrips() {
  const context = useContext(SavedTripsContext);
  if (!context) {
    throw new Error('useSavedTrips must be used within a SavedTripsProvider');
  }
  return context;
}
