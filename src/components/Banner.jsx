import React from "react";

const Banner = () => {
  return (
    <div className="bannerSection">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Empowering your child with a love for learning in a nurturing environment.
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Discover a heaven for your little ones at Little Darlings. Our caring team ensures a safe, nurturing, and engaging environment, where personalized attention and the joy of learning come first! Our daily routine is filled with laughter, learning, and love. From circle time to outdoor play, every moment is an adventure! We strive to make our daycare feel like a second home for your child. Our caring team is devoted to offering a secure, nurturing, and engaging setting, encouraging exploration, play, and learning.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <img
              className="object-cover object-center rounded w-full" // Ensures full width
              alt="hero"
              src="banner.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
