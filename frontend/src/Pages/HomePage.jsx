const tips = [
  {
    title: "Stay Hydrated",
    description:
      "Drinking water is essential for maintaining good health. Make sure to drink at least 8 glasses of water a day.",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "Take Regular Breaks",
    description:
      "Taking short breaks during work can help you stay focused and productive.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Maintain a Balanced Diet",
    description:
      "Eating a variety of foods ensures you get all the necessary nutrients.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Exercise Regularly",
    description:
      "Regular physical activity can improve your muscle strength and boost your endurance.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Get Enough Sleep",
    description:
      "Aim for at least 7-8 hours of sleep each night to feel well-rested and alert.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Practice Mindfulness",
    description:
      "Mindfulness can help reduce stress and improve your overall well-being.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Stay Positive",
    description:
      "A positive mindset can improve your health and relationships.",
    image: "https://via.placeholder.com/150",
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
