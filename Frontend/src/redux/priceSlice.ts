import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Price {
  symbol: string;
  price: number;
  timestamp: string;
}

export interface PriceState {
  prices: Price[];
  loading: boolean;
  error: string | null;
}

const initialState: PriceState = {
  prices: [],
  loading: false,
  error: null,
};

export const fetchPrices:any = createAsyncThunk(
  'prices/fetchPrices',
  async (symbol: string) => {
    const response = await axios.get(`http://localhost:5000/api/prices?symbol=${symbol}`);
    return response.data;
  }
);

const priceSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPrices.fulfilled, (state, action) => {
        state.prices = action.payload;
        state.loading = false;
      })
      .addCase(fetchPrices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch prices';
      });
  },
});

export default priceSlice.reducer;
