import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-green-900 via-black to-violet-700 text-white text-center">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">Are You Ready to Explore?</h3>
        <p className="text-lg mb-8">
          Embark on your journey across Teyvat and discover its hidden secrets.
        </p>
        <a
          href="/characters"
          className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
        >
          See Characters
        </a>
        <div className="mt-16 flex justify-center space-x-6">
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
  );
}

export default Contact;
