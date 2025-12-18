import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  item:localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};  


const addtoCart = createSlice({
  name: "cart",
  initialState, 
    reducers: { 
    addItem: (state, action) => {
      state.item.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.item));
 
    
    },
    removeItem: (state, action) => {
     const removeItem = state.item.filter((item) => item.id !== action.payload.id);
      state.item=removeItem;
      localStorage.setItem("cartItems", JSON.stringify(state.item));
    },
     clearAllItem: (state, action) => {
      state.item= []
    },


  },
});




export const { addItem, removeItem, clearAllItem } = addtoCart.actions;
export default addtoCart.reducer;