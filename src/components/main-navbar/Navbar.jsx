import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import * as Styling from "./NavStyles";
import { Link } from "react-scroll";
import { links } from "./details";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const toggleHandler = () => setToggleNav(!toggleNav);
  const closeNav = () => setToggleNav(false);

  const navChange = () => {
    const scroller = window.scrollY >= 80;
    if (scroller) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navChange);
    return () => window.removeEventListener("scroll", navChange);
  }, []);

  return (
    <Styling.Nav className={navBg ? "navbar active" : "navbar"}>
      <Styling.Center>
        <Styling.Header>
          {/* logo */}
          <Styling.Logo>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeNav}
            >
              FC
            </Link>
          </Styling.Logo>
          {/* bar */}
          <Styling.Bar onClick={toggleHandler}>
            {toggleNav ? <FaTimes /> : <HiOutlineMenuAlt3 />}
          </Styling.Bar>
        </Styling.Header>
        {/* menu */}
        <div className={toggleNav ? "links show" : "links"}>
          <Styling.Menu>
            {links.map((items) => {
              const { text, url, id } = items;
              return (
                <Link
                  activeClass="base"
                  key={id}
                  to={url}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeNav}
                >
                  {text}
                </Link>
              );
            })}
          </Styling.Menu>
        </div>
      </Styling.Center>
    </Styling.Nav>
  );
};

export default Navbar;
