import React from "react";
import * as Styling from "./projectsStyles.js";
import { Underline } from "../../components/Underline";
import { portfolio } from "./projectDetails";

const Projects = () => {
  return (
    <Styling.ProjectWrapper id="projects">
      <Styling.ProjectContain>
        <Styling.ProjectTitle>
          <h4>Projects</h4>
          <h2>Latest Work</h2>
          <h4>My pride and joys</h4>
          <Underline />
        </Styling.ProjectTitle>
        {/* wrapper */}
        <Styling.ProjectsContext>
          {portfolio.map((project) => {
            const {
              id,
              image,
              langOne,
              langTwo,
              langThree,
              name,
              info,
              url,
              codeUrl,
            } = project;

            return (
              <Styling.Catalogue key={id}>
                <img src={image} alt={name} />
                <p>
                  <span className="sub__heading">Site:</span> {name}
                  <a href={codeUrl} target="_blank" rel="noreferrer" className="code">Code</a>
                </p>
                <article>
                  <div className="languages">
                    <span className="sub__heading">Languages: </span>
                    <span>{langOne}</span>
                    <span>{langTwo}</span>
                    <span>{langThree}</span>
                  </div>
                </article>
                <p>
                  <span className="sub__heading">Info: </span>
                  {info}
                </p>
                <Styling.ProjectBtn>
                  <a href={url} target="_blank" rel="noreferrer">
                    see live
                  </a>
                </Styling.ProjectBtn>
              </Styling.Catalogue>
            );
          })}
        </Styling.ProjectsContext>
      </Styling.ProjectContain>
    </Styling.ProjectWrapper>
  );
};

export default Projects;
