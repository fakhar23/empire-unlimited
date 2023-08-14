import React from "react";
import BreadCrums from "./BreadCrums";

export default {
  title: "Components/BreadCrums",
  component: BreadCrums,
};

const Template = (args) => <BreadCrums {...args} />;

export const OnlineEarning = Template.bind({});
OnlineEarning.args = {
  activeStep: "Online Earning",
};

export const EarningIncome = Template.bind({});
EarningIncome.args = {
  activeStep: "Earning Income",
};

export const SpendingTime = Template.bind({});
SpendingTime.args = {
  activeStep: "Spending Time",
};

export const Investment = Template.bind({});
Investment.args = {
  activeStep: "Investment",
};
