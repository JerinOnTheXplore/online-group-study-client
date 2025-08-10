import { useState } from "react";
import { FaQuestionCircle, FaPaperPlane } from "react-icons/fa";

const HelpSupport = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const faqs = [
    {
      question: "How can I register?",
      answer: "Go to Register > then follow the on-screen instructions."
    },
    {
      question: "Where can I view my attempted history?",
      answer: "Navigate to the 'My attempted assignment' section in your profile to see all past and upcoming bookings."
    },
    {
      question: "How do I contact support?",
      answer: "You can use the contact form below or email us directly at team@edumate.com."
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is frontend only)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen py-12 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12">
        <FaQuestionCircle className="text-emerald-500 text-5xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-emerald-700">Help & Support</h1>
        <p className="text-gray-600">Find answers to common questions or reach out to us directly.</p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto mb-16">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="mb-4 border border-emerald-300 rounded-lg shadow-sm open:shadow-md transition-all"
          >
            <summary className="cursor-pointer font-semibold text-emerald-700 py-3 px-4 bg-emerald-50 hover:bg-emerald-100">
              {faq.question}
            </summary>
            <p className="px-4 py-3 text-gray-700">{faq.answer}</p>
          </details>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto bg-emerald-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center gap-2">
          <FaPaperPlane className="text-emerald-500" /> Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpSupport;
