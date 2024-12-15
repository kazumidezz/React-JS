import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <div className="flex items-center space-x-2">
          <img src="/images/paimon.png" alt="Genshin Logo" className="w-8 h-8" />
          <div className="text-2xl font-bold">Genshin Impact</div>
        </div>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400 font-bold">Home</Link>
          <Link to="/characters" className="hover:text-blue-400 font-bold">Characters</Link>
          <Link to="/teyvat" className="hover:text-blue-400 font-bold">Teyvat</Link>
          <Link to="/about" className="hover:text-blue-400 font-bold">About</Link>  
          <Link to="/users" className="hover:text-blue-400 font-bold">Users</Link>  
        </div>
      </div>
    </nav>
  );
}

export default Header;
