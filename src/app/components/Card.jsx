// Card.jsx
export default function Card({ title, image }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-transparent">   {/* bg-transparent instead of bg-white */}
      <img src={image} alt={title} className="w-full h-56 sm:h-48 md:h-56 object-cover object-center" />
      <div className="p-4 text-white">  {/* text-white so that title white color on dark background */}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}
