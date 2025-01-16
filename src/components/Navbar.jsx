import { logo } from "../assets";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [toggle]);

  return (
    <nav>
      <div className="logo" onClick={toTop}>
        <img src={logo} alt="logo" />
        <p>James Bruno</p>
      </div>

      {/* Desktop Menu */}
      <ul className="desktop-menu">
        <li>Get Started Now</li>
        <li>Login</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="menu-icon">
        {toggle ? (
          <MdClose size={24} onClick={() => setToggle(false)} />
        ) : (
          <MdOutlineMenuOpen size={24} onClick={() => setToggle(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${toggle ? "show" : ""}`}>
        <ul>
          <li onClick={() => setToggle(false)}>Get Started Now</li>
          <li onClick={() => setToggle(false)}>Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
