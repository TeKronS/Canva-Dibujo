import styled from "styled-components";

export const Body = styled.header`
  h1 {
    margin: 10px auto 0;
    text-align: center;
  }
  a {
    color: white;
    :hover {
      color: green;
    }
  }

  @media screen and (max-height: 630px) {
    display: none;
  }

  h1 {
  }
`;
