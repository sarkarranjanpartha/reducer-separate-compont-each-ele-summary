import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExtraChargesState {
  selectedOptions: string[];
}

const initialState: ExtraChargesState = {
  selectedOptions: [],
};

const extraChargesSlice = createSlice({
  name: "extraCharges",
  initialState,
  reducers: {
    toggleExtraCharge: (state, action: PayloadAction<string>) => {
      const index = state.selectedOptions.indexOf(action.payload);
      if (index === -1) {
        state.selectedOptions.push(action.payload);
      } else {
        state.selectedOptions.splice(index, 1);
      }
    },
  },
});

export const { toggleExtraCharge } = extraChargesSlice.actions;
export default extraChargesSlice.reducer;
