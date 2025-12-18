import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    filteredItems: [],   // 🔥 important
    status: "idle",
    error: null,
    searchTerm: "",
  },
 reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;

      const term = action.payload.toLowerCase();

      state.filteredItems = state.items.filter(
        (item) =>
          item.title.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term)
      );
    },
    clearSearch: (state) => {
      state.searchTerm = "";
      state.filteredItems = state.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.filteredItems = action.payload; // show all initially
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm, clearSearch } = ProductsSlice.actions;
export default ProductsSlice.reducer;
