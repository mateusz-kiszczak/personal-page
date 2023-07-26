import { Route, Routes } from "react-router-dom";

import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";

import { useDispatch} from "react-redux";
import { updateClientY } from "../features/clientPosition/clientPositionY";
import { updateClientX } from "../features/clientPosition/clientPositionX";

import leftFillNum from "../utilities/leftFillNumber";


const App = () => {
  const dispatch = useDispatch();

  const handleOnMouseMove = e => {
    const clientX = leftFillNum(e.clientX, 4);
    const clientY = leftFillNum(e.clientY, 4);
    
    dispatch(updateClientX(clientX));
    dispatch(updateClientY(clientY));
  };

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
