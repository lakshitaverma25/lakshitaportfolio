import React from 'react';
import { useState } from 'react';
import ShootingStarIntro from './components/ShootingStarIntro';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CurrentlyLearning from './components/CurrentlyLearning';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <ShootingStarIntro onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
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