import React from 'react';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-2">⚛️</div>
            <h3 className="font-semibold">React</h3>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="font-semibold">Tailwind CSS</h3>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="font-semibold">Vite</h3>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📱</div>
            <h3 className="font-semibold">Responsive</h3>
          </div>
        </div>
      </div>
    </section>
  );
} 