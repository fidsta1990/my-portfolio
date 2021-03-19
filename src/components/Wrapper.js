import styled from "styled-components";
import {
  setFlex,
  sizes,
} from "../components/globalstyles/helper";

export const Wrapper = styled.section`
  min-height: 100vh;
  ${setFlex()};
  padding: 1.6rem;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 90vw;
  ${setFlex({ x: "flex-start", y: "flex-start", d: "column" })};
  margin: 0rem auto;

  @media (min-width: ${sizes.m}) {
    max-width: ${sizes.xl};
  }
`;
