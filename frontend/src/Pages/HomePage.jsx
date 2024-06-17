import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/getPost');
        console.log(response.data);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      {/* Add Post Button */}
      <div className="flex justify-center">
        <Link
          to="/addPost"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-4"
        >
          Add Post
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {post.map((tip, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-bold mt-2">{tip.title}</h2>
              <p className="text-gray-700 mt-1">{tip.description}</p>

              <div className="mt-4 border-t pt-4">
                <h3 className="text-lg font-semibold mb-2">Comments:</h3>
                {tip.Comments.map((comment, commentIndex) => (
                  <div key={commentIndex} className="flex items-center mb-2">
                    <p className="text-gray-700">{comment.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
