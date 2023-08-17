import "./App.scss";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import BreadCrums from "./components/BreadCrums/BreadCrums";
import Header from "./components/Header/Header";
import Questions from "./components/Questions/Questions";
import { useState } from "react";

export type QuizStep = "Online Earning" | "Earning Income" | "Spending Time" | "Investment";
export const quizSteps: QuizStep[] = [
  "Online Earning",
  "Earning Income",
  "Spending Time",
  "Investment",
];

function App() {
  const [activeStep, setActiveStep] = useState<QuizStep>("Online Earning");
  console.log("activeStep: ", activeStep);
  return (
    <BrowserRouter>
      <Header />
      <BreadCrums activeStep={activeStep} setActiveStep={setActiveStep} />
      <Questions activeStep={activeStep} setActiveStep={setActiveStep} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
