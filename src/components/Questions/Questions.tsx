import Question1 from "./Question1.component";
import Question2 from "./Question2.component";
import Question3 from "./Question3.component";

import "./Questions.scss";

import { QuizStep } from "../../App";
import Question4 from "./Question4.component";

interface Props {
  activeStep: QuizStep;
  setActiveStep: React.Dispatch<React.SetStateAction<QuizStep>>;
}

const Questions = ({ activeStep, setActiveStep }: Props) => {
  return (
    <section className="pt-[59px] pb-[30px] px-12 bg-background-black questions-section">
      <h1 className="text-[46px] text-white font-bold text-center mb-[35px]">Questionnaire</h1>
      <p className="text-[#BABABA] text-[22px] leading-[32px] text-center max-w-[938px] m-auto leading-[145%] question-text">
        We’ve made a list of some of our favorite survey questions to help you conduct research.
        Based on those questions, we would suggest best online course training.
      </p>
      <div className=" mt-[41px] bg-[#232323] py-[2rem] px-[8px] rounded-lg pb-[120px]">
        {activeStep == "Online Earning" && <Question1 setActiveStep={setActiveStep} />}
        {activeStep == "Earning Income" && <Question2 setActiveStep={setActiveStep} />}
        {activeStep == "Spending Time" && <Question3 setActiveStep={setActiveStep} />}
        {activeStep == "Investment" && <Question4 setActiveStep={setActiveStep} />}
      </div>
    </section>
  );
};

export default Questions;

// TODO: get picture form andrew and replace "Questionnaire" with picture
