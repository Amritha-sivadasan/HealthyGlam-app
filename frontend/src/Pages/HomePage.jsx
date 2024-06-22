import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [post, setPost] = useState([]);
  const [activeInput, setActiveInput] = useState(null); // Track active input index
  const [commentText, setCommentText] = useState("");
  const [userId, setUserId] = useState("");
  const [change, setChange] = useState(false);

  // State variable to track comment text for each post
  const [commentInputs, setCommentInputs] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/getPost");
        console.log(response.data);
        setPost(response.data);
        let userdetail = JSON.parse(localStorage.getItem("user"));

        setUserId(userdetail._id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [change]);

  const handleSaveComment = (postId) => {
    axios
      .post("/api/comment", {
        postId: postId,
        comment: commentInputs[postId], // Use commentInputs state for the specific postId
        userId: userId,
      })
      .then((response) => {
        console.log("Comment saved:", response.data);
        setChange((prev) => !prev);
        setActiveInput(null); // Reset active input after saving comment
        setCommentInputs({ ...commentInputs, [postId]: "" }); // Clear input text for the saved post
      })
      .catch((error) => {
        console.error("Error saving comment:", error);
      });
  };

  const handleCommentInputChange = (postId, value) => {
    setCommentInputs({ ...commentInputs, [postId]: value }); 
  };

  return (
    <div className="bg-white min-h-screen p-4">
      {/* Add Post Button */}
      <div className="flex justify-center">
        <Link
          to="/addPost"
          className="bg-black hover:bg-gray-900 text-white py-2 px-4 rounded-md font-sans mb-3"
        >
          Add Post
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {post.map((tip, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded text-white shadow-md"
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-bold mt-2">{tip.title}</h2>
              <p className="text-white mt-1">{tip.description}</p>

              <div className="mt-4 border-t pt-4 max-h-60 overflow-y-auto">
                {/* Separate div for comments with scrollable overflow */}
                <div>
                  {tip.comment.map((comment, commentIndex) => (
                    <div
                      key={commentIndex}
                      className="bg-blue-300 text-black p-2 rounded-md mb-2"
                    >
                      <p>{comment}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <input
                  type="text"
                  placeholder="Enter your comment..."
                  value={commentInputs[tip.postId] || ""}
                  onChange={(e) => handleCommentInputChange(tip.postId, e.target.value)}
                  className="w-full border rounded p-2 bg-white text-black"
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
                  onClick={() => {
                    handleSaveComment(tip.postId);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
