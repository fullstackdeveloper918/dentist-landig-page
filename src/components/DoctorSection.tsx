import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
const DoctorSection = () => {
  return (
    <div
      className="relative flex flex-col items-left p-4 rounded-2xl  w-fit mt-16"
      id="banner-shape"
    >
      {/* Profile Images */}
      <div className="flex -space-x-3">
        <Image
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Doctor 1"
          className="w-10 h-10 rounded-full border-2 border-white"
          width={100}
          height={100}
        />
        <Image
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Doctor 2"
          className="w-10 h-10 rounded-full border-2 border-white"
          width={100}
          height={100}
        />
        <Image
          src="https://randomuser.me/api/portraits/men/50.jpg"
          alt="Doctor 3"
          className="w-10 h-10 rounded-full border-2 border-white"
          width={100}
          height={100}
        />
      </div>

      {/* Text Content */}
      <div className="ml-0 mb-4  mt-8 w-[75%]">
        <p className="text-gray-700">
          More than <span className="font-bold text-blue-600">2k Doctors</span>{" "}
          in your door
        </p>
      </div>

      {/* Arrow Button */}
      <button className="ml-4 absolute  right-[1%] top-[10%]  bg-white text-white p-2 rounded-full shadow-md hover:bg-blue-700">
        <ArrowUpRight size={30} color="black" />
      </button>
    </div>
  );
};

export default DoctorSection;
