import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';
import { VintageCornerOrnament, HandDrawnDivider } from './HandwrittenOrnaments';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: '2026-10-04',
    time: '19:30',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg vintage-menu-card rounded-2xl p-6 sm:p-10 border border-[#c5a059] shadow-2xl">
        <VintageCornerOrnament position="top-left" className="absolute top-2 left-2 w-8 h-8" />
        <VintageCornerOrnament position="top-right" className="absolute top-2 right-2 w-8 h-8" />
        <VintageCornerOrnament position="bottom-left" className="absolute bottom-2 left-2 w-8 h-8" />
        <VintageCornerOrnament position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8" />

        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-1 text-stone-500 hover:text-stone-900 transition-colors z-10 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle2 className="w-12 h-12 text-[#b38838] mx-auto mb-3" />
            <span className="font-royal text-xs tracking-[0.3em] uppercase text-stone-500 block mb-1">
              Confirmed Reservation
            </span>
            <h3 className="font-royal-decorative text-2xl sm:text-3xl text-stone-900 font-normal">
              Table Reserved with Honor
            </h3>
            <p className="font-royal-script text-3xl text-[#966b22] my-2">
              We look forward to hosting you, {formData.name}.
            </p>
            <div className="my-4 p-4 bg-[#f5ede1] rounded-lg border border-[#e2d5c3] text-left text-xs text-stone-700 space-y-1 font-serif-luxury text-sm">
              <p><strong>Party Size:</strong> {formData.guests}</p>
              <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
              <p><strong>Confirmation SMS:</strong> Sent to {formData.phone}</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 text-xs font-royal uppercase tracking-widest text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer"
            >
              Return to Menu
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="font-royal text-[10px] tracking-[0.35em] uppercase text-stone-500">
                Ratna Restaurant
              </span>
              <h3 className="font-royal-decorative text-2xl sm:text-3xl text-stone-900 font-normal mt-1">
                Reserve Your Dining Table
              </h3>
              <p className="font-royal-script text-2xl text-[#966b22]">
                Experience handcrafted Hyderabadi dining
              </p>
              <HandDrawnDivider className="my-3" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-royal uppercase tracking-wider text-stone-600 font-medium mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#b38838] font-serif-luxury"
                />
              </div>

              <div>
                <label className="block text-xs font-royal uppercase tracking-wider text-stone-600 font-medium mb-1">
                  Mobile Number (for SMS confirmation)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#b38838] font-serif-luxury"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-royal uppercase tracking-wider text-stone-600 font-medium mb-1 flex items-center gap-1">
                    <Users className="w-3 h-3 text-stone-500" /> Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-2 py-2 text-xs bg-white border border-[#d6c5af] rounded text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#b38838] font-serif-luxury"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>4 Guests</option>
                    <option>6 Guests</option>
                    <option>8+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-royal uppercase tracking-wider text-stone-600 font-medium mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-stone-500" /> Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-2 py-2 text-xs bg-white border border-[#d6c5af] rounded text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#b38838] font-serif-luxury"
                  />
                </div>

                <div>
                  <label className="block text-xs font-royal uppercase tracking-wider text-stone-600 font-medium mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-500" /> Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-2 py-2 text-xs bg-white border border-[#d6c5af] rounded text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#b38838] font-serif-luxury"
                  >
                    <option>12:30 PM (Lunch)</option>
                    <option>01:30 PM (Lunch)</option>
                    <option>07:30 PM (Dinner)</option>
                    <option>08:30 PM (Dinner)</option>
                    <option>09:30 PM (Dinner)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-royal uppercase tracking-wider text-stone-600 font-medium mb-1">
                  Special Dining Request or Occasion
                </label>
                <textarea
                  rows={2}
                  placeholder="Anniversary, mild spices, high-chair, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#d6c5af] rounded text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#b38838] font-serif-luxury"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-royal uppercase tracking-[0.25em] text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
