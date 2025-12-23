import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/auth.api.js"

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authApi.logoutUser();
    navigate("/login");
  };

  return (
    <div className="w-64 bg-black text-white min-h-screen border-r px-6 py-8">
      <h1 className="text-2xl font-bold mb-10">FitTrack</h1>

      <nav className="space-y-4">
        <Link to="/dashboard" className="block border px-3 py-2 rounded-md hover:px-4 transition-all duration-200">
          Dashboard
        </Link>
        <Link to="/add-log" className="block border px-3 py-2 rounded-md hover:px-4 transition-all duration-200">
          Add Log
        </Link>
        <Link to="/profile" className="block border px-3 py-2 rounded-md hover:px-4 transition-all duration-200">
          Profile
        </Link>
        <Link to="/logs" className="block border px-3 py-2 rounded-md hover:px-4 transition-all duration-200">
          Logs
        </Link>
        <button className="block border px-3 py-2 rounded-md hover:px-4 transition-all duration-200" onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Sidebar;
