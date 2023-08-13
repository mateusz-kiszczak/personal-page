import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import arrowUp from "./../../img/icons/other/arrow_up.svg";


const BackToTopButton = () => {
  const screenHeight = useSelector((state) => state.screenHeight.value);
  const appScrollTopPosition = useSelector((state) => state.appScrollTopPosition.value);

  const [isVisible, setIsVisible] = useState(false);

  const handleOnButtonClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const appTopPosition = appScrollTopPosition * -1;

    if (appTopPosition >= screenHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

  }, [appScrollTopPosition, screenHeight]);

  return (
    <button 
      className={`back-to-top ${isVisible ? "" : "button-unvisible"}`} 
      onClick={ () => handleOnButtonClick() }
    >
      <img src={arrowUp} alt="Arrow up" />
    </button>
  );
}


export default BackToTopButton;
