import { createSlice } from "@reduxjs/toolkit";

const FloatingCartSlice = createSlice({
  name : 'float',
  initialState : false,
  reducers : {
    toggleFloat : (state, action) => {      
      return state = !state;

    }
  }
})

export const FloatingCartActions = FloatingCartSlice.actions;
export default FloatingCartSlice;