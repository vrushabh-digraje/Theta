import { FC } from 'react';
import { Link } from 'react-router-dom';
import aeroImg from '../assets/images/recorders/aerospace_pr_banner.jpg';
import brainchildLogo from '../assets/images/principals/brainchild.png';

export const AerospacePRDetail: FC = () => {
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
            <span className="font-semibold text-primary">Aerospace PR 2.0</span>
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
                  Aerospace Heat Treatment
                </span>
                <span className="bg-primary text-white px-2.5 py-1 rounded-xs font-body text-[11px] font-bold uppercase tracking-wider">
                  AMS2750H Standard
                </span>
                <span className="bg-surface-container border border-outline-variant/20 px-2.5 py-1 rounded-xs font-body text-[11px] font-semibold text-primary">
                  AI306_6 Module
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-3">
                PR 2.0 – Aerospace Heat Treatment Paperless Recorder
              </h1>
              <p className="font-display text-base sm:text-lg text-secondary font-medium mb-6">
                High-Precision Temperature Monitoring for Aerospace Heat Treatment
              </p>

              <div className="space-y-3 font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-8">
                <p>
                  BrainChild PR 2.0 introduces advanced measurement and recording capabilities for industrial applications that require high accuracy and reliable process documentation. With support for the AI306_6 high-precision analog input module, PR 2.0 is designed to meet the demanding temperature measurement requirements of aerospace heat-treatment applications.
                </p>
                <p>
                  The system improves thermocouple measurement accuracy from ±1.0°C to ±0.6°C, supporting AMS2750H requirements for Field Test Instruments. This makes it suitable for Temperature Uniformity Surveys (TUS), furnace monitoring and other critical thermal processes.
                </p>
                <p>
                  Available for the PR10 and PR20 models, PR 2.0 combines high-precision measurement with advanced recording, batch management and data handling functions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact?subject=Aerospace PR 2.0 Inquiry"
                  className="px-6 py-2.5 bg-secondary hover:bg-secondary-dark text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs hover:shadow-md transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Enquire Now
                </Link>
                <Link
                  to="/products/paperless-recorders/pr-series"
                  className="px-5 py-2.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-primary font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">table_rows</span>
                  View Standard PR Series
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xs overflow-hidden border border-outline-variant/25 bg-surface-container-low shadow-lg group">
                <div className="h-72 sm:h-80 w-full overflow-hidden relative">
                  <img
                    src={aeroImg}
                    alt="PR 2.0 Aerospace Heat Treatment Paperless Recorder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Principal Partner Logo Badge (Left Side) */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xs border border-white/40 shadow-sm flex items-center gap-2">
                    <img src={brainchildLogo} alt="BrainChild" className="h-5 object-contain" />
                  </div>

                  {/* Feature Badge (Right Side) */}
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs backdrop-blur-xs shadow-xs">
                    AMS2750H Standard
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-secondary-fixed text-xs font-bold uppercase tracking-wider mb-1">
                      <span className="material-symbols-outlined text-[18px]">flight_takeoff</span>
                      Aerospace Pyrometry Grade
                    </div>
                    <p className="text-xs text-white/90 font-body">
                      AMS2750H Field Test Instrument • ±0.6°C Thermocouple Accuracy • FDA 21 CFR 11
                    </p>
                  </div>
                </div>

                {/* Quick Spec Highlights Strip */}
                <div className="p-4 bg-surface-container-lowest grid grid-cols-3 gap-2 border-t border-outline-variant/15 text-center">
                  <div className="p-2 bg-surface-container/60 rounded-xs">
                    <div className="font-display font-bold text-sm text-primary">±0.6°C</div>
                    <div className="font-body text-[10px] text-outline uppercase tracking-wider">Thermocouple Acc.</div>
                  </div>
                  <div className="p-2 bg-surface-container/60 rounded-xs">
                    <div className="font-display font-bold text-sm text-primary">6 Channels</div>
                    <div className="font-body text-[10px] text-outline uppercase tracking-wider">AI306_6 Module</div>
                  </div>
                  <div className="p-2 bg-surface-container/60 rounded-xs">
                    <div className="font-display font-bold text-sm text-primary">100 ms</div>
                    <div className="font-body text-[10px] text-outline uppercase tracking-wider">Sampling Rate</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Features Section (8 points) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-14">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
          <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
            Compliance & Specifications
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-3">
          Key Features
        </h2>
        <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-3xl mb-8">
          The PR 2.0 system with AI306_6 provides precision temperature measurement and verified data integrity required by the aerospace industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              1. Designed for AMS2750H Requirements
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Supports AMS2750H requirements for Field Test Instruments when configured with the AI306_6 high-precision input module.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">thermostat</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              2. High-Precision Temperature Measurement
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Achieves thermocouple measurement accuracy of ±0.6°C with the AI306_6 module, compared with ±1.0°C previously.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">view_column</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              3. Six-Channel High-Precision Input
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              The AI306_6 module provides six high-precision analog input channels for demanding temperature measurement applications.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">heat_pump</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              4. Temperature Uniformity Surveys
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Suitable for Temperature Uniformity Surveys (TUS) and temperature monitoring in aerospace heat-treatment processes.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">speed</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              5. Fast Data Sampling
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Supports sampling and data logging rates as fast as 100 milliseconds per channel.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">receipt_long</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              6. Batch Recording and Traceability
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Batch recording and digital file management help organise process data and maintain production records.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">security</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              7. Secure Electronic Records
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Supports FDA 21 CFR Part 11 requirements for electronic records and data management with the appropriate configuration.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="group p-5 bg-surface-container-lowest hover:bg-surface-container-low/50 border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">file_download</span>
            </div>
            <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-1.5">
              8. Flexible Data Export
            </h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Recorded data can be exported in PDF, Excel and CSV formats for analysis and documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Capabilities Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-16">
        <div className="p-6 sm:p-8 bg-surface-container-lowest border border-outline-variant/20 rounded-xs shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">tune</span>
            <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
              Advanced Functions
            </span>
          </div>
          <h2 className="font-display text-2xl font-bold text-primary mb-2">
            PR 2.0 – Additional Capabilities
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-6">
            Beyond high-precision temperature measurement, PR 2.0 introduces additional functions for industrial monitoring and process management:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-5 bg-surface-container/50 hover:bg-surface-container-high/60 border border-outline-variant/15 hover:border-secondary/40 rounded-xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
                <span className="material-symbols-outlined text-[20px]">dashboard_customize</span>
              </div>
              <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-2">Customizable Display</h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Custom display layouts allow users to arrange process information according to their monitoring requirements using Panel Studio software.
              </p>
            </div>

            <div className="group p-5 bg-surface-container/50 hover:bg-surface-container-high/60 border border-outline-variant/15 hover:border-secondary/40 rounded-xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
                <span className="material-symbols-outlined text-[20px]">database</span>
              </div>
              <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-2">Advanced Data Management</h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Supports data logging by time or value change, automatic data backup during power interruptions and historical trend analysis.
              </p>
            </div>

            <div className="group p-5 bg-surface-container/50 hover:bg-surface-container-high/60 border border-outline-variant/15 hover:border-secondary/40 rounded-xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-xs bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-all duration-300 group-hover:scale-105">
                <span className="material-symbols-outlined text-[20px]">cloud_sync</span>
              </div>
              <h3 className="font-display text-sm font-bold text-primary group-hover:text-secondary transition-colors mb-2">Remote Monitoring</h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Ethernet connectivity and web-server access support remote process monitoring and data access across your plant network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Models and Compatibility Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-16">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">devices</span>
          <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
            Hardware Integration
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-3">
          Models and Compatibility
        </h2>
        <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-3xl mb-8">
          The PR 2.0 high-precision input solution is available for the following models:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* PR10 Compatible Card */}
          <div className="group p-6 bg-surface-container-lowest hover:bg-surface-container-low/40 border-2 border-outline-variant/25 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-xl font-bold text-primary group-hover:text-secondary transition-colors">PR10</h3>
                <span className="bg-secondary/15 text-secondary text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-xs">
                  4.3-inch TFT
                </span>
              </div>
              <ul className="space-y-2.5 font-body text-xs text-on-surface-variant mb-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check</span>
                  <span>4.3-inch colour TFT touchscreen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check</span>
                  <span>Compact panel-mount design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check</span>
                  <span className="font-semibold text-primary">Supports AI306_6 high-precision input module</span>
                </li>
              </ul>
            </div>

            <Link
              to="/products/paperless-recorders/pr-series"
              className="inline-flex items-center justify-between pt-4 border-t border-outline-variant/15 text-secondary group-hover:text-primary font-body text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>View PR10 on PR Series Page</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
            </Link>
          </div>

          {/* PR20 Compatible Card */}
          <div className="group p-6 bg-surface-container-lowest hover:bg-surface-container-low/40 border-2 border-outline-variant/25 hover:border-secondary rounded-xs shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-xl font-bold text-primary group-hover:text-secondary transition-colors">PR20</h3>
                <span className="bg-secondary/15 text-secondary text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-xs">
                  5.6-inch TFT
                </span>
              </div>
              <ul className="space-y-2.5 font-body text-xs text-on-surface-variant mb-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check</span>
                  <span>5.6-inch colour TFT touchscreen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check</span>
                  <span>Larger display for process monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check</span>
                  <span className="font-semibold text-primary">Supports AI306_6 high-precision input module</span>
                </li>
              </ul>
            </div>

            <Link
              to="/products/paperless-recorders/pr-series"
              className="inline-flex items-center justify-between pt-4 border-t border-outline-variant/15 text-secondary group-hover:text-primary font-body text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>View PR20 on PR Series Page</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Callout Notice Note */}
        <div className="p-4 bg-surface-container rounded-xs border-l-4 border-secondary flex items-start gap-3">
          <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">info</span>
          <p className="font-body text-xs text-on-surface-variant font-medium">
            <strong className="text-primary font-bold">Important Note:</strong> AI306_6 is supported on PR10 and PR20 only. It is not offered as a standalone module.
          </p>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin mt-16">
        <div className="bg-primary text-white rounded-xs p-8 sm:p-10 shadow-lg text-center max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-3">flight_takeoff</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Need High-Precision Temperature Monitoring for Aerospace Applications?
          </h2>
          <p className="font-body text-xs sm:text-sm text-white/85 leading-relaxed max-w-2xl mx-auto mb-8">
            Explore the BrainChild PR 2.0 series for accurate temperature measurement, reliable data recording and aerospace heat-treatment monitoring. Contact our team to discuss the right recorder and input configuration for your application.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact?subject=Aerospace PR 2.0 Inquiry"
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

export default AerospacePRDetail;
