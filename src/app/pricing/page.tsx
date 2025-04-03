"use client";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/button";
import BookDemoForm from "@/components/model/BookDemoForm";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {" "}
      <BookDemoForm show={modalShow} onHide={() => setModalShow(false)} />
      <main className="flex min-h-screen flex-col bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#072B5D] to-[#0F5AC3] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your practice needs. No hidden fees, no
              long-term contracts required.
            </p>
          </div>
        </section>

        {/* Pricing Toggle */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-full inline-flex">
                <button
                  className={`px-6 py-2 rounded-full ${isAnnual ? "bg-[#0F5AC3] text-white" : "text-gray-700 hover:bg-gray-200"} transition-colors`}
                  onClick={() => setIsAnnual(true)}
                >
                  Monthly
                </button>
                <button
                  className={`px-6 py-2 rounded-full ${!isAnnual ? "bg-[#0F5AC3] text-white" : "text-gray-700 hover:bg-gray-200"} transition-colors`}
                  onClick={() => setIsAnnual(false)}
                >
                  Annual (Save 20%)
                </button>
              </div>
            </div>

            {/* Pricing Plans - Each Plan Separately */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="p-6 bg-gray-50">
                  <h3 className="text-2xl font-bold mb-2">Basic</h3>
                  <p className="mb-4">Great for small practices</p>
                  <div className="text-3xl font-bold mb-2">
                    ${isAnnual ? 290 : 29}{" "}
                    <span className="text-sm font-normal">
                      {isAnnual ? "/year" : "/month"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Up to 500 patients</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Basic appointment scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Digital forms</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Email reminders</span>
                    </li>
                    {isAnnual && (
                      <>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>Basic reporting</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>Standard support</span>
                        </li>
                      </>
                    )}
                  </ul>

                  <Link
                    href="https://app.fintu.io/login"
                    className="block w-full text-center py-3 rounded-md  border border-[#0F5AC3] text-[#0F5AC3] hover:bg-[#0F5AC3] hover:text-white"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="p-6 bg-[#0F5AC3] text-white">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <p className="mb-4">For growing practices</p>
                  <div className="text-3xl font-bold mb-2">
                    ${isAnnual ? 590 : 59}{" "}
                    <span className="text-sm font-normal">
                      {isAnnual ? "/year" : "/month"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Up to 2,000 patients</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Advanced scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Online booking</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>SMS & email reminders</span>
                    </li>

                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Insurance verification</span>
                    </li>
                    {isAnnual && (
                      <>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>Advanced reporting</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>Priority support</span>
                        </li>
                      </>
                    )}
                  </ul>

                  <Link
                    href="https://app.fintu.io/login"
                    className="block w-full text-center py-3 rounded-md bg-[#0F5AC3] text-white hover:bg-[#0D4DA8]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="p-6 bg-gray-50">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="mb-4">For large-scale practices</p>
                  <div className="text-3xl font-bold mb-2">
                    ${isAnnual ? 990 : 99}{" "}
                    <span className="text-sm font-normal">
                      {isAnnual ? "/year" : "/month"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Unlimited patients
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Multi-location support
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Custom branding
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      API access
                    </li>
                    {isAnnual && (
                      <>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          Advanced analytics
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          Custom integrations
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          Dedicated support
                        </li>
                      </>
                    )}
                  </ul>
                  <Link
                    href="https://app.fintu.io/login"
                    className="block w-full text-center py-3 rounded-md  border border-[#0F5AC3] text-[#0F5AC3] hover:bg-[#0F5AC3] hover:text-white"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Each FAQ Separately */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  What is included in the free trial?
                </h3>
                <p className="text-gray-600">
                  The free trial includes all features for 14 days.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  Can I cancel at any time?
                </h3>
                <p className="text-gray-600">
                  Yes, you can cancel anytime without any penalties.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  Do you offer customer support?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer 24/7 customer support via chat and email.
                </p>
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
