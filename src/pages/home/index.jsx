import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Index = () => {
  const categories = [
    { name: "Men's Fashion", icon: "👔", color: "bg-blue-500" },
    { name: "Women's Fashion", icon: "👗", color: "bg-pink-500" },
    { name: "Accessories", icon: "⌚", color: "bg-purple-500" },
    { name: "Beauty", icon: "💄", color: "bg-rose-500" },
    { name: "Footwear", icon: "👟", color: "bg-green-500" },
    { name: "Watches", icon: "🕐", color: "bg-yellow-500" },
  ];

  const featuredProducts = [
    {
      id: 1,
      title: "Mens Winter Leathers Jackets",
      price: 48.0,
      originalPrice: 75.0,
      rating: 4.5,
      image: "https://picsum.photos/seed/jacket/300/300",
      category: "Jacket",
      sale: true,
    },
    {
      id: 2,
      title: "Pure Garment Dyed Cotton Shirt",
      price: 45.0,
      originalPrice: 56.0,
      rating: 4.0,
      image: "https://picsum.photos/seed/shirt/300/300",
      category: "Shirt",
      sale: false,
    },
    {
      id: 3,
      title: "MEN Yarn Fleece Full-Zip Jacket",
      price: 58.0,
      originalPrice: 65.0,
      rating: 4.8,
      image: "https://picsum.photos/seed/fleece/300/300",
      category: "Jacket",
      sale: true,
    },
    {
      id: 4,
      title: "Black Floral Wrap Midi Skirt",
      price: 25.0,
      originalPrice: 35.0,
      rating: 4.2,
      image: "https://picsum.photos/seed/skirt/300/300",
      category: "Skirt",
      sale: false,
    },
    {
      id: 5,
      title: "Casual Men's Brown Leather Pouch",
      price: 99.0,
      originalPrice: 105.0,
      rating: 4.6,
      image: "https://picsum.photos/seed/pouch/300/300",
      category: "Casual",
      sale: false,
    },
    {
      id: 6,
      title: "Pocket Watch Leather Plus",
      price: 150.0,
      originalPrice: 170.0,
      rating: 4.3,
      image: "https://picsum.photos/seed/watch/300/300",
      category: "Watches",
      sale: false,
    },
    {
      id: 7,
      title: "Smart Watche Vital Plus",
      price: 100.0,
      originalPrice: 120.0,
      rating: 4.7,
      image: "https://picsum.photos/seed/smartwatch/300/300",
      category: "Watches",
      sale: true,
    },
    {
      id: 8,
      title: "Womens PartyWear Shoes",
      price: 25.0,
      originalPrice: 30.0,
      rating: 4.1,
      image: "https://picsum.photos/seed/shoes/300/300",
      category: "Partywear",
      sale: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                🎉 New Collection 2026
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover Your <br />
                <span className="text-yellow-300">Perfect Style</span>
              </h1>
              <p className="text-lg text-white/80 max-w-lg">
                Shop the latest trends in fashion, accessories, and more.
                Premium quality products at unbeatable prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/collection"
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                >
                  Shop Now
                </Link>
                <Link
                  to="/categories"
                  className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
                >
                  Explore Categories
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 blur-2xl rounded-full"></div>
                <img
                  src="https://picsum.photos/seed/shopping/500/500"
                  alt="Shopping"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Shop by Category
            </h2>
            <p className="mt-2 text-gray-600">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name.toLowerCase().replace(/\s/g, "-")}`}
                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className={`${category.color} p-6 text-center text-white`}>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-sm font-semibold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Products
              </h2>
              <p className="mt-1 text-gray-600">Handpicked just for you</p>
            </div>
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.sale && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      SALE
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 min-h-[40px]">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1 mt-1.5">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.round(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-200"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.rating})
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  <Link
                    to="/collection"
                    className="w-full mt-3 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Summer Sale Up to 50% Off</h2>
          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Don't miss out on our biggest sale of the year. Limited time offer!
          </p>
          <Link
            to="/sale"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Shop the Sale
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Secure Payment</h3>
              <p className="text-sm text-gray-500 mt-1">
                100% secure transactions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-sm text-gray-500 mt-1">On orders over $50</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
              <p className="text-sm text-gray-500 mt-1">
                Delivery within 3-5 days
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Easy Returns</h3>
              <p className="text-sm text-gray-500 mt-1">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
