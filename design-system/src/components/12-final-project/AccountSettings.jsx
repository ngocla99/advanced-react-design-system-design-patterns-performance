import styled from "styled-components";
import { Split } from "../2-split-pattern";
import { Inline } from "../6-inline-pattern";
import { Pad } from "../7-pad-pattern";
import { Center } from "../8-center-pattern";
import { SettingForm } from "./SettingForm";
import { Logo } from "./component";
import { Layers } from "../1-layers-pattern";
import { SettingSideBar } from "./SettingSideBar";

const ContentArea = styled(Pad).attrs(() => ({ padding: "xl" }))`
  background-image: linear-gradient(
    to bottom,
    #0f1623 14rem,
    rgb(242, 242, 242) 14rem
  );
`;

const SettingPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  border-radius: 0.5rem;
  background-color: #fff;
`;

const SettingHeader = styled.header`
  color: #fff;
`;

export const AccountSetttings = () => {
  return (
    <ContentArea>
      <Center as={Layers} gutter="l" maxWidth="85rem">
        <SettingHeader>
          <h1>Profile Settings</h1>
        </SettingHeader>
        <SettingPane>
          <SettingSideBar />
          <SettingForm />
        </SettingPane>
      </Center>
    </ContentArea>
  );
};
