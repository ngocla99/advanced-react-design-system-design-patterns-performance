import { styled } from "styled-components";
import { spacingSchema } from "../common/spaces";
import MenuBasis from "./menu";

const justifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const InlineBundle = styled.div`
  --gutter: ${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    justifyAlignMap[props.justify] ?? justifyAlignMap.start};

  align-items: ${(props) =>
    justifyAlignMap[props.align] ?? justifyAlignMap.start};
`;

const Menu = () => {
  return (
    <MenuBasis>
      <InlineBundle gutter="l" justify="end" align="center">
        <span>Product</span>
        <span>Features</span>
        <span>Marketplace</span>
        <span>Company</span>
        <span>Log in</span>
      </InlineBundle>
    </MenuBasis>
  );
};

export default Menu;
