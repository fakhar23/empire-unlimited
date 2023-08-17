import { QuizStep, quizSteps } from "../../App";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setWeeklyTime } from "../../redux/question3.slice";

interface Question3Props {
  setActiveStep: React.Dispatch<React.SetStateAction<QuizStep>>;
}

const Question3: React.FC<Question3Props> = ({ setActiveStep }) => {
  const dispatch = useDispatch();
  const weeklyTime = useSelector((state: RootState) => state.question3);

  const clickHandler = (newTime: string) => {
    dispatch(setWeeklyTime(newTime));
  };

  const question3ptions = ["10 hrs", "20 hrs", "30+ hrs"];

  return (
    <>
      <div className="m-auto text-center">
        <div className="flex gap-[14px] items-center mb-20 justify-center w-fit-content mx-auto">
          <p className="text-6xl leading-6 font-bold text-white">3.</p>
          <p className="text-white text-[28px] leading-6 font-bold ">
            How much time are you able to spend on your side hustle every week?
          </p>
        </div>
        <div className="flex gap-32 justify-center m-auto w-fit mb-16">
          {question3ptions.map((optionValue) => (
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => clickHandler(optionValue)}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  optionValue === weeklyTime
                    ? "bg-black border-4 border-solid border-[#fff]"
                    : "bg-gray-300"
                }`}
              ></span>
              <p className="text-white">{optionValue}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between m-auto mt-[132px] w-[80%]">
          <div onClick={() => setActiveStep(quizSteps[1])}>
            <Button className="text-white">Back</Button>
          </div>
          <div
            onClick={() => {
              if (!weeklyTime) return alert("Please select on Option");
              setActiveStep(quizSteps[3]);
            }}
          >
            <Button className="text-white">Next</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question3;
