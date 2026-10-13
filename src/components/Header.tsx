import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/theta_logo.png';

interface ProductItem {
  name: string;
  link: string;
  icon: string;
}

const products: ProductItem[] = [
  { name: 'ROV – Remote Operated Vehicles', link: '/products?product=rov', icon: 'shield' },
  { name: 'Industrial Switches', link: '/products?product=industrial-switches', icon: 'lan' },
  { name: 'Paperless Recorders', link: '/products?product=paperless-recorders', icon: 'edit_note' },
  { name: 'Power Controllers', link: '/products?product=power-controllers', icon: 'bolt' },
  { name: 'PID / Profile Controllers', link: '/products?product=pid-profile-controllers', icon: 'tune' },
  { name: 'Sensors & Panel Accessories', link: '/products?product=sensors-panel-accessories', icon: 'sensors' },
  { name: 'Tibbo Project System (TPS)', link: '/products?product=tibbo-tps', icon: 'memory' },
  { name: 'Linux chip SP7021 & Board', link: '/products?product=sp7021-linux-board', icon: 'developer_board' },
  { name: 'Serial to Ethernet Controller', link: '/products?product=serial-ethernet-controller', icon: 'settings_ethernet' },
  { name: 'Digital Microscopes', link: '/products?product=digital-microscopes', icon: 'biotech' },
  { name: 'Electronic / Regenerative Loads', link: '/products?product=electronic-regenerative-loads', icon: 'precision_manufacturing' },
];

const solutions: ProductItem[] = [
  { name: 'Test Solutions', link: '/solutions?solution=test-solutions', icon: 'fact_check' },
  { name: 'Data Acquisition Systems (DAQ)', link: '/solutions?solution=daq-systems', icon: 'analytics' },
  { name: 'Control Panel Engineering Services', link: '/solutions?solution=control-panel-engineering', icon: 'build' },
  { name: 'Automated Test Equipment (EOL)', link: '/solutions?solution=automated-test-equipment-eol', icon: 'precision_manufacturing' },
];

const groupCompanies = [
  {
    name: 'Theta Controls & Systems',
    tagline: 'Process Controls & Industrial Automation',
    link: '/industrial-automation',
    icon: 'domain',
  },
  {
    name: 'Theta Defence & Aerospace',
    tagline: 'Mission-Critical Defence Electronics',
    link: '/defence-systems',
    icon: 'shield',
  },
  {
    name: 'Theta IoT Technologies',
    tagline: 'Smart Telemetry & Edge Computing',
    link: '/iot-components',
    icon: 'sensors',
  },
  {
    name: 'Theta Test & Automation',
    tagline: 'NI Silver Alliance Partner & DAQ Systems',
    link: '/system-integration',
    icon: 'precision_manufacturing',
  },
];

const mediaItems = [
  { name: 'News & Press', link: '/news', icon: 'newspaper' },
  { name: 'Photo Gallery', link: '/gallery', icon: 'image' },
  { name: 'Blogs & Insights', link: '/blogs', icon: 'menu_book' },
];

/**
 * Enterprise Navbar with reliable click-driven dropdowns.
 * Clicking on 'Segments' immediately opens Products & Solutions selector tabs.
 */
