import { Link } from "react-router-dom";
import styles from "../components/header/Header.module.scss";

function isCategory(searchResult, category) {
  return searchResult
    .map((result) => result.category === category)
    .includes(true);
}
function isSubCategory(searchResult, subcategory) {
  return searchResult
    .map((result) => result.subcategory === subcategory)
    .includes(true);
}

// create Link for category item in the search results window
export function renderCategoriyLink(searchResults, handleResultClick) {
  if (isCategory(searchResults, "Одяг")) {
    return (
      <li className={styles.searchResultCategories}>
        <Link
          to="/categories/military-clothing"
          onClick={() => handleResultClick()}
        >
          Одяг
        </Link>
      </li>
    );
  }
  if (isCategory(searchResults, "Благодійний лот")) {
    return (
      <li className={styles.searchResultCategories}>
        <Link
          to="/categories/charity-auction"
          onClick={() => handleResultClick()}
        >
          Лоти
        </Link>
      </li>
    );
  }
  return (
    <li className={styles.searchResultCategories}>
      <Link to="/categories/donation" onClick={() => handleResultClick()}>
        Донати
      </Link>
    </li>
  );
}

// create Link for subcategory item in the search results window
export function renderSubCategoryLink(searchResults, handleResultClick) {
  if (isSubCategory(searchResults, "Термобілизна")) {
    return (
      <li className={styles.searchResultCategories}>
        <Link
          to="/categories?category=Одяг&subcategory=Термобілизна"
          onClick={() => handleResultClick()}
        >
          Вся термобілизна
        </Link>
      </li>
    );
  }
  if (isSubCategory(searchResults, "Одяг верхній")) {
    return (
      <li className={styles.searchResultCategories}>
        <Link
          to="/categories?category=Одяг&subcategory=Одяг+верхній"
          onClick={() => handleResultClick()}
        >
          Весь одяг верхній
        </Link>
      </li>
    );
  }
  if (isSubCategory(searchResults, "Взуття")) {
    return (
      <li className={styles.searchResultCategories}>
        <Link
          to="/categories?category=Одяг&subcategory=Взуття"
          onClick={() => handleResultClick()}
        >
          Все взуття
        </Link>
      </li>
    );
  }
  if (isSubCategory(searchResults, "Кепки")) {
    return (
      <li className={styles.searchResultCategories}>
        <Link
          to="/categories?category=Одяг&subcategory=Кепки"
          onClick={() => handleResultClick()}
        >
          Всі кепки
        </Link>
      </li>
    );
  }
  if (isSubCategory(searchResults, "Шапки")) {
    return (
      <li className={styles.searchResultCategories}>
        <Link
          to="/categories?category=Одяг&subcategory=Шапки"
          onClick={() => handleResultClick()}
        >
          Всі шапки
        </Link>
      </li>
    );
  }
  if (isSubCategory(searchResults, "Комплекти форми")) {
    return (
      <li className={styles.searchResultCategories}>
        <Link
          to="/categories?category=Одяг&subcategory=Комплекти+форми"
          onClick={() => handleResultClick()}
        >
          Всі комплекти форми
        </Link>
      </li>
    );
  }
  return null;
}
