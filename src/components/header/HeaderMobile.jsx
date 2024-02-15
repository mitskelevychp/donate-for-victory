// /* eslint-disable react/button-has-type */
import React, { useState, useContext } from "react";
import BurgerMenu from "./BurgerMenu";
import Context from "../Context";
import Logo from "./Logo";
import Search from "./Search";
import styles from "./Header.module.scss";

function HeaderMobile() {
  const [showInput, setShowInput] = useState(false);
  const context = useContext(Context);

  const toggleBar = () => {
    if (showInput) {
      setShowInput(false);
    }
  };

  return (
    <div className={styles.mobileHeader}>
      <BurgerMenu toggleBar={toggleBar} />
      <Logo isVisible={context.isLinkVisible} isMobile />
      <Search />
    </div>
  );
}

export default HeaderMobile;
