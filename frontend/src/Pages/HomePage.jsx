const tips = [
  {
    title: "Stay Hydrated",
    description:
      "Drinking water is essential for maintaining good health. Make sure to drink at least 8 glasses of water a day.",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
 
];

export default function HomePage() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md w-full max-w-xs"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{tip.title}</h2>
            <p className="text-gray-700 mt-1">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
