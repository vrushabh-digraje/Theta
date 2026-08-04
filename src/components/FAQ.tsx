import { FC, useState, useEffect } from 'react';

// Import images for the dynamic spotlight block
import defaultImg from '../assets/images/feature_architecture.jpg';
import industriesImg from '../assets/images/hero_PAut1.jpg';
import locationImg from '../assets/images/WHO_WE_ARE.jpg';
import productsImg from '../assets/images/hero_split_electronics.jpg';
import leadershipImg from '../assets/images/hero_network_switch.jpg';
import defenceImg from '../assets/images/hero_DS1.jpg';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What industries does THETA Controls serve?',
    answer: 'THETA Controls serves oil & gas, chemical, manufacturing, defence, and smart city sectors, providing process control instruments, industrial networking, automation systems, and IoT solutions. Our engineering team designs and manufactures equipment suited to the safety, precision, and reliability standards each industry demands, from hazardous-area monitoring to defence-grade instrumentation.',
  },
  {
    question: 'Where is THETA Controls located?',
    answer: 'THETA Controls is headquartered at 1 Electronic Estate, Unit 1, near City Pride Theatre, Satara Road, Pune, Maharashtra 411009. Our manufacturing and integration facility spans 7,600 sq.ft., housing the team and equipment needed to design, build, and test automation and control systems for clients across India.',
  },
  {
    question: 'What products does THETA Controls manufacture?',
    answer: 'THETA manufactures process control instruments, PC-based automation systems, industrial networking equipment, defence electronics, and IoT gateways. Products include PID temperature controllers, paperless recorders, thyristor power controllers, wireless gas detection systems, and embedded controllers built on 8051, ARM, and Microchip platforms.',
  },
  {
    question: 'Is THETA Controls an IIT-led company?',
    answer: 'Yes, THETA Controls is led by an IIT graduate with over three decades of experience in industrial instrumentation and automation. The company was founded in 1981 and has grown into a 75-member engineering team backed by a Crisil MSME 2B rating for financial stability.',
  },
  {
    question: 'Does THETA Controls work with government or defence organizations?',
    answer: "Yes, THETA Controls has direct experience with defence-sector projects, including controller and instrument development for DRDO and subsystem work on the ROV 'Daksh'. This defence-grade engineering discipline extends to the reliability and precision standards applied across all of THETA's industrial automation products.",
  },
];

const faqImages: { [key: number]: string } = {
  0: industriesImg,
  1: locationImg,
  2: productsImg,
  3: leadershipImg,
  4: defenceImg,
};

/**
 * FAQ component representing Section 7 (Frequently Asked Questions) of the SEO copy draft.
 * Styled as a full-bleed block spanning edge-to-edge with a subtle container background,
 * housing the centered header and the split-screen image spotlight accordion panel.
 */
export const FAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentImg, setCurrentImg] = useState<string>(defaultImg);
  const [fade, setFade] = useState<boolean>(true);

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  // Synchronize image swap with a brief opacity fade transition
  useEffect(() => {
    setFade(false);
    const targetImg = activeIndex !== null ? faqImages[activeIndex] : defaultImg;
    
    const timer = setTimeout(() => {
      setCurrentImg(targetImg);
      setFade(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Inject Google FAQPage Schema Markup (JSON-LD) dynamically
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-jsonld';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema-jsonld');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="w-full bg-surface-container border-y border-outline-variant/15 py-20 relative z-10 fade-in">
      <div className="max-w-[1560px] mx-auto px-frame-margin">
        
        {/* Section Header (Centered) */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-16 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[44px] font-semibold text-primary mb-6 leading-tight select-none transition-all duration-500 hover:text-secondary hover:tracking-wide cursor-default">
          Frequently Asked Questions
        </h2>
        </div>

        {/* Split Layout: Accordions Left, Interactive Morphing Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: FAQ Accordion Panel (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`border-b border-outline-variant/30 pb-4 px-4 transition-all duration-300 flex flex-col group/faq border-l-4 rounded-r-xs ${
                    isOpen 
                      ? 'border-l-secondary bg-surface-container-lowest/40' 
                      : 'border-l-transparent hover:border-l-secondary/30 hover:bg-surface-container-lowest/20'
                  }`}
                >
                  {/* Trigger Button */}
                  <button 
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex justify-between items-center text-left py-3 group hover:text-secondary cursor-pointer select-none"
                  >
                    <h3 className="font-display text-base sm:text-lg font-medium text-secondary transition-colors group-hover:text-primary">
                      {faq.question}
                    </h3>
                    <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${isOpen ? 'rotate-180 text-secondary' : 'text-outline'}`}>
                      expand_more
                    </span>
                  </button>

                  {/* Content Panel */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 origin-top ${
                      isOpen ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed pl-1 text-justify">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Interactive Image Spotlight (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="h-full min-h-[350px] lg:min-h-[420px] w-full bg-surface-container-low rounded-md flex relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-md cursor-pointer">
              
              {/* Subtle background tech grid pattern overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10 technical-background bg-secondary/50"></div>
              
              {/* Full-bleed background image with smooth opacity fade transition */}
              <div className="absolute inset-0 overflow-hidden rounded-md bg-black/10">
                <img 
                  src={currentImg} 
                  alt="Technical spotlight graphic representing current question" 
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    fade ? 'opacity-100 scale-100 group-hover:scale-[1.03]' : 'opacity-0 scale-[1.01]'
                  } transition-all duration-700 ease-out`}
                />
                {/* Overlay shading to slightly merge details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
