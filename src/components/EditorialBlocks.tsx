import type { FC } from 'react';
import archImg from '../assets/images/feature_architecture.jpg';
import relImg from '../assets/images/feature_reliability.jpg';
import intelImg from '../assets/images/feature_intelligence.jpg';

interface BlockItem {
  id: string;
  tracker: string;
  title: string;
  description: string;
  image: string;
}

const blocks: BlockItem[] = [
  {
    id: 'architecture',
    tracker: '01 / ARCHITECTURE',
    title: 'Seamless Integration',
    description: 'Our process control modules and networking modules follow global standards, providing immediate plug-and-play integration with existing SCADA and PLC systems.',
    image: archImg,
  },
  {
    id: 'reliability',
    tracker: '02 / RELIABILITY',
    title: 'Zero Downtime',
    description: 'Designed for robust 24/7 operations in high-heat, high-vibration manufacturing sites, offering redundant pathways for crucial telemetry data streams.',
    image: relImg,
  },
  {
    id: 'intelligence',
    tracker: '03 / INTELLIGENCE',
    title: 'Neural Diagnostics',
    description: 'Smart IoT monitoring gateways analyze diagnostics patterns in real-time, predicting hardware failures before they disrupt your active production lines.',
    image: intelImg,
  },
];

/**
 * EditorialBlocks component representing the 3-column features/details section
 * placed beneath the Hero showcase, now enriched with premium electronic images.
 */
export const EditorialBlocks: React.FC = () => {
  return (
    <section 
      className="max-w-[1440px] mx-auto px-frame-margin grid grid-cols-1 md:grid-cols-3 gap-gutter pb-section-gap fade-in"
      style={{ animationDelay: '0.4s' }}
    >
      {blocks.map((block) => (
        <div key={block.id} className="border-t border-outline-variant/30 pt-8 flex flex-col group">
          {/* Framed Feature Image with Grayscale hover effect */}
          <div className="relative w-full aspect-square mb-6 overflow-hidden premium-frame bg-surface-container-low">
            <img 
              src={block.image} 
              alt={block.title} 
              className="w-full h-full object-cover grayscale-[0.1] group-hover:scale-105 transition-transform duration-700 select-none"
            />
            {/* Inner Border Overlay */}
            <div className="absolute inset-0 border-8 border-surface-container-lowest pointer-events-none"></div>
          </div>

          {/* Section index and division tracker */}
          <span className="font-body text-[11px] font-semibold text-secondary tracking-wider block mb-4 uppercase select-none">
            {block.tracker}
          </span>
          
          {/* Main Block Title */}
          <h3 className="font-display text-[26px] sm:text-[30px] font-medium mb-4 text-primary leading-tight select-none">
            {block.title}
          </h3>
          
          {/* Description Copy */}
          <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {block.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default EditorialBlocks;
