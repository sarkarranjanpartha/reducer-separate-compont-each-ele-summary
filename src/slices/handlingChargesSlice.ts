import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HandlingChargesState {
  amount: number;
}

const initialState: HandlingChargesState = {
  amount: 0,
};

const handlingChargesSlice = createSlice({
  name: "handlingCharges",
  initialState,
  reducers: {
    setHandlingCharges: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

export const { setHandlingCharges } = handlingChargesSlice.actions;
export default handlingChargesSlice.reducer;
