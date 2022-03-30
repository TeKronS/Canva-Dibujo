import styled from "styled-components";

export const Body = styled.button`
  position: absolute;
  top: 75px;
  left: calc(50% - 55px);
  z-index: 49;
  width: 110px;
  display: none;
  height: 27px;
  grid-area: buttonHidde;
  border-radius: 4px;
  background: rgb(37, 77, 92);
  color: white;
  line-height: 23px;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;
