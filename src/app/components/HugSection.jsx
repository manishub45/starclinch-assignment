// src/app/components/HugSection.jsx
export default function HugSection({ image = "/images/singer4.jpg", title = "Recent shows made star-studded by StarClinch", text = "Here’s a look at our latest performance & event snapshots that made headlines." }) {
  return (
    <section className="py-12 bg-[#080810] text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        
        {/* Image part */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Text + arrows part */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-start text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
          <p className="mb-6 text-lg">{text}</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="px-4 py-2 border border-white rounded hover:bg-white/10">‹</button>
            <button className="px-4 py-2 border border-white rounded hover:bg-white/10">›</button>
          </div>
        </div>

      </div>
    </section>
  );
}
