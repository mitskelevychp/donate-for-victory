// /* eslint-disable react/button-has-type */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../footer/icons/logo.png";
import styles from "./Header.module.scss";

function Logo({ isVisible, isMobile }) {
  return (
    <Link to="/" className={!isVisible && isMobile ? styles.hidden : null}>
      <img src={logo} alt="Logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
