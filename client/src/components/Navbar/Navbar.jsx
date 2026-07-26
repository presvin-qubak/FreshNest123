
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

import "./Navbar.css";

import { StoreContext } from "../../context/StoreContext";
import { useLanguage } from "../../context/LanguageContext";
import { getImageUrl } from "../../utils/getImageUrl";

const Navbar = () => {

  const navigate = useNavigate();

  /* =========================
     Store Context
  ========================= */

  const {
    cartCount,
    food_list,
  } = useContext(StoreContext);


  /* =========================
     Language Context
  ========================= */

  const {
    t,
  } = useLanguage();


  /* =========================
     Search State
  ========================= */

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");


  /* =========================
     Search Products
  ========================= */

  const filteredProducts =
    food_list?.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    ) || [];


  return (

    <nav className="navbar">


      {/* =========================
          Logo
      ========================= */}

      <div
        className="logo"
        onClick={() => navigate("/")}
      >
        🌿 <span>FreshMart</span>
      </div>


      {/* =========================
          Navigation
      ========================= */}

      <ul className="nav-links">

        <li>
          <NavLink to="/">
            {t.home}
          </NavLink>
        </li>


        <li>
          <NavLink to="/shop">
            {t.shop}
          </NavLink>
        </li>


        <li>
          <NavLink to="/category">
            {t.category}
          </NavLink>
        </li>


        <li>
          <NavLink to="/offer">
            {t.offer}
          </NavLink>
        </li>


        <li>
          <NavLink to="/contact">
            {t.contact}
          </NavLink>
        </li>

      </ul>


      {/* =========================
          Right Side
      ========================= */}

      <div className="nav-right">


        {/* =========================
            Search
        ========================= */}

        <div
          className={`search-container ${
            searchOpen ? "open" : ""
          }`}
        >

          {searchOpen && (

            <input
              type="text"
              className="search-input"

              placeholder={
                t.searchProducts ||
                "Search products..."
              }

              value={search}

              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          )}


          <div
            className="icon-box"

            onClick={() =>
              setSearchOpen(!searchOpen)
            }
          >

            <FaSearch className="icon" />

          </div>


          {/* Search Results */}

          {searchOpen && search && (

            <div className="search-results">

              {filteredProducts.length > 0 ? (

                filteredProducts.map((item) => (

                  <div
                    className="search-item"

                    key={item.id}

                    onClick={() => {

                      navigate(
                        `/product/${item.id}`
                      );

                      setSearch("");

                      setSearchOpen(false);
                    }}
                  >

                    <img
                      src={getImageUrl(item.image)}
                      alt={item.name}
                    />

                    <span>
                      {item.name}
                    </span>

                  </div>

                ))

              ) : (

                <p className="no-result">
                  {t.noProductsFound ||
                    "No products found"}
                </p>

              )}

            </div>

          )}

        </div>


        {/* =========================
            Cart
        ========================= */}

        <div
          className="icon-box cart-icon"

          onClick={() =>
            navigate("/cart")
          }
        >

          <FaShoppingCart className="icon" />


          {cartCount > 0 && (

            <span className="cart-badge">
              {cartCount}
            </span>

          )}

        </div>


        {/* =========================
            Login
        ========================= */}

        <button
          className="login-btn"

          onClick={() =>
            navigate("/login")
          }
        >
          {t.login || "Login"}
        </button>


      </div>

    </nav>

  );
};

export default Navbar;

