import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    const userId = data?.user?.id || data?.session?.user?.id;

    if (userId) {
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: userId,
          role: "user",
          email: email,
        },
      ]);

      if (profileError) {
        setError(profileError.message);
        return;
      }

      setSuccess("Account created! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setError("User ID not found. Please try again.");
    }
  }; // ← YOU MISSED THIS CLOSING BRACKET

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/main.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
      <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-96 border border-white border-opacity-30">
        <h2 className="text-3xl font-extrabold text-white text-center mb-6 drop-shadow-md">
          Create an Account
        </h2>

        {error && <p className="text-red-400 text-center">{error}</p>}
        {success && <p className="text-green-400 text-center">{success}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-white bg-opacity-30 text-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 bg-white bg-opacity-30 text-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-80 transition-all shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-white font-semibold underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
