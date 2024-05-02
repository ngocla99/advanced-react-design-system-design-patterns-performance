import styled from "styled-components";

const StyledButton = styled.div`
  > button {
    border: none;
    background-color: none;
    outline: none;
    box-shadow: none;
    background-color: #0066cc;
    color: #fff;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    &:hover: {
      background-color: #004080;
    }
  }

  > a {
    color: #3399cc;
    border-bottom: 1px solid #3399cc;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    text-decoration: none;
    &:hover: {
      color: #336699;
      border-bottom: 1px solid #336699;
    }
  }
`;

export const Button = (props) => {
  const { children, as, ...otherProps } = props;
  const Component = as || "button";

  return (
    <StyledButton>
      <Component {...otherProps}>{children}</Component>
    </StyledButton>
  );
};
