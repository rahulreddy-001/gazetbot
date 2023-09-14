import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import wishlistReducer from "./wishlistSlice";
import topProductsReducer from "./topProductSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    wishlist: wishlistReducer,
    topProducts: topProductsReducer,
  },
});

export default store;
