import React from 'react';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card-hover p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Project 1</h3>
            <p className="text-muted-foreground">A beautiful web application built with React and Tailwind CSS.</p>
          </div>
          <div className="card-hover p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Project 2</h3>
            <p className="text-muted-foreground">Modern portfolio website with smooth animations.</p>
          </div>
          <div className="card-hover p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Project 3</h3>
            <p className="text-muted-foreground">Responsive design with excellent user experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 