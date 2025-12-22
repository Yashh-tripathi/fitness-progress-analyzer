import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/auth.api.js";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await authApi.loginUser(formData);

      if (res.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex ">
      <div className="w-[25%] h-full ">
        <form onSubmit={handleSubmit} className="p-10">
          <h2 className="font-bold text-3xl pt-20">Log in to your account</h2>

          <p className="font-semibold mb-10">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600">
              Sign Up
            </Link>
          </p>

          <label className="font-bold text-[13px]">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            className="border px-3 py-2 mb-2 rounded-md w-60 flex "
            required
          />

          <label className="font-bold text-[13px]"> Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="border px-3 py-2 mb-2 rounded-md w-60"
            required
          />

          <label className="font-bold text-[13px]">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="border px-3 py-2 mb-2 rounded-md w-60"
            required
          />

          <button className="mt-10 border-2 cursor-pointer px-4 rounded-md py-1 font-semibold hover:bg-black hover:text-white transition-all duration-300">
            Login
          </button>
        </form>
      </div>

      <div className="w-[75%]">
        <img src="fit-man.jpg" alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
