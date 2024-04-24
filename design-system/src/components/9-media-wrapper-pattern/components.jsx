import { Pad } from "../7-pad-pattern";
import { Center } from "../8-center-pattern";

export const Description = (props) => (
  <Pad padding="l">
    <Center centerText>{props.children}</Center>
  </Pad>
);
