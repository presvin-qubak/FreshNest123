import React, { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    terms: false,
  });

  // Password Show / Hide
  const [showPassword, setShowPassword] = useState(false);


  // Input Change
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

  };


  // Login Validation
  const handleSubmit = (e) => {

    e.preventDefault();


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;


    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }


    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email");
      return;
    }


    if (!formData.password) {
      toast.error("Password is required");
      return;
    }


    if (!passwordRegex.test(formData.password)) {
      toast.error(
        "Password needs 8+ characters, uppercase, lowercase, number and symbol"
      );
      return;
    }


    if (!formData.terms) {
      toast.error("Please accept Terms & Conditions");
      return;
    }


    toast.success("Login Successful");


    setTimeout(() => {
      navigate("/");
    }, 1500);

  };


  return (

    <div className="login-container">


      <form 
        className="login-box"
        onSubmit={handleSubmit}
      >


        {/* Close Button */}
        <button
          type="button"
          className="close-btn"
          onClick={() => navigate("/")}
        >
          <FaTimes />
        </button>



        <h2>
          Welcome Back
        </h2>


        <p>
          Login to your FreshMart account
        </p>



        {/* Email */}

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />



        {/* Password */}

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />


          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >

            {
              showPassword 
              ? <FaEyeSlash />
              : <FaEye />
            }

          </span>


        </div>




        {/* Terms */}

        <div className="terms">

          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />


          <label>
            I agree to the 
            <span> Terms & Conditions</span>
          </label>


        </div>




        {/* Forgot Password */}

        <div className="forgot">

          <Link to="/forgot-password"
          onClick={()=>navigate("/forgot-password")}>
            Forgot Password?
          </Link>

        </div>




        {/* Login Button */}
<button
  className="submit-login-btn"
  type="submit"
>
  Login
</button>




        {/* Signup */}

        <p className="signup-text">

          Don't have an account?

          <Link to="/signup"
          onClick={()=>navigate("/signup")}>
            Sign Up
          </Link>

        </p>



      </form>


    </div>

  );

};


export default Login;