export const Header: FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<'products' | 'solutions' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mobileSegmentsOpen, setMobileSegmentsOpen] = useState<boolean>(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState<boolean>(true);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState<boolean>(false);
  const [mobileCompaniesOpen, setMobileCompaniesOpen] = useState<boolean>(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // Close all menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setHoveredSegment(null);
    setIsMobileMenuOpen(false);
    setMobileSegmentsOpen(false);
    setMobileCompaniesOpen(false);
    setMobileMediaOpen(false);
  }, [location.pathname]);

  // Click outside and Escape key listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setHoveredSegment(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setHoveredSegment(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleDropdownToggle = (menuName: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setActiveDropdown((prev) => {
      const next = prev === menuName ? null : menuName;
      if (next === 'segments') {
        setHoveredSegment(null);
      }
      return next;
    });
  };

  return (
    <header className="w-full top-0 sticky z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant/15 select-none shadow-2xs">
      <div 
        ref={dropdownRef} 
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin h-20 sm:h-24 flex items-center justify-between relative"
      >
        {/* Left: Corporate Logo */}
        <Link 
          to="/" 
          className="flex items-center hover:opacity-85 transition-opacity select-none shrink-0"
        >
          <img 
            src={logoImg} 
            alt="Theta Controls Logo" 
            className="h-9 sm:h-10 w-auto object-contain" 
          />
        </Link>

        {/* Center: Desktop Top Navigation Links (>= lg) */}
        <nav className="hidden lg:flex items-center gap-7 font-body text-xs font-semibold tracking-wider uppercase text-on-surface-variant">
          
          {/* Home Link */}
          <Link 
            to="/" 
            className="hover:text-secondary transition-colors duration-200 py-3"
          >
            Home
          </Link>

          {/* Segments Dropdown (Click to open Products & Solutions) */}
          <div className="relative">
            <button
              onClick={(e) => handleDropdownToggle('segments', e)}
              className={`flex items-center gap-1.5 py-3 font-body text-xs font-semibold tracking-wider uppercase hover:text-secondary transition-colors duration-200 cursor-pointer select-none ${
                activeDropdown === 'segments' ? 'text-secondary' : 'text-on-surface-variant'
              }`}
            >
              <span>Segments</span>
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
                activeDropdown === 'segments' ? 'rotate-180 text-secondary' : ''
              }`}>
                expand_more
              </span>
            </button>

            {/* Segments Dropdown Menu */}
            {activeDropdown === 'segments' && (
              <div 
                onMouseLeave={() => setHoveredSegment(null)}
                className={`absolute top-full -left-6 bg-surface-container-lowest border border-outline-variant/25 shadow-2xl rounded-b-xs z-50 fade-in transition-all duration-200 ${
                  hoveredSegment ? 'w-[780px] flex divide-x divide-outline-variant/15' : 'w-[320px] p-4'
                }`}
              >
                {/* Left Side: Segments Menu (Shows only Products and Solutions) */}
                <div className={`${hoveredSegment ? 'w-[280px] p-4 shrink-0 flex flex-col justify-between' : 'space-y-3'}`}>
                  <div>
                    <div className="text-[10px] font-bold text-outline uppercase tracking-wider px-2 pb-2 mb-2 border-b border-outline-variant/15 flex items-center justify-between">
                      <span>Segments</span>
                      <span className="text-[9px] lowercase text-outline font-normal">click to open page</span>
                    </div>

                    <div className="space-y-2">
                      {/* 1. Products Option */}
                      <Link
                        to="/products"
                        onClick={() => setActiveDropdown(null)}
                        onMouseEnter={() => setHoveredSegment('products')}
                        className={`flex items-center justify-between p-3 rounded-xs border transition-all duration-200 cursor-pointer group ${
                          hoveredSegment === 'products'
                            ? 'bg-secondary/10 border-secondary text-primary'
                            : 'border-outline-variant/20 hover:border-secondary/40 hover:bg-surface-container-low/70'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xs flex items-center justify-center transition-colors ${
                            hoveredSegment === 'products' 
                              ? 'bg-secondary text-white' 
                              : 'bg-surface-container text-secondary group-hover:bg-secondary group-hover:text-white'
                          }`}>
                            <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                          </div>
                          <div>
                            <span className="font-body text-xs font-bold text-primary block group-hover:text-secondary transition-colors">
                              Products
                            </span>
                            <span className="font-body text-[10px] text-outline block">
                              11 Hardware Lines
                            </span>
                          </div>
                        </div>
                        <span className={`material-symbols-outlined text-[18px] transition-transform ${
                          hoveredSegment === 'products' ? 'text-secondary translate-x-1' : 'text-outline group-hover:text-secondary'
                        }`}>
                          chevron_right
                        </span>
                      </Link>

                      {/* 2. Solutions Option */}
                      <Link
                        to="/solutions"
                        onClick={() => setActiveDropdown(null)}
                        onMouseEnter={() => setHoveredSegment('solutions')}
                        className={`flex items-center justify-between p-3 rounded-xs border transition-all duration-200 cursor-pointer group ${
                          hoveredSegment === 'solutions'
                            ? 'bg-secondary/10 border-secondary text-primary'
                            : 'border-outline-variant/20 hover:border-secondary/40 hover:bg-surface-container-low/70'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xs flex items-center justify-center transition-colors ${
                            hoveredSegment === 'solutions' 
                              ? 'bg-secondary text-white' 
                              : 'bg-surface-container text-secondary group-hover:bg-secondary group-hover:text-white'
                          }`}>
                            <span className="material-symbols-outlined text-[20px]">settings_suggest</span>
                          </div>
                          <div>
                            <span className="font-body text-xs font-bold text-primary block group-hover:text-secondary transition-colors">
                              Solutions
                            </span>
                            <span className="font-body text-[10px] text-outline block">
                              4 Turnkey Divisions
                            </span>
                          </div>
                        </div>
                        <span className={`material-symbols-outlined text-[18px] transition-transform ${
                          hoveredSegment === 'solutions' ? 'text-secondary translate-x-1' : 'text-outline group-hover:text-secondary'
                        }`}>
                          chevron_right
                        </span>
                      </Link>
                    </div>
                  </div>

                  {!hoveredSegment && (
                    <div className="pt-3 border-t border-outline-variant/15 text-[10px] text-outline text-center">
                      Hover to preview items • Click to open page
                    </div>
                  )}

                  {hoveredSegment && (
                    <div className="pt-3 border-t border-outline-variant/15 text-[10px] text-outline">
                      Tip: Click category to view full landing page with sub-categories.
                    </div>
                  )}
                </div>

                {/* Right Side: Flyout Details (Revealed when hovered on Products or Solutions) */}
                {hoveredSegment && (
                  <div className="flex-1 p-4 bg-surface-container-lowest flex flex-col justify-between">
                    {/* Hovered on Products */}
                    {hoveredSegment === 'products' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-outline-variant/15">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px]">inventory_2</span>
                            <span className="font-body text-xs font-bold uppercase tracking-wider text-primary">
                              Products Portfolio (11)
                            </span>
                          </div>
                          <Link
                            to="/products"
                            onClick={() => setActiveDropdown(null)}
                            className="font-body text-[10px] font-bold text-secondary uppercase hover:underline flex items-center gap-1"
                          >
                            <span>Open Products Page</span>
                            <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-x-3 gap-y-1 max-h-[300px] overflow-y-auto pr-1">
                          {products.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.link}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center gap-2 px-2.5 py-1.5 rounded-xs text-[11px] font-medium text-on-surface-variant hover:text-secondary hover:bg-surface-container-low transition-colors group"
                            >
                              <span className="material-symbols-outlined text-[15px] text-secondary/70 group-hover:text-secondary shrink-0">
                                {item.icon}
                              </span>
                              <span className="truncate">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Hovered on Solutions */}
                    {hoveredSegment === 'solutions' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-outline-variant/15">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px]">settings_suggest</span>
                            <span className="font-body text-xs font-bold uppercase tracking-wider text-primary">
                              Turnkey Solutions (4)
                            </span>
                          </div>
                          <Link
                            to="/solutions"
                            onClick={() => setActiveDropdown(null)}
                            className="font-body text-[10px] font-bold text-secondary uppercase hover:underline flex items-center gap-1"
                          >
                            <span>Open Solutions Page</span>
                            <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {solutions.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.link}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-2.5 p-2.5 rounded-xs border border-outline-variant/20 hover:border-secondary hover:bg-surface-container-low transition-all duration-200 group"
                            >
                              <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5 group-hover:scale-110 transition-transform">
                                {item.icon}
                              </span>
                              <div>
                                <span className="font-body text-xs font-bold text-primary group-hover:text-secondary transition-colors block">
                                  {item.name}
                                </span>
                                <span className="font-body text-[10px] text-outline block mt-0.5">
                                  Turnkey Engineering
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="bg-surface-container-low/70 p-2.5 rounded-xs border border-outline-variant/15 flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary text-[16px]">workspace_premium</span>
                            <span className="font-body text-[11px] text-on-surface-variant font-medium">
                              National Instruments Silver Alliance Partner
                            </span>
                          </div>
                          <Link
                            to="/system-integration"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[10px] font-bold text-secondary uppercase tracking-wider hover:underline"
                          >
                            Explore →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Group Companies Dropdown */}
          <div className="relative">
            <button
              onClick={(e) => handleDropdownToggle('companies', e)}
              className={`flex items-center gap-1.5 py-3 font-body text-xs font-semibold tracking-wider uppercase hover:text-secondary transition-colors duration-200 cursor-pointer select-none ${
                activeDropdown === 'companies' ? 'text-secondary' : 'text-on-surface-variant'
              }`}
            >
              <span>Group Companies</span>
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
                activeDropdown === 'companies' ? 'rotate-180 text-secondary' : ''
              }`}>
                expand_more
              </span>
            </button>

            {/* Group Companies Panel */}
            {activeDropdown === 'companies' && (
              <div 
                className="absolute top-full left-0 w-[340px] bg-surface-container-lowest border border-outline-variant/25 shadow-2xl rounded-b-xs p-4 space-y-2 z-50 fade-in"
              >
                <div className="text-[10px] font-bold text-outline uppercase tracking-wider px-2 pb-1.5 border-b border-outline-variant/15">
                  Corporate Ecosystem
                </div>
                {groupCompanies.map((company, idx) => (
                  <Link
                    key={idx}
                    to={company.link}
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2 rounded-xs hover:bg-surface-container-low/80 transition-colors group"
                  >
                    <span className="material-symbols-outlined text-[20px] text-secondary mt-0.5 group-hover:scale-110 transition-transform">
                      {company.icon}
                    </span>
                    <div>
                      <span className="font-body text-xs font-bold text-primary group-hover:text-secondary transition-colors block">
                        {company.name}
                      </span>
                      <span className="font-body text-[10px] text-on-surface-variant/80 block line-clamp-1">
                        {company.tagline}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Media Dropdown */}
          <div className="relative">
            <button
              onClick={(e) => handleDropdownToggle('media', e)}
              className={`flex items-center gap-1.5 py-3 font-body text-xs font-semibold tracking-wider uppercase hover:text-secondary transition-colors duration-200 cursor-pointer select-none ${
                activeDropdown === 'media' ? 'text-secondary' : 'text-on-surface-variant'
              }`}
            >
              <span>Media</span>
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
                activeDropdown === 'media' ? 'rotate-180 text-secondary' : ''
              }`}>
                expand_more
              </span>
            </button>

            {/* Media Panel */}
            {activeDropdown === 'media' && (
              <div 
                className="absolute top-full left-0 w-48 bg-surface-container-lowest border border-outline-variant/25 shadow-2xl rounded-b-xs p-3 space-y-1 z-50 fade-in"
              >
                {mediaItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-2.5 p-2 rounded-xs hover:bg-surface-container-low/80 text-[11px] font-semibold text-on-surface-variant hover:text-secondary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Careers Link */}
          <Link 
            to="/careers" 
            className="hover:text-secondary transition-colors duration-200 py-3"
          >
            Careers
          </Link>

        </nav>

        {/* Right: Contact CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Action CTA Button */}
          <Link 
            to="/contact" 
            className="bg-primary text-on-primary font-body text-[11px] sm:text-xs font-semibold px-5 sm:px-8 py-2.5 sm:py-3 tracking-widest hover:bg-secondary transition-all duration-300 cursor-pointer block uppercase text-center shrink-0"
          >
            CONTACT
          </Link>

          {/* Mobile Hamburger / Close Toggle (< lg) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:text-secondary transition-colors cursor-pointer select-none"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Full-Width Navigation Accordion (< lg) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-surface-container-lowest border-t border-outline-variant/20 shadow-2xl px-6 py-6 max-h-[80vh] overflow-y-auto space-y-5 fade-in">
          
          {/* Home Node */}
          <Link 
            to="/" 
            className="flex items-center gap-3 font-body text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary py-2 border-b border-outline-variant/15"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary">home</span>
            <span>Home</span>
          </Link>

          {/* Segments Mobile Accordion */}
          <div className="border-b border-outline-variant/15 pb-2">
            <button
              onClick={() => setMobileSegmentsOpen(!mobileSegmentsOpen)}
              className="w-full flex items-center justify-between text-left font-body text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary py-2 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-secondary">category</span>
                <span>Segments</span>
              </div>
              <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                mobileSegmentsOpen ? 'rotate-180' : ''
              }`}>
                expand_more
              </span>
            </button>

            {mobileSegmentsOpen && (
              <div className="pl-4 pt-2 pb-3 space-y-3">
                
                {/* Mobile Products Accordion */}
                <div className="border border-outline-variant/20 rounded-xs overflow-hidden">
                  <div className="w-full flex items-center justify-between bg-surface-container-low/60 px-3 py-2">
                    <Link
                      to="/products"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 font-body text-xs font-bold text-secondary uppercase hover:underline"
                    >
                      <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                      <span>Products (11)</span>
                    </Link>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="p-1 text-secondary cursor-pointer"
                      aria-label="Toggle products list"
                    >
                      <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                        mobileProductsOpen ? 'rotate-180' : ''
                      }`}>
                        expand_more
                      </span>
                    </button>
                  </div>

                  {mobileProductsOpen && (
                    <div className="p-3 bg-surface-container-lowest space-y-2">
                      <Link
                        to="/products"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-[11px] font-bold text-secondary uppercase tracking-wider pb-2 mb-2 border-b border-outline-variant/15 hover:underline"
                      >
                        Open Products Landing Page →
                      </Link>
                      <ul className="space-y-1.5">
                        {products.map((item, idx) => (
                          <li key={idx}>
                            <Link 
                              to={item.link} 
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-[11px] font-medium text-on-surface-variant hover:text-secondary flex items-center gap-2 py-0.5"
                            >
                              <span className="material-symbols-outlined text-[13px] text-outline">
                                {item.icon}
                              </span>
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Mobile Solutions Accordion */}
                <div className="border border-outline-variant/20 rounded-xs overflow-hidden">
                  <div className="w-full flex items-center justify-between bg-surface-container-low/60 px-3 py-2">
                    <Link
                      to="/solutions"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 font-body text-xs font-bold text-secondary uppercase hover:underline"
                    >
                      <span className="material-symbols-outlined text-[16px]">settings_suggest</span>
                      <span>Solutions (4)</span>
                    </Link>
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="p-1 text-secondary cursor-pointer"
                      aria-label="Toggle solutions list"
                    >
                      <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                        mobileSolutionsOpen ? 'rotate-180' : ''
                      }`}>
                        expand_more
                      </span>
                    </button>
                  </div>

                  {mobileSolutionsOpen && (
                    <div className="p-3 bg-surface-container-lowest space-y-2">
                      <Link
                        to="/solutions"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-[11px] font-bold text-secondary uppercase tracking-wider pb-2 mb-2 border-b border-outline-variant/15 hover:underline"
                      >
                        Open Solutions Landing Page →
                      </Link>
                      <ul className="space-y-1.5">
                        {solutions.map((item, idx) => (
                          <li key={idx}>
                            <Link 
                              to={item.link} 
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-[11px] font-medium text-on-surface-variant hover:text-secondary flex items-center gap-2 py-0.5"
                            >
                              <span className="material-symbols-outlined text-[13px] text-outline">
                                {item.icon}
                              </span>
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

          {/* Group Companies Mobile Accordion */}
          <div className="border-b border-outline-variant/15 pb-2">
            <button
              onClick={() => setMobileCompaniesOpen(!mobileCompaniesOpen)}
              className="w-full flex items-center justify-between text-left font-body text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary py-2 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-secondary">corporate_fare</span>
                <span>Group Companies</span>
              </div>
              <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                mobileCompaniesOpen ? 'rotate-180' : ''
              }`}>
                expand_more
              </span>
            </button>

            {mobileCompaniesOpen && (
              <div className="pl-6 pt-2 pb-2 space-y-2">
                {groupCompanies.map((company, idx) => (
                  <Link
                    key={idx}
                    to={company.link}
                    className="flex items-center gap-2.5 text-[11px] font-medium text-on-surface-variant hover:text-secondary py-1"
                  >
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      {company.icon}
                    </span>
                    <span>{company.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Media Mobile Accordion */}
          <div className="border-b border-outline-variant/15 pb-2">
            <button
              onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
              className="w-full flex items-center justify-between text-left font-body text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary py-2 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-secondary">perm_media</span>
                <span>Media</span>
              </div>
              <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                mobileMediaOpen ? 'rotate-180' : ''
              }`}>
                expand_more
              </span>
            </button>

            {mobileMediaOpen && (
              <div className="pl-6 pt-2 pb-2 space-y-2">
                {mediaItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className="flex items-center gap-2.5 text-[11px] font-medium text-on-surface-variant hover:text-secondary py-1"
                  >
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Careers Node */}
          <Link 
            to="/careers" 
            className="flex items-center gap-3 font-body text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary py-2 border-b border-outline-variant/15"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary">work</span>
            <span>Careers</span>
          </Link>

          {/* Bottom Mobile Consultation Button */}
          <div className="pt-2">
            <Link 
              to="/contact" 
              className="w-full bg-primary text-on-primary font-body text-xs font-bold py-3.5 tracking-widest uppercase text-center block rounded-xs hover:bg-secondary transition-colors"
            >
              Request Consultation
            </Link>
          </div>

        </div>
      )}
    </header>
  );
};

export default Header;
