/* eslint-disable prefer-const */
/* eslint-disable react-refresh/only-export-components */
import "./App.scss";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreadCrums from "./components/BreadCrums/BreadCrums";
import Header from "./components/Header/Header";
import Questions from "./components/Questions/Questions";
import React, { useState } from "react";
import Results from "./containers/Results";
import { flushSync } from "react-dom";

export type QuizStep =
  | "Online Earning"
  | "Earning Income"
  | "Spending Time"
  | "Investment"
  | "Email";

export const quizSteps: QuizStep[] = [
  "Online Earning",
  "Earning Income",
  "Spending Time",
  "Investment",
  "Email",
];

function App() {
  const [activeStep, setActiveStep] = useState<QuizStep>("Online Earning");
  const [reverseDirection, setReverseDirection] = useState<boolean>(false);

  const directionHandler = (buttonName: "Next" | "Back"): void => {
    flushSync(() => {
      setReverseDirection(buttonName === "Next" ? false : true);
    });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Header />
              <BreadCrums
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                directionHandler={directionHandler}
              />
              <Questions
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                directionHandler={directionHandler}
                reverseDirection={reverseDirection}
              />
              <Footer />
            </React.Fragment>
          }
        />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
