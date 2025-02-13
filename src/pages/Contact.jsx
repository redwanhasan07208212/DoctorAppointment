import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      {/* Header */}
      <div className="text-center text-3xl font-bold text-gray-700 uppercase pb-6">
        Contact <span className="text-blue-500">Us</span>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Our Office</h2>
          <p className="text-gray-500">
            123 Business Street, Dhaka, Bangladesh
          </p>
          <p className="text-gray-500">Phone: +880 1234 567 890</p>
          <p className="text-gray-500">Email: support@example.com</p>
          <p className="text-gray-500">Working Hours: Mon - Fri, 9 AM - 6 PM</p>

          {/* Contact Button */}
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 text-center pb-4">
          Send Us a Message
        </h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg p-3 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg p-3 w-full"
          />
          <textarea
            placeholder="Your Message"
            className="border rounded-lg p-3 w-full h-32"
          ></textarea>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
