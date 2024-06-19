// src/components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6 py-12 flex flex-col justify-center items-center text-center h-full">
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
          Welcome to Writify

        </h1>
        <p className="text-base md:text-xl text-white mb-8">
          Explore the latest articles, news, and trends in our field.
        </p>
        <a
          href="#latest-posts"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 ease-in-out"
        >
          Read Latest Posts
        </a>
      </div>
    </div>
  );
};

export default Banner;
