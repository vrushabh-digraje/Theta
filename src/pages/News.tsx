import { FC, useState, useEffect } from 'react';

// Import images for the news posts
import defaultImg from '../assets/images/feature_architecture.jpg';
import welfareImg from '../assets/images/WHO_WE_ARE.jpg';
import cybersecurityImg from '../assets/images/hero_network_switch.jpg';
import drdoImg from '../assets/images/hero_DS1.jpg';
import motorImg from '../assets/images/hero_split_electronics.jpg';
import recorderImg from '../assets/images/hero_PAut1.jpg';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  readTime: string;
  category: 'Company News' | 'Technical Seminars' | 'Engineering Logs' | 'Product Updates';
  image: string;
  excerpt: string;
  content: string[];
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'PF & ESIC Act Employee Welfare Awareness Session',
    date: 'August 27, 2024',
    readTime: '3 min read',
    category: 'Company News',
    image: welfareImg,
    excerpt: 'THETA Controls hosted a comprehensive statutory benefits and provident fund awareness program at the Satara Road facility in Pune.',
    content: [
      'THETA Controls conducted a comprehensive statutory benefits awareness program on August 21, 2024. The session focused specifically on educating team members about the provisions, benefits, and welfare claims procedures associated with the Employee Provident Fund (EPF) and Employee State Insurance Corporation (ESIC) Act.',
      'Hosted at our satara road manufacturing headquarters in Pune, the seminar was attended by our 75-member engineering, production, assembly, and administrative staff. The program aimed to simplify statutory claims processes, highlighting benefits like medical coverage, maternity leave provisions, disability benefits, and long-term pension schemes.',
      'During the interactive Q&A session, management and HR representatives addressed specific queries from the manufacturing team regarding online portal logins, member registrations, and direct claim payouts. The initiative led to high employee satisfaction, underscoring THETA\'s commitment to maintaining a transparent, compliant, and supportive work culture that prioritizes employee welfare.'
    ]
  },
  {
    id: 2,
    title: 'Technical Seminar on SCADA Cybersecurity & Network Segmentation',
    date: 'August 02, 2024',
    readTime: '5 min read',
    category: 'Technical Seminars',
    image: cybersecurityImg,
    excerpt: 'Isolating process loop networks from enterprise intrusion threats using Tofino firewalls and Hirschmann industrial hardware.',
    content: [
      'On August 02, 2024, THETA Controls hosted a technical seminar for control systems engineers and cybersecurity leads in Pune. The session focused on the critical task of defending legacy SCADA (Supervisory Control and Data Acquisition) and PLC (Programmable Logic Controller) systems from modern network intrusion vectors.',
      'Led by our lead systems integration engineers in collaboration with our technology partners, Hirschmann and Tofino Security, the seminar covered several core pillars:',
      '1. Zone Segmentation: Implementing Tofino security firewalls to partition critical process control networks into isolated security zones, preventing horizontal intrusion if the corporate network is breached.',
      '2. Rugged Switches: Deploying Hirschmann industrial Ethernet switches with hardware-level port security, MAC filter bindings, and storm control limits to safeguard data packets from unauthorized physical connections.',
      '3. Signal Quality & Logging: Maintaining high signal integrity across distributed field networks to prevent telemetry packet drops that can trigger false safety shutdowns.',
      'The seminar concluded with a live hardware integration sandbox setup. Engineers simulated common industrial network threat vectors, demonstrating how modern network segmentation automatically intercepts and logs rogue packets, ensuring process safety loops remain operational.'
    ]
  },
  {
    id: 3,
    title: 'DRDO Indigenous Milestone: ROV "Daksh" Controller Integration',
    date: 'January 15, 2024',
    readTime: '4 min read',
    category: 'Product Updates',
    image: drdoImg,
    excerpt: 'Delivery of ruggedized embedded motor speed indicators and speed controllers built on ARM and custom controller platforms.',
    content: [
      'THETA Controls is pleased to announce the successful integration and delivery of tactical speed controller subsystems and microcontroller-based indicators for the Remotely Operated Vehicle (ROV) "Daksh", developed in coordination with DRDO.',
      'ROV "Daksh" is an indigenous robotic platform utilized by strategic defence forces for explosive ordnance disposal (EOD), hazardous material handling, and remote threat scanning. Operating under strategic field conditions requires subcomponents to meet extremely rigid vibration, thermal shock, and EMI/EMC compliance thresholds.',
      'THETA\'s contribution includes high-reliability motor speed controller modules built on proprietary embedded architectures (8051 and ARM platforms). These modules deliver fail-safe, real-time command processing to guide the vehicle\'s critical robotic arm movements.',
      'This milestone showcases THETA\'s capability in defence-grade microelectronics, reflecting the high engineering standards that we apply to all our commercial industrial products. We continue to support India\'s strategic sectors by developing rugged, high-reliability instrumentation.'
    ]
  },
  {
    id: 4,
    title: 'Trends in Small Brushless DC (BLDC) Motor Design & Stator Engineering',
    date: 'October 18, 2025',
    readTime: '6 min read',
    category: 'Engineering Logs',
    image: motorImg,
    excerpt: 'An engineering brief exploring magnetic pole configurations, permanent magnet materials, and thermal dissipation in 30W-1500W industrial drives.',
    content: [
      'This technical whitepaper examines the design trends in small brushless DC (BLDC) motors, focusing specifically on industrial automation drives within the 30W to 1500W power spectrum.',
      'Our engineering research focuses on three primary structural improvements:',
      '- High-Performance Permanent Magnets: Utilizing rare-earth Neodymium magnets on the rotor assembly to maximize torque-to-weight ratios, enabling smaller motor footprints without sacrificing power delivery.',
      '- Stator Laminations & Slot Fill: Optimizing winding techniques and stator lamination steel grades to minimize eddy current losses and significantly reduce cogging torque, ensuring ultra-smooth rotation at low speeds.',
      '- Embedded Controller Integration: Designing smart motor controllers that support real-time feedback loops. These loops continuously monitor current draw and adjust commutation cycles dynamically, preventing overheating and extending bearing life.',
      'By combining optimized stator geometries with smart controller diagnostics, modern BLDC drives achieve up to 90% operating efficiency. This enables predictive maintenance reporting and remote diagnostics in IoT-enabled smart factories.'
    ]
  },
  {
    id: 5,
    title: 'Process Data Integrity with Multi-Channel Paperless Recorders',
    date: 'March 11, 2026',
    readTime: '5 min read',
    category: 'Product Updates',
    image: recorderImg,
    excerpt: 'Transitioning from legacy analog charts to secure, digital logging systems with Modbus RTU connectivity for SCADA integration.',
    content: [
      'Industrial plants are increasingly transitioning from analog paper strip charts to secure digital paperless recorders to meet modern regulatory audits and ensure process data integrity.',
      'THETA Controls\' line of paperless recorders provides high-resolution data logging designed for industrial environments:',
      '- High-Definition LCD Touchscreens: Real-time visualization of temperature, pressure, flow, and level inputs across multiple channels simultaneously, with dynamic trending displays.',
      '- Data Security & Cryptography: Secure, tamper-proof internal flash memory storage with electronic signature logging, complying with data compliance standards for process audits.',
      '- SCADA & PLC Interfaces: Direct integration with PLC networks using standard Modbus RTU, RS485, and Ethernet TCP/IP protocols, reducing field wiring runs by distributing data channels.',
      'Replacing physical paper charts with digital recording eliminates mechanical chart failures, cuts paper supply costs, and allows for automated, centralized reporting directly to control room systems.'
    ]
  }
];

