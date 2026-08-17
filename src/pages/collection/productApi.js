import { apiSlice } from "../../api/apiSlice";

/**
 * Number of products to fetch per page
 * @constant {number}
 */
const PAGE_SIZE = 10;

/**
 * Product API endpoints injected into the base API slice
 * Handles product listing with pagination and single product retrieval
 */
export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
     /**
     * Query for fetching paginated products
     * Supports traditional pagination with page and limit parameters
     */
    getProducts: builder.query({
      query: ({ page = 1, limit = PAGE_SIZE }) => ({
        url: "/products",
        params: {
          limit: limit,
          skip: (page - 1) * limit,
        },
      }),
      // Transform response to include pagination metadata
      transformResponse: (response, meta, arg) => {
        return {
          products: response.products,
          total: response.total,
          currentPage: arg.page || 1,
          totalPages: Math.ceil(response.total / (arg.limit || PAGE_SIZE)),
          limit: arg.limit || PAGE_SIZE,
        };
      },
    }),

    /**
     * Query for fetching a single product by ID
     * @param {number} id - Product ID
     * @returns {Object} Fetch configuration
     */
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      /**
       * Cache tags for automatic cache invalidation
       * @param {*} _result - Query result (unused)
       * @param {*} _error - Error object (unused)
       * @param {number} id - Product ID
       * @returns {Array} Cache tags
       */
      providesTags: (_result, _error, id) => [{ type: "Products", id }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;