import React, { useState, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { updateInputValue } from "../../redux/actionsCreators/inputValueActionsCreators";
import { GET_SEARCH } from "../../endpoints/endpoints";
import {
  renderCategoriyLink,
  renderSubCategoryLink,
} from "../../scripts/isCategory";
import styles from "./Header.module.scss";

const SearchForm = forwardRef((props, ref) => {
  const [searchResults, setSearchResults] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
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
    try {
      setSearchResults([]);
      setShowInput(false);
    } catch (error) {
      console.error("Error while searching for products:", error);
    }
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

  return (
    <div className={styles.searching} ref={ref}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Пошук..."
          value={inputValue}
          onChange={handleInputChange}
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
                  {renderSubCategoryLink(searchResults, handleResultClick)}
                  {renderCategoriyLink(searchResults, handleResultClick)}
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
