import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Arrows = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: white;
  width: auto;
  height: auto;
  z-index: 20;
  border: 1px solid;
  border-radius: 12px;
  cursor: pointer;
  pointer-events: auto;
`;

export const Arrow = styled(FontAwesomeIcon)`
  font-size: 20px;
  pointer-events: none;
`;
