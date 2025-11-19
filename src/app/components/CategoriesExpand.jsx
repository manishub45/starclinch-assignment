'use client';
import { useState } from 'react';

const categories = [
  { id: 1, title: "Singer", image: "/images/singer1.jpg" },
  { id: 2, title: "Dancer", image: "/images/singer2.jpg" },
  { id: 3, title: "Magician", image: "/images/singer3.jpg" },
  { id: 4, title: "Comedian", image: "/images/singer4.jpg" },
  { id: 5, title: "Photographer", image: "/images/singer5.jpg" }
];

export default function CategoriesExpand() {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? categories : categories.slice(0, 3);

  return (
    <section className="py-12 bg-[#080810] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Choose from {categories.length}+ Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {displayed.map(cat => (
            <div key={cat.id} className="bg-[#1a1a2a] rounded-lg overflow-hidden">
              <img src={cat.image} alt={cat.title} className="w-full h-32 object-cover" />
              <h3 className="text-lg font-semibold p-4">{cat.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          {!showAll && (
            <button
              className="px-6 py-2 bg-pink-500 rounded-full text-white font-semibold hover:bg-pink-600 transition"
              onClick={() => setShowAll(true)}
            >
              Explore All Categories →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
