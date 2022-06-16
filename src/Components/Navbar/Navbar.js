import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./../logo.png";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOn, setOn] = useState(false);
  const toggle = () => {
    isOn ? setOn(false) : setOn(true);
  };

  return (
    <div className="nav">
      {isOn ? (
        <ImCross className="hamburger-menu" onClick={() => toggle()} />
      ) : (
        <GiHamburgerMenu className="hamburger-menu" onClick={() => toggle()} />
      )}
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className={isOn ? "links-expanded" : "links"}>
        <Link to="/Search-movie">Home</Link>
        <Link to="/Search-movie">Movies</Link>
        <Link to="/Search-movie">Login</Link>
        <Link to="/Search-movie">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
