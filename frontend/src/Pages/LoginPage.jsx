import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm border border-gray-300">
        <h1 className="text-2xl font-bold mb-6 text-center">Login Page</h1>
        <form action="" className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter your email id"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>
       
          <Link to="/register" className="text-blue-500 hover:underline">
              Create account
       
          </Link>
        
      </div>
    </div>
  );
}
