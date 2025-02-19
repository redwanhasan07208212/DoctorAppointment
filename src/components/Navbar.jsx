/* eslint-disable react/no-unknown-property */
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logOut = () => {
    setToken(false);
    localStorage.removeItem("token");
  };
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <svg
        onClick={() => navigate("/")}
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

        <path d="M30 10H40V20H50V30H40V40H30V30H20V20H30V10Z" fill="#5F6FFF" />
      </svg>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={userData.image} alt="" />
            <img className="w-2.5 " src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointment
                </p>
                <p onClick={logOut} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <div className="md:hidden w-6" onClick={() => setShowMenu(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <svg
              className="w-36"
              onClick={() => navigate("/")}
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
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets?.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded inline-block">All Doctors</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
