import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 md:mx-10 mt-20 rounded-lg">
      <div className="container mx-auto px-5 py-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-8">
          {/* Left Section */}
          <div>
            <div className="mb-5 w-40">
              <svg
                width="217"
                height="46"
                viewBox="0 0 217 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C10 22.2091 11.7909 24 14 24C16.2091 24 18 22.2091 18 20C18 17.7909 16.2091 16 14 16C11.7909 16 10 17.7909 10 20Z"
                  fill="#5F6FFF"
                />
                <path
                  d="M14 28C17.3137 28 20 25.3137 20 22V16H22V22C22 26.4183 18.4183 30 14 30C9.58172 30 6 26.4183 6 22V16H8V22C8 25.3137 10.6863 28 14 28Z"
                  fill="#5F6FFF"
                />
                <path
                  d="M30 10H40V20H50V30H40V40H30V30H20V20H30V10Z"
                  fill="#5F6FFF"
                />
              </svg>
            </div>
            <p className="text-gray-600 leading-6 text-sm md:text-base">
              We are committed to providing top-quality services with a focus on
              customer satisfaction. With years of experience, we strive to
              deliver excellence in everything we do.
            </p>
          </div>

          {/* Center Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
                Home
              </li>
              <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-600">
              <li>📞 +8801568283360</li>
              <li>📧 faiyad@gmail.com</li>
            </ul>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-400 transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700 transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-5 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} All Rights Reserved | YourCompany</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
