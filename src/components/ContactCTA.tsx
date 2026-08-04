import type { FC } from 'react';
import { Link } from 'react-router-dom';

/**
 * ContactCTA component representing Section 8 (Get in Touch / Contact CTA)
 * of the SEO content draft. Styled as a premium, fully-clickable interactive banner.
 */
export const ContactCTA: FC = () => {
  return (
    <section className="max-w-[1680px] mx-auto px-frame-margin py-12 relative z-10 fade-in">
      <Link 
        to="/contact" 
        className="block bg-primary text-on-primary py-6 px-10 sm:py-8 sm:px-14 flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-xs relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-secondary/30 border border-transparent group decoration-none cursor-pointer"
      >
        {/* Decorative Background Grid Pattern with hover scale/fade */}
        <div className="absolute inset-0 pointer-events-none opacity-5 group-hover:opacity-15 transition-opacity duration-500 technical-background bg-secondary/50 scale-100 group-hover:scale-[1.02] transition-transform duration-500"></div>
        
        {/* Left Side: Text Details */}
        <div className="flex flex-col max-w-2xl relative z-10 text-left">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-tight mb-4 select-none group-hover:text-secondary transition-colors duration-300">
            Get in Touch
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-primary/75 leading-relaxed text-justify">
            Looking for a reliable automation partner? Contact THETA Controls today to discuss your 
            process control, networking, or defence engineering requirements.
          </p>
        </div>

        {/* Right Side: Interactive CTA Button Display */}
        <div className="shrink-0 relative z-10 select-none">
          <div className="bg-secondary text-on-secondary group-hover:bg-white group-hover:text-primary font-body text-xs font-semibold px-10 py-5 tracking-widest transition-all duration-300 uppercase flex items-center justify-center gap-2.5">
            <span>GET IN TOUCH</span>
            <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1.5">
              arrow_forward
            </span>
          </div>
        </div>

      </Link>
    </section>
  );
};

export default ContactCTA;
