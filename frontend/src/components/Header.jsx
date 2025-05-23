import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-4 sm:px-6 md:px-10 lg:px-20">
      {/* ------------Left Side---------------- */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4 py-6 sm:py-10 md:py-[10vw] md:mb-[-30px]">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight md:text-left">
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 text-white text-sm font-light text-center md:text-left">
          <img className="w-20 sm:w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          className="flex items-center gap-2 bg-white px-6 sm:px-8 py-3 rounded-full text-gray-600 text-sm mx-auto md:mx-0 hover:scale-105 transition-all duration-300"
          href="#speciality"
        >
          Book Appointment
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* ------------Right Side---------------- */}
      <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
        <img
          className="w-full h-auto rounded-lg"
          src={assets.header_img}
          alt="Header illustration"
        />
      </div>
    </div>
  );
};

export default Header;
