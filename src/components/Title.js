import styled from "styled-components";
import { setColor, sizes } from "../components/globalstyles/helper";

export const Title = styled.article`
  h2 {
    font-size: 4.8rem;
    color: ${setColor.primary};
  }

  h4 {
    color: ${setColor.secondary};
  }

  @media (max-width: ${sizes.s}){
    max-width: 350px;

    h2{
      font-size: 3.2rem;
      white-space: nowrap;
    }
  }
`;
