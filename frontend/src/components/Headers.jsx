import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Headers() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  console.log(user);
  return (
    <div className="bg-black py-4">
      <div className="flex justify-between items-center px-4">
       <Link to='/' className="text-white text-3xl font-bold font-sans"> HealthyGlam </Link>
        {user ? (
          <Link
            to="/logout"
            className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-sans"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-sans"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
