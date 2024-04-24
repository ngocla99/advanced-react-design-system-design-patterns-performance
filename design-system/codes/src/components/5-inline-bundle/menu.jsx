import styled from "styled-components";
import { spacingSchema } from "../common/spaces";
import { Split } from "../2-split-pattern/final";

const Pad = styled.div`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((padKey) => spacingSchema[padKey])
      .join(" ");
  }};
`;

const Logo = styled.div`
  border-radius: 50%;
  background: linear-gradient(135deg, #ff2828, #d043ff);
`;

const MenuWrapper = styled(Pad)`
  border: 2px solid #f06292;
  border-radius: 0.5rem;
`;

const Menu = styled(Split)`
  > ${Logo} {
    inline-size: 3rem;
    max-inline-size: 3rem;
    block-size: 3rem;
  }
`;

const MenuItems = styled.div`
  color: yellow;
`;

const MenuBasis = (props) => (
  <MenuWrapper padding="s">
    <Menu gutter="l" switchAt="35rem" fraction="auto-start">
      <Logo />
      {props.children}
    </Menu>
  </MenuWrapper>
);

export default MenuBasis;
