import React from "react";
import classes from "./Header.module.css";
import { SocialIcon } from "react-social-icons";
import HamburgerIcon from "../UI/HamburgerIcon/HamburgerIcon";
import { NavLink } from "react-router-dom";

function Header(props){
    return(
      <header className={classes.Header}>
          <nav className={classes.Navbar}>
              <ul>
                  <li><NavLink to="/" >Dakurah</NavLink></li>
              </ul>
              <ul>
                  <li><NavLink  activeClassName={classes.activeRoute} to="/my-works">My Works</NavLink></li>
                  <li><NavLink  activeClassName={classes.activeRoute} to="/about-me">About</NavLink></li>
                  <li><NavLink  activeClassName={classes.activeRoute} to="/contact-me">Contact</NavLink></li>
              </ul>
              <ul>
                  <li>
                    <SocialIcon style={{height: 35, width: 35}} target="_blank" bgColor="#000" fgColor="#fff" url="https://github.com/JohnnyEvans01"/>
                  </li>
                  {/* <li>
                    <SocialIcon style={{height: 35, width: 35}} target="_blank" fgColor="#fff" url="https://web.facebook.com/johnny.evans.8/"/>
                  </li> */}
                  <li>
                    <SocialIcon style={{height: 35, width: 35}} target="_blank" fgColor="#fff" url="https://www.linkedin.com/login"/>
                  </li>
              </ul>
              <HamburgerIcon wasClicked={props.wasClicked}/>
          </nav>
      </header>  
    );
}

export default Header;