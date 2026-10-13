import rovImg from '../assets/images/hero_DS1.jpg';
import switchImg from '../assets/images/hero_network_switch.jpg';
import recorderImg from '../assets/images/hero_PAut1.jpg';
import electronicsImg from '../assets/images/hero_split_electronics.jpg';
import iotImg from '../assets/images/hero_IoT1.jpg';
import networkingImg from '../assets/images/hero_INet1.jpg';
import microscopeImg from '../assets/images/dinolite.jpg';
import architectureImg from '../assets/images/feature_architecture.jpg';
import whoWeAreImg from '../assets/images/WHO_WE_ARE.jpg';
import beldenImg from '../assets/images/belden.jpg';
import niLogo from '../assets/images/ni.png';

export interface SubCategoryCard {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  badge: string;
  features: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  link: string;
  icon: string;
  image: string;
  description: string;
  subCategories: string[];
  subCategoryCards: SubCategoryCard[];
  keySpecs?: string[];
}

export interface SolutionItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  link: string;
  icon: string;
  image: string;
  description: string;
  subCategories: string[];
  subCategoryCards: SubCategoryCard[];
  capabilities?: string[];
}

export const productsData: ProductItem[] = [
  {
    id: 'rov',
    name: 'ROV – Remote Operated Vehicles',
    tagline: 'Strategic Defence & Hazardous Environment Robotics',
    category: 'Defence & Robotics',
    link: '/defence-systems',
    icon: 'shield',
    image: rovImg,
    description: 'Ruggedized tactical microelectronics, motor speed controllers, and remote robotic drive units engineered for strategic defence applications such as DRDO "Daksh" and hazardous field operations.',
    subCategories: [
      'Tactical ROV Motor Controllers',
      'Explosive Ordnance Disposal (EOD) Robotic Drives',
      'Embedded Telemetry & Vision Transceivers',
      'Tactical Power Distribution Units'
    ],
    subCategoryCards: [
      {
        id: 'rov-motor-controllers',
        name: 'Tactical ROV Motor Controllers',
        icon: 'speed',
        image: rovImg,
        badge: 'MIL-STD Rugged',
        description: 'Tactical DC motor speed control units with high current pulse-width modulation and fail-safe safety limits.',
        features: ['ARM/8051 Microcontroller Based', 'Proportional Speed Modulation', 'Current Limit Protection', 'Vibration Resistant Chassis']
      },
      {
        id: 'rov-eod-drives',
        name: 'Explosive Ordnance Disposal (EOD) Robotic Drives',
        icon: 'precision_manufacturing',
        image: rovImg,
        badge: 'DRDO Daksh',
        description: 'Heavy-torque actuator drives and robotic manipulator control cards engineered for ordnance handling robots.',
        features: ['High-Torque Arm Positioning', 'Zero-Backlash Closed Loop', 'Thermal Shock Resistance', 'Fail-Safe Mechanical Braking']
      },
      {
        id: 'rov-telemetry',
        name: 'Embedded Telemetry & Vision Transceivers',
        icon: 'videocam',
        image: rovImg,
        badge: 'Real-Time Video',
        description: 'Low-latency video telemetry and bidirectional digital command links for tactical robots operating in RF-noisy areas.',
        features: ['Real-Time Video Multiplexing', 'Encrypted Telemetry Stream', 'Long-Distance Tethered Interface', 'EMI/EMC Shielded Enclosure']
      },
      {
        id: 'rov-power-distribution',
        name: 'Tactical Power Distribution Units',
        icon: 'battery_charging_full',
        image: electronicsImg,
        badge: 'Isolated Multi-Rail',
        description: 'Ruggedized power management and thermal isolation modules ensuring stable voltage rail supply in defense field gear.',
        features: ['Multi-Rail DC-DC Regulation', 'Over-Voltage Surge Clamping', 'Battery Health Monitoring', 'MIL-STD-810G Environmental Grade']
      }
    ],
    keySpecs: ['MIL-STD Compliant', 'Real-time Embedded ARM', 'Fail-Safe Motor Drives', 'Extreme EMI/EMC Tolerance']
  },
  {
    id: 'industrial-switches',
    name: 'Industrial Switches',
    tagline: 'Rugged Hirschmann & Belden Ethernet Switching',
    category: 'Industrial Networking',
    link: '/industrial-networking',
    icon: 'lan',
    image: switchImg,
    description: 'High-availability industrial Ethernet switches, secure routers, and media convertors built for mission-critical substation automation, factory floors, and extreme operating temperatures.',
    subCategories: [
      'Unmanaged DIN Rail Mount Switches',
      'Managed DIN Rail Mount Switches',
      'Substation Switches',
      'Commercial Grade Switch',
      'Industrial Cellular Routers',
      'IP 67 Waterproof Switches',
      'Backbone Switches',
      'Industrial Wireless LAN',
      'Security, Firewall and VPN Appliances',
      'Network Management Software',
      'Fiber Convertors',
      'Cables & Accessories',
      'Serial to Ethernet Media Convertors',
      'Embedded Ethernet',
      'Secure Remote Access Solution'
    ],
    subCategoryCards: [
      {
        id: 'unmanaged-din-switches',
        name: 'Unmanaged DIN Rail Mount Switches',
        icon: 'lan',
        image: switchImg,
        badge: 'Plug & Play',
        description: 'Plug-and-play industrial Ethernet switches with 10/100/1000 Mbps copper ports and rugged metal IP30 enclosures.',
        features: ['5 to 24 Fast/Gigabit Ports', 'Redundant 12–48V DC Power Inputs', '-40°C to +70°C Operating Range', 'DIN-Rail / Wall Mount']
      },
      {
        id: 'managed-din-switches',
        name: 'Managed DIN Rail Mount Switches',
        icon: 'hub',
        image: beldenImg,
        badge: 'HIPER-Ring <10ms',
        description: 'L2/L3 managed switches featuring HIPER-Ring fast redundancy (<10ms), IEEE 802.1Q VLANs, QoS, and SNMP monitoring.',
        features: ['Sub-10ms Ring Recovery', 'VLAN, QoS & Port Mirroring', 'PROFINET & EtherNet/IP Profiles', 'Cybersecurity Port Locks']
      },
      {
        id: 'substation-switches',
        name: 'Substation Switches',
        icon: 'electric_bolt',
        image: switchImg,
        badge: 'IEC 61850-3',
        description: 'IEC 61850-3 & IEEE 1613 compliant rugged switches with zero packet loss under extreme electromagnetic interference.',
        features: ['IEC 61850-3 Certified', 'IEEE 1588v2 Precision Timing (PTP)', 'Zero-Jitter GOOSE Messaging', 'Redundant High-Voltage Power']
      },
      {
        id: 'commercial-switches',
        name: 'Commercial Grade Switch',
        icon: 'router',
        image: networkingImg,
        badge: 'Control Room Grade',
        description: 'Cost-effective Ethernet switches designed for industrial control rooms, office automation, and non-harsh environments.',
        features: ['High Port Density', 'Low Energy Consumption (EEE)', 'Desktop / 19" Rackmount', 'Plug-and-Play Simplicity']
      },
      {
        id: 'cellular-routers',
        name: 'Industrial Cellular Routers',
        icon: 'cell_tower',
        image: switchImg,
        badge: '4G LTE / 5G Dual SIM',
        description: 'Rugged 4G LTE/5G gateways with dual SIM failover, GPS telemetry, and IPsec VPN for remote edge installations.',
        features: ['Dual SIM Auto-Failover', '4G LTE / 5G High-Speed Uplink', 'Built-in IPsec & OpenVPN', 'Serial RS232/485 Interface']
      },
      {
        id: 'waterproof-switches',
        name: 'IP 67 Waterproof Switches',
        icon: 'water_drop',
        image: beldenImg,
        badge: 'IP67 Washdown',
        description: 'Hermetically sealed washdown switches with M12 connectors engineered for food & beverage and extreme outdoor use.',
        features: ['IP67 Hermetic Ingress Protection', 'Vibration-Proof M12 Connectors', 'Resistant to High-Pressure Washdown', 'Operating Temp -40°C to +75°C']
      },
      {
        id: 'backbone-switches',
        name: 'Backbone Switches',
        icon: 'dns',
        image: switchImg,
        badge: '10G/40G Fiber Backbones',
        description: 'High-density 10 Gigabit / 40 Gigabit modular rackmount switches for industrial plant backbones.',
        features: ['10G / 40G Fiber Uplinks', 'Hot-Swappable Power Supplies', 'Layer 3 Wire-Speed Routing', 'Sub-Millisecond Latency']
      },
      {
        id: 'industrial-wlan',
        name: 'Industrial Wireless LAN',
        icon: 'wifi',
        image: networkingImg,
        badge: 'Wi-Fi 6 AGV Bridges',
        description: 'Rugged Wi-Fi 6 access points, client bridges, and repeaters designed for automated guided vehicles (AGVs) and mobile machinery.',
        features: ['Fast Roaming (<30ms Handover)', 'Dual-Band 2.4 / 5 GHz Antennas', 'MIMO Multi-Path Transmission', 'Industrial IP67 Metal Housing']
      },
      {
        id: 'security-firewalls',
        name: 'Security, Firewall and VPN Appliances',
        icon: 'shield_with_heart',
        image: beldenImg,
        badge: 'Tofino SCADA DPI',
        description: 'Tofino security appliances offering deep packet inspection (DPI) for Modbus, OPC, and EtherNet/IP SCADA protocols.',
        features: ['SCADA Deep Packet Inspection (DPI)', 'Test Mode Zero-Downtime Deployment', 'Zone & Conduit Segmentation', 'Cybersecurity Threat Defense']
      },
      {
        id: 'network-software',
        name: 'Network Management Software',
        icon: 'monitoring',
        image: switchImg,
        badge: 'HiVision Topology NMS',
        description: 'Industrial HiVision software providing automatic network topology mapping, firmware updates, and event logging.',
        features: ['Auto-Topology Discovery', 'Real-Time Health Dashboard', 'Centralized Firmware Deployment', 'Syslog & SNMP Trap Logging']
      },
      {
        id: 'fiber-convertors',
        name: 'Fiber Convertors',
        icon: 'settings_ethernet',
        image: networkingImg,
        badge: 'Up to 120km Optics',
        description: 'Multi-mode to single-mode optical media converters for noise-immune long-distance communications up to 120km.',
        features: ['Multi-Mode & Single-Mode Optics', 'Link Fault Pass-Through (LFPT)', 'Noise Immune Galvanic Isolation', 'DIN-Rail Mountable']
      },
      {
        id: 'cables-accessories',
        name: 'Cables & Accessories',
        icon: 'cable',
        image: switchImg,
        badge: 'Shielded M12/RJ45',
        description: 'Shielded industrial CAT6A patch cables, M12 cordsets, SFP optical transceivers, and DIN-rail power supplies.',
        features: ['High-Flex Robot Rated Cables', 'Shielded RJ45 & M12 Connectors', 'Wide-Temp SFP Optical Transceivers', 'Industrial DIN-Rail PSU']
      },
      {
        id: 'serial-media-convertors',
        name: 'Serial to Ethernet Media Convertors',
        icon: 'compare_arrows',
        image: networkingImg,
        badge: 'RS232/485 to TCP',
        description: 'Hardware bridges converting RS-232, RS-422, and RS-485 serial communication directly to Ethernet TCP/IP.',
        features: ['Virtual COM Port Driver', 'Modbus RTU to Modbus TCP', '15kV Serial ESD Protection', 'Baud Rates up to 921.6 kbps']
      },
      {
        id: 'embedded-ethernet',
        name: 'Embedded Ethernet',
        icon: 'memory',
        image: iotImg,
        badge: 'OEM Core Modules',
        description: 'Compact drop-in core Ethernet controller modules for direct OEM integration into specialized industrial instruments.',
        features: ['Ultra-Compact Modular Footprint', 'Direct SPI / UART Host Interface', 'Ready-to-Use TCP/IP Stack', 'Extended Temperature Rating']
      },
      {
        id: 'remote-access-solution',
        name: 'Secure Remote Access Solution',
        icon: 'vpn_key',
        image: beldenImg,
        badge: 'Zero-Trust Cloud VPN',
        description: 'Cloud-managed encrypted remote diagnostics gateways allowing zero-trust remote programming of field PLCs.',
        features: ['Zero-Trust Architecture', 'End-to-End TLS 1.3 Encryption', 'Granular Role-Based Access', 'Instant Remote Maintenance']
      }
    ],
    keySpecs: ['Sub-10ms Redundancy (HIPER-Ring)', 'IEC 61850-3 Substation Rated', '-40°C to +75°C Range', 'Built-in Hardware Firewalls']
  },
  {
    id: 'paperless-recorders',
    name: 'Paperless Recorders',
    tagline: 'High-Precision Digital Data Logging & Process Audit',
    category: 'Process Automation',
    link: '/industrial-automation',
    icon: 'edit_note',
    image: recorderImg,
    description: 'Advanced touch-screen graphic paperless recorders featuring multi-channel universal inputs, cryptographic audit trails, batch recording, and FDA 21 CFR Part 11 compliant data integrity.',
    subCategories: [
      'Multi-Channel Touch Paperless Recorders',
      'Universal Analog Input Logging Modules',
      'Batch Reporting & Math Formula Logging',
      '21 CFR Part 11 Compliant Secure Data Storage'
    ],
    subCategoryCards: [
      {
        id: 'touch-recorders',
        name: 'Multi-Channel Touch Graphic Recorders',
        icon: 'touch_app',
        image: recorderImg,
        badge: 'Color Touch TFT',
        description: 'Vibrant color TFT touchscreen displays with real-time multi-curve trend visualization and historical data search.',
        features: ['5.6" to 12.1" Touchscreen TFT', 'Real-Time Trend Curves & Bar Graphs', 'Circular Chart Emulation Mode', 'Fast Sampling Interval (100ms)']
      },
      {
        id: 'analog-input-modules',
        name: 'Universal Analog Input Logging Modules',
        icon: 'input',
        image: electronicsImg,
        badge: 'Universal Channels',
        description: 'Freely configurable inputs supporting thermocouples, RTDs, 4-20mA current, and DC voltage without hardware changes.',
        features: ['Thermocouple & RTD Inputs', '4–20mA / 0–10V Universal Signals', 'High Galvanic Channel Isolation', 'Up to 48 Input Channels']
      },
      {
        id: 'math-formula-logging',
        name: 'Batch Reporting & Math Formula Logging',
        icon: 'calculate',
        image: recorderImg,
        badge: 'Auto Batch Math',
        description: 'Programmable mathematical channels for flow totalization, mass balance calculations, and automated batch report generation.',
        features: ['Real-Time Math Calculations', 'Custom Formula Expressions', 'Automated Daily/Monthly Reports', 'CSV & PDF Direct Export']
      },
      {
        id: 'cfr21-compliant-storage',
        name: '21 CFR Part 11 Compliant Secure Data Storage',
        icon: 'verified_user',
        image: recorderImg,
        badge: '21 CFR Part 11 Audit',
        description: 'Cryptographic data integrity with encrypted internal flash storage, user permission levels, and digital signature audit trails.',
        features: ['FDA 21 CFR Part 11 Compliance', 'Encrypted Binary Data Files', 'Multi-Level Password Security', 'Electronic Signature Audit Trail']
      }
    ],
    keySpecs: ['Up to 48 Universal Channels', 'Real-Time Trend Visualizer', 'Encrypted Flash Storage', 'Ethernet Modbus TCP / MQTT']
  },
  {
    id: 'power-controllers',
    name: 'Power Controllers',
    tagline: 'Precision Thyristor & SCR Power Regulators',
    category: 'Power Electronics',
    link: '/industrial-automation',
    icon: 'bolt',
    image: electronicsImg,
    description: 'State-of-the-art analog and digital SCR power regulators delivering ultra-smooth, proportional phase angle or zero-cross firing control for heavy industrial heating and furnace applications.',
    subCategories: [
      'Jaki – Analog Power Regulators',
      'Theta – Analog Power Regulators',
      'Autonics – Digital Power Regulators',
      'Theta – Digital Power Regulators'
    ],
    subCategoryCards: [
      {
        id: 'jaki-analog-regulators',
        name: 'Jaki – Analog Power Regulators',
        icon: 'tune',
        image: electronicsImg,
        badge: 'Phase Angle SCR',
        description: 'Field-proven analog thyristor regulators with manual dial and 4-20mA input for proportional heating control.',
        features: ['Linear Phase-Angle Control', '4–20mA / 1–5V Analog Command', 'Built-in Fast Semiconductor Fuse', 'Single-Phase & Three-Phase Models']
      },
      {
        id: 'theta-analog-regulators',
        name: 'Theta – Analog Power Regulators',
        icon: 'bolt',
        image: electronicsImg,
        badge: 'Heavy Furnace Grade',
        description: 'In-house engineered rugged SCR power units with high overload capacity designed for heavy industrial furnaces.',
        features: ['High Surge Current Tolerance', 'Heater Burnout Alarm Indication', 'Zero-Crossing & Phase Angle Firing', 'Rugged Extruded Heatsink']
      },
      {
        id: 'autonics-digital-regulators',
        name: 'Autonics – Digital Power Regulators',
        icon: 'speed',
        image: recorderImg,
        badge: 'Dual LED Digital',
        description: 'Microprocessor-controlled digital power controllers with dual display, RS485 Modbus, and multi-firing modes.',
        features: ['Dual 7-Segment LED Display', 'RS485 Modbus RTU Interface', 'Cycle & Phase Control Selectable', 'Constant Current / Voltage Feedback']
      },
      {
        id: 'theta-digital-regulators',
        name: 'Theta – Digital Power Regulators',
        icon: 'developer_board',
        image: electronicsImg,
        badge: 'Up to 800A Heavy Load',
        description: 'Advanced digital SCR regulators with constant current, constant voltage, and constant power feedback modes.',
        features: ['Microprocessor Closed-Loop Feedback', 'Current Limit & Soft Start Trim', 'Comprehensive Diagnostic Alarms', 'Capacities from 25A to 800A']
      }
    ],
    keySpecs: ['Phase Angle & Zero Crossing Firing', '25A to 800A Load Capacities', 'Constant Current / Voltage Feedback', 'Heater Breakage Alarm']
  },
  {
    id: 'pid-profile-controllers',
    name: 'PID / Profile Controllers',
    tagline: 'Intelligent Multi-Segment Ramp/Soak Controllers',
    category: 'Process Automation',
    link: '/industrial-automation',
    icon: 'tune',
    image: recorderImg,
    description: 'High-accuracy single-loop and multi-loop digital temperature and process controllers with programmable ramp/soak profiles, auto-tuning fuzzy logic, and universal sensor inputs.',
    subCategories: [
      'PID Controllers',
      'Profile Controllers',
      'Multi-loop Controllers'
    ],
    subCategoryCards: [
      {
        id: 'pid-controllers',
        name: 'PID Controllers',
        icon: 'tune',
        image: recorderImg,
        badge: '50ms Fast Sampling',
        description: 'Precision single-loop temperature/process controllers with 50ms sampling speed and fuzzy logic auto-tuning.',
        features: ['Fuzzy Logic Auto-Tuning Algorithm', '50ms High-Speed Sampling', 'Universal TC, RTD, Voltage & Current', 'Relay, SSR & Analog 4-20mA Output']
      },
      {
        id: 'profile-controllers',
        name: 'Profile Controllers',
        icon: 'timeline',
        image: recorderImg,
        badge: '300 Ramp/Soak Segments',
        description: 'Multi-pattern ramp/soak controllers with up to 300 program segments for complex metallurgical heat-treatment.',
        features: ['Up to 300 Programmable Segments', 'Ramp Rate & Soak Time Control', 'Event Wait & Repeat Functions', 'Dual Display Setpoint Visualization']
      },
      {
        id: 'multiloop-controllers',
        name: 'Multi-loop Controllers',
        icon: 'view_column',
        image: electronicsImg,
        badge: 'Modular 2–8 Loops',
        description: 'Compact multi-channel controllers allowing synchronized regulation of 2, 4, or 8 process loops in a single housing.',
        features: ['Modular 2 to 8 Control Loops', 'Independent Loop Tuning', 'Modbus TCP / RTU Communications', 'Space-Saving DIN Rail or Panel Mount']
      }
    ],
    keySpecs: ['50ms High-Speed Sampling', 'Up to 300 Ramp/Soak Patterns', 'Fuzzy Logic Auto-Tuning', 'Dual Retransmission Outputs']
  },
  {
    id: 'sensors-panel-accessories',
    name: 'Sensors and Control Panel Accessories',
    tagline: 'Instrumentation, Panel Meters & Surge Protection',
    category: 'Field Instrumentation',
    link: '/industrial-automation',
    icon: 'sensors',
    image: electronicsImg,
    description: 'Comprehensive portfolio of field instrumentation, photoelectric and rotary sensors, digital panel meters, timers/counters, and surge protection devices for industrial control cabinets.',
    subCategories: [
      'Counters / Timers',
      'Pressure Sensors and Transmitters',
      'Measurement and Indication (Indicators / Panel Meters / Display Units)',
      'Rotary Encoders',
      'Door / Area Sensors',
      'Interface Units',
      'Optical Sensors (Colour Mark / Photoelectric)',
      'Control Switchgears and Accessories',
      'Surge Protection Devices'
    ],
    subCategoryCards: [
      {
        id: 'counters-timers',
        name: 'Counters / Timers',
        icon: 'timer',
        image: electronicsImg,
        badge: '10kHz High Speed',
        description: 'High-frequency digital batch counters, tachometers, and programmable multi-function interval timers.',
        features: ['Multi-Function Counting Modes', 'High-Speed Input up to 10kHz', 'Dual Preset Output Relays', 'Bright LED Digital Readout']
      },
      {
        id: 'pressure-sensors',
        name: 'Pressure Sensors and Transmitters',
        icon: 'speed',
        image: electronicsImg,
        badge: '4–20mA Piezoresistive',
        description: 'Stainless steel piezoresistive pressure transmitters with 4-20mA / 0-10V outputs for hydraulic and pneumatic lines.',
        features: ['Gauge & Absolute Pressure Types', 'High Burst Pressure Margin', '4–20mA Proportional Output', 'Corrosion-Resistant Diaphragm']
      },
      {
        id: 'panel-meters',
        name: 'Measurement and Indication (Panel Meters)',
        icon: 'display_settings',
        image: recorderImg,
        badge: 'Class 0.2 Precision',
        description: 'Universal digital panel meters for DC/AC voltage, current, process signals, load cells, and temperature sensors.',
        features: ['Universal Input Scaling', 'Class 0.2 High Accuracy', 'Programmable High/Low Alarm Relays', 'Isolated Analog Retransmission']
      },
      {
        id: 'rotary-encoders',
        name: 'Rotary Encoders',
        icon: 'rotate_right',
        image: electronicsImg,
        badge: '10,000 PPR High Res',
        description: 'Incremental and absolute optical rotary encoders offering resolutions up to 10,000 pulses per revolution.',
        features: ['Resolutions up to 10,000 PPR', 'Shaft & Hollow Shaft Variants', 'Push-Pull, Line Driver, Totem Pole', 'IP65 Rugged Metal Housing']
      },
      {
        id: 'door-area-sensors',
        name: 'Door / Area Sensors',
        icon: 'door_front',
        image: electronicsImg,
        badge: 'Category 4 Safety',
        description: 'Safety light curtains, multi-beam optical area sensors, and door safety interlock switches for machine safeguarding.',
        features: ['Category 4 Safety Light Curtains', 'Multi-Beam Area Detection', 'Fast Response Time (<15ms)', 'Finger, Hand & Body Resolution']
      },
      {
        id: 'interface-units',
        name: 'Interface Units',
        icon: 'swap_horiz',
        image: electronicsImg,
        badge: 'DIN-Rail Isolation',
        description: 'High-density DIN-rail relay interface modules, optocoupler isolators, and pre-wired screw terminals.',
        features: ['Compact Relay Modules (1/4/8/16 CH)', 'Optocoupler High-Voltage Isolation', 'Push-in Spring & Screw Terminals', 'LED Coil Status Indication']
      },
      {
        id: 'optical-sensors',
        name: 'Optical Sensors (Photoelectric)',
        icon: 'visibility',
        image: electronicsImg,
        badge: 'RGB Mark / IP67',
        description: 'High-speed color mark sensors, background suppression optical sensors, and polarized retro-reflective units.',
        features: ['Color Mark RGB Contrast Detection', 'Long Sensing Range up to 30m', 'Polarized Retro-Reflective Optics', 'Waterproof IP67 Construction']
      },
      {
        id: 'control-switchgears',
        name: 'Control Switchgears and Accessories',
        icon: 'toggle_on',
        image: electronicsImg,
        badge: '22mm / 30mm Cutouts',
        description: 'Heavy-duty industrial pushbuttons, selector switches, emergency stop switches, and LED indicator lamps.',
        features: ['22mm & 30mm Industrial Cutouts', 'Twist-to-Reset Emergency Stops', 'Long-Life LED Pilot Indicators', 'Heavy Mechanical Life (100k+ cycles)']
      },
      {
        id: 'surge-protection',
        name: 'Surge Protection Devices',
        icon: 'thunderstorm',
        image: electronicsImg,
        badge: 'Type 1+2 40kA Clamping',
        description: 'Type 1 and Type 2 SPD surge suppressors protecting sensitive PLCs and instrumentation from lightning strikes.',
        features: ['Type 1 + Type 2 Surge Arresters', 'High Discharge Capacity (up to 40kA)', 'Thermal Disconnect Indication', 'Remote Alarm Signaling Contact']
      }
    ],
    keySpecs: ['IP67 Sealed Housing', 'Class 0.2 High-Accuracy Indication', 'Universal Power 85–265V AC/DC', 'Type 1+2 Surge Suppression']
  },
  {
    id: 'tibbo-tps',
    name: 'Tibbo Project System (TPS)',
    tagline: 'Modular Edge Automation & Custom I/O Platform',
    category: 'IoT & Telemetry',
    link: '/iot-components',
    icon: 'memory',
    image: iotImg,
    description: 'Highly versatile modular IoT hardware architecture allowing engineers to assemble custom programmable controllers using modular Tibbit blocks (relays, ADCs, RS485, sensors, cellular).',
    subCategories: [
      'Base Boards (Compact & Standard Linux/TiOS)',
      'Tibbits (Modular I/O, Communication & Sensor Blocks)'
    ],
    subCategoryCards: [
      {
        id: 'tps-base-boards',
        name: 'Base Boards',
        icon: 'developer_board',
        image: iotImg,
        badge: 'Linux / TiOS Platform',
        description: 'Standard and compact Linux/TiOS programmable carrier boards with Ethernet, power supply, and modular sockets.',
        features: ['Linux & TiOS OS Support', '100BASE-T Ethernet Interface', 'Sockets for Multiple Tibbit Modules', 'DIN-Rail & Surface Mounting']
      },
      {
        id: 'tps-tibbits',
        name: 'Tibbits (Modular I/O Blocks)',
        icon: 'extension',
        image: iotImg,
        badge: '60+ Modular Blocks',
        description: 'Over 60 miniature plug-in color-coded I/O blocks including relays, opto-isolated inputs, ADCs, DACs, and serial ports.',
        features: ['60+ Modular Functional Blocks', 'Relays, Isolated Opto Inputs, ADCs', 'RS232 / RS485 / CAN Modules', 'Wi-Fi, Bluetooth & 4G Modules']
      }
    ],
    keySpecs: ['100+ Plug-and-Play Tibbit Blocks', 'Linux or Tibbo OS (TiOS)', 'Node-RED & Python Compatible', 'Din-Rail & Panel Mount Enclosure']
  },
  {
    id: 'sp7021-linux-board',
    name: 'Linux chip SP7021 & Linux Board',
    tagline: 'Quad-Core Industrial ARM Cortex-A7 Gateways',
    category: 'Embedded Computing',
    link: '/iot-components',
    icon: 'developer_board',
    image: iotImg,
    description: 'Quad-core ARM Cortex-A7 industrial Linux controller boards and development systems designed for real-time edge computing, IIoT gateways, dual Ethernet routing, and protocol bridges.',
    subCategories: [
      'Plus1 CHIP LINUX Based SP7021 Controller Board',
      'LINUX Development Board-LTPP3G2'
    ],
    subCategoryCards: [
      {
        id: 'sp7021-chip-board',
        name: 'Plus1 CHIP LINUX Based SP7021 Controller Board',
        icon: 'memory',
        image: iotImg,
        badge: 'Quad-Core Cortex-A7',
        description: 'Quad-core ARM Cortex-A7 system-on-chip with integrated LPDDR3 RAM, designed for high-throughput edge controllers.',
        features: ['Quad-Core ARM Cortex-A7 @ 1.0 GHz', 'Integrated 512MB LPDDR3 RAM', 'Dual Gigabit Ethernet Ports', 'Yocto Linux & Debian Supported']
      },
      {
        id: 'linux-dev-board',
        name: 'LINUX Development Board-LTPP3G2',
        icon: 'grid_view',
        image: iotImg,
        badge: 'Dual Gigabit LAN',
        description: 'Complete industrial carrier system with dual gigabit Ethernet, USB, micro-SD, and expansion headers for embedded Linux.',
        features: ['Modular Carrier Architecture', 'Dual 1000BASE-T Ethernet', 'USB 2.0 Host & Micro-SD Slot', 'Industrial -40°C to +85°C Rating']
      }
    ],
    keySpecs: ['Quad-Core ARM Cortex-A7 @ 1.0 GHz', 'Dual 1000BASE-T Ethernet', '512MB / 1GB LPDDR3 RAM', 'Extended Industrial Temp Range']
  },
  {
    id: 'serial-ethernet-controller',
    name: 'Serial to Ethernet Controller',
    tagline: 'Rugged RS232/422/485 Modbus Gateways & Device Servers',
    category: 'Industrial Networking',
    link: '/iot-components',
    icon: 'settings_ethernet',
    image: networkingImg,
    description: 'Industrial-grade serial device servers that connect legacy serial instruments, PLCs, barcode scanners, and CNC machines directly to modern Ethernet/IP networks.',
    subCategories: [
      'DS1101 (Compact Programmable Serial Controller)',
      'DS1102 (Multi-Channel Serial Controller with PoE)',
      'DS1103 (High-Density Multi-Port Serial Gateway)'
    ],
    subCategoryCards: [
      {
        id: 'ds1101',
        name: 'DS1101 (Compact Serial Controller)',
        icon: 'settings_ethernet',
        image: networkingImg,
        badge: 'OLED Display & PoE',
        description: 'Compact programmable 3.5-channel RS-232 controller with optional OLED display and 802.3af Power-over-Ethernet.',
        features: ['3.5-Channel RS-232 Port', 'Optional Graphic OLED Display', '802.3af Power-over-Ethernet (PoE)', 'Ultra-Compact In-Line Housing']
      },
      {
        id: 'ds1102',
        name: 'DS1102 (Multi-Channel Serial Controller with PoE)',
        icon: 'hub',
        image: networkingImg,
        badge: 'Wi-Fi + RS232/422/485',
        description: 'Multi-channel software-selectable RS-232/422/485 device server with internal Wi-Fi and DIN-rail mounting.',
        features: ['Software Selectable RS232/422/485', 'Built-in 802.11b/g Wi-Fi Option', 'DIN-Rail & Wall Mounting', '15kV Serial ESD Clamping']
      },
      {
        id: 'ds1103',
        name: 'DS1103 (High-Density Multi-Port Serial Gateway)',
        icon: 'dns',
        image: networkingImg,
        badge: 'Multi-Port High Density',
        description: 'High-density multi-port serial server connecting up to 8 fieldbus devices directly to plant-wide Ethernet networks.',
        features: ['Multi-Port Serial Expansion', 'Modbus RTU to Modbus TCP Bridge', 'Rugged Extruded Aluminium Enclosure', 'Web-Based Remote Configuration']
      }
    ],
    keySpecs: ['RS-232 / RS-422 / RS-485 Selectable', '15kV ESD Protection', 'Modbus RTU to Modbus TCP Conversion', 'Optional Power-over-Ethernet (PoE)']
  },
  {
    id: 'digital-microscopes',
    name: 'Digital Microscopes',
    tagline: 'Dino-Lite High-Precision Handheld & HDMI Metrology',
    category: 'Inspection & Metrology',
    link: '/digital-microscopes',
    icon: 'biotech',
    image: microscopeImg,
    description: 'Worldwide-standard Dino-Lite digital handheld and HDMI inspection microscopes engineered for micro-electronics QC, PCB soldering validation, metallurgy, and material analysis.',
    subCategories: [
      '1.3MP Handheld Optical Inspection',
      '5MP High-Resolution Metrology Microscopes',
      'Digital Microscope Overview & Optics',
      'Industrial Quality Inspection Applications',
      'Specialized Stands & Polarizing Accessories',
      'Direct Monitor VGA / HDMI Standalone Inspection'
    ],
    subCategoryCards: [
      {
        id: 'microscope-1-3mp',
        name: '1.3MP Handheld Optical Inspection',
        icon: 'biotech',
        image: microscopeImg,
        badge: '1.3MP Polarized USB',
        description: 'Dino-Lite 1.3 megapixel digital handheld microscopes with polarized light for glare-free PCB inspection.',
        features: ['1.3 Megapixel Optical Sensor', 'Polarizer for Glare Suppression', '10x to 220x Optical Zoom', 'DinoCapture Calibration Software']
      },
      {
        id: 'microscope-5mp',
        name: '5MP High-Resolution Metrology Microscopes',
        icon: 'lens',
        image: microscopeImg,
        badge: '5.0MP Edge Series',
        description: 'Edge-series 5.0 megapixel microscopes delivering ultra-crisp resolution, flexible LED control, and micrometer calibration.',
        features: ['5.0 Megapixel High-Resolution Sensor', 'Automatic Magnification Reading (AMR)', 'Extended Depth of Field (EDOF)', 'Flexible LED Control (FLC)']
      },
      {
        id: 'microscope-overview',
        name: 'Digital Microscope Overview & Optics',
        icon: 'auto_stories',
        image: microscopeImg,
        badge: 'Telecentric Optics',
        description: 'Optical system overview detailing telecentric lenses, interchangeable front caps, and optical depth calculation.',
        features: ['Interchangeable Optical Front Caps', 'Telecentric Distortion-Free Lenses', 'Long Working Distance (LWD) Optics', 'Diffused & Coaxial Lighting']
      },
      {
        id: 'microscope-applications',
        name: 'Industrial Quality Inspection Applications',
        icon: 'fact_check',
        image: microscopeImg,
        badge: 'SMT / Metallurgy QC',
        description: 'Specialized setups for automotive metallurgy, electronics solder joint verification, and quality assurance.',
        features: ['SMT Solder Joint Inspection', 'Metallurgical Micro-Crack Analysis', 'Precision Coating Thickness Check', 'Forensic & Material Validation']
      },
      {
        id: 'microscope-accessories',
        name: 'Specialized Stands & Polarizing Accessories',
        icon: 'precision_manufacturing',
        image: microscopeImg,
        badge: 'Articulating Boom Stands',
        description: 'Heavy-duty boom stands, articulating arms, motorized XY translation stages, and coaxial lighting fixtures.',
        features: ['Heavy-Duty Articulating Boom Stands', 'Precision XY Fine-Focus Stages', 'Ring Lighting & Gooseneck Lights', 'Foot Pedal Shutter Triggers']
      },
      {
        id: 'microscope-vga-hdmi',
        name: 'Direct Monitor VGA / HDMI Standalone Inspection',
        icon: 'tv',
        image: microscopeImg,
        badge: '60 FPS Direct HDMI',
        description: 'Zero-lag 60 FPS direct-to-monitor HDMI and VGA microscopes operating without any PC or software required.',
        features: ['Direct HDMI / VGA 1080p Monitor Output', 'Ultra-Smooth 60 FPS Video Feed', 'Zero Latency Real-Time Inspection', 'Standalone Button Control']
      }
    ],
    keySpecs: ['10x to 220x Magnification Range', 'Built-in Polarizer & Coaxial Illumination', 'Micro-Metric Calibration Software', 'Automatic Magnification Reading (AMR)']
  },
  {
    id: 'electronic-regenerative-loads',
    name: 'Electronic / Regenerative Loads',
    tagline: 'Energy-Recycling Power Absorbers & Battery Testers',
    category: 'Power Testing & Validation',
    link: '/industrial-automation',
    icon: 'precision_manufacturing',
    image: electronicsImg,
    description: 'Programmable DC electronic loads and bidirectional regenerative energy simulators capable of recycling up to 95% of tested energy back to the AC grid during battery pack and power supply cycling.',
    subCategories: [
      'Programmable DC Electronic Loads',
      'High-Power Bidirectional Regenerative Loads',
      'EV Battery Pack Discharge Testing Systems',
      'AC Electronic Load Simulators'
    ],
    subCategoryCards: [
      {
        id: 'dc-electronic-loads',
        name: 'Programmable DC Electronic Loads',
        icon: 'power',
        image: electronicsImg,
        badge: '1200V / 1000A DC',
        description: 'Precision electronic DC loads supporting Constant Current (CC), Constant Voltage (CV), and Constant Resistance (CR) modes.',
        features: ['CC, CV, CP, CR Operating Modes', 'Dynamic Load Slew Rate up to 50A/µs', 'Voltage up to 1200V / Current to 1000A', 'RS232, USB, LAN & GPIB Automated']
      },
      {
        id: 'regenerative-loads',
        name: 'High-Power Bidirectional Regenerative Loads',
        icon: 'sync_alt',
        image: electronicsImg,
        badge: '95% Grid Energy Recovery',
        description: 'Energy-recycling power sinks feeding up to 95% of absorbed energy back into the three-phase AC facility grid.',
        features: ['Up to 95% Energy Grid Recycling', 'Bidirectional Source & Sink Modes', 'Thermal & Operational Cost Reduction', 'Scalable Parallel Operation to MegaWatts']
      },
      {
        id: 'ev-battery-testing',
        name: 'EV Battery Pack Discharge Testing Systems',
        icon: 'electric_car',
        image: electronicsImg,
        badge: 'Automated EV Drive Cycles',
        description: 'Automated battery life-cycle endurance testers with synchronized cell voltage monitoring and thermal cutoff.',
        features: ['Automated Charge/Discharge Profiling', 'Individual Cell Voltage Telemetry', 'High-Speed Emergency Interlocks', 'Standard EV Drive Cycle Emulation']
      },
      {
        id: 'ac-electronic-loads',
        name: 'AC Electronic Load Simulators',
        icon: 'electric_meter',
        image: electronicsImg,
        badge: 'Crest Factor 1.4–5.0',
        description: 'Programmable single and three-phase AC electronic loads simulating crest factors, inductive lag, and harmonics.',
        features: ['Single & Three-Phase AC Simulation', 'Programmable Crest Factor (1.4–5.0)', 'Harmonic Current Analysis', 'Inverter & Generator Testing']
      }
    ],
    keySpecs: ['Up to 95% Energy Regeneration to Grid', 'CV, CC, CP, CR Operating Modes', 'Dynamic Load Slew Rate 0–50A/µs', 'SCPI / CAN / Modbus Automated Control']
  }
];

