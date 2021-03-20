import styled from "styled-components";
import {
  setColor,
  setFlex,
  sizes,
  transition,
} from "../../components/globalstyles/helper";
import { Wrapper } from "../../components/Wrapper";
import { Container } from "../../components/Wrapper";

export const FooterWrapper = styled(Wrapper)`
  margin: auto;
  min-height: 10vh;
  background: ${setColor.secondary};
`;

export const FooterContain = styled(Container)`
  ${setFlex({ x: "space-between", y: "center", d: "row" })}

  p{
    color: ${setColor.mainWhite};
  }
`;

export const FooterLogo = styled.div`
  margin: 1rem;
  cursor: pointer;
  h2 {
    color: ${setColor.mainWhite};
  }
`;

export const FooterSocial = styled.div`
  margin: 1rem;

  a {
    font-size: 3.2rem;
    margin-left: 1.6rem;
    color: ${setColor.mainWhite};

    @media (min-width: ${sizes.m}) {
      font-size: 4rem;
    }
  }
`;
