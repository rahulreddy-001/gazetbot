import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  categories: [
    "mobiles_tablets",
    "laptops_computers",
    "televisions",
    "kitchen_appliances",
    "self_care",
    "appliances",
  ],
  subCategories: {
    mobiles_tablets: [
      "mobiles",
      "tablets",
      "landline_phones",
      "mobile_accessories",
      "tablet_accessories",
      "mobile_covers",
    ],
    laptops_computers: [
      "laptops",
      "desktop_pcs",
      "printers_scanners",
      "monitors",
      "computer_components",
      "computer_accessories",
      "routers_modems",
      "network_components",
      "data_storage",
      "software",
    ],
    televisions: [
      "televisions",
      "home_audio_speakers",
      "streaming_devices",
      "dth_services",

      "tv_video_accessories",
    ],
    kitchen_appliances: [
      "air_conditioners",
      "refrigerators",
      "washing_machines",
      "kitchen_appliances",
      "home_appliances",
    ],
    self_care: [
      "mens_grooming",
      "womens_grooming",
      "health_care_devices",
      "personal_care_appliances",
    ],
    appliances: [
      "air_coolers",
      "air_purifiers",
      "fans",

      "inverter_battery",
      "voltage_stabilizers",
      "water_purifiers",
      "geysers",
      "solar",
    ],
  },
  error: "",
};

const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
  reducers: {},
});

export { fetchCategories };
export default categorySlice.reducer;
