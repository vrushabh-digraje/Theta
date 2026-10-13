import type { FC } from 'react';
import { Link } from 'react-router-dom';

// Division Imagery matching each unit's engineering field
import controlsImg from '../assets/images/hero_PAut1.jpg';
import defenceImg from '../assets/images/hero_DS1.jpg';
import iotImg from '../assets/images/hero_IoT1.jpg';
import testImg from '../assets/images/hero_split_electronics.jpg';

// Official corporate and partner logos
import thetaLogo from '../assets/images/theta_logo.png';
import niLogo from '../assets/images/ni.png';

interface MetricItem {
  label: string;
  value: string;
  icon: string;
}

interface GroupCompanyItem {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  logo?: string;
  logoText?: string;
  link: string;
  tags: string[];
  metrics: MetricItem[];
}

const companies: GroupCompanyItem[] = [
  {
    id: 'theta-controls',
    badge: '01 / FLAGSHIP',
    name: 'Theta Controls & Systems',
    tagline: 'Industrial Automation & Process Controls',
    description: 'Precision PID controllers, thyristor regulators, paperless recorders, and custom control panels fabricated since 1981.',
    icon: 'domain',
    image: controlsImg,
    logo: thetaLogo,
    logoText: 'Flagship (Est. 1981)',
    link: '/industrial-automation',
    tags: ['CRISIL MSME 2B', '7,600 sq.ft Facility', 'Pune HQ'],
    metrics: [
      { label: 'Founded', value: '1981 (40+ Yrs)', icon: 'history' },
      { label: 'Facility', value: '7,600 sq.ft Pune', icon: 'domain' },
    ],
  },
  {
    id: 'theta-defence',
    badge: '02 / DEFENCE',
    name: 'Theta Defence & Aerospace',
    tagline: 'Mission-Critical Defence Electronics',
    description: 'Ruggedized tactical motor drives, telemetry modules, and robotic manipulator electronics for DRDO and ROV platforms.',
    icon: 'shield',
    image: defenceImg,
    logoText: 'DRDO Strategic Partner',
    link: '/defence-systems',
    tags: ['DRDO Partner', 'ROV Daksh Subsystems', 'MIL-STD Rugged'],
    metrics: [
      { label: 'Partner', value: 'DRDO Strategic', icon: 'military_tech' },
      { label: 'Platform', value: 'ROV Daksh Units', icon: 'smart_toy' },
    ],
  },
  {
    id: 'theta-iot',
    badge: '03 / IOT & EDGE',
    name: 'Theta IoT Technologies',
    tagline: 'Smart Telemetry, Gateways & Edge Computing',
    description: 'Industry 4.0 IoT gateways, wireless multi-gas safety networks, and encrypted cloud telemetry for hazardous plants.',
    icon: 'sensors',
    image: iotImg,
    logoText: 'Industry 4.0 Telemetry',
    link: '/iot-components',
    tags: ['Wireless Gas Detection', 'Cloud Telemetry', 'Edge Gateways'],
    metrics: [
      { label: 'Protocol', value: 'MQTT / Cloud Telemetry', icon: 'hub' },
      { label: 'Sensors', value: 'Wireless Multi-Gas', icon: 'gas_meter' },
    ],
  },
  {
    id: 'theta-test',
    badge: '04 / TEST SYSTEMS',
    name: 'Theta Test & Automation',
    tagline: 'Turnkey Integration & Automated Test Equipment',
    description: 'National Instruments Silver Alliance Partner delivering high-speed DAQ rigs and automated End-of-Line (EOL) testers.',
    icon: 'precision_manufacturing',
    image: testImg,
    logo: niLogo,
    logoText: 'NI Silver Alliance Partner',
    link: '/system-integration',
    tags: ['NI Silver Alliance', 'LabVIEW DAQ', 'EOL Testers'],
    metrics: [
      { label: 'Alliance', value: 'NI Silver Partner', icon: 'workspace_premium' },
      { label: 'Platform', value: 'LabVIEW DAQ Systems', icon: 'developer_board' },
    ],
  },
];

/**
 * GroupCompanies component presenting the 4 core corporate divisions.
 * Enhanced with related imagery banners, official logos, punchy short content,
 * capability metrics, and smooth interactive hover animations.
 */
import { Reveal, RevealGroup, RevealItem } from './Reveal';

