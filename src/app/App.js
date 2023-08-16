import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch} from "react-redux";

import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

import leftFillNum from "../utilities/leftFillNumber";

import { updateClientY } from "../features/clientPosition/clientPositionY";
import { updateClientX } from "../features/clientPosition/clientPositionX";
import { updateWidth } from "../features/screenDimentions/screenWidth";
import { updateHeight } from "../features/screenDimentions/screenHeight";
import { updateTopPosition } from "../features/appScrollTopPosition/appScrollTopPosition";



const App = () => {
  const dispatch = useDispatch();


  // POSITION OF USER MOUSE/TOUCH

  // Get user mouse position.
  const handleOnMouseMove = e => {
    const clientX = leftFillNum(e.clientX, 4);
    const clientY = leftFillNum(e.clientY, 4);
    
    dispatch(updateClientX(clientX));
    dispatch(updateClientY(clientY));
  };

  // Get device dimentions.
  const updateScreenDimentions = () => {
    dispatch(updateWidth(window.screen.width));
    dispatch(updateHeight(window.screen.height));
  };

  useEffect(() => {
    dispatch(updateWidth(window.screen.width));
    dispatch(updateHeight(window.screen.height));

    window.addEventListener("resize", updateScreenDimentions);
    
    return () => window.removeEventListener("resize", updateScreenDimentions);
    // eslint-disable-next-line
  }, []);


  // DETECT SCROLL

  const appRef = useRef(null);

  // Use getBoundingClientRect() top method to detect user scroll.
  // Get App top (y) position.
  // This will give an information when app is on scroll and help render onscroll animation in other elements.
  useEffect(() => {
    const handleOnScroll = () => {
      dispatch(updateTopPosition(appRef.current.getBoundingClientRect().top));
    };

    window.addEventListener("scroll", handleOnScroll);

    return () => window.removeEventListener("scroll", handleOnScroll);
  }, [dispatch]);


  // WHEN USE LINK LET THE PAGE APEAR AT THE TOP.

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  // HANDLE SCROLL UP.

  const handleScrollUp = () => {
    appRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  return (
    <div 
      className="app" 
      ref={appRef} 
      onMouseMove={(e) => handleOnMouseMove(e)}
    >
      <BackToTopButton handleScrollUp={handleScrollUp}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}



export default App;
