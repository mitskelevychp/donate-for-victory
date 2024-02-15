// /* eslint-disable react/button-has-type */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Header.module.scss";

function Logo({ isVisible, isMobile }) {
  return (
    <Link to="/" className={!isVisible && isMobile ? styles.hidden : null}>
      <div className={styles.logoImgWrapper}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
    </Link>
  );
}

export default Logo;
