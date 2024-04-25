import styled from "styled-components";
import { Inline } from "../6-inline-pattern";
import { Pad } from "../7-pad-pattern";

const Button = styled(Pad).attrs(() => ({
  as: "button",
  padding: ["m", "l"],
}))`
  border-radius: 0.25rem;
  border: ${(props) =>
    props.primary ? "1px solid transparent" : "1px solid #0f1623"};
  background: ${(props) => (props.primary ? "#0f1623" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#0f1623")};
`;

export const FormActions = () => {
  return (
    <Inline as={Pad} padding="l" gutter="l" justify="end">
      <Button>Cancel</Button>
      <Button primary>Save</Button>
    </Inline>
  );
};
