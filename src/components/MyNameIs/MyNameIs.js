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
      <h2>Hi, I am Mateusz</h2>
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
        <p>I am a motivated Full-Stack Web Developer beginning an exciting career change. I have a strong background in self-directed learning and hands-on project experience.</p>
        <br/>
        <p>I am skilled in several modern web technologies. On the front end, I create user-friendly and responsive websites using React, JavaScript, HTML, CSS, and Sass. I enjoy bringing designs to life and making sure users have a smooth experience.</p>
        <br/>
        <p>On the back end, I develop solid server-side logic and manage databases with Python/Django, PHP, and SQL. I know how to build RESTful APIs and handle data efficiently to support dynamic web applications.</p>
        <br/>
        <p>My development work focuses on projects. I have designed, built, and launched full-stack applications like "Kingpiggy," a royalty-free image platform, and "Quizify," an interactive quiz maker. These projects demonstrate my ability to manage complex features from start to finish, including user authentication, image processing, and database integration.</p>
        <br/>
        <p>I have backed these experiences with formal certifications, like the Front-End Engineer Career Path from Codecademy and the Web Developer program from HarvardX (edX). These courses strengthened my understanding of computer science basics and advanced web programming.</p>
        <br/>
        <p>I am really excited about cloud deployment and see a lot of potential in AWS. I am working on improving my skills in this area to help with scaling and managing web application infrastructures. My goal is to become skilled in deploying strong, high-performance solutions.</p>
        <br/>
        <p>I am looking for an entry-level Junior Full-Stack or Front-End Developer role in London. I am eager to use my growing skills and strong work ethic in a development team. I love learning and am ready to face new challenges in a professional environment.</p>
      </section>
    </section>
  );
}


export default MyNameIs;
