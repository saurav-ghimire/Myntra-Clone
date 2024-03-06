import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer : {
    items : itemSlice.reducer,
    bags : bagSlice.reducer
  }
});

export default myntraStore;