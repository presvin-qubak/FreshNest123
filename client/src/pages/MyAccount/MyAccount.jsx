
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaShoppingBag,
  FaHeart,
  FaMapMarkerAlt,
  FaCog,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";
import "./MyAccount.css";

const MyAccount = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="my-account-page">

      {/* =========================
          Close Button
      ========================= */}

      <button
        className="account-close"
        onClick={() => navigate(-1)}
        aria-label="Close My Account"
      >
        ✕
      </button>


      {/* =========================
          Header
      ========================= */}

      <section className="account-header">

        <div className="account-avatar">
          <FaUser />
        </div>

        <div>
          <h1>My Account</h1>
          <p>
            Manage your FreshMart account and orders
          </p>
        </div>

      </section>


      {/* =========================
          Account Content
      ========================= */}

      <div className="account-container">


        {/* Profile Card */}

        <div className="profile-card">

          <div className="profile-avatar">
            <FaUser />
          </div>

          <div className="profile-info">

            <h2>
              Welcome to FreshMart 👋
            </h2>

            <p>
              Manage your profile, orders and preferences.
            </p>

          </div>

          <button
            className="edit-profile-btn"
            onClick={() => navigate("/settings")}
          >
            Edit Profile
          </button>

        </div>


        {/* Account Menu */}

        <div className="account-menu">


          {/* My Orders */}

          <button
            className="account-menu-item"
            onClick={() => navigate("/orders")}
          >

            <div className="menu-icon">
              <FaShoppingBag />
            </div>

            <div className="menu-text">

              <h3>
                My Orders
              </h3>

              <p>
                Track and view your orders
              </p>

            </div>

            <FaChevronRight className="menu-arrow" />

          </button>


          {/* Wishlist */}

          <button
            className="account-menu-item"
            onClick={() => navigate("/wishlist")}
          >

            <div className="menu-icon">
              <FaHeart />
            </div>

            <div className="menu-text">

              <h3>
                My Wishlist
              </h3>

              <p>
                View your saved products
              </p>

            </div>

            <FaChevronRight className="menu-arrow" />

          </button>


          {/* Address */}

          <button
            className="account-menu-item"
            onClick={() => navigate("/address")}
          >

            <div className="menu-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="menu-text">

              <h3>
                My Address
              </h3>

              <p>
                Manage your delivery addresses
              </p>

            </div>

            <FaChevronRight className="menu-arrow" />

          </button>


          {/* Settings */}

          <button
            className="account-menu-item"
            onClick={() => navigate("/settings")}
          >

            <div className="menu-icon">
              <FaCog />
            </div>

            <div className="menu-text">

              <h3>
                Settings
              </h3>

              <p>
                Manage your account preferences
              </p>

            </div>

            <FaChevronRight className="menu-arrow" />

          </button>


        </div>


        {/* Logout */}

        <button
          className="logout-btn"
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          Logout

        </button>


      </div>

    </div>
  );
};

export default MyAccount;
