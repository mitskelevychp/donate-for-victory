import React from "react";
import PropTypes from "prop-types";
import { IconSearch } from "./icons/search/IconSearch";
import styles from "./Header.module.scss";

function SearchIcon({ onClick }) {
  return (
    <button type="button" className={styles.iconSearch} onClick={onClick}>
      <IconSearch />
    </button>
  );
}

SearchIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchIcon;
