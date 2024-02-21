import React, { useContext } from "react";
import Context from "../Context";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import Search from "./Search";

function HeaderMobile() {
  const context = useContext(Context);

  return (
    <>
      <BurgerMenu />
      <Logo isVisible={context.isLinkVisible} isMobile />
      <Search />
    </>
  );
}

export default HeaderMobile;
