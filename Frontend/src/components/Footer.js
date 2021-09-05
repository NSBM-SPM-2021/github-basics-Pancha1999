import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="socialMedia">
      <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p1> &copy; 2021 The Resturant.com</p1>
      <p2>theresturant@gmail.com</p2>
    </div>
  );
}
export default Footer;