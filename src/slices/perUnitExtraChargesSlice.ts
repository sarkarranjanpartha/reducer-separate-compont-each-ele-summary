import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PerUnitExtraChargesState {
  selectedOptions: string[];
}

const initialState: PerUnitExtraChargesState = {
  selectedOptions: [],
};

const perUnitExtraChargesSlice = createSlice({
  name: "perUnitExtraCharges",
  initialState,
  reducers: {
    togglePerUnitExtraCharge: (state, action: PayloadAction<string>) => {
      const index = state.selectedOptions.indexOf(action.payload);
      if (index === -1) {
        state.selectedOptions.push(action.payload);
      } else {
        state.selectedOptions.splice(index, 1);
      }
    },
  },
});

export const { togglePerUnitExtraCharge } = perUnitExtraChargesSlice.actions;
export default perUnitExtraChargesSlice.reducer;
