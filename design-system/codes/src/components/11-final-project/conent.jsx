import { styled } from "styled-components";
import { Pad } from "../7-pad-pattern/start";
import { Split } from "../2-split-pattern/start";
import { Center } from "../8-center-pattern/start";
import { Layers } from "../1-layers-pattern/start";
import SideBar from "./side-bar";
import RightSide from "./right-side";

const ContentArea = styled(Pad).attrs(() => ({ padding: "xl" }))`
  background-image: linear-gradient(
    to bottom,
    #0f1623 14rem,
    rgb(242, 242, 242) 14rem
  );
`;

const SettingsHeader = styled.header`
  color: white;
`;

const SettingsPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.5rem;
`;

const Content = () => {
  return (
    <ContentArea>
      <Center as={Layers} gutter="l" maxWidth="85rem">
        <SettingsHeader>
          <h1>Profile Settings</h1>
        </SettingsHeader>
        <SettingsPane>
          <SideBar />
          <RightSide />
        </SettingsPane>
      </Center>
    </ContentArea>
  );
};

export default Content;
