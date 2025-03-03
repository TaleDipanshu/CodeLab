import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ProSubscription = () => {
  const [showModal, setShowModal] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const features = [
    "Access to Advanced Projects",
    "Personal Mentor Support",
    "Priority Code Reviews",
    "Private Discord Community",
    "Custom Learning Path",
    "Certificate of Completion"
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setShowModal(true);
      // Simulating subscription process
      setTimeout(() => {
        setSubscribed(true);
      }, 2000);
    }
  };

  return (
    <section className="py-20 bg-[#2c2b3c]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative inline-block mb-12">
            <span className="absolute -top-3 -right-4 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full mt-5">Coming Soon</span>
            <h2 className="text-4xl font-bold text-white">Go <span className="text-yellow-400">PRO</span></h2>
            <p className="text-gray-400 mt-4 text-lg">Unlock premium features and accelerate your learning journey</p>
          </div>
          
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-purple-500/20">
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center text-gray-300"
                >
                  <svg className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email to join waitlist"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </motion.div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-800 p-8 rounded-lg max-w-md w-full mx-4 relative"
            >
              {!subscribed ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent mx-auto mb-4"></div>
                  <p className="text-white">Processing your request...</p>
                </div>
              ) : (
                <div className="text-center">
                  <button 
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  >
                    <FaTimes />
                  </button>
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300 mb-4">You've been added to our waitlist. We'll notify you when PRO features become available!</p>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProSubscription;