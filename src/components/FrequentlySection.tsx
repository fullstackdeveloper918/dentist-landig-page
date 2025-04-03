"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FrequentlySection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What is Denteria?",
      answer:
        "Fintu is an all-in-one dental practice management software that helps you streamline operations, improve patient experience, and grow your practice.",
    },
    {
      question: "Do I Need To Arrive Early For My First Appointment?",
      answer:
        "It is recommended to arrive at least 15 minutes early to complete paperwork and prepare for your appointment.",
    },
    {
      question: "How to Get an Appointment?",
      answer:
        "You can schedule an appointment online through our portal or call our office.",
    },
    {
      question: "How Long Will My First Appointment Last?",
      answer:
        "Typically, your first visit lasts around 45 minutes to an hour, depending on the procedure.",
    },
    {
      question: "What Are The Prices Structure?",
      answer:
        "Pricing varies depending on the treatment. Contact us for more details on our pricing plans.",
    },
    {
      question: "What Should I Do If I Require Premedication?",
      answer:
        "Consult your doctor before the appointment to discuss any necessary premedication.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mb-14">
        Contrary to popular belief, Lorem Ipsum is not simply random text
      </p>

      <div className="grid md:grid-cols-2 gap-8 mx-auto">
        {/* Left Column */}
        <div className="space-y-6">
          {faqs.slice(0, 3).map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  className={`text-lg font-semibold ${
                    openIndex === index
                      ? "text-[#0F5AC3]"
                      : "text-black hover:text-[#0F5AC3]"
                  }`}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-[#0F5AC3]"
                      : "text-black hover:text-[#0F5AC3]"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-2 text-black">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {faqs.slice(3, 6).map((faq, index) => (
            <div key={index + 3} className="border-b pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index + 3)}
              >
                <h3
                  className={`text-lg font-semibold ${
                    openIndex === index + 3
                      ? "text-[#0F5AC3]"
                      : "text-black hover:text-[#0F5AC3]"
                  }`}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${
                    openIndex === index + 3
                      ? "rotate-180 text-[#0F5AC3]"
                      : "text-black hover:text-[#0F5AC3]"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openIndex === index + 3
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-2 text-black">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlySection;
