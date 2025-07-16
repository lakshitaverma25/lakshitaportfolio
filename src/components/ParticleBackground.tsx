import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

interface ParticleBackgroundProps {
  type: 'fire' | 'particles' | 'thunderstorm' | 'fireflies';
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ type }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const getParticleConfig = () => {
    switch (type) {
      case 'fire':
        return {
          particles: {
            number: { value: 100 },
            color: { value: ['#ff4444', '#ff8800', '#ffaa00'] },
            shape: { type: 'circle' },
            opacity: { value: 0.7, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 2,
              direction: 'top',
              random: true,
              straight: false,
              outModes: { default: 'out' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
            },
          },
        };
      
      case 'particles':
        return {
          particles: {
            number: { value: 80 },
            color: { value: '#06b6d4' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            links: {
              enable: true,
              distance: 150,
              color: '#06b6d4',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              outModes: { default: 'bounce' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' },
              onClick: { enable: true, mode: 'push' },
            },
          },
        };
      
      case 'thunderstorm':
        return {
          particles: {
            number: { value: 200 },
            color: { value: ['#8b5cf6', '#06b6d4', '#ffffff'] },
            shape: { type: 'circle' },
            opacity: { value: 0.6, random: true },
            size: { value: 2, random: true },
            move: {
              enable: true,
              speed: 4,
              direction: 'bottom',
              random: true,
              straight: false,
              outModes: { default: 'out' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'bubble' },
            },
          },
        };
      
      case 'fireflies':
        return {
          particles: {
            number: { value: 50 },
            color: { value: ['#fbbf24', '#f59e0b', '#06b6d4'] },
            shape: { type: 'circle' },
            opacity: { value: 0.8, random: true },
            size: { value: 4, random: true },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'bounce' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'attract' },
            },
          },
        };
      
      default:
        return {};
    }
  };

  return (
    <Particles
      id={`particles-${type}`}
      init={particlesInit}
      options={getParticleConfig()}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticleBackground;