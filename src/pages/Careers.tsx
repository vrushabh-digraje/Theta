import { FC, useState, useMemo } from 'react';
import labHeroImg from '../assets/images/hero_split_electronics.jpg';
import plantImg1 from '../assets/images/hero_PAut1.jpg';
import plantImg2 from '../assets/images/hero_DS1.jpg';
import teamImg from '../assets/images/WHO_WE_ARE.jpg';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  category: 'Automation & PLC' | 'Embedded Systems' | 'Test & Measurement' | 'Mechanical Design';
  experience: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: 'senior-automation-engineer',
    title: 'Senior Automation Engineer',
    department: 'Theta Controls & Systems',
    category: 'Automation & PLC',
    experience: '5+ Years Experience',
    location: 'Pune, Maharashtra',
    type: 'Full-time • On-Site',
    description: 'Design and deploy PLC/SCADA control architectures, PID loop tuning, and industrial automation control panels for process plant clients.',
    skills: ['Siemens / Rockwell PLC', 'SCADA', 'Control Panel Engineering', 'FAT / SAT'],
  },
  {
    id: 'embedded-systems-engineer',
    title: 'Embedded Systems Engineer',
    department: 'Theta Defence & Aerospace',
    category: 'Embedded Systems',
    experience: '2-4 Years Experience',
    location: 'Pune, Maharashtra',
    type: 'Full-time • On-Site',
    description: 'Develop firmwares for tactical motor drives, robotic manipulator controllers, and high-reliability defense telemetry systems.',
    skills: ['C / C++ Embedded', 'ARM Cortex', 'CAN / RS-485', 'Hardware Debugging'],
  },
  {
    id: 'test-measurement-specialist',
    title: 'Test & Measurement Specialist',
    department: 'Theta Test & Automation',
    category: 'Test & Measurement',
    experience: '3-5 Years Experience',
    location: 'Pune, Maharashtra',
    type: 'Full-time • On-Site',
    description: 'Build automated end-of-line (EOL) test rigs, PXI instrumentation architectures, and high-speed data acquisition systems on National Instruments platforms.',
    skills: ['NI LabVIEW', 'PXI / cDAQ', 'Automated Test Benches', 'Sensor Calibration'],
  },
  {
    id: 'iot-firmware-engineer',
    title: 'IoT Firmware & Gateway Engineer',
    department: 'Theta IoT Technologies',
    category: 'Embedded Systems',
    experience: '2-5 Years Experience',
    location: 'Pune, Maharashtra',
    type: 'Full-time • On-Site',
    description: 'Design low-power wireless gas detection telemetry nodes, Modbus edge gateways, and encrypted MQTT cloud pipelines for industrial safety.',
    skills: ['MQTT / HTTP', 'Wireless Mesh / LoRa', 'Linux Embedded', 'Gas Sensors'],
  },
  {
    id: 'cad-mechanical-designer',
    title: 'Mechanical & Enclosure Designer',
    department: 'Theta Controls & Systems',
    category: 'Mechanical Design',
    experience: '3-6 Years Experience',
    location: 'Pune, Maharashtra',
    type: 'Full-time • On-Site',
    description: 'Design MIL-grade ruggedized instrument housings, sheet metal control panel layouts, and thermal management enclosures using SolidWorks.',
    skills: ['SolidWorks / AutoCAD', 'Sheet Metal Fabrication', 'IP65/67 Enclosures', 'Thermal Analysis'],
  },
];

