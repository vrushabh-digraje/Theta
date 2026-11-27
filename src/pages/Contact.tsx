import { FC, useState } from 'react';
import thetaLogo from '../assets/images/recorders/theta_logo_card.png';

interface CompanyRouting {
  id: string;
  name: string;
  email: string;
  address: string;
  icon: string;
  link?: string;
}

const THETA_COMPANIES: CompanyRouting[] = [
  {
    id: 'theta-controls',
    name: 'Theta Controls Private Limited',
    email: 'webleads@thetacontrols.com',
    address: 'Unit 1, Electronic Estate, Pune - Satara Road, Pune - 411009, Maharashtra, India.',
    icon: 'settings_suggest',
    link: '/industrial-automation',
  },
  {
    id: 'theta-networking',
    name: 'Theta Networking Solutions Private Limited',
    email: 'webleads@thetanetworking.in',
    address: 'Unit 4, Electronic Estate, Pune - Satara Road, Pune - 411009, Maharashtra, India.',
    icon: 'hub',
    link: '/industrial-networking',
  },
  {
    id: 'theta-controls-systems',
    name: 'Theta Controls and Systems Private Limited',
    email: 'webleads@thetacosys.com',
    address: '4TH Floor, Plot no 37, Devi House, CTS NO 1576, Shivaji Nagar, Pune, Maharashtra, 411005.',
    icon: 'precision_manufacturing',
    link: '/industrial-automation',
  },
  {
    id: 'kontrelek-instruments',
    name: 'Kontrelek Instruments',
    email: 'webleads@kontrelek.com',
    address: 'Unit 44, Electronic Estate, Pune - Satara Road, Pune - 411009, Maharashtra, India.',
    icon: 'speed',
    link: '/products',
  },
  {
    id: 'theta-measurement-control',
    name: 'Theta Measurement and Control Solutions Private Limited',
    email: 'Sales@tmcs.in',
    address: 'AR Bhat Bhavan, MCCIA Building, Tilak Road, Pune – 411002, Maharashtra, India.',
    icon: 'analytics',
    link: '/solutions',
  },
  {
    id: 'i-dont-know',
    name: 'I Don’t Know',
    email: 'info@thetacontrols.com',
    address: 'Theta Group Central Desk, Pune, Maharashtra, India.',
    icon: 'help_outline',
  },
];

/**
 * Enterprise Contact Us & Engineering Support page for THETA Group.
 * Implements strict client requirements:
 * - Group wise company name dropdown in contact form with exact required sequence:
 *    1. Theta Controls Private Limited
 *    2. Theta Networking Solutions Private Limited
 *    3. Theta Controls and Systems Private Limited
 *    4. Kontrelek Instruments
 *    5. Theta Measurement and Control Solutions Private Limited
 *    6. I Don’t Know
 * - Dynamic routing display to respective webleads emails and physical Pune addresses.
 * - Group Companies Details panel with 5 group companies + common desk.
 */
