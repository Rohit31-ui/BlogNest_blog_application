import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        About Us
      </h1>
      <p className="text-lg text-gray-700 text-center">
        Welcome to our blog! We are passionate about sharing knowledge and
        insights through well-crafted articles. Our mission is to inspire,
        educate, and engage our audience with high-quality content.
      </p>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-blue-500 text-center">Our Vision</h2>
        <p className="text-gray-600">
          We aim to be a trusted source of information, helping readers stay
          updated and informed about various topics.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
