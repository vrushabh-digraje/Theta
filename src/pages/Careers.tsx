import { FC, useState } from 'react';
import labHeroImg from '../assets/images/hero_split_electronics.jpg';
import plantImg1 from '../assets/images/hero_PAut1.jpg';
import plantImg2 from '../assets/images/hero_DS1.jpg';
import teamImg from '../assets/images/WHO_WE_ARE.jpg';
import { handleSmartEmailClick } from '../utils/email';

interface JobOpening {
  id: string;
  field: string;
  title: string;
  experience: string;
  location: string;
  preferredGender?: string;
  shortDescription: string;
  fullDescription: string[];
  responsibilities: string[];
  skills: string[];
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'senior-automation-engineer',
    field: 'Industrial Automation & PLC',
    title: 'Senior Automation Engineer',
    experience: '5+ Years Experience',
    location: 'Electronic Estate, Pune',
    preferredGender: 'Any / Equal Opportunity',
    shortDescription: 'Lead design and commissioning of PLC/SCADA control architectures, PID loop tuning, and industrial automation panels for process plant clients.',
    fullDescription: [
      'As a Senior Automation Engineer at THETA Controls, you will spearhead high-criticality automation turnkey projects for Tier-1 process plants, pharmaceutical units, and chemical facilities.',
      'You will translate user requirement specifications (URS) into robust functional design specifications (FDS), configure redundant PLC architectures, tune multi-loop PID controllers, and supervise on-site integration.',
    ],
    responsibilities: [
      'Design PLC programs (Siemens S7-1500 / TIA Portal, Rockwell ControlLogix, Mitsubishi).',
      'Develop intuitive SCADA / HMI graphics with comprehensive alarming, historical trending, and 21 CFR Part 11 compliance.',
      'Lead Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT) at customer facilities.',
      'Coordinate with electrical panel fabrication teams to ensure wiring schematics and safety interlocks match client engineering standards.',
    ],
    skills: ['Siemens TIA Portal', 'Rockwell PLC', 'SCADA / WinCC', 'PID Loop Tuning', 'Control Panel Engineering', 'FAT / SAT'],
  },
  {
    id: 'embedded-systems-engineer',
    field: 'Embedded Systems & Hardware',
    title: 'Embedded Systems Engineer',
    experience: '2–4 Years Experience',
    location: 'Electronic Estate, Pune',
    preferredGender: 'Any / Equal Opportunity',
    shortDescription: 'Develop real-time embedded firmwares for tactical motor drives, robotic manipulator controllers, and high-reliability defense telemetry systems.',
    fullDescription: [
      'Join our specialized R&D division designing ruggedized electronics and firmware for defense payloads, robotic rovers, and harsh-environment telemetry nodes.',
      'You will write bare-metal and RTOS firmware for ARM Cortex microcontrollers, implement deterministic communication buses, and perform board-level bring-up and debugging.',
    ],
    responsibilities: [
      'Develop clean, deterministic C/C++ embedded firmware on STM32 / NXP ARM Cortex-M series.',
      'Implement industrial and tactical communication protocols: Modbus-RTU, CANopen, RS-485, and SPI/I2C.',
      'Collaborate with hardware design engineers to troubleshoot PCB prototypes using oscilloscopes and logic analyzers.',
      'Execute environmental qualification tests adhering to MIL-STD / industrial environmental standards.',
    ],
    skills: ['Embedded C/C++', 'ARM Cortex-M', 'FreeRTOS', 'CAN / RS-485 / Modbus', 'Hardware Bring-up', 'Oscilloscopes & Logic Analyzers'],
  },
  {
    id: 'test-measurement-specialist',
    field: 'Test & Measurement / DAQ',
    title: 'Test & Measurement Specialist',
    experience: '3–5 Years Experience',
    location: 'Electronic Estate, Pune',
    preferredGender: 'Any / Equal Opportunity',
    shortDescription: 'Build automated end-of-line (EOL) test rigs, PXI instrumentation architectures, and high-speed data acquisition systems on National Instruments platforms.',
    fullDescription: [
      'THETA is a recognized National Instruments (NI) Alliance Partner. In this role, you will architect cutting-edge automated test benches (ATE) for automotive Tier-1s, defense laboratories, and aerospace subsystems.',
      'You will integrate PXIe chassis, sensor signal conditioning, automated switching matrices, and LabVIEW test sequencers.',
    ],
    responsibilities: [
      'Architect LabVIEW & TestStand automated test software suites.',
      'Interface dynamic sensors including strain gauges, accelerometers, thermocouples, LVDTs, and load cells.',
      'Design modular fixture wiring and automated test rack layouts.',
      'Generate automated test validation reports with statistical process control (SPC) analysis.',
    ],
    skills: ['NI LabVIEW', 'NI TestStand', 'PXI / cDAQ Systems', 'Sensor Signal Conditioning', 'Automated Test Rigs', 'Sensor Calibration'],
  },
  {
    id: 'iot-firmware-engineer',
    field: 'Industrial IoT & Telemetry',
    title: 'IoT Firmware & Gateway Engineer',
    experience: '2–5 Years Experience',
    location: 'Electronic Estate, Pune',
    preferredGender: 'Any / Equal Opportunity',
    shortDescription: 'Design low-power wireless telemetry nodes, industrial Modbus edge gateways, and encrypted MQTT cloud pipelines for plant safety.',
    fullDescription: [
      'Build connected IoT telemetry infrastructure bridging shop-floor field instruments to edge processors and cloud analytics platforms.',
      'Focus on toxic/combustible gas detection telemetry, environmental air quality monitoring, and remote predictive maintenance systems.',
    ],
    responsibilities: [
      'Develop firmware for wireless edge nodes utilizing 4G/LTE-M, NB-IoT, and LoRaWAN.',
      'Implement secure protocols: MQTT with TLS encryption, HTTP REST, and Modbus TCP.',
      'Optimize power consumption for battery-operated remote solar telemetry stations.',
      'Coordinate with cloud backend engineers for seamless gateway-to-cloud device provisioning.',
    ],
    skills: ['MQTT / HTTPS / TLS', 'Wireless Mesh / LoRa / 4G', 'Embedded Linux / ESP32', 'Modbus Gateway', 'Low-power Design'],
  },
  {
    id: 'mechanical-enclosure-designer',
    field: 'Mechanical & Enclosure Design',
    title: 'Mechanical & Enclosure Designer',
    experience: '3–6 Years Experience',
    location: 'Electronic Estate, Pune',
    preferredGender: 'Any / Equal Opportunity',
    shortDescription: 'Design MIL-grade ruggedized instrument housings, sheet metal control panel layouts, and thermal management enclosures using SolidWorks.',
    fullDescription: [
      'Responsible for the physical design and mechanical integrity of THETA’s product line, from DIN-rail mount instrumentation to IP65/67 weatherproof outdoor telemetry enclosures.',
      'Work in close synergy with electronics designers to manage thermal dissipation, vibration damping, and ingress protection.',
    ],
    responsibilities: [
      'Model 3D assemblies and generate detailed 2D fabrication drawings in SolidWorks / AutoCAD.',
      'Design precision sheet metal enclosures, CNC machined aluminum housings, and silicone gasket sealing channels.',
      'Conduct thermal dissipation simulations and mechanical shock/vibration tolerance calculations.',
      'Liaise with sheet metal laser cutting, bending, and powder-coating vendors in the Pune industrial corridor.',
    ],
    skills: ['SolidWorks 3D', 'Sheet Metal Fabrication', 'IP65/IP67 Ingress Sealing', 'Thermal Simulation', 'GD&T / DFM'],
  },
];

