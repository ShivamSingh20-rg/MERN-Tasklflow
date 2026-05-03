import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    const { username, email, password } = formData;
   
  axios.post('https://backend-z73g.onrender.com/signup', {username: username,email: email,password: password})
  .then((res)=> {
    console.log('succesfully registerd', res.data)
    navigate("/login");
  }
  );

  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950 flex items-center justify-center p-4">
      {/* Main Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
        
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">Create Account</h2>
          <p className="text-purple-200/70 mt-2">Join our community today</p>
        </header>

        <form onSubmit={handleSubmit} className="grid gap-5">
          {/* Username Field */}
          <div className="grid gap-2">
            <label className="text-sm font-medium text-purple-100 ml-1">Username</label>
            <input
              type="text"
              name="username"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="johndoe"
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="grid gap-2">
            <label className="text-sm font-medium text-purple-100 ml-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="name@company.com"
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="grid gap-2">
            <label className="text-sm font-medium text-purple-100 ml-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="••••••••"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 rounded-xl shadow-lg transform transition-active:scale-95 duration-200"
          >
            Sign Up
          </button>
        </form>

        <footer className="mt-8 text-center">
          <p className="text-purple-200/60 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-white font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Signup;