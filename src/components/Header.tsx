import { useAppDispatch, useAppSelector } from '../store';
import { toggleMenu, setLanguage } from '../store/uiSlice';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/theta_logo.png';

/**
 * Header component providing sticky navigation, logo, and links.
 * Center logo image is static and does not have hover interactions.
 */
export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.ui.language);

  const handleOpenMenu = () => {
    dispatch(toggleMenu());
  };

  const handleLanguageChange = () => {
    const nextLang = language === 'EN' ? 'IN' : 'EN';
    dispatch(setLanguage(nextLang));
  };

  return (
    <header className="w-full top-0 sticky z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-frame-margin h-24 w-full max-w-[1440px] mx-auto relative">
        {/* Left Side: SideNav Menu Trigger */}
        <div 
          onClick={handleOpenMenu}
          className="flex items-center gap-4 cursor-pointer hover:opacity-70 transition-opacity duration-300"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-primary text-[24px]">menu</span>
          <span className="font-body text-xs font-semibold tracking-widest text-primary uppercase select-none">
            Menu
          </span>
        </div>

        {/* Center: Brand Logo Image */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-auto">
          <Link 
            to="/" 
            className="flex items-center justify-center hover:opacity-85 transition-opacity duration-300 select-none"
          >
            <img 
              src={logoImg} 
              alt="Theta Controls Logo" 
              className="h-10 w-auto object-contain select-none" 
            />
          </Link>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-gutter">
          {/* Language Selector */}
          <div 
            onClick={handleLanguageChange}
            className="hidden md:flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition-opacity duration-300 select-none"
          >
            <span className="font-body text-xs font-semibold text-on-surface-variant">{language}</span>
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
          </div>

          {/* Action CTA Button */}
          <Link 
            to="/contact" 
            className="bg-primary text-on-primary font-body text-xs font-semibold px-8 py-3 tracking-widest hover:bg-on-surface-variant transition-colors duration-300 cursor-pointer block uppercase text-center"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
