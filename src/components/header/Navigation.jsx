import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import Search from "./Search";
import ActiveLink from "./ActiveLink";
import { subCategories } from "../../content/menuItems";
import styles from "./Header.module.scss";

function Navigation() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { isLinkVisible } = useContext(Context);
  const isUserLoggedIn = localStorage.getItem("userLogin") || null;
  const isAdmin = localStorage.getItem("isAdmin") || null;

  const style = {
    display: isLinkVisible ? "flex" : "none",
  };

  const showDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div className={styles.navWrapper}>
      <nav style={style} className={styles.nav}>
        <ul className={`${styles.navItem} ${styles.active}`}>
          <ActiveLink label="головна" to="/" className={styles.navList} />
          <div
            className={styles.dropdown}
            onMouseEnter={showDropdown}
            onMouseLeave={showDropdown}
          >
            <Link className={styles.navList}>Категорії</Link>
            {isDropdownVisible && (
              <div className={styles.dropdownContent}>
                {subCategories.map((item) => (
                  <ActiveLink
                    key={item.label}
                    label={item.label}
                    to={item.to}
                    onClick={showDropdown}
                    className={styles.navList}
                  />
                ))}
              </div>
            )}
          </div>
          <ActiveLink label="новини" to="/blog" className={styles.navList} />
          {isUserLoggedIn ? (
            <ActiveLink
              label="кабінет"
              to={isAdmin === "false" ? "/account" : "/adm-page"}
              className={styles.navList}
            />
          ) : null}
        </ul>
      </nav>

      <Search />
    </div>
  );
}

export default Navigation;
