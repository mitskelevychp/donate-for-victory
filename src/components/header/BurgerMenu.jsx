/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import IconEnter from "./icons/enter/IconEnter";
import IconOut from "./icons/enter/IconOut";
import doLogOut from "../../scripts/doLogOut";
import styles from "./Header.module.scss";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isUserLoggedIn = localStorage.getItem("userLogin") || null;
  const isLoggedInFromRedux = useSelector((state) => state.auth.isLoggedIn);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.wrapperMenu}>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </button>
      {isOpen && (
        <div className={`${styles.menuWrapper} ${isOpen ? styles.open : ""}`}>
          <div className={styles.buttonWrapper}>
            <button
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
              <Link to="/" className={styles.menuItem} onClick={toggleMenu}>
                Головна
              </Link>
              <Link
                to="/about-us"
                className={styles.menuItem}
                onClick={toggleMenu}
              >
                Про Нас
              </Link>
              <Link
                to="/categories"
                className={styles.menuItem}
                onClick={toggleMenu}
              >
                Категорії
              </Link>
              <Link to="/blog" className={styles.menuItem} onClick={toggleMenu}>
                Новини
              </Link>

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
