import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import { styled } from "@mui/system";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";

import { QuizStep } from "../../App";
import { quizSteps } from "../../App";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { selectInvestment } from "../../redux/question4.slice";
import { setEmail } from "../../redux/question5.slice";

interface Question4Props {
  setActiveStep: React.Dispatch<React.SetStateAction<QuizStep>>;
}

const Question4: React.FC<Question4Props> = ({ setActiveStep }) => {
  const dispatch = useDispatch();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const redux = useSelector((state: RootState) => state);
  const sliderValue = useSelector((state: RootState) => state.question4);

  const [showQuestion5, setShowQuestion5] = useState<boolean>(false);

  if (!showQuestion5)
    return (
      <section>
        <div className="m-auto text-center max-w-[70%] question-div">
          <div className="flex gap-[14px] items-center mb-20 justify-center question-number-and-question">
            <p className="text-6xl leading-6 font-bold text-white question-number">4.</p>
            <p className="text-white text-[28px] leading-6 font-bold leading-[146%]">
              How much are you able to invest in coaching, training or mentorship to learn the
              skills you need to start earning money online - today?
            </p>
          </div>
          <div ref={sliderRef} className="max-w-[80%] m-auto">
            <MySlider />
          </div>
        </div>
        <div className="flex justify-between m-auto mt-[132px] w-[80%] next-n-back-buttons">
          <div onClick={() => setActiveStep(quizSteps[2])}>
            <Button className="text-white">Back</Button>
          </div>
          <div
            onClick={() => {
              // setActiveStep(quizSteps[2]);
              setShowQuestion5(true);
            }}
          >
            <Button className="text-white">Next</Button>
          </div>
        </div>
      </section>
    );

  return (
    <>
      <Question5 setShowQuestion5={setShowQuestion5} />
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
  { value: 1000, label: "Less Than $1000" },
  { value: 5000, label: "Up to $5000" },
  { value: 10000, label: "Up to $10,000" },
  { value: 15000, label: "Over $10,000" },
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
  const value = useSelector((state: RootState) => state.question4);
  console.log("value: ", value);

  const dispatch = useDispatch();

  const changeHandler = (_: Event, newValue: number | Array<number>) => {
    if (typeof newValue === "number") {
      // making sure newValue is a number.
      dispatch(selectInvestment(newValue));
    }
  };
  return (
    <IOSSlider
      marks={marks}
      step={null}
      valueLabelDisplay="off"
      min={1000}
      max={15000}
      valueLabelFormat={(value: number) => `$${value}`}
      value={value || 1000} // Set the value prop
      onChange={changeHandler}
      slots={{
        valueLabel: ValueLabelComponent,
      }}
    />
  );
}

export default Question4;

interface question5Props {
  setShowQuestion5: React.Dispatch<React.SetStateAction<boolean>>;
}

const Question5 = ({ setShowQuestion5 }: question5Props) => {
  const email = useSelector((state: RootState) => state.question5);
  const redux = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div className="m-auto text-center max-w-[70%] question-div">
        <div className="flex gap-[14px] items-center mb-20 justify-center question-number-and-question">
          <p className="text-6xl leading-6 font-bold text-white question-number">5.</p>
          <p className="text-white text-[28px]  font-bold leading-[146%]">
            Enter your Email to Subscribe our Newsletter
          </p>
        </div>
        <input
          value={email || ""}
          type="email"
          placeholder="Type here..."
          className="rounded-[10px] px-5 py-3 flex- w-[60%] email-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setEmail(e.target.value))}
        />
      </div>
      <div className="flex justify-between m-auto mt-[62px] w-[60%] next-n-back-buttons">
        <div onClick={() => setShowQuestion5(false)}>
          <Button className="text-white">Back</Button>
        </div>
        <div
          onClick={() => {
            if (!email) return alert("Please enter your Email");
            alert("completed");
            console.log("redux", redux);
          }}
        >
          <Button className="text-white">Next</Button>
        </div>
      </div>
    </>
  );
};
