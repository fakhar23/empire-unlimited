import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Question1ptions } from "../components/Questions/Question1.component";

export type Question1State= Question1ptions | null

const question1Slice = createSlice({
  name: "question1",
  initialState: null as Question1State,
  reducers: {
    selectReason: (state, action:PayloadAction<string>) => (state = action.payload),
  },
});

export const { selectReason } = question1Slice.actions;
export default question1Slice.reducer;
