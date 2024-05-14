import { NavLink } from "react-router-dom";
import lOGO from "../../assets/LOGO.svg";
const Header = () => {
  const linkIsActive = { textDecoration: "underline" };

  return (
    <header className="navigation">
      <img className="navigation-img" src={lOGO} alt="logo kasa" />
      <ul className="navigation_link">
        <NavLink
          style={({ isActive }) => (isActive ? linkIsActive : undefined)}
          to={"/"}
        >
          <li>ACCEUIL</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? linkIsActive : undefined)}
          to={"/about"}
        >
          <li>A PROPOS</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
