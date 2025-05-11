import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#040404] text-white flex flex-col relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/pattern.svg)',
          backgroundSize: '100px 100px',
        }}
      />

      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center border-b border-gray-800 relative z-10">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-icon.svg" alt="Dahling Dreams Logo" className="h-10" />
          <span className="font-bold text-xl">Dahling Dreams</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/faq" className="text-gray-300 hover:text-primary">FAQ</Link>
          <a href="mailto:contact@dahlingdreams.com" className="button secondary text-sm py-2">
            Contact Us
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden">
        {/* Background Shape */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 shape-animation">
          <img src="/shapes.svg" alt="Background shapes" className="w-full max-w-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="shimmer w-full h-full absolute top-0 left-0 pointer-events-none" />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="heading-gradient">Privacy Policy</span>
            </h1>
            <p className="text-lg text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-md p-8 rounded-lg border border-gray-800 space-y-6 text-gray-300">
            <p>
              Welcome to Dahling Dreams. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2 className="text-2xl font-semibold text-primary pt-4">1. Information We Collect</h2>
            <p>
              We may collect personal information from you in a variety of ways, including, but not limited to, when you visit our site, register on the site, subscribe to our newsletter, or fill out a form. The types of personal information we may collect include your name, email address, and any other information you voluntarily provide to us.
            </p>
            <p>
              For users of our upcoming app, we will collect information necessary to personalize your storybook experience, such as your child's name and preferences, with your explicit consent.
            </p>

            <h2 className="text-2xl font-semibold text-primary pt-4">2. How We Use Your Information</h2>
            <p>
              We may use the information we collect from you to:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Provide, operate, and maintain our website and upcoming app.</li>
              <li>Improve, personalize, and expand our website and upcoming app.</li>
              <li>Understand and analyze how you use our website and upcoming app.</li>
              <li>Develop new products, services, features, and functionality.</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website and app, and for marketing and promotional purposes (if you opt-in).</li>
              <li>Process your transactions.</li>
              <li>Send you emails.</li>
              <li>Find and prevent fraud.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary pt-4">3. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
            </p>

            <h2 className="text-2xl font-semibold text-primary pt-4">4. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-2xl font-semibold text-primary pt-4">5. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal information: the right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to object to processing, and the right to data portability. To exercise these rights, please contact us.
            </p>

            <h2 className="text-2xl font-semibold text-primary pt-4">6. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-semibold text-primary pt-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@dahlingdreams.com" className="text-primary hover:underline">contact@dahlingdreams.com</a>.
            </p>
          </div>
        </div>
      </main>

      {/* Footer (Consistent with App.tsx) */}
      <footer className="py-6 px-6 border-t border-gray-800 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dahling Dreams</h3>
              <p className="text-gray-400">
                Bringing multilingual storybooks to children around the world, creating connections through the power of storytelling.
              </p>
             <div className="flex items-center gap-4 mt-4">
                <a href="https://facebook.com/dahlingdreams" className="text-gray-400 hover:text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                <a href="https://twitter.com/dahlingdreams" className="text-gray-400 hover:text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg></a>
                <a href="https://instagram.com/dahlingdreams" className="text-gray-400 hover:text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="mailto:contact@dahlingdreams.com" className="hover:text-primary">contact@dahlingdreams.com</a></li>
                <li>South Florida</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="text-gray-400 space-y-2">
                <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Site Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
                <li><a href="mailto:contact@dahlingdreams.com" className="hover:text-primary">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Dahling Dreams. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicyPage;
