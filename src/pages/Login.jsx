import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from '../supabaseClient';




export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/main.jpg')", // Change this to your image path
      }}
    >
      {/* Overlay for Blur Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

      {/* Login Form */}
      <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-96 border border-white border-opacity-30">
        <h2 className="text-3xl font-extrabold text-white text-center mb-6 drop-shadow-md">Welcome Back</h2>
        {error && <p className="text-red-400 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-white bg-opacity-30 text-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-white bg-opacity-30 text-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-80 transition-all shadow-md"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-white font-semibold underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
