import React, {
  useState, useContext, useEffect, useRef, useCallback,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Context from "../Context";
import { updateInputValue } from "../../redux/actionsCreators/inputValueActionsCreators";
import styles from "./Header.module.scss";
import SearchIcon from "./SearchIcon";
import SearchForm from "./SearchForm";


function SearchInHeader() {
  const [isLinkVisible, setIsLinkVisible] = useState(true);
  const [inputVisible, setInputVisible] = useState(false);
  const inputValueFromRedux = useSelector((state) => state.inputValue.inputValue);
  const [inputValue, setInputValue] = useState(inputValueFromRedux);
  const context = useContext(Context);
  const dispatch = useDispatch();
  const searchContainer = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/products-search?query=${inputValue}`);
  };

  const toggleInputVisibility = () => {
    const visibility = !inputVisible;
    setInputVisible(visibility);
    setIsLinkVisible(!visibility);
    context.setIsLinkVisible(!visibility);
  };

  const handleClickOutside = useCallback((event) => {
    if (searchContainer.current && !searchContainer.current.contains(event.target)) {
      setInputVisible(false);
      setIsLinkVisible(true);
      context.setIsLinkVisible(true);
    }
  }, [context]);

  const handleInputDoubleClick = (event) => {
    event.preventDefault();
    setInputValue("");
    setInputVisible(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
    <div
      className={
        isLinkVisible ? styles.hiddenSearchMenu
          : styles.hiddenSearchMenuHidden
        }
      ref={searchContainer}
    >
      {isLinkVisible ? (
        <SearchIcon onClick={toggleInputVisibility} />
      ) : (
        <SearchForm
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          handleInputDoubleClick={handleInputDoubleClick}
        />
      )}
    </div>
  );
}

export default SearchInHeader;
