import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/auth.api.js";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    age: "",
    gender: "",
    height: ""
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await authApi.registerUser(formData);
      if (res.success) {
        navigate("/login");
      }
    } catch (err) {
        console.log(err.response?.data);
      console.log(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex  min-h-screen w-full">
      <div className="w-[35%] min-h-screen">
        <img src="fit-man.jpg" alt="" className="h-full w-full object-cover" />
      </div>

      <div>
        <form onSubmit={handleSubmit} className="pt-15 pl-5 flex flex-col">
          <h2 className="font-bold text-3xl">Create your account</h2>

          <p className="font-semibold mb-20">
            Already have account?{" "}
            <Link to="/login" className="text-blue-600">
              Log in now
            </Link>
          </p>

          <label className="font-bold text-[13px]">Name</label>
          <input type="text" name="name" onChange={handleChange} className="border px-3 py-2 mb-2 rounded-md w-60" required />

          <label className="font-bold text-[13px]">Username</label>
          <input type="text" name="username" onChange={handleChange} className="border px-3 py-2 mb-2 rounded-md w-60" required />

          <label className="font-bold text-[13px]">Email Address</label>
          <input type="email" name="email" onChange={handleChange} className="border px-3 py-2 mb-2 rounded-md w-60" required />
          <label className="font-bold text-[13px]">Password</label>
          <input type="password" name="password" onChange={handleChange} className="border px-3 py-2 mb-2 rounded-md w-60" required />

          <label className="font-bold text-[13px]">Age</label>
          <input type="number" name="age" onChange={handleChange} className="border px-3 py-2 mb-2 rounded-md w-60" required />

          <label className="font-bold text-[13px]">Gender</label>
          <input type="text" name="gender" onChange={handleChange} className="border px-3 py-2 mb-2 rounded-md w-60" required />

          <label className="font-bold text-[13px]">Height</label>
          <input type="number" name="height" onChange={handleChange} className="border px-3 py-2 mb-2 rounded-md w-60" required />

          <button className="mt-10 border-2 w-30 cursor-pointer px-4 rounded-md py-1 font-semibold hover:bg-black hover:text-white transition-all duration-300">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
