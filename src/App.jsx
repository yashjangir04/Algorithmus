import React from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black text-neutral-200 font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Footer />
      </main>
    </div>
  );
};

export default App;