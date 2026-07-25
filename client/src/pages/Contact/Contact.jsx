import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import toast from "react-hot-toast";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";


const Contact = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      toast.error("Please fill all fields");
      return;
    }


    try {

      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );


      const data = await response.json();


      if (response.ok) {

        toast.success(data.message);


        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });


      } else {

        toast.error(data.message);

      }


    } catch (error) {

      toast.error("Server Error");

    }

  };


  return (

    <div className="contact-container">


      {/* Close Button */}

      <button
        className="contact-close-btn"
        type="button"
        onClick={() => navigate(-1)}
      >
        <FaTimes />
      </button>



      <div className="contact-left">

        <h2>
          Contact Us
        </h2>


        <p>
          We'd love to hear from you.
        </p>



        <div className="contact-info">

          <p>
            <FaPhoneAlt />
            +91 9876543210
          </p>


          <p>
            <FaEnvelope />
            support@freshmart.com
          </p>


          <p>
            <FaMapMarkerAlt />
            Chennai, India
          </p>


        </div>



        <div className="social-icons">

          <FaFacebook />

          <FaInstagram />

          <FaLinkedin />

        </div>


      </div>




      <div className="contact-right">


        <form onSubmit={handleSubmit}>


          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />



          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />



          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />



          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />



          <button type="submit">
            Send Message
          </button>



        </form>


      </div>


    </div>

  );

};


export default Contact;