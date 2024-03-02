import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
name: 'items',
initialState: [],
reducers : {
  addInitialItems : (store, action) => {
    return console.log('i am herre');
  }
}
})

export const itemsActions = itemSlice.actions;
export default itemSlice;