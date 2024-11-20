import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGames from './components/FeaturedGames';
import LiveStreams from './components/LiveStreams';
import Store from './components/Store';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedGames />
      <LiveStreams />
      <Store />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;