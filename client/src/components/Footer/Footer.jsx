import React, { useContext } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Footer = () => {
  const { wishlist } = useContext(StoreContext);

  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Logo */}
        <div className="footer-logo">
          <h2>🌿 FreshMart</h2>
          <p>Your one-stop shop for fresh groceries and daily essentials.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>

            <li>
              <NavLink to="/category">Categories</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Customer */}
        <div className="footer-links">
          <h3>Customer</h3>

          <ul>
            <li>
              <NavLink to="/profile">My Account</NavLink>
            </li>

            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>

            <li>
              <NavLink to="/wishlist">
                Wishlist ({wishlist.length})
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact">Support</NavLink>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 FreshMart. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;