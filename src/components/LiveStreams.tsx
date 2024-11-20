import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Heart } from 'lucide-react';

const streams = [
  {
    id: 1,
    streamer: "ProGamer123",
    game: "Cyber Legends",
    viewers: "15.2K",
    thumbnail: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    streamer: "GameMaster",
    game: "Space Warriors",
    viewers: "8.7K",
    thumbnail: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80"
  }
];

export default function LiveStreams() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Live Now
            </h2>
            <p className="text-gray-400">
              Watch top streamers and join the action
            </p>
          </div>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Browse All
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {streams.map((stream) => (
            <motion.div
              key={stream.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={stream.thumbnail}
                  alt={stream.game}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white text-sm font-medium">LIVE</span>
                </div>
                <button className="absolute inset-0 m-auto w-16 h-16 flex items-center justify-center bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-8 h-8 text-white" fill="white" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{stream.streamer}</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">{stream.viewers}</span>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-400">{stream.game}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}