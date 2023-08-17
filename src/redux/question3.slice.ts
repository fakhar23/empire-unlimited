import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export type Question3State= string | null

const question3Slice = createSlice({
  name: "question3",
  initialState: null as Question3State ,
  reducers: {
    setWeeklyTime:(state, action:PayloadAction<string>) => (state = action.payload)
  },
});

export const { setWeeklyTime } = question3Slice.actions;
export default question3Slice.reducer;
