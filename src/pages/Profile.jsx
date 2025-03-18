import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, role, supabase } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (role) {
      fetchUsers();
    }
  }, [role, supabase]);

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("profiles").select("id, email, role");
    if (error) {
      console.error("Error fetching users:", error.message);
    } else {
      setUsers(data);
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(images/teyvat-landscape.jpg)' }}>
      <div className="p-6 max-w-5xl mx-auto bg-white bg-opacity-60 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Your Profile</h2>

        <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-6 mb-8 border border-gray-200">
          <p className="text-lg mb-2"><strong>Email:</strong> {user?.email}</p>
          <p className="text-lg"><strong>Role:</strong> {role}</p>
        </div>

        {role === "admin" && (
          <div className="bg-white bg-opacity-90 shadow-lg border border-gray-200 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 text-center">Registered Users</h3>
            {loading ? (
              <p className="text-gray-600 text-center">Loading users...</p>
            ) : users.length === 0 ? (
              <p className="text-gray-500 text-center">No users found.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-blue-100 text-left">
                      <th className="px-4 py-2 border-b text-sm font-bold text-gray-700">User ID</th>
                      <th className="px-4 py-2 border-b text-sm font-bold text-gray-700">Email</th>
                      <th className="px-4 py-2 border-b text-sm font-bold text-gray-700">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u, index) => (
                      <tr key={u.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-4 py-2 border-b text-sm text-gray-800">{u.id}</td>
                        <td className="px-4 py-2 border-b text-sm text-gray-800">{u.email}</td>
                        <td className="px-4 py-2 border-b text-sm text-gray-800">{u.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <button onClick={fetchUsers} className="mt-4 bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition">
              Reload Users
            </button>
          </div>
        )}
      </div>
    </div>
  );
}