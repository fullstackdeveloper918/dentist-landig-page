"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BookDemoForm from "./model/BookDemoForm";
import Button from "./ui/button";

const BringBusinessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    // Delay the triggering of the animation
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Trigger after 100ms for better performance
  }, []);

  return (
    <>
      <BookDemoForm show={modalShow} onHide={() => setModalShow(false)} />

      <section className="mt-[150px] relative bg-gradient-to-r from-[#072B5D] to-[#0F5AC3] text-white py-[100px] px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Left Content */}
            <div className="md:w-[60%] mb-8 md:mb-0 flex flex-col justify-center items-center text-center">
              <h2 className="mb-10 text-[30px] max-[768px]:text-[50px] max-[636px]:text-[45px] max-[480px]:text-[31px] sm:text-[48px] font-semibold mb-4 mt-3 tracking-[1px] max-[480px]:tracking-[0.5px] leading-[70px] max-[636px]:leading-[55px] max-[480px]:leading-[35px]">
                Bring your Dental Business to 2025 for only $99/mo
              </h2>
              <p className="mb-14 text-[22px]">
                Call 801-681-9899 or email contact@fintu.io for a demo. You can
                be up and running in minutes.
              </p>
              <Button
                onClick={() => setModalShow(true)}
                variant={"ghost"}
                className="mt-0 border border-white text-white px-20 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Get started
              </Button>
            </div>

            {/* Right Image */}
            <div
              className={`absolute max-[480px]:hidden left-[-0%] bottom-[-0%] flex justify-center md:justify-end ${isVisible ? "animate-slideInLeft" : ""}`}
            >
              <Image
                src="/dental-img.png"
                alt="Dental Icon"
                width={389}
                height={447}
                className="rounded-lg"
              />
            </div>

            {/* Top Image */}
            <div
              className={`absolute right-[-0%] top-[0%] flex justify-center md:justify-end ${isVisible ? "animate-slideInRight" : ""}`}
            >
              <Image
                src="/after-img.png"
                alt="Teeth"
                width={330}
                height={465.23}
                className="rounded-lg"
              />
            </div>

            {/* Tab Image - Move it down and slide it up */}
            <div
              className={`absolute max-[480px]:hidden right-[2%] bottom-[-30%] flex justify-center md:justify-end ${isVisible ? "animate-slideUp" : ""}`}
            >
              <Image
                src="/tab-img.png"
                alt="Dental tablet"
                width={565.32}
                height={390}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BringBusinessSection;
