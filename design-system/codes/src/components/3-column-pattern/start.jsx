import { Split } from "../2-split-pattern/final";
import { InputGroup } from "../2-split-pattern/form";

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
    <div>
      <InputGroup htmlFor="firstName" label="First Name">
        <input type="text" id="firstName" />
      </InputGroup>
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
    </div>
  );
};

export default InfoFormWithColumns;
