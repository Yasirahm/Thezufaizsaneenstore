import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    rating: "5", // Default rating
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Google Form POST URL (Extract from form)
  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLScIatpZmBoiBGtJtsJLI6tLc7kO4kiKyTdyup2XvRa19W14cQ/formResponse";

  // Entry IDs from Google Form
  const formEntries = {
    name: "entry.365905075",
    email: "entry.2068531061",
    phone: "entry.1372752736",
    message: "entry.289773100",
    rating: "entry.184314832",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append(formEntries.name, formData.name);
    formDataToSend.append(formEntries.email, formData.email);
    formDataToSend.append(formEntries.phone, formData.phone);
    formDataToSend.append(formEntries.message, formData.message);
    formDataToSend.append(formEntries.rating, formData.rating);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors", // Required for Google Forms submission
      });

      alert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "", rating: "5" });
    } catch (error) {
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    
    <div className="bg-purple-900">
      <div className="bg-purple-900 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl bg-purple-900  w-full p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl bg-purple-900 font-bold text-gray-900 text-center mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-200 bg-purple-900 text-center mb-6">
            Have questions or custom requests? Fill out the form below, and we’ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-200 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Phone Number"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-200 font-semibold">Rating</label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="5">⭐️⭐️⭐️⭐️⭐️ (Excellent)</option>
                <option value="4">⭐️⭐️⭐️⭐️ (Good)</option>
                <option value="3">⭐️⭐️⭐️ (Average)</option>
                <option value="2">⭐️⭐️ (Poor)</option>
                <option value="1">⭐️ (Very Bad)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
          

          <div className="mt-8 text-center text-gray-300">
            <p>📍 <strong>Address:</strong> LalBazaar Srinagar</p>
            <p>📞 <strong>Phone:</strong> Request a callback we will call you</p>
            <p>📧 <strong>Email:</strong> zufaizsaneen@gmail.com</p>
            <p>🕒 <strong>Working Hours:</strong> Everyday, 9 AM - 5 PM</p>
         
          </div>
        </div>
        
      </div>
     
      <section id="contact" className="p-6 bg-purple-900 sm:p-10">
        <h2 className="text-xl sm:text-2xl text-center bg-purple-500 p-3 font-bold">Order Now</h2>
        <p className="text-sm font-bold text-center sm:text-base">Order through our Instagram page:</p>
        <a
          href="https://www.instagram.com/the_zufaiz_saneen_store"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 text-3xl font-bold justify-center flex hover:text-red-700"
        >
          <FaInstagram />
        </a>
      </section>
    </div>
  );
};

export default Contact;
