import React, { useState, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { updateInputValue } from "../../redux/actionsCreators/inputValueActionsCreators";
import { GET_SEARCH } from "../../endpoints/endpoints";
import styles from "./Header.module.scss";

const SearchForm = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const inputValueFromRedux = useSelector(
    (state) => state.inputValue.inputValue
  );
  const [inputValue, setInputValue] = useState(inputValueFromRedux);

  const performSearch = async (query) => {
    try {
      const searchPhrases = {
        query,
      };

      const response = await axios.post(GET_SEARCH, searchPhrases);
      const products = response.data;

      setSearchResults(products);

      if (products.length > 0) {
        setShowInput(true);
      } else {
        setShowInput(false);
      }
    } catch (error) {
      console.error("Error while searching for products:", error);
    }
  };

  const handleResultClick = async () => {
    setSearchResults([]);
    setShowInput(false);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch(updateInputValue(value));
    setInputValue(value);

    if (value === "") {
      setSearchResults([]);
      handleResultClick();
    } else {
      performSearch(value);
    }
  };

  const isCategoryСlothes = searchResults
    .map((result) => result.category === "Одяг")
    .includes(true);
  const isCategoryLots = searchResults
    .map((result) => result.category === "Благодійний лот")
    .includes(true);
  const isSubCategoryThermalСlothes = searchResults
    .map((result) => result.subcategory === "Термобілизна")
    .includes(true);
  const isSubCategoryOuterwear = searchResults
    .map((result) => result.subcategory === "Одяг верхній")
    .includes(true);
  const isSubCategoryFootwear = searchResults
    .map((result) => result.subcategory === "Взуття")
    .includes(true);
  const isSubCategoryCaps = searchResults
    .map((result) => result.subcategory === "Кепки")
    .includes(true);
  const isSubCategoryHats = searchResults
    .map((result) => result.subcategory === "Шапки")
    .includes(true);
  const isSubCategoryFormSets = searchResults
    .map((result) => result.subcategory === "Комплекти форми")
    .includes(true);

  function renderCategoriesLink() {
    if (isCategoryСlothes) {
      return (
        <Link
          to="/categories/military-clothing"
          onClick={() => handleResultClick()}
        >
          Одяг
        </Link>
      );
    }
    if (isCategoryLots) {
      return (
        <Link
          to="/categories/charity-auction"
          onClick={() => handleResultClick()}
        >
          Лоти
        </Link>
      );
    }
    return (
      <Link to="/categories/donation" onClick={() => handleResultClick()}>
        Донати
      </Link>
    );
  }

  function renderSubCategoriesLink() {
    if (isSubCategoryThermalСlothes) {
      return (
        <Link
          to="/categories?category=Одяг&subcategory=Термобілизна"
          onClick={() => handleResultClick()}
        >
          Вся термобілизна
        </Link>
      );
    }
    if (isSubCategoryOuterwear) {
      return (
        <Link
          to="/categories?category=Одяг&subcategory=Одяг+верхній"
          onClick={() => handleResultClick()}
        >
          Весь одяг верхній
        </Link>
      );
    }
    if (isSubCategoryFootwear) {
      return (
        <Link
          to="/categories?category=Одяг&subcategory=Взуття"
          onClick={() => handleResultClick()}
        >
          Все взуття
        </Link>
      );
    }
    if (isSubCategoryCaps) {
      return (
        <Link
          to="/categories?category=Одяг&subcategory=Кепки"
          onClick={() => handleResultClick()}
        >
          Всі кепки
        </Link>
      );
    }
    if (isSubCategoryHats) {
      return (
        <Link
          to="/categories?category=Одяг&subcategory=Шапки"
          onClick={() => handleResultClick()}
        >
          Всі шапки
        </Link>
      );
    }
    if (isSubCategoryFormSets) {
      return (
        <Link
          to="/categories?category=Одяг&subcategory=Комплекти+форми"
          onClick={() => handleResultClick()}
        >
          Всі комплекти форми
        </Link>
      );
    }
    return null;
  }

  return (
    <div className={styles.searching} ref={ref}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Пошук..."
          value={inputValue}
          onChange={handleInputChange}
          // ref={ref}
        />
        {showInput && (
          <div className={styles.searchResults}>
            <ul>
              {searchResults.length > 0 &&
                inputValue !== "" &&
                searchResults.map((result) => (
                  <li className={styles.searchResultItem} key={result.id}>
                    <Link
                      to={`/product/${result.itemNo}`}
                      key={result.id}
                      onClick={() => handleResultClick()}
                    >
                      {result.shortName}
                    </Link>
                  </li>
                ))}
              {searchResults.length > 0 && inputValue !== "" && (
                <>
                  <li className={styles.searchResultCategories}>
                    {renderSubCategoriesLink()}
                  </li>
                  <li className={styles.searchResultCategories}>
                    {renderCategoriesLink()}
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});

export default SearchForm;
