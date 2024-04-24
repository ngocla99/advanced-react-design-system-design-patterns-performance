import { Pad } from "../7-pad-pattern/start";
import { Center } from "../8-center-pattern/start";


export const Description = (props) => (
  <Pad padding="l">
    <Center centerText>{props.children}</Center>
  </Pad>
);
