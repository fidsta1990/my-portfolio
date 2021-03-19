import styled from "styled-components";
import {
  setColor,
  transition,
  setFont,
  sizes,
  shadows,
} from "../../components/globalstyles/helper";
import { BtnPrimary } from "../../components/Buttons";

export const ContactForm = styled.form`
  padding: 1.6rem;
  width: 100%;
  z-index: 5;

  .form-control {
    width: 100%;
    background: transparent;
    border: 0;
    border-bottom: 2px solid ${setColor.secondary};
    font-size: 2.4rem;
    ${transition()};
    color: ${setColor.primary};
    ${setFont.main};

    &::placeholder {
      color: ${setColor.mainWhite};
    }

    &:focus {
      outline: 0;
      padding-bottom: 0.8rem;
      border-bottom-color: ${setColor.primary};
    }
  }

  @media (max-width: ${sizes.s}) {
    .form-control {
      &:focus {
        outline: 0;
        padding-bottom: 0;
      }
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;
`;

export const FormBtn = styled(BtnPrimary)`
  color: ${setColor.mainWhite};
  width: 100%;
  margin: 0rem;
  margin-top: 1.6rem;

  &:hover {
    ${shadows.light};
  }
`;
