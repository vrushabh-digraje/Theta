import type { FC } from 'react';
import { Link } from 'react-router-dom';

/**
 * NotableProjects component representing Section 6 (Notable Projects / Track Record)
 * of the SEO content draft. Renders H3 tags and interactive layout linking to /defence-systems.
 */
export const NotableProjects: FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-frame-margin pt-20 pb-32 relative z-10 fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Title and Intro block (cols 1 to 5) */}
        <div className="lg:col-span-5 flex flex-col pr-4">
          <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[44px] font-semibold text-primary mb-6 leading-tight select-none transition-all duration-500 hover:text-secondary hover:tracking-wide cursor-default">
            Notable Projects
          </h2>
          <div className="h-[2px] w-20 bg-secondary mb-6"></div>
          <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed text-justify">
            THETA Controls has a proven track record in mission-critical defence engineering, delivering 
            rugged control subsystems designed to withstand high-stress environments.
          </p>
        </div>

        {/* Right Side: Detailed Copy and Collaborations (cols 6 to 12) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-low/30 border border-outline-variant/15 p-6 sm:p-8 rounded-xs">
          
          {/* Card 1: DRDO Strategic Subsystems */}
          <Link 
            to="/defence-systems"
            className="flex flex-col justify-between p-6 bg-surface-container-lowest border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xs hover:border-secondary group cursor-pointer text-left decoration-none"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 select-none">
                <span className="material-symbols-outlined text-secondary text-[24px]">military_tech</span>
                <h3 className="font-display text-base font-bold text-secondary group-hover:text-primary transition-colors">
                  DRDO Strategic Work
                </h3>
              </div>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed text-justify">
                Our engineering team has contributed directly to the development of custom controllers 
                and precision monitoring instruments for DRDO, supporting India's indigenous defence 
                research programs.
              </p>
            </div>
            
            {/* Bottom Arrow Indicator */}
            <div className="flex items-center gap-2 mt-6 text-[10px] font-bold text-secondary tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
              <span>View Systems</span>
              <span className="material-symbols-outlined text-[12px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </Link>

          {/* Card 2: ROV 'Daksh' Development */}
          <Link 
            to="/defence-systems"
            className="flex flex-col justify-between p-6 bg-surface-container-lowest border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xs hover:border-secondary group cursor-pointer text-left decoration-none"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 select-none">
                <span className="material-symbols-outlined text-secondary text-[24px]">robot_2</span>
                <h3 className="font-display text-base font-bold text-secondary group-hover:text-primary transition-colors">
                  ROV 'Daksh' Subsystem
                </h3>
              </div>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed text-justify">
                We engineered the critical subsystem controls for the remotely operated vehicle (ROV) 
                'Daksh' — a specialized vehicle deployed by defence forces for bomb disposal and 
                hazardous-material handling operations.
              </p>
            </div>
            
            {/* Bottom Arrow Indicator */}
            <div className="flex items-center gap-2 mt-6 text-[10px] font-bold text-secondary tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
              <span>View Subsystem</span>
              <span className="material-symbols-outlined text-[12px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </Link>



        </div>

      </div>
    </section>
  );
};

export default NotableProjects;
