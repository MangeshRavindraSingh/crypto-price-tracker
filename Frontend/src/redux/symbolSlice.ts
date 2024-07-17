import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SymbolState {
  symbol: string;
}

const initialState: SymbolState = {
  symbol: 'bitcoin',
};

const symbolSlice = createSlice({
  name: 'symbol',
  initialState,
  reducers: {
    setSymbol: (state, action: PayloadAction<string>) => {
      state.symbol = action.payload;
    },
  },
});

export const { setSymbol } = symbolSlice.actions;

export default symbolSlice.reducer;
