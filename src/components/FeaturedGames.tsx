import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Trophy } from 'lucide-react';

const games = [
  {
    id: 1,
    title: "Cyber Legends",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    rating: 4.8,
    players: "2M+",
    category: "Action RPG"
  },
  {
    id: 2,
    title: "Space Warriors",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
    rating: 4.6,
    players: "1.5M+",
    category: "Strategy"
  },
  {
    id: 3,
    title: "Fantasy Realm",
    image: "https://images.unsplash.com/photo-1536746803623-cef87080bfc8?auto=format&fit=crop&q=80",
    rating: 4.9,
    players: "3M+",
    category: "MMORPG"
  }
];

export default function FeaturedGames() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Games
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the most popular games in our collection, featuring stunning graphics
            and immersive gameplay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-400 mb-4">{game.category}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-white">{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-white">{game.players}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-pink-500" />
                    <span className="text-white">Ranked</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}