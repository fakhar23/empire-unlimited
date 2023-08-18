import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export type DirectionState= boolean | null

const directionSlice = createSlice({
  name: "direction",
  initialState: null as DirectionState ,
  reducers: {
    setDirection:(_, action:PayloadAction<boolean>) => action.payload
    // setDirection:(_, action:PayloadAction<boolean>) => true
},
});

export const { setDirection } = directionSlice.actions;
export default directionSlice.reducer;
