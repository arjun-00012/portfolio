import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_PRICING } from '../data/portfolioData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
        .fromTo(titleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
        .fromTo(
          '.service-item',
          { y: 25, opacity: 0, x: -10 },
          { y: 0, opacity: 1, x: 0, duration: 0.45, stagger: 0.07, ease: 'back.out(1.4)' },
          '-=0.2'
        );


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full text-gray-100 py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Section Title */}
      <div ref={titleRef} className="flex flex-col items-center text-center mb-12 z-10">
        <span className="text-[#D8C3A5] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img src="/assets/icon.svg" alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
          What I Do
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white"
        >
          SERVICES &amp; PRICING.
        </h2>
        <div className="w-12 h-1 bg-[#D8C3A5] mt-2 rounded-full" />
      </div>

      {/* Service cards: glass rows, service on the left, price chip + action on the right */}
      <ul ref={listRef} className="grid-blur relative list-none p-0 m-0 w-full max-w-4xl flex flex-col gap-3.5 md:gap-4 z-10">
        {SERVICES_PRICING.map((service, i) => {
          const featured = 'featured' in service && service.featured;
          return (
            <li key={service.id} className="service-item">
              <a
                href="#contact"
                className="glass glass-grid-card group relative flex h-full flex-row items-center gap-3.5 p-4 sm:p-5 md:gap-6 md:p-5 rounded-2xl sm:rounded-3xl outline-none"
              >
                {/* Index */}
                <span className="glass-chip shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-xs sm:text-sm font-black tabular-nums text-gray-200 group-hover:text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Name + price */}
                <div className="flex-1 min-w-0 flex flex-col gap-1 sm:gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm sm:text-base md:text-xl text-gray-100 group-hover:text-[#D8C3A5] transition-colors truncate sm:whitespace-normal">
                      {service.title}
                    </h3>
                    {featured && (
                      <span className="glass-chip-red inline-block mt-1 text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full text-[#141311]">
                        Specialty
                      </span>
                    )}
                  </div>

                  <div className="sm:text-right shrink-0 flex items-center gap-2 sm:block">
                    <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:block sm:mb-1">
                      {service.priceLabel}
                    </span>
                    <span className="glass-chip inline-block text-[11px] sm:text-xs md:text-base font-black tabular-nums px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-gray-100 group-hover:text-white">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <span
                  aria-hidden="true"
                  className="glass-chip shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-gray-300
                    group-hover:[background-image:linear-gradient(145deg,rgba(216,195,165,0.6),rgba(140,121,96,0.45))]
                    group-hover:border-[rgba(216,195,165,0.45)] group-hover:text-[#141311]"
                >
                  <ArrowUpRight
                    className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 w-full max-w-4xl text-center text-[11px] md:text-xs text-gray-500 leading-relaxed z-10">
        *Final pricing depends on features, complexity, timeline and project scope.
      </p>
    </section>
  );
};
