import React from 'react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/10">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-muted-foreground mb-8">Full Stack Developer & UI/UX Designer</p>
        <button className="cosmic-button">Get Started</button>
      </div>
    </section>
  );
} 