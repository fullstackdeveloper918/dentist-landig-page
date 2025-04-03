"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function GroupPracticePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full">
          <Image
            src="/who-we-serve/group-practice.jpg"
            alt="Group Practice"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Group Practice Solutions
              </motion.h1>
              <motion.p
                className="text-xl text-white/90 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Comprehensive management systems for multi-provider dental
                clinics.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-16">
          {/* Intro Section */}
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
              Designed for Multi-Provider Practices
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Group dental practices face unique challenges in coordinating care
              across multiple providers while maintaining consistent patient
              experiences
            </p>
          </motion.div>

          {/* Two Column Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="h-1 w-16 bg-blue-500 mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Team Coordination
              </h3>
              <p className="text-gray-700">
                Our platform enables seamless communication between providers,
                staff, and departments. Coordinate schedules, share patient
                information, and collaborate on treatment plans all within a
                secure environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-1 w-16 bg-blue-500 mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Unified Patient Experience
              </h3>
              <p className="text-gray-700">
                Provide a consistent experience for patients regardless of which
                provider they see. Centralized records ensure that all team
                members have access to the information they need to deliver
                coordinated care.
              </p>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-sm mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Key Features for Group Practices
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard
                title="Multi-Provider Scheduling"
                description="Advanced scheduling system with provider-specific availability"
              />
              <FeatureCard
                title="Shared Clinical Records"
                description="Unified patient records accessible to authorized team members"
              />
              <FeatureCard
                title="Secure Communication"
                description="Encrypted messaging for safe provider collaboration"
              />
              <FeatureCard
                title="Automated Billing"
                description="Integrated billing solutions for effortless payment processing"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Reusable Feature Card Component
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="flex items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
        <svg
          className="h-6 w-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
