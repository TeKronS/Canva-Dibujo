import styled from "styled-components";
//-------------------------------------------
export const Container = styled.div`
  font-family: sans-serif;
  border-radius: 5px;
  user-select: none;
  background: white;
  position: relative;
  padding: 10px 10px 10px 0;
  display: grid;
  margin-top: 20px;
  justify-items: center;

  grid-template-rows: 30px 40px auto;
  min-height: 500px;
  grid-template-columns: 135px 1fr;

  grid-template-areas:
    " her sizes"
    " her rotater"
    " her canva";

  @media screen and (max-width: 500px) {
    padding: 10px 0;
    grid-template-rows: 30px 40px 30px auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      " sizes"
      " rotater"
      " buttonHidde"
      " canva";
  }
  .hiddentools {
    @media screen and (max-width: 500px) {
      transform: translateX(-300px);
    }
  }
  .hiddenline {
    @media screen and (max-width: 500px) {
      transform: translateX(-300px) rotate(90deg);
    }
  }
`;
