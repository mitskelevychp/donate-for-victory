import React, { useContext } from "react";
import BurgerMenu from "./BurgerMenu";
import Context from "../Context";
import Logo from "./Logo";
import Search from "./Search";
import styles from "./Header.module.scss";

function HeaderMobile() {
  const context = useContext(Context);

  return (
    <div className={styles.mobileHeader}>
      <BurgerMenu />
      <Logo isVisible={context.isLinkVisible} isMobile />
      <Search />
    </div>
  );
}

export default HeaderMobile;
