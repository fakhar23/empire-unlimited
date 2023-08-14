import React from "react";
// import BreadCrum from "../../assets/imges/BreadCrum.svg";
type Props = {
  activeStep: "Online Earning" | "Earning Income" | "Spending Time" | "Investment";
};

const steps = ["Online Earning", "Earning Income", "Spending Time", "Investment"];

export default function BreadCrums({ activeStep }: Props) {
  const getColor = (step: string) => (activeStep === step ? "white" : "#a7a7a7");

  return (
    <div className="bg-[#282828] flex justify-evenly items-center text-[#A7A7A7] font-IstokWeb text-24">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <p style={{ color: getColor(step) }}>{step}</p>
          {index !== steps.length - 1 && (
            <BreadCrum fill={getColor(step) === "white" ? "white" : undefined} />
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
