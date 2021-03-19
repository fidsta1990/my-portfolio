import styled from "styled-components";

export const ContactForm = styled.form`
  padding: 1.6rem;
  width: 100%;
  z-index: 5;

  .form-group {
    width: 100%;
    margin-bottom: 0.8rem;
  }

  .form-control {
    width: 100%;
    background: transparent;
    border: 0;
    border-bottom: 2px solid grey;
    font-size: 2.4rem;
    transition: all 0.2s ease-in;
    color: #84b5e5;

    &::placeholder {
      color: #fff;
    }

    &:focus {
      outline: 0;
      padding-bottom: 0.8rem;
      border-bottom-color: #84b5e5;
    }
  }

  .form-btn {
    cursor: pointer;
    width: 100%;
    padding: 1.6rem 0;
    border: 0;
    font-size: 1.6rem;
    border-radius: 0.8rem;
    letter-spacing: 3px;
    font-weight: bold;
    background: black;
    color: #fff;
    box-shadow: 0 0 5px #fff;
    transition: all 0.2s ease;

    &:hover {
      background: linear-gradient(
        200deg,
        #84b5e5,
        #63bce6,
        #3fc3de,
        #29c8cf,
        #3acbb8
      );
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;
