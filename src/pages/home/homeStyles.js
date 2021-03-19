import styled from "styled-components";
import { Wrapper, Container } from "../../components/Wrapper";
import img from "../../img/pexels-dominika-roseclay-2112008.jpg";
import {
  setColor,
  setFlex,
  sizes,
  shadows,
} from "../../components/globalstyles/helper";

export const HomeWrap = styled(Wrapper)`
  background: ${setColor.linearDark}, url(${img}) center/cover fixed no-repeat;
  min-height: 100vh;
  ${shadows.darker};
  position: relative;

  /* @media (min-width: ${sizes.m}) {
  } */

  .mouse {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3.2rem;
    color: ${setColor.mainWhite};
    cursor: pointer;
  }

  /* Mobile */
  @media (max-height: ${sizes.xs}) {
    .mouse {
      display: none;
    }
  }
`;

export const HomeContain = styled(Container)`
  ${setFlex({ d: "column" })};
  color: ${setColor.mainGrey};

  h1 span {
    color: ${setColor.primary};
  }

  h1 {
    margin: 1.6rem 0rem;
  }

  /* Mobile */
  @media (max-height: ${sizes.xs}) {
    max-width: 700px;
    margin-top: 4.8rem;

    h1 {
      font-size: 1.6rem;
    }

    h4 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 812px) and (max-height: 375px){
    h1 {
      font-size: 2.4rem;
    }
  }

  /* Mobile */
  @media (max-width: ${sizes.s}) {
    h1 {
      font-size: 2.4rem;

      &:nth-of-type(2) {
        white-space: nowrap;
      }
    }
  }

  /* Tablet */
  @media (min-width: ${sizes.l}) {
    h1 {
      font-size: 5.6rem;
    }
  }
`;

export const BtnContain = styled.div`
  /* padding: 1.6rem; */
  width: 100%;
  max-width: 300px;
  margin: 0rem auto;
  margin-top: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Mobile */
  @media (max-height: ${sizes.xs}) {
    padding: 0.8rem;
    max-width: 250px;
  }

  /* Tablet */
  @media (min-width: ${sizes.s}) {
    max-width: 420px;
  }
`;
