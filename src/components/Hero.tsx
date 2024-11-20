import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
          alt="Gaming Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center sm:text-left"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              Welcome to the Next Level
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                of Gaming
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Join millions of players worldwide. Experience the most immersive games,
              exclusive content, and a vibrant gaming community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all">
                <Play className="w-5 h-5" />
                Start Playing Now
              </button>
              <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold backdrop-blur-sm hover:bg-white/20 transition-all">
                Browse Games
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}