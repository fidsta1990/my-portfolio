import styled from "styled-components";
import { Container } from "../../components/Wrapper";
import {
  setColor,
  setFlex,
  setGrid,
  sizes,
  setFont,
  shadows,
  letterSpacing,
} from "../../components/globalstyles/helper";
import { Title } from "../../components/Title";
import { Wrapper } from "../../components/Wrapper";
import img from '../../img/bgMain.jpg'

export const ContactWrapper = styled(Wrapper)`
 background: ${setColor.linearDark}, url(${img}) center/cover fixed no-repeat;
  ${shadows.darker};
`;

export const ContactContain = styled(Container)`
  ${setFlex({ d: "column" })};
  padding: 3.2rem 0rem;
`;

export const ContactTitle = styled(Title)`
  margin-top: 5.6rem;


  @media (max-width: ${sizes.xss}) {
    h2 {
      font-size: 3rem;
    }
  }
`;

export const ContactContext = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: space-evenly;
  column-gap: 1.6rem;
  margin: 3.2rem 1.6rem;
  min-height: 40vh;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 400px);
  }
`;

export const ContactDetails = styled.article`
  width: 100%;
  height: 350px;

  .details {
    margin-top: 5.4rem;

   h4{
     text-align: left;
   }

    p {
      color: ${setColor.mainWhite};
      letter-spacing: ${letterSpacing("3")};
      display: flex;
      align-self: center;
      margin-left: 0;

      span {
        font-size: 2.4rem;
        margin-right: 0.8rem;
      }
    }
  }

  @media (min-width: 1060px) {
    .details {
      margin-top: 1.6rem;
    }
  }
`;
