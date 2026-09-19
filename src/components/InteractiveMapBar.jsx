import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Compass, Clock, CloudSun, ArrowUpRight, Globe, Layers } from 'lucide-react';
import { CITIES_DATA } from '../data/citiesData';

export default function InteractiveMapBar({ isOpen, onClose, onSelectCity }) {
  const [selectedCityId, setSelectedCityId] = useState(CITIES_DATA[0].id);
  const selectedCity = CITIES_DATA.find((c) => c.id === selectedCityId) || CITIES_DATA[0];
  const [mobileTab, setMobileTab] = useState('map'); // 'map' or 'destinations'

  // Calculate local time for selected city
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-US', {
          timeZone: selectedCity.weather.timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setCurrentTime(timeString);
      } catch (e) {
        setCurrentTime('12:00 PM');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [selectedCity]);

  if (!isOpen) return null;

  // Convert lat/lng to approximate SVG 2D mercator positions (viewBox: 0 0 1000 500)
  const getCoordinates = (lat, lng) => {
    const x = ((lng + 180) * (1000 / 360));
    const latRad = (lat * Math.PI) / 180;
    const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const y = 250 - (500 * mercN) / (2 * Math.PI);
    return { x: Math.max(20, Math.min(980, x)), y: Math.max(20, Math.min(480, y)) };
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/70 backdrop-blur-md">
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-alabaster rounded-t-[2rem] sm:rounded-3xl border border-black/[0.08] shadow-modal overflow-hidden pointer-events-auto flex flex-col h-[90dvh] sm:max-h-[90vh]"
        >
          {/* Mobile Pull Handle */}
          <div className="sm:hidden pt-2.5 pb-1 flex justify-center bg-white">
            <div className="w-12 h-1.5 bg-black/20 rounded-full" />
          </div>

          {/* Header */}
          <div className="p-4 sm:p-6 bg-white border-b border-black/[0.06] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 rounded-full bg-carbon text-white flex items-center justify-center">
                <Compass className="w-4 h-4 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-carbon leading-tight">Coordinates Explorer</h3>
                <p className="text-[10.5px] sm:text-xs font-mono text-slate-muted">
                  6 Global Sanctuaries Plotted
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Mobile View Toggle */}
              <div className="sm:hidden flex items-center bg-stone-surface rounded-full p-0.5 border border-black/[0.06]">
                <button
                  onClick={() => setMobileTab('map')}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-all ${
                    mobileTab === 'map' ? 'bg-carbon text-white' : 'text-slate-muted'
                  }`}
                >
                  Map
                </button>
                <button
                  onClick={() => setMobileTab('destinations')}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-all ${
                    mobileTab === 'destinations' ? 'bg-carbon text-white' : 'text-slate-muted'
                  }`}
                >
                  Cities (6)
                </button>
              </div>

              <button
                onClick={onClose}
                aria-label="Close Map"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-stone-surface hover:bg-stone-light text-carbon flex items-center justify-center transition-colors touch-manipulation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body: Map View or Mobile Destination List */}
          <div className="relative flex-1 bg-[#F2F0EB] p-3 sm:p-8 flex flex-col items-center justify-center overflow-y-auto">
            {/* Show Map (Always on desktop, conditional on mobile) */}
            <div className={`w-full ${mobileTab === 'destinations' ? 'hidden sm:block' : 'block'}`}>
              <div className="relative w-full aspect-[2/1] max-w-4xl bg-white/70 rounded-2xl border border-black/[0.06] p-2 overflow-hidden shadow-inner">
                {/* Subtle Mercator Grid Lines */}
                <svg className="w-full h-full" viewBox="0 0 1000 500">
                  {/* Latitudinal Rings */}
                  <line x1="0" y1="125" x2="1000" y2="125" stroke="rgba(24,24,27,0.06)" strokeDasharray="4 4" />
                  <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(24,24,27,0.12)" />
                  <line x1="0" y1="375" x2="1000" y2="375" stroke="rgba(24,24,27,0.06)" strokeDasharray="4 4" />

                  {/* Longitudinal Meridians */}
                  <line x1="250" y1="0" x2="250" y2="500" stroke="rgba(24,24,27,0.06)" strokeDasharray="4 4" />
                  <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(24,24,27,0.12)" />
                  <line x1="750" y1="0" x2="750" y2="500" stroke="rgba(24,24,27,0.06)" strokeDasharray="4 4" />

                  {/* Plotted City Pinpoints */}
                  {CITIES_DATA.map((city) => {
                    const { x, y } = getCoordinates(city.coordinates.lat, city.coordinates.lng);
                    const isSelected = selectedCity.id === city.id;

                    return (
                      <g
                        key={city.id}
                        onClick={() => setSelectedCityId(city.id)}
                        className="cursor-pointer group"
                      >
                        {isSelected && (
                          <circle
                            cx={x}
                            cy={y}
                            r="16"
                            fill="none"
                            stroke="#C26D53"
                            strokeWidth="1.5"
                            opacity="0.6"
                            className="animate-ping"
                          />
                        )}
                        <circle
                          cx={x}
                          cy={y}
                          r={isSelected ? '7' : '4.5'}
                          fill={isSelected ? '#C26D53' : '#18181B'}
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />
                        <text
                          x={x}
                          y={y - 12}
                          textAnchor="middle"
                          fill="#18181B"
                          fontSize="11"
                          fontFamily="JetBrains Mono"
                          fontWeight={isSelected ? '600' : '400'}
                          className="select-none pointer-events-none"
                        >
                          {city.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Mobile Destination Cards View */}
            {mobileTab === 'destinations' && (
              <div className="w-full sm:hidden space-y-2.5 max-w-md my-auto">
                {CITIES_DATA.map((city) => {
                  const isSelected = selectedCity.id === city.id;
                  return (
                    <div
                      key={city.id}
                      onClick={() => setSelectedCityId(city.id)}
                      className={`p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-white border-carbon shadow-sm'
                          : 'bg-white/60 border-black/[0.06]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={city.heroImage.url}
                          alt={city.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-terracotta uppercase tracking-telemetry">
                            <span>{city.continent}</span>
                            <span>•</span>
                            <span>{city.country}</span>
                          </div>
                          <h5 className="font-serif text-base text-carbon leading-tight">{city.name}</h5>
                          <span className="text-[10px] font-mono text-slate-muted">{city.coordinates.display}</span>
                        </div>
                      </div>

                      <div className="text-right font-mono text-xs text-slate-muted">
                        <span className="text-carbon font-semibold block">{city.weather.temp}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Selected City Telemetry Bar */}
            <div className="w-full max-w-4xl mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 shadow-subtle-ambient shrink-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={selectedCity.heroImage.url}
                  alt={selectedCity.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 text-[10.5px] sm:text-xs font-mono text-terracotta uppercase tracking-telemetry">
                    <span>{selectedCity.continent}</span>
                    <span>•</span>
                    <span>{selectedCity.country}</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-carbon leading-tight">
                    {selectedCity.name}
                  </h4>
                  <p className="text-[10.5px] sm:text-xs font-mono text-slate-muted truncate max-w-[220px] sm:max-w-none">
                    {selectedCity.coordinates.display}
                  </p>
                </div>
              </div>

              {/* Real-time details */}
              <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6 border-t sm:border-t-0 sm:border-l border-black/[0.06] pt-2.5 sm:pt-0 sm:pl-6 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-slate-muted block uppercase tracking-telemetry">
                    Local Time
                  </span>
                  <span className="font-semibold text-carbon flex items-center gap-1 mt-0.5 text-xs sm:text-sm">
                    <Clock className="w-3 h-3 text-slate-muted" />
                    {currentTime || 'Syncing...'}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-muted block uppercase tracking-telemetry">
                    Weather
                  </span>
                  <span className="font-semibold text-carbon flex items-center gap-1 mt-0.5 text-xs sm:text-sm">
                    <CloudSun className="w-3 h-3 text-slate-muted" />
                    {selectedCity.weather.temp}
                  </span>
                </div>

                <button
                  onClick={() => {
                    onSelectCity(selectedCity);
                    onClose();
                  }}
                  className="island-btn py-1.5 px-3.5 sm:py-2 sm:px-4 ml-auto text-xs"
                >
                  <span>Open Dossier</span>
                  <span className="island-btn-icon w-6 h-6">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
