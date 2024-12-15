import React from 'react';

function Characters() {
  const characters = [
    { name: 'Furina', image: '/images/furina.jpg', description: 'Archon of Fontaine', color: '#A6D1E6' },
    { name: 'Mavuika', image: '/images/mavuika.jpg', description: 'Archon of Natlan', color: '#F7A589' },
    { name: 'Raiden', image: '/images/raiden.jpg', description: 'Archon of Inazuma', color: '#A29BFE' },
    { name: 'Chasca', image: '/images/chasca.jpg', description: 'Character of Natlan', color: '#F7A589' },
    { name: 'Kinich', image: '/images/kinich.jpg', description: 'A Saurian Hunter from the Scions of the Canopy with the Ancient Name Malipo', color: '#A6D1E6' },
    { name: 'Mualani', image: '/images/mualani.jpg', description: 'Character of Natlan', color: '#A29BFE' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-400 via-pink-200 to-violet-400">
      <section className="text-center text-black">
        <h2 className="text-4xl font-extrabold mb-8">Meet the Characters</h2>
        <p className="text-lg mb-8">
          Discover the Characters of Teyvat and their unique stories
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {characters.map((char, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = char.color}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{char.name}</h3>
              <p className="text-gray-800">{char.description}</p>
            </li>
          ))}
        </ul>

        <section
          id="contact"
          className="py-16 bg-gradient-to-r from-green-900 via-black to-violet-700 text-white text-center mt-16 rounded-xl shadow-lg"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Are You Ready to Explore?</h2>
            <p className="text-lg mb-6">Embark on your journey across Teyvat and discover its hidden secrets</p>
            <a
              href="https://genshin.hoyoverse.com/"
              className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Adventure
            </a>

            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/play.png" alt="Play Store" className="w-16 h-16" />
              </a>
              <a
                href="https://www.playstation.com/en-us/games/genshin-impact/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/ps.png" alt="PS5" className="w-16 h-16" />
              </a>
              <a
                href="https://genshin.hoyoverse.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/genshin.png" alt="Genshin Website" className="w-16 h-16" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Characters;
