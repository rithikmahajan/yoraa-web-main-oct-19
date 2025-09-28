import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen  text-white py-14 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-bold mb-8 text-center text-black">
          Welcome to Yoraa
        </h1>
        <p className="text-lg text-gray-500 mb-8 text-center">
          Where boldness meets fashion. We are not just a clothing brand—we are a statement. Designed for those who refuse to blend in, our pieces are made to turn heads, challenge norms, and redefine confidence.
        </p>

        {/* Philosophy Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-black">
            Our Philosophy
          </h2>
          <p className="text-lg text-gray-500 mb-4">
            At Yoraa, we believe that fashion should be fearless. Our collections feature daring cuts, striking prints, and unconventional designs that empower you to own your individuality. Whether you’re stepping out or standing out, our clothing is crafted to amplify your presence.
          </p>
        </div>

        {/* Yoraa Identity Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-black">
            This is Yoraa
          </h2>
          <p className="text-lg text-gray-500 mb-4">
            This is more than just style. This is rebellion. This is attitude. This is Yoraa.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-10">
          <p className="text-2xl font-bold text-black">
            Dare to wear differently.
          </p>
        </div>

        {/* New Content Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-black">
            Yoraa – Bold Fashion, Redefined
          </h2>
          <p className="text-lg text-gray-500 mb-4">
            Designed for the modern, confident individual, our collections blend contemporary style with statement-making designs. Every piece is crafted with premium fabrics and precision.
          </p>
          <p className="text-lg text-gray-500 mb-4">
            Whether you’re embracing minimal elegance or pushing fashion boundaries, Yoraa ensures you stand out effortlessly. Step into a world where bold meets refined—where every outfit is more than just clothing, it’s an expression.
          </p>
          <p className="text-lg text-gray-500 mb-4">
            Discover the new era of style. Discover Yoraa.
          </p>
        </div>

        {/* Tagline Section */}
        <div className="text-center">
          <p className="text-2xl font-bold text-black">
            Bold in style, radiant outside/within ~ aura redefined.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;