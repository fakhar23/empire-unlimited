import React from "react";
// import BreadCrum from "../../assets/imges/BreadCrum.svg";

import { quizSteps, QuizStep } from "../../App";

interface Props {
  activeStep: QuizStep;
  setActiveStep: React.Dispatch<React.SetStateAction<QuizStep>>;
}

export default function BreadCrums({ activeStep, setActiveStep }: Props) {
  const Iscompleted = (someStep: QuizStep) => {
    const indexOfActiveSetp = quizSteps.findIndex((step) => activeStep === step);
    const indexOfSomeSetp = quizSteps.findIndex((step) => someStep === step);
    return indexOfSomeSetp < indexOfActiveSetp;
  };

  const getTextColor = (step: QuizStep) =>
    activeStep === step ? "white" : Iscompleted(step) ? "white" : "#a7a7a7";

  const breadCrumClickHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {
    if (Iscompleted(e.currentTarget.innerText as QuizStep))
      setActiveStep(e.currentTarget.innerText as QuizStep);
  };

  return (
    <div className="bg-[#282828] flex justify-evenly items-center text-[#A7A7A7] font-IstokWeb text-24">
      {quizSteps.map((step, index) => (
        <React.Fragment key={index}>
          <p
            style={{ color: getTextColor(step) }}
            onClick={breadCrumClickHandler}
            className={Iscompleted(step) ? "cursor-pointer" : ""}
          >
            {step}
          </p>
          {index !== quizSteps.length - 1 && (
            <BreadCrum fill={Iscompleted(step) ? "white" : undefined} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

const BreadCrum = ({ fill }: { fill?: string | false }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.2176 10.5L15.7501 12.9675L23.7651 21L15.7501 29.0325L18.2176 31.5L28.7176 21L18.2176 10.5Z"
      fill={fill || "#A7A7A7"}
    />
  </svg>
);
