import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";

export default function OurOfferingsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#072B5D] to-[#0F5AC3] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 animate-fadeIn">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Our Offerings
              </h1>
              <p className="text-xl mb-8">
                Discover our comprehensive suite of dental practice management
                solutions designed to elevate your practice.
              </p>
              <Link
                href="#packages"
                className="bg-white text-[#0F5AC3] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                View Packages
              </Link>
            </div>
            <div className="md:w-1/2 animate-slideInRight">
              <Image
                src="/our-offerings/dental-software.jpg"
                alt="Dental Software"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-10 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
            Our <span className="text-[#0F5AC3]">Packages</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`p-6 ${
                    pkg.featured ? "bg-[#0F5AC3] text-white" : "bg-gray-50"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold mb-2">
                    ${pkg.price}
                    <span className="text-sm font-normal">/month</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6 px-[0]">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://app.fintu.io/login"
                    className={`block w-full text-center py-3 rounded-md ${
                      pkg.featured
                        ? "bg-[#0F5AC3] text-white hover:bg-[#0D4DA8]"
                        : " border  border-[#0F5AC3] text-[#0F5AC3]   hover:bg-[#0D4DA8] transition-all duration-300 hover:text-white"
                    } transition-colors duration-300`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
            Key <span className="text-[#0F5AC3]">Features</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4
                overflow-hidden
                "
                >
                  <Image
                    src={feature.icon || "/our-offerings/placeholder.svg"}
                    alt={feature.title}
                    width={100}
                    height={100}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const packages = [
  {
    name: "Starter",
    description: "Perfect for small practices",
    price: 99,
    features: [
      "Patient scheduling",
      "Digital forms",
      "Basic reporting",
      "Email reminders",
      "Cloud storage (10GB)",
    ],
    featured: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing practices",
    price: 199,
    features: [
      "Everything in Starter",
      "Online booking",
      "SMS reminders",
      "Insurance verification",
      "Advanced reporting",
      "Cloud storage (50GB)",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For multi-location practices",
    price: 299,
    features: [
      "Everything in Professional",
      "Multi-location support",
      "Custom branding",
      "API access",
      "Dedicated support",
      "Unlimited cloud storage",
    ],
    featured: false,
  },
];

const features = [
  {
    title: "Online Scheduling",
    description:
      "Allow patients to book appointments online 24/7, reducing phone calls and administrative work.",
    icon: "/our-offerings/online-scheduling.jpg",
  },
  {
    title: "Digital Forms",
    description:
      "Eliminate paperwork with digital intake forms that patients can complete before their visit.",
    icon: "/our-offerings/digital-forms.jpg",
  },
  {
    title: "Automated Reminders",
    description:
      "Reduce no-shows with automated email and SMS appointment reminders.",
    icon: "/our-offerings/automated-reminders.jpg",
  },
  {
    title: "Insurance Verification",
    description:
      "Verify patient insurance eligibility in real-time before appointments.",
    icon: "/our-offerings/insurance-verification.jpg",
  },
  {
    title: "Telehealth",
    description:
      "Conduct virtual consultations and follow-ups with integrated video conferencing.",
    icon: "/our-offerings/telehealth.jpg",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track key performance indicators with customizable dashboards and reports.",
    icon: "/our-offerings/analytics-dashboard.jpg",
  },
];
