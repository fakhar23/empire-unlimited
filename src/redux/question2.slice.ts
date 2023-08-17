import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export type Question2State= number | null | Array<number>

const question2Slice = createSlice({
  name: "question2",
  initialState: null as Question2State ,
  reducers: {
    selectIncomeGoal: (state, action:PayloadAction<number>) => (state = action.payload),
  },
});

export const { selectIncomeGoal } = question2Slice.actions;
export default question2Slice.reducer;
