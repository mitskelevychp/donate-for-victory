import React from "react";
import { useSelector, useDispatch } from "react-redux";
import IconEnter from "./icons/enter/IconEnter";
import IconOut from "./icons/enter/IconOut";
import Logo from "./Logo";
import { logOut } from "../../redux/actions/loggedInActions";
import Button from "../button/Button";
import Navigation from "./Navigation";
import { resetCart, resetFavorites } from "../../redux/actions/cartActions";
import styles from "./Header.module.scss";

function HeaderLaptop() {
  const isLoggedInFromRedux = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const doLogOut = async () => {
    try {
      localStorage.removeItem("userLogin");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("CountCartProducts");
      localStorage.removeItem("CountFavoritesProducts");
      localStorage.removeItem("Cart");
      localStorage.removeItem("token");
      localStorage.removeItem("Favorites");
      dispatch(resetCart());
      dispatch(resetFavorites());
      dispatch(logOut());
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  };

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
