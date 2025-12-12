import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:0,
};  


const addtoCart = createSlice({
  name: "cart",
  initialState, 
    reducers: { 
    addItem: (state) => {
     value: state.value += 1;
    },
    removeItem: (state) => {
     value: state.value > 0 ?state.value -= 1 : state.value =0;
    },
     clearAllItem: (state) => {
     value: state.value =0;
    },


  },
});
export const { addItem, removeItem, clearAllItem } = addtoCart.actions;
export default addtoCart.reducer;