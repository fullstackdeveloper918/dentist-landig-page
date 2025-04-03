"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./ui/button";
import BookDemoForm from "./model/BookDemoForm";

const BannerSection = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <BookDemoForm show={modalShow} onHide={() => setModalShow(false)} />

      <section className="bg-gradient-to-r from-[#072B5D] to-[#0F5AC3] text-white py-12 md:py-[5.5rem] px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex max-[1199px]:flex-col-reverse max-[1199px]:w-full items-center max-[1199px]:px-0">
            <div className="w-1/2 max-[1199px]:w-full mb-8 md:mb-0 pt-[2rem] md:pt-0 max-[1199px]:px-4">
              <div className="max-w-full">
                {/* Main Heading */}
                <h1 className="text-[30px] max-[768px]:text-[50px] max-[636px]:text-[45px] max-[480px]:text-[31px] sm:text-[56px] font-semibold mb-4 mt-3 tracking-[1px] max-[480px]:tracking-[0.5px] leading-[70px] max-[636px]:leading-[55px] max-[480px]:leading-[35px] animate-fadeIn delay-100 text-[#ffffffe6] hover:text-[#fff] transition-all duration-300">
                  Power Up Your Practice with Fintu
                </h1>

                {/* Description */}
                <p className="mb-6 text-[22px] max-[768px]:text-[20px] max-[480px]:text-[12px]  animate-fadeIn delay-200">
                  The all-in-one platform for managing payments, patient
                  scheduling, and practice operations. Fintu helps you focus on
                  what matters—your patients.
                </p>

                {/* Buttons */}
                <div className="flex sm:flex-row gap-4">
                  <Button
                    onClick={() => setModalShow(true)}
                    className="bg-white text-[#0F5AC3] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    Book a Demo
                  </Button>
                  {/* <Link
                  href="#"
                  className="border border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule an appointment
                </Link> */}
                </div>
              </div>
            </div>

            {/* Right side content - Image */}
            <div className="w-1/2 transition-all duration-300 transform hover:scale-105 hover:opacity-90 ml-[0px] md:py-0 max-[1199px]:w-full max-[1199px]:px-4">
              <Image
                src="/banner-img.png"
                alt="Fintu Dashboard"
                width={931}
                height={581}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
