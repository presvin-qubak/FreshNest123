import { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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

  if (!formData.name.trim()) {
    toast.error("Please enter your name");
    return;
  }

  if (!formData.email.trim()) {
    toast.error("Please enter your email");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    toast.error("Please enter a valid email");
    return;
  }

  if (!validatePassword(formData.password)) {
    toast.error(
      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
    );
    return;
  }


  try {

    const response = await axios.post(
      "http://localhost:5000/api/auth/signup",
      formData
    );


    toast.success(response.data.message);


    setFormData({
      name: "",
      email: "",
      password: "",
    });


    setTimeout(() => {
      navigate("/login");
    }, 2000);


  } catch (error) {

    toast.error(
      error.response?.data?.message || "Signup failed"
    );

  }

};
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">

        {/* Close Button */}
        <button
          className="close-btn"
          onClick={handleClose}
          type="button"
        >
          <FaTimes />
        </button>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
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

          <div className="password-rules">
            <p>Password must contain:</p>

            <ul>
              <li>✔ Minimum 8 characters</li>
              <li>✔ One uppercase letter</li>
              <li>✔ One lowercase letter</li>
              <li>✔ One number</li>
              <li>✔ One special character (@$!%*?&)</li>
            </ul>
          </div>

          <button className="signup-btn" type="submit">
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;