import { assets } from "../assets/assets";
import "../css/Header.css";
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden">
      {/* Left side content */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Find Your Doctor Here
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img
            className="w-28"
            src={assets.group_profiles}
            alt="Group of profiles"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          aria-label="Book Appointments"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm mt-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Book Appointments{" "}
          <img className="w-3" src={assets.arrow_icon} alt="Arrow icon" />
        </a>
      </div>

      {/* Right side content */}
      <div className="md:w-1/2 relative flex items-center justify-center md:justify-end">
        <img
          className="w-full md:max-w-none md:absolute bottom-0  rounded-lg transform md:translate-x-10 lg:translate-x-20 animate-float"
          src={assets.header_img}
          alt="Doctor illustration"
        />
      </div>
    </div>
  );
};

export default Header;
