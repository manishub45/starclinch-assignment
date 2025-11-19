// src/app/components/Hero.jsx
'use client';

import { useState } from "react";

export default function Hero() {
  const images = [
    "/images/singer1.jpg",
    "/images/singer2.jpg",
    "/images/singer3.jpg"
  ];
  const [index, setIndex] = useState(0);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#080810] text-white px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Circle Image Container */}
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-pink-500">
          <img
            src={images[index]}
            alt="Hero image"
            className="object-cover object-top w-full h-full"
          />
        </div>

        {/* Text & Button */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-5xl font-bold">Singers</h1>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Choose <br /> from 100+ <br /> Categories
          </h2>
          <button
            onClick={() => setIndex((index + 1) % images.length)}
            className="text-pink-400 hover:underline text-lg"
          >
            Explore all categories →
          </button>
        </div>
      </div>
    </section>
  );
}
