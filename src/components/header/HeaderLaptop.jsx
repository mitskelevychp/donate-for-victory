import React from "react";
import { useSelector } from "react-redux";
import IconEnter from "./icons/enter/IconEnter";
import IconOut from "./icons/enter/IconOut";
import Logo from "./Logo";
import Button from "../button/Button";
import Navigation from "./Navigation";
import doLogOut from "../../scripts/doLogOut";
import styles from "./Header.module.scss";

function HeaderLaptop() {
  const isLoggedInFromRedux = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className={styles.headerLaptop}>
      <Logo isMobile={false} />

      <Navigation />

      <Button
        toPage={isLoggedInFromRedux ? "/" : "/log-in"}
        width="40px"
        padding="10px"
        onClick={isLoggedInFromRedux ? doLogOut : null}
      >
        {isLoggedInFromRedux ? <IconOut /> : <IconEnter />}
      </Button>
    </div>
  );
}

export default HeaderLaptop;
