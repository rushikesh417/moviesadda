import React from "react";
import {
  
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </div>

        <div className="socialIcons">
          <a rel="nofollow" href="https://github.com/rushikesh417">
            <span className="icon"><FaGithub /></span></a>
          <a rel="nofollow" href="https://www.instagram.com/_rushikesh._08/?hl=en">
            <span className="icon"><FaInstagram /></span></a>
          <a rel="nofollow" href="https://twitter.com/_rushikesh_8?t=WQXuUYRh9sI4TcKu8Mn7Iw&s=09">
            <span className="icon"><FaTwitter /></span></a>
          <a rel="nofollow" href="https://www.linkedin.com/in/rushikesh-mane-696930233/">
            <span className="icon"><FaLinkedin /></span></a>



        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;