export const Careers: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedJobForModal, setSelectedJobForModal] = useState<JobOpening | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    coverNote: '',
  });

  const categories = ['All', 'Embedded Systems', 'Automation & PLC', 'Test & Measurement', 'Mechanical Design'];

  const filteredJobs = useMemo(() => {
    if (activeCategory === 'All') return jobOpenings;
    return jobOpenings.filter((job) => job.category === activeCategory);
  }, [activeCategory]);

  const handleOpenApply = (job?: JobOpening) => {
    setSelectedJobForModal(job || null);
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full pb-20">
      {/* 1. HERO BANNER WITH LIVE STATS COUNTERS */}
      <section className="relative bg-gradient-to-br from-[#00142e] via-[#002244] to-[#001124] text-white py-16 sm:py-24 overflow-hidden border-b border-outline-variant/15">
        {/* Lab Background Overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity pointer-events-none">
          <img
            src={labHeroImg}
            alt="Engineering Laboratory"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#00142e] via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 px-3.5 py-1 rounded-full mb-4 backdrop-blur-xs">
            <span className="material-symbols-outlined text-secondary text-[16px]">work</span>
            <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-widest">
              Engineering Careers & Opportunities
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl mx-auto mb-4 leading-tight">
            Shape the Future of Industrial Automation & Defence Engineering
          </h1>

          <p className="font-body text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Precision instrumentation, PLC automation, and mission-critical defense test systems engineered in India.
          </p>

          {/* 3 Glassmorphism Stats Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 sm:p-5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xs border border-white/15 transition-all">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-0.5">30+</div>
              <div className="font-body text-xs text-white/70 uppercase tracking-wider">Years</div>
            </div>

            <div className="p-4 sm:p-5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xs border border-white/15 transition-all">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-0.5">500+</div>
              <div className="font-body text-xs text-white/70 uppercase tracking-wider">Projects</div>
            </div>

            <div className="p-4 sm:p-5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xs border border-white/15 transition-all">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-0.5">5</div>
              <div className="font-body text-xs text-white/70 uppercase tracking-wider">Divisions</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY JOIN THETA (4 FEATURE CARDS) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin py-16 sm:py-20 border-b border-outline-variant/15">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
            Why Join THETA
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Build high-reliability systems alongside industry veterans in an engineering culture built on technical mastery and national impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-secondary/10 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">memory</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                Cutting-Edge NI & Siemens Tech
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Work hands-on with LabVIEW, PXI, and industrial PLC architectures for advanced telemetry and automation.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-secondary/10 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">rocket_launch</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                Defence & Aerospace Innovations
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Build mission-critical test rigs and robotic controller electronics for aerospace and defense leaders.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-secondary/10 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">school</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                Continuous Learning & R&D Labs
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Dedicated prototyping labs, certifications, and technical mentorship directly from senior principal engineers.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-secondary/10 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">public</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                Global Industrial Footprint
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Deploy turnkey automation systems across global manufacturing facilities, OEMs, and process plants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPEN OPPORTUNITIES (JOB BOARD WITH FILTER TABS) */}
      <section className="bg-surface-container-lowest/60 py-16 sm:py-20 border-b border-outline-variant/15">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
              Open Opportunities
            </h2>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Explore current engineering vacancies at our Pune facility. Filter by specialization below.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-body text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-secondary text-white shadow-xs'
                    : 'bg-surface-container border border-outline-variant/30 text-primary hover:bg-surface-container-high'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job Listing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-secondary/10 text-secondary border border-secondary/20">
                      {job.category}
                    </span>
                    <span className="text-[10px] text-outline font-medium">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                    {job.title}
                  </h3>

                  <div className="space-y-1 mb-4 text-xs font-body text-on-surface-variant">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">business_center</span>
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {job.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 bg-surface-container-low text-primary text-[10px] font-medium rounded-xs border border-outline-variant/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenApply(job)}
                  className="w-full py-2.5 bg-secondary hover:bg-primary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Apply Now</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIFE AT THETA & OPEN RESUME SUBMISSION */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
            Life at THETA
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            A collaborative workspace where engineering rigor meets continuous innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <div className="overflow-hidden rounded-xs bg-surface-container-low border border-outline-variant/20 aspect-4/3 sm:aspect-auto">
            <img
              src={plantImg1}
              alt="Automation Engineering Floor"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-xs bg-surface-container-low border border-outline-variant/20 aspect-4/3 sm:aspect-auto">
            <img
              src={teamImg}
              alt="THETA Team & Leadership"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-xs bg-surface-container-low border border-outline-variant/20 aspect-4/3 sm:aspect-auto">
            <img
              src={plantImg2}
              alt="Defence Electronics Assembly"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Open Resume Card */}
          <div className="p-6 bg-gradient-to-br from-primary to-[#001f3f] text-white rounded-xs flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-secondary text-[11px] font-bold uppercase tracking-widest block mb-2">
                Talent Community
              </span>
              <h3 className="font-display text-xl font-bold mb-2">
                Don't see a fit?
              </h3>
              <p className="font-body text-xs text-white/80 leading-relaxed mb-6">
                We are always seeking exceptional engineers and instrumentation specialists. Submit your open resume to our talent pool.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenApply()}
              className="w-full py-2.5 bg-secondary hover:bg-white hover:text-primary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors text-center shadow-xs cursor-pointer"
            >
              Submit Open Resume
            </button>
          </div>
        </div>
      </section>

      {/* 5. APPLICATION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-lg w-full rounded-xs shadow-2xl border border-outline-variant/30 overflow-hidden">
            <div className="p-5 bg-surface border-b border-outline-variant/15 flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-primary">
                  {selectedJobForModal ? `Apply for ${selectedJobForModal.title}` : 'Submit Open Resume'}
                </h3>
                <p className="font-body text-xs text-on-surface-variant">
                  {selectedJobForModal ? selectedJobForModal.department : 'THETA Controls Talent Pool'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-outline hover:text-primary cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="p-6">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mx-auto mb-3">
                    <span className="material-symbols-outlined text-[32px]">check_circle</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-primary mb-1">
                    Application Submitted!
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant max-w-xs mx-auto leading-relaxed mb-6">
                    Thank you for your interest in THETA Controls. Our engineering recruitment desk will review your profile and reach out.
                  </p>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-6 py-2 bg-secondary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-3.5">
                  <div>
                    <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Deshmukh"
                      value={applicantData.name}
                      onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="anand@example.com"
                        value={applicantData.email}
                        onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={applicantData.phone}
                        onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Total Experience *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 4.5 Years"
                        value={applicantData.experience}
                        onChange={(e) => setApplicantData({ ...applicantData, experience: e.target.value })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        LinkedIn / Portfolio Link
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        value={applicantData.portfolio}
                        onChange={(e) => setApplicantData({ ...applicantData, portfolio: e.target.value })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                      Brief Cover Note / Core Skills
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Highlight your key achievements, LabVIEW/PLC certifications, or notice period..."
                      value={applicantData.coverNote}
                      onChange={(e) => setApplicantData({ ...applicantData, coverNote: e.target.value })}
                      className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] text-outline">
                      Resumes routed to: <strong className="text-primary">careers@thetacontrols.com</strong>
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-secondary hover:bg-primary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
