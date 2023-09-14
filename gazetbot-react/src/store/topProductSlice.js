import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [
    {
      id: 1,
      title: "Top Mobiles",
      products: [
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
      ],
    },
    {
      id: 1,
      title: "Top Tablets",
      products: [
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
      ],
    },
    {
      id: 1,
      title: "Top PC's",
      products: [
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
      ],
    },
    {
      id: 1,
      title: "Top TV's",
      products: [
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
      ],
    },
    {
      id: 1,
      title: "Top Appliances",
      products: [
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
        {
          id: 1,
          name: "Samsung Galaxy M31",
          price: "16,499",
        },
      ],
    },
  ],
  error: "",
};

const fetchTopProducts = createAsyncThunk(
  "topProducts/fetchTopProducts",
  async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const topProductsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTopProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTopProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchTopProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { fetchTopProducts };
export default topProductsSlice.reducer;
