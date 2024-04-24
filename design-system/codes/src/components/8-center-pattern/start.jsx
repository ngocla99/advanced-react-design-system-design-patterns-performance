import { styled } from "styled-components";
import { Extras } from "./components";
import { Layers } from "../1-layers-pattern/start";

export const Center = styled.div`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;

  max-inline-size: ${(props) => props.maxWidth};

  ${(props) => props.centerText && `text-align: center;`}

  ${(props) =>
    props.centerChildren &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

const Profile = () => {
  return (
    <Center as={Layers} gutter="xs" maxWidth="60ch" centerText centerChildren>
      <h2>I am title!</h2>
      <p>
        "This is a long long text , nibh lorem convenire quo et. Usu ea libris
        omittantur. Dicta theophrastus ad mei. Dicat appetere at vis, I am the
        end of text."
      </p>
      <Extras />
    </Center>
  );
};

export default Profile;
