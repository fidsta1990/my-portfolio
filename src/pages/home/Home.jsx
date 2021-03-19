import React from "react";
import * as Styling from "./homeStyles";
import { Underline } from "../../components/Underline";
import { BtnOutline} from "../../components/Buttons";
import { Link } from "react-scroll";
import { CgMouse } from "react-icons/cg";

const Home = () => {
  return (
    <Styling.HomeWrap id="home">
      <Styling.HomeContain>
        <h4>Welcome</h4>
        <Underline />
        <h1>
          I'm <span>Fidel Collin</span>.
        </h1>
        <h1>I am a Web Developer.</h1>
        <Styling.BtnContain>
          <Link to="about" smooth={true} duration={500} exact="true" offset={0}>
            <BtnOutline>Learn More</BtnOutline>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            exact="true"
            offset={0}
          >
            <BtnOutline>Projects</BtnOutline>
          </Link>
        </Styling.BtnContain>
      </Styling.HomeContain>
      {/* mouse action */}
      <Link
        to="about"
        smooth={true}
        duration={500}
        exact="true"
        offset={0}
        className="mouse"
      >
        <CgMouse />
      </Link>
    </Styling.HomeWrap>
  );
};

export default Home;
