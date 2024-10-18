import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccessoryChargesState {
  selectedOptions: string[];
}

const initialState: AccessoryChargesState = {
  selectedOptions: [],
};

const accessoryChargesSlice = createSlice({
  name: "accessoryCharges",
  initialState,
  reducers: {
    toggleAccessoryCharge: (state, action: PayloadAction<string>) => {
      const index = state.selectedOptions.indexOf(action.payload);
      if (index === -1) {
        state.selectedOptions.push(action.payload);
      } else {
        state.selectedOptions.splice(index, 1);
      }
    },
  },
});

export const { toggleAccessoryCharge } = accessoryChargesSlice.actions;
export default accessoryChargesSlice.reducer;
