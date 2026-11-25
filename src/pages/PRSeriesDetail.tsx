import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import recorderImg from '../assets/images/recorders/pr_series_banner.jpg';
import brainchildLogo from '../assets/images/principals/brainchild.png';

export const PRSeriesDetail: FC = () => {
  const [activeModelTab, setActiveModelTab] = useState<'all' | 'PR10' | 'PR20' | 'PR30'>('all');

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
            <span className="font-semibold text-primary">PR Series</span>
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
            
            {/* Left Column: Title & Key Summary */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full text-secondary font-body text-[11px] font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  BrainChild Paperless Series
                </span>
                <span className="bg-surface-container border border-outline-variant/20 px-2.5 py-1 rounded-xs font-body text-[11px] font-semibold text-primary">
                  Models: PR10 • PR20 • PR30
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-3">
                PR Series – Paperless Recorders
              </h1>
              <p className="font-display text-base sm:text-lg text-secondary font-medium mb-6">
                Paperless Recorders for Industrial Process Monitoring and Data Logging
              </p>

              <div className="space-y-3 font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-8">
                <p>
                  The BrainChild PR Series is designed for industrial process monitoring and data recording. It includes three models – PR10, PR20 and PR30 – with different display sizes and input capacities to meet varying application requirements.
                </p>
                <p>
                  Each model features a colour touchscreen for viewing process values, historical trends and alarms. The series supports multiple input types, including thermocouples, RTDs, current and voltage signals, along with flexible I/O expansion.
                </p>
                <p>
                  With configurable recording intervals, Ethernet connectivity and USB data transfer, the PR Series offers solutions for both compact monitoring applications and systems requiring higher input capacity.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#comparison"
                  className="px-5 py-2.5 bg-secondary hover:bg-secondary-dark text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs hover:shadow-md transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">table_chart</span>
                  Model Comparison
                </a>
                <Link
                  to="/contact?subject=Quote Request - BrainChild PR Series"
                  className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs hover:shadow-md transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">request_quote</span>
                  Request a Quote
                </Link>
                <a
                  href="/documents/recorders/BrainChild_PR_Series_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-secondary/10 hover:bg-secondary text-secondary hover:text-white border border-secondary/30 font-body text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs hover:shadow-md transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">description</span>
                  Technical Datasheet
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
                    src={recorderImg}
                    alt="BrainChild PR Series Paperless Recorders"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Principal Partner Logo Badge (Left Side) */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xs border border-white/40 shadow-sm flex items-center gap-2">
                    <img src={brainchildLogo} alt="BrainChild" className="h-5 object-contain" />
                  </div>

                  {/* Feature Badge (Right Side) */}
                  <div className="absolute top-4 right-4 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs backdrop-blur-xs shadow-xs">
                    Industrial Recorders
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-secondary-fixed text-xs font-bold uppercase tracking-wider mb-1">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      High-Precision Process Recorders
                    </div>
                    <p className="text-xs text-white/90 font-body">
                      Touchscreen Operation • Universal Inputs • 100 ms High-Speed Logging
                    </p>
                  </div>
                </div>

                {/* Quick Spec Highlights Strip */}
                <div className="p-4 bg-surface-container-lowest grid grid-cols-3 gap-2 border-t border-outline-variant/15 text-center">
                  <div className="p-2 bg-surface-container/60 rounded-xs">
                    <div className="font-display font-bold text-sm text-primary">100 ms</div>
                    <div className="font-body text-[10px] text-outline uppercase tracking-wider">Fastest Rate</div>
                  </div>
                  <div className="p-2 bg-surface-container/60 rounded-xs">
                    <div className="font-display font-bold text-sm text-primary">Up to 48</div>
                    <div className="font-body text-[10px] text-outline uppercase tracking-wider">Channels</div>
                  </div>
                  <div className="p-2 bg-surface-container/60 rounded-xs">
                    <div className="font-display font-bold text-sm text-primary">IP65</div>
                    <div className="font-body text-[10px] text-outline uppercase tracking-wider">Front Seal</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* High-Precision Aerospace Cross-Link Callout Banner */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-8">
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xs p-5 sm:p-6 shadow-md border border-primary/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="w-10 h-10 rounded-xs bg-secondary text-white flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[24px]">flight</span>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-secondary-fixed text-[11px] font-bold uppercase tracking-widest mb-1">
                Aerospace Heat Treatment Notice
              </div>
              <p className="font-body text-xs sm:text-sm text-white/95 leading-relaxed">
                The <span className="font-bold text-white">PR 2.0 high-precision input solution</span> is available for PR10 and PR20, delivering ±0.6°C accuracy for AMS2750H aerospace compliance and Temperature Uniformity Surveys.
              </p>
            </div>
          </div>
          <Link
            to="/products/paperless-recorders/aerospace-pr-2-0"
            className="px-4 py-2.5 bg-secondary hover:bg-secondary-dark text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0 shadow-xs flex items-center gap-1.5"
          >
            <span>View Aerospace PR 2.0</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Common Features Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-14">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">stars</span>
          <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
            Standard Capabilities
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-3">
          Common Features
        </h2>
        <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-3xl mb-8">
          All models across the BrainChild PR Series share standard core engineering features engineered for continuous industrial duty.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">touch_app</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              1. Touchscreen Display
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Colour TFT touchscreen for viewing process values, trends, alarms and recorder settings.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">sensors</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              2. Universal Input Support
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Supports thermocouples, RTDs, current, voltage and millivolt signals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              3. Flexible Input Configuration
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Different input channel capacities are available across the PR10, PR20 and PR30 models.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">speed</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              4. Fast Data Recording
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Records process data at intervals as fast as 100 milliseconds per dot.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">show_chart</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              5. Historical Data and Trends
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              View recorded data, historical trends, alarms and events.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">extension</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              6. Modular I/O Expansion
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Supports configurable analogue inputs, analogue outputs, digital inputs and relay outputs.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">lan</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              7. Communication and Connectivity
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Ethernet, USB and optional serial interfaces support data transfer and system integration.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">notifications_active</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              8. Alarm and Data Management
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Provides alarm monitoring and data management functions for process supervision.
            </p>
          </div>

          {/* Feature 9 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">desktop_windows</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              9. Software Integration
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              PC software supports recorder configuration, historical data viewing and optional real-time monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Model Comparison Table Section */}
      <section id="comparison" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-16">
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
              The PR Series is available in three models, each offering a different display size and input capacity.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-surface-container p-1 rounded-xs border border-outline-variant/20">
            {(['all', 'PR10', 'PR20', 'PR30'] as const).map((tab) => (
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

        {/* Responsive Table Container */}
        <div className="overflow-x-auto bg-surface-container-lowest border border-outline-variant/25 rounded-xs shadow-xs">
          <table className="w-full text-left border-collapse font-body text-xs">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/20 text-primary uppercase tracking-wider font-bold text-[11px]">
                <th className="p-4 sm:p-5 w-1/4">Specification</th>
                <th className={`p-4 sm:p-5 w-1/4 ${activeModelTab !== 'all' && activeModelTab !== 'PR10' ? 'opacity-40' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span>PR10</span>
                    <span className="text-[10px] bg-secondary/15 text-secondary px-2 py-0.5 rounded-full font-semibold">Compact</span>
                  </div>
                </th>
                <th className={`p-4 sm:p-5 w-1/4 ${activeModelTab !== 'all' && activeModelTab !== 'PR20' ? 'opacity-40' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span>PR20</span>
                    <span className="text-[10px] bg-secondary/15 text-secondary px-2 py-0.5 rounded-full font-semibold">Mid-Range</span>
                  </div>
                </th>
                <th className={`p-4 sm:p-5 w-1/4 ${activeModelTab !== 'all' && activeModelTab !== 'PR30' ? 'opacity-40' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span>PR30</span>
                    <span className="text-[10px] bg-secondary/15 text-secondary px-2 py-0.5 rounded-full font-semibold">Enterprise</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/15 text-on-surface-variant">
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Display</td>
                <td className={`p-4 sm:p-5 font-medium ${activeModelTab === 'PR10' ? 'bg-secondary/[0.04] font-semibold text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR10' ? 'opacity-40' : ''}`}>4.3-inch TFT</td>
                <td className={`p-4 sm:p-5 font-medium ${activeModelTab === 'PR20' ? 'bg-secondary/[0.04] font-semibold text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR20' ? 'opacity-40' : ''}`}>5.6-inch TFT</td>
                <td className={`p-4 sm:p-5 font-medium ${activeModelTab === 'PR30' ? 'bg-secondary/[0.04] font-semibold text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR30' ? 'opacity-40' : ''}`}>12.1-inch TFT</td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Display Resolution</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'PR10' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR10' ? 'opacity-40' : ''}`}>640 × 480</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'PR20' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR20' ? 'opacity-40' : ''}`}>640 × 480</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'PR30' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR30' ? 'opacity-40' : ''}`}>1024 × 768</td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Analog Input Channels</td>
                <td className={`p-4 sm:p-5 font-semibold text-secondary ${activeModelTab === 'PR10' ? 'bg-secondary/[0.06] font-bold' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR10' ? 'opacity-40' : ''}`}>Up to 6</td>
                <td className={`p-4 sm:p-5 font-semibold text-secondary ${activeModelTab === 'PR20' ? 'bg-secondary/[0.06] font-bold' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR20' ? 'opacity-40' : ''}`}>Up to 24</td>
                <td className={`p-4 sm:p-5 font-semibold text-secondary ${activeModelTab === 'PR30' ? 'bg-secondary/[0.06] font-bold' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR30' ? 'opacity-40' : ''}`}>Up to 48</td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Input Types</td>
                <td colSpan={3} className="p-4 sm:p-5 text-primary font-medium">
                  Universal: Thermocouples (TC), RTDs (Pt100), Current (mA), Voltage (V), Millivolt (mV)
                </td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Fastest Recording Interval</td>
                <td colSpan={3} className="p-4 sm:p-5 text-primary font-bold">
                  100 ms per dot
                </td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Internal Flash Memory</td>
                <td colSpan={3} className="p-4 sm:p-5">
                  256 MB onboard flash
                </td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Ethernet</td>
                <td colSpan={3} className="p-4 sm:p-5 text-primary font-medium">
                  Yes (Standard Modbus TCP & Web access)
                </td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">USB Connectivity</td>
                <td colSpan={3} className="p-4 sm:p-5">
                  2 Host ports (Data dump & firmware updates)
                </td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Front Protection</td>
                <td colSpan={3} className="p-4 sm:p-5">
                  IP65 water and dust tight front fascia
                </td>
              </tr>
              <tr className="hover:bg-secondary/5 transition-colors cursor-pointer group">
                <td className="p-4 sm:p-5 font-semibold text-primary group-hover:text-secondary transition-colors">Panel Mounting (Cut-out)</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'PR10' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR10' ? 'opacity-40' : ''}`}>144 × 144 mm</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'PR20' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR20' ? 'opacity-40' : ''}`}>144 × 144 mm</td>
                <td className={`p-4 sm:p-5 ${activeModelTab === 'PR30' ? 'bg-secondary/[0.04] font-medium text-primary' : ''} ${activeModelTab !== 'all' && activeModelTab !== 'PR30' ? 'opacity-40' : ''}`}>288 × 288 mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Software and Data Management Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-16">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">software</span>
          <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
            PC Software Suite
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-3">
          Software and Data Management
        </h2>
        <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-3xl mb-8">
          The PR Series includes PC software to help users configure the recorder, view recorded data and monitor processes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <span className="material-symbols-outlined text-secondary text-[24px] mb-2 group-hover:scale-115 transition-transform duration-300 inline-block">settings_suggest</span>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1">Configuration Software</h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Set up recorder settings, sensor scaling, alarms, and communication parameters directly from a PC.
            </p>
          </div>

          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <span className="material-symbols-outlined text-secondary text-[24px] mb-2 group-hover:scale-115 transition-transform duration-300 inline-block">history_edu</span>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1">Historical Viewer</h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              View recorded trends, alarms and events, and export historical process data to CSV spreadsheets.
            </p>
          </div>

          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <span className="material-symbols-outlined text-secondary text-[24px] mb-2 group-hover:scale-115 transition-transform duration-300 inline-block">monitoring</span>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1">Data Acquisition Studio</h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Monitor process data across multiple recorders in real time using optional central SCADA software.
            </p>
          </div>

          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <span className="material-symbols-outlined text-secondary text-[24px] mb-2 group-hover:scale-115 transition-transform duration-300 inline-block">dashboard_customize</span>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1">Panel Studio</h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Create customised graphic display screens and mimic diagrams with supported Plus firmware versions.
            </p>
          </div>
        </div>
      </section>

      {/* Optional Features and Configurations Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-16">
        <div className="bg-surface-container-low border border-outline-variant/25 rounded-xs p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">tune</span>
            <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
              Modular Expansion
            </span>
          </div>
          <h2 className="font-display text-2xl font-bold text-primary mb-2">
            Optional Features and Configurations
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-6">
            Depending on the selected model and configuration, the PR Series can be supplied with:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              'Additional analog input and output modules',
              'Digital input and relay output modules',
              'Optional serial communication interfaces',
              'High-frequency pulse input',
              'Plus firmware for batch recording and custom displays',
              'External channels',
              'Optional PID process control card',
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
            Choosing the right recorder depends on the number of input channels, sensor types, recording requirements and communication interfaces needed for your application. Our team can help you select between the PR10, PR20 and PR30 based on your process requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact?subject=Request a Quote - BrainChild PR Series"
              className="px-6 py-3 bg-secondary hover:bg-secondary-dark text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs shadow-md transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">request_quote</span>
              Request a Quote
            </Link>
            <Link
              to="/contact?subject=Technical Consultation - BrainChild PR Series"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              Contact Our Technical Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PRSeriesDetail;
