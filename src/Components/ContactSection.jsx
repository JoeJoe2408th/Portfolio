import React from 'react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input type="text" className="w-full p-3 border border-border rounded-md bg-background" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-border rounded-md bg-background" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows="4" className="w-full p-3 border border-border rounded-md bg-background"></textarea>
            </div>
            <button type="submit" className="cosmic-button w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
} 