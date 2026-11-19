import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VenomButton } from './VenomButton';
import { SITE, WHATSAPP_URL } from '../data/portfolioData';
import { Mail, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance timeline
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
        .fromTo(titleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
        .fromTo(cardRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.4)' }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open user's mail client with the message pre-filled
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(`Project Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full text-gray-100 py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Section Title */}
      <div ref={titleRef} className="flex flex-col items-center text-center mb-10 sm:mb-14 z-10">
        <span className="text-[#D8C3A5] font-bold uppercase text-xs sm:text-sm md:text-base tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img src="/assets/icon.svg" alt="" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
          Get In Touch
        </span>
        <h2
          className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase text-white"
        >
          CONTACT.
        </h2>
        <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#D8C3A5] mt-2.5 rounded-full" />
      </div>

      {/* Card Form */}
      <div className="relative w-full max-w-4xl z-10">
        {/* Quick Connect Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with ${SITE.name} on WhatsApp`}
            className="whatsapp-card glass glass-hover flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 relative z-10 transition-all duration-300"
          >
            <span className="whatsapp-icon grid h-11 w-11 shrink-0 place-items-center rounded-xl">
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#A9A9A5]">WhatsApp</span>
              <span className="text-sm sm:text-base md:text-lg font-bold text-[#F2E8D8] truncate">{SITE.displayPhone || SITE.phone}</span>
            </span>
            <span className="whatsapp-cta ml-auto hidden shrink-0 text-xs font-bold uppercase tracking-wider sm:block">Chat now →</span>
          </a>

          <a
            href={`tel:+${SITE.phone}`}
            aria-label={`Call ${SITE.name}`}
            className="glass glass-hover flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 relative z-10 transition-all duration-300"
          >
            <span className="glass-chip grid h-11 w-11 shrink-0 place-items-center rounded-xl text-[#D8C3A5]">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#A9A9A5]">Direct Call</span>
              <span className="text-sm sm:text-base md:text-lg font-bold text-[#F2E8D8] truncate">{SITE.displayPhone || SITE.phone}</span>
            </span>
            <span className="ml-auto hidden shrink-0 text-xs font-bold uppercase tracking-wider text-[#D8C3A5] sm:block">Call now →</span>
          </a>
        </div>

        <div className="red-halo" style={{ inset: '-14% -10%' }} aria-hidden="true" />
        <div
          ref={cardRef}
          className="glass glass-panel-card w-full p-4 sm:p-7 md:p-12 rounded-2xl sm:rounded-3xl relative z-10"
        >
          {submitted ? (
            <div className="py-10 sm:py-12 flex flex-col items-center text-center">
              <div className="glass-red w-14 h-14 sm:w-16 sm:h-16 text-[#141311] rounded-full flex items-center justify-center text-2xl sm:text-3xl font-black mb-4 animate-bounce">
                ✓
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2 sm:mb-3">
                Message Dispatched!
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#B9B1A5] font-medium max-w-md">
                Thanks for reaching out! Your email app has been opened with the project details pre-filled.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
              {/* Direct Email Header Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass-chip flex items-center justify-center text-[#D8C3A5] shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">Direct Inquiries</span>
                    <a href={`mailto:${SITE.email}`} className="text-xs sm:text-sm md:text-base font-bold text-white hover:text-[#D8C3A5] transition-colors truncate block">
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-emerald-400">Open To Projects</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-gray-400">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 glass-input rounded-xl sm:rounded-2xl text-base sm:text-lg font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-gray-400">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 glass-input rounded-xl sm:rounded-2xl text-base sm:text-lg font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-gray-400">
                  Message &amp; Project Scope
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell me about your idea, timeline and what you need built..."
                  className="w-full px-4 py-3 sm:px-5 sm:py-3.5 glass-input rounded-xl sm:rounded-2xl text-base sm:text-lg font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none transition-all resize-none"
                />
              </div>

              <VenomButton type="submit" variant="primary" className="self-center mt-1 sm:mt-2 w-full sm:w-auto">
                Send Message
              </VenomButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
