import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FreeQuantityState {
  quantity: number;
}

const initialState: FreeQuantityState = {
  quantity: 0,
};

const freeQuantitySlice = createSlice({
  name: "freeQuantity",
  initialState,
  reducers: {
    setFreeQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
  },
});

export const { setFreeQuantity } = freeQuantitySlice.actions;
export default freeQuantitySlice.reducer;
