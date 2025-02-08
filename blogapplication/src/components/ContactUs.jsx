import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactUs = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    // Show success toast and reset form state
    toast.success('Message sent successfully');
    setFormData({ name: '', email: '', message: '' }); // Clear form inputs
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full bg-gray-50 overflow-hidden"
      id="contact"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Contact{' '}
        <span className="underline underline-offset-4 decoration-blue-500 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">
        For any queries, feel free to contact us using the form below.
      </p>

      {/* Form */}
      <form
        className="max-w-2xl mx-auto text-gray-600 space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Name and Email */}
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-left mb-1 font-medium">Your Name:</label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name} // Controlled input
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-left mb-1 font-medium">Your Email:</label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email} // Controlled input
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-left mb-1 font-medium">Message:</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg py-3 px-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="message"
            placeholder="Your message"
            value={formData.message} // Controlled textarea
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white font-medium py-3 px-12 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
