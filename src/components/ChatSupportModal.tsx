import React, { useState } from 'react';

interface ChatSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const supportTopics = [
  {
    question: "How can I get updates on the launch?",
    answer: "The best way to get updates on our launch is to sign up for email notifications on our homepage. We'll send you an email as soon as we're ready!"
  },
  {
    question: "What are the main features of Dahling Dreams?",
    answer: "Dahling Dreams will offer personalized, multilingual storybooks with beautiful illustrations and audio narration. You'll be able to create unique stories tailored to your child's interests and save them in your library."
  },
  {
    question: "Which languages will be supported?",
    answer: "We plan to launch with support for English, Spanish, French, and Hebrew. More languages will be added after launch!"
  },
  {
    question: "Is there a contact email for other inquiries?",
    answer: "Yes, for any other questions or inquiries, please feel free to email us directly at contact@dahlingdreams.com."
  }
];

function ChatSupportModal({ isOpen, onClose }: ChatSupportModalProps) {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#0e0e10] border border-gray-700 rounded-lg shadow-xl w-full max-w-md transform transition-all">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-primary">Dahling Dreams Support</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-700"
            aria-label="Close support chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Body - Questions List */}
        <div className="p-6 space-y-3 max-h-[70vh] overflow-y-auto">
          <p className="text-sm text-gray-400 mb-4">Hi there! How can we help you today? Please select a topic:</p>
          {supportTopics.map((topic) => (
            <div key={topic.question} className="mb-2">
              <button
                onClick={() => setActiveQuestion(activeQuestion === topic.question ? null : topic.question)}
                className="w-full text-left px-4 py-3 bg-gray-800/50 hover:bg-gray-700/70 rounded-md text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {topic.question}
              </button>
              {activeQuestion === topic.question && (
                <div className="p-4 mt-2 bg-gray-700/30 rounded-md text-gray-300 text-sm">
                  <p>{topic.answer}</p>
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 text-center text-xs text-gray-500">
            If your question isn't listed, please <a href="mailto:contact@dahlingdreams.com" className="text-primary hover:underline">email us</a>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatSupportModal;
