import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch} from "react-redux";

import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";

import leftFillNum from "../utilities/leftFillNumber";

import { updateClientY } from "../features/clientPosition/clientPositionY";
import { updateClientX } from "../features/clientPosition/clientPositionX";
import { updateWidth } from "../features/screenDimentions/screenWidth";
import { updateHeight } from "../features/screenDimentions/screenHeight";


const App = () => {
  const dispatch = useDispatch();

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

  return (
    <div className="app" onMouseMove={(e) => handleOnMouseMove(e)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
