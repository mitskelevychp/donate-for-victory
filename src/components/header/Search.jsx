import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context";
import { updateInputValue } from "../../redux/actionsCreators/inputValueActionsCreators";
import SearchIcon from "./SearchIcon";
import SearchForm from "./SearchForm";
import HeartFavorite from "./icons/favorites/Heart";
import Cart from "./icons/cart/IconCart";
import styles from "./Header.module.scss";

function Search() {
  const [isLinkVisible, setIsLinkVisible] = useState(true);
  const [inputVisible, setInputVisible] = useState(false);
  const inputValueFromRedux = useSelector(
    (state) => state.inputValue.inputValue
  );
  const [inputValue, setInputValue] = useState(inputValueFromRedux);
  const context = useContext(Context);
  const dispatch = useDispatch();
  const searchContainer = useRef(null);
  const navigate = useNavigate();
  const isLoggedInFromRedux = useSelector((state) => state.auth.isLoggedIn);
  const favoriteCount = useSelector((state) => state.favorites.itemCount);
  const cartCount = useSelector((state) => state.cart.itemCount);

  const handleSearch = () => {
    navigate(`/products-search?query=${inputValue}`);
  };

  const toggleInputVisibility = () => {
    setInputVisible(!inputVisible);
    setIsLinkVisible(inputVisible);
    context.setIsLinkVisible(inputVisible);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (
        searchContainer.current &&
        !searchContainer.current.contains(event.target)
      ) {
        setInputVisible(false);
        setIsLinkVisible(true);
        context.setIsLinkVisible(true);
        // setInputValue("");
      }
    },
    [context]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    setInputValue(inputValueFromRedux);
  }, [inputValueFromRedux]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch(updateInputValue(value));
    setInputValue(value);
  };

  return (
    <div className={isLinkVisible ? styles.search : styles.searchHidden}>
      {isLinkVisible ? (
        <>
          <SearchIcon onClick={toggleInputVisibility} />
          <div className={styles.headerLaptopIcons}>
            {isLoggedInFromRedux ? (
              <div className={styles.navRightSideMenu}>
                <Link to="/favorites">
                  <HeartFavorite />
                </Link>
                {favoriteCount === 0 ? null : <span>{favoriteCount}</span>}
              </div>
            ) : null}
            <div className={styles.navRightSideMenu}>
              <Link to="/cart">
                <Cart />
              </Link>
              {cartCount === 0 ? null : <span>{cartCount}</span>}
            </div>
          </div>
        </>
      ) : (
        <SearchForm
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          ref={searchContainer}
          // isInputVisible={inputVisible}
        />
      )}
    </div>
  );
}

export default Search;
