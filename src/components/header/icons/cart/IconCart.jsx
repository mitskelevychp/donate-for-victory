import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as CartEmpty } from "./cart-empty.svg";
import { ReactComponent as CartFull } from "./cart-full.svg";
import styles from "../../Header.module.scss";

function Cart() {
  // const cartCountFromLocalStorage = JSON.parse(localStorage.getItem("CountCartProducts")) || 0;
  // const isCartEmpty = cartCountFromLocalStorage === 0;

  const cart = useSelector((state) => state.cart.items);
  const isCartEmpty = cart.length === 0;

  return (
    <div className={styles.icon}>
      {isCartEmpty ? (
        <CartEmpty />
      ) : (
        <CartFull />
      )}
    </div>
  );

  // return (
  //   <div className={styles.icon}>
  //     <CartEmpty />
  //   </div>
  // );
}

export default Cart;
