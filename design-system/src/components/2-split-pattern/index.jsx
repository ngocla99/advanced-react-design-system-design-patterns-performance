import { spaceSchema } from "../common/spaces";
import { Form } from "./form";
import { styled } from "styled-components";

const fractions = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export const Split = styled.div`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema["l"]};
  grid-template-columns: ${(props) =>
    fractions[props.fraction] ?? fractions["1/2"]};
`;

export const InfoForm = () => {
  return (
    <Split fraction="1/3">
      <div>
        <h3>General Information</h3>
        <span>All the information you provide via this form is public.</span>
      </div>
      <Form />
    </Split>
  );
};
