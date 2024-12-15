import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-blue-400 via-pink-200 to-violet-400 text-center">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text"
          style={{
            WebkitTextStroke: '1px white', 
            color: 'transparent', 
            backgroundImage: 'linear-gradient(to right, #4c6ef5, #ec4899, #f59e0b)', 
          }}
        >
          About Us
        </h2>
        <p className="text-black text-lg mb-6">
          *Genshin Impact* takes place in the fantasy world of Teyvat, home to seven nations. Each region is distinct in its culture, lore, and adventures, offering players an ever-expanding world to explore.
        </p>

        <p className="text-black text-lg mb-6">
          The Traveler, the protagonist of the game, arrives in Teyvat in search of their lost sibling. The game begins in the city of Mondstadt, but the Traveler's journey takes them across all seven nations, uncovering the mysteries of each region and the fate of their sibling.
        </p>

        <p className="text-black text-lg">
          *Genshin Impact* features a vibrant open-world environment, stunning landscapes, and a dynamic combat system based on elemental reactions. With a growing cast of characters, each with their unique abilities and stories, players can form a party of characters to battle enemies and uncover the secrets of Teyvat.
        </p>
      </div>
    </section>
  );
}

export default About;
