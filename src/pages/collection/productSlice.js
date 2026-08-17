import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial state for product management
 * @type {Object}
 * @property {number|null} selectedProductId - Currently selected product ID
 * @property {string} search - Search query string for filtering products
 */
const initialState = {
  selectedProductId: null,
  search: "",
};

/**
 * Product slice for managing product-related state
 * Handles product selection and search/filtering
 */
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    /**
     * Set the selected product ID
     * @param {Object} state - Current state
     * @param {Object} action - Action with payload
     * @param {number|null} action.payload - Product ID to select or null to deselect
     */
    setSelectedProduct: (state, action) => {
      state.selectedProductId = action.payload;
    },

    /**
     * Set the search query for filtering products
     * @param {Object} state - Current state
     * @param {Object} action - Action with payload
     * @param {string} action.payload - Search query string
     */
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    /**
     * Clear all filters and reset to default state
     * @param {Object} state - Current state
     */
    clearFilters: (state) => {
      state.search = "";
    },
  },
});

export const { setSelectedProduct, setSearch, clearFilters } =
  productSlice.actions;

export default productSlice.reducer;