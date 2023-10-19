import "../../assets/sass/Home/header.scss";
import { useState } from "react";
import MainBar from "./mainBar";
import TabsBar from "./tabsBar";

//////////////////////////////////////////////////////////////////

const Header = () => {
  return (
    <div>
      <MainBar />
      <TabsBar />
    </div>
  );
};
export default Header;
