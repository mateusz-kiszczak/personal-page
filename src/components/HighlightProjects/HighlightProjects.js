import highlightProjects from "../../utilities/highlightProjects";

import nelifyIcon from "./../../img/icons/technologies/netlify.svg";
import gitHubIcon from "./../../img/icons/technologies/github.svg";
import { Link } from "react-router-dom";


const HighlightProjects = () => {
  return (
    <section className="home__highlight-projects default-container-width">
      <h2>Highlight Projects</h2>
      {highlightProjects.map(item => {
        return (
          <section className="highlight-projects__content">
              <h3><Link to="/projects">{item.title}</Link></h3>
              <p className="mono-string">{item.tags.map(tag => `#${tag} `)}</p>
            <div className="highlight-projects__screen-shot">
              <img src={item.img} alt={`${item.title} screen shot.`} />
            </div>
            <div className="highlight-projects__links">
              {item.links.hasOwnProperty('github') &&
                <div>
                  <img src={gitHubIcon} alt="GitHub icon." />
                  <a href={item.links.github} target="_blank" rel="noreferrer">GitHub Page</a>
                </div>
              }
              {item.links.hasOwnProperty('netlify') &&
                <div>
                  <img src={nelifyIcon} alt="Netlify icon." />
                  <a href={item.links.netlify} target="_blank" rel="noreferrer">Live Example</a>
                </div>
              }
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default HighlightProjects;
