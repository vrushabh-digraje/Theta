/**
 * Contact placeholder page.
 */
export const Contact = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-frame-margin py-section-gap flex flex-col items-center justify-center min-h-[50vh] text-center fade-in">
      <span className="font-body text-xs font-semibold text-secondary tracking-[0.35em] mb-4 uppercase">
        Get In Touch
      </span>
      <h1 className="font-display text-[40px] sm:text-[48px] font-semibold text-primary mb-6">
        Contact Us
      </h1>
      <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed mb-8">
        This is the Contact Us page placeholder for testing.
      </p>

      {/* Core contact details of Pune HQ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter text-left max-w-4xl w-full border-t border-outline-variant/30 pt-8 mt-4">
        <div>
          <span className="font-body text-[10px] font-bold text-secondary tracking-widest uppercase block mb-2 select-none">
            Call Us
          </span>
          <p className="font-body text-sm font-semibold text-primary">
            +91-20 66 268 600
          </p>
        </div>
        <div>
          <span className="font-body text-[10px] font-bold text-secondary tracking-widest uppercase block mb-2 select-none">
            Email Us
          </span>
          <p className="font-body text-sm font-semibold text-primary">
            info@thetacontrols.com
          </p>
        </div>
        <div>
          <span className="font-body text-[10px] font-bold text-secondary tracking-widest uppercase block mb-2 select-none">
            HQ Location
          </span>
          <p className="font-body text-xs leading-relaxed text-on-surface-variant">
            1, Electronic Estate, Pune - Satara Road, Pune - 411009, Maharashtra, India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
