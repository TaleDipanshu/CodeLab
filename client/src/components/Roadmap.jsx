import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const [selectedPath, setSelectedPath] = useState('mern');

  const roadmaps = {
    mern: {
      title: "MERN Stack Development",
      description: "Master full-stack development with MongoDB, Express.js, React, and Node.js",
      steps: [
        {
          phase: "Frontend Fundamentals",
          topics: [
            "HTML5 & CSS3 Mastery",
            "JavaScript ES6+",
            "React.js Fundamentals",
            "State Management (Redux/Context)",
            "React Hooks & Custom Hooks",
            "Responsive Design & Tailwind CSS"
          ]
        },
        {
          phase: "Backend Development",
          topics: [
            "Node.js Basics",
            "Express.js Framework",
            "RESTful API Design",
            "MongoDB & Mongoose",
            "Authentication & Authorization",
            "API Security & Best Practices"
          ]
        },
        {
          phase: "Advanced Concepts",
          topics: [
            "Full Stack Integration",
            "Deployment & DevOps",
            "Performance Optimization",
            "Testing & Debugging",
            "Real-time Applications",
            "CI/CD Pipeline Setup"
          ]
        }
      ]
    },
    native: {
      title: "React Native Development",
      description: "Build native mobile applications for iOS and Android",
      steps: [
        {
          phase: "Mobile Fundamentals",
          topics: [
            "React Native Basics",
            "Mobile UI Components",
            "Navigation Systems",
            "State Management",
            "Native Device Features",
            "Responsive Design Patterns"
          ]
        },
        {
          phase: "Advanced Mobile",
          topics: [
            "Native Modules",
            "Performance Optimization",
            "Push Notifications",
            "Offline Storage",
            "App Store Deployment",
            "Cross-Platform Best Practices"
          ]
        },
        {
          phase: "Professional Features",
          topics: [
            "Authentication",
            "Maps & Location",
            "Camera & Media",
            "In-App Purchases",
            "Analytics Integration",
            "CI/CD for Mobile"
          ]
        }
      ]
    },
    dsa: {
      title: "Data Structures & Algorithms",
      description: "Master algorithmic problem solving and optimization",
      steps: [
        {
          phase: "Basic Concepts",
          topics: [
            "Arrays & Strings",
            "Linked Lists",
            "Stacks & Queues",
            "Hash Tables",
            "Basic Recursion",
            "Time & Space Complexity"
          ]
        },
        {
          phase: "Advanced Data Structures",
          topics: [
            "Trees & Binary Search",
            "Heaps & Priority Queues",
            "Graphs & Networks",
            "Advanced Hash Tables",
            "Trie & Suffix Arrays",
            "Segment Trees"
          ]
        },
        {
          phase: "Advanced Algorithms",
          topics: [
            "Dynamic Programming",
            "Greedy Algorithms",
            "Backtracking",
            "Advanced Graph Algorithms",
            "String Algorithms",
            "System Design Basics"
          ]
        }
      ]
    }
  };

  return (
    <section className="py-16 bg-[#2c2b3c]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Learning <span className="text-purple-500">Roadmaps</span></h2>
        
        {/* Path Selection */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.keys(roadmaps).map((path) => (
            <button
              key={path}
              onClick={() => setSelectedPath(path)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedPath === path
                  ? 'bg-purple-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {path.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Roadmap Content */}
        <motion.div
          key={selectedPath}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{roadmaps[selectedPath].title}</h3>
            <p className="text-gray-400">{roadmaps[selectedPath].description}</p>
          </div>

          <div className="space-y-8">
            {roadmaps[selectedPath].steps.map((step, stepIndex) => (
              <div key={stepIndex} className="bg-slate-800 rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-purple-400 mb-4">{step.phase}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {step.topics.map((topic, topicIndex) => (
                    <motion.div
                      key={topicIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: topicIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-8">
            <button className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition-colors duration-300">
              Start Learning
            </button>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;