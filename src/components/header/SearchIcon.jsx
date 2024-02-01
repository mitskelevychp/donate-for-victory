import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";
import { IconSearch } from "./icons/search/IconSearch";

function SearchIcon({ onClick }) {
  return (
    <div
      className={styles.iconSearch}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <IconSearch />
    </div>
  );
}

SearchIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchIcon;
