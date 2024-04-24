import { styled } from "styled-components";
import { Layers } from "../1-layers-pattern/start";
import { Logo } from "./logo";
import { Pad } from "../7-pad-pattern/start";
import { Inline } from "../6-inline-pattern/start";

const SideMenu = styled(Layers).attrs(() => ({
  as: "ul",
  gutter: "s",
}))`
  list-style-type: none;
  padding-left: 0;
`;

const SideMenuItem = styled(Inline).attrs(() => ({
  as: Pad,
  gutter: "l",
  padding: ["m", "l"],
  align: "center",
}))`
  border-inline-start: 0.25rem solid transparent;
  ${(props) =>
    props.active &&
    `
      border-inline-start-color: #324972;
      background: #1f29371c;
    `}
`;

const SideBar = () => {
  return (
    <Pad as="nav" padding={["l", "none"]}>
      <SideMenu>
        <SideMenuItem active>
          <Logo square inverse size="1rem" />
          Profile
        </SideMenuItem>
        <SideMenuItem>
          <Logo square inverse size="1rem" />
          Settings
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse size="1rem" />
          Authentication
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse size="1rem" />
          Email
        </SideMenuItem>
        <SideMenuItem>
          <Logo square inverse size="1rem" />
          Plans
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse size="1rem" />
          APIs
        </SideMenuItem>
      </SideMenu>
    </Pad>
  );
};

export default SideBar;
