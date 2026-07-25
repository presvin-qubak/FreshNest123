
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaCog,
  FaBell,
  FaMoon,
  FaGlobe,
  FaLock,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { useLanguage } from "../../context/LanguageContext";
import { useDarkMode } from "../../context/DarkModeContext";
import { useNotifications } from "../../context/NotificationContext";

import "./Settings.css";


const Settings = () => {

  const navigate = useNavigate();


  // =========================
  // Language
  // =========================

  const {
    language,
    changeLanguage,
    t,
  } = useLanguage();


  // =========================
  // Dark Mode
  // =========================

  const {
    darkMode,
    toggleDarkMode,
  } = useDarkMode();


  // =========================
  // Notifications
  // =========================

  const {
    notifications,
    toggleNotifications,
  } = useNotifications();


  // =========================
  // Logout
  // =========================

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };


  return (

    <div className="settings-page">


      {/* =========================
          Header
      ========================= */}

      <div className="settings-header">

        {/* Close Button */}

        <button
          className="settings-close"
          onClick={() => navigate(-1)}
          aria-label="Close settings"
        >
          ✕
        </button>


        <div className="settings-header-icon">
          <FaCog />
        </div>


        <h1>
          {t.settingsTitle}
        </h1>


        <p>
          {t.settingsSubtitle}
        </p>

      </div>



      {/* =========================
          Settings Container
      ========================= */}

      <div className="settings-container">


        {/* =========================
            Account Settings
        ========================= */}

        <div className="settings-section">

          <h2>
            {t.accountSection}
          </h2>


          {/* Profile */}

          <div className="settings-card">

            <div className="settings-icon">
              <FaUser />
            </div>


            <div className="settings-text">

              <h3>
                {t.profile}
              </h3>

              <p>
                {t.profileDescription}
              </p>

            </div>


            <button
              className="settings-action"
              onClick={() => navigate("/profile")}
            >
              {t.manage}
            </button>

          </div>



          {/* Password & Security */}

          <div className="settings-card">

            <div className="settings-icon">
              <FaLock />
            </div>


            <div className="settings-text">

              <h3>
                {t.password}
              </h3>

              <p>
                {t.passwordDescription}
              </p>

            </div>


            <button
              className="settings-action"
              onClick={() =>
                navigate("/forgot-password")
              }
            >
              {t.manage}
            </button>

          </div>

        </div>



        {/* =========================
            Preferences
        ========================= */}

        <div className="settings-section">

          <h2>
            {t.preferences}
          </h2>



          {/* =========================
              Notifications
          ========================= */}

          <div className="settings-card">

            <div className="settings-icon">
              <FaBell />
            </div>


            <div className="settings-text">

              <h3>
                {t.notifications}
              </h3>

              <p>
                {t.notificationsDescription}
              </p>

            </div>


            {/* Notification Switch */}

            <label className="switch">

              <input
                type="checkbox"
                checked={notifications}
                onChange={toggleNotifications}
              />

              <span className="slider"></span>

            </label>

          </div>



          {/* =========================
              Dark Mode
          ========================= */}

          <div className="settings-card">

            <div className="settings-icon">
              <FaMoon />
            </div>


            <div className="settings-text">

              <h3>
                {t.darkMode}
              </h3>

              <p>
                {t.darkModeDescription}
              </p>

            </div>


            {/* Dark Mode Switch */}

            <label className="switch">

              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />

              <span className="slider"></span>

            </label>

          </div>



          {/* =========================
              Language
          ========================= */}

          <div className="settings-card">

            <div className="settings-icon">
              <FaGlobe />
            </div>


            <div className="settings-text">

              <h3>
                {t.language}
              </h3>

              <p>
                {t.languageDescription}
              </p>

            </div>


            {/* Language Dropdown */}

            <div className="language-dropdown">

              <select
                className="language-select"
                value={language}
                onChange={(e) =>
                  changeLanguage(e.target.value)
                }
              >

                <option value="English">
                  🇬🇧 English
                </option>

                <option value="Tamil">
                  🇮🇳 தமிழ்
                </option>

                <option value="Japanese">
                  🇯🇵 日本語
                </option>

                <option value="Arabic">
                  🇸🇦 العربية
                </option>

                <option value="Hindi">
                  🇮🇳 हिन्दी
                </option>

              </select>

            </div>

          </div>

        </div>



        {/* =========================
            Logout
        ========================= */}

        <div className="logout-section">

          <button
            className="settings-logout"
            onClick={handleLogout}
          >

            <FaSignOutAlt />

            {t.logout}

          </button>

        </div>


      </div>

    </div>

  );

};


export default Settings;

