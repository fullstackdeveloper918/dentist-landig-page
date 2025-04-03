"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function CorporateDentalPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full">
          <Image
            src="/who-we-serve/corporate-dental.jpg"
            alt="Corporate Dental"
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
                Corporate Dental Solutions
              </motion.h1>
              <motion.p
                className="text-xl text-white/90 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Streamlined management and scalable solutions for multi-location
                dental groups.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Specialized for Your Specialty
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Dental specialists have unique workflows and requirements that
              general practice software often can&apos;t accommodate. Our
              specialty-focused solutions are designed with the specific needs
              of orthodontists, periodontists, oral surgeons, and other
              specialists in mind.
            </p>
            <p className="text-lg text-gray-700">
              From specialized treatment planning tools to specialty-specific
              documentation, our platform adapts to your unique practice
              requirements.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {" "}
            <div>
              <div className="h-1 w-16 bg-blue-500 mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Efficient Treatment Planning
              </h3>
              <p className="text-gray-700">
                Our platform provides advanced treatment planning tools,
                ensuring specialists can create and track customized patient
                journeys with ease.
              </p>
            </div>
            <div>
              <div className="h-1 w-16 bg-blue-500 mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Seamless Referral Management
              </h3>
              <p className="text-gray-700">
                Our robust referral system ensures smooth collaboration with
                referring doctors, streamlining communication and patient
                transfers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
