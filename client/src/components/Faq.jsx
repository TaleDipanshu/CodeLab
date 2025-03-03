import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b  border-gray-700">
      <button
        className="w-full py-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg text-white">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="p-4 text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      question: "What is Code-lab?",
      answer: "Code-lab is a platform designed to help developers improve their coding skills through practical projects, challenges, and interactive learning experiences."
    },
    {
      question: "How do I get started?",
      answer: "Simply create an account, choose your preferred coding mode, and start working on projects. You can track your progress and earn achievements as you complete challenges."
    },
    {
      question: "What programming languages are supported?",
      answer: "We support a wide range of popular programming languages including JavaScript, HTML & CSS. New languages are regularly added based on community demand."
    },
    {
      question: "Is Code-lab suitable for beginners?",
      answer: "Yes! We have projects and challenges for all skill levels, from complete beginners to advanced developers. Our roadmap helps guide you through your learning journey."
    },
    {
      question: "What's included in the PRO version?",
      answer: "PRO members get access to advanced projects, personalized learning paths, code reviews, mentorship opportunities, and exclusive community events."
    }
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;