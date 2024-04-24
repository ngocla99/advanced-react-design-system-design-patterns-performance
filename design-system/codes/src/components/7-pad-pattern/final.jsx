import { styled } from "styled-components";
import { Layers } from "../1-layers-pattern/final";
import { Grid } from "../4-grid-pattern/final";
import { InlineBundle } from "../5-inline-bundle/final";
import { spacingSchema } from "../common/spaces";
import {
  Bottom,
  Button,
  Card,
  Description,
  Name,
  Price,
  Top,
} from "./component";

export const Pad = styled.div`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((padKey) => spacingSchema[padKey])
      .join(" ");
  }};
`;

const Plans = () => {
  return (
    <Card>
      <Pad padding="l">
        <Top>
          <Name>Gift Card</Name>
          <Description>This is one of our gift cards you can buy.</Description>
          <Price>$25.99</Price>
          <InlineBundle gutter="none" justify="center">
            <Button>
              <Pad padding={["m", "xl"]}>Buy</Pad>
            </Button>
          </InlineBundle>
        </Top>
      </Pad>

      <Bottom>
        <Pad padding="l">
          <Layers gutter="m">
            <span>Includes:</span>
            <ul>
              <li>This is inclusion number 1</li>
              <li>
                This is inclusion number 2 which comes after inclusion number1
              </li>
              <li>This is inclusion number 3</li>
            </ul>
          </Layers>
        </Pad>
      </Bottom>
    </Card>
  );
};

const PlanList = () => {
  return (
    <Grid gutter="xl" minItemWidth="16rem">
      <Plans />
      <Plans />
      <Plans />
      <Plans />
    </Grid>
  );
};

export default PlanList;
