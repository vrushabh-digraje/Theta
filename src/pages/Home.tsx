import Hero from '../components/Hero';
import GroupCompanies from '../components/GroupCompanies';
import Partners from '../components/Partners';
import ContactCTA from '../components/ContactCTA';

// Structured FAQ Schema for SEO crawlers (Schema.org FAQPage)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What industries does THETA Controls serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'THETA Controls serves oil & gas, chemical, manufacturing, defence, and smart city sectors, providing process control instruments, industrial networking, automation systems, and IoT solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is THETA Controls located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'THETA Controls is headquartered at 1 Electronic Estate, Unit 1, near City Pride Theatre, Satara Road, Pune, Maharashtra 411009 with a 7,600 sq.ft. manufacturing and integration facility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What products does THETA Controls manufacture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'THETA manufactures process control instruments, PC-based automation systems, industrial networking equipment, defence electronics, and IoT gateways, including PID temperature controllers, paperless recorders, and thyristor power controllers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is THETA Controls an IIT-led company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, THETA Controls was founded in 1981 and is led by an IIT graduate with over three decades of experience, backed by a 75-member engineering team and a CRISIL MSME 2B rating.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does THETA Controls work with government or defence organizations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, THETA Controls has contributed to controller and instrument development for DRDO and subsystem development for the ROV 'Daksh'.",
      },
    },
  ],
};

/**
 * Streamlined Homepage:
 * 1. Hero (Slideshow + Who We Are)
 * 2. Group Companies (Core corporate divisions)
 * 3. Partners (Technology principals: NI, Belden, Hirschmann, etc.)
 * 4. ContactCTA (Sales & inquiry banner)
 *
 * Preserves Google FAQPage Schema.org structured data in head for search crawlers.
 */
export const Home = () => {
  return (
    <>
      {/* Search Engine Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Core Hero & Who We Are Block */}
      <Hero />

      {/* 2. Group Companies Corporate Ecosystem */}
      <GroupCompanies />

      {/* 4. Technology Principals & Global Alliances */}
      <Partners />

      {/* 5. Contact Call-to-Action */}
      <ContactCTA />
    </>
  );
};

export default Home;
