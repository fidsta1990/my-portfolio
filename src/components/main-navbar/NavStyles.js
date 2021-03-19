import styled from "styled-components";
import {
  setColor,
  setFont,
  setFlex,
  transition,
  letterSpacing,
  sizes,
} from "../../components/globalstyles/helper";

export const Nav = styled.nav`
  ${setFont.titled};
  min-height: 5vh;
  position: fixed;
  z-index: 10;
  width: 100%;


  .links {
    height: 0;
    overflow: hidden;
    ${transition()};
  }

  .show {
    height: 15rem;
  }

  @media (min-width: ${sizes.m}) {
    .links {
      height: auto;
    }
  }
`;

export const Center = styled.div`
  @media (min-width: ${sizes.m}) {
    max-width: ${sizes.xl};
    margin: 0 auto;
    ${setFlex({ x: "space-between", y: "center" })};
    padding: 1.6rem;
  }
`;

export const Header = styled.div`
  ${setFlex({ x: "space-between", y: "center" })};
  padding: 1rem;

  @media (min-width: ${sizes.m}) {
    padding: 0;
  }
`;

export const Logo = styled.div`
  font-size: 2.4rem;
  /* height: 40px; */
  color: ${setColor.mainWhite};
  cursor: pointer;
  margin-top: 0.8rem;

  @media (min-width: ${sizes.m}) {
    font-size: 4rem;
    margin-top: 0;
  }

  @media (max-width: ${sizes.m}) {
    background: ${setColor.mainWhite};
    color: ${setColor.primary};
    border-radius: 0.4rem;
  }
`;

export const Bar = styled.button`
  font-size: 2.4rem;
  color: ${setColor.mainWhite};
  background: transparent;
  border-color: transparent;
  ${transition()};
  margin-top: 1.6rem;
  cursor: pointer;

  &:hover {
    background: ${setColor.mainWhite};
    color: ${setColor.primary};
    border-radius: 0.4rem;
  }

  @media (min-width: ${sizes.m}) {
    display: none;
  }
`;

export const Menu = styled.div`
  width: 100%;
  ${setFlex({ x: "center", y: "flex-start", d: "column" })};

  a {
    color: ${setColor.mainGrey};
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    ${transition()};
    cursor: pointer;
    width: 100vw;
    letter-spacing: ${letterSpacing("2")};

    &:hover {
      background: ${setColor.mainWhite};
      padding-left: 3.2rem;
      color: ${setColor.primary};
    }
  }

  @media (min-width: ${sizes.m}) {
    ${setFlex({ x: "space-between", y: "center" })};
    width: 440px;
    a {
      padding: 0rem;
      color: ${setColor.mainWhite};
      text-align: center;
      display: block;
      margin: 0 0.8rem;

      &:hover {
        background: ${setColor.mainWhite};
        color: ${setColor.primary};
        padding-left: 0;
        border-radius: 0.4rem;
      }

      &.base {
        background: ${setColor.mainWhite};
        color: ${setColor.primary};
        border-radius: 0.4rem;
      }
    }
  }
`;
