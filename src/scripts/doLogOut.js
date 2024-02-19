import store from "../redux/store";
import { logOut } from "../redux/actions/loggedInActions";
import { resetCart, resetFavorites } from "../redux/actions/cartActions";

const doLogOut = async () => {
  try {
    localStorage.removeItem("userLogin");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("CountCartProducts");
    localStorage.removeItem("CountFavoritesProducts");
    localStorage.removeItem("Cart");
    localStorage.removeItem("token");
    localStorage.removeItem("Favorites");
    store.dispatch(resetCart());
    store.dispatch(resetFavorites());
    store.dispatch(logOut());
  } catch (error) {
    console.error("Помилка при виході:", error);
  }
};

export default doLogOut;
