import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CurrentlyLearning from './components/CurrentlyLearning';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CurrentlyLearning />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;