import styled from "styled-components";
import { Container } from "../../components/Wrapper";
import {
  setColor,
  setFlex,
  sizes,
  shadows,
} from "../../components/globalstyles/helper";
import { Title } from "../../components/Title";
import { BtnPrimary } from "../../components/Buttons";
import { Wrapper } from "../../components/Wrapper";

export const ProjectWrapper = styled(Wrapper)`
  background: ${setColor.mainGrey};
`;

export const ProjectContain = styled(Container)`
  ${setFlex({ d: "column" })};
  padding: 3.2rem 0rem;
`;

export const ProjectTitle = styled(Title)`
  margin-top: 5.6rem;

  @media (max-width: ${sizes.xss}) {
    h2 {
      font-size: 3rem;
    }
  }
`;

export const ProjectsContext = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  column-gap: 3.2rem;
  width: 100%;
  max-width: 900px;
  margin: 3.2rem auto;
  padding: 0 auto;

  @media (min-width: ${sizes.m}) {
    max-width: 1000px;
    grid-template-columns: repeat(2, 400px);
  }

  @media (min-width: ${sizes.l}) {
    max-width: ${sizes.l};
    grid-template-columns: repeat(2, 500px);
  }
`;

export const Catalogue = styled.article`
  column-gap: 1.6rem;
  width: 100%;
  max-width: 300px;
  border: 0;
  margin: 1.6rem auto;
  border-radius: 1.6rem;
  ${shadows.darker};
  background: ${setColor.mainWhite};
  ${setFlex({ x: "space-between", y: "flex-start", d: "column" })};

  img {
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
  }

  p {
    padding-left: 1.6rem;
    margin: 1.6rem 0rem;
  }

  article {
    margin: 1.6rem 0rem;
  }

  .languages {
    padding-left: 1.6rem;
    display: flex;
    flex-wrap: wrap;

    span {
      line-height: 1.5;
      text-transform: uppercase;
    }
  }

  .sub__heading {
    font-weight: bold;
    color: ${setColor.primary};
  }

  @media (min-width: ${sizes.m}) {
    max-width: 340px;
  }

  @media (min-width: ${sizes.l}) {
    max-width: 400px;
  }

  img {
    height: 250px;
  }

  p {
    color: black;
  }

  span {
    font-size: 1.6rem;
    margin-right: 0.8rem;
    text-transform: uppercase;
  }
`;

export const ProjectBtn = styled(BtnPrimary)`
  width: 100%;
  padding: 0;
  color: #fff;
  font-weight: bold;
  letter-spacing: 3px;
  border-bottom-left-radius: 1.6rem;
  border-bottom-right-radius: 1.6rem;
  margin: 0;
  display: grid;
`;
