import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Headers() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  console.log(user);
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-400 py-4">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-white text-3xl font-bold">HealthyGlam</h1>
        {user ? (
         <Link
         to="/logout"
         className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
       >
        Logout
       </Link>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
