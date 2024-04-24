import { styled } from "styled-components";
import { balanced, blue, typescale, yellow } from "../utils";

export const Button = styled.button`
  font-size: ${typescale.header4};
  border-radius: 3px;
  padding: 9px 20px;
  cursor: pointer;
  transition: background-color 0.3s linear, color 0.3s linear;

  &:hover {
    background-color: ${blue[200]};
    color: ${balanced[100]};
  }

  &:focus {
    outline: 3px solid ${blue[100]};
    outline-offset: 3px;
  }

  &:active {
    background-color: ${blue[100]};
    border-color: ${blue[100]};
    color: ${balanced[100]};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    background-color: ${balanced[100]};
    color: ${balanced[400]};
    border: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${blue[100]};
  color: ${balanced[100]};
  border: 3px solid transparent;

  &:disabled {
    background-color: ${balanced[400]};
    color: ${balanced[100]};
    border-color: ${balanced[400]};
  }

  &.large {
    font-size: ${typescale.header4};
    padding: 16px 24px;
  }

  &.small {
    font-size: ${typescale.text};
    padding: 8px;
  }

  &.warning {
    background-color: ${yellow[300]};
    color: ${balanced[100]};

    &:hover,
    &:focus {
      background-color: ${yellow[200]};
    }

    &:active {
      background-color: ${yellow[300]};
    }
  }
`;
