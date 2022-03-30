import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//-------------------------------------------

export const ButtonContainer = styled.div`
  grid-area: her;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 60px 10px 10px;
  align-self: start;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 50;

  @media screen and (max-width: 500px) {
    top: 10px;
    transition: 350ms ease 0s;
  }
`;

export const ToolsContainer = styled.div`
  border-bottom: 5px solid;
  border-right: 5px solid;
  border-radius: 4px;
`;

export const Button = styled.a`
  height: 25px;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  background: rgba(55, 55, 55, 1);
  padding: 1px 5px;
  color: white;
  margin: 5px 0 0 0;
  font-size: 17px;
  border-radius: 4px;
  &:hover {
    background: rgba(30, 100, 50, 0.8);
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 2em;
  pointer-events: none;
`;

export const Label = styled.label`
  height: 30px;
  width: 34px;
  position: relative;
  cursor: pointer;
  border: 5px solid;
  border-color: transparent;
  margin: 2px;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #daf7a6;
  }
`;

export const InputLabel = styled.input`
  display: none;

  &:checked + ${Label} {
    border-color: gray;
  }
`;

export const ColorButton = styled.div`
  height: 30px;
  width: 34px;
  margin: 2px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  touch-action: none;
  position: relative;
  border: 5px solid;
  border-color: transparent;
  cursor: pointer;

  &:hover {
    background: #daf7a6;
  }
`;
