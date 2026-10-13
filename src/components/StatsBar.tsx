import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

interface StatItem {
  index: string;
  label: string;
  description: string;
  link: string;
}

const stats: StatItem[] = [
  {
    index: '01',
    label: 'IIT-Led Leadership & 30+ Years Experience',
    description: 'Founded in 1981 and led by an IIT graduate, THETA brings over 30 years of instrumentation and automation expertise to every client project.',
    link: '/contact',
  },
  {
    index: '02',
    label: '75-Member Expert Team (Electronics Graduates)',
    description: 'Our 75-member team of electronics engineering graduates designs, builds, and supports automation systems in-house, ensuring quality control at every stage.',
    link: '/careers',
  },
  {
    index: '03',
    label: 'Crisil MSME 2B Rated Company',
    description: 'THETA holds a Crisil MSME 2B rating, reflecting strong financial stability and creditworthiness — a trust signal industrial buyers can verify before engaging us.',
    link: '/contact',
  },
  {
    index: '04',
    label: '7,600 sq.ft. Manufacturing & Integration Facility',
    description: 'Our 7,600 sq.ft. manufacturing and integration facility in Pune houses the equipment and workflows needed to design, build, and test solutions in-house.',
    link: '/gallery',
  },
];

/**
 * StatsBar component presenting Section 3 (Why Choose THETA Controls).
 * Reconstructed into a premium, interactive split spotlight layout (selector list on left,
 * dynamic detail board on right), completely eliminating the card grid design.
 */
import { Reveal } from './Reveal';

export const StatsBar: FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="bg-surface-container border-y border-outline-variant/15 py-20 relative z-10">
      <div className="max-w-[1440px] mx-auto px-frame-margin">
        
        {/* Section Header with Reveal */}
        <Reveal>
          <div className="w-full px-4 sm:px-6 lg:px-8 mb-16 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[44px] font-semibold text-primary mb-6 leading-tight select-none transition-all duration-500 hover:text-secondary hover:tracking-wide cursor-default">
              Why Choose THETA Controls
            </h2>
            <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Four decades of engineering discipline back every THETA solution — from leadership pedigree 
              to manufacturing scale, here's what sets us apart.
            </p>
          </div>
        </Reveal>

        {/* Spotlight Layout with Reveal */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Selector List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {stats.map((stat, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left pl-6 py-4 border-l-4 transition-all duration-300 cursor-pointer select-none rounded-r-xs ${
                    isActive 
                      ? 'border-secondary bg-surface-container-lowest shadow-xs translate-x-1' 
                      : 'border-transparent hover:border-secondary/40 hover:bg-surface-container-lowest/50'
                  }`}
                  aria-label={`Select point: ${stat.label}`}
                >
                  <span className={`font-body text-[10px] font-bold tracking-widest block mb-1.5 ${
                    isActive ? 'text-secondary' : 'text-outline/75'
                  }`}>
                    {stat.index} / TRUST VALUE
                  </span>
                  <span className={`font-display text-base font-semibold transition-colors duration-300 block ${
                    isActive ? 'text-secondary' : 'text-primary'
                  }`}>
                    {stat.label.split(' & ')[0].split(' (')[0].split(' Rated')[0].split(' Manufacturing')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Spotlight Details Panel (No card format) */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-surface-container-lowest border border-outline-variant/15 p-8 sm:p-12 rounded-xs min-h-[260px] relative overflow-hidden">
            {/* Subtle background tech grid overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] technical-background bg-secondary/50"></div>
            
            {stats.map((stat, idx) => {
              if (idx !== activeIdx) return null;
              return (
                <div key={idx} className="flex flex-col text-left fade-in relative z-10">
                  {/* Category Tag */}
                  <span className="font-body text-[10px] font-bold text-secondary tracking-widest uppercase mb-3 select-none">
                    ENGINEERING PEDIGREE
                  </span>
                  
                  {/* Title (H3 with brand blue color) */}
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-secondary mb-4 select-none">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed text-justify">
                    {stat.description}
                  </p>

                  {/* Common Get in Touch CTA Button */}
                  <Link
                    to="/contact"
                    className="bg-secondary text-on-secondary hover:bg-primary hover:text-white font-body text-[10px] sm:text-xs font-semibold px-6 sm:px-8 py-3.5 sm:py-4 tracking-widest transition-all duration-300 uppercase w-fit mt-8 flex items-center gap-2 select-none"
                  >
                    <span>GET IN TOUCH</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      </div>
    </section>
  );
};

export default StatsBar;
