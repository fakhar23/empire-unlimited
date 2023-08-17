import React, { useRef, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { selectReason } from "../../redux/question1.slice";
import Button from "../Button/Button";

export type Question1ptions = "Pay Off Debit" | "Travel The World" | "Take Care of Family" | string;
import { QuizStep } from "../../App";

const question1ptions: Question1ptions[] = [
  "Pay Off Debit",
  "Travel The World",
  "Take Care of Family",
];

interface Question1Props {
  setActiveStep: React.Dispatch<React.SetStateAction<QuizStep>>;
}

const Question1: React.FC<Question1Props> = ({ setActiveStep }) => {
  const ButtonsRef = useRef<HTMLDivElement | null>(null);
  const question1Value = useSelector((state: RootState) => state.question1);
  const InputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const inputValue: string = question1Value === InputRef.current?.value ? question1Value : "";

  const handleSelectQuestion = (value: string) => {
    dispatch(selectReason(value));
  };

  const [inputWidth, setInputWidth] = useState<number | string>("auto");
  useLayoutEffect(() => {
    setInputWidth(ButtonsRef.current?.clientWidth || "auto");
  }, []);

  return (
    <>
      <div className="m-auto text-center">
        <div className="flex gap-[14px] items-center mb-20 justify-center w-fit-content mx-auto">
          <p className="text-6xl leading-6 font-bold text-white">1.</p>
          <p className="text-white text-[28px] leading-6 font-bold ">
            Why do you want to earn more money online?
          </p>
        </div>
        <div className="flex gap-32 justify-center m-auto w-fit mb-16" ref={ButtonsRef}>
          {question1ptions.map((optionValue) => (
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                const target = e.currentTarget;
                handleSelectQuestion(target.innerText);
              }}
              className={`text-white text-[18px] font-semibold leading-6 bg-[#696969] rounded-[10px] w-[200px] py-[19px] ${
                optionValue === question1Value && "selected-button"
              } `}
            >
              {optionValue}
            </button>
          ))}
        </div>
        <div className="flex gap-[14px] items-center m-auto mb-20" style={{ width: inputWidth }}>
          <p className="text-white font-bold leading-6 text-[20px]">Other:</p>
          <input
            ref={InputRef}
            value={inputValue}
            type="text"
            placeholder="Type here..."
            className="rounded-[10px] px-5 py-3 flex-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSelectQuestion(e.target.value)
            }
          />
        </div>
        <div
          onClick={() => {
            if (!question1Value) return alert("Please select an option");
            setActiveStep("Earning Income");
          }}
        >
          <Button className="text-white text-[27px] leading-6 ">Next</Button>
        </div>
      </div>
    </>
  );
};

export default Question1;
