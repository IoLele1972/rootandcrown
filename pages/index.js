import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center">
        <img
          src="/cover.jpg"
          alt="Root and Crown Cover"
          className="mx-auto mb-8 shadow-lg rounded-lg max-h-[80vh]"
        />
        <h1 className="text-4xl font-bold tracking-wide mb-4">Root and Crown</h1>
        <p className="text-lg md:text-xl text-gray-300">
          A young Salvadoran woman meets the head of a secretive global dynasty, revealing an intertwined ancestral past, and a potential shared destiny of redemption. From shadowy geopolitics to mystical rites, a hidden network arises—threatening to unravel the system from within.
        </p>
      </div>
    </main>
  );
}
