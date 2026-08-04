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
  const [isBusinessUnitsOpen, setIsBusinessUnitsOpen] = useState(false);

  const handleCloseMenu = () => {
    dispatch(setMenuOpen(false));
  };

  const toggleBusinessUnits = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsBusinessUnitsOpen(!isBusinessUnitsOpen);
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
      setIsBusinessUnitsOpen(false);
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

          {/* Business Units - Expandable Accordion Menu */}
          <div className="space-y-3">
            <button 
              onClick={toggleBusinessUnits}
              className="w-full text-left group flex justify-between items-center text-on-surface-variant font-body text-xs font-semibold tracking-widest uppercase hover:text-secondary transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-4 select-none">
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
                  business_center
                </span>
                Business Units
              </div>
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${isBusinessUnitsOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {/* Sub-menu panel */}
            <div 
              className={`pl-9 space-y-3 overflow-hidden transition-all duration-300 origin-top ${
                isBusinessUnitsOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <Link 
                to="/defence-systems" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">shield</span>
                Defence Systems
              </Link>
              <Link 
                to="/industrial-networking" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">lan</span>
                Industrial Networking
              </Link>
              <Link 
                to="/industrial-automation" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">precision_manufacturing</span>
                Industrial Automation
              </Link>
              <Link 
                to="/system-integration" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">hub</span>
                System Integration
              </Link>
              <Link 
                to="/iot-components" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">sensors</span>
                IoT Components
              </Link>
              <Link 
                to="/digital-microscopes" 
                onClick={handleCloseMenu}
                className="group flex items-center gap-3 text-on-surface-variant/80 font-body text-[11px] font-semibold tracking-widest uppercase hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60 group-hover:text-secondary">biotech</span>
                Digital Microscopes
              </Link>
            </div>
          </div>

          {/* News Node */}
          <Link 
            to="/news" 
            onClick={handleCloseMenu}
            className="group flex items-center gap-4 text-on-surface-variant font-body text-xs font-semibold tracking-widest uppercase hover:text-secondary transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
              newspaper
            </span>
            News
          </Link>

          {/* Gallery Node */}
          <Link 
            to="/gallery" 
            onClick={handleCloseMenu}
            className="group flex items-center gap-4 text-on-surface-variant font-body text-xs font-semibold tracking-widest uppercase hover:text-secondary transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
              image
            </span>
            Gallery
          </Link>

          {/* Blogs Node */}
          <Link 
            to="/blogs" 
            onClick={handleCloseMenu}
            className="group flex items-center gap-4 text-on-surface-variant font-body text-xs font-semibold tracking-widest uppercase hover:text-secondary transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
              menu_book
            </span>
            Blogs
          </Link>

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
          
          <div className="flex gap-4 opacity-50 select-none">
            <span className="font-body text-[10px] font-semibold tracking-wider hover:opacity-75 cursor-pointer">
              PRIVACY
            </span>
            <span className="font-body text-[10px] font-semibold tracking-wider hover:opacity-75 cursor-pointer">
              LEGAL
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideMenu;
