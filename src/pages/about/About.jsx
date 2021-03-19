import React from "react";
import { Underline } from "../../components/Underline";
import { Wrapper } from "../../components/Wrapper";
import * as Styling from "./aboutStyles";
import skills from "./skills";

const About = () => {
  return (
    <Wrapper id="about">
      <Styling.AboutContain>
        <Styling.AboutTitle>
          <h4>About Me</h4>
          <h2>Personal Details</h2>
          <h4>Here's my background</h4>
          <Underline />
        </Styling.AboutTitle>
        {/* wrapper */}
        <Styling.AboutContext>
          <Styling.AboutBio>
            <h4>Bio</h4>
            <p>
              I’m passionate about all things Front End Web Development. I am an
              extremely well driven individual with a willing approach to devote
              to tasks set. Ambitions of mine are to progress as a junior web
              developer in JavaScript and to evolve into a full stack role.
            </p>
            <p>
              Please have a look at some of the projects I have worked on. Feel
              free to get in touch as I would love to collaborate with you.
            </p>
          </Styling.AboutBio>

          <Styling.AboutSkill>
            <h4>Skills</h4>
            <div className="skill_wrapper">
              {skills.map((skill, idx) => {
                const { name, icon, cName } = skill;
                return (
                  <div key={idx} className="skill">
                    <p className={cName}>{icon}</p>
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </Styling.AboutSkill>
        </Styling.AboutContext>
      </Styling.AboutContain>
    </Wrapper>
  );
};

export default About;
