import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { openCloseNavigation, } from "../../features/smallDevicesNavigation/isNavigationOpen";
import { updateSmallNavBarHeight } from "../../features/smallDevicesNavigation/smallNavBarHeight";

import openNavIcon from "../../img/icons/navigation/menu_open.svg";
import closeNavIcon from "../../img/icons/navigation/menu_close.svg";


const NavigationSmallBar = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const isNavigationOpen = useSelector((state) => state.isNavigationOpen.value);

  // Handle open/close navigation.
  const handleOnNavButtonClick = () => {
    if (isNavigationOpen) {
      dispatch(openCloseNavigation(false));
    } else {
      dispatch(openCloseNavigation(true));
    }
  };

  // Get device screen dimentions.
  const screenWidth = useSelector((state) => state.screenWidth.value);
  const screenHeight = useSelector((state) => state.screenHeight.value);

  useEffect(() => {
    // Close the small devices navigation when the screen ratio, dimentions change.
    if (isNavigationOpen) {
      dispatch(openCloseNavigation(false));
    }

    // Update element height.
    dispatch(updateSmallNavBarHeight(ref.current.clientHeight));
    // eslint-disable-next-line
  }, [screenWidth, screenHeight]);

  return (
    <section ref={ref} className={`main-nav-small__bar ${isNavigationOpen ? "navigation-opened--bar-bg" : ""}`}>
      <h1 style={{display: "none"}}>Navigation Bar</h1>
      <button 
        className="main-nav-small__bar__button"
        onClick={ () => handleOnNavButtonClick() }
      >
        <div className={`main-nav-small__bar__button__icons-wrapper ${isNavigationOpen ? "navigation-opened" : ""}`}>
          <img src={openNavIcon} alt="Open navigation" />
          <img src={closeNavIcon} alt="Close navigation" />
        </div>
      </button>
      <Link to="/">
        <span className="blue-text">Mat</span>
        <span className="pink-text">Personal</span>
        <span className="yellow-text">Page</span>
        .com
      </Link>
    </section>
  );
};

export default NavigationSmallBar
