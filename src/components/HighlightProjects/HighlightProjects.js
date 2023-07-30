import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import highlightProjects from "../../utilities/highlightProjects";
import isElementOnTheScreen from "../../utilities/isElementOnTheScreen";

import nelifyIcon from "./../../img/icons/technologies/netlify.svg";
import gitHubIcon from "./../../img/icons/technologies/github.svg";



const HighlightProjects = () => {
  const screenHeight = useSelector((state) => state.screenHeight.value);
  const appScrollTopPosition = useSelector((state) => state.appScrollTopPosition.value);


  // Get all "highlight projects"
  const refProject1 = useRef(null);
  const refProject2 = useRef(null);
  const refProject3 = useRef(null);
  const refProject4 = useRef(null);

  const refs = useMemo(() => [refProject1, refProject2, refProject3, refProject4], [refProject1, refProject2, refProject3, refProject4]);


  // Keep the information (boolean) whenever element is in right position to trigger animation/transition.
  const [projectsTopValues, setProjectsTopValues] = useState([false, false, false, false]);

  useEffect(() => {
    // Array to replace current values.
    let newTopValues = [];

    for (let i = 0; i < refs.length; i++) {
      const elementTop = refs[i].current.getBoundingClientRect().top;

      newTopValues.push(isElementOnTheScreen(screenHeight, elementTop));
    }

    setProjectsTopValues(newTopValues);
  }, [appScrollTopPosition, refs, screenHeight]);


  return (
    <section className="home__highlight-projects default-container-width">
      <h2>Highlight Projects</h2>
      {highlightProjects.map((item, index) => {
        return (
          <section className={`${projectsTopValues[index] ? "highlight-projects__box-shadow" : ""} highlight-projects__content`} key={`highlight-project-${index}`} ref={refs[index]}>
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
