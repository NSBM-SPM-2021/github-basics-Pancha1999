import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/resturant-3.jpg";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> The Resturant </h1>
        <p> Find your taste</p>
        <Link to="/menu">
          <button> Select your Menu </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;