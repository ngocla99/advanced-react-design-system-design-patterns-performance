import styled from "styled-components";

export const Logo = styled.div`
  --size: ${(props) => props.size};
  background-color: ${(props) => (props.inverse ? "#0F1623" : "#FFF")};
  width: var(--size);
  height: var(--size);
  ${(props) => !props.square && "border-radius: 50%;"}
`;
