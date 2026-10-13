import { useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Image assets imports
import pautImg from '../assets/images/hero_PAut1.jpg';
import ds1Img from '../assets/images/hero_DS1.jpg';
import inetImg from '../assets/images/hero_INet1.jpg';
import archImg from '../assets/images/feature_architecture.jpg';
import splitImg from '../assets/images/hero_split_electronics.jpg';
import iotImg from '../assets/images/hero_IoT1.jpg';
import { Reveal } from './Reveal';

interface WhatWeDoItem {
  index: string;
  tracker: string;
  category: 'process' | 'networking' | 'defence';
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const items: WhatWeDoItem[] = [
  {
    index: '01',
    tracker: '01 / PROCESS CONTROL',
    category: 'process',
    title: 'Process Control Instruments Manufacturer',
    description: 'THETA manufactures precision process control instruments — PID temperature controllers, paperless recorders, and thyristor power controllers — engineered for accurate monitoring of temperature, pressure, flow, and level across industrial processes.',
    image: pautImg,
    link: '/industrial-automation',
    tags: ['PID Regulators', 'Paperless Logging', 'Thyristor Power'],
  },
  {
    index: '02',
    tracker: '02 / INTEGRATION',
    category: 'defence',
    title: 'PC-Based System Integration',
    description: 'As a Silver Alliance Partner of National Instruments, THETA builds PC-based automation solutions using LabVIEW, VB, and hardware integration with PLC, PID, and motion controllers, giving industries reliable, software-driven control over complex testing processes.',
    image: ds1Img,
    link: '/system-integration',
    tags: ['NI Silver Alliance', 'LabVIEW / VB', 'Motion & PLC'],
  },
  {
    index: '03',
    tracker: '03 / NETWORKING',
    category: 'networking',
    title: 'Industrial Networking Solutions India',
    description: "THETA's industrial networking solutions reduce wiring complexity while improving performance through intelligent, distributed devices. Centralized or decentralized control architectures simplify installation and strengthen troubleshooting.",
    image: inetImg,
    link: '/industrial-networking',
    tags: ['Gigabit Switches', 'Hirschmann Partner', 'Distributed I/O'],
  },
  {
    index: '04',
    tracker: '04 / AUTOMATION',
    category: 'process',
    title: 'Industrial Automation Control Systems',
    description: 'Our automation control systems replace manual processes with computer- and robot-driven control, using embedded technology across 8051, Microchip, ARM, and Tibbo platforms to automate manufacturing, oil & gas, chemical, and pharmaceutical operations.',
    image: archImg,
    link: '/industrial-automation',
    tags: ['Embedded ARM / 8051', 'Tibbo Platforms', 'Robotic Systems'],
  },
  {
    index: '05',
    tracker: '05 / DEFENCE',
    category: 'defence',
    title: 'Defence Products',
    description: "THETA develops rugged controllers, instruments, and embedded electronics for India's defence sector, including work with DRDO on mission-critical subsystems, meeting the stringent reliability and performance standards required for defence applications.",
    image: splitImg,
    link: '/defence-systems',
    tags: ['DRDO Strategic', 'ROV Daksh Subsystems', 'Rugged Controllers'],
  },
  {
    index: '06',
    tracker: '06 / IOT GATEWAYS',
    category: 'networking',
    title: 'IoT Components & Gateways',
    description: "THETA's IoT gateways and wireless gas detection systems enable real-time data visualization for hazardous industrial environments, supporting scalable, cloud-based monitoring architectures that improve safety, energy efficiency, and remote diagnostics.",
    image: iotImg,
    link: '/iot-components',
    tags: ['Wireless Gas Detection', 'MQTT / OPC-UA', 'Industry 4.0 Cloud'],
  },
];

const filterCategories = [
  { id: 'all', label: 'All Capabilities', count: 6 },
  { id: 'process', label: 'Process & Automation', count: 2 },
  { id: 'networking', label: 'Networking & IoT', count: 2 },
  { id: 'defence', label: 'Defence & Integration', count: 2 },
];

export const WhatWeDo: FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter((item) => item.category === activeFilter);

  return (
    <section id="what-we-do" className="max-w-[1440px] mx-auto px-frame-margin py-section-gap">
      {/* Header Block with subtle entrance */}
      <Reveal>
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-10 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-[26px] sm:text-[34px] lg:text-[40px] text-primary leading-tight mb-6 font-semibold select-none transition-all duration-500 hover:text-secondary hover:tracking-wide cursor-default">
            What We Do
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed select-none">
            From process instrumentation to defence-grade electronics, THETA Controls designs and 
            manufactures automation systems that keep critical industrial operations running safely 
            and efficiently.
          </p>
        </div>
      </Reveal>

      {/* Interactive Category Filter Pills */}
      <Reveal delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 select-none">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-body text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-secondary text-white shadow-xs scale-102 ring-2 ring-secondary/20'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:border-secondary border border-outline-variant/30 hover:bg-surface-container-low'
                }`}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors ${
                    isActive ? 'bg-white/25 text-white' : 'bg-surface-container-high text-outline'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Animated Filtered Cards Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.index}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Link 
                to={item.link}
                className="flex flex-col justify-between h-full p-6 sm:p-8 bg-surface-container-lowest border border-outline-variant/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-secondary group cursor-pointer text-left decoration-none rounded-xs"
              >
                <div>
                  {/* Framed Feature Image with zoom/scale hover effects */}
                  <div className="relative w-full aspect-[16/10] mb-6 overflow-hidden premium-frame bg-surface-container-low select-none">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Inner Border Overlay */}
                    <div className="absolute inset-0 border-8 border-surface-container-lowest pointer-events-none"></div>
                  </div>

                  {/* Tracker index and category label */}
                  <span className="font-body text-[11px] font-bold text-secondary tracking-widest block mb-3 uppercase select-none">
                    {item.tracker}
                  </span>

                  {/* Main Card Title */}
                  <h3 className="font-display text-[20px] sm:text-[22px] font-medium mb-3 text-secondary leading-tight select-none group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description Paragraph copy */}
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed text-justify mb-5">
                    {item.description}
                  </p>

                  {/* Interactive Capability Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2 select-none">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="font-body text-[10px] font-medium px-2 py-0.5 rounded-xs bg-surface-container-low text-on-surface-variant/90 border border-outline-variant/20 group-hover:border-secondary/40 group-hover:text-secondary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Interactive Trigger Area */}
                <div className="mt-6 pt-4 border-t border-outline-variant/15 flex items-center justify-between text-xs font-bold text-secondary uppercase tracking-wider group-hover:text-primary transition-colors">
                  <span>Explore Solutions</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1.5">
                    arrow_forward
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default WhatWeDo;
