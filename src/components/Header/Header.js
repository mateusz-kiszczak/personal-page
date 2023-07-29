import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Navigation from "../Navigation/Navigation";
import NavigationSmallBar from "../NavigationSmall/NavigationSmallBar";
import NavigationSmallLinks from "../NavigationSmall/NavigationSmallLinks";
import CodeString from "../CodeString/CodeString";
import GoDownButton from "../GoDownButton/GoDownButton";

import leftFillNum from "../../utilities/leftFillNumber";


const Header = (props) => {
  // Set client (cursor) position.
  const clientPositionX = useSelector((state) => state.positionX.value);
  const clientPositionY = useSelector((state) => state.positionY.value);

  // Create a 'digital clock' that shows current time.
  const [time, setTime] = useState(`
    ${leftFillNum(new Date().getHours(), 2)} :
    ${leftFillNum(new Date().getMinutes(), 2)} :
    ${leftFillNum(new Date().getSeconds(), 2)}
  `);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(`
        ${leftFillNum(date.getHours(), 2)} : 
        ${leftFillNum(date.getMinutes(), 2)} : 
        ${leftFillNum(date.getSeconds(), 2)}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);


  // Get client device width.
  const screenWidth = useSelector((state) => state.screenWidth.value);
 
  
  return (
    <div className="main-header__wrapper" style={{overflow: `${screenWidth <= 480 ? "hidden" : "visible"}`}}>
      {(screenWidth <= 480) && <NavigationSmallLinks />}
      <header className="main-header">
        <div className="main-header__container default-container-width">
          {screenWidth <= 480 ? <NavigationSmallBar /> : <Navigation/>}
          <div className="main-header__middle">
            <div className="main-header__middle__heading">
              <h1>{props.title}</h1>
            </div>
            <CodeString codeString={props.codeString} />
          </div>
          <div className="main-header__bottom">
            <p className="mono-string"><span>{clientPositionX}</span> | <span>{clientPositionY}</span></p>
            <GoDownButton />
            <p className="mono-string">{time}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
