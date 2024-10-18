import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpsellState {
  selectedOption: string;
}

const initialState: UpsellState = {
  selectedOption: "",
};

const upsellSlice = createSlice({
  name: "upsell",
  initialState,
  reducers: {
    setUpsellOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setUpsellOption } = upsellSlice.actions;
export default upsellSlice.reducer;
