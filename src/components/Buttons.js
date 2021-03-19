import styled from "styled-components";
import {
  setColor,
  setFont,
  border,
  letterSpacing,
  sizes,
  shadows,
  transition,
} from "../components/globalstyles/helper";

export const BtnOutline = styled.button`
  color: ${setColor.mainWhite};
  margin: 0.8rem;
  ${border({ size: 2, color: `${setColor.mainWhite}` })};
  width: 188px;
  height: 50px;
  background: transparent;
  font-size: 2.2rem;
  cursor: pointer;
  ${transition()};
  border-radius: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  ${setFont.main};
  letter-spacing: ${letterSpacing("2")};
  &:hover {
    color: ${setColor.secondary};
    background: ${setColor.mainWhite};
    ${shadows.light};
  }

  @media (max-width: ${sizes.m}) {
    font-size: 1.6rem;
    width: 140px;
    height: 35px;
  }
`;

export const BtnPrimary = styled.button`
  color: ${setColor.mainWhite};
  margin: 0.8rem;
  border: 0;
  width: 178px;
  height: 40px;
  background: ${setColor.secondary};
  font-size: 2.2rem;
  cursor: pointer;
  ${transition()};
  border-radius: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  ${setFont.main};
  letter-spacing: ${letterSpacing("2")};

  &:hover {
    color: ${setColor.mainWhite};
    background: ${setColor.primary};
    ${shadows.light};
  }

  @media (max-width: ${sizes.m}) {
    font-size: 1.6rem;
    width: 140px;
    height: 35px;
  }
`;
