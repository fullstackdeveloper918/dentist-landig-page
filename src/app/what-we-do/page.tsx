"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BookDemoForm from "@/components/model/BookDemoForm";
import Button from "@/components/ui/button";

export default function WhatWeDoPage() {
  const [counters, setCounters] = useState({
    patients: 0,
    doctors: 0,
    clinics: 0,
    satisfaction: 0,
  });

  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const [isClient, setIsClient] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  // Handle counter animation when stats section is visible
  useEffect(() => {
    setIsClient(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect(); // Stop observing once stats are visible
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counters when stats section becomes visible
  useEffect(() => {
    if (!statsVisible) return;

    const duration = 2000; // animation duration in milliseconds
    const interval = 20; // interval in milliseconds (how often the counter updates)
    const steps = duration / interval;

    const targetValues = {
      patients: 25000,
      doctors: 2500,
      clinics: 500,
      satisfaction: 98,
    };

    let step = 0;

    // Interval timer to animate counters
    const timer = setInterval(() => {
      step++;

      setCounters(() => ({
        patients: Math.min(
          Math.floor((targetValues.patients / steps) * step),
          targetValues.patients
        ),
        doctors: Math.min(
          Math.floor((targetValues.doctors / steps) * step),
          targetValues.doctors
        ),
        clinics: Math.min(
          Math.floor((targetValues.clinics / steps) * step),
          targetValues.clinics
        ),
        satisfaction: Math.min(
          Math.floor((targetValues.satisfaction / steps) * step),
          targetValues.satisfaction
        ),
      }));

      if (step >= steps) {
        clearInterval(timer); // Stop the timer once we reach the target values
      }
    }, interval);

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, [statsVisible]);

  if (!isClient) return <div>Loading...</div>;
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
                  What We Do
                </h1>
                <p className="text-xl mb-8">
                  Fintu provides comprehensive dental practice management
                  solutions that streamline your operations and enhance patient
                  experience.
                </p>
                <Link
                  href="#services"
                  className="bg-white text-[#0F5AC3] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Services
                </Link>
              </div>
              <div className="md:w-1/2 animate-slideInRight">
                <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                  <Image
                    src="/what-we-do/dental-clinics.jpg"
                    alt="Dental Services"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">
                        Modern Dental Solutions
                      </h3>
                      <p className="text-sm">
                        Transforming dental practices with cutting-edge
                        technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats Section */}
        <section
          ref={statsRef}
          className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
              Our <span className="text-[#0F5AC3]">Impact</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {/* Patients Served */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4
              overflow-hidden
              "
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src="/what-we-do/patients-served.jpg"
                    alt="star"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#0F5AC3] mb-2">
                  {counters.patients.toLocaleString()}
                </div>
                <div className="text-gray-600">Patients Served</div>
              </div>

              {/* Doctors Using Fintu */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4
              overflow-hidden
              "
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src="/what-we-do/doctors-using-fintu.jpg"
                    alt="star"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#0F5AC3] mb-2">
                  {counters.doctors.toLocaleString()}
                </div>
                <div className="text-gray-600">Doctors Using Fintu</div>
              </div>

              {/* Dental Clinics */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4
              overflow-hidden
              "
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src="/what-we-do/dental-clinics.jpg"
                    alt="star"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#0F5AC3] mb-2">
                  {counters.clinics.toLocaleString()}
                </div>
                <div className="text-gray-600">Dental Clinics</div>
              </div>

              {/* Satisfaction Rate */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4
              overflow-hidden
              "
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src="/what-we-do/satisfaction-rate.jpg"
                    alt="star"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#0F5AC3] mb-2">
                  {counters.satisfaction}%
                </div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-10 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
              Our <span className="text-[#0F5AC3]">Services</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0F5AC3] transition-colors duration-300 overflow-hidden">
                  <Image
                    src="/what-we-do/practice-management.jpg"
                    alt="service icon"
                    width={100}
                    height={100}
                    className="transition-transform duration-300 group-hover:scale-110 object-cover"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#0F5AC3] transition-colors duration-300">
                  Practice Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive tools to manage appointments, patient records,
                  and staff scheduling all in one place.
                </p>
                <Link
                  href="/what-we-do/practice-management"
                  className="inline-flex items-center text-[#0F5AC3] hover:underline"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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

              {/* Service 2 */}
              <div
                className="group bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `100ms` }}
              >
                <div
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0F5AC3] transition-colors duration-300
              overflow-hidden
              "
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src="/what-we-do/patient-engagement.jpg"
                    alt="service icon"
                    width={100}
                    height={100}
                    className="transition-transform duration-300 group-hover:scale-110 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#0F5AC3] transition-colors duration-300">
                  Patient Engagement
                </h3>
                <p className="text-gray-600 mb-4">
                  Automated reminders, online booking, and patient portals to
                  enhance the patient experience.
                </p>
                <Link
                  href="/what-we-do/patient-engagement"
                  className="inline-flex items-center text-[#0F5AC3] hover:underline"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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

              {/* Service 3 */}
              <div
                className="group bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `200ms` }}
              >
                <div
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0F5AC3] transition-colors duration-300
              overflow-hidden
              "
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src="/what-we-do/financial-management.jpg"
                    alt="service icon"
                    width={100}
                    height={100}
                    className="transition-transform duration-300 group-hover:scale-110 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#0F5AC3] transition-colors duration-300">
                  Financial Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Streamlined billing, insurance claims, and financial reporting
                  to optimize your practice revenue.
                </p>
                <Link
                  href="/what-we-do/financial-management"
                  className="inline-flex items-center text-[#0F5AC3] hover:underline"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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

              {/* Service 4 */}
              <div
                className="group bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `300ms` }}
              >
                <div
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0F5AC3] transition-colors duration-300
              overflow-hidden
              "
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src={"/what-we-do/clinical-tools.jpg"}
                    alt="service icon"
                    width={100}
                    height={100}
                    className="transition-transform duration-300 group-hover:scale-110 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#0F5AC3] transition-colors duration-300">
                  Clinical Tools
                </h3>
                <p className="text-gray-600 mb-4">
                  Digital charting, treatment planning, and imaging integration
                  for efficient clinical workflows.
                </p>
                <Link
                  href="/what-we-do/clinical-tools"
                  className="inline-flex items-center text-[#0F5AC3] hover:underline"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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

              {/* Service 5 */}
              <div
                className="group bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `400ms` }}
              >
                <div
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0F5AC3] transition-colors duration-300
              overflow-hidden
              "
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src="/what-we-do/analytics-reporting.jpg"
                    alt="service icon"
                    width={100}
                    height={100}
                    className="transition-transform duration-300 group-hover:scale-110 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#0F5AC3] transition-colors duration-300">
                  Analytics & Reporting
                </h3>
                <p className="text-gray-600 mb-4">
                  Insightful data analytics and customizable reports to track
                  practice performance and growth.
                </p>
                <Link
                  href="/what-we-do/analytics-reporting"
                  className="inline-flex items-center text-[#0F5AC3] hover:underline"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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

              {/* Service 6 */}
              <div
                className="group bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `500ms` }}
              >
                <div
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0F5AC3] transition-colors duration-300
              overflow-hidden
              "
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src="/what-we-do/compliance-security.jpg"
                    alt="service icon"
                    width={100}
                    height={100}
                    className="transition-transform duration-300 group-hover:scale-110 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#0F5AC3] transition-colors duration-300">
                  Compliance & Security
                </h3>
                <p className="text-gray-600 mb-4">
                  HIPAA-compliant systems with robust security features to
                  protect patient data.
                </p>
                <Link
                  href="/what-we-do/compliance-security"
                  className="inline-flex items-center text-[#0F5AC3] hover:underline"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
              Our <span className="text-[#0F5AC3]">Process</span>
            </h2>

            <div className="relative">
              {/* Process Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#0F5AC3] transform -translate-x-1/2 hidden md:block"></div>

              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div
                  className="flex flex-col md:flex-row items-center animate-fadeIn"
                  style={{ animationDelay: `0ms` }}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-2xl font-semibold mb-3 text-[#0F5AC3]">
                      Consultation
                    </h3>
                    <p className="text-gray-600">
                      We start with a thorough assessment of your practice needs
                      and goals to understand your unique requirements.
                    </p>
                  </div>

                  <div className="w-12 h-12 bg-[#0F5AC3] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 my-4 md:my-0">
                    1
                  </div>

                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 2 */}
                <div
                  className="flex flex-col md:flex-row-reverse items-center animate-fadeIn"
                  style={{ animationDelay: `200ms` }}
                >
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-2xl font-semibold mb-3 text-[#0F5AC3]">
                      Implementation
                    </h3>
                    <p className="text-gray-600">
                      Our team sets up the Fintu system tailored to your
                      specific requirements and integrates with your existing
                      systems.
                    </p>
                  </div>

                  <div className="w-12 h-12 bg-[#0F5AC3] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 my-4 md:my-0">
                    2
                  </div>

                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 3 */}
                <div
                  className="flex flex-col md:flex-row items-center animate-fadeIn"
                  style={{ animationDelay: `400ms` }}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-2xl font-semibold mb-3 text-[#0F5AC3]">
                      Training
                    </h3>
                    <p className="text-gray-600">
                      We provide comprehensive training to ensure your team can
                      maximize the platform&apos;s capabilities and features.
                    </p>
                  </div>

                  <div className="w-12 h-12 bg-[#0F5AC3] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 my-4 md:my-0">
                    3
                  </div>

                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 4 */}
                <div
                  className="flex flex-col md:flex-row-reverse items-center animate-fadeIn"
                  style={{ animationDelay: `600ms` }}
                >
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-2xl font-semibold mb-3 text-[#0F5AC3]">
                      Support
                    </h3>
                    <p className="text-gray-600">
                      Ongoing support and regular updates to keep your practice
                      running smoothly and efficiently at all times.
                    </p>
                  </div>

                  <div className="w-12 h-12 bg-[#0F5AC3] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 my-4 md:my-0">
                    4
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#0F5AC3] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fadeIn">
              Ready to transform your dental practice?
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
