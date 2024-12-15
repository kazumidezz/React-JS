import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/users");
      const data = await response.json();
      setUsers(data);
    };
    
    fetchUsers();
  }, []);

  return (
    <section
      id="users"
      className="py-16 bg-gradient-to-r from-blue-400 via-pink-200 to-violet-400 text-center"
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text"
          style={{
            WebkitTextStroke: '1px white', 
            color: 'transparent', 
            backgroundImage: 'linear-gradient(to right, #4c6ef5, #ec4899, #f59e0b)', 
          }}
        >
          Our Users
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {users.map((user) => {
            return (
              <div key={user.id} className="bg-white p-4 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center items-center bg-gray-200 p-4 rounded-full">
                  <img
                    src={user.avatar ? user.avatar : 'https://via.placeholder.com/150'}
                    alt={user.name}
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                  <p className="text-gray-600 text-sm">{user.phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Users;
