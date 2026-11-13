import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

import whoImg from '../assets/images/WHO_WE_ARE.jpg';
import ds1Img from '../assets/images/hero_DS1.jpg';
import inet1Img from '../assets/images/hero_INet1.jpg';
import iotImg from '../assets/images/hero_IoT1.jpg';
import pautImg from '../assets/images/hero_PAut1.jpg';

const slideshowImages = [
  { src: ds1Img, alt: 'Defence Systems Controls (hero_DS1)' },
  { src: inet1Img, alt: 'Industrial Networking Switches (hero_INet1)' },
  { src: iotImg, alt: 'IoT Sensors & Gateways (hero_IoT1)' },
  { src: pautImg, alt: 'Process Automation Instruments (hero_PAut1)' },
];

/**
 * Hero component rendering:
 * Section 1: Full-bleed (edge-to-edge) sliding background slideshow with left-aligned corporate copy content.
 * Section 2: "Who We Are" grid split block (left-aligned circuit image, right-aligned corporate answer copy).
 */
export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play the slideshow every 5.5 seconds, pauses when user hovers
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <>
      {/* SECTION 1: Full-Bleed Widescreen Sliding background banner with slide animation & interactive controls */}
      <div 
        className="relative w-full min-h-[580px] md:min-h-[600px] lg:aspect-[21/8] overflow-hidden bg-surface-container-low group shadow-sm z-10 flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Sliding Images Track with smooth horizontal CSS slide animation */}
        <div 
          className="absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slideshowImages.map((img, idx) => (
            <div key={idx} className="relative w-full h-full shrink-0 overflow-hidden">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover object-right md:object-center select-none"
              />
            </div>
          ))}
        </div>

        {/* Gradient Blur overlay to ensure dark text readability on the left side */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[85%] md:w-[70%] lg:w-[58%] bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/95 to-transparent z-10 pointer-events-none" />

        {/* Overlay Content Panel (Aligned with page grid layout margins) */}
        <div className="relative z-20 w-full">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-frame-margin py-12">
            <div className="max-w-md sm:max-w-lg lg:max-w-xl flex flex-col pr-6">
              
              {/* Tracker Label */}
              <span className="font-body text-[10px] sm:text-xs font-semibold text-secondary tracking-[0.35em] mb-4 sm:mb-6 uppercase select-none">
                PROCESS CONTROL & INDUSTRIAL NETWORKING
              </span>

              {/* Main Hero Title (SEO Optimized H1) */}
              <h1 className="font-display text-[24px] sm:text-[34px] lg:text-[40px] text-primary leading-[1.1] tracking-tighter mb-4 sm:mb-6 font-semibold select-none">
                Industrial Automation, Networking &<br className="hidden lg:inline" />
                Control Solutions Provider in Pune<br className="hidden sm:inline" /> | <span className="text-secondary">THETA Controls</span>
              </h1>

              {/* Description Block */}
              <p className="font-body text-xs sm:text-sm lg:text-base text-on-surface-variant leading-relaxed select-none mb-6 sm:mb-8">
                Theta Controls is an IIT-graduate-led, CRISIL-rated (MSME 2B) engineering firm specializing 
                in communication, monitoring, and control solutions. We deliver resilient architectures 
                engineered for zero-downtime reliability.
              </p>

              {/* Action Buttons with Interactive Hover scale, shadow, and color transition */}
              <div className="flex flex-wrap gap-4 select-none">
                <a 
                  href="#what-we-do"
                  className="bg-primary text-on-primary font-body text-[10px] sm:text-xs font-semibold px-6 sm:px-8 py-3.5 sm:py-4 tracking-widest hover:bg-secondary hover:text-on-secondary hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-xs hover:shadow-md uppercase cursor-pointer text-center"
                >
                  EXPLORE SOLUTIONS
                </a>
                <Link 
                  to="/contact"
                  className="border border-primary text-primary font-body text-[10px] sm:text-xs font-semibold px-6 sm:px-8 py-3.5 sm:py-4 tracking-widest hover:bg-primary hover:text-on-primary hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-xs hover:shadow-md uppercase cursor-pointer text-center"
                >
                  TALK TO SALES
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* SECTION 2: "Who We Are" Grid split block */}
      <div id="who-we-are" className="max-w-[1440px] mx-auto px-frame-margin mt-16 sm:mt-24 pt-4 pb-16 sm:pb-20 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Side: Visual Image representation (cols 1 to 6) */}
        <Reveal className="md:col-span-6 relative premium-frame overflow-hidden bg-surface-container-low select-none">
          <img 
            src={whoImg} 
            alt="Theta Controls Who We Are Visual" 
            className="w-full h-auto block select-none hover:scale-102 transition-transform duration-700 ease-out"
          />
          {/* Inner border frame overlay */}
          <div className="absolute inset-0 border-[12px] border-surface-container-lowest pointer-events-none"></div>
        </Reveal>

        {/* Right Side: Corporate answer copy (cols 7 to 12) */}
        <Reveal delay={0.15} className="md:col-span-6 flex flex-col justify-center">
          {/* H2 Heading: Who We Are */}
          <h2 className="font-display text-[26px] sm:text-[34px] lg:text-[40px] text-primary leading-tight mb-6 font-semibold select-none transition-all duration-500 hover:text-secondary hover:tracking-wide cursor-default">
            Who We Are
          </h2>
          
          {/* Verified SEO Copy Text from final draft with clean justified alignment */}
          <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed select-none text-justify">
            THETA Controls is a Pune-based industrial automation and networking company 
            established in 1981, specializing in process control instruments, PC-based system 
            integration, industrial networking, and defence electronics. Led by an IIT graduate and a 75-
            member engineering team, THETA designs, manufactures, and integrates control solutions 
            for oil & gas, chemical, manufacturing, defence, and smart city projects.
          </p>
        </Reveal>

      </div>
    </>
  );
};

export default Hero;
