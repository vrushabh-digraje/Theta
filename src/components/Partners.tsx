import type { FC } from 'react';
import { Link } from 'react-router-dom';
import hirschmannLogo from '../assets/images/hirschmann.png';
import beldenLogo from '../assets/images/belden.jpg';
import niLogo from '../assets/images/ni.png';
import dinoliteLogo from '../assets/images/dinolite.jpg';

interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  description: string;
  link: string;
}

const partners: PartnerItem[] = [
  {
    id: 'hirschmann',
    name: 'Hirschmann Electronics',
    logo: hirschmannLogo,
    description: 'As a partner for Hirschmann Electronics, THETA delivers industrial Ethernet switches and networking hardware built for rugged, high-reliability environments.',
    link: '/industrial-networking',
  },
  {
    id: 'tofino',
    name: 'Tofino Security',
    logo: beldenLogo,
    description: 'Through our Tofino Security partnership, THETA implements industrial cybersecurity solutions that protect automation networks from unauthorized access and cyber threats.',
    link: '/industrial-networking',
  },
  {
    id: 'dinolite',
    name: 'Dino-Lite',
    logo: dinoliteLogo,
    description: 'As a Dino-Lite partner, THETA provides digital microscopy solutions used for quality inspection and precision component analysis in industrial settings.',
    link: '/digital-microscopes',
  },
  {
    id: 'ni',
    name: 'National Instruments',
    logo: niLogo,
    description: 'THETA holds Silver Alliance Partner status with National Instruments, enabling advanced LabVIEW-based PC-instrumentation and test-and-measurement solutions for clients.',
    link: '/system-integration',
  },
];

/**
 * Partners component representing Section 5 (Trusted Brands & Technology Partners).
 * Styled as a responsive grid of cards with brand blue subheadings, interactive
 * card scales, and expanding bottom progress indicators on hover.
 */
export const Partners: FC = () => {
  return (
    <section className="bg-surface-container-low pt-20 pb-32 border-t border-outline-variant/15 relative z-10 fade-in mt-16">
      <div className="max-w-[1440px] mx-auto px-frame-margin">
        
        {/* Section Header */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-16 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[44px] font-semibold text-primary mb-6 leading-tight select-none transition-all duration-500 hover:text-secondary hover:tracking-wide cursor-default">
            Trusted Brands & Technology Partners
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
            THETA partners with globally recognized industrial technology brands, giving clients access 
            to certified, industry-standard components and systems.
          </p>
        </div>

        {/* Grid Layout (4 partners, responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p) => (
            <Link 
              key={p.id} 
              to={p.link}
              className="flex flex-col justify-between p-6 bg-surface-container-lowest border border-outline-variant/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-secondary group cursor-pointer text-left decoration-none"
            >
              <div>
                {/* Logo Box */}
                <div className="h-16 w-full flex items-center justify-center mb-6 bg-background rounded-sm p-3 overflow-hidden">
                  <img 
                    src={p.logo} 
                    alt={`${p.name} logo`} 
                    className="max-h-full max-w-full object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" 
                  />
                </div>
                
                {/* Partner Name Subheading (H3) */}
                <h3 className="font-display text-lg sm:text-xl font-medium text-secondary mb-3 group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                
                {/* Partner Description */}
                <p className="font-body text-xs text-on-surface-variant leading-relaxed text-justify">
                  {p.description}
                </p>
              </div>

              {/* Bottom Interactive Area (with Learn More CTA) */}
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-secondary group-hover:text-primary transition-colors duration-300 uppercase">
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1.5">
                    arrow_forward
                  </span>
                </div>
                {/* Expanding Accent Line */}
                <div className="h-[2px] w-0 bg-secondary group-hover:w-full transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
