import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { name: 'BNB', name1: 'BNBUSDT', change: 6.61, icon: 'fire-flame-simple' },
  { name: 'BTC', name1: 'BTCUSDT', change: 3.40, icon: 'fire-flame-simple' },
  { name: 'ETH', name1: 'ETHUSDT', change: -4.93, icon: 'fire-flame-simple' },
  { name: 'PEPE', name1: 'PEPEUSDT', change: 16.62 },
  { name: 'SOL', name1: 'SOLUSDT', change: 12.67 },
  { name: 'BOME', name1: 'BOMEUSDT', change: 10.87 }
];
const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    updateCoin: (state, action) => {
      const { index, name, name1 } = action.payload;
      state[index] = { ...state[index], name, name1 };
    },
  },
});

export const { updateCoin } = priceSlice.actions;

export default priceSlice.reducer;