export const Contact: FC = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    selectedCompany: THETA_COMPANIES[0].name,
    message: '',
  });

  const selectedEntity = THETA_COMPANIES.find((c) => c.name === formData.selectedCompany) || THETA_COMPANIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full pb-20">
      {/* 1. TOP HERO BANNER */}
      <section className="bg-gradient-to-r from-primary to-[#002d5a] text-white py-12 sm:py-16 border-b border-outline-variant/15">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-3.5 py-1 rounded-full mb-3 backdrop-blur-xs">
            <span className="material-symbols-outlined text-secondary text-[16px]">support_agent</span>
            <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
              Direct Engineering Support & RFQs
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Contact Us & Engineering Support
          </h1>
          <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed">
            Connect directly with THETA Group application engineers and sales desks across Pune. 
            For technical support, custom instrumentation, tenders, or quotations, reach us through the channels below.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin pt-10 sm:pt-12">
        
        {/* TOP 3 PRIORITY CHANNEL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Direct Phone Hotline */}
          <a
            href="tel:+912066268600"
            className="p-6 sm:p-7 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-secondary text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-bl-xs shadow-2xs">
              Fast Sales Desk
            </div>

            <div>
              <div className="w-12 h-12 rounded-xs bg-secondary/10 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">call</span>
              </div>
              <span className="font-body text-[10px] font-bold text-outline uppercase tracking-wider block mb-1">
                Direct Phone Hotline
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                +91-20 66 268 600
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Direct connection to technical sales engineers, quotation desk, and project support across all group entities.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-outline-variant/15 flex items-center justify-between text-xs font-bold text-secondary uppercase tracking-wider">
              <span>Call Sales Desk</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>

          {/* Card 2: Central Group Email */}
          <a
            href="mailto:info@thetacontrols.com"
            className="p-6 sm:p-7 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-bl-xs shadow-2xs">
              Central Desk
            </div>

            <div>
              <div className="w-12 h-12 rounded-xs bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">mail</span>
              </div>
              <span className="font-body text-[10px] font-bold text-outline uppercase tracking-wider block mb-1">
                Common Group Email
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-2 truncate">
                info@thetacontrols.com
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                General inquiries, tenders, and multi-division proposals are routed automatically to designated desks.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-outline-variant/15 flex items-center justify-between text-xs font-bold text-secondary uppercase tracking-wider">
              <span>Send Email</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>

          {/* Card 3: Pune Plant & Facility */}
          <div className="p-6 sm:p-7 bg-surface-container-lowest border border-outline-variant/20 rounded-xs shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-surface-container text-primary flex items-center justify-center mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">location_on</span>
              </div>
              <span className="font-body text-[10px] font-bold text-outline uppercase tracking-wider block mb-1">
                Pune HQ & Manufacturing Plants
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-2">
                Electronic Estate, Pune
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Units 1, 4 & 44, Electronic Estate, Pune - Satara Road, Pune - 411009, Maharashtra, India.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-outline-variant/15 flex items-center gap-2 text-[11px] text-outline font-medium">
              <span className="material-symbols-outlined text-secondary text-[16px]">schedule</span>
              <span>Mon – Sat: 9:00 AM – 6:30 PM IST</span>
            </div>
          </div>

        </div>

        {/* 3. SPLIT TWO-COLUMN LAYOUT: FORM & MAP (LEFT) & FACILITY / GROUP COMPANIES (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN (Cols 1-7): STREAMLINED TECHNICAL INQUIRY FORM & GOOGLE MAP */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Form Container */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xs p-6 sm:p-8 shadow-xs">
            <div className="mb-6 pb-4 border-b border-outline-variant/15 flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-primary">
                  Technical Inquiry / RFQ Form
                </h2>
                <p className="font-body text-xs text-on-surface-variant mt-0.5">
                  Select your desired company division. Our engineers will respond within 24 business hours.
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
                  Thank you for contacting THETA Group. An application engineer has been notified and will contact you shortly via email or phone.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-secondary hover:bg-primary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 1. Full Name */}
                <div>
                  <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
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

                {/* 2. Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                      Email *
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
                  <div>
                    <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                      Phone Number *
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
                </div>

                {/* 3. Company Name */}
                <div>
                  <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Bharat Forge / Tata Motors / DRDO"
                    className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>

                {/* 4. Group-Wise Company Name Dropdown (STRICT SEQUENCE ALL OVER THE SITE) */}
                <div>
                  <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                    Group-Wise Company Name *
                  </label>
                  <select
                    value={formData.selectedCompany}
                    onChange={(e) => setFormData({ ...formData, selectedCompany: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs font-medium text-primary focus:outline-none focus:border-secondary transition-colors"
                  >
                    {THETA_COMPANIES.map((company) => (
                      <option key={company.id} value={company.name}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 5. Message */}
                <div>
                  <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                    Technical Specifications / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your instrumentation requirements, process parameters, quantities, or technical queries..."
                    className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-outline font-body">
                    * All technical specifications are kept strictly confidential.
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-secondary hover:bg-primary text-white font-body text-xs font-bold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* GOOGLE MAP CARD DIRECTLY AFTER FORM */}
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xs overflow-hidden shadow-xs">
            <div className="h-72 sm:h-80 w-full relative">
              <iframe
                title="THETA Controls Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.565882672332!2d73.8567!3d18.4905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c00a651a5555%3A0x6b1c769ff00b1234!2sElectronic%20Estate%2C%20Pune-Satara%20Rd%2C%20Pune%2C%20Maharashtra%20411009!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Cols 8-12): FACILITY & GROUP COMPANIES PANEL */}
        <div className="lg:col-span-5 space-y-6">

            {/* 2. Facility Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xs p-4 sm:p-5 shadow-xs flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xs bg-white border border-outline-variant/20 p-2.5 flex items-center justify-center shrink-0 shadow-2xs">
                <img
                  src={thetaLogo}
                  alt="THETA Controls Logo"
                  className="w-full h-auto max-h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-display text-sm sm:text-base font-bold text-primary mb-1">
                  THETA Manufacturing & Integration Plant
                </h4>
                <p className="font-body text-xs text-on-surface-variant mb-2">
                  7,600 sq.ft precision manufacturing and testing facility at Electronic Estate, Pune.
                </p>
                <div className="inline-flex items-center gap-1.5 text-[11px] text-secondary font-medium bg-secondary/10 px-2 py-0.5 rounded-2xs">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span>Mon–Sat: 9:00 AM – 6:30 PM IST</span>
                </div>
              </div>
            </div>

            {/* 3. Group Companies Details Panel (ALL 5 SUB-COMPANIES + COMMON DESK) */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xs p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-outline-variant/15">
                <h3 className="font-display text-base font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">corporate_fare</span>
                  <span>Theta Group Sub-Companies</span>
                </h3>
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                  5 Companies
                </span>
              </div>

              <div className="space-y-3">
                {THETA_COMPANIES.slice(0, 5).map((comp) => (
                  <div
                    key={comp.id}
                    className="p-3 bg-surface-container-low border border-outline-variant/20 hover:border-secondary rounded-xs flex flex-col gap-1.5 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-display text-xs sm:text-sm font-bold text-primary">
                        {comp.name}
                      </h4>
                    </div>

                    <div className="text-[11px] text-on-surface-variant flex items-start gap-1">
                      <span className="material-symbols-outlined text-[14px] text-outline shrink-0 mt-0.5">location_on</span>
                      <span className="line-clamp-2 leading-relaxed">{comp.address}</span>
                    </div>

                    <div className="text-[11px] font-mono text-secondary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">mail</span>
                      <a href={`mailto:${comp.email}`} className="hover:underline">
                        {comp.email}
                      </a>
                    </div>
                  </div>
                ))}

                {/* Common Group Email Card */}
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-xs flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">domain</span>
                    <div>
                      <div className="font-bold text-primary text-[11px]">Theta Group Common Desk</div>
                      <div className="text-[11px] text-outline">For general inquiries and partnerships</div>
                    </div>
                  </div>
                  <a
                    href="mailto:info@thetacontrols.com"
                    className="font-mono font-bold text-secondary text-xs hover:underline"
                  >
                    info@thetacontrols.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
};

export default Contact;
