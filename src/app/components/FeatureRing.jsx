// FeatureRing.jsx
export default function FeatureRing() {
  const features = [
    { id: 1, title: "Singer 1", icon: "/images/singer1.jpg" },
    { id: 2, title: "Singer 2", icon: "/images/singer2.jpg" },
    { id: 3, title: "Singer 3", icon: "/images/singer3.jpg" },
    { id: 4, title: "Singer 4", icon: "/images/singer4.jpg" },
    { id: 5, title: "Singer 5", icon: "/images/singer5.jpg" },
  ];

  return (
    <section className="py-12 bg-[#080810] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Featured Artists</h2>
        <p className="mb-10">
          Meet our top performers who bring life to every event.
        </p>
        <div className="relative flex justify-center items-center" style={{ height: 320 }}>
          {/* Central Icon/Image */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-500">
            <img
              src="/images/singer3.jpg"
              alt="Central Artist"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Surrounding icons */}
          {features.map((f, idx) => {
            const angle = (idx / features.length) * 360;
            return (
              <div
                key={f.id}
                className="absolute w-16 h-16 rounded-full overflow-hidden border-2 border-pink-300"
                style={{
                  transform: `rotate(${angle}deg) translate(0, -140px) rotate(-${angle}deg)`
                }}
              >
                <img
                  src={f.icon}
                  alt={f.title}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
