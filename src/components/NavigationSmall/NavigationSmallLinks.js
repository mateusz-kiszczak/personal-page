import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const NavigationSmallLinks = () => {
  const smallNavBarHeight = useSelector((state) => state.smallNavBarHeight.value);
  const isNavigationOpen = useSelector((state) => state.isNavigationOpen.value);

  return (
    <nav className={`main-nav-small__links ${isNavigationOpen ? "navigation-opened--links" : ""}`} style={{top: smallNavBarHeight}}>
      <ul className="main-nav-small__links__list">
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? "active-link--home" : "in-active-link--home")}>
            <div></div>
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({isActive}) => (isActive ? "active-link--projects" : "in-active-link--projects")}>
            <div></div>
            <p>Projects</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? "active-link--about" : "in-active-link--about")}>
            <div></div>
            <p>About Me</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};


export default NavigationSmallLinks
