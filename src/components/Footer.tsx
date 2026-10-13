import type { FC } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/theta_logo.png';
import { Reveal } from './Reveal';

/**
 * Enterprise B2B Footer component matching THETA Controls' technical branding.
 * Organized into 4 structured columns with primary visual focus on direct phone and email contact.
 */
export const Footer: FC = () => {
  return (
    <footer className="w-full mt-20 border-t border-outline-variant/20 bg-surface-container-lowest text-on-surface">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin pt-14 pb-10">
        
        {/* Main 4-Column Grid with Reveal */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-outline-variant/15">
          
          {/* Column 1: Brand & Priority Direct Contact (Cols 1 to 4) */}
          <div className="lg:col-span-4 flex flex-col pr-2">
            <Link to="/" className="inline-block mb-4 select-none">
              <img 
                src={logoImg} 
                alt="Theta Controls Logo" 
                className="h-10 w-auto object-contain" 
              />
            </Link>

            {/* Slightly reduced concise writeup */}
            <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-5">
              CRISIL-rated (MSME 2B), IIT-led engineering partner specializing in industrial automation, 
              defence electronics, and IoT networking systems since 1981.
            </p>

            {/* Pune HQ Contact Details (Clean & Consistent with Website Layout) */}
            <div className="space-y-3 font-body text-xs text-on-surface-variant mb-6">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">location_on</span>
                <span>1, Electronic Estate, Pune - Satara Road, Pune - 411009, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">call</span>
                <a 
                  href="tel:+912066268600" 
                  className="font-bold text-sm text-primary hover:text-secondary transition-colors"
                  title="Call Pune HQ"
                >
                  +91-20 66 268 600
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">mail</span>
                <a 
                  href="mailto:info@thetacontrols.com" 
                  className="font-semibold text-xs text-primary hover:text-secondary transition-colors"
                  title="Email Theta Controls"
                >
                  info@thetacontrols.com
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-surface-container-low text-secondary text-[10px] font-bold px-2 py-0.5 rounded-xs uppercase tracking-wider border border-outline-variant/20">
                CRISIL MSME 2B
              </span>
              <span className="bg-surface-container-low text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded-xs uppercase tracking-wider border border-outline-variant/20">
                7,600 sq.ft Facility
              </span>
            </div>
          </div>

          {/* Column 2: Segments & Products (Cols 5 to 7 - Slightly Reduced) */}
          <div className="lg:col-span-3">
            <span className="font-body text-xs font-bold text-primary tracking-widest uppercase block mb-4">
              Segments & Products
            </span>
            <ul className="space-y-2.5 font-body text-xs text-on-surface-variant">
              <li>
                <Link to="/products" className="text-secondary font-bold hover:underline flex items-center gap-1">
                  <span>All Products Catalog (11)</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-secondary font-bold hover:underline flex items-center gap-1 pb-1 border-b border-outline-variant/15 mb-2">
                  <span>Turnkey Solutions (4)</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </li>
              <li>
                <Link to="/products?product=industrial-switches" className="hover:text-secondary transition-colors block">
                  Industrial Switches & Routers
                </Link>
              </li>
              <li>
                <Link to="/products?product=power-controllers" className="hover:text-secondary transition-colors block">
                  PID & Power Controllers
                </Link>
              </li>
              <li>
                <Link to="/products?product=paperless-recorders" className="hover:text-secondary transition-colors block">
                  Paperless Recorders
                </Link>
              </li>
              <li>
                <Link to="/products?product=rov" className="hover:text-secondary transition-colors block">
                  ROV – Defence Robotics
                </Link>
              </li>
              <li>
                <Link to="/products?product=tibbo-tps" className="hover:text-secondary transition-colors block">
                  IoT Gateways & Wireless Sensors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Group Companies (Cols 8 to 10) */}
          <div className="lg:col-span-3">
            <span className="font-body text-xs font-bold text-primary tracking-widest uppercase block mb-4">
              Group Companies
            </span>
            <ul className="space-y-2.5 font-body text-xs text-on-surface-variant">
              <li>
                <Link to="/industrial-automation" className="hover:text-secondary transition-colors block">
                  Theta Controls & Systems
                </Link>
              </li>
              <li>
                <Link to="/defence-systems" className="hover:text-secondary transition-colors block">
                  Theta Defence & Aerospace
                </Link>
              </li>
              <li>
                <Link to="/iot-components" className="hover:text-secondary transition-colors block">
                  Theta IoT Technologies
                </Link>
              </li>
              <li>
                <Link to="/system-integration" className="hover:text-secondary transition-colors block">
                  Theta Test & Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Media (Cols 11 to 12) */}
          <div className="lg:col-span-2">
            <span className="font-body text-xs font-bold text-primary tracking-widest uppercase block mb-4">
              Company & Media
            </span>
            <ul className="space-y-2.5 font-body text-xs text-on-surface-variant">
              <li>
                <a href="#who-we-are" className="hover:text-secondary transition-colors block">
                  About THETA
                </a>
              </li>
              <li>
                <a href="#notable-projects" className="hover:text-secondary transition-colors block">
                  Notable Projects
                </a>
              </li>
              <li>
                <Link to="/news" className="hover:text-secondary transition-colors block">
                  News & Press
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-secondary transition-colors block">
                  Careers (75+ Engineers)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary font-medium hover:underline block">
                  Contact Pune HQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-outline font-body text-xs">
          <p className="select-none text-center sm:text-left">
            © 2026 THETA CONTROLS & SYSTEMS PVT. LTD. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-secondary transition-colors">
              Terms of Service
            </Link>
            <a href="#faq" className="hover:text-secondary transition-colors">
              FAQs
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
