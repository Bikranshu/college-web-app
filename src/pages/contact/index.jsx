import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  UserIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      details: ["support@example.com", "sales@example.com"],
      action: "mailto:support@example.com",
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "tel:+15551234567",
    },
    {
      icon: MapPinIcon,
      title: "Visit Us",
      details: ["123 Commerce Street", "New York, NY 10001"],
      action: "https://maps.google.com",
    },
    {
      icon: ClockIcon,
      title: "Working Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: null,
    },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Full name is required")
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name cannot exceed 50 characters"),
      email: Yup.string()
        .required("Email address is required")
        .email("Please enter a valid email address"),
      subject: Yup.string()
        .required("Subject is required")
        .min(3, "Subject must be at least 3 characters")
        .max(100, "Subject cannot exceed 100 characters"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters")
        .max(500, "Message cannot exceed 500 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", values);
        setSubmitStatus("success");
        resetForm();

        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We'd Love to Hear From You
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Have questions, feedback, or need assistance? Reach out to us and
              we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                  {info.action && (
                    <a
                      href={info.action}
                      className="inline-block mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      Get in Touch →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill in the form below and we'll get back to you within 24
                hours.
              </p>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-fade-in">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900">
                      Message Sent!
                    </h4>
                    <p className="text-sm text-green-700">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-fade-in">
                  <ExclamationCircleIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900">
                      Something Went Wrong
                    </h4>
                    <p className="text-sm text-red-700">
                      Please try again or contact us directly via phone or
                      email.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={formik.handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                        formik.touched.name && formik.errors.name
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <p className="mt-1 text-sm text-red-600">
                      {formik.errors.name}
                    </p>
                  ) : null}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                        formik.touched.email && formik.errors.email
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <p className="mt-1 text-sm text-red-600">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DocumentTextIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                        formik.touched.subject && formik.errors.subject
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="How can we help?"
                    />
                  </div>
                  {formik.touched.subject && formik.errors.subject ? (
                    <p className="mt-1 text-sm text-red-600">
                      {formik.errors.subject}
                    </p>
                  ) : null}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none ${
                      formik.touched.message && formik.errors.message
                        ? "border-red-300 focus:ring-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  <div className="flex justify-between items-center mt-1">
                    {formik.touched.message && formik.errors.message ? (
                      <p className="text-sm text-red-600">
                        {formik.errors.message}
                      </p>
                    ) : (
                      <span className="text-sm text-gray-400">
                        Minimum 10 characters
                      </span>
                    )}
                    <span
                      className={`text-sm ${
                        formik.values.message.length > 450
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      {formik.values.message.length}/500
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formik.isValid || !formik.dirty}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Form Status Indicator */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>* Required fields</span>
                  {formik.dirty && formik.isValid && (
                    <span className="text-green-600 flex items-center gap-1">
                      <CheckCircleIcon className="w-4 h-4" />
                      Ready to send
                    </span>
                  )}
                </div>
              </form>
            </div>

            {/* Right Column - Map & FAQ */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon className="w-12 h-12 text-indigo-600 mx-auto mb-2" />
                    <p className="text-gray-600">
                      Find us at 123 Commerce Street
                    </p>
                    <p className="text-sm text-gray-500">New York, NY 10001</p>
                    <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                      Open in Google Maps
                    </button>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <button className="flex items-center justify-between w-full text-left">
                      <span className="font-medium text-gray-800">
                        What are your business hours?
                      </span>
                      <span className="text-indigo-600">+</span>
                    </button>
                    <p className="mt-2 text-sm text-gray-600 hidden">
                      Monday-Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <button className="flex items-center justify-between w-full text-left">
                      <span className="font-medium text-gray-800">
                        How long does shipping take?
                      </span>
                      <span className="text-indigo-600">+</span>
                    </button>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <button className="flex items-center justify-between w-full text-left">
                      <span className="font-medium text-gray-800">
                        Do you offer international shipping?
                      </span>
                      <span className="text-indigo-600">+</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center justify-around">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600">Secure Payments</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <ClockIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">24/7 Support</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-xs text-gray-600">Live Chat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Index;
