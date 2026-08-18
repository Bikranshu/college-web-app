import React from "react";
import {
  UsersIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  StarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const Index = () => {
  const stats = [
    { label: "Happy Customers", value: "50K+", icon: UsersIcon },
    { label: "Countries Served", value: "120+", icon: GlobeAltIcon },
    { label: "Products Sold", value: "1M+", icon: RocketLaunchIcon },
    { label: "Satisfaction Rate", value: "98%", icon: StarIcon },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "We never compromise on quality. Every product is carefully curated to meet our high standards.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Innovation",
      description:
        "We continuously innovate to bring you the latest and greatest products on the market.",
      icon: LightBulbIcon,
    },
    {
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do. Your satisfaction is our top priority.",
      icon: HeartIcon,
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years of experience in e-commerce",
      image:
        "https://ui-avatars.com/api/?name=Sarah+Johnson&size=128&background=6366f1&color=fff",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech visionary with a passion for innovation",
      image:
        "https://ui-avatars.com/api/?name=Michael+Chen&size=128&background=8b5cf6&color=fff",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Creating beautiful, user-centric experiences",
      image:
        "https://ui-avatars.com/api/?name=Emily+Rodriguez&size=128&background=ec4899&color=fff",
    },
    {
      name: "David Kim",
      role: "Customer Success",
      bio: "Ensuring every customer has a great experience",
      image:
        "https://ui-avatars.com/api/?name=David+Kim&size=128&background=14b8a6&color=fff",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-24 max-w-7xl">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <UsersIcon className="w-5 h-5" />
              <span className="text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're on a Mission to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
                Transform E-commerce
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Building the future of online shopping with quality products,
              exceptional service, and a commitment to customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120H360C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                From Dream to Reality
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, our journey began with a simple idea: make
                  quality products accessible to everyone. What started as a
                  small team of passionate individuals has grown into a global
                  community of thousands of satisfied customers.
                </p>
                <p>
                  We believe that shopping should be more than just a
                  transaction. It should be an experience—one that's seamless,
                  enjoyable, and trustworthy. That's why we've built our
                  platform around the values of quality, transparency, and
                  customer care.
                </p>
                <p>
                  Today, we're proud to serve customers in over 120 countries,
                  offering a curated selection of products that meet our high
                  standards of quality and sustainability.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl h-48"></div>
                  <div className="bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl h-48"></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl h-48"></div>
                  <div className="bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl h-48"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <StarIcon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Trusted by Thousands
                      </div>
                      <div className="text-sm text-gray-500">
                        4.9/5 average rating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              What Drives Us Every Day
            </h2>
            <p className="text-gray-600">
              These core values guide everything we do, from product selection
              to customer service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Meet the People Behind the Magic
            </h2>
            <p className="text-gray-600">
              Passionate individuals dedicated to making your shopping
              experience extraordinary.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-sm font-medium text-indigo-600 mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover why we're the
            trusted choice for quality products.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
              Start Shopping
            </button>
            <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
