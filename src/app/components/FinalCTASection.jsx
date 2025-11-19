// src/app/components/FinalCTASection.jsx
export default function FinalCTASection({
  title = "20+ Talented Folks",
  subtitle = "We’ve worked with talented folks across India and made events memorable.",
  buttonText = "View All",
  
  image = "/images/bg-cta.jpg"
}) {
  return (
    <section className="py-16 bg-[#080810] text-white relative overflow-hidden rounded-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="mb-8 text-lg md:text-xl">{subtitle}</p>
        <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity duration-300">
          {buttonText}
        </button>
      </div>

      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-pink-700 opacity-30 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-60 md:h-60 bg-purple-700 opacity-30 rounded-full -ml-20 -mb-20"></div>

      
      {/* <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-full" /> */}
    </section>
  );
}
