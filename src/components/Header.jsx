import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://mpbugbslwfrmajrbgqol.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wYnVnYnNsd2ZybWFqcmJncW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0OTY3MjMsImV4cCI6MjA1NzA3MjcyM30.smkra27iJZSFHmUP0DO0RVv2c07IMWIBEyqXK1myFr4");

function Header() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();
        if (!error) setRole(profile?.role);
      }
    };
    checkUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <div className="flex items-center space-x-2">
          <img src="/images/paimon.png" alt="Genshin Logo" className="w-8 h-8" />
          <div className="text-2xl font-bold">Genshin Impact</div>
        </div>
        <div className="space-x-6 flex items-center">
          <Link to="/" className="hover:text-blue-400 font-bold">Home</Link>
          <Link to="/characters" className="hover:text-blue-400 font-bold">Characters</Link>
          <Link to="/teyvat" className="hover:text-blue-400 font-bold">Teyvat</Link>
          <Link to="/about" className="hover:text-blue-400 font-bold">About</Link>
          <Link to="/users" className="hover:text-blue-400 font-bold">Users</Link>

          {/* User Profile & Logout Button */}
          {user && (
            <div className="flex items-center space-x-4">
              {/* Profile Picture */}
              <div className="relative group">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <img
                    src={user?.user_metadata?.avatar_url || "/images/hc.jpg"}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <span className="text-sm font-bold">{user.email}</span>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700">
                    Profile
                  </Link>
                  {role === "admin" && (
                    <Link to="/admin-dashboard" className="block px-4 py-2 hover:bg-gray-700">
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-red-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
