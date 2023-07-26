import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <Link to="/">
        <span className="blue-text">Mat</span>
        <span className="pink-text">Personal</span>
        <span className="yellow-text">Page</span>
        .com
      </Link>
      <ul className="main-nav__list">
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
}

export default Navigation;