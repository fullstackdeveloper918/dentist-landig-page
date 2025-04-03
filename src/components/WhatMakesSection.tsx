import Image from "next/image";
import React from "react";

const WhatMakesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Heading with fade-in effect */}
        <h2 className="text-2xl text-center md:text-5xl font-semibold mb-14 animate-fadeIn">
          What makes <span className="text-[#0F5AC3]">Fintu</span> different?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {/* Card 1 */}
          <div className="group flex flex-col items-center text-center p-6 border-t-[5px] border-[#0F5AC3] shadow-lg rounded-lg bg-white transition-transform transform hover:scale-110 hover:shadow-xl duration-300 animate-fadeIn delay-100">
            <div className="mb-4 h-[76px] w-76 flex items-center justify-center transition-transform transform group-hover:-translate-y-1">
              <Image src="/make-icon.png" alt="" width={100} height={100} />
            </div>
            <h3 className="text-[28px] font-semibold mb-5 mt-5">
              It&apos;s flexible
            </h3>
            <p className="text-gray-600">
              Fintu is so customizable, it fits right in at nearly any kind of
              practice. And because it&apos;s browser-based, it runs on just
              about any device you&apos;d like.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center text-center p-6 border-t-[5px] border-[#0F5AC3] shadow-lg rounded-lg bg-white transition-transform transform hover:scale-110 hover:shadow-xl duration-300 animate-fadeIn delay-200">
            <div className="mb-4 h-[76px] w-76 flex items-center justify-center transition-transform transform group-hover:-translate-y-1">
              <Image
                src="/make-icon-gear.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-[28px] font-semibold mb-5 mt-5">
              It&apos;s simple
            </h3>
            <p className="text-gray-600">
              Fintu’s sleek and intuitive design makes your practice stand out
              to patients, while being fun to use and easy to learn for your
              team.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center text-center p-6 border-t-[5px] border-[#0F5AC3] shadow-lg rounded-lg bg-white transition-transform transform hover:scale-110 hover:shadow-xl duration-300 animate-fadeIn delay-300">
            <div className="mb-4 h-[76px] w-76 flex items-center justify-center transition-transform transform group-hover:-translate-y-1">
              <Image
                src="/make-icon-rocket.png"
                alt=""
                width={100}
                height={100}
                className="w-[100%]"
              />
            </div>
            <h3 className="text-[28px] font-semibold mb-5 mt-5">
              It&apos;s advanced
            </h3>
            <p className="text-gray-600">
              While Fintu looks simple, its sophisticated technology deeply
              integrates and powers cutting-edge features you&apos;ll only find
              here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesSection;
