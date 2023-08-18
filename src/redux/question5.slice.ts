import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export type Question5State= string | null

const question5Slice = createSlice({
  name: "question5",
  initialState: null as Question5State ,
  reducers: {
    setEmail:(_, action:PayloadAction<string>) => action.payload
},
});

export const { setEmail } = question5Slice.actions;
export default question5Slice.reducer;
