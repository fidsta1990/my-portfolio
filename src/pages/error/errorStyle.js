import styled from "styled-components";
import { Wrapper, Container } from "../../components/Wrapper";
import { setColor, setFlex } from "../../components/globalstyles/helper";

export const ErrorWapper = styled(Wrapper)`
  background: ${setColor.mainWhite};
`;

export const ErrorContain = styled(Container)`
  ${setFlex({ x: "center", y: "center", d: "column" })}

  h2{
    color: ${setColor.primary}
  }

  img {
    width: 100%;
    max-width: 500px;
    margin: 3.2rem 0rem;
  }


`;
