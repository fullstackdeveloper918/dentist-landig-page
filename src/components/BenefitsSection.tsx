import Image from "next/image";
import React from "react";

const BenefitsSection = () => {
  return (
    <section className="py-2 px-4 md:px-8 lg:px-16 bg-white mt-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl text-center md:text-5xl font-bold mb-0  animate-fadeIn">
          Benefits of Our <span className="text-[#0F5AC3]">Fintu Software</span>
        </h2>

        {/* Benefits Grid with Image as Vertical Separator */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 relative">
          <div className="flex items-start space-x-4 px-6 relative group  animate-fadeIn delay-100">
            {/* Icon */}
            <div className="min-w-6 mt-1 transition-transform transform group-hover:scale-110">
              <Image src="/check-icon.png" alt="" width={100} height={100} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-[#0F5AC3]">
                Flexible & Affordable
              </h3>
              <p className="text-gray-600 text-sm">
                Our Fintu software is designed with flexibility in mind—no
                lock-in contracts, so you can scale as needed.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 px-6 relative group  animate-fadeIn delay-200">
            {/* Icon */}
            <div className="min-w-6 mt-1 transition-transform transform group-hover:scale-110">
              <Image src="/check-icon.png" alt="" width={100} height={100} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-[#0F5AC3]">
                Quick Setup & Customization
              </h3>
              <p className="text-gray-600 text-sm">
                Our Fintu software is designed with flexibility in mind—no
                lock-in contracts, so you can scale as needed.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 px-6 relative group  animate-fadeIn delay-300">
            {/* Icon */}
            <div className="min-w-6 mt-1 transition-transform transform group-hover:scale-110">
              <Image src="/check-icon.png" alt="" width={100} height={100} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-[#0F5AC3]">
                Fully Available & Secure
              </h3>
              <p className="text-gray-600 text-sm">
                Our Fintu software is designed with flexibility in mind—no
                lock-in contracts, so you can scale as needed.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 px-6 relative group  animate-fadeIn delay-400">
            {/* Icon */}
            <div className="min-w-6 mt-1 transition-transform transform group-hover:scale-110">
              <Image src="/check-icon.png" alt="" width={100} height={100} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-[#0F5AC3]">
                Custom Branding & Forms
              </h3>
              <p className="text-gray-600 text-sm">
                Our Fintu software is designed with flexibility in mind—no
                lock-in contracts, so you can scale as needed.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 px-6 relative group  animate-fadeIn delay-500">
            <Image
              src="/gradient-line.svg"
              alt="Divider"
              className="absolute left-[0px] top-[-170%] h-[500px] w-auto hidden md:block w-[100%]"
              width={100}
              height={100}
            />
            {/* Icon */}
            <div
              style={{ marginLeft: "0px" }}
              className="min-w-6 mt-1 transition-transform transform group-hover:scale-110"
            >
              <Image src="/check-icon.png" alt="" width={100} height={100} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-[#0F5AC3]">
                Owned & Organized Files
              </h3>
              <p className="text-gray-600 text-sm">
                Our Fintu software is designed with flexibility in mind—no
                lock-in contracts, so you can scale as needed.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 px-6 relative group  animate-fadeIn delay-600">
            <Image
              src="/gradient-line.svg"
              alt="Divider"
              className="absolute left-[-50%] top-[-170%] h-[500px] w-[100%] hidden md:block w-[100%]"
              width={100}
              height={100}
            />
            {/* Icon */}
            <div
              style={{ marginLeft: "0px" }}
              className="min-w-6 mt-1 transition-transform transform group-hover:scale-110"
            >
              <Image src="/check-icon.png" alt="" width={100} height={100} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-[#0F5AC3]">
                Responsive Support
              </h3>
              <p className="text-gray-600 text-sm">
                Our Fintu software is designed with flexibility in mind—no
                lock-in contracts, so you can scale as needed.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 px-6 relative group  animate-fadeIn delay-700">
            {/* Icon */}
            <div className="min-w-6 mt-1 transition-transform transform group-hover:scale-110">
              <Image src="/check-icon.png" alt="" width={100} height={100} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-[#0F5AC3]">
                All-Driven (Finance & Employee Management)
              </h3>
              <p className="text-gray-600 text-sm">
                Our Fintu software is designed with flexibility in mind—no
                lock-in contracts, so you can scale as needed.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 px-6 relative group  animate-fadeIn delay-800">
            {/* Icon */}
            <div className="min-w-6 mt-1 transition-transform transform group-hover:scale-110">
              <Image src="/check-icon.png" alt="" width={100} height={100} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-[#0F5AC3]">
                Complete Lifecycle Management
              </h3>
              <p className="text-gray-600 text-sm">
                Our Fintu software is designed with flexibility in mind—no
                lock-in contracts, so you can scale as needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
