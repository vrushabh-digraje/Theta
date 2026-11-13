import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

interface MetricItem {
  value: string;
  label: string;
  detail: string;
  icon: string;
  link: string;
}

const metrics: MetricItem[] = [
  {
    value: '1981 / 40+ Yrs',
    label: 'IIT-Led Leadership',
    detail: 'Over four decades of engineering precision',
    icon: 'history_edu',
    link: '/contact',
  },
  {
    value: '75+ Engineers',
    label: 'Electronics Team',
    detail: 'In-house design, assembly & QA',
    icon: 'groups',
    link: '/careers',
  },
  {
    value: 'CRISIL MSME 2B',
    label: 'Verified Rating',
    detail: 'High financial stability & creditworthiness',
    icon: 'verified',
    link: '/contact',
  },
  {
    value: '7,600 Sq.Ft.',
    label: 'Integration Facility',
    detail: 'Satara Road, Pune manufacturing plant',
    icon: 'precision_manufacturing',
    link: '/contact',
  },
];

/**
 * Compact, single-row credibility metric strip.
 * Replaces the tall 650px spotlight box with an ultra-sleek, 4-metric horizontal proof bar.
 */
export const StatsBar: FC = () => {
  return (
    <section className="bg-surface-container-low/60 border-y border-outline-variant/15 py-8 sm:py-10 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-frame-margin">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x divide-outline-variant/20">
            {metrics.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="group flex items-start gap-3.5 lg:px-4 first:lg:pl-0 last:lg:pr-0 transition-transform duration-200 hover:-translate-y-0.5 select-none"
              >
                <div className="w-10 h-10 rounded-xs bg-surface-container-lowest border border-outline-variant/25 flex items-center justify-center shrink-0 group-hover:border-secondary group-hover:bg-secondary/10 transition-colors">
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    {item.icon}
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-display text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors leading-tight">
                    {item.value}
                  </span>
                  <span className="font-body text-[11px] font-semibold text-secondary uppercase tracking-wider mt-0.5">
                    {item.label}
                  </span>
                  <span className="font-body text-[11px] text-on-surface-variant/80 truncate mt-0.5 hidden sm:block">
                    {item.detail}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StatsBar;
