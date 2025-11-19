// AlternateSection.jsx
export default function AlternateSection({ title, text, image, reverse }) {
  return (
    <section className="py-12 bg-[#080810] text-white">
      <div className={`max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 `}
           id={reverse ? "reverse" : undefined}>
        <div className="md:w-1/2">
          <img
  src={image}
  alt={title}
  className="w-full h-auto rounded-lg object-cover object-center transform hover:rotate-6 transition duration-300"
/>

        </div>
        <div className="md:w-1/2">
          {/* Text block now below image block on mobile; on desktop side-by-side */}
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  );
}
