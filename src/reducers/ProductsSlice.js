import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  'products',
  async () => {     
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } 

);
const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState: {       

    items: [],
    status: undefined,
    error: null,    
    },
    // reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {    
            state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {  
            state.status = 'succeeded';
            state.items = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {  
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default ProductsSlice.reducer;