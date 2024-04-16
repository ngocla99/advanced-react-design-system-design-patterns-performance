import { UncontrolledFlow } from "../components/uncontrolled-flow";

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
      <h1>Step #3: Enter your country</h1>
      <button onClick={() => goNext({ country: "Vietnam" })}>Next</button>
    </>
  );
};

export const UnControlledFlowDemo = () => {
  return (
    <UncontrolledFlow
      onDone={(data) => {
        console.log(data);
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledFlow>
  );
};
