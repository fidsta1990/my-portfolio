import React, { useState } from "react";
import {
  FooterLogo,
  FooterSocial,
  FooterWrapper,
  FooterContain,
} from "./footerStyle";
import { social } from "../main-navbar/details";
import { animateScroll as scroll, Link } from "react-scroll";
import { Container } from "../../components/Wrapper";

const Footer = () => {
  const [click, setClick] = useState(false);
  // toggle menu bar
  const handleClick = () => {
    const toggle = !click ? setClick(true) : setClick(false);
    return toggle;
  };

  // Scroll To Top
  const toggleHome = () => scroll.scrollToTop();
  const dated = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContain>
        <FooterLogo>
          <h2 onClick={toggleHome}>FC</h2>
        </FooterLogo>
        <Link to="home" smooth={true} duration={500} exact="true" offset={-90}>
          <p>© Fidel Inc {dated}</p>
        </Link>
        <FooterSocial>
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <a key={id} href={url} target="_blank" rel="noreferrer">
                {icon}
              </a>
            );
          })}
        </FooterSocial>
      </FooterContain>
    </FooterWrapper>
  );
};

export default Footer;
