import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
// Removed import for SupportChatModal

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Removed isSupportModalOpen state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setEmail(''); // Clear email field on success
      } else {
        setError(result.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit email. Please check your connection and try again.');
      console.error('Submission error:', err);
    }
    setIsLoading(false);
  };

  // Removed toggleSupportModal function

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
        <div className="flex items-center gap-2">
          <img src="/logo-icon.svg" alt="Dahling Dreams Logo" className="h-10" />
          <span className="font-bold text-xl">Dahling Dreams</span>
        </div>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-40 shape-animation">
          <img src="/shapes.svg" alt="Background shapes" className="w-full max-w-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center text-center max-w-3xl">
          <div className="shimmer w-full h-full absolute top-0 left-0 pointer-events-none" />

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="heading-gradient">Where Stories</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8">
            <span className="heading-gradient">Meet Imagination</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mb-12">
            Opening the world of imagination to children across different cultures and languages.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 my-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://ext.same-assets.com/239165245/3668259102.webp"
                alt="Purple flower"
                className="w-full max-w-xs mx-auto md:max-w-full shape-animation"
                style={{ maxHeight: '300px', objectFit: 'contain' }}
              />
            </div>

            <div className="w-full md:w-1/2 bg-black/30 backdrop-blur-md p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6">Coming Soon!</h3>
              <p className="text-lg text-gray-300 mb-8">
                DAHLING DREAMS is currently under maintenance. We're building a storybook app that transcends language barriers, connecting children worldwide through captivating stories in multiple languages.
              </p>

              <p className="text-md text-gray-400 mb-8">
                Be the first to know when we launch. Sign up to receive updates and early access.
              </p>

              {!submitted && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                    {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
                  </div>
                  <button type="submit" className="button" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Notify Me'}
                  </button>
                </form>
              )}
              {submitted && (
                <div className="bg-green-900/20 border border-green-900 p-4 rounded-md">
                  <p className="text-green-400">Thank you for signing up! We'll notify you when we launch.</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="heading-gradient">Nurture Imagination</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="heading-gradient">Let Stories Blossom</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <FeatureCard
              title="Multilingual Stories"
              description="Stories come alive in multiple languages including English, Spanish, French, Mandarin, Arabic, and more through full internationalization support."
            />
            <FeatureCard
              title="Interactive Adventures"
              description="Immersive storybook experiences with animated characters, interactive elements, and engaging narratives that respond to touch and sound for deeper engagement."
            />
            <FeatureCard
              title="Cultural Connection"
              description="Children connect with diverse cultures through authentic stories rich with heritage, customs, and shared human experiences."
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-gray-800 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dahling Dreams</h3>
              <p className="text-gray-400">
                Bringing multilingual storybooks to children around the world, creating connections through the power of storytelling.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <a href="https://facebook.com/dahlingdreams" className="text-gray-400 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://twitter.com/dahlingdreams" className="text-gray-400 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="https://instagram.com/dahlingdreams" className="text-gray-400 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="mailto:contact@dahlingdreams.com" className="hover:text-primary">
                    contact@dahlingdreams.com
                  </a>
                </li>
                <li>South Florida</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/cookies" className="hover:text-primary">Cookie Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Site Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <Link to="/" className="hover:text-primary">Home</Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-primary">FAQ</Link>
                </li>
                <li>
                  <a href="mailto:contact@dahlingdreams.com" className="text-gray-400 hover:text-primary">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Dahling Dreams. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Removed SupportChatModal instance */}
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-gray-800 hover:border-[#6799c6] transition-colors">
      <h4 className="text-lg font-semibold mb-3">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;
