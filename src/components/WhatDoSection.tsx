"use client";
import React, { useState, useRef, useEffect } from "react";
import Button from "./ui/button";
import Image from "next/image";
import BookDemoForm from "./model/BookDemoForm";

const WhatDoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State for when element is in view
  const [modalShow, setModalShow] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  // Handle play/pause functionality
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Intersection Observer to detect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (textRef.current && imageRef.current) {
      observer.observe(textRef.current);
      observer.observe(imageRef.current);
    }

    return () => {
      if (textRef.current && imageRef.current) {
        observer.unobserve(textRef.current);
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <>
      {" "}
      <BookDemoForm show={modalShow} onHide={() => setModalShow(false)} />
      <section
        className="py-24 mt-[200px] max-[480px]:mt-[0px] px-4 md:px-8 lg:px-16"
        style={{ backgroundColor: "rgb(97 160 197 / 7%)" }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            {/* Text Section */}
            <div
              className="md:w-1/2"
              ref={textRef}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                transition: "opacity 1s, transform 1s",
              }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What does the product do?
              </h2>
              <p className="text-gray-600 mb-4">
                When integrated with Open Dental, Fintu is a complete set of
                beautiful and intelligently designed tools that maximize your
                practice efficiency.
              </p>
              <p className="text-gray-600 mb-6">
                Reduce your team&apos;s workload, increase treatment acceptance,
                boost payment collection, and do much more.
              </p>
              <Button
                onClick={() => setModalShow(true)}
                variant="gradient"
                size="sm"
                className="rounded-full"
              >
                Request Appointment
              </Button>
            </div>

            {/* Video Section */}
            <div
              className="md:w-1/2 relative rounded-lg shadow-lg"
              ref={imageRef}
              style={{
                transform: isVisible ? "translateX(0)" : "translateX(-300px)",
                transition: "transform 1s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <video
                ref={videoRef}
                src="/whatDo.mp4"
                width={500}
                height={300}
                className="rounded-lg w-full"
                controls={false}
              />
              {/* Play/Pause Button */}
              <button
                onClick={handlePlayPause}
                className={`absolute inset-0 flex items-center justify-center bg-transparent rounded-full shadow-md transition-opacity duration-300 ${
                  isPlaying
                    ? isHovered
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-100"
                }`}
              >
                {isPlaying ? (
                  // Pause Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{
                      background: "white",
                      borderRadius: "50%", // Makes it a perfect circle
                      padding: "12px", // Adjust padding to center the icon
                    }}
                  >
                    <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="#072B5D" />
                  </svg>
                ) : (
                  // Custom Play Icon
                  <Image
                    src="/play.png"
                    alt="Play"
                    className="w-[66px] h-[68]"
                    width={100}
                    height={100}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatDoSection;
