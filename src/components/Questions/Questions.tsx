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

const Questions: React.FC<Props> = ({
  activeStep,
  setActiveStep,
  directionHandler,
  reverseDirection,
}) => {
  const slideFromRight = {
    initial: { x: "100%", opacity: 1 },
    animate: { x: 0, opacity: 1, transition: { type: "tween" } },
    exit: { x: "-100%", opacity: 0, transition: { type: "tween" } },
  };
  const slideFromLeft = {
    initial: { x: "-100%", opacity: 1 },
    animate: { x: 0, opacity: 1, transition: { type: "tween" } },
    exit: { x: "100%", opacity: 0, transition: { type: "tween" } },
  };

  const steps = [
    { key: "q1", label: "Online Earning", component: Question1 },
    { key: "q2", label: "Earning Income", component: Question2 },
    { key: "q3", label: "Spending Time", component: Question3 },
    { key: "q4", label: "Investment", component: Question4 },
    { key: "q5", label: "Email", component: Question5 },
  ];

  return (
    <section className="pt-[59px] pb-[30px] px-12 bg-background-black questions-section">
      <h1 className="text-[46px] text-white font-bold text-center mb-[35px]">Questionnaire</h1>
      <p className="text-[#BABABA] text-[22px] text-center max-w-[938px] m-auto leading-[145%] question-text">
        We’ve made a list of some of our favorite survey questions to help you conduct research.
        Based on those questions, we would suggest best online course training.
      </p>
      <div className="overflow-x-hidden">
        <AnimatePresence mode="wait">
          {steps.map(
            ({ key, label, component: Component }) =>
              activeStep === label && (
                <motion.div key={key} {...(reverseDirection ? slideFromLeft : slideFromRight)}>
                  <div className="mt-[41px] bg-[#232323] py-[2rem] px-[8px] rounded-lg pb-[120px]">
                    <Component setActiveStep={setActiveStep} directionHandler={directionHandler} />
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Questions;

// TODO: get picture form andrew and replace "Questionnaire" with picture
