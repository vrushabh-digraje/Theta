import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import plrImg from '../assets/images/recorders/th_plr_series_banner.jpg';
import thetaLogo from '../assets/images/recorders/theta_logo_card.png';

export const THPLRSeriesDetail: FC = () => {
  const [activeModelTab, setActiveModelTab] = useState<'all' | 'TH-PLR-99' | 'TH-PLR-141'>('all');

  return (
    <div className="w-full pb-20">
      {/* Breadcrumb Navigation Bar */}
      <section className="bg-surface border-b border-outline-variant/15 py-4">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 font-body text-xs text-on-surface-variant">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="text-outline">/</span>
            <Link to="/products" className="hover:text-secondary transition-colors">Products</Link>
            <span className="text-outline">/</span>
            <Link to="/products?product=paperless-recorders" className="hover:text-secondary transition-colors">Paperless Recorders</Link>
            <span className="text-outline">/</span>
            <span className="font-semibold text-primary">TH-PLR Series</span>
          </nav>

          <Link
            to="/products?product=paperless-recorders"
            className="inline-flex items-center gap-1.5 font-body text-xs font-bold text-secondary hover:text-primary transition-colors uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Recorders
          </Link>
        </div>
      </section>

      {/* Hero Header Section */}
      <section className="bg-surface border-b border-outline-variant/15 py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Introduction */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full text-secondary font-body text-[11px] font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Modular Process Control
                </span>
                <span className="bg-surface-container border border-outline-variant/20 px-2.5 py-1 rounded-xs font-body text-[11px] font-semibold text-primary">
                  Models: TH-PLR-99 • TH-PLR-141
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-3">
                TH-PLR Series – Modular Paperless Recorders
              </h1>
              <p className="font-display text-lg sm:text-xl text-secondary font-medium mb-6">
                Modular Paperless Recorders for Industrial Process Monitoring and Control
              </p>

              <div className="space-y-3 font-body text-sm sm:text-base text-on-surface-variant leading-relaxed mb-8">
                <p>
                  The TH-PLR Series combines data recording, process monitoring and control functions in a compact, modular device. Designed for industrial applications, it provides a flexible way to monitor different process signals, record measurement data and manage input and output operations.
                </p>
                <p>
                  The series supports a wide range of input and output modules, allowing users to configure the recorder according to their application requirements. Its touchscreen interface provides convenient access to measurements, settings and operating information.
                </p>
                <p>
                  The TH-PLR Series is available in two models, TH-PLR-99 and TH-PLR-141, offering different display sizes and expansion capacities.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#plr-comparison"
                  className="px-5 py-2.5 bg-secondary hover:bg-secondary-dark text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs hover:shadow-md transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">table_chart</span>
                  Model Comparison
                </a>
                <Link
                  to="/contact?subject=Inquiry regarding TH-PLR Series"
                  className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs hover:shadow-md transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  Enquire Now
                </Link>
                <a
                  href="/documents/recorders/TH-PLR-Paperless_Recorder.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-secondary/10 hover:bg-secondary text-secondary hover:text-white border border-secondary/30 font-body text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs hover:shadow-md transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">description</span>
                  View Document
                </a>
                <Link
                  to="/solutions"
                  className="px-5 py-2.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-primary font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  Custom Software
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xs overflow-hidden border border-outline-variant/25 bg-surface-container-low shadow-lg group">
                <div className="h-72 sm:h-80 w-full overflow-hidden relative">
                  <img
                    src={plrImg}
                    alt="TH-PLR Series Modular Paperless Recorders"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Brand Logo (Left Side) */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-1 px-2.5 rounded-xs border border-white/40 shadow-sm flex items-center">
                    <img src={thetaLogo} alt="THETA Controls" className="h-4.5 object-contain rounded-2xs" />
                  </div>

                  {/* Feature Badge (Right Side) */}
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-xs px-3 py-1.5 rounded-xs border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    PID Control + HMI
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-secondary-fixed text-xs font-bold uppercase tracking-wider mb-1">
                      <span className="material-symbols-outlined text-[18px]">memory</span>
                      All-In-One Modular Architecture
                    </div>
                    <p className="text-xs text-white/90 font-body">
                      Up to 72 Analogue & 73 Digital Inputs • 4 GB Data Memory • 3× RS-485
                    </p>
                  </div>
                </div>

                {/* Quick Spec Highlights Strip */}
                <div className="p-4 bg-surface-container-lowest grid grid-cols-3 gap-2 border-t border-outline-variant/15 text-center">
                  <div className="p-2 bg-surface-container/60 rounded-xs">
                    <div className="font-display font-bold text-sm text-primary">8 Loops</div>
                    <div className="font-body text-[10px] text-outline uppercase tracking-wider">PID Control</div>
                  </div>
                  <div className="p-2 bg-surface-container/60 rounded-xs">
                    <div className="font-display font-bold text-sm text-primary">4 GB</div>
                    <div className="font-body text-[10px] text-outline uppercase tracking-wider">Data Memory</div>
                  </div>
                  <div className="p-2 bg-surface-container/60 rounded-xs">
                    <div className="font-display font-bold text-sm text-primary">HTML5</div>
                    <div className="font-body text-[10px] text-outline uppercase tracking-wider">Visualisation</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Features Section (10 points) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-14">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">featured_play_list</span>
          <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
            Engineering Capabilities
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-3">
          Key Features
        </h2>
        <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-3xl mb-8">
          The TH-PLR Series integrates advanced measurement, PID profile regulation, and responsive touchscreen visualisation into a unified industrial platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              1. Built-in PID and Profile Controllers
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Supports up to 8 built-in PID/profile controllers with autotuning, fuzzy logic and timer functions for process control applications.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">sensors</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              2. Multiple Measurement Inputs
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Supports universal, analogue, temperature, digital and flow measurement inputs, including voltage, current, thermocouples, RTDs, NTC, counters and rate meters.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">schema</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              3. Flexible Input Configuration
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Different input configurations are available to suit application requirements. Dedicated input types can help increase analogue input capacity and reduce configuration costs.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">touch_app</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              4. Colour Touchscreen Display
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              3.5-inch and 5.7-inch colour TFT touchscreen displays provide access to measurements, settings and operating information.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">monitoring</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              5. Advanced Process Visualisation
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Display process information using numerical values, bitmaps, graphs, bar graphs, gauges, needles and customised HTML5 pages.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">save</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              6. Flexible Data Recording
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Supports configurable recording intervals from 0.1 seconds to 24 hours, with 4 GB of standard built-in memory.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">lan</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              7. Multi-Port Communication
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Supports up to three RS-485 interfaces, which can be independently configured as Master or Slave. Ethernet and USB connectivity are also available.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">hub</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              8. Industrial Protocol Support
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Supports Modbus RTU Master/Slave, Modbus TCP Server, HTTP, Web Server and NTP protocols.
            </p>
          </div>

          {/* Feature 9 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">mouse</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              9. Keyboard and Mouse Operation
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Supports external keyboard and mouse operation for convenient interaction with the recorder.
            </p>
          </div>

          {/* Feature 10 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">view_in_ar</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              10. Compact Industrial Design
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Panel-mount design with compact dimensions and multiple power supply options.
            </p>
          </div>
        </div>
      </section>

      {/* Model Comparison Table Section */}
      <section id="plr-comparison" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">compare_arrows</span>
              <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
                Technical Specifications
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary">
              Model Comparison
            </h2>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant">
              The TH-PLR Series includes two models to suit different installation sizes and application requirements: <span className="font-semibold text-primary">TH-PLR-99</span> and <span className="font-semibold text-primary">TH-PLR-141</span>.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-surface-container p-1 rounded-xs border border-outline-variant/20">
            {(['all', 'TH-PLR-99', 'TH-PLR-141'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveModelTab(tab)}
                className={`px-3 py-1 font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                  activeModelTab === tab
                    ? 'bg-secondary text-white shadow-xs'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {tab === 'all' ? 'All Models' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Comparison Table */}
        <div className="overflow-x-auto bg-surface-container-lowest border border-outline-variant/25 rounded-xs shadow-xs">
          <table className="w-full text-left border-collapse font-body text-xs">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/20 text-primary uppercase tracking-wider font-bold text-[11px]">
                <th className="p-4 sm:p-5 w-1/3">Specification</th>
                <th className={`p-4 sm:p-5 w-1/3 ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-99' ? 'opacity-40' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span>TH-PLR-99</span>
                    <span className="text-[10px] bg-secondary/15 text-secondary px-2 py-0.5 rounded-full font-semibold">96×96 Compact</span>
                  </div>
                </th>
                <th className={`p-4 sm:p-5 w-1/3 ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-141' ? 'opacity-40' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span>TH-PLR-141</span>
                    <span className="text-[10px] bg-secondary/15 text-secondary px-2 py-0.5 rounded-full font-semibold">144×144 High Capacity</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/15 text-on-surface-variant">
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Display</td>
                <td className={`p-4 sm:p-5 font-medium ${activeModelTab === 'TH-PLR-99' ? 'bg-secondary/[0.04] font-semibold text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-99' ? 'opacity-40' : ''}`}>3.5-inch TFT colour touchscreen</td>
                <td className={`p-4 sm:p-5 font-medium ${activeModelTab === 'TH-PLR-141' ? 'bg-secondary/[0.04] font-semibold text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-141' ? 'opacity-40' : ''}`}>5.7-inch TFT colour touchscreen</td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Resolution</td>
                <td colSpan={2} className="p-4 sm:p-5 text-primary font-medium">
                  320 × 240 pixels
                </td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Universal Measurement Inputs</td>
                <td className={`p-4 sm:p-5 font-bold text-secondary ${activeModelTab === 'TH-PLR-99' ? 'bg-secondary/[0.06]' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-99' ? 'opacity-40' : ''}`}>Up to 12</td>
                <td className={`p-4 sm:p-5 font-bold text-secondary ${activeModelTab === 'TH-PLR-141' ? 'bg-secondary/[0.06]' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-141' ? 'opacity-40' : ''}`}>Up to 18</td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Analogue Inputs</td>
                <td className={`p-4 sm:p-5 font-bold text-secondary ${activeModelTab === 'TH-PLR-99' ? 'bg-secondary/[0.06]' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-99' ? 'opacity-40' : ''}`}>Up to 48</td>
                <td className={`p-4 sm:p-5 font-bold text-secondary ${activeModelTab === 'TH-PLR-141' ? 'bg-secondary/[0.06]' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-141' ? 'opacity-40' : ''}`}>Up to 72</td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Digital Inputs</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'TH-PLR-99' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-99' ? 'opacity-40' : ''}`}>Up to 49</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'TH-PLR-141' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-141' ? 'opacity-40' : ''}`}>Up to 73</td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Virtual Channels</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'TH-PLR-99' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-99' ? 'opacity-40' : ''}`}>Up to 60</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'TH-PLR-141' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-141' ? 'opacity-40' : ''}`}>Up to 90</td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Data Memory</td>
                <td colSpan={2} className="p-4 sm:p-5 text-primary font-bold">
                  4 GB internal memory
                </td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Communication Interface</td>
                <td colSpan={2} className="p-4 sm:p-5 text-primary font-medium">
                  2 × RS-485, 1 × RS-485/232, 2 × USB Host, 1 × Ethernet
                </td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Recording Interval</td>
                <td colSpan={2} className="p-4 sm:p-5">
                  0.1 seconds to 24 hours (Configurable)
                </td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Device Dimensions</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'TH-PLR-99' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-99' ? 'opacity-40' : ''}`}>96 × 96 × 100 mm</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'TH-PLR-141' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-141' ? 'opacity-40' : ''}`}>144 × 144 × 100 mm</td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Panel Cut-Out</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'TH-PLR-99' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-99' ? 'opacity-40' : ''}`}>90.5 × 90.5 mm</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'TH-PLR-141' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'TH-PLR-141' ? 'opacity-40' : ''}`}>137 × 137 mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Software, Visualisation and Communication & Control Functions */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Visualisation & Communication */}
          <div className="p-6 sm:p-8 bg-surface-container-lowest border border-outline-variant/20 rounded-xs shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">desktop_mac</span>
              <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
                System Integration
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-3">
              Software, Visualisation and Communication
            </h3>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
              The TH-PLR Series supports advanced process visualisation and communication for industrial monitoring and system integration.
            </p>

            <ul className="space-y-4 font-body text-xs text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">query_stats</span>
                <div>
                  <strong className="text-primary font-bold">Visualisation:</strong> Numerical displays, trends, graphs, gauges, bar graphs and customised HTML5 pages.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">settings_ethernet</span>
                <div>
                  <strong className="text-primary font-bold">Communication:</strong> Up to three RS-485 interfaces, Ethernet and USB connectivity.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">hub</span>
                <div>
                  <strong className="text-primary font-bold">Protocols:</strong> Modbus RTU, Modbus TCP, HTTP, Web Server and NTP.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">alt_route</span>
                <div>
                  <strong className="text-primary font-bold">Multi-Port Communication:</strong> Independent Master/Slave configuration allows communication with multiple devices through separate RS-485 ports.
                </div>
              </li>
            </ul>
          </div>

          {/* Control and Process Functions */}
          <div className="p-6 sm:p-8 bg-surface-container-lowest border border-outline-variant/20 rounded-xs shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">precision_manufacturing</span>
              <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
                Closed-Loop Regulation
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-3">
              Control and Process Functions
            </h3>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
              The TH-PLR Series combines data recording with built-in process control capabilities, eliminating external PLC hardware for standard loops.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="group p-3.5 bg-surface-container/60 hover:bg-surface-container-high hover:border-secondary/40 hover:-translate-y-0.5 rounded-xs border border-outline-variant/15 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <span className="material-symbols-outlined text-secondary text-[20px] group-hover:scale-115 transition-transform">tune</span>
                <span className="font-body text-xs font-semibold text-primary group-hover:text-secondary transition-colors">Up to 8 PID & profile controllers</span>
              </div>
              <div className="group p-3.5 bg-surface-container/60 hover:bg-surface-container-high hover:border-secondary/40 hover:-translate-y-0.5 rounded-xs border border-outline-variant/15 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <span className="material-symbols-outlined text-secondary text-[20px] group-hover:scale-115 transition-transform">auto_fix_high</span>
                <span className="font-body text-xs font-semibold text-primary group-hover:text-secondary transition-colors">Autotuning & fuzzy logic</span>
              </div>
              <div className="group p-3.5 bg-surface-container/60 hover:bg-surface-container-high hover:border-secondary/40 hover:-translate-y-0.5 rounded-xs border border-outline-variant/15 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <span className="material-symbols-outlined text-secondary text-[20px] group-hover:scale-115 transition-transform">timer</span>
                <span className="font-body text-xs font-semibold text-primary group-hover:text-secondary transition-colors">Timers, math & logical functions</span>
              </div>
              <div className="group p-3.5 bg-surface-container/60 hover:bg-surface-container-high hover:border-secondary/40 hover:-translate-y-0.5 rounded-xs border border-outline-variant/15 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <span className="material-symbols-outlined text-secondary text-[20px] group-hover:scale-115 transition-transform">calculate</span>
                <span className="font-body text-xs font-semibold text-primary group-hover:text-secondary transition-colors">Virtual channels for calculations</span>
              </div>
            </div>

            <p className="font-body text-xs text-on-surface-variant italic">
              These functions support comprehensive process monitoring and precise loop control within a single compact device.
            </p>
          </div>

        </div>
      </section>

      {/* Optional Configurations */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-16">
        <div className="bg-surface-container-low border border-outline-variant/25 rounded-xs p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">settings_input_component</span>
            <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
              Custom Modules
            </span>
          </div>
          <h2 className="font-display text-2xl font-bold text-primary mb-2">
            Optional Configurations
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-6">
            The TH-PLR Series can be configured with different hardware and modules to meet application requirements:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              'AC or DC power supply modules',
              'Universal, current, voltage, thermocouple and RTD input modules',
              'Digital input modules',
              'Analogue, relay and SSR output modules',
              'Ethernet and advanced communication modules',
              'IP65 panel sealing accessories',
              'Extended operating temperature options',
            ].map((option, idx) => (
              <div key={idx} className="group flex items-center gap-2.5 p-3 bg-surface-container-lowest hover:bg-surface-container-high/60 hover:border-secondary/40 hover:-translate-y-0.5 rounded-xs border border-outline-variant/20 transition-all duration-200 cursor-default">
                <span className="material-symbols-outlined text-secondary text-[18px] group-hover:scale-115 transition-transform">check_circle</span>
                <span className="font-body text-xs text-primary font-medium group-hover:text-secondary transition-colors">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Software Solutions Callout */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-14">
        <div className="p-6 sm:p-8 bg-surface-container-lowest border-2 border-secondary/30 rounded-xs shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[18px]">code</span>
              Custom Software Solutions
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-2">
              Looking for more than standard recorder functionality?
            </h3>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              We offer custom software solutions for paperless recorders to support your specific monitoring, data management and reporting requirements. Explore how our software solutions can help streamline your industrial operations.
            </p>
          </div>
          <Link
            to="/solutions"
            className="px-6 py-3 bg-secondary hover:bg-secondary-dark text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Explore Software Solutions</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </section>


      {/* Product Enquiry Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-14">
        <div className="bg-primary text-white rounded-xs p-8 sm:p-10 shadow-lg text-center max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-3">help_outline</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Need Help Selecting the Right Paperless Recorder?
          </h2>
          <p className="font-body text-xs sm:text-sm text-white/85 leading-relaxed max-w-2xl mx-auto mb-8">
            The TH-PLR Series offers configurable measurement, recording and process monitoring capabilities for a wide range of industrial requirements. Contact our team to discuss your application and find the right TH-PLR configuration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact?subject=Inquiry regarding TH-PLR Series"
              className="px-8 py-3.5 bg-secondary hover:bg-secondary-dark text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs shadow-md transition-colors flex items-center gap-2 text-sm"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default THPLRSeriesDetail;
