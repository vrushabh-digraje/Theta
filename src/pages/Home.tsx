import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import StatsBar from '../components/StatsBar';
import Industries from '../components/Industries';
import Partners from '../components/Partners';
import NotableProjects from '../components/NotableProjects';
import FAQ from '../components/FAQ';
import ContactCTA from '../components/ContactCTA';

/**
 * Home page component bundling all SEO-compliant sections.
 */
export const Home = () => {
  return (
    <>
      {/* Core split layout hero block */}
      <Hero />
      
      {/* What We Do grid section */}
      <WhatWeDo />
      
      {/* Why Choose THETA Controls stats bar */}
      <StatsBar />
      
      {/* Industries We Serve section */}
      <Industries />
      
      {/* Partners section */}
      <Partners />
      
      {/* Notable Projects section */}
      <NotableProjects />
      
      {/* Frequently Asked Questions section */}
      <FAQ />
      
      {/* Contact Call-to-Action section */}
      <ContactCTA />
    </>
  );
};

export default Home;
