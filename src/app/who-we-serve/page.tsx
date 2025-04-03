"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BookDemoForm from "@/components/model/BookDemoForm";
import { useState } from "react";
import Button from "@/components/ui/button";

export default function WhoWeServePage() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {" "}
      <BookDemoForm show={modalShow} onHide={() => setModalShow(false)} />
      <main className="flex min-h-screen flex-col bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#072B5D] to-[#0F5AC3] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 animate-fadeIn">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Who We Serve
                </h1>
                <p className="text-xl mb-8">
                  Fintu is designed to meet the unique needs of dental practices
                  of all sizes and specialties.
                </p>
                <Link
                  href="#practices"
                  className="bg-white text-[#0F5AC3] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Solutions
                </Link>
              </div>
              <div className="md:w-1/2 animate-slideInRight">
                <Image
                  src="/who-we-serve/dental-team.jpg"
                  alt="Dental Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Practice Types Section */}
        <section id="practices" className="py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Tailored Solutions for{" "}
              <span className="text-[#0F5AC3]">Every Practice</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src="/who-we-serve/solo-practice.jpg"
                  alt="Solo Practice"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Solo Practice
                  </h3>
                  <p className="text-white/80 mb-4">
                    Ideal for independent practitioners
                  </p>
                  <Link
                    href="/who-we-serve/solo-practice"
                    className="text-white font-medium flex items-center group-hover:underline"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src="/who-we-serve/group-practice.jpg"
                  alt="Group Practice"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Group Practice
                  </h3>
                  <p className="text-white/80 mb-4">
                    Best for multi-provider clinics
                  </p>
                  <Link
                    href="/who-we-serve/group-practice"
                    className="text-white font-medium flex items-center group-hover:underline"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src="/who-we-serve/specialty-practice.jpg"
                  alt="Specialty Practice"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Specialty Practice
                  </h3>
                  <p className="text-white/80 mb-4">
                    Tailored for orthodontists & periodontists
                  </p>
                  <Link
                    href="/who-we-serve/specialty-practice"
                    className="text-white font-medium flex items-center group-hover:underline"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src="/who-we-serve/corporate-dental.jpg"
                  alt="Corporate Dental"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Corporate Dental
                  </h3>
                  <p className="text-white/80 mb-4">
                    Solutions for large-scale organizations
                  </p>
                  <Link
                    href="/who-we-serve/corporate-dental"
                    className="text-white font-medium flex items-center group-hover:underline"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
              What Our Clients <span className="text-[#0F5AC3]">Say</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: "0ms" }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src="/who-we-serve/client.jpg"
                    alt="Dr. Sarah Johnson"
                    width={48}
                    height={48}
                    className="rounded-full object-cover aspect-square"
                  />

                  <div className="ml-4">
                    <h3 className="font-semibold">Dr. Sarah Johnson</h3>
                    <p className="text-sm text-gray-600">
                      General Dentist, Chicago
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  Fintu has transformed our practice operations. We &apos;ve
                  reduced no-shows by 60% and increased our collections rate
                  significantly.
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: "100ms" }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src="/who-we-serve/client-one.jpg"
                    alt="Dr. Sarah Johnson"
                    width={48}
                    height={48}
                    className="rounded-full object-cover aspect-square"
                  />

                  <div className="ml-4">
                    <h3 className="font-semibold">Dr. Michael Chen</h3>
                    <p className="text-sm text-gray-600">
                      Orthodontist, San Francisco
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  The patient engagement features have been a game-changer for
                  our practice. Our patients love the online booking and text
                  reminders.
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 3 */}
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: "200ms" }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src="/who-we-serve/client-two.jpg"
                    alt="Dr. Emily Rodriguez"
                    width={48}
                    height={48}
                    className="rounded-full object-cover aspect-square"
                  />

                  <div className="ml-4">
                    <h3 className="font-semibold">Dr. Emily Rodriguez</h3>
                    <p className="text-sm text-gray-600">
                      Pediatric Dentist, Miami
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  As a pediatric practice, we needed something both powerful and
                  kid-friendly. Fintu delivers on both fronts beautifully.
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#0F5AC3] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fadeIn">
              Ready to elevate your dental practice?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-fadeIn animate-delay-200ms">
              Join thousands of dental professionals who trust Fintu to
              streamline their practice operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animate-delay-400ms">
              <Button
                onClick={() => setModalShow(true)}
                className="bg-white text-[#0F5AC3] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
