
import React from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';
import About from './components/About';
import Members from './components/Members';
import CodeLensPage from './components/CodeLens/CodeLensPage';

const App = () => {
  return (
    <div className="bg-black text-neutral-200 font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <section id="codelens" className="w-full">
          <CodeLensPage />
        </section>
        <Members />
        <Footer />
      </main>
    </div>
  );
};

export default App;