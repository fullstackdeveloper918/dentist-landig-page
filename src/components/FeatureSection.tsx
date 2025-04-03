import React from "react";

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 mt-16">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center md:text-5xl font-bold mb-4  animate-fadeIn">
          What are the <span className="text-[#0F5AC3]">Fintu </span> features?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Run Your Dental Practice from Anywhere at Anytime with Our Solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group flex flex-col items-start space-y-2 p-4 rounded-lg transition-all duration-300 relative cursor-pointer">
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className="p-3 rounded-full bg-gray-200 transition-all duration-300 group-hover:bg-blue-600">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  className="text-blue-600 group-hover:text-white transition-all duration-300"
                >
                  <path
                    d="M3 9L12 15L21 9M3 9V17L12 23L21 17V9M3 9L12 3L21 9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 transition-all duration-300 group-hover:text-blue-600">
                  Payments
                </h3>
                <p className="text-gray-600 text-sm">
                  Process payments in your practice or let patients pay online.
                  Automatic reconciliation keeps your books in order.
                </p>
              </div>
            </div>

            {/* Bottom Line Effect */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Feature 2 */}
          <div className="group flex flex-col items-start space-y-2 p-4 rounded-lg transition-all duration-300 relative cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-gray-200 transition-all duration-300 group-hover:bg-blue-600">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  className="text-blue-600 group-hover:text-white transition-all duration-300"
                >
                  <path
                    d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 19 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 transition-all duration-300 group-hover:text-blue-600">
                  Digital Invoices and Pay by Text
                </h3>
                <p className="text-gray-600 text-sm">
                  Send digital invoices and let patients pay with a simple text
                  message. Faster payments, less paperwork.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Feature 3 */}
          <div className="group flex flex-col items-start space-y-2 p-4 rounded-lg transition-all duration-300 relative cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-gray-200 transition-all duration-300 group-hover:bg-blue-600">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  className="text-blue-600 group-hover:text-white transition-all duration-300"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 transition-all duration-300 group-hover:text-blue-600">
                  Testing
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive testing tools to ensure your practice operations
                  run smoothly without interruptions.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </div>

          <div className="group flex flex-col items-start space-y-2 p-4 rounded-lg transition-all duration-300 relative cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-gray-200 transition-all duration-300 group-hover:bg-blue-600">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-600 group-hover:text-white transition-all duration-300"
                >
                  <path
                    d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 transition-all duration-300 group-hover:text-blue-600">
                  Metrics & Dashboards
                </h3>
                <p className="text-gray-600 text-sm">
                  Real-time insights into your practice performance. Track
                  appointments, revenue, patient satisfaction, and more.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </div>

          <div className="group flex flex-col items-start space-y-2 p-4 rounded-lg transition-all duration-300 relative cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-gray-200 transition-all duration-300 group-hover:bg-blue-600">
                <svg
                  width="24"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-600 group-hover:text-white transition-all duration-300"
                >
                  <path
                    d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 transition-all duration-300 group-hover:text-blue-600">
                  Insurance Eligibility and Claim Submission
                </h3>
                <p className="text-gray-600 text-sm">
                  Verify insurance coverage in real-time. Submit and track
                  claims electronically for faster reimbursement.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="group flex flex-col items-start space-y-2 p-4 rounded-lg transition-all duration-300 relative cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-gray-200 transition-all duration-300 group-hover:bg-blue-600">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  className="text-blue-600 group-hover:text-white transition-all duration-300"
                >
                  <path
                    d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 transition-all duration-300 group-hover:text-blue-600">
                  Appointments
                </h3>
                <p className="text-gray-600 text-sm">
                  Online scheduling for patients, automated reminders, and a
                  smart calendar that optimizes your practice schedule.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
