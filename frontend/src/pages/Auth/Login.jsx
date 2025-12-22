import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data : ", formData);
        // Backend Api
    }

  return (
    <div className="min-h-screen flex ">
      <div className="w-[25%] h-full ">
        <form action="" onSubmit={handleSubmit} className="p-10">
            <h2  className="font-bold text-3xl pt-20">Log in to your account </h2>
            {
                <p className="font-semibold mb-10">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-600 ">
                    Sign Up
                    </Link>
                </p>
            }
            <label htmlFor="username" className="font-bold text-[13px]">Username</label>
            <input 
                type="text"
                name="username"
                onChange={handleChange}
                className="border flex flex-col px-3 py-2 mb-2 rounded-md w-60 "
                required
            />
            <label htmlFor="email" className="font-bold text-[13px]">Email Address</label>
            <input 
                type="email"
                name="email"
                onChange={handleChange}
                className="border flex flex-col px-3 py-2 mb-2 rounded-md w-60"
                required
            />
            <label htmlFor="password" className="font-bold text-[13px]">Password</label>
            <input 
                type="password"
                name="password"
                onChange={handleChange}
                className="border flex flex-col px-3 py-2 mb-2 rounded-md w-60"
                required
            />
            <button className="mt-10 border-2 cursor-pointer px-4 rounded-md py-1 font-semibold hover:border-none hover:bg-black hover:text-white transiiton-all duration-300">
                Login
            </button>

        </form>
      </div>
      <div className="w-[75%] ">
        <img src="fit-man.jpg" alt=""  className="object-fit h-full w-full"/>
      </div>
    </div>
  );
};

export default Login;