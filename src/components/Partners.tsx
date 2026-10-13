import type { FC } from 'react';

// Cropped 9 Principals logos matching reference specification
import hirschmannLogo from '../assets/images/principals/hirschmann.png';
import beldenLogo from '../assets/images/principals/belden.png';
import niLogo from '../assets/images/principals/ni.png';
import brainchildLogo from '../assets/images/principals/brainchild.png';
import jkLogo from '../assets/images/principals/jk.png';
import roboteqLogo from '../assets/images/principals/roboteq.png';
import autonicsLogo from '../assets/images/principals/autonics.png';
import tibboLogo from '../assets/images/principals/tibbo.png';
import dinoliteLogo from '../assets/images/principals/dinolite.png';

interface PrincipalItem {
  id: string;
  name: string;
  logo: string;
  websiteUrl: string;
  websiteDisplay: string;
}

const principals: PrincipalItem[] = [
  // Row 1
  {
    id: 'hirschmann',
    name: 'Hirschmann – A Belden Brand',
    logo: hirschmannLogo,
    websiteUrl: 'https://www.belden.com/products/industrial-networking-cybersecurity/hirschmann',
    websiteDisplay: 'belden.com/hirschmann',
  },
  {
    id: 'belden',
    name: 'Belden',
    logo: beldenLogo,
    websiteUrl: 'https://www.belden.com',
    websiteDisplay: 'belden.com',
  },
  {
    id: 'ni',
    name: 'National Instruments (Silver Alliance Partner)',
    logo: niLogo,
    websiteUrl: 'https://www.ni.com',
    websiteDisplay: 'ni.com',
  },
  // Row 2
  {
    id: 'brainchild',
    name: 'BrainChild Electronic Co., Ltd.',
    logo: brainchildLogo,
    websiteUrl: 'https://www.brainchild.com.tw',
    websiteDisplay: 'brainchild.com.tw',
  },
  {
    id: 'jk',
    name: 'JK Instruments',
    logo: jkLogo,
    websiteUrl: 'https://www.jkinstruments.com',
    websiteDisplay: 'jkinstruments.com',
  },
  {
    id: 'roboteq',
    name: 'RoboteQ',
    logo: roboteqLogo,
    websiteUrl: 'https://www.roboteq.com',
    websiteDisplay: 'roboteq.com',
  },
  // Row 3
  {
    id: 'autonics',
    name: 'Autonics – Sensors & Controllers',
    logo: autonicsLogo,
    websiteUrl: 'https://www.autonics.com',
    websiteDisplay: 'autonics.com',
  },
  {
    id: 'tibbo',
    name: 'Tibbo Technology',
    logo: tibboLogo,
    websiteUrl: 'https://tibbo.com',
    websiteDisplay: 'tibbo.com',
  },
  {
    id: 'dinolite',
    name: 'Dino-Lite Digital Microscope',
    logo: dinoliteLogo,
    websiteUrl: 'https://www.dino-lite.com',
    websiteDisplay: 'dino-lite.com',
  },
];

/**
 * Principals component displaying the 9 official technology principals.
 * Section header styled to match the existing homepage sections (Group Companies, Industries, What We Do)
 * with a category tracker, bold H2, subtitle, and an interactive 3x3 logo card grid.
 */
import { Reveal, RevealGroup, RevealItem } from './Reveal';

export const Partners: FC = () => {
  return (
    <section 
      id="principals" 
      className="bg-surface-container/50 border-t border-outline-variant/15 py-16 sm:py-20 lg:py-24 relative z-10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin">
        
        {/* Section Header with Reveal */}
        <Reveal>
          <div className="w-full mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
            <span className="font-body text-[11px] sm:text-xs font-semibold text-secondary tracking-[0.35em] mb-3 sm:mb-4 uppercase block select-none">
              Strategic Alliances & Brands
            </span>
            <h2 className="font-display text-[26px] sm:text-[36px] lg:text-[42px] font-semibold text-primary mb-4 sm:mb-5 leading-tight select-none transition-all duration-300 hover:text-secondary cursor-default">
              Principals
            </h2>
            <p className="font-body text-xs sm:text-sm lg:text-base text-on-surface-variant leading-relaxed">
              Authorized global technology principals delivering certified industrial networking, sensors, 
              motion control, and test instrumentation with direct factory warranty and support.
            </p>
          </div>
        </Reveal>

        {/* 3x3 Grid Layout with Staggered Entrance */}
        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch">
          {principals.map((item) => (
            <RevealItem key={item.id} className="h-full">
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-full p-5 sm:p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs transition-all duration-300 group hover:-translate-y-1 hover:shadow-md shadow-2xs"
                title={`Visit official ${item.name} website`}
              >
                {/* Logo Tile */}
                <div className="h-16 sm:h-20 w-full flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-full max-w-[190px] sm:max-w-[210px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

      </div>
    </section>
  );
};

export default Partners;
