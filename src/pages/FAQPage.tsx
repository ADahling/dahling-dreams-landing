import React from 'react'; // Keep React if FAQItem uses React.useState
import { Link } from 'react-router-dom';
import '../index.css';

// Assuming FAQItem was defined here or imported, and might use React.useState
// If FAQItem is simple and doesn't use hooks, React import might not be strictly needed
// but it's safer to keep it if there was a component definition for FAQItem.

// Placeholder for where FAQItem component definition would be if it was in this file
// For now, we ensure no direct SupportChatModal logic is here.

const faqs = [
  {
    question: "What is Dahling Dreams?",
    answer: "Dahling Dreams is an enchanting digital platform that brings bedtime stories to life. Our app creates personalized stories in multiple languages, making storytime more magical and meaningful for children around the world."
  },
  {
    question: "What features will Dahling Dreams offer?",
    answer: "Our app will include: story personalization with your child's name and preferences, stories available in multiple languages, beautiful illustrations that bring characters to life, audio narration for a complete storytelling experience, your own library to save favorite stories, and easy sharing options with family members."
  },
  {
    question: "How will the personalization work?",
    answer: "Simply enter your child's name, age, interests, and other preferences. Our advanced technology will craft a unique story featuring characters and adventures tailored to what they love. Each story becomes a personal journey for your child."
  },
  {
    question: "Which languages will be supported?",
    answer: "At launch, we plan to support English, Spanish, French, and Hebrew, with more languages coming soon after. Our goal is to connect children with stories in their native language or help them learn new ones."
  },
  {
    question: "When will Dahling Dreams launch?",
    answer: "We're working hard to perfect the Dahling Dreams experience. Sign up on our homepage to be notified about our launch date and to receive exclusive early access."
  },
  {
    question: "How much will Dahling Dreams cost?",
    answer: "We're still finalizing our pricing plans. We aim to offer both free stories and premium options with enhanced features. Sign up for updates to be the first to know about our special launch offers."
  },
  {
    question: "Is Dahling Dreams appropriate for all ages?",
    answer: "Yes! Stories will be age-appropriate, with options suitable for toddlers, preschoolers, and elementary-age children. Parents can select the appropriate age range when creating stories."
  },
  {
    question: "How does Dahling Dreams help with childhood development?",
    answer: "Our stories encourage imagination, build language skills, and strengthen the parent-child bond. When children see themselves in stories, it boosts their confidence and inspires a lifelong love of reading."
  },
  {
    question: "Will there be new content regularly?",
    answer: "Absolutely! We plan to add new themes, characters, and story patterns regularly, ensuring fresh experiences for your child every time."
  },
  {
    question: "How can I provide feedback or get support?",
    answer: "We value your input! Once launched, we'll have a dedicated support section and community forum. For now, please contact us at contact@dahlingdreams.com with any questions."
  }
];

// FAQItem component (simple version without state, can be expanded later)
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden transition-all">
      <button
        className="flex justify-between items-center w-full px-6 py-4 text-left bg-black/30 hover:bg-black/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
}


function FAQPage() {
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

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="heading-gradient">Frequently Asked Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about the upcoming Dahling Dreams app
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-gray-300 mb-6">
                We're here to help. Reach out and we'll get back to you as soon as possible.
              </p>
              <a href="mailto:contact@dahlingdreams.com" className="button inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Contact Us
              </a>
            </div>
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
      {/* Removed SupportChatModal instance from here if it was ever present */}
    </div>
  );
}

export default FAQPage;
