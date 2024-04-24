import { styled } from "styled-components";
import { Grid } from "../4-grid-pattern/final";
import tshirt from "../../images/tshirt.jpg";
import { Description } from "./components";

export const MediaWrapper = styled.div`
  --n: ${(props) => (props.ratio ? props.ratio[0] : 1)};
  --d: ${(props) => (props.ratio ? props.ratio[1] : 1)};

  ${(props) =>
    props.ratio &&
    `
  aspect-ratio: var(--n) / var(--d);
  @supports not (aspect-ratio: 1/1) {
    padding-block-end: calc(var(--d) / var(--n) * 100%);
  }
`}

  position: relative;

  > * {
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > img,
  > video {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

const NewProduct = () => {
  return (
    <div>
      <MediaWrapper ratio={[1, 1]}>
        <img src={tshirt} alt="" />
      </MediaWrapper>

      <Description>White T-shirt - $19.99</Description>
    </div>
  );
};

const NewProductsList = () => {
  return (
    <Grid gutter="xl" minItemWidth="18rem">
      <NewProduct />
      <NewProduct />
      <NewProduct />
      <NewProduct />
    </Grid>
  );
};

export default NewProductsList;
