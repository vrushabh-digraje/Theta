import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import DefenceSystems from './pages/DefenceSystems';
import IndustrialNetworking from './pages/IndustrialNetworking';
import IndustrialAutomation from './pages/IndustrialAutomation';
import SystemIntegration from './pages/SystemIntegration';
import IotComponents from './pages/IotComponents';
import DigitalMicroscopes from './pages/DigitalMicroscopes';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

/**
 * Main App component assembling the homepage sections and setting up the base page layout.
 * Configured with React Router for routing across navbar pages.
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-surface-container-lowest text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-container antialiased min-h-screen flex flex-col">
        {/* Sticky glassmorphic header bar */}
        <Header />

        {/* Main Canvas containing active page with grid backdrop */}
        <main className="relative overflow-hidden min-h-screen technical-background flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/defence-systems" element={<DefenceSystems />} />
            <Route path="/industrial-networking" element={<IndustrialNetworking />} />
            <Route path="/industrial-automation" element={<IndustrialAutomation />} />
            <Route path="/system-integration" element={<SystemIntegration />} />
            <Route path="/iot-components" element={<IotComponents />} />
            <Route path="/digital-microscopes" element={<DigitalMicroscopes />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Structured corporate footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
