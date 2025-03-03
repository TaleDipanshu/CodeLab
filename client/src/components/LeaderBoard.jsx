import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCode, FaFire } from 'react-icons/fa';

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState('weekly');

  const leaderboardData = {
    weekly: [
      { rank: 1, name: "Alex Chen", points: 2800, projects: 15, streak: 7, avatar: "https://i.pravatar.cc/150?img=11" },
      { rank: 2, name: "Sarah Smith", points: 2650, projects: 12, streak: 5, avatar: "https://i.pravatar.cc/150?img=5" },
      { rank: 3, name: "Mike Johnson", points: 2400, projects: 10, streak: 4, avatar: "https://i.pravatar.cc/150?img=8" },
      { rank: 4, name: "Emma Davis", points: 2200, projects: 9, streak: 3, avatar: "https://i.pravatar.cc/150?img=9" },
      { rank: 5, name: "James Wilson", points: 2100, projects: 8, streak: 6, avatar: "https://i.pravatar.cc/150?img=12" }
    ],
    monthly: [
      { rank: 1, name: "David Lee", points: 10500, projects: 45, streak: 30, avatar: "https://i.pravatar.cc/150?img=7" },
      { rank: 2, name: "Alex Chen", points: 9800, projects: 42, streak: 28, avatar: "https://i.pravatar.cc/150?img=11" },
      { rank: 3, name: "Lisa Wang", points: 9200, projects: 38, streak: 25, avatar: "https://i.pravatar.cc/150?img=3" },
      { rank: 4, name: "Sarah Smith", points: 8900, projects: 36, streak: 22, avatar: "https://i.pravatar.cc/150?img=5" },
      { rank: 5, name: "Tom Brown", points: 8500, projects: 34, streak: 20, avatar: "https://i.pravatar.cc/150?img=15" }
    ]
  };

  const getRankStyle = (rank) => {
    switch(rank) {
      case 1: return "bg-yellow-400 text-black";
      case 2: return "bg-gray-300 text-black";
      case 3: return "bg-amber-600 text-white";
      default: return "bg-slate-700 text-white";
    }
  };

  return (
    <section className="py-16 bg-[#2c2b3c]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Top <span className="text-purple-500">Performers</span>
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Recognizing our most active and accomplished developers
          </p>

          {/* Time Filter */}
          <div className="flex justify-center space-x-4 mb-8">
            {['weekly', 'monthly'].map((filter) => (
              <button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  timeFilter === filter
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Leaderboard Table */}
          <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-700">
                    <th className="px-6 py-4 text-left text-gray-300">Rank</th>
                    <th className="px-6 py-4 text-left text-gray-300">Developer</th>
                    <th className="px-6 py-4 text-center text-gray-300">Points</th>
                    <th className="px-6 py-4 text-center text-gray-300">Projects</th>
                    <th className="px-6 py-4 text-center text-gray-300">Streak</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData[timeFilter].map((user, index) => (
                    <motion.tr
                      key={user.rank}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${getRankStyle(user.rank)}`}>
                          {user.rank}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                          <span className="text-white font-medium">{user.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <FaTrophy className="text-yellow-400" />
                          <span className="text-white">{user.points.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <FaCode className="text-purple-400" />
                          <span className="text-white">{user.projects}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <FaFire className="text-orange-500" />
                          <span className="text-white">{user.streak} days</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;