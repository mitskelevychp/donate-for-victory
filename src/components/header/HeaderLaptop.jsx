// /* eslint-disable react/button-has-type */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import IconEnter from "./icons/enter/IconEnter";
import IconOut from "./icons/enter/IconOut";
import Logo from "./Logo";
import { logOut } from "../../redux/actions/loggedInActions";
import Button from "../button/Button";
import Navigation from "./Navigation";
import { resetCart, resetFavorites } from "../../redux/actions/cartActions";
// import { REGISTRATION_URL } from "../../endpoints/endpoints";
import styles from "./Header.module.scss";

function HeaderLaptop() {
  const isLoggedInFromRedux = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // const updateFavoritesToServer = async (newFavorites) => {
  //   try {
  //     const response = await axios.put(REGISTRATION_URL, {
  //       favorites: newFavorites,
  //     });
  //     return response.data.favorites;
  //   } catch (error) {
  //     console.error("Помилка при оновленні улюблених товарів:", error);
  //     return null;
  //   }
  // };

  const doLogOut = async () => {
    try {
      // const currentFavorites =
      //   JSON.parse(localStorage.getItem("Favorites")) || [];
      // if (currentFavorites.length > 0) {
      //   await updateFavoritesToServer(currentFavorites);
      // }
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
