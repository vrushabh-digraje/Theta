import type { FC } from 'react';
import { Link } from 'react-router-dom';

// Image assets imports
import pautImg from '../assets/images/hero_PAut1.jpg';
import ds1Img from '../assets/images/hero_DS1.jpg';
import inetImg from '../assets/images/hero_INet1.jpg';
import archImg from '../assets/images/feature_architecture.jpg';
import splitImg from '../assets/images/hero_split_electronics.jpg';
import iotImg from '../assets/images/hero_IoT1.jpg';

interface WhatWeDoItem {
  index: string;
  tracker: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const items: WhatWeDoItem[] = [
  {
    index: '01',
    tracker: '01 / PROCESS CONTROL',
    title: 'Process Control Instruments Manufacturer',
    description: 'THETA manufactures precision process control instruments — PID temperature controllers, paperless recorders, and thyristor power controllers — engineered for accurate monitoring of temperature, pressure, flow, and level across industrial processes, helping plants maintain consistency, reduce waste, and improve operational safety.',
    image: pautImg,
    link: '/industrial-automation',
  },
  {
    index: '02',
    tracker: '02 / INTEGRATION',
    title: 'PC-Based System Integration',
    description: 'As a Silver Alliance Partner of National Instruments, THETA builds PC-based automation solutions using LabVIEW, VB, and hardware integration with PLC, PID, and motion controllers, giving industries reliable, software-driven control over complex manufacturing and testing processes.',
    image: ds1Img,
    link: '/system-integration',
  },
  {
    index: '03',
    tracker: '03 / NETWORKING',
    title: 'Industrial Networking Solutions India',
    description: "THETA's industrial networking solutions reduce wiring complexity while improving performance through intelligent, distributed devices. Centralized or decentralized control architectures simplify installation, cut maintenance costs, and strengthen troubleshooting across large-scale industrial and infrastructure deployments.",
    image: inetImg,
    link: '/industrial-networking',
  },
  {
    index: '04',
    tracker: '04 / AUTOMATION',
    title: 'Industrial Automation Control Systems',
    description: 'Our automation control systems replace manual processes with computer- and robot-driven control, using embedded technology across 8051, Microchip, ARM, and Tibbo platforms to automate manufacturing, oil & gas, chemical, and pharmaceutical operations with precision and reliability.',
    image: archImg,
    link: '/industrial-automation',
  },
  {
    index: '05',
    tracker: '05 / DEFENCE',
    title: 'Defence Products',
    description: "THETA develops rugged controllers, instruments, and embedded electronics for India's defence sector, including work with DRDO on mission-critical subsystems, meeting the stringent reliability and performance standards required for defence and strategic applications.",
    image: splitImg,
    link: '/defence-systems',
  },
  {
    index: '06',
    tracker: '06 / IOT GATEWAYS',
    title: 'IoT Components & Gateways',
    description: "THETA's IoT gateways and wireless gas detection systems enable real-time data visualization for hazardous industrial environments, supporting scalable, cloud-based monitoring architectures that improve safety, energy efficiency, and remote diagnostics across Industry 4.0 deployments.",
    image: iotImg,
    link: '/iot-components',
  },
];

export const WhatWeDo: FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-frame-margin py-section-gap fade-in">
      {/* Header Block */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-16 text-center max-w-4xl mx-auto">
        <h2 className="font-display text-[26px] sm:text-[34px] lg:text-[40px] text-primary leading-tight mb-6 font-semibold select-none transition-all duration-500 hover:text-secondary hover:tracking-wide cursor-default">
          What We Do
        </h2>
        <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed select-none">
          From process instrumentation to defence-grade electronics, THETA Controls designs and 
          manufactures automation systems that keep critical industrial operations running safely 
          and efficiently.
        </p>
      </div>

      {/* 6 Divisions Grid matching EditorialBlocks card format */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link 
            key={item.index} 
            to={item.link}
            className="flex flex-col justify-between p-6 sm:p-8 bg-surface-container-lowest border border-outline-variant/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-secondary group cursor-pointer text-left decoration-none"
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
              <span className="font-body text-[11px] font-bold text-secondary tracking-widest block mb-4 uppercase select-none">
                {item.tracker}
              </span>

              {/* Main Card Title */}
              <h3 className="font-display text-[20px] sm:text-[22px] font-medium mb-4 text-secondary leading-tight select-none group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              {/* Description Paragraph copy */}
              <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed text-justify">
                {item.description}
              </p>
            </div>

            {/* Bottom Interactive Trigger Area */}
            <div className="mt-8">
              {/* Expanding Accent Line */}
              <div className="h-[2px] w-0 bg-secondary group-hover:w-full transition-all duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
