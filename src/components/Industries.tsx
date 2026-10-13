import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface IndustryItem {
  name: string;
  description: string;
  icon: string;
  link: string;
}

const industries: IndustryItem[] = [
  {
    name: 'Oil & Gas',
    description: 'THETA supplies process control instruments and wireless gas detection systems for oil & gas operations, supporting safe monitoring in hazardous environments.',
    icon: 'oil_barrel',
    link: '/industrial-automation',
  },
  {
    name: 'Chemical',
    description: 'Our control systems help chemical plants maintain accurate temperature, pressure, and flow regulation, reducing waste and improving process safety.',
    icon: 'science',
    link: '/industrial-automation',
  },
  {
    name: 'Manufacturing',
    description: "THETA's automation and networking solutions streamline manufacturing operations, cutting downtime and improving production consistency across facilities.",
    icon: 'precision_manufacturing',
    link: '/industrial-automation',
  },
  {
    name: 'Defence / DRDO',
    description: 'We design rugged, mission-ready controllers and instruments for defence applications, including direct development work with DRDO.',
    icon: 'shield',
    link: '/defence-systems',
  },
  {
    name: 'Smart City',
    description: 'THETA supports Smart City initiatives with IoT gateways and cloud-based monitoring architectures for energy efficiency and infrastructure management.',
    icon: 'location_city',
    link: '/iot-components',
  },
];

/**
 * Industries component presenting the "Industries We Serve" H2 section.
 * Renders a grid of 5 industry sectors with Material Icons, H3 tags, and interactive linking.
 */
import { Reveal, RevealGroup, RevealItem } from './Reveal';

export const Industries: FC = () => {
  return (
    <section id="industries" className="max-w-[1440px] mx-auto px-frame-margin pt-20 pb-32 relative z-10">
      {/* Section Header with Reveal */}
      <Reveal>
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-16 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[44px] font-semibold text-primary mb-6 leading-tight select-none transition-all duration-500 hover:text-secondary hover:tracking-wide cursor-default">
            Industries We Serve
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
            THETA's automation and control solutions support critical infrastructure and 
            manufacturing across five key sectors, each with distinct safety and precision requirements.
          </p>
        </div>
      </Reveal>

      {/* Grid Layout with Staggered Reveal */}
      <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, idx) => (
          <RevealItem key={idx} className="h-full">
            <Link 
              to={ind.link}
              className="flex flex-col justify-between h-full p-6 sm:p-8 bg-surface-container-lowest border border-outline-variant/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-secondary group cursor-pointer text-left decoration-none"
            >
              <div>
                {/* Sector Icon */}
                <div className="h-14 w-14 rounded-lg bg-surface-container-low flex items-center justify-center mb-6 select-none group-hover:bg-surface-container transition-colors duration-300">
                  <span className="material-symbols-outlined text-secondary text-[26px]">
                    {ind.icon}
                  </span>
                </div>
                {/* Title (H3 with brand blue color) */}
                <h3 className="font-display text-lg sm:text-xl font-medium text-secondary mb-3 group-hover:text-primary transition-colors">
                  {ind.name}
                </h3>
                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed text-justify">
                  {ind.description}
                </p>
              </div>
              
              {/* Bottom Interactive Explore Area */}
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-secondary group-hover:text-primary transition-colors duration-300 uppercase">
                  <span>View Solutions</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1.5">
                    arrow_forward
                  </span>
                </div>
                {/* Expanding Accent Line */}
                <div className="h-[2px] w-0 bg-secondary group-hover:w-full transition-all duration-300" />
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
};

export default Industries;
