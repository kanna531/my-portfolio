// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#eef6ff] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let&apos;s Work Together
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Have a project, idea, or collaboration in mind? Send me a message
            and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact form */}
        <form
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-5"
          action="https://formspree.io/f/mgvglyvn" // 🔁 replace this
          method="POST"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/70"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/70"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-xs font-medium text-gray-600">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/70"
              placeholder="Project inquiry, collaboration, etc."
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-xs font-medium text-gray-600">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/70 resize-none"
              placeholder="Tell me a bit about what you need..."
            />
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-black text-white text-sm font-semibold transform transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
