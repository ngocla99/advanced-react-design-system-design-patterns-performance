import styled from "styled-components";
import { InlineBundle } from "../5-inline-bundle-pattern";
import { Inline } from "../6-inline-pattern";
import { Pad } from "../7-pad-pattern";
import { Logo } from "./component";

const Menu = styled(Inline).attrs(() => ({
  as: Pad,
  padding: ["l", "xl"],
  stretch: 1,
  align: "center",
  gutter: "xxl",
}))`
  background-color: #0f1623;
  color: #fff;
  border-block-end: 1px solid #303030;
`;

const SearchInput = styled(Pad).attrs(() => ({
  as: "input",
  padding: ["m", "l"],
}))`
  border-radius: 0.25rem;
  border: none;
  background-color: #1f2937;
  color: #fff;
`;

const MenuItem = styled(Pad).attrs(() => ({
  padding: ["s", "m"],
  as: "li",
}))`
  background-color: ${(props) => (props.active ? "#1F2937" : "transparent")};
  border-radius: 0.25rem;
  list-style-type: none;
  cursor: pointer;
  &:hover {
    background-color: #1f2937;
  }
`;

export const Menubar = () => {
  return (
    <Menu>
      <Logo size="2.5rem" />
      <InlineBundle as="ul" gutter="l">
        <MenuItem active>Overview</MenuItem>
        <MenuItem>Position</MenuItem>
        <MenuItem>Candidates</MenuItem>
        <MenuItem>Employee</MenuItem>
      </InlineBundle>
      <InlineBundle align="center">
        <SearchInput type="text" placeholder="Search" />
        <Logo size="1.5rem" square />
        <Logo size="2rem" />
      </InlineBundle>
    </Menu>
  );
};
