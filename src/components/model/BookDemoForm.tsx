import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../ui/button"; // Ensure this component exists
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import Image from "next/image";

interface BookDemoFormProps {
  show: boolean;
  onHide: () => void;
}

interface FormErrors {
  full_name: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
}

interface FormFields {
  full_name: string;
  email: string;
  phone: string;
  message: string;
}

const BookDemoForm: React.FC<BookDemoFormProps> = ({ show, onHide }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState<FormFields>({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    full_name: false,
    email: false,
    phone: false,
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

  const validatePhone = (phone: string) => {
    return phone.length >= 10;
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
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
      phone: !validatePhone(formData.phone),
      message: !formData.message,
    };

    if (Object.values(formErrors).includes(true)) {
      valid = false;
    }

    setErrors(formErrors);
    if (valid) {
      try {
        const res = await axios.post("/api/submit", formData);
        const response = res?.data;
        console.log(response, "Form submitted successfully.");
        setFormSubmitted(true);
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrorMessage(" Please try again.");
        setTimeout(() => setErrorMessage(""), 3000);
      }
    }

    setLoading(false);
  };

  const handleClose = () => {
    onHide();
    setFormSubmitted(false);
    setFormData({ full_name: "", email: "", phone: "", message: "" });
    setErrors({ full_name: false, email: false, phone: false, message: false });
    setErrorMessage("");
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {!formSubmitted && (
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-2xl font-bold text-center"
          >
            Request a Demo
          </Modal.Title>
        )}
      </Modal.Header>

      <Modal.Body>
        {formSubmitted ? (
          <div className="text-center py-2">
            <Image
              src="/sent-icon.png"
              width={150}
              height={150}
              style={{ width: "100px", height: "100px" }}
              alt="Sent Icon"
              className="mx-auto"
            />
            <h4>Your request has been sent successfully!</h4>
            <p>We will contact you shortly. Thank you for reaching out.</p>
          </div>
        ) : (
          <form className="space-y-4 my-1" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="full_name"
                className="block text-sm font-medium mb-1"
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

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
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

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={handlePhoneChange}
                onFocus={() => handleFocus("phone")}
                inputClass={errors.phone ? "border-red-500" : "border-gray-300"}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm pt-1">
                  Valid phone number is required.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
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

            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            <Button
              type="submit"
              variant="gradient"
              className="w-full mt-8"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default BookDemoForm;
