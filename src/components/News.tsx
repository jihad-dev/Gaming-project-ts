import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, MessageCircle, Share2 } from 'lucide-react';

const news = [
  {
    id: 1,
    title: "Season 5 Battle Pass Revealed",
    excerpt: "Get ready for the most exciting season yet with exclusive rewards, new maps, and legendary skins.",
    date: "March 15, 2024",
    category: "Updates",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80",
    comments: 128,
    shares: 456
  },
  {
    id: 2,
    title: "World Championship Series Announced",
    excerpt: "Join the biggest gaming tournament of the year with a prize pool of $1 million.",
    date: "March 12, 2024",
    category: "Esports",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    comments: 256,
    shares: 789
  },
  {
    id: 3,
    title: "New Character Class: Shadow Mage",
    excerpt: "Master the arts of shadow magic with our newest character class, coming next week.",
    date: "March 10, 2024",
    category: "Game Updates",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80",
    comments: 342,
    shares: 567
  }
];

export default function News() {
  return (
    <section className="bg-black min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Latest News & Updates
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay informed about the latest game updates, tournaments, and community events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {news.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-xl overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                  <p className="text-gray-400 mb-6">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center text-gray-400">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {item.comments}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Share2 className="w-5 h-5 mr-2" />
                        {item.shares}
                      </div>
                    </div>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      Read More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}