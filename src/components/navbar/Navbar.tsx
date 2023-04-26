import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useShoppingCart } from "./../../context/ShoppingCartContext";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <NavLink className="navbarLogo" to="/">
            Logo.
          </NavLink>
        </div>
        <div className="right">
          <ul>
            <li className="navItem">
              <NavLink className="navLink" to="/">
                Home
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navLink" to="/store">
                Store
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navLink" to="/about">
                About
              </NavLink>
            </li>
            <li>
              {darkMode ? (
                <WbSunnyOutlinedIcon
                  onClick={toggle}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <DarkModeOutlinedIcon
                  onClick={toggle}
                  style={{ cursor: "pointer" }}
                />
              )}
            </li>
          </ul>
          {cartQuantity > 0 && (
            <button className="btnCart" onClick={openCart}>
              <ShoppingCartOutlinedIcon />
              <span className="badge">{cartQuantity}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
