// CategoryGrid.jsx
import Card from "./Card";

const categories = [
  { id: 1, title: "Singer 1", image: "/images/singer1.jpg" },
  { id: 2, title: "Singer 2", image: "/images/singer2.jpg" },
  { id: 3, title: "Singer 3", image: "/images/singer3.jpg" },
  { id: 4, title: "Singer 4", image: "/images/singer4.jpg" },
  { id: 5, title: "Singer 5", image: "/images/singer5.jpg" },
  { id: 6, title: "Singer 6", image: "/images/singer6.jpg" },
  { id: 7, title: "Singer 7", image: "/images/singer7.jpg" },
  
];

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-[#080810] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Card key={cat.id} title={cat.title} image={cat.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
