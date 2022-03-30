import styled from "styled-components";

//--------------------------------------
export const CanvasContainer = styled.div`
  grid-area: canva;
  position: relative;
  margin: auto;
  border: 1px solid;
  margin: auto;
`;

export const Canvas1 = styled.canvas`
  position: relative;
  z-index: 5;
`;

export const Canvas2 = styled.canvas`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 7;
  touch-action: none;
`;
//--------------------------------------
export const InputSizeCanvas = styled.div`
  grid-area: sizes;
  width: 100%;
  min-width: 200px;
  height: 100%;
  background: black;
  display: flex;
  overflow: hidden;
  border-radius: 3px;
  label {
    display: block;
    background: white;
    width: 25%;
    height: 92%;
    border: 1px solid;
    line-height: 29px;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    opacity: 1;
    height: 30px;
  }
  input {
    width: 25%;
    height: 81%;
    font-size: 15px;
    font-weight: 600;
    line-height: 25px;
    outline: none;
    text-align: center;
  }
`;
//--------------------------------------
export const InputRotateContainer = styled.div`
  position: relative;
  grid-area: rotater;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  label {
    font-size: 20px;
    font-weight: 800;
    align-items: center;
    display: none;
  }
  input {
    margin-left: 10px;
  }
`;
//----------------------------------------
export const ArrowsContainer = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  pointer-events: none;
  display: none;
  touch-action: none;
`;

//----------------------------------------
export const EditButtom = styled.button`
  width: 70px;
  height: 24px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-35px);
  display: none;
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
