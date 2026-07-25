import { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
      password
    );
  };
   
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.username.trim()) {
    toast.error("Please enter your username or email");
    return;
  }

  if (!validatePassword(formData.password)) {
    toast.error(
      "Password must contain at least 8 characters, uppercase, lowercase, number and special character."
    );
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message);

      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("Server Error");
  }
};

  return (
    <div className="forgot-container">
      <div className="forgot-box">

        {/* Close Button */}
        <button
          className="close-btn"
          type="button"
          onClick={() => navigate(-1)}
        >
          <FaTimes />
        </button>

        <h2>Forgot Password</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Username or Email"
            value={formData.username}
            onChange={handleChange}
          />

          {/* New Password */}
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="New Password"
              value={formData.password}
              onChange={handleChange}
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="password-box">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <span
              className="eye-icon"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>

          <div className="password-rules">
            <p>Password must contain:</p>
            <ul>
              <li>✔ Minimum 8 characters</li>
              <li>✔ One uppercase letter</li>
              <li>✔ One lowercase letter</li>
              <li>✔ One number</li>
              <li>✔ One special character</li>
            </ul>
          </div>

          <button className="reset-btn" type="submit">
            Reset Password
          </button>

        </form>

      </div>
    </div>
  );
};

export default ForgotPassword;