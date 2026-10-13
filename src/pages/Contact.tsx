import { FC, useState } from 'react';

/**
 * Enterprise Contact Us page for THETA Controls & Systems.
 * Prioritizes Phone Number and Email Address as the primary, most prominent contact channels,
 * accompanied by an interactive quick inquiry form and facility details.
 */
export const Contact: FC = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    division: 'General Technical Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full pb-20">
      {/* Page Header */}
      <section className="bg-surface border-b border-outline-variant/15 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-3">
            <span className="material-symbols-outlined text-secondary text-[16px]">support_agent</span>
            <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
              Direct Engineering Support
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-3">
            Contact Us
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Reach out directly to THETA Controls’ systems engineering and sales team in Pune. 
            For immediate technical support or RFQs, call our direct line or email us below.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin pt-12">
        
        {/* PRIORITY SECTION: Prominent Phone & Email Cards (Most Important) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          
          {/* 1. DIRECT PHONE NUMBER CARD (High Priority) */}
          <a
            href="tel:+912066268600"
            className="p-6 sm:p-7 bg-surface-container-lowest border-2 border-secondary/40 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-secondary text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-bl-xs">
              Direct Line
            </div>

            <div>
              <div className="w-12 h-12 rounded-xs bg-secondary/15 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center transition-colors mb-4">
                <span className="material-symbols-outlined text-[26px]">call</span>
              </div>
              <span className="font-body text-[10px] font-bold text-outline uppercase tracking-wider block mb-1">
                Direct Telephone (Pune HQ)
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                +91-20 66 268 600
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Direct connection to technical sales, quotation desk, and project support engineers.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-outline-variant/15 flex items-center justify-between text-xs font-bold text-secondary uppercase tracking-wider">
              <span>Click to Call Now</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>

          {/* 2. DIRECT EMAIL ADDRESS CARD (High Priority) */}
          <a
            href="mailto:info@thetacontrols.com"
            className="p-6 sm:p-7 bg-surface-container-lowest border-2 border-secondary/40 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-bl-xs">
              Fast Response
            </div>

            <div>
              <div className="w-12 h-12 rounded-xs bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-colors mb-4">
                <span className="material-symbols-outlined text-[26px]">mail</span>
              </div>
              <span className="font-body text-[10px] font-bold text-outline uppercase tracking-wider block mb-1">
                Official Correspondence Email
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-2 truncate">
                info@thetacontrols.com
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Send technical datasheets, procurement requirements, RFQs, or alliance proposals.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-outline-variant/15 flex items-center justify-between text-xs font-bold text-secondary uppercase tracking-wider">
              <span>Send Email Now</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>

          {/* 3. PUNE HEADQUARTERS & FACILITY CARD */}
          <div className="p-6 sm:p-7 bg-surface-container-lowest border border-outline-variant/20 rounded-xs shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-surface-container text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">domain</span>
              </div>
              <span className="font-body text-[10px] font-bold text-outline uppercase tracking-wider block mb-1">
                Manufacturing & FAT Facility
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-2">
                Pune Electronic Estate
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                1, Electronic Estate, Pune - Satara Road, Pune - 411009, Maharashtra, India.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-outline-variant/15 flex items-center gap-2 text-[11px] text-outline font-medium">
              <span className="material-symbols-outlined text-secondary text-[16px]">schedule</span>
              <span>Mon – Sat: 9:00 AM – 6:30 PM IST</span>
            </div>
          </div>

        </div>

        {/* Contact & Inquiry Form */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xs p-6 sm:p-10 shadow-xs max-w-4xl mx-auto">
          <div className="mb-8 pb-4 border-b border-outline-variant/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-primary">
                Send Direct Technical Inquiry or RFQ
              </h2>
              <p className="font-body text-xs text-on-surface-variant mt-1">
                Our application engineers will respond to your technical specifications within 24 business hours.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider shrink-0">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>Desk Online</span>
            </div>
          </div>

          {formSubmitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-2">
                Inquiry Successfully Received!
              </h3>
              <p className="font-body text-xs text-on-surface-variant max-w-md mx-auto leading-relaxed mb-6">
                Thank you for contacting THETA Controls. An application engineer has been assigned to your message and will contact you via email or phone.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-2.5 bg-secondary hover:bg-primary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kulkarni"
                    className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ramesh@company.com"
                    className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1.5">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1.5">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Bharat Forge / DRDO / Tata Motors"
                    className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1.5">
                  Engineering Division of Interest
                </label>
                <select
                  value={formData.division}
                  onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                >
                  <option>Theta Controls & Systems (Process Automation & Panels)</option>
                  <option>Theta Defence & Aerospace (Tactical Controllers & ROV)</option>
                  <option>Theta IoT Technologies (Edge Gateways & Gas Detection)</option>
                  <option>Theta Test & Automation (NI Alliance & Automated DAQ)</option>
                  <option>Hardware Distribution (Hirschmann / Belden / Dino-Lite)</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1.5">
                  Technical Requirements & Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your instrumentation specifications, quantities, target project timeframe, or testing parameters..."
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-between gap-4">
                <span className="text-[11px] text-outline font-body">
                  * All submitted information is strictly confidential.
                </span>

                <button
                  type="submit"
                  className="px-8 py-3 bg-primary hover:bg-secondary text-white font-body text-xs font-bold uppercase tracking-widest rounded-xs transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </section>
    </div>
  );
};

export default Contact;
