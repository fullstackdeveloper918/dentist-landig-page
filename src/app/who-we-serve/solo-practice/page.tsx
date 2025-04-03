"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function SoloPracticePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full">
          <Image
            src="/who-we-serve/solo-practice.jpg"
            alt="Solo Practice"
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
                Solo Practice Solutions
              </motion.h1>
              <motion.p
                className="text-xl text-white/90 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Tailored software solutions for independent dental practitioners
              </motion.p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Why Solo Practitioners Choose Us
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Running a solo dental practice comes with unique challenges. Our
              platform is specifically designed to address the needs of
              independent practitioners who need to manage every aspect of their
              practice efficiently.
            </p>
            <p className="text-lg text-gray-700">
              From scheduling and patient management to billing and clinical
              records, our all-in-one solution helps you maintain control while
              reducing administrative burden.
            </p>
          </motion.div>

          {/* Feature Sections */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <div className="h-1 w-16 bg-blue-500 mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Streamlined Operations
              </h3>
              <p className="text-gray-700">
                Manage appointments, patient records, and billing from a single
                dashboard. Reduce admin tasks and focus on patient care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="h-1 w-16 bg-blue-500 mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Cost-Effective Solution
              </h3>
              <p className="text-gray-700">
                Flexible pricing tailored for solo practitioners. Pay only for
                what you need with no hidden fees or long-term commitments.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
