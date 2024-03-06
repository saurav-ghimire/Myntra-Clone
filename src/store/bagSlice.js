import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: 'bags',
  initialState: [],
  reducers : {
    addToCart: (state, action) => {
      return state = [...state, action.payload]
    },
    removeFromBag : (state, action) => {
      return state.filter(itemId => itemId !== action.payload);
  
    }
  }
});

export const bagActions = bagSlice.actions;
export default bagSlice;
