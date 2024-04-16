import React from "react";
import { ControlledFlow } from "../components/controlled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => goNext({ name: "My name" })}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => goNext({ age: 23 })}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Congratulation! You qualify for the gift</h1>
      <button onClick={() => goNext({})}>Next</button>
    </>
  );
};
const StepFour = ({ goNext }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={() => goNext({ country: "Vietnam" })}>Next</button>
    </>
  );
};

export const ControlledFlowDemo = () => {
  const [data, setData] = React.useState({});
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  const goNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <ControlledFlow currentIndex={currentStepIndex} onNext={goNext}>
      <StepOne />
      <StepTwo />
      {data.age > 21 && <StepThree />}
      <StepFour />
    </ControlledFlow>
  );
};
