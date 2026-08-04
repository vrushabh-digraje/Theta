import logoImg from '../assets/images/theta_logo.png';

/**
 * Footer component matching the corporate layout of the reference.
 * Replaced the text logo with the official corporate logo image.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-section-gap border-t border-outline-variant/20 bg-background">
      <div className="flex flex-col md:flex-row justify-between items-center px-frame-margin py-12 w-full max-w-[1440px] mx-auto">
        {/* Left Side: Brand Logo Image */}
        <div className="mb-8 md:mb-0 select-none">
          <img 
            src={logoImg} 
            alt="Theta Controls Logo" 
            className="h-10 w-auto object-contain select-none" 
          />
        </div>

        {/* Center: Legal/General Links */}
        <div className="flex flex-wrap justify-center gap-gutter mb-8 md:mb-0">
          <a 
            className="font-body text-xs font-semibold text-outline hover:text-secondary transition-colors duration-200" 
            href="#privacy"
          >
            Privacy Policy
          </a>
          <a 
            className="font-body text-xs font-semibold text-outline hover:text-secondary transition-colors duration-200" 
            href="#terms"
          >
            Terms of Service
          </a>
          <a 
            className="font-body text-xs font-semibold text-outline hover:text-secondary transition-colors duration-200" 
            href="#cookies"
          >
            Cookie Settings
          </a>
          <a 
            className="font-body text-xs font-semibold text-outline hover:text-secondary transition-colors duration-200" 
            href="#offices"
          >
            Global Offices
          </a>
        </div>

        {/* Right Side: Copyright Notation */}
        <p className="font-body text-[10px] font-semibold text-outline text-center md:text-right select-none uppercase tracking-wider">
          © 2026 THETA CONTROLS & SYSTEMS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
