import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import githubIcon from "./../../img/icons/technologies/github.svg";
import netlifyIcon from "./../../img/icons/technologies/netlify.svg";
import figmaIcon from "./../../img/icons/technologies/figma.svg";
import awsIcon from "./../../img/icons/technologies/aws.svg";
import arrowIcon from "./../../img/icons/projects/arrow.svg";
import closeIcon from "./../../img/icons/projects/close.svg";
import webIcon from "./../../img/icons/other/web.svg";



const Project = (props) => {
  const screenHeight = useSelector((state) => state.screenHeight.value);
  const screenWidth  = useSelector((state) => state.screenWidth.value);
  const appScrollTopPosition = useSelector((state) => state.appScrollTopPosition.value);
  const allSortedProjects = useSelector((state) => state.sortProjects.value);

  const projectTop = useRef(null);

  const [projectHeight, setProjectHeight] = useState(0);
  const [projectOpen, setProjectOpen] = useState(false);

  // Update the project height every time the screen changes.
  useEffect(() => {
    const topHeight = projectTop.current.getBoundingClientRect().height;
    setProjectHeight(topHeight);
  }, [screenHeight, screenWidth, appScrollTopPosition, allSortedProjects]);

  // Close open project when screen changes.
  useEffect(() => {
    setProjectOpen(false);
  }, [screenHeight, screenWidth]);


  const handleOnButtonClick = () => {
    projectOpen ? setProjectOpen(false) : setProjectOpen(true);
  };


  return (
    <section className={`${props.isSecondHalf ? "project__content--second-half" : "project__content"}`} style={!projectOpen ? {height: projectHeight} : {}}>
      <div 
        ref={projectTop} 
        className={`${projectOpen ? "project--open--top" : ""} project__top`}
        onClick={() => handleOnButtonClick()}
      >
        <div className="project-header-tags-wrapper">
          <h3 className={`my-experience__top__underline--${props.item.color}`}>{`${props.index + 1}. ${props.item.title}`}</h3>
          <p>
            {props.item.tags.map((tag, index) => {
              return (
                <span className="project-tag-wrapper" key={`tag-${tag}-${index}`}>
                  <span className="mono-string">#</span>
                  <span className="mono-string project-tag">{tag} </span>
                </span>
              );
            })}
          </p>
        </div>
        <div className="project-buttons-wrapper">
          <button className={`project__top__open-button ${projectOpen ? "project-button-hidden" : "project-button-visible"}`}>
            <img src={arrowIcon} alt="Show details" />
          </button>
          <button className={`project__top__close-button ${projectOpen ? "project-button-visible" : "project-button-hidden"}`}>
            <img src={closeIcon} alt="Close details" />
          </button>
        </div>
      </div>
      <hr></hr>
      <div className={`${projectOpen ? "project--open" : ""} project__bottom`}>
        <div className="project__screen-shot">
          <img src={props.item.img} alt={`${props.item.title} screen shot.`} />
        </div>
        <div className="highlight-projects__links">
          {props.item.links.hasOwnProperty('github') &&
            <div>
              <img src={githubIcon} alt="GitHub icon." />
              <a href={props.item.links.github} target="_blank" rel="noreferrer">GitHub Page</a>
            </div>
          }
          {props.item.links.hasOwnProperty('netlify') &&
            <div>
              <img src={netlifyIcon} alt="Netlify icon." />
              <a href={props.item.links.netlify} target="_blank" rel="noreferrer">Live Example</a>
            </div>
          }
          {props.item.links.hasOwnProperty('aws') &&
            <div>
              <img src={awsIcon} alt="Netlify icon." />
              <a href={props.item.links.aws} target="_blank" rel="noreferrer">Live Example</a>
            </div>
          }
          {props.item.links.hasOwnProperty('figma') &&
            <div>
              <img src={figmaIcon} alt="Netlify icon." />
              <a href={props.item.links.figma} target="_blank" rel="noreferrer">Visual Project</a>
            </div>
          }
          {props.item.links.hasOwnProperty('live') &&
            <div>
              <img src={webIcon} alt="Web icon." />
              <a href={props.item.links.live} target="_blank" rel="noreferrer">Live Project</a>
            </div>
          }
        </div>
      </div>
    </section>
  );
}



export default Project;
