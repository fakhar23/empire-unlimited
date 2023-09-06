import React, { useRef } from "react";
import Button from "../Button/Button";
import { styled } from "@mui/system";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";

import { QuizStep } from "../../App";
import { quizSteps } from "../../App";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { selectIncomeGoal } from "../../redux/question2.slice";

interface Question2Props {
  setActiveStep: React.Dispatch<React.SetStateAction<QuizStep>>;
  directionHandler: (direction: "Next" | "Back") => void;
}

const Question2: React.FC<Question2Props> = ({ setActiveStep, directionHandler }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderValue = useSelector((state: RootState) => state.question2);

  return (
    <>
      <div className="m-auto text-center max-w-[70%] question-div">
        <div className="flex gap-[14px] items-center mb-20 justify-center question-number-and-question">
          <p className="text-6xl leading-6 font-bold text-white question-number">2.</p>
          <p className="text-white text-[28px] leading-6 font-bold leading-[146%]">
            How much additional income do you want to earn every month?
          </p>
        </div>
        <div ref={sliderRef} className="max-w-[80%] m-auto">
          <MySlider />
        </div>
      </div>
      <div className="flex justify-between m-auto mt-[132px] w-[80%] next-n-back-buttons">
        <div
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            directionHandler("Back");
            setActiveStep(quizSteps[0]);
          }}
        >
          <Button className="text-white">Back</Button>
        </div>
        <div
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            if (!sliderValue) return alert("Please select your goal");
            directionHandler("Next");
            setActiveStep(quizSteps[2]);
          }}
        >
          <Button className="text-white">Next</Button>
        </div>
      </div>
    </>
  );
};

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = styled(Slider)({
  color: "#fff",
  height: 2,
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#000",
    border: "0.5rem solid #bfbfbf",
    boxShadow: iOSBoxShadow,
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 18,
    fontWeight: "bold",
    top: -6,
    backgroundColor: "unset",
    color: "#fff",
  },
  "& .MuiSlider-mark": {
    height: 22,
    width: 3,
    opacity: 1,
    color: "#fff",
    marginTop: 10,
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#fff",
    opacity: "1",
  },
  "& .MuiSlider-track": {
    height: 4,
    backgroundColor: "#fff",
  },
});

const marks = [
  { value: 1000, label: "$1000" },
  { value: 5000, label: "$5000" },
  { value: 10000, label: "$10000" },
];

function ValueLabelComponent(props: any) {
  const { children, value } = props;
  return (
    <Tooltip enterTouchDelay={0} title={"$ " + value}>
      {children}
    </Tooltip>
  );
}

function MySlider() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.question2);

  const changeHandler = (_: Event, newValue: number | Array<number>) => {
    if (typeof newValue === "number") {
      // making sure newValue is a number.
      dispatch(selectIncomeGoal(newValue));
    }
  };
  return (
    <IOSSlider
      marks={marks}
      step={500}
      valueLabelDisplay="on"
      min={1000}
      max={10000}
      valueLabelFormat={(value: number) => `$${value}`}
      value={value || 1000} // Set the value prop
      onChange={changeHandler}
      slots={{
        valueLabel: ValueLabelComponent,
      }}
    />
  );
}

export default Question2;
