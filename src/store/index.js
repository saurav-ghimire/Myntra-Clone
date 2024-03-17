import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import bagSlice from "./bagSlice";
import wishListSlice from "./wishList";
import FloatingCart from "./FloatingCart";

const myntraStore = configureStore({
  reducer : {
    items : itemSlice.reducer,
    bags : bagSlice.reducer,
    wishlist : wishListSlice.reducer,
    floating : FloatingCart.reducer
  }
});

export default myntraStore;