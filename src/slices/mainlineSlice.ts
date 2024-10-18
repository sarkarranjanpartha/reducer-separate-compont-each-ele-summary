import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainlineState {
  selectedOption: string;
}

const initialState: MainlineState = {
  selectedOption: "",
};

const mainlineSlice = createSlice({
  name: "mainline",
  initialState,
  reducers: {
    setMainlineOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setMainlineOption } = mainlineSlice.actions;
export default mainlineSlice.reducer;
