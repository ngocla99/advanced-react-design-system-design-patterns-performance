import { styled } from "styled-components";
import MenuBasis from "./menu";
import { spaceSchema } from "../common/spaces";

const justifySchema = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const InlineBundle = styled.div`
  --gutter: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    justifySchema[props.justify] ?? justifySchema.start};

  align-items: ${(props) => justifySchema[props.align] ?? justifySchema.start};
`;

const BundledMenu = () => {
  return (
    <MenuBasis>
      <InlineBundle justify="end" align="center" gutter="l">
        <span>Books</span>
        <span>Authors</span>
        <span>Deals</span>
        <span>About Us</span>
        <span>Sign-in</span>
      </InlineBundle>
    </MenuBasis>
  );
};

export default BundledMenu;
