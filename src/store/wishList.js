import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
name : 'wish',
initialState : [],
reducers : {
  addWishList : (store, action) => {
    return store = [...store, action.payload]
  },
  removeWishList : (state, action) => {
    return state.filter(itemId => itemId !== action.payload);
  }
}
});

export const wishListActions = wishListSlice.actions;
export default wishListSlice;