import React from "react";
import classes from "./Header.module.css";
import { SocialIcon } from "react-social-icons";

function Header(){
    return(
      <header className={classes.Header}>
          <nav className={classes.Navbar}>
              <ul>
                  <li><a href="#">Dakurah</a></li>
                  <li><a href="#">My Works</a></li>
                  <li><a href="#">About me</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
              <ul>
                  <li>
                    <SocialIcon style={{height: 35, width: 35}} target="_blank" bgColor="#000" fgColor="#fff" url="https://github.com/JohnnyEvans01"/>
                  </li>
                  <li>
                    <SocialIcon style={{height: 35, width: 35}} target="_blank" fgColor="#fff" url="https://web.facebook.com/johnny.evans.8/"/>
                  </li>
                  <li>
                    <SocialIcon style={{height: 35, width: 35}} target="_blank" fgColor="#fff" url="https://www.linkedin.com/login"/>
                  </li>
              </ul>
          </nav>
      </header>  
    );
}

export default Header;