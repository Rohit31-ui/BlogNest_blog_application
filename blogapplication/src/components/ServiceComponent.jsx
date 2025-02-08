import React from "react";

const services = [
  { title: "Content Creation", description: "We craft high-quality, engaging blog posts tailored to your audience." },
  { title: "SEO Optimization", description: "Improve your blog's visibility with expert SEO techniques." },
  { title: "Guest Blogging", description: "Collaborate with guest writers to expand your reach and audience." },
  { title: "Monetization Strategies", description: "Learn how to generate revenue through ads, sponsorships, and more." },
  { title: "Social Media Promotion", description: "Boost your blog’s traffic by leveraging social media marketing." },
];

const ServiceComponent = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">
        Our Blog Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6 rounded-2xl border border-gray-300 transform hover:-translate-y-2"
          >
            <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
            <p className="text-gray-700 mt-3 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComponent;
