import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export type Question4State= number | null | Array<number>

const question4Slice = createSlice({
  name: "question4",
  initialState: null as Question4State ,
  reducers: {
    selectInvestment: (state, action:PayloadAction<number>) => (state = action.payload),
  },
});

export const { selectInvestment } = question4Slice.actions;
export default question4Slice.reducer;
