import styled from "styled-components";

export const ImputLineContainer = styled.div`
  touch-action: none;
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 497px;
  position: absolute;
  left: -145.5px;
  top: 233px;
  border: 1px solid;
  border-radius: 3px;
  background: white;
  z-index: 50;
  transform: rotate(90deg);
  @media screen and (max-width: 500px) {
    transition: 350ms ease 0s;
  }
`;

export const ImputSizeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  div {
    pointer-events: none;
    text-align: center;
    line-height: 30px;
    color: white;
    position: absolute;
    width: 30px;
    height: 30px;
    background: #4479bd;
    border-radius: 50%;
    top: 10.5px;
    transform: rotate(-90deg);
  }
  input {
    flex: 3;
    margin-left: 10px;
    margin-top: 2px;
  }
`;
export const LineCircle = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
