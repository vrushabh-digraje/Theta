import { FC } from 'react';
import { Link } from 'react-router-dom';

// Asset Images
import bannerHeroImg from '../assets/images/hero_PAut1.jpg';
import prSeriesImg from '../assets/images/recorders/pr_series_banner.jpg';
import thplrSeriesImg from '../assets/images/recorders/th_plr_series_banner.jpg';
import aerospaceImg from '../assets/images/recorders/aerospace_pr_banner.jpg';

/**
 * Dedicated Landing Page for Theta Controls & Systems.
 * Implements approved layout from Landing_Page_Content.pdf:
 * - Hero / Main banner with direct CTAs
 * - Featured Products (PR Series & Power Regulators)
 * - Explore Our Products & Solutions (The 5 core solutions)
 * - Hidden SEO Keywords: Applications & Industries (per client note: keywords only, do not include in UI)
 * - Find the Right Product or Solution CTA
 * - Sub-group Specific Identity / Footer card for Theta Controls and Systems Pvt Ltd.
 */
export const IndustrialAutomation: FC = () => {
  const productSolutions = [
    {
      id: 'paperless-recorders',
      number: '01',
      title: 'Paperless Recorders',
      description: 'Monitor, record and manage your process data with 21 CFR Part 11 compliant touch interfaces and secure historical archiving.',
      link: '/products/paperless-recorders/pr-series',
      linkText: 'Explore Paperless Recorders →',
      icon: 'monitoring',
    },
    {
      id: 'power-regulators',
      number: '02',
      title: 'Power Regulators',
      description: 'Flexible power control solutions for industrial applications, supporting phase angle, zero cross-over (ZCO), and digital firing modes.',
      link: '/products',
      linkText: 'Explore Power Regulators →',
      icon: 'bolt',
    },
    {
      id: 'pid-controllers',
      number: '03',
      title: 'PID Controllers',
      description: 'Reliable process monitoring and control featuring auto-tuning PID algorithms, multi-sensor inputs, and dual relay/analog outputs.',
      link: '/products',
      linkText: 'Explore PID Controllers →',
      icon: 'tune',
    },
    {
      id: 'aerospace-solutions',
      number: '04',
      title: 'Aerospace Solutions',
      description: 'Specialised recording and monitoring solutions for aerospace applications, AMS 2750F pyrometry compliance, and ruggedized vibration-tolerant setups.',
      link: '/products/paperless-recorders/aerospace-pr-2-0',
      linkText: 'Explore Aerospace Solutions →',
      icon: 'flight',
    },
    {
      id: 'software-solutions',
      number: '05',
      title: 'Software Solutions',
      description: 'Software capabilities for connected industrial systems. Explore software solutions for data acquisition, instrument communication, system monitoring and seamless hardware integration.',
      link: '/solutions',
      linkText: 'Explore Software Solutions →',
      icon: 'terminal',
    },
  ];

  return (
    <div className="w-full pb-20">
      {/* Hidden Keywords & Structured SEO Data per client requirement */}
      {/* "Applications & Industries (Use this section for keywords only; do not include it in the UI.)" */}
      <div className="sr-only" aria-hidden="true">
        <h2>Applications & Industries Keywords</h2>
        <p>Industrial heating systems, Furnace and heat treatment applications, Aerospace heat treatment and process recording, Temperature and process control, Industrial power control systems, Process monitoring and data recording, Industrial automation and software integration.</p>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO / MAIN BANNER */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-r from-primary via-[#002244] to-[#00142e] text-white py-16 sm:py-24 overflow-hidden border-b border-outline-variant/15">
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity pointer-events-none">
          <img
            src={bannerHeroImg}
            alt="Process Automation & Measurement"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 px-3.5 py-1 rounded-full mb-4 backdrop-blur-xs">
            <span className="material-symbols-outlined text-secondary text-[16px]">precision_manufacturing</span>
            <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
              Theta Controls & Systems
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
            Industrial Automation & Measurement Solutions
          </h1>

          <p className="font-display text-lg sm:text-2xl text-secondary font-semibold mb-6">
            Reliable solutions for process measurement, monitoring and power control.
          </p>

          <p className="font-body text-xs sm:text-sm text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
            Explore our range of industrial instrumentation, power control products, aerospace solutions and software services. 
            We bring together measurement, monitoring, control and software capabilities to support diverse engineering and industrial requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#products"
              className="px-8 py-3 bg-secondary hover:bg-white hover:text-primary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-lg cursor-pointer"
            >
              Explore Products
            </a>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FEATURED PRODUCTS */}
      {/* ========================================================================= */}
      <section id="products" className="bg-surface-container-lowest/70 py-16 sm:py-20 border-b border-outline-variant/15">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
              Featured Products
            </h2>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Show selected products from different categories, with a link to view the complete range.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Featured Product 1: PR Series */}
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs flex flex-col sm:flex-row items-center gap-6 group">
              <div className="w-full sm:w-44 h-44 rounded-xs overflow-hidden bg-surface-container shrink-0">
                <img
                  src={prSeriesImg}
                  alt="PR Series Paperless Recorder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-outline block mb-1">
                  Paperless Recorder
                </span>
                <h3 className="font-display text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                  PR Series
                </h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">
                  High-accuracy paperless recorder with bright TFT color display, multi-channel trending, and USB/Ethernet data export.
                </p>
                <Link
                  to="/products/paperless-recorders/pr-series"
                  className="inline-flex items-center gap-1 font-body text-xs font-bold text-secondary uppercase tracking-wider hover:underline"
                >
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Featured Product 2: Power Regulators */}
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs flex flex-col sm:flex-row items-center gap-6 group">
              <div className="w-full sm:w-44 h-44 rounded-xs overflow-hidden bg-surface-container shrink-0">
                <img
                  src={thplrSeriesImg}
                  alt="Power Regulators & Power Control Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-outline block mb-1">
                  Power Control Solutions
                </span>
                <h3 className="font-display text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                  Power Regulators
                </h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">
                  Precision digital power thyristor modules engineered for stable heating element control, furnaces, and process boilers.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1 font-body text-xs font-bold text-secondary uppercase tracking-wider hover:underline"
                >
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: EXPLORE OUR PRODUCTS & SOLUTIONS (THE 5 CORE OFFERINGS) */}
      {/* ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin py-16 sm:py-20 border-b border-outline-variant/15">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">
            Product Portfolio
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-primary mb-3">
            Explore Our Products & Solutions
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Discover our product portfolio and engineering capabilities across industrial automation, aerospace and software.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {productSolutions.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
            >
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xs bg-secondary/10 text-secondary font-display text-sm font-bold flex items-center justify-center shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-1.5 flex items-center gap-2">
                    <span>{item.title}</span>
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>

              <Link
                to={item.link}
                className="shrink-0 inline-flex items-center gap-1.5 font-body text-xs font-bold text-secondary uppercase tracking-wider group-hover:translate-x-1 transition-transform self-end sm:self-center"
              >
                <span>{item.linkText}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: FIND THE RIGHT PRODUCT OR SOLUTION (CTA BANNER) */}
      {/* ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin py-16 sm:py-20">
        <div className="bg-gradient-to-br from-primary via-[#002244] to-[#00142e] text-white p-8 sm:p-12 lg:p-14 rounded-xs border border-outline-variant/20 shadow-xl max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-secondary text-[11px] font-bold uppercase tracking-widest block mb-2">
              Engineering Assistance
            </span>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Find the Right Product or Solution
            </h2>

            <p className="font-body text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              Every application has different requirements. Browse our product categories or connect with our team to discuss your engineering, instrumentation or software needs.
            </p>

            <p className="font-body text-xs sm:text-sm font-semibold text-secondary max-w-xl mx-auto mb-8">
              Looking for a specific product or customised solution? Contact our team for product information, technical details and assistance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-secondary hover:bg-white hover:text-primary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-xs cursor-pointer"
              >
                Contact Us
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
              >
                Request Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SUB-GROUP SPECIFIC FOOTER / IDENTITY BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin pb-6">
        <div className="p-6 bg-surface-container-low border border-outline-variant/20 rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-body max-w-4xl mx-auto">
          <div>
            <div className="font-bold text-primary font-display text-sm mb-1">
              Theta Controls and Systems Private Limited
            </div>
            <div className="text-on-surface-variant text-[11px]">
              4TH Floor, Plot no 37, Devi House, CTS NO 1576, Shivaji Nagar, Pune, Maharashtra, 411005.
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="mailto:webleads@thetacosys.com"
              className="font-mono text-secondary font-bold hover:underline"
            >
              webleads@thetacosys.com
            </a>
            <span className="text-outline">•</span>
            <span className="text-primary font-semibold">+91-20 66 268 600</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndustrialAutomation;
