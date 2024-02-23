import React, { useState, useContext } from "react";
import Context from "../Context";
import Search from "./Search";
import ActiveLink from "./ActiveLink";
import { subCategories } from "../../content/menuItems";
import styles from "./Header.module.scss";

function Navigation() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLinkColored, setLinkColored] = useState(false);
  const { isLinkVisible } = useContext(Context);
  const isUserLoggedIn = localStorage.getItem("userLogin") || null;
  const isAdmin = localStorage.getItem("isAdmin") || null;

  const style = {
    display: isLinkVisible ? "flex" : "none",
  };

  const showDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleLinkColored = () => {
    setLinkColored(true);
  };

  return (
    <div className={styles.navWrapper}>
      <nav style={style} className={styles.nav}>
        <ul className={`${styles.navItem} ${styles.active}`}>
          <ActiveLink
            label="головна"
            to="/"
            className={styles.navList}
            onClick={() => setLinkColored(false)}
          />
          <div
            className={styles.dropdown}
            onMouseEnter={showDropdown}
            onMouseLeave={showDropdown}
          >
            <div
              className={isLinkColored ? styles.navListActive : styles.navList}
            >
              Категорії
            </div>
            {isDropdownVisible && (
              <div className={styles.dropdownContent}>
                {subCategories.map((item) => (
                  <ActiveLink
                    key={item.label}
                    label={item.label}
                    to={item.to}
                    onClick={showDropdown}
                    className={styles.navList}
                    handleLinkColored={handleLinkColored}
                  />
                ))}
              </div>
            )}
          </div>
          <ActiveLink
            label="новини"
            to="/blog"
            className={styles.navList}
            onClick={() => setLinkColored(false)}
          />
          {isUserLoggedIn ? (
            <ActiveLink
              label="кабінет"
              to={isAdmin === "false" ? "/account" : "/adm-page"}
              className={styles.navList}
              onClick={() => setLinkColored(false)}
            />
          ) : null}
        </ul>
      </nav>

      <Search />
    </div>
  );
}

export default Navigation;
