"use client";

import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center flex flex-col justify-center items-start p-8 h-screen w-full"
      style={{ backgroundImage: "url('/hero-img.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-lg w-full px-4 sm:px-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Lexend Deca' }}>
          Instant collaboration for remote teams
        </h1>
        <p className="text-base sm:text-lg mb-6 text-white" style={{ fontFamily: 'Lexend Deca' }}>
          All-in-one place for your remote team to chat, collaborate and track project progress.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Email"
            className="px-4 py-2 border rounded-md hero-input text-black placeholder-gray-400 w-full sm:w-auto"
            style={{ fontFamily: 'Lexend Deca' }}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center gap-2 hero-button w-full sm:w-auto"
            style={{ fontFamily: 'Lexend Deca', boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}
          >
            Get Early Access
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
