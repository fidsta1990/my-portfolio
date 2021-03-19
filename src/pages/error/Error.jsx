import React from "react";
import * as Styling from "./errorStyle";
import errorImg from "../../img/errorPage.png";
import { BtnPrimary } from "../../components/Buttons";
import { Link } from "react-router-dom";
import {setColor} from '../../components/globalstyles/helper'

const Error = () => {
  return (
    <Styling.ErrorWapper>
      <Styling.ErrorContain>
        <h2>OOPS, NO SUCH PAGE EXISTS.</h2>
        <img src={errorImg} alt="error image" />
        <BtnPrimary>
          <Link to="/" style={{color: `${setColor.mainWhite}`}}>Back Home</Link>
        </BtnPrimary>
      </Styling.ErrorContain>
    </Styling.ErrorWapper>
  );
};

export default Error;
