const menuItems = [
  {
    to: "/",
    text: "Головна",
  },
  {
    to: "/about-us",
    text: "Про нас",
  },
  // {
  //   to: "/categories",
  //   text: "Категорії",
  // },
  {
    to: "/categories/donation",
    text: "Донати на ЗСУ",
  },
  {
    to: "/categories/charity-auction",
    text: "Лоти аукціону",
  },
  {
    to: "/categories/military-clothing",
    text: "Військовий одяг",
  },
  {
    to: "/blog",
    text: "Новини",
  },
];

const subCategories = [
  {
    to: "/categories",
    label: "Всі категорії",
  },
  {
    to: "/categories/donation",
    label: "Донати на ЗСУ",
  },
  {
    to: "/categories/charity-auction",
    label: "Лоти аукціону",
  },
  {
    to: "/categories/military-clothing",
    label: "Військовий одяг",
  },
];

export { menuItems, subCategories };
