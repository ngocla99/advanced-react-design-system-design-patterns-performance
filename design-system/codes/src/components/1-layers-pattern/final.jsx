import { styled } from "styled-components";
import { spacingSchema } from "../common/spaces";

export const Layers = styled.div`
  display: grid;
  gap: ${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};
`;

const SubscribeForm = () => {
  return (
    <Layers gutter="s">
      <Layers gutter="s">
        <h2>Subscribe To Our Newsletter</h2>
        <p>
          Subscribe to our newsletter to keep up to date on all our amazing
          products.
        </p>
      </Layers>

      <Layers>
        <Layers gutter="s">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </Layers>

        <Layers gutter="s">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </Layers>

        <button>Subscribe</button>
      </Layers>
    </Layers>
  );
};

export default SubscribeForm;
