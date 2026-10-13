import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { setMenuOpen } from '../store/uiSlice';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/theta_logo.png';

/**
 * Slide-out navigation drawer component.
 * Uses React Router Links for page transitions.
 * Drawer logo image is static and does not have hover interactions.
 */
export const SideMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state) => state.ui.isMenuOpen);
  const [isSegmentsOpen, setIsSegmentsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(true);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isGroupCompaniesOpen, setIsGroupCompaniesOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);

  const handleCloseMenu = () => {
    dispatch(setMenuOpen(false));
  };

  const toggleSegments = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSegmentsOpen(!isSegmentsOpen);
  };

  const toggleProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const toggleGroupCompanies = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsGroupCompaniesOpen(!isGroupCompaniesOpen);
  };

  const toggleMedia = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMediaOpen(!isMediaOpen);
  };

  // Close the menu on pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(setMenuOpen(false));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  // Reset sub-menus when the side drawer closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsSegmentsOpen(false);
      setIsProductsOpen(true);
      setIsSolutionsOpen(false);
      setIsGroupCompaniesOpen(false);
      setIsMediaOpen(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Dark Overlay Backdrop when SideMenu is active */}
      <div 
        onClick={handleCloseMenu}
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-500 z-[55] ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-out Navigation Drawer */}
      <nav 
        id="sideNav"
        className={`h-full fixed left-0 w-80 bg-surface shadow-2xl transition-transform duration-500 z-[60] flex flex-col p-gutter border-r border-outline-variant/10 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center mb-8 shrink-0">
          <Link 
            to="/" 
            onClick={handleCloseMenu}
            className="flex items-center hover:opacity-85 transition-opacity select-none"
          >
            <img 
              src={logoImg} 
              alt="Theta Controls Logo" 
              className="h-9 w-auto object-contain select-none" 
            />
          </Link>
          <button 
            onClick={handleCloseMenu}
            className="material-symbols-outlined text-primary text-[24px] cursor-pointer hover:opacity-75 transition-opacity"
            aria-label="Close menu"
          >
            close
          </button>
        </div>

        {/* Drawer Links - Styled with scroll support in case of height overflow */}
        <div className="flex-grow overflow-y-auto pr-2 space-y-6 scrollbar-thin">
          {/* Home Node */}
          <Link 
            to="/" 
            onClick={handleCloseMenu}
            className="group flex items-center gap-4 text-on-surface-variant font-body text-xs font-semibold tracking-widest uppercase hover:text-secondary transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
              home
            </span>
            Home
          </Link>

          {/* Segments - Expandable Accordion Menu */}
          <div className="space-y-3">
            <button 
              onClick={toggleSegments}
              className="w-full text-left group flex justify-between items-center text-on-surface-variant font-body text-xs font-semibold tracking-widest uppercase hover:text-secondary transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-4 select-none">
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
                  category
                </span>
                Segments
              </div>
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${isSegmentsOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {/* Segments Sub-menu panel */}
            <div 
              className={`pl-6 space-y-4 overflow-hidden transition-all duration-300 origin-top ${
                isSegmentsOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              {/* Segment 1: Products */}
              <div className="border-l-2 border-outline-variant/30 pl-3 space-y-2">
                <button
                  onClick={toggleProducts}
                  className="w-full flex justify-between items-center text-left text-on-surface font-body text-[11px] font-bold tracking-wider uppercase hover:text-secondary transition-colors cursor-pointer select-none py-1"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">inventory_2</span>
                    Products
                  </span>
                  <span className={`material-symbols-outlined text-[14px] transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>

                <div 
                  className={`space-y-2.5 overflow-hidden transition-all duration-300 ${
                    isProductsOpen ? 'max-h-[550px] opacity-100 pt-1 pb-2' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <Link 
                    to="/defence-systems" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    ROV – Remote Operated Vehicles
                  </Link>
                  <Link 
                    to="/industrial-networking" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Industrial Switches
                  </Link>
                  <Link 
                    to="/industrial-automation" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Paperless Recorders
                  </Link>
                  <Link 
                    to="/industrial-automation" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Power Controllers
                  </Link>
                  <Link 
                    to="/industrial-automation" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    PID / Profile Controllers
                  </Link>
                  <Link 
                    to="/industrial-automation" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Sensors & Panel Accessories
                  </Link>
                  <Link 
                    to="/iot-components" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Tibbo Project System (TPS)
                  </Link>
                  <Link 
                    to="/iot-components" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Linux chip SP7021 & Linux Board
                  </Link>
                  <Link 
                    to="/iot-components" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Serial to Ethernet Controller
                  </Link>
                  <Link 
                    to="/digital-microscopes" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Digital Microscopes
                  </Link>
                  <Link 
                    to="/industrial-automation" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Electronic / Regenerative Loads
                  </Link>
                </div>
              </div>

              {/* Segment 2: Solutions */}
              <div className="border-l-2 border-outline-variant/30 pl-3 space-y-2">
                <button
                  onClick={toggleSolutions}
                  className="w-full flex justify-between items-center text-left text-on-surface font-body text-[11px] font-bold tracking-wider uppercase hover:text-secondary transition-colors cursor-pointer select-none py-1"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">settings_suggest</span>
                    Solutions
                  </span>
                  <span className={`material-symbols-outlined text-[14px] transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>

                <div 
                  className={`space-y-2.5 overflow-hidden transition-all duration-300 ${
                    isSolutionsOpen ? 'max-h-[250px] opacity-100 pt-1 pb-2' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <Link 
                    to="/system-integration" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Test Solutions
                  </Link>
                  <Link 
                    to="/system-integration" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Data Acquisition Systems (DAQ)
                  </Link>
                  <Link 
                    to="/system-integration" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Control Panel Engineering Services
                  </Link>
                  <Link 
                    to="/system-integration" 
                    onClick={handleCloseMenu}
                    className="group flex items-center gap-2.5 text-on-surface-variant/80 font-body text-[11px] font-medium hover:text-secondary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant/60 group-hover:bg-secondary transition-colors shrink-0" />
                    Automated Test Equipment / EOL
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Group Companies - Expandable Accordion Menu */}
          <div className="space-y-3">
            <button 
              onClick={toggleGroupCompanies}
              className="w-full text-left group flex justify-between items-center text-on-surface-variant font-body text-xs font-semibold tracking-widest uppercase hover:text-secondary transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-4 select-none">
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
                  corporate_fare
                </span>
                Group Companies
              </div>
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${isGroupCompaniesOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {/* Sub-menu panel */}
            <div 
              className={`pl-9 space-y-3 overflow-hidden transition-all duration-300 origin-top ${
                isGroupCompaniesOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <Link 
                to="/contact" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">domain</span>
                Theta Controls & Systems
              </Link>
              <Link 
                to="/defence-systems" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">shield</span>
                Theta Defence & Aerospace
              </Link>
              <Link 
                to="/iot-components" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">sensors</span>
                Theta IoT Technologies
              </Link>
              <Link 
                to="/system-integration" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">precision_manufacturing</span>
                Theta Test & Automation
              </Link>
            </div>
          </div>

          {/* Media - Expandable Accordion Menu */}
          <div className="space-y-3">
            <button 
              onClick={toggleMedia}
              className="w-full text-left group flex justify-between items-center text-on-surface-variant font-body text-xs font-semibold tracking-widest uppercase hover:text-secondary transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-4 select-none">
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
                  perm_media
                </span>
                Media
              </div>
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${isMediaOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {/* Sub-menu panel */}
            <div 
              className={`pl-9 space-y-3 overflow-hidden transition-all duration-300 origin-top ${
                isMediaOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <Link 
                to="/news" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">newspaper</span>
                News
              </Link>
              <Link 
                to="/gallery" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">image</span>
                Gallery
              </Link>
              <Link 
                to="/blogs" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">menu_book</span>
                Blogs
              </Link>
            </div>
          </div>

          {/* Careers Node */}
          <Link 
            to="/careers" 
            onClick={handleCloseMenu}
            className="group flex items-center gap-4 text-on-surface-variant font-body text-xs font-semibold tracking-widest uppercase hover:text-secondary transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
              work
            </span>
            Careers
          </Link>

          {/* Contact Node */}
          <Link 
            to="/contact" 
            onClick={handleCloseMenu}
            className="group flex items-center gap-4 text-on-surface-variant font-body text-xs font-semibold tracking-widest uppercase hover:text-secondary transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
              mail
            </span>
            Contact
          </Link>
        </div>

        {/* Drawer Footer Actions */}
        <div className="mt-auto pt-6 border-t border-outline-variant/20 flex flex-col gap-4 shrink-0">
          <Link 
            to="/contact" 
            onClick={handleCloseMenu}
            className="bg-primary text-on-primary font-body text-xs font-semibold py-4 w-full tracking-widest hover:bg-on-surface-variant transition-colors duration-300 cursor-pointer block text-center uppercase"
          >
            REQUEST CONSULTATION
          </Link>
          
          {/* 
          <div className="flex gap-4 opacity-50 select-none">
            <span className="font-body text-[10px] font-semibold tracking-wider hover:opacity-75 cursor-pointer">
              PRIVACY
            </span>
            <span className="font-body text-[10px] font-semibold tracking-wider hover:opacity-75 cursor-pointer">
              LEGAL
            </span>
          </div>
          */}
        </div>
      </nav>
    </>
  );
};

export default SideMenu;
