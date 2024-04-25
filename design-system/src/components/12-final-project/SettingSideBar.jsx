import styled from "styled-components";
import { Inline } from "../6-inline-pattern";
import { Pad } from "../7-pad-pattern";
import { Logo } from "./component";

const SettingList = styled(Pad).attrs(() => ({
  as: "div",
}))``;

const SettingItem = styled(Inline).attrs(() => ({
  as: Pad,
  padding: ["m", "l"],
  align: "center",
}))`
  list-style: none;
  background-color: ${(props) => (props.active ? "#1f29371c" : "transparent")};
  border-inline-start: ${(props) =>
    props.active ? "3px solid #324972" : "none"};

  &:hover {
    background-color: #1f29371c;
  }
`;

export const SettingSideBar = () => {
  return (
    <Pad as="nav" padding={["xl", "none"]}>
      <SettingList>
        <SettingItem active>
          <Logo square size="1rem" inverse />
          <span>Profile</span>
        </SettingItem>
        <SettingItem>
          <Logo square size="1rem" inverse />
          <span>Account</span>
        </SettingItem>
        <SettingItem>
          <Logo size="1rem" inverse />
          <span>Password</span>
        </SettingItem>
        <SettingItem>
          <Logo size="1rem" inverse />
          <span>Notifications</span>
        </SettingItem>
        <SettingItem>
          <Logo square size="1rem" inverse />
          <span>BilSettingItemng</span>
        </SettingItem>
        <SettingItem>
          <Logo size="1rem" inverse />
          <span>Integrations</span>
        </SettingItem>
      </SettingList>
    </Pad>
  );
};
