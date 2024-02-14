// /* eslint-disable react/button-has-type */
import React from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderLaptop from "./HeaderLaptop";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <HeaderMobile />
      <HeaderLaptop />
    </header>
  );
}

export default Header;
