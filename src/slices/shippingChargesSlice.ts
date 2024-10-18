import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShippingChargesState {
  amount: number;
}

const initialState: ShippingChargesState = {
  amount: 0,
};

const shippingChargesSlice = createSlice({
  name: "shippingCharges",
  initialState,
  reducers: {
    setShippingCharges: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

export const { setShippingCharges } = shippingChargesSlice.actions;
export default shippingChargesSlice.reducer;
