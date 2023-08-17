import { configureStore } from "@reduxjs/toolkit";
import question1Reducer from './question1.slice';
import question2Reducer from './question2.slice';
import question3Reducer from './question3.slice';
import question4Reducer from './question4.slice';

export type RootState ={
  question1: ReturnType<typeof question1Reducer>;
  question2: ReturnType<typeof question2Reducer>;
  question3: ReturnType<typeof question3Reducer>;
  question4: ReturnType<typeof question4Reducer>;
}

export const store = configureStore({
  reducer: {
    question1: question1Reducer,
    question2: question2Reducer,
    question3: question3Reducer,
    question4: question4Reducer
  },
});
