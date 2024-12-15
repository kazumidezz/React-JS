import React from 'react';

function Teyvat() {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-pink-200 to-violet-400">
      <section className="py-16 text-center text-black">
        <h2 className="text-5xl font-extrabold mb-6">Welcome to Teyvat</h2>
        <p className="text-lg mb-8">
          Explore the world of Teyvat, where seven regions await your discovery.
        </p>

        {/* Add an image of Teyvat or a beautiful landscape */}
        <img
          src="/images/teyvat-landscape.jpg"
          alt="Teyvat Landscape"
          className="w-full h-64 object-cover rounded-xl shadow-lg mb-8"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Region 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Mondstadt</h3>
            <p className="text-gray-700">
              The city of freedom, known for its windmills and lively culture.
            </p>
          </div>

          {/* Region 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Liyue</h3>
            <p className="text-gray-700">
              A city of rich history and culture, nestled between mountains and seas.
            </p>
          </div>

          {/* Region 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Inazuma</h3>
            <p className="text-gray-700">
              A nation ruled by the Electro Archon, known for its strict policies and beautiful scenery.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 py-8 bg-gradient-to-r from-green-800 via-violet-500 to-black text-white rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Are You Ready to Explore?</h3>
          <p className="text-lg mb-8">
            Embark on your journey across Teyvat and discover its hidden secrets.
          </p>
          <a
            href="/characters"
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

      
    </div>
  );
}

export default Teyvat;

