import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { setEmail } from "../../redux/question5.slice";
import { QuizStep, quizSteps } from "../../App";
import Button from "../Button/Button";

interface question5Props {
  setShowQuestion5?: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveStep: React.Dispatch<React.SetStateAction<QuizStep>>;
}

const Question5 = ({ setActiveStep }: question5Props) => {
  const email = useSelector((state: RootState) => state.question5);
  const redux = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="m-auto text-center max-w-[70%] question-div">
        <div className="flex gap-[14px] items-center mb-20 justify-center question-number-and-question">
          <p className="text-6xl leading-6 font-bold text-white question-number">5.</p>
          <p className="text-white text-[28px] font-bold leading-[146%]">
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
        <div onClick={() => setActiveStep(quizSteps[3])}>
          <Button className="text-white">Back</Button>
        </div>
        <div
          onClick={() => {
            if (!email) return alert("Please enter your Email");
            console.log("redux", redux);
            navigate("/results");
          }}
        >
          <Button className="text-white">Next</Button>
        </div>
      </div>
    </>
  );
};

export default Question5;
