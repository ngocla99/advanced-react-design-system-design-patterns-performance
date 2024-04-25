import styled from "styled-components";
import { Layers } from "../1-layers-pattern";
import { Split } from "../2-split-pattern";
import { Columns } from "../3-columns-pattern";
import { Pad } from "../7-pad-pattern";
import { Logo } from "./component";
import { FormActions } from "./FormActions";

const Form = styled.div`
  border-inline-start: 1px solid lightgrey;

  > * + * {
    border-block-start: 1px solid lightgrey;
  }
`;

const SubLabel = styled.span`
  color: grey;
`;

const Input = styled.input`
  border-radius: 0.25rem;
  border: 1px solid lightgrey;
  color: #303030;
  height: 30px;
`;

const Inputs = ({ label, children }) => {
  return (
    <Layers as="label" gutter="s">
      {label}
      {children}
    </Layers>
  );
};

export const SettingForm = () => {
  return (
    <Form>
      <Pad as="section" padding="l">
        <Layers gutter="l">
          <Layers as="header" gutter="l">
            <h2>General Information</h2>
            <SubLabel>
              These information will be the required for the basic verification
              of profile
            </SubLabel>
          </Layers>

          <Layers as="form">
            <Split gutter="l" fraction="auto-end">
              <Layers>
                <Inputs label="Username">
                  <Input />
                </Inputs>
                <Inputs label="About">
                  <Input as="textarea" />
                  <SubLabel>
                    Tell a brief introduction of your self. It is considered as
                    personal bio.
                  </SubLabel>
                </Inputs>
              </Layers>

              <label>
                Image
                <Logo inverse size="10rem" />
              </label>
            </Split>

            <Columns gutter="l" columns={2}>
              <Inputs label="First Name">
                <Input />
              </Inputs>
              <Inputs label="Last Name">
                <Input />
              </Inputs>
              <Inputs label="Linkedin">
                <Input />
              </Inputs>
              <Inputs label="Employer">
                <Input />
              </Inputs>
            </Columns>
          </Layers>
        </Layers>
      </Pad>

      <FormActions />
    </Form>
  );
};
