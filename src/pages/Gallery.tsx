/**
 * Gallery placeholder page.
 */
export const Gallery = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-frame-margin py-section-gap flex flex-col items-center justify-center min-h-[50vh] text-center fade-in">
      <span className="font-body text-xs font-semibold text-secondary tracking-[0.35em] mb-4 uppercase">
        Media
      </span>
      <h1 className="font-display text-[40px] sm:text-[48px] font-semibold text-primary mb-6">
        Product Gallery
      </h1>
      <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
        This is the Product Gallery page placeholder for testing.
      </p>
    </section>
  );
};

export default Gallery;