export const solutionsData: SolutionItem[] = [
  {
    id: 'test-solutions',
    name: 'Test Solutions',
    tagline: 'Automated Test Benches & Hardware-in-the-Loop Simulators',
    category: 'Validation Engineering',
    link: '/system-integration',
    icon: 'fact_check',
    image: architectureImg,
    description: 'Comprehensive turnkey test benches, automated functional test rigs, and environmental screening fixtures built to validate critical automotive, defence, and aerospace systems.',
    subCategories: [
      'Automated Test Equipment (ATE) Benches',
      'Environmental Stress Screening (ESS) Systems',
      'RF & High-Frequency Defence Test Benches',
      'Hardware-in-the-Loop (HIL) Simulators',
      'Automotive Subsystem Durability & Fatigue Rigs'
    ],
    subCategoryCards: [
      {
        id: 'ate-benches',
        name: 'Automated Test Equipment (ATE) Benches',
        icon: 'fact_check',
        image: architectureImg,
        badge: 'Modular PXI / LabVIEW',
        description: 'Turnkey automated functional test systems with modular PXI switching and custom LabVIEW test executives.',
        features: ['Automated Pass/Fail Qualification', 'Modular PXI Instrumentation', 'Universal Fixture Bed-of-Nails', 'Automated PDF Test Certificates']
      },
      {
        id: 'ess-screening',
        name: 'Environmental Stress Screening (ESS) Systems',
        icon: 'thermostat',
        image: whoWeAreImg,
        badge: '-55°C to +150°C Thermal',
        description: 'Thermal cycling and vibration combined test fixtures for accelerated life testing of mission-critical hardware.',
        features: ['-55°C to +150°C Thermal Profiling', 'Multi-Axis Vibration Synchronization', 'Continuous Telemetry Logging', 'Early Defect Detection']
      },
      {
        id: 'rf-defence-benches',
        name: 'RF & High-Frequency Defence Test Benches',
        icon: 'wifi_tethering',
        image: architectureImg,
        badge: 'Up to 26.5 GHz RF',
        description: 'Automated RF parameter validation rigs with calibrated signal generators and spectrum analyzers up to 26.5 GHz.',
        features: ['Frequency Coverage up to 26.5 GHz', 'Automated S-Parameter Measurements', 'MIL-STD Calibration Compliance', 'Shielded Anechoic Test Fixtures']
      },
      {
        id: 'hil-simulators',
        name: 'Hardware-in-the-Loop (HIL) Simulators',
        icon: 'settings_suggest',
        image: whoWeAreImg,
        badge: 'Real-Time FPGA HIL',
        description: 'Real-time embedded simulation environments testing electronic control units (ECUs) under simulated vehicle conditions.',
        features: ['Real-Time FPGA Fault Insertion', 'Virtual Actuator & Sensor Models', 'CAN / LIN / FlexRay Simulation', 'Automated Regression Suites']
      },
      {
        id: 'durability-rigs',
        name: 'Automotive Subsystem Durability & Fatigue Rigs',
        icon: 'directions_car',
        image: architectureImg,
        badge: 'Multi-Million Cycle Life',
        description: 'Servo-hydraulic and electro-mechanical endurance benches for steering, braking, and suspension validation.',
        features: ['Multi-Million Cycle Durability Testing', 'Servo-Pneumatic Force Emulation', 'Real-Time Load Cell Closed Loop', 'Emergency Safety Guard Enclosures']
      }
    ],
    capabilities: [
      'Custom LabVIEW Automated Test Software',
      'PXI / cDAQ High-Speed Automated Switching',
      'MIL-STD / DO-160 Compliance Testing',
      'Real-Time Test Database Logging & PDF Reports'
    ]
  },
  {
    id: 'daq-systems',
    name: 'Data Acquisition Systems (DAQ)',
    tagline: 'Multi-Channel Synchronous Logging & Signal Conditioning',
    category: 'Telemetry & Instrumentation',
    link: '/system-integration',
    icon: 'analytics',
    image: whoWeAreImg,
    description: 'Precision multi-channel synchronous data acquisition rigs engineered with National Instruments CompactRIO and PXI hardware for high-frequency vibration, strain, acoustic, and thermal telemetry.',
    subCategories: [
      'High-Speed Multi-Channel Synchronous Logging',
      'National Instruments CompactRIO & PXI Platforms',
      'Dynamic Strain, Acoustic & Vibration Telemetry',
      'Galvanic Signal Conditioning & Isolation',
      'Cloud Telemetry & Real-Time FFT Spectral Analysis'
    ],
    subCategoryCards: [
      {
        id: 'multi-channel-logging',
        name: 'High-Speed Multi-Channel Synchronous Logging',
        icon: 'insights',
        image: whoWeAreImg,
        badge: '1 MS/s/ch Synchronous',
        description: 'High-speed synchronous telemetry recording thousands of sensor channels with microsecond timestamp synchronization.',
        features: ['Sampling Rates up to 1 MS/s/ch', 'Microsecond GPS Timestamp Sync', 'Continuous High-Throughput Streaming', 'Simultaneous Multi-Parameter Telemetry']
      },
      {
        id: 'ni-compactrio-pxi',
        name: 'National Instruments CompactRIO & PXI Platforms',
        icon: 'developer_board',
        image: niLogo,
        badge: 'NI Silver Alliance Certified',
        description: 'FPGA-enabled embedded controllers delivering deterministic real-time processing and rugged field deployment.',
        features: ['NI Silver Alliance Partner Engineered', 'FPGA Real-Time Deterministic Loops', 'Rugged Chassis (-40°C to +70°C)', 'PXIe High-Speed Backplane']
      },
      {
        id: 'vibration-acoustic-telemetry',
        name: 'Dynamic Strain, Acoustic & Vibration Telemetry',
        icon: 'graphic_eq',
        image: whoWeAreImg,
        badge: 'IEPE Shock & Vibration',
        description: 'Specialized high-bandwidth IEPE accelerometer and strain gauge conditioning for aerospace airframe testing.',
        features: ['IEPE Accelerometer Inputs', 'Full / Half / Quarter Bridge Strain', 'Anti-Aliasing Analog Filters', 'Real-Time FFT Waterfall Plots']
      },
      {
        id: 'galvanic-isolation',
        name: 'Galvanic Signal Conditioning & Isolation',
        icon: 'shield',
        image: architectureImg,
        badge: '1000V+ Optical Isolation',
        description: 'Channel-to-channel high-voltage galvanic isolation preventing ground loops and protecting acquisition electronics.',
        features: ['1000V+ Galvanic Isolation', 'Zero Ground Loop Distortion', 'Differential High Common-Mode Rejection', 'Precision Optical Isolation']
      },
      {
        id: 'cloud-telemetry-fft',
        name: 'Cloud Telemetry & Real-Time FFT Spectral Analysis',
        icon: 'cloud_sync',
        image: whoWeAreImg,
        badge: 'Spectral FFT Cloud',
        description: 'Edge-to-cloud telemetry pipelines providing automated spectral FFT analysis and remote threshold alerting.',
        features: ['Real-Time Fast Fourier Transform (FFT)', 'Edge-to-Cloud Telemetry Streams', 'SMS / Email Anomaly Threshold Alerts', 'Web-Based Telemetry Dashboards']
      }
    ],
    capabilities: [
      'Sampling Rates up to 1 MS/s per Channel',
      'FPGA-Based Microsecond Deterministic Triggers',
      'Optical & Thermocouple Sensor Isolation',
      'NI Silver Alliance Partner Certified Engineering'
    ]
  },
  {
    id: 'control-panel-engineering',
    name: 'Control Panel Engineering Services',
    tagline: 'Turnkey PLC, DCS & Explosion-Proof Control Cabinets',
    category: 'Process Automation Engineering',
    link: '/system-integration',
    icon: 'build',
    image: electronicsImg,
    description: 'Full-lifecycle design, EPLAN electrical schematics, assembly, PLC/SCADA programming, and commissioning of industrial control panels, drive cabinets, and hazardous-area certified enclosures.',
    subCategories: [
      'PLC & DCS Automation Control Cabinets',
      'Hazardous Area Flameproof (Ex-d / Ex-p) Panels',
      'Variable Frequency Drive (VFD) & Servo Motor Benches',
      'SCADA Architecture & Factory HMI Development',
      'Custom Industrial Harnessing & Factory Acceptance Tests (FAT)'
    ],
    subCategoryCards: [
      {
        id: 'plc-dcs-cabinets',
        name: 'PLC & DCS Automation Control Cabinets',
        icon: 'door_sliding',
        image: electronicsImg,
        badge: 'Tier-1 PLC Integration',
        description: 'Custom designed PLC enclosures featuring Siemens, Allen-Bradley, and Schneider Electric hardware.',
        features: ['Tier-1 PLC/DCS Integration', 'Clean Redundant Wire Management', 'Rittal & Hoffman Modular Enclosures', 'IP54 / IP55 / IP65 Dust/Water Sealing']
      },
      {
        id: 'flameproof-panels',
        name: 'Hazardous Area Flameproof (Ex-d / Ex-p) Panels',
        icon: 'warning',
        image: architectureImg,
        badge: 'ATEX / IECEx Zone 1&2',
        description: 'ATEX and IECEx certified explosion-proof enclosures for petrochemical, offshore, and pharmaceutical plants.',
        features: ['Zone 1 & Zone 2 Gas Group IIC Certified', 'Ex-d Flameproof Cast Enclosures', 'Ex-p Purged & Pressurized Cabinets', 'CIMFR / PESO Statutory Approval']
      },
      {
        id: 'vfd-motor-benches',
        name: 'Variable Frequency Drive (VFD) & Servo Motor Benches',
        icon: 'speed',
        image: electronicsImg,
        badge: 'Regenerative VFD Benches',
        description: 'High-efficiency motor drive panels with regenerative braking, line reactors, and harmonic filters.',
        features: ['Multi-Drive Synchronized Controls', 'Passive & Active Harmonic Filters', 'Dynamic Braking Resistor Banks', 'Precision Servo Positioning Cabinets']
      },
      {
        id: 'scada-hmi-development',
        name: 'SCADA Architecture & Factory HMI Development',
        icon: 'desktop_windows',
        image: whoWeAreImg,
        badge: 'Factory HMI & SCADA',
        description: 'Supervisory control architecture and intuitive multi-touch operator screens for centralized plant management.',
        features: ['Wonderware, WinCC, Ignition SCADA', 'High-Performance Ergonomic Graphics', 'Alarm Logging & Event Auditing', 'OPC UA Industry 4.0 Telemetry']
      },
      {
        id: 'custom-harnessing-fat',
        name: 'Custom Industrial Harnessing & Factory Acceptance Tests',
        icon: 'checklist',
        image: architectureImg,
        badge: 'Witnessed FAT in Pune',
        description: 'EPLAN-documented wire harnessing, point-to-point continuity testing, and witnessed FAT at Pune facility.',
        features: ['Full EPLAN 2D/3D Electrical Schematics', 'Point-to-Point Loop Continuity Check', 'Simulated I/O Factory Acceptance (FAT)', 'On-Site Commissioning by Pune Engineers']
      }
    ],
    capabilities: [
      'EPLAN Professional Schematic Documentation',
      'IEC 61439-1 / 2 Compliant Enclosure Builds',
      'Full Factory Acceptance Testing (FAT) in Pune',
      'On-Site Commissioning & Loop Checking'
    ]
  },
  {
    id: 'automated-test-equipment-eol',
    name: 'Automated Test Equipment / End of Line Tester (EOL)',
    tagline: 'Production Line Functional Verification & Automated Inspection',
    category: 'Manufacturing Quality Systems',
    link: '/system-integration',
    icon: 'precision_manufacturing',
    image: architectureImg,
    description: 'High-throughput End-of-Line test stations integrated directly into automated production lines, combining robotic actuators, electrical safety testing, computer vision, and traceability logging.',
    subCategories: [
      'Production Line Functional Verification Benches',
      'Automated Computer Vision & Dimensional Inspection',
      'High-Voltage Dielectric & Ground Continuity Safety Testers',
      'Barcode / QR Code & MES Traceability Integration',
      'Statistical Process Control (SPC) & Cycle-Time Optimization'
    ],
    subCategoryCards: [
      {
        id: 'inline-functional-testers',
        name: 'Production Line Functional Verification Benches',
        icon: 'playlist_add_check',
        image: architectureImg,
        badge: '12s Fast Cycle Time',
        description: 'High-speed inline testers performing 100% electrical, mechanical, and pneumatic verification in high-volume production.',
        features: ['Cycle Times Down to 12 Seconds', 'Automated Pneumatic Clamping', '100% Functional Electrical Test', 'Automated Bad-Part Reject Gate']
      },
      {
        id: 'vision-inspection',
        name: 'Automated Computer Vision & Dimensional Inspection',
        icon: 'visibility',
        image: microscopeImg,
        badge: 'Machine Vision & AI',
        description: 'High-resolution machine vision cameras with AI pattern matching for defect detection and label verification.',
        features: ['Sub-Millimeter Dimensional Gauging', 'Defect & Scratch Detection', 'OCR / OCV Character Verification', 'High-Speed Strobe Illumination']
      },
      {
        id: 'hipot-safety-testers',
        name: 'High-Voltage Dielectric & Ground Continuity Safety Testers',
        icon: 'electrical_services',
        image: electronicsImg,
        badge: '5kV Hipot Safety',
        description: 'Automated Hipot, insulation resistance, and ground bond testing ensuring strict electrical safety compliance.',
        features: ['AC/DC High Voltage Hipot (up to 5kV)', 'Insulation Resistance (up to 10GΩ)', 'Ground Continuity Bond (up to 32A)', 'EN 60335 / IEC 60950 Compliant']
      },
      {
        id: 'traceability-mes',
        name: 'Barcode / QR Code & MES Traceability Integration',
        icon: 'qr_code_scanner',
        image: whoWeAreImg,
        badge: 'MES / SAP Cloud Trace',
        description: 'Direct scanner integration recording test serial numbers, date codes, and pass/fail metrics into plant ERP/MES systems.',
        features: ['1D / 2D Barcode & DPM Scanner', 'SQL / Oracle Database Logging', 'MES & SAP ERP Interfacing', 'Individual Unit Birth History Tracking']
      },
      {
        id: 'spc-optimization',
        name: 'Statistical Process Control (SPC) & Cycle-Time Optimization',
        icon: 'auto_graph',
        image: architectureImg,
        badge: 'Cp / Cpk Zero-Defect',
        description: 'Real-time Cp and Cpk calculation engines flagging process drift before out-of-tolerance parts are manufactured.',
        features: ['Real-Time Cp & Cpk Calculations', 'X-Bar & R Control Charting', 'Automated Drift Warnings', 'Continuous Quality Improvement Data']
      }
    ],
    capabilities: [
      'Cycle Times Down to 12 Seconds per Unit',
      'Direct MES / SAP ERP Database Connectivity',
      'Pneumatic & Servo Fixture Automation',
      '100% Zero-Defect Quality Escrow Integration'
    ]
  }
];
