import { NavLink } from "react-router-dom";
import lOGO from "../../assets/LOGO.svg";
const Header = () => {
  return (
    <header className="navigation">
      <img src={lOGO} alt="logo kasa" />
      <ul className="navigation_link">
        <NavLink to={"/"}>
          <li>Acceuil</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
