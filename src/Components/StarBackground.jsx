import React from 'react';

export function StarBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Stars will be added here */}
      </div>
    </div>
  );
} 