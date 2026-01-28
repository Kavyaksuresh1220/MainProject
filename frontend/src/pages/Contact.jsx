import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="max-w-7xl mx-auto px-6 py-14 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or need support? We’re here to help you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

            <div className="space-y-4 text-gray-600">
              <p>📍 <strong>Address:</strong> UrbanEase HQ, Tech Park, India</p>
              <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
              <p>📧 <strong>Email:</strong> support@urbanease.com</p>
              <p>⏰ <strong>Support Hours:</strong> 9:00 AM – 8:00 PM</p>
            </div>

            <div className="mt-6">
              <p className="font-medium mb-2">Why contact us?</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Service-related queries</li>
                <li>Booking assistance</li>
                <li>Technical support</li>
                <li>Feedback & suggestions</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
