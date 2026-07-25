import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";


const PageNotFound = () => {

  const navigate = useNavigate();


  return (

    <div className="not-found-container">


      <div className="not-found-card">


        <h1>
          404
        </h1>


        <h2>
          Page Not Found
        </h2>


        <p>
          Sorry, the page you are looking for
          does not exist.
        </p>



        <button
          onClick={() => navigate("/")}
        >
          Go Home
        </button>


      </div>


    </div>

  );

};


export default PageNotFound;