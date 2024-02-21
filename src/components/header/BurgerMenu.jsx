import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import doLogOut from "../../scripts/doLogOut";
import IconEnter from "./icons/enter/IconEnter";
import IconOut from "./icons/enter/IconOut";
import { menuItems } from "../../content/menuItems";
import styles from "./Header.module.scss";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isUserLoggedIn = localStorage.getItem("userLogin") || null;
  const isLoggedInFromRedux = useSelector((state) => state.auth.isLoggedIn);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.wrapperMenu}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={toggleMenu}
      >
        {[...Array(3)].map((item, index) => (
          <div key={index} className={styles.bar} />
        ))}
      </button>
      {isOpen && (
        <div className={`${styles.menuWrapper} ${isOpen ? styles.open : ""}`}>
          <div className={styles.buttonWrapper}>
            <button
              type="button"
              className={`${styles.toggleButton} ${styles.toggleCloseButton} ${
                isOpen ? styles.cross : ""
              } ${styles.toggleButtonClose}`}
              onClick={toggleMenu}
            >
              <div className={styles.bar} />
              <div className={styles.bar} />
            </button>
            <Button
              toPage={isLoggedInFromRedux ? "/" : "/log-in"}
              width="40px"
              color=""
              onClick={() => {
                if (isLoggedInFromRedux) {
                  doLogOut();
                }
                toggleMenu();
              }}
              className={`${styles.button} ${styles.buttonMobileHeader}`}
            >
              {isLoggedInFromRedux ? <IconOut /> : <IconEnter />}
            </Button>
          </div>

          <div className={styles.menuListWrapper}>
            <div className={styles.menuList}>
              {menuItems.map((elem) => (
                <Link
                  key={elem.text}
                  to={elem.to}
                  className={styles.menuItem}
                  onClick={toggleMenu}
                >
                  {elem.text}
                </Link>
              ))}
              {isUserLoggedIn ? (
                <Link
                  to="/account"
                  onClick={toggleMenu}
                  className={styles.menuItem}
                >
                  Кабінет
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default BurgerMenu;
