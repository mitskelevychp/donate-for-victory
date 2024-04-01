import { useState, useEffect } from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderLaptop from "./HeaderLaptop";
import styles from "./Header.module.scss";

function Header() {
  const [isVisible, setIsVisible] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsVisible(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={isVisible ? styles.mobileHeader : styles.headerLaptop}>
        {isVisible ? <HeaderMobile /> : <HeaderLaptop />}
      </div>
    </header>
  );
}

export default Header;
