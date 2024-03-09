import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import bagSlice from "./bagSlice";
import wishListSlice from "./wishList";

const myntraStore = configureStore({
  reducer : {
    items : itemSlice.reducer,
    bags : bagSlice.reducer,
    wishlist : wishListSlice.reducer
  }
});

export default myntraStore;