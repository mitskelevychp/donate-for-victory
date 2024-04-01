// const isCategoryСlothes = searchResults
//     .map((result) => result.category === "Одяг")
//     .includes(true);
//   const isCategoryLots = searchResults
//     .map((result) => result.category === "Благодійний лот")
//     .includes(true);
//   const isSubCategoryThermalСlothes = searchResults
//     .map((result) => result.subcategory === "Термобілизна")
//     .includes(true);
//   const isSubCategoryOuterwear = searchResults
//     .map((result) => result.subcategory === "Одяг верхній")
//     .includes(true);
//   const isSubCategoryFootwear = searchResults
//     .map((result) => result.subcategory === "Взуття")
//     .includes(true);
//   const isSubCategoryCaps = searchResults
//     .map((result) => result.subcategory === "Кепки")
//     .includes(true);
//   const isSubCategoryHats = searchResults
//     .map((result) => result.subcategory === "Шапки")
//     .includes(true);
//   const isSubCategoryFormSets = searchResults
//     .map((result) => result.subcategory === "Комплекти форми")
//     .includes(true);

//   function renderCategoriesLink() {
//     if (isCategoryСlothes) {
//       return (
//         <Link
//           to="/categories/military-clothing"
//           onClick={() => handleResultClick()}
//         >
//           Одяг
//         </Link>
//       );
//     }
//     if (isCategoryLots) {
//       return (
//         <Link
//           to="/categories/charity-auction"
//           onClick={() => handleResultClick()}
//         >
//           Лоти
//         </Link>
//       );
//     }
//     return (
//       <Link to="/categories/donation" onClick={() => handleResultClick()}>
//         Донати
//       </Link>
//     );
//   }

//   function renderSubCategoriesLink() {
//     if (isSubCategoryThermalСlothes) {
//       return (
//         <Link
//           to="/categories?category=Одяг&subcategory=Термобілизна"
//           onClick={() => handleResultClick()}
//         >
//           Вся термобілизна
//         </Link>
//       );
//     }
//     if (isSubCategoryOuterwear) {
//       return (
//         <Link
//           to="/categories?category=Одяг&subcategory=Одяг+верхній"
//           onClick={() => handleResultClick()}
//         >
//           Весь одяг верхній
//         </Link>
//       );
//     }
//     if (isSubCategoryFootwear) {
//       return (
//         <Link
//           to="/categories?category=Одяг&subcategory=Взуття"
//           onClick={() => handleResultClick()}
//         >
//           Все взуття
//         </Link>
//       );
//     }
//     if (isSubCategoryCaps) {
//       return (
//         <Link
//           to="/categories?category=Одяг&subcategory=Кепки"
//           onClick={() => handleResultClick()}
//         >
//           Всі кепки
//         </Link>
//       );
//     }
//     if (isSubCategoryHats) {
//       return (
//         <Link
//           to="/categories?category=Одяг&subcategory=Шапки"
//           onClick={() => handleResultClick()}
//         >
//           Всі шапки
//         </Link>
//       );
//     }
//     if (isSubCategoryFormSets) {
//       return (
//         <Link
//           to="/categories?category=Одяг&subcategory=Комплекти+форми"
//           onClick={() => handleResultClick()}
//         >
//           Всі комплекти форми
//         </Link>
//       );
//     }
//     return null;
//   }
