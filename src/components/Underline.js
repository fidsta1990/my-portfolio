import styled from "styled-components";
import {setColor, transition} from '../components/globalstyles/helper' 

export const Underline = styled.div`
  width: 100%;
  height: 3px;
  max-width: 50px;
  background: ${setColor.primary};
  margin: 0rem auto 0.8rem auto;
  ${transition()};

  @media (min-width: 800px) {
    margin: 0rem auto 0.8rem auto;
    max-width: 100px;
  }
`;
