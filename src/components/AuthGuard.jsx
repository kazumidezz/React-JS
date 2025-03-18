import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import supabase from '../supabaseClient';


export default function AuthGuard({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }
    checkUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg font-semibold">Checking authentication...</p>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
}
