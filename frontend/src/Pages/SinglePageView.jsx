export default function SinglePageView() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Title</h2>
        <img
          src="https://via.placeholder.com/600"
          alt=""
          className="w-full h-96 object-cover rounded-lg mb-4"
        />

        <p className="text-gray-700 mb-4">Description</p>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700"
          >
            Add Comment
          </label>
          <input
            type="text"
            id="comment"
            // value={comment}
            // onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your comment"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            // onClick={handleAddComment}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
        <div className="scrollable-div  border overflow-y-auto max-h-40 ">
          <h3 className="text-xl font-bold mb-2">Comments</h3>
          <ul className="">
            {/* {comments.map((comment, index) => (
              <li key={index} className="py-2">{comment}</li>
            ))} */}
            <li className="mb-2">ufsuygfs</li>
            <li>ufsuygfs</li>
            <li>ufsuygfs</li>
            <li>ufsuygfs</li>
            <li>ufsuygfs</li>
            <li>ufsuygfs</li>
            <li>ufsuygfs</li>
            <li>ufsuygfs</li>
            <li>ufsuygfs</li>
            <li>ufsuygfs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