const categories = ['All', 'Company News', 'Technical Seminars', 'Engineering Logs', 'Product Updates'];

/**
 * News & Insights Page Component.
 * Presents a filterable list of corporate news, event updates, and engineering logs.
 * Includes a premium sliding detail drawer to read full articles inline.
 */
export const News: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  // Close detail drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter articles based on active state selection
  const filteredArticles = activeCategory === 'All'
    ? newsData
    : newsData.filter(art => art.category === activeCategory);

  return (
    <div className="w-full relative fade-in">
      
      {/* Premium Hero Header Section */}
      <section className="w-full bg-surface-container py-16 sm:py-24 border-b border-outline-variant/15 relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10 technical-background bg-secondary/50"></div>
        <div className="max-w-[1440px] mx-auto px-frame-margin text-center">
          <span className="font-body text-xs font-semibold text-secondary tracking-[0.35em] mb-4 uppercase inline-block">
            CORPORATE BLOG
          </span>
          <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-primary mb-6 leading-tight select-none">
            News & Insights
          </h1>
          <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Stay updated with corporate events at THETA Controls Pune, technical seminars, 
            product updates, and detailed engineering whitepapers.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1440px] mx-auto px-frame-margin py-16 relative z-20">
        
        {/* State-Driven Filter Toolbar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedArticle(null); // Reset detail drawer
                }}
                className={`font-body text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer select-none transition-all duration-300 ${
                  isActive
                    ? 'bg-secondary text-white shadow-md shadow-secondary/15 border border-secondary'
                    : 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface hover:bg-surface-container-low hover:border-outline'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="w-full text-center py-20 bg-surface-container-low/20 border border-outline-variant/10 rounded-md">
            <p className="font-body text-on-surface-variant text-base">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group bg-surface-container-low border border-outline-variant/15 rounded-md overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg cursor-pointer h-full"
              >
                <div>
                  {/* Aspect Ratio Image Container */}
                  <div className="w-full h-48 sm:h-52 overflow-hidden relative bg-black/10">
                    {/* Category Label Overlay */}
                    <span className="absolute top-4 left-4 bg-secondary/90 text-white text-[10px] font-semibold tracking-wider px-2.5 py-0.5 rounded-xs uppercase z-10 select-none">
                      {article.category}
                    </span>
                    <img
                      src={article.image || defaultImg}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between font-body text-xs text-outline mb-3 select-none">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-secondary transition-colors group-hover:text-primary mb-3 leading-snug">
                      {article.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed text-justify line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-outline-variant/10 flex justify-between items-center text-secondary group-hover:text-primary transition-colors select-none font-body text-xs font-semibold uppercase tracking-wider">
                  <span>Read Article</span>
                  <span className="material-symbols-outlined text-[16px] translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">
                    arrow_forward
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </section>

      {/* Slide-in Detail Drawer Modal Overlay */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-xs transition-opacity duration-300">
          
          {/* Dismissal Backdrop Hitbox */}
          <div 
            className="absolute inset-0 cursor-default" 
            onClick={() => setSelectedArticle(null)}
          />

          {/* Dynamic Sliding Content Board */}
          <div className="relative bg-surface-container-lowest w-full max-w-2xl h-full shadow-2xl p-8 sm:p-12 overflow-y-auto flex flex-col justify-between transition-transform duration-300 translate-x-0">
            
            {/* Header Area */}
            <div>
              {/* Close Action Row */}
              <div className="flex justify-between items-center mb-8">
                <span className="bg-secondary text-white text-[10px] font-semibold tracking-wider px-2.5 py-0.5 rounded-xs uppercase select-none">
                  {selectedArticle.category}
                </span>
                
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-low text-outline hover:text-primary hover:bg-surface-container-high transition-colors cursor-pointer select-none"
                  aria-label="Close article modal"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Title & Metadata */}
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-6 leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center gap-6 font-body text-xs text-outline mb-8 border-b border-outline-variant/20 pb-4 select-none">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {selectedArticle.readTime}
                </span>
              </div>

              {/* Large Image Banner */}
              <div className="w-full h-64 sm:h-80 overflow-hidden rounded-md bg-black/10 mb-8 border border-outline-variant/10">
                <img
                  src={selectedArticle.image || defaultImg}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Formatted Article Body Content */}
              <div className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-6 text-justify">
                {selectedArticle.content.map((paragraph, index) => {
                  // Bold structural bullet rendering check
                  if (paragraph.startsWith('- **') || paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ')) {
                    return (
                      <p key={index} className="pl-4 border-l-2 border-secondary/40 font-medium py-1 bg-surface-container-low/20 rounded-r-xs">
                        {paragraph}
                      </p>
                    );
                  }
                  return (
                    <p key={index}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Modal Drawer Footer */}
            <div className="mt-16 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
              <button
                onClick={() => setSelectedArticle(null)}
                className="font-body text-xs font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-2 cursor-pointer select-none"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Back to Articles
              </button>
              <span className="font-body text-[10px] text-outline select-none">
                THETA Controls Pune &copy; 2026
              </span>
            </div>

          </div>
        </div>
      )}

      {/* Newsletter Block Card */}
      <section className="max-w-[1440px] mx-auto px-frame-margin pb-20 relative z-20">
        <div className="bg-secondary py-16 px-8 sm:px-16 rounded-md text-white text-center shadow-lg relative overflow-hidden group">
          
          {/* Blueprint backdrop layout */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.08] z-10 technical-background bg-white"></div>
          
          <div className="relative z-20 max-w-2xl mx-auto">
            <span className="font-body text-[10px] font-semibold tracking-[0.4em] mb-4 uppercase block opacity-80">
              STAY INFORMED
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
              Join THETA's Engineering Log
            </h2>
            <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed mb-8">
              Receive our latest technical whitepapers, industrial cybersecurity briefs, 
              and product release updates directly to your inbox.
            </p>
            
            {/* Interactive Signup Form */}
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="flex flex-col sm:flex-row gap-3 justify-center items-stretch"
            >
              <input 
                type="email" 
                placeholder="Enter your professional email" 
                className="bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-white/50 text-white placeholder-white/50 px-5 py-3 rounded-full font-body text-sm outline-none transition-all duration-300 flex-grow max-w-md text-center sm:text-left"
                required
              />
              <button 
                type="submit"
                className="bg-white hover:bg-surface-container-lowest text-secondary hover:text-primary font-body text-xs font-semibold px-8 py-3 rounded-full cursor-pointer select-none transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                Subscribe
                <span className="material-symbols-outlined text-[16px]">send</span>
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default News;
