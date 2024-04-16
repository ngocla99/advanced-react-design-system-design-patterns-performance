import React from "react";

export const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = React.useState({});
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  const goNext = (dataFromStep) => {
    const nextStepIndex = currentStepIndex + 1;

    const newData = { ...data, ...dataFromStep };

    if (nextStepIndex < children.length) {
      setCurrentStepIndex(nextStepIndex);
    } else {
      onDone(newData);
    }
    setData(newData);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};
