import { styled } from "styled-components";
import { InputGroup } from "../2-split-pattern/form";
import { spaceSchema } from "../common/spaces";
import { Split } from "../2-split-pattern";

export const Columns = styled.div`
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema["l"]};
  grid-template-columns: repeat(var(--columns), 1fr);
`;

export const Column = styled.div`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns));
`;

const InfoFormWithColumns = () => {
  return (
    <Split fraction="1/3" gutter="xxl">
      <div>
        <h3>General Information</h3>
        <span>
          All the information you provide via this form will be exposed to the
          public.
        </span>
      </div>
      <Form />
    </Split>
  );
};

const Form = () => {
  return (
    <Columns columns="4">
      <Column $span="2">
        <InputGroup htmlFor="firstName" label="First Name">
          <input type="text" id="firstName" />
        </InputGroup>
      </Column>
      <InputGroup htmlFor="lastName" label="Last Name">
        <input type="text" id="lastName" />
      </InputGroup>
      <InputGroup htmlFor="email" label="Email">
        <input type="text" id="email" />
      </InputGroup>
      <InputGroup htmlFor="address" label="Street Address">
        <input type="text" id="address" />
      </InputGroup>
      <InputGroup htmlFor="city" label="City">
        <input type="text" id="city" />
      </InputGroup>
      <InputGroup htmlFor="country" label="Country">
        <input type="text" id="country" />
      </InputGroup>
      <InputGroup htmlFor="phone" label="Phone Number">
        <input type="text" id="phone" />
      </InputGroup>
    </Columns>
  );
};

export default InfoFormWithColumns;
