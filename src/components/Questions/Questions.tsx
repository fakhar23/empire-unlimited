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
    <section className="pt-[59px] pb-[130px] px-12 bg-background-black">
      <h1 className="text-[46px] text-white font-bold text-center mb-[35px]">Questionnaire</h1>
      <p className="text-[#BABABA] text-[22px] leading-[32px] text-center max-w-[938px] m-auto">
        We’ve made a list of some of our favorite survey questions to help you conduct research.
        Based on those questions, we would suggest best online course training.
      </p>
      <div className=" mt-[41px]">
        {activeStep == "Online Earning" && <Question1 setActiveStep={setActiveStep} />}
        {activeStep == "Earning Income" && <Question2 setActiveStep={setActiveStep} />}
        {activeStep == "Spending Time" && <Question3 setActiveStep={setActiveStep} />}
        {activeStep == "Investment" && <Question4 setActiveStep={setActiveStep} />}
      </div>
    </section>
  );
};

export default Questions;

// interface Question1Props {
//   setActiveStep: React.Dispatch<React.SetStateAction<ActiveSetp>>;
// }

// export type Question1ptions = "Pay Off Debit" | "Travel The World" | "Take Care of Family" | string;

// const question1ptions: Question1ptions[] = [
//   "Pay Off Debit",
//   "Travel The World",
//   "Take Care of Family",
// ];

// const Question1: React.FC<Question1Props> = ({ setActiveStep }) => {
//   const ButtonsRef = useRef<HTMLDivElement | null>(null);
//   const question1Value = useSelector((state: RootState) => state.question1);
//   console.log("question1Value: ", question1Value);
//   const InputRef = useRef<HTMLInputElement | null>(null);

//   const dispatch = useDispatch();

//   const inputValue: string = question1Value === InputRef.current?.value ? question1Value : "";

//   const handleSelectQuestion = (value: string) => {
//     dispatch(selectQuestion1(value));
//   };

//   const [inputWidth, setInputWidth] = useState<number | string>("auto");
//   useLayoutEffect(() => {
//     setInputWidth(ButtonsRef.current?.clientWidth || "auto");
//   }, []);
//   return (
//     <>
//       <div className="m-auto text-center">
//         <div className="flex gap-[14px] items-center mb-20 justify-center w-fit-content mx-auto">
//           <p className="text-6xl leading-6 font-bold text-white">1.</p>
//           <p className="text-white text-[28px] leading-6 font-bold ">
//             Why do you want to earn more money online?
//           </p>
//         </div>
//         <div className="flex gap-32 justify-center m-auto w-fit mb-16" ref={ButtonsRef}>
//           {question1ptions.map((optionValue) => (
//             <button
//               onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
//                 const target = e.currentTarget;
//                 handleSelectQuestion(target.innerText);
//               }}
//               className={`text-white text-[18px] font-semibold leading-6 bg-[#696969] rounded-[10px] w-[200px] py-[19px] ${
//                 optionValue === question1Value && "selected-button"
//               } `}
//             >
//               {optionValue}
//             </button>
//           ))}
//         </div>
//         <div className="flex gap-[14px] items-center m-auto mb-20" style={{ width: inputWidth }}>
//           <p className="text-white font-bold leading-6 text-[20px]">Other:</p>
//           <input
//             ref={InputRef}
//             value={inputValue}
//             type="text"
//             placeholder="Type here..."
//             className="rounded-[10px] px-5 py-3 flex-1"
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               handleSelectQuestion(e.target.value)
//             }
//           />
//         </div>
//         <div onClick={() => setActiveStep("Earning Income")}>
//           <Button className="text-white text-[27px] leading-6 font-bold">Next</Button>
//         </div>
//       </div>
//     </>
//   );
// };

// interface Question2Props {
//   setActiveStep: React.Dispatch<React.SetStateAction<ActiveSetp>>;
// }
// const Question2 = ({ setActiveStep }: Question2Props) => {
//   const dispatch = useDispatch();
//   const sliderRef = useRef<HTMLDivElement | null>(null);

//   return (
//     <>
//       <div className="m-auto text-center max-w-[70%]">
//         <div className="flex gap-[14px] items-center mb-20 justify-center ">
//           <p className="text-6xl leading-6 font-bold text-white">1.</p>
//           <p className="text-white text-[28px] leading-6 font-bold ">
//             Why do you want to earn more money online?
//           </p>
//         </div>
//         <div ref={sliderRef}>
//           <MySlider />
//         </div>
//       </div>
//       <div className="flex justify-between m-auto mt-[132px] w-[80%]">
//         <div onClick={() => setActiveStep(activeSteps[0])}>
//           <Button className="text-white">Back</Button>
//         </div>
//         <div onClick={() => setActiveStep(activeSteps[2])}>
//           <Button className="text-white">Next</Button>
//         </div>
//       </div>
//     </>
//   );
// };

// const iOSBoxShadow =
//   "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

// const IOSSlider = styled(Slider)({
//   color: "#fff",
//   height: 2,
//   "& .MuiSlider-thumb": {
//     height: 28,
//     width: 28,
//     backgroundColor: "#000",
//     border: "0.5rem solid #bfbfbf",
//     boxShadow: iOSBoxShadow,
//   },
//   "& .MuiSlider-valueLabel": {
//     fontSize: 18,
//     fontWeight: "bold",
//     top: -6,
//     backgroundColor: "unset",
//     color: "#fff",
//   },
//   "& .MuiSlider-mark": {
//     height: 22,
//     width: 3,
//     opacity: 1,
//     color: "#fff",
//     marginTop: 10,
//   },
//   "& .MuiSlider-rail": {
//     backgroundColor: "#fff",
//     opacity: "1",
//   },
//   "& .MuiSlider-track": {
//     height: 4,
//     backgroundColor: "#fff",
//   },
// });

// const marks = [
//   { value: 1000, label: "$1000" },
//   { value: 5000, label: "$5000" },
//   { value: 10000, label: "$10000" },
// ];

// // @ts-ignore
// function ValueLabelComponent(props) {
//   const { children, value } = props;
//   return (
//     <Tooltip enterTouchDelay={0} title={"$ " + value}>
//       {children}
//     </Tooltip>
//   );
// }

// function MySlider() {
//   return (
//     <IOSSlider
//       marks={marks}
//       step={500}
//       valueLabelDisplay="on"
//       min={1000}
//       max={10000}
//       slots={{
//         valueLabel: ValueLabelComponent,
//       }}
//     />
//   );
// }
