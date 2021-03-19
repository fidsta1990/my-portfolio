import styled from "styled-components";
import { Container } from "../../components/Wrapper";
import {
  setColor,
  setFlex,
  setGrid,
  sizes,
  setFont,
  shadows,
} from "../../components/globalstyles/helper";
import { Title } from "../../components/Title";

export const AboutContain = styled(Container)`
  ${setFlex({ d: "column" })};
  padding: 3.2rem 0rem;
`;

export const AboutTitle = styled(Title)`
  margin-top: 5.6rem;

  @media (max-width: ${sizes.xss}) {
    h2 {
      font-size: 3rem;
    }
  }
`;

export const AboutContext = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  margin: 3.2rem 1.6rem;
  min-height: 40vh;

  @media (min-width: ${sizes.l}) {
    h4 {
      text-align: left;
    }
  }

  @media (min-width: ${sizes.m}) {
    ${setGrid({ no: "2" })};
  }
`;

export const AboutBio = styled.article`
  flex: 1;
  padding: 1.6rem;
  width: 100%;
  max-width: 600px;

  p {
    line-height: 2;
    font-weight: 600;
    color: ${setColor.darkGrey};
    margin: 3.2rem 0rem 1.6rem 0rem;
  }

  h4 {
    margin-left: 0;
  }

  @media (max-width: ${sizes.xss}) {
    h4 {
      margin-bottom: 2.4rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export const AboutSkill = styled.article`
  flex: 1;
  padding: 1.6rem;

  h4 {
    display: block;
    margin-left: 0;
  }

  .skill_wrapper {
    ${setFlex({ x: "flex-start", y: "center", d: "row" })}
    flex-wrap: wrap;
    width: 100%;
    height: 350px;
    max-width: 552px;
  }

  .skill {
    display: grid;
    place-items: center;
    margin: 0 1.6rem;
    ${setFont.main};

    .html {
      color: #dd4b25;
    }
    .git {
      color: #e94e31;
    }
    .css3 {
      color: #1b84c1;
    }
    .bootstrap {
      color: #8210f3;
    }
    .react {
      color: #5ed3f3;
    }
    .sass {
      color: #c66192;
    }
    .javascript {
      color: #efd81d;
    }
    .styled-components {
      color: #fbda61;
    }

    p {
      font-size: 4.8rem;
      text-align: center;
    }

    span {
      ${setFont.main};
      font-size: 1.6rem;
      font-weight: 400;
      padding: 0.8rem;
      border-radius: 0.8rem;
      color: ${setColor.mainWhite};
      display: block;
      text-transform: uppercase;
      background: ${setColor.secondary};
      ${shadows.dark};
    }
  }

  @media (max-width: 375px) {
    .skill_wrapper {
      justify-items: center;
      align-content: center;
      height: 430px;
      padding-top: 1.6rem;
    }

    .skill {
      margin: 1.6rem 0.4rem;
    }
  }
  @media (max-width: ${sizes.xs}) {
    .skill_wrapper {
      height: 530px;
      padding-top: 1.6rem;
    }

    .skill {
      margin: 1.6rem 0.4rem;
    }
  }

  @media (min-width: ${sizes.l}) {
    h4 {
      padding-left: 1.6rem;
    }

    .skill_wrapper {
      margin-top: 1.6rem;
    }
  }
`;
