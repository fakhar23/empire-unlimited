import React from "react";

import { quizSteps, QuizStep } from "../../App";

interface Props {
  activeStep: QuizStep;
  setActiveStep: React.Dispatch<React.SetStateAction<QuizStep>>;
  directionHandler: (direction: "Next" | "Back") => void;
}

const BreadCrums: React.FC<Props> = ({ activeStep, setActiveStep, directionHandler }) => {
  const Iscompleted = (someStep: QuizStep) => {
    const indexOfActiveSetp = quizSteps.findIndex((step) => activeStep === step);
    const indexOfSomeSetp = quizSteps.findIndex((step) => someStep === step);
    return indexOfSomeSetp < indexOfActiveSetp;
  };

  const quizStepsBreadCrum = [...quizSteps].slice(0, -1);

  const getTextColor = (step: QuizStep) =>
    activeStep === step ? "white" : Iscompleted(step) ? "white" : "#a7a7a7";

  const breadCrumClickHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {
    if (Iscompleted(e.currentTarget.innerText as QuizStep)) {
      directionHandler("Back");
      setActiveStep(e.currentTarget.innerText as QuizStep);
    }
  };

  return (
    <div className="bg-[#282828] flex justify-evenly items-center text-[#A7A7A7] font-IstokWeb text-24 px-3">
      {quizStepsBreadCrum.map((step, index) => (
        <React.Fragment key={index}>
          <p
            style={{ color: getTextColor(step) }}
            onClick={breadCrumClickHandler}
            className={"font-istok" + (Iscompleted(step) ? " cursor-pointer" : "")}
          >
            {step}
          </p>
          {index < 3 && <BreadCrumSVG fill={Iscompleted(step) ? "white" : ""} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrums;

const BreadCrumSVG = ({ fill }: { fill?: string }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.2176 10.5L15.7501 12.9675L23.7651 21L15.7501 29.0325L18.2176 31.5L28.7176 21L18.2176 10.5Z"
      fill={fill || "#A7A7A7"}
    />
  </svg>
);