/**
 * Enterprise Careers Page for THETA Group.
 * Implements strict client requirements:
 * - Removed category classification buttons (Embedded Systems, Automation & PLC, etc.).
 * - Job card format: field, title, experience, location, short description, skills.
 * - Detail popup with: preferred gender (if applicable), full description, responsibilities.
 * - Screening Fields Form: Full name, Email (not Work email), phone number, Total Experience,
 *   Current/Expected CTC (optional), Notice Period (optional), linkedin profile,
 *   and Resume Upload (PDF/DOCX only, max 5 MB).
 * - Centralized HR Routing to careers@thetacontrols.com with standardized subject:
 *   [Job Role / General Query] - [Candidate Name]
 */
export const Careers: FC = () => {
  // Modal states: 'detail' | 'apply' | null
  const [activeModal, setActiveModal] = useState<'detail' | 'apply' | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Screening fields state
  const [applicantData, setApplicantData] = useState({
    fullName: '',
    email: '',
    phone: '',
    totalExperience: '',
    currentCtc: '',
    expectedCtc: '',
    noticePeriod: '',
    linkedin: '',
    resumeFile: null as File | null,
    resumeFileName: '',
    resumeFileSize: '',
  });

  const [resumeError, setResumeError] = useState<string>('');

  const handleOpenDetailModal = (job: JobOpening) => {
    setSelectedJob(job);
    setActiveModal('detail');
  };

  const handleOpenApplyModal = (job?: JobOpening) => {
    setSelectedJob(job || null);
    setFormSubmitted(false);
    setResumeError('');
    setActiveModal('apply');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeError('');
    const file = e.target.files?.[0];
    if (!file) return;

    // Check extension
    const validExtensions = ['.pdf', '.doc', '.docx'];
    const lowerName = file.name.toLowerCase();
    const isValidExtension = validExtensions.some((ext) => lowerName.endsWith(ext));

    if (!isValidExtension) {
      setResumeError('Invalid file format. Please upload PDF or DOCX only.');
      return;
    }

    // Check size (Max 5 MB = 5 * 1024 * 1024 bytes)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setResumeError('File size exceeds 5 MB limit. Please upload a smaller file.');
      return;
    }

    const sizeFormatted = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
    setApplicantData((prev) => ({
      ...prev,
      resumeFile: file,
      resumeFileName: file.name,
      resumeFileSize: sizeFormatted,
    }));
  };

  const handleRemoveResume = () => {
    setApplicantData((prev) => ({
      ...prev,
      resumeFile: null,
      resumeFileName: '',
      resumeFileSize: '',
    }));
    setResumeError('');
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantData.resumeFile) {
      setResumeError('Please upload your resume (PDF or DOCX, max 5 MB).');
      return;
    }
    setFormSubmitted(true);
  };

  // Standardized subject line format: [Job Role / General Query] - [Candidate Name]
  const targetRole = selectedJob ? selectedJob.title : 'General Query';
  const candidateName = applicantData.fullName.trim() || 'Candidate Name';
  const standardizedSubject = `[${targetRole}] - [${candidateName}]`;

  return (
    <div className="w-full pb-20">
      {/* 1. HERO BANNER WITH LIVE STATS COUNTERS */}
      <section className="relative bg-gradient-to-br from-[#00142e] via-[#002244] to-[#001124] text-white py-16 sm:py-24 overflow-hidden border-b border-outline-variant/15">
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
              Careers & Opportunities
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl mx-auto mb-4 leading-tight">
            Build Cutting-Edge Instrumentation & Automation Systems
          </h1>

          <p className="font-body text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join a 75+ member engineering team delivering mission-critical industrial automation, defense controllers, and precision recorders across India and global markets.
          </p>

          {/* 3 Stats Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 sm:p-5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xs border border-white/15 transition-all">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-0.5">30+</div>
              <div className="font-body text-xs text-white/70 uppercase tracking-wider">Years of Innovation</div>
            </div>

            <div className="p-4 sm:p-5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xs border border-white/15 transition-all">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-0.5">500+</div>
              <div className="font-body text-xs text-white/70 uppercase tracking-wider">Turnkey Projects</div>
            </div>

            <div className="p-4 sm:p-5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xs border border-white/15 transition-all">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-0.5">5</div>
              <div className="font-body text-xs text-white/70 uppercase tracking-wider">Group Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY JOIN THETA (4 FEATURE CARDS) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin py-16 sm:py-20 border-b border-outline-variant/15">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
            Why Build Your Career at THETA
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Collaborate directly with senior instrumentation leaders in an engineering-led environment designed for mastery and tangible industrial impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-secondary/10 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">memory</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                Siemens & NI Hardware Rigs
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Work hands-on with LabVIEW PXI, Siemens S7-1500, SCADA, and embedded ARM architectures.
              </p>
            </div>
          </div>

          <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-secondary/10 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">rocket_launch</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                Defense & High-Rel Projects
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Build mission-critical control subsystems for DRDO, robotic manipulators, and aerospace test beds.
              </p>
            </div>
          </div>

          <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-secondary/10 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">school</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                Prototyping & R&D Labs
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Dedicated hardware debugging labs, calibration benches, and direct technical mentorship.
              </p>
            </div>
          </div>

          <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-secondary/10 group-hover:bg-secondary text-secondary group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">public</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                Pan-India Industrial Reach
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Deploy automated test benches and instrumentation across manufacturing facilities nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPEN OPPORTUNITIES (JOB BOARD - CATEGORY BUTTONS REMOVED PER CLIENT SPEC) */}
      <section className="bg-surface-container-lowest/60 py-16 sm:py-20 border-b border-outline-variant/15">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
              Current Open Opportunities
            </h2>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Explore open engineering roles at our Pune facilities. Click on any job card for complete role specifications or to apply directly.
            </p>
          </div>

          {/* Job Listing Cards (Format: field, title, experience, location, short description, skills) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-surface-container-lowest border border-outline-variant/20 hover:border-secondary rounded-xs shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Field Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-secondary/10 text-secondary border border-secondary/20">
                      {job.field}
                    </span>
                    <span className="text-[10px] text-outline font-medium flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[12px] text-secondary">location_on</span>
                      <span>{job.location}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                    {job.title}
                  </h3>

                  {/* Experience */}
                  <div className="flex items-center gap-1.5 mb-3 text-xs font-body text-on-surface-variant font-medium">
                    <span className="material-symbols-outlined text-[16px] text-secondary">business_center</span>
                    <span>{job.experience}</span>
                  </div>

                  {/* Short Description */}
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4 line-clamp-3">
                    {job.shortDescription}
                  </p>

                  {/* Skills Badges */}
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

                {/* 2-Button Action Row: View Details & Apply Now */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-outline-variant/15">
                  <button
                    type="button"
                    onClick={() => handleOpenDetailModal(job)}
                    className="py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-primary font-body text-xs font-bold rounded-xs transition-colors flex items-center justify-center cursor-pointer border border-outline-variant/30"
                  >
                    <span>View Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenApplyModal(job)}
                    className="py-2.5 px-3 bg-secondary hover:bg-primary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Direct HR & Recruitment Desk (Single dedicated email position on Careers page) */}
          <div className="mt-12 p-5 sm:p-6 bg-surface-container-lowest border border-outline-variant/20 rounded-xs shadow-xs max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xs bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">mail</span>
              </div>
              <div>
                <h4 className="font-display text-sm sm:text-base font-bold text-primary">
                  Direct HR & Careers Desk
                </h4>
                <p className="font-body text-xs text-on-surface-variant">
                  For direct applications or recruitment inquiries, email our team:
                </p>
              </div>
            </div>
            <a
              href="mailto:careers@thetacontrols.com"
              onClick={(e) => handleSmartEmailClick('careers@thetacontrols.com', e)}
              className="font-mono text-xs sm:text-sm font-bold text-secondary hover:underline px-4 py-2.5 bg-surface-container-low hover:bg-secondary/10 border border-outline-variant/30 rounded-xs shrink-0 transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>careers@thetacontrols.com</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>

        </div>
      </section>

      {/* 4. LIFE AT THETA & TALENT COMMUNITY */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
            Life at THETA Controls
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            A collaborative workspace where engineering rigor meets continuous innovation and team camaraderie.
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
                General Application
              </span>
              <h3 className="font-display text-xl font-bold mb-2">
                Don’t See a Specific Fit?
              </h3>
              <p className="font-body text-xs text-white/80 leading-relaxed mb-6">
                We are always seeking exceptional engineers and instrumentation specialists. Submit your open resume to our talent pool.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenApplyModal()}
              className="w-full py-2.5 bg-secondary hover:bg-white hover:text-primary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors text-center shadow-xs cursor-pointer"
            >
              Submit Open Resume
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5A. POPUP 1: FULL JOB DETAILS MODAL (preferred gender, full description) */}
      {/* ========================================================================= */}
      {activeModal === 'detail' && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-2xl w-full max-h-[90vh] rounded-xs shadow-2xl border border-outline-variant/30 flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 bg-surface border-b border-outline-variant/15 flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-secondary/10 text-secondary border border-secondary/20 mb-2 inline-block">
                  {selectedJob.field}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">
                  {selectedJob.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-on-surface-variant font-body">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-secondary">business_center</span>
                    <span>{selectedJob.experience}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-secondary">location_on</span>
                    <span>{selectedJob.location}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-secondary">person</span>
                    <span>Preferred Gender: <strong className="text-primary">{selectedJob.preferredGender || 'Any'}</strong></span>
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                className="text-outline hover:text-primary cursor-pointer p-1 rounded-xs"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm font-body text-on-surface-variant">
              <div>
                <h4 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-2">
                  Role Overview
                </h4>
                {selectedJob.fullDescription.map((p, idx) => (
                  <p key={idx} className="leading-relaxed mb-2 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>

              <div>
                <h4 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-2">
                  Key Responsibilities
                </h4>
                <ul className="space-y-1.5 list-disc pl-5">
                  {selectedJob.responsibilities.map((r, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-2">
                  Required Technical Competencies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedJob.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 bg-surface-container text-primary text-xs font-medium rounded-xs border border-outline-variant/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 bg-surface-container-low border-t border-outline-variant/15 flex items-center justify-end">
              <button
                type="button"
                onClick={() => handleOpenApplyModal(selectedJob)}
                className="px-6 py-2.5 bg-secondary hover:bg-primary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Proceed to Apply</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5B. POPUP 2: SCREENING FIELDS APPLICATION FORM */}
      {/* ========================================================================= */}
      {activeModal === 'apply' && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-lg w-full max-h-[92vh] rounded-xs shadow-2xl border border-outline-variant/30 flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 bg-surface border-b border-outline-variant/15 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary">
                  {selectedJob ? `Apply for ${selectedJob.title}` : 'Submit Open Resume'}
                </h3>
                <p className="font-body text-xs text-on-surface-variant">
                  {selectedJob ? selectedJob.field : 'THETA Talent Community'}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                className="text-outline hover:text-primary cursor-pointer p-1"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-6 overflow-y-auto">
              {formSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[36px]">check_circle</span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-primary mb-2">
                    Application Successfully Dispatched!
                  </h4>
                  
                  {/* Standardized Subject Line Confirmation */}
                  <div className="bg-surface-container-low p-4 rounded-xs border border-outline-variant/20 text-left mb-6 space-y-2">
                    <div className="text-[11px] text-outline font-bold uppercase tracking-wider">
                      Standardized Email Dispatch Details:
                    </div>
                    <div className="text-xs text-primary">
                      Recipient Inbox: <span className="font-mono font-semibold text-secondary">careers@thetacontrols.com</span>
                    </div>
                    <div className="text-xs text-primary">
                      Standardized Subject: <span className="font-mono bg-surface-container px-2 py-0.5 rounded-2xs text-secondary font-bold">{standardizedSubject}</span>
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      Attached Resume: <span className="font-semibold">{applicantData.resumeFileName} ({applicantData.resumeFileSize})</span>
                    </div>
                  </div>

                  <p className="font-body text-xs text-on-surface-variant max-w-sm mx-auto leading-relaxed mb-6">
                    Thank you, <strong className="text-primary">{applicantData.fullName}</strong>. Your profile and resume have been delivered directly to THETA Controls HR management.
                  </p>

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 py-2.5 bg-secondary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-3.5">
                  
                  {/* 1. Full name */}
                  <div>
                    <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Deshmukh"
                      value={applicantData.fullName}
                      onChange={(e) => setApplicantData({ ...applicantData, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  {/* 2. Email (LABEL IS "Email", NOT "Work email") & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="anand@example.com"
                        value={applicantData.email}
                        onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
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
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  {/* 3. Total Experience & Notice Period (optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Total Experience *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 4.5 Years"
                        value={applicantData.totalExperience}
                        onChange={(e) => setApplicantData({ ...applicantData, totalExperience: e.target.value })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Notice Period <span className="text-outline font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Immediate / 30 Days"
                        value={applicantData.noticePeriod}
                        onChange={(e) => setApplicantData({ ...applicantData, noticePeriod: e.target.value })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  {/* 4. Current & Expected CTC (two separate fields) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Current CTC <span className="text-outline font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹7.5 LPA"
                        value={applicantData.currentCtc}
                        onChange={(e) => setApplicantData({ ...applicantData, currentCtc: e.target.value })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                        Expected CTC <span className="text-outline font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹10 LPA"
                        value={applicantData.expectedCtc}
                        onChange={(e) => setApplicantData({ ...applicantData, expectedCtc: e.target.value })}
                        className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  {/* 5. LinkedIn Profile */}
                  <div>
                    <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                      LinkedIn Profile Link
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={applicantData.linkedin}
                      onChange={(e) => setApplicantData({ ...applicantData, linkedin: e.target.value })}
                      className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xs font-body text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  {/* 6. Resume Upload (PDF/DOCX only, max 5 MB) */}
                  <div>
                    <label className="block font-body text-[11px] font-bold text-outline uppercase tracking-wider mb-1">
                      Resume Upload * <span className="text-outline font-normal">(PDF / DOCX only, max 5 MB)</span>
                    </label>
                    
                    {!applicantData.resumeFile ? (
                      <label className="border-2 border-dashed border-outline-variant/40 hover:border-secondary rounded-xs p-4 flex flex-col items-center justify-center cursor-pointer bg-surface-container-low/50 hover:bg-secondary/5 transition-all">
                        <span className="material-symbols-outlined text-secondary text-[28px] mb-1">upload_file</span>
                        <span className="font-body text-xs font-bold text-primary">Click to select resume file</span>
                        <span className="font-body text-[10px] text-outline mt-0.5">Supported: .pdf, .docx, .doc (Up to 5 MB)</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    ) : (
                      <div className="p-3 bg-secondary/10 border border-secondary/30 rounded-xs flex items-center justify-between">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <span className="material-symbols-outlined text-secondary text-[24px]">description</span>
                          <div className="truncate">
                            <div className="text-xs font-bold text-primary truncate">{applicantData.resumeFileName}</div>
                            <div className="text-[10px] text-outline">{applicantData.resumeFileSize}</div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveResume}
                          className="text-outline hover:text-error p-1 cursor-pointer shrink-0"
                          title="Remove file"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    )}

                    {resumeError && (
                      <p className="mt-1.5 text-[11px] text-error font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">error</span>
                        <span>{resumeError}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-secondary hover:bg-primary text-white font-body text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-xs cursor-pointer"
                    >
                      Submit Application
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
