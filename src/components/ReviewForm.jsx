import React, { useState } from 'react';
import { Star, Send, Check } from 'lucide-react';

export default function ReviewForm({ cityId, onAddReview }) {
  const [author, setAuthor] = useState('');
  const [country, setCountry] = useState('');
  const [archetype, setArchetype] = useState('Architect & Designer');
  const [rating, setRating] = useState(5);
  const [praise, setPraise] = useState('');
  const [caveat, setCaveat] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !praise) return;

    const newReview = {
      id: `rev-user-${Date.now()}`,
      author,
      country: country || 'Global Traveler',
      archetype,
      date: 'Recent Field Note',
      rating,
      praise,
      caveat: caveat || 'No notable friction experienced.',
    };

    onAddReview(cityId, newReview);
    setIsSuccess(true);
    setAuthor('');
    setCountry('');
    setPraise('');
    setCaveat('');
    setTimeout(() => setIsSuccess(false), 4000);
  };

  return (
    <div className="p-6 rounded-2xl bg-stone-surface/60 border border-black/[0.06] mt-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-serif text-xl text-carbon font-normal">Add Field Note / Review</h4>
          <p className="text-xs font-mono text-slate-muted mt-0.5">
            Share authentic praise and candid caveats for fellow mindful travelers.
          </p>
        </div>
      </div>

      {isSuccess ? (
        <div className="p-4 rounded-xl bg-sage-soft/30 border border-sage/30 flex items-center gap-3 text-sage text-xs font-mono">
          <Check className="w-4 h-4 stroke-[2]" />
          <span>Your field note has been appended to this city's compendium.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-telemetry text-slate-muted mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g. Maya Lin"
                className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-black/[0.08] focus:border-carbon focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-telemetry text-slate-muted mb-1">
                Home Country
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. Denmark"
                className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-black/[0.08] focus:border-carbon focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-telemetry text-slate-muted mb-1">
                Traveler Archetype
              </label>
              <select
                value={archetype}
                onChange={(e) => setArchetype(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-black/[0.08] focus:border-carbon focus:outline-none"
              >
                <option>Architect & Designer</option>
                <option>Solo Backpacker</option>
                <option>Food & Wine Explorer</option>
                <option>Couple on Sabbatical</option>
                <option>Photographer & Essayist</option>
                <option>Cultural Historian</option>
              </select>
            </div>
          </div>

          {/* Star Rating Selection */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-telemetry text-slate-muted mb-1">
              Rating
            </label>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 text-slate-muted hover:text-ochre transition-colors"
                >
                  <Star
                    className={`w-4 h-4 ${
                      star <= rating ? 'fill-ochre text-ochre' : 'text-slate-subtle'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-mono text-slate-muted ml-2">{rating} of 5 Stars</span>
            </div>
          </div>

          {/* Praise */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-telemetry text-slate-muted mb-1">
              Authentic Praise (What resonated with you?) *
            </label>
            <textarea
              required
              rows={2}
              value={praise}
              onChange={(e) => setPraise(e.target.value)}
              placeholder="Describe sensory details, architecture, peaceful moments, or remarkable hosts..."
              className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-black/[0.08] focus:border-carbon focus:outline-none resize-none"
            />
          </div>

          {/* Caveat */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-telemetry text-slate-muted mb-1">
              Honest Caveat (What friction or realistic advice should travelers know?)
            </label>
            <textarea
              rows={2}
              value={caveat}
              onChange={(e) => setCaveat(e.target.value)}
              placeholder="Crowd timings, transport quirks, seasonal weather considerations..."
              className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-black/[0.08] focus:border-carbon focus:outline-none resize-none"
            />
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="submit"
              className="island-btn py-2 px-4"
            >
              <span className="text-xs">Publish Field Note</span>
              <span className="island-btn-icon w-6 h-6">
                <Send className="w-3 h-3" />
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
