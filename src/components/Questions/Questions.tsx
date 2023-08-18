import Question1 from "./Question1.component";
import Question2 from "./Question2.component";
import Question3 from "./Question3.component";

import "./Questions.scss";

import { QuizStep } from "../../App";
import Question4 from "./Question4.component";
import Question5 from "./Question5.component";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  activeStep: QuizStep;
  setActiveStep: React.Dispatch<React.SetStateAction<QuizStep>>;
  directionHandler: (direction: "Next" | "Back") => void;
  reverseDirection: boolean;
}

const Questions = ({ activeStep, setActiveStep, directionHandler, reverseDirection }: Props) => {
  const slideFromRight = {
    initial: { x: "100%", opacity: 1 },
    animate: { x: 0, opacity: 1, transition: { type: "tween" } },
    exit: { x: "-100%", opacity: 1, transition: { type: "tween" } },
  };
  const slideFromLeft = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: "tween" } },
    exit: { x: "100%", opacity: 0, transition: { type: "tween" } },
  };

  return (
    <section className="pt-[59px] pb-[30px] px-12 bg-background-black questions-section">
      <h1 className="text-[46px] text-white font-bold text-center mb-[35px]">Questionnaire</h1>
      <p className="text-[#BABABA] text-[22px] leading-[32px] text-center max-w-[938px] m-auto leading-[145%] question-text">
        We’ve made a list of some of our favorite survey questions to help you conduct research.
        Based on those questions, we would suggest best online course training.
      </p>
      <div className="overflow-x-hidden">
        <AnimatePresence mode="wait">
          {activeStep === "Online Earning" && (
            <motion.div key="q1" {...(reverseDirection ? slideFromLeft : slideFromRight)}>
              <div className="mt-[41px] bg-[#232323] py-[2rem] px-[8px] rounded-lg pb-[120px]">
                <Question1 setActiveStep={setActiveStep} directionHandler={directionHandler} />
              </div>
            </motion.div>
          )}
          {activeStep === "Earning Income" && (
            <motion.div key="q2" {...(reverseDirection ? slideFromLeft : slideFromRight)}>
              <div className="mt-[41px] bg-[#232323] py-[2rem] px-[8px] rounded-lg pb-[120px]">
                <Question2 setActiveStep={setActiveStep} directionHandler={directionHandler} />
              </div>
            </motion.div>
          )}
          {activeStep === "Spending Time" && (
            <motion.div key="q3" {...(reverseDirection ? slideFromLeft : slideFromRight)}>
              <div className="mt-[41px] bg-[#232323] py-[2rem] px-[8px] rounded-lg pb-[120px]">
                <Question3 setActiveStep={setActiveStep} directionHandler={directionHandler} />
              </div>
            </motion.div>
          )}
          {activeStep === "Investment" && (
            <motion.div key="q4" {...(reverseDirection ? slideFromLeft : slideFromRight)}>
              <div className="mt-[41px] bg-[#232323] py-[2rem] px-[8px] rounded-lg pb-[120px]">
                <Question4 setActiveStep={setActiveStep} directionHandler={directionHandler} />
              </div>
            </motion.div>
          )}
          {activeStep === "Email" && (
            <motion.div key="q5" {...(reverseDirection ? slideFromLeft : slideFromRight)}>
              <div className="mt-[41px] bg-[#232323] py-[2rem] px-[8px] rounded-lg pb-[120px]">
                <Question5 setActiveStep={setActiveStep} directionHandler={directionHandler} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Questions;

// TODO: get picture form andrew and replace "Questionnaire" with picture
