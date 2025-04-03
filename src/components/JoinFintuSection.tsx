"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./ui/button";
import axios from "axios";

const JoinFintuSection = () => {
  interface FormErrors {
    full_name: boolean;
    email: boolean;
    message: boolean;
  }

  interface FormFields {
    full_name: string;
    email: string;
    message: string;
  }

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState<FormFields>({
    full_name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    full_name: false,
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleFocus = (field: keyof FormErrors) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
    setErrorMessage(""); // Clear error message on focus
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    let valid = true;
    const formErrors: FormErrors = {
      full_name: !formData.full_name,
      email: !validateEmail(formData.email),
      message: !formData.message,
    };

    if (Object.values(formErrors).includes(true)) {
      valid = false;
    }

    setErrors(formErrors);
    if (valid) {
      try {
        const res = await axios.post("/api/contact-message", formData);
        const response = res?.data;
        console.log(response, "Form submitted successfully.");
        setFormSubmitted(true);

        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrorMessage(" Please try again.");
        setTimeout(() => setErrorMessage(""), 3000);
      }
    }

    setLoading(false);
  };

  return (
    <section className="py-0 px-[1rem] px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center gap-20 max-[1199px]:gap-10">
        {/* Image Section */}
        <div className="md:w-1/2 animate-fadeIn animate-delay-200ms">
          <Image
            src="/formBg.png"
            alt="Happy client"
            width={750}
            height={893}
            className="rounded-lg shadow-lg w-full transform transition-all duration-1000 hover:scale-105"
          />
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 animate-fadeIn animate-delay-400ms">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black bg-clip-text bg-gradient-to-r from-[#0F5AC3] to-[#072B5D] animate-slideInFromLeft">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-8 animate-slideInFromLeft">
            Have questions? Fill out the form below and we’ll get back to you as
            soon as possible.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="animate-slideInFromLeft">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                placeholder="Enter your name"
                onFocus={() => handleFocus("full_name")}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.full_name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.full_name && (
                <p className="text-red-500 text-sm pt-1">
                  Full name is required.
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="animate-slideInFromLeft">
              <label
                htmlFor="email"
                className="block text-[#090914] text-sm font-medium font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onFocus={() => handleFocus("email")}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm pt-1">
                  Valid email is required.
                </p>
              )}
            </div>

            {/* Message */}
            <div className="animate-slideInFromLeft">
              <label
                htmlFor="message"
                className="text-[#090914] block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                rows={4}
                placeholder="Enter your message..."
                onFocus={() => handleFocus("message")}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">Message is required.</p>
              )}
            </div>
            {formSubmitted && !errorMessage && (
              <p className="text-green-500 text-center mt-4">
                Form submitted successfully!
              </p>
            )}
            {errorMessage && (
              <p className="text-red-500 text-center mt-4">{errorMessage}</p>
            )}
            {/* Submit Button */}
            <Button
              type="submit"
              variant={"gradient"}
              className="w-full mt-8 text-md button-hover transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Success/Error message */}
        </div>
      </div>
    </section>
  );
};

export default JoinFintuSection;
