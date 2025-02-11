import { useState } from "react";
import { Link } from "react-router-dom";  // Corrected import for React Router v6
import "../CSS/Header.css";
import bar from "../../Utility/Image/bars.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const len = useSelector((store) => store.cart.items.length);

  // Close the menu if the user clicks outside the menu (for mobile devices)
  const closeMenu = (e) => {
    if (e.target.classList.contains("menu")) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      <nav className="Navbar">
        <p className="logo"><b>ShoopyGlobe</b></p>
        <ul
          className={`menu ${isMenuOpen ? "active" : ""}`}
          onClick={closeMenu} // Close menu if clicked outside
        >
          <li>
            <Link to="/" className="lk">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="lk">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="lk cart-link">
              Cart
              <span className="cart-count">{len}</span>
            </Link>
          </li>
        </ul>
        <img
          src={bar}
          className="bar"
          alt={isMenuOpen ? "Close Menu" : "Open Menu"} // Toggle alt text
          onClick={toggleMenu} // Toggle menu on click
        />
      </nav>
    </div>
  );
};

export default Header;
