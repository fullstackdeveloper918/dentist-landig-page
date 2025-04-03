"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

// This is a reusable service detail page component
// You can create instances for each service by passing different props
export default function ServiceDetailPage({
  service = "Practice Management",
  description = "Comprehensive tools to manage appointments, patient records, and staff scheduling all in one place.",
  imagePath = "/what-we-do/practice-management.jpg",
  features = [
    "Appointment scheduling and management",
    "Patient records and history tracking",
    "Staff scheduling and management",
    "Resource allocation optimization",
    "Automated reminders and notifications",
    "Custom workflow configuration",
  ],
  benefits = [
    "Save up to 30% of administrative time",
    "Reduce scheduling errors by 90%",
    "Improve staff productivity",
    "Enhance patient satisfaction",
    "Streamline daily operations",
  ],
}) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header with back navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/what-we-do#services"
            className="flex items-center text-gray-600 hover:text-[#0F5AC3] transition-colors duration-300 cursor-pointer group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <div className="inline-block bg-blue-100 text-[#0F5AC3] px-4 py-1 rounded-full text-sm font-medium">
                Service Details
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {service}
              </h1>
              <p className="text-xl text-gray-600">{description}</p>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl group animate-fadeIn animation-delay-200">
              <div className="aspect-video relative">
                <Image
                  src={imagePath || "/placeholder.svg"}
                  alt={service}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs navigation */}
      <section className="py-8 px-4 border-b border-gray-200 sticky top-0 bg-white z-10 shadow-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex overflow-x-auto space-x-8 pb-2">
            {["overview", "features", "benefits"].map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer whitespace-nowrap pb-2 px-1 border-b-2 transition-all duration-300 hover:text-[#0F5AC3] ${
                  activeTab === tab
                    ? "border-[#0F5AC3] text-[#0F5AC3] font-medium"
                    : "border-transparent text-gray-600"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-12 animate-fadeIn">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About {service}
                </h2>
                <p>
                  Our {service} solution is designed to streamline your
                  healthcare practice operations, allowing you to focus on what
                  matters most – patient care. With intuitive interfaces and
                  powerful automation capabilities, you can transform how your
                  practice operates.
                </p>
                <p>
                  The system adapts to your specific workflow needs, whether
                  you&apos;re a small clinic or a large multi-location practice.
                  Our cloud-based platform ensures you can access your practice
                  management tools from anywhere, at any time.
                </p>
                <p>
                  With real-time updates and comprehensive reporting,
                  you&apos;ll always have your finger on the pulse of your
                  practice&apos;s performance and patient satisfaction metrics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Intuitive Design",
                    description:
                      "User-friendly interface that requires minimal training to master.",
                  },
                  {
                    title: "Customizable Workflows",
                    description:
                      "Adapt the system to match your practice's unique processes and needs.",
                  },
                  {
                    title: "Seamless Integration",
                    description:
                      "Works with your existing tools and systems for a unified experience.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <div className="space-y-12 animate-fadeIn">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Key Features
                </h2>
                <p>
                  Our {service} solution comes packed with features designed to
                  optimize your practice operations and enhance both staff and
                  patient experiences. Explore the capabilities that make our
                  solution stand out from the competition.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mr-4 mt-1 bg-blue-100 rounded-full p-2 text-[#0F5AC3] group-hover:bg-[#0F5AC3] group-hover:text-white transition-colors duration-300">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {feature}
                      </h3>
                      <p className="text-gray-600">
                        Our {feature.toLowerCase()} functionality provides
                        comprehensive tools to streamline your workflow and
                        improve efficiency across your practice.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === "benefits" && (
            <div className="space-y-12 animate-fadeIn">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefits
                </h2>
                <p>
                  Implementing our {service} solution delivers tangible benefits
                  to your practice, staff, and patients. Here&apos;s how our
                  solution can transform your healthcare practice.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0F5AC3] group-hover:bg-[#0F5AC3] group-hover:text-white transition-colors duration-300 mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#0F5AC3] transition-colors duration-300">
                        {benefit}
                      </h3>
                    </div>
                    <div className="mt-4 pl-16">
                      <p className="text-gray-600">
                        Our clients have consistently reported this benefit
                        after implementing our {service} solution, leading to
                        improved operational efficiency and patient
                        satisfaction.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
