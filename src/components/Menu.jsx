import React from 'react';

function Menu() {
  return (
    <section id="menu" className="py-16 bg-gradient-to-r from-blue-400 via-pink-200 to-violet-400 text-center">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-6xl font-extrabold text-transparent bg-clip-text mb-20"
          style={{
            WebkitTextStroke: '2px white',
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #4c6ef5, #ec4899, #f59e0b)',
          }}
        >
          TEYVAT
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          
          <RegionCard
            image="/images/sumeru.jpg"
            title="Sumeru"
            description="Sumeru is one of the seven regions of Teyvat. It is the nation that worships Lesser Lord Kusanali, the Dendro Archon and God of Wisdom."
          />
          <RegionCard
            image="/images/fontaine.jpg"
            title="Fontaine"
            description="Fontaine is one of the seven regions of Teyvat. It is the nation that worships Focalors, the Hydro Archon and God of Justice."
          />
          <RegionCard
            image="/images/liyue.jpg"
            title="Liyue"
            description="Liyue (Chinese: 璃月 Líyuè) is one of the seven regions of Teyvat. It is the nation that worships Rex Lapis, the Geo Archon and God of Contracts."
          />
          <RegionCard
            image="/images/inazuma.jpg"
            title="Inazuma"
            description="Inazuma (Japanese: 稲妻 Inazuma) is an archipelagic region that worships Raiden Shogun, the Electro Archon and God of Eternity."
          />
          <RegionCard
            image="/images/natlan.jpg"
            title="Natlan"
            description="Natlan is the nation that worships Mavuika, the Pyro Archon and God of War."
          />
          <RegionCard
            image="/images/mon.jpg"
            title="Mondstadt"
            description="Mondstadt is the first region the Traveler explores in search of their lost sibling."
          />
        </div>
      </div>
    </section>
  );
}

function RegionCard({ image, title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default Menu;