export const GroupCompanies: FC = () => {
  return (
    <section 
      id="group-companies" 
      className="bg-surface-container/50 border-y border-outline-variant/15 py-16 sm:py-20 lg:py-24 relative z-10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin">
        
        {/* Section Header with Reveal */}
        <Reveal>
          <div className="w-full mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
            <span className="font-body text-[11px] sm:text-xs font-semibold text-secondary tracking-[0.35em] mb-3 sm:mb-4 uppercase block select-none">
              Corporate Ecosystem
            </span>
            <h2 className="font-display text-[26px] sm:text-[36px] lg:text-[42px] font-semibold text-primary mb-4 sm:mb-5 leading-tight select-none transition-all duration-300 hover:text-secondary cursor-default">
              Group Companies
            </h2>
            <p className="font-body text-xs sm:text-sm lg:text-base text-on-surface-variant leading-relaxed">
              Four specialized engineering divisions operating under THETA Controls, delivering 
              integrated solutions from field sensors and defence hardware to cloud telemetry.
            </p>
          </div>
        </Reveal>

        {/* 4 Divisions Responsive Grid with Staggered Entrance */}
        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <RevealItem key={company.id} className="h-full">
              <Link
                to={company.link}
                className="flex flex-col h-full bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer text-left decoration-none"
              >
              {/* Card Media Header: Related Image Banner + Logo Badge + Division Badge */}
              <div className="relative h-44 w-full overflow-hidden bg-surface-container-low shrink-0">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Division Number Badge (Top-Left) */}
                <span className="absolute top-3 left-3 bg-primary/90 text-white backdrop-blur-xs text-[10px] font-bold font-body uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-xs">
                  {company.badge}
                </span>

                {/* Brand Logo / Trust Badge (Top-Right) */}
                <div className="absolute top-3 right-3 flex items-center">
                  {company.logo ? (
                    <div className="bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-xs shadow-xs flex items-center border border-white/20">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} Logo`} 
                        className="h-3.5 w-auto object-contain" 
                      />
                    </div>
                  ) : (
                    <span className="inline-flex items-center gap-1 bg-secondary/90 text-white backdrop-blur-xs text-[9px] font-bold px-2 py-0.5 rounded-xs uppercase tracking-wider shadow-xs">
                      <span className="material-symbols-outlined text-[11px]">verified</span>
                      {company.logoText}
                    </span>
                  )}
                </div>

                {/* Bottom Bar on Image: Floating Icon Badge & Division Index */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xs bg-secondary text-white flex items-center justify-center shadow-md border border-white/20 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 pointer-events-auto">
                      <span className="material-symbols-outlined text-[18px]">{company.icon}</span>
                    </div>
                    <span className="font-body text-[10px] font-bold text-white/95 uppercase tracking-widest drop-shadow-sm truncate">
                      {company.name.split(' ')[1] || 'Division'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  {/* Company Name */}
                  <h3 className="font-display text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-1 leading-snug">
                    {company.name}
                  </h3>

                  {/* Sub-tagline */}
                  <p className="font-body text-[11px] font-semibold text-secondary mb-2.5 tracking-wide line-clamp-1">
                    {company.tagline}
                  </p>

                  {/* Short, Punchy Description */}
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4 line-clamp-2">
                    {company.description}
                  </p>

                  {/* Key Capability Metric Chips */}
                  <div className="grid grid-cols-2 gap-1.5 mb-3.5 pt-3 border-t border-outline-variant/15">
                    {company.metrics.map((metric, idx) => (
                      <div 
                        key={idx} 
                        className="bg-surface-container-low/70 border border-outline-variant/10 p-1.5 rounded-xs flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-secondary text-[14px] shrink-0">
                          {metric.icon}
                        </span>
                        <div className="overflow-hidden min-w-0">
                          <span className="font-body text-[8px] text-outline uppercase tracking-wider block">
                            {metric.label}
                          </span>
                          <span className="font-body text-[10px] font-bold text-primary truncate block">
                            {metric.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Capability Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {company.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="inline-block bg-surface-container-low text-on-surface text-[9px] font-medium px-1.5 py-0.5 rounded-xs border border-outline-variant/10 group-hover:border-secondary/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link with Arrow */}
                <div className="pt-3 border-t border-outline-variant/15 flex items-center justify-between text-[11px] font-bold text-secondary tracking-wider uppercase group-hover:text-primary transition-colors">
                  <span>Explore Division</span>
                  <span className="material-symbols-outlined text-[14px] transition-transform duration-300 group-hover:translate-x-1.5">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>

      </div>
    </section>
  );
};

export default GroupCompanies;
