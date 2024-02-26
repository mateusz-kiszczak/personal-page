import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import codeSamples from "../../utilities/codeSamples";
import CodeString from "../CodeString/CodeString";

import avatar from "./../../img/other/mat_web_blue.jpg";


const MyNameIs = () => {
  const aboutMePhotoRef = useRef(null)
  const [aboutMePhotoWidth, setAboutMePhotoWidth] = useState(0);

  const screenHeight = useSelector((state) => state.screenHeight.value);
  const screenWidth  = useSelector((state) => state.screenWidth.value);
  const appScrollTopPosition = useSelector((state) => state.appScrollTopPosition.value);

  useEffect(() => {
    const elementWidth = aboutMePhotoRef.current.getBoundingClientRect().width;
    setAboutMePhotoWidth(elementWidth);
  }, [screenHeight, screenWidth, appScrollTopPosition]);

  return (
    <section className="about-me__my-name-is default-container-width">
      <h2>Hi, my name is Mateusz</h2>
      <section  className="about-me__photo-and-array">
        <h3 style={{display: "none"}}>Photo and array of skills</h3>
        <div className="about-me__photo--wrapper">
          <div className="about-me__photo">
            <img  ref={aboutMePhotoRef} style={{height: aboutMePhotoWidth}} src={avatar} alt="Mateusz Kiszczak" />
          </div>
        </div>
        <pre className="about-me__skills-array">
          <CodeString codeString={codeSamples[3]}/>
        </pre>
      </section>
      <section className="about-me__description">
        <h3 style={{display: "none"}}>Shortly about me</h3>
        <p>Hi, my name is <span>Mateusz</span>, and I am a passionate programmer based in London. I started my journey with programming a couple of years ago, and I continue to develop my skills, mainly in web and app development.</p>
        <br/>
        <p>I gain my knowledge from a whole different kinds of sources. My core skills I get from the <span>Codecademy</span> learning platform, official documentations and books. The recent book that helped me with the website's backend is "PHP & MySQL: Server-side Web Development" by <span>Jon Duckett</span>. While doing projects, I go much deeper into technologies with official documentation and sometimes with the help of developers' blogs or forums like StackOverflow.</p>
        <br/>
        <p>Most of my projects were finalising a specific subject I had learned. I ensure they are challenging enough to get into the particular technology beyond the scope.</p>
        <br/>
        <p>I am proficient with <span>front-end development</span> and aspects of <span>UI/UX</span>. My mainly used languages include <span>HTML</span>, <span>CSS</span> and <span>JavaScript</span>. I know well framework, <span>ReactJS</span>, with libraries like <span>Router</span> or <span>Redux</span>. I also work effectively with the CSS preprocessor <span>Sass</span>.For the website developing I often use the <span>jQuery</span> and <span>Ajax</span>. I learned how to create wireframes and concept projects with Figma to make the creation process more efficient. I am familiar with basic graphic editing and creating using <span>Adobe Photoshop</span> and <span>Illustrator</span>.</p>
        <br/>
        <p>As for the backend technologies, I use <span>PHP</span> for <span>web development</span>. I work with <span>MySQL</span> to manage the database. I have improved my skills as a <span>Full-stack developer</span>, taking care of projects from design to entire competition and maintenance.</p>
        <br/>
        <p>I am open to new technologies and always happy to extend the list of my technical skills.</p>
      </section>
    </section>
  );
}


export default MyNameIs;
