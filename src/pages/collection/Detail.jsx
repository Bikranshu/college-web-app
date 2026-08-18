import React, { useState } from "react";
import { useParams } from "react-router";
import {
  StarIcon,
  ShoppingCartIcon,
  HeartIcon,
  ShareIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  CubeIcon,
  CheckCircleIcon,
  MinusIcon,
  PlusIcon,
  CalendarIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";

import { useGetProductByIdQuery } from "./productApi";

const Detail = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(productId);

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Set initial selected image when product loads
  React.useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.images[0]);
    } else if (product?.thumbnail) {
      setSelectedImage(product.thumbnail);
    }
  }, [product]);

  // Loading State
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading product...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg">
          <ExclamationTriangleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">
            Failed to load product details. Please try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // No Product Found
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600">
            The product you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  // Calculate average rating
  const averageRating =
    product.rating ||
    product.reviews?.reduce((acc, rev) => acc + rev.rating, 0) /
      product.reviews?.length ||
    0;

  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 >= 0.5;

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  // Calculate discounted price
  const discountedPrice =
    product.price * (1 - (product.discountPercentage || 0) / 100);

  // Render stars
  const renderStars = (rating, size = 5) => {
    const stars = [];
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < full) {
        stars.push(
          <StarIconSolid
            key={i}
            className={`w-${size} h-${size} text-yellow-400`}
          />,
        );
      } else if (i === full && hasHalf) {
        stars.push(
          <StarIcon
            key={i}
            className={`w-${size} h-${size} text-yellow-400 fill-yellow-400/50`}
          />,
        );
      } else {
        stars.push(
          <StarIcon key={i} className={`w-${size} h-${size} text-gray-300`} />,
        );
      }
    }
    return stars;
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log("Adding to cart:", { product, quantity });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <img
                src={selectedImage || product.thumbnail}
                alt={product.title}
                className="w-full h-[400px] object-contain p-4"
                onError={(e) => {
                  e.target.src =
                    product.thumbnail || "https://via.placeholder.com/400";
                }}
              />
            </div>

            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`border-2 rounded-lg overflow-hidden transition-all ${
                      selectedImage === img
                        ? "border-blue-600 shadow-md ring-2 ring-blue-600 ring-offset-2"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} - View ${index + 1}`}
                      className="w-full h-20 object-contain p-2"
                      onError={(e) => {
                        e.target.src =
                          product.thumbnail || "https://via.placeholder.com/80";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Brand & Tags */}
            <div className="flex items-center gap-2 flex-wrap">
              {product.brand && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  {product.brand}
                </span>
              )}
              {product.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                >
                  #{tag}
                </span>
              ))}
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  product.availabilityStatus === "In Stock"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.availabilityStatus ||
                  (product.stock > 0 ? "In Stock" : "Out of Stock")}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {renderStars(averageRating)}
                <span className="text-sm text-gray-600 ml-2">
                  ({product.reviews?.length || 0} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              {product.discountPercentage > 0 ? (
                <>
                  <span className="text-3xl font-bold text-red-600">
                    {formatPrice(discountedPrice)}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.price)}
                  </span>
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded">
                    -{product.discountPercentage}% OFF
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            {/* Stock Info */}
            <div className="flex items-center gap-2 text-sm">
              <CubeIcon className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">
                Stock: {product.stock} units available
              </span>
              {product.minimumOrderQuantity && (
                <span className="text-gray-500">
                  (Min. Order: {product.minimumOrderQuantity})
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-50 transition-colors"
                  disabled={quantity <= 1}
                >
                  <MinusIcon className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 min-w-[50px] text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  className="px-4 py-2 hover:bg-gray-50 transition-colors"
                  disabled={quantity >= product.stock}
                >
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                  product.stock === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                <ShoppingCartIcon className="w-5 h-5" />
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {isWishlisted ? (
                  <HeartIconSolid className="w-5 h-5 text-red-600" />
                ) : (
                  <HeartIcon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {/* Share Button */}
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: product.title,
                      text: product.description,
                      url: window.location.href,
                    });
                  }
                }}
                className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ShareIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Shipping & Warranty Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
              {product.shippingInformation && (
                <div className="flex items-center gap-3">
                  <TruckIcon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Shipping
                    </p>
                    <p className="text-xs text-gray-500">
                      {product.shippingInformation}
                    </p>
                  </div>
                </div>
              )}
              {product.warrantyInformation && (
                <div className="flex items-center gap-3">
                  <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Warranty
                    </p>
                    <p className="text-xs text-gray-500">
                      {product.warrantyInformation}
                    </p>
                  </div>
                </div>
              )}
              {product.returnPolicy && (
                <div className="flex items-center gap-3">
                  <ArrowPathIcon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Returns</p>
                    <p className="text-xs text-gray-500">
                      {product.returnPolicy}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Product Details Table */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {product.sku && (
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-2 font-medium text-gray-600 bg-gray-50 w-1/3">
                        SKU
                      </td>
                      <td className="px-4 py-2 text-gray-900">{product.sku}</td>
                    </tr>
                  )}
                  {product.weight && (
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-2 font-medium text-gray-600 bg-gray-50">
                        Weight
                      </td>
                      <td className="px-4 py-2 text-gray-900">
                        {product.weight} g
                      </td>
                    </tr>
                  )}
                  {product.dimensions && (
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-2 font-medium text-gray-600 bg-gray-50">
                        Dimensions
                      </td>
                      <td className="px-4 py-2 text-gray-900">
                        {product.dimensions.width} × {product.dimensions.height}{" "}
                        × {product.dimensions.depth} cm
                      </td>
                    </tr>
                  )}
                  {product.category && (
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-600 bg-gray-50">
                        Category
                      </td>
                      <td className="px-4 py-2 text-gray-900">
                        {product.category.charAt(0).toUpperCase() +
                          product.category.slice(1)}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "description"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "reviews"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Reviews ({product.reviews?.length || 0})
              </button>
              {product.returnPolicy && (
                <button
                  onClick={() => setActiveTab("returns")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === "returns"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Returns Policy
                </button>
              )}
            </nav>
          </div>

          <div className="py-6">
            {activeTab === "description" && (
              <div className="max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                {product.meta && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-gray-500" />
                    <p className="text-sm text-gray-500">
                      Added:{" "}
                      {new Date(product.meta.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                {product.reviews?.length > 0 ? (
                  product.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-6 last:border-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                            {review.reviewerName?.charAt(0) || "U"}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {review.reviewerName}
                            </p>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <CalendarIcon className="w-3 h-3" />
                              {new Date(review.date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                },
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {renderStars(review.rating, 4)}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No reviews yet.
                  </p>
                )}
              </div>
            )}

            {activeTab === "returns" && (
              <div className="max-w-none">
                <h4 className="text-lg font-semibold text-gray-900">
                  Return Policy
                </h4>
                <p className="text-gray-600 mt-2">{product.returnPolicy}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircleIcon className="w-5 h-5 text-green-600" />
                  <span>Easy returns within the specified period</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Placeholder */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Placeholder cards - replace with actual related products */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-4 animate-pulse"
              >
                <